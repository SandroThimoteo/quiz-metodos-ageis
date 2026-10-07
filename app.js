(function () {
  'use strict';

  // ---------- Utilidades ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const LETRAS = 'ABCDEFGH';
  const ID_VALIDO = /^[a-z0-9-]+$/;
  const movReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n) => n.toFixed(1).replace('.', ',');

  // localStorage pode falhar (aba anônima, bloqueio de dados): sempre em try/catch.
  const LS = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* sem armazenamento */ } }
  };
  const CHAVE_DISS = 'qma-dissertativas';
  const CHAVE_ORDEM = 'qma-ordem';
  const chaveRascunho = (id) => 'qma-rascunho-' + id;

  const RESUMO = window.RESUMO || [];
  const OBJ = window.OBJETIVAS || [];
  const DISS = window.DISSERTATIVAS || [];

  const painel = {
    resumo: $('#painel-resumo'),
    objetivas: $('#painel-objetivas'),
    dissertativas: $('#painel-dissertativas')
  };

  const estado = {
    aba: 'resumo',
    filtro: 'todos',     // 'todos' ou número do tema ('01'…'07')
    modo: 'tema',        // 'tema' = agrupa por tema; 'misturado' = todos os temas misturados
    ordemTemas: [],      // ordem dos temas escolhida pelo usuário
    temasAbertos: false, // painel "Ordem dos temas" aberto?
    aviso: '',           // mensagem curta após embaralhar/reordenar
    seqObj: OBJ.map((q) => q.id),   // sequência sorteada das objetivas
    seqDiss: DISS.map((d) => d.id), // sequência sorteada das dissertativas
    posObj: {},          // id -> número exibido ("Questão N")
    posDiss: {},
    ordem: {},           // id da questão -> ordem de exibição das alternativas (índices originais)
    respostas: {},       // id da questão -> índice original escolhido
    diss: {},            // id -> { revelada, pontos: [bool], av: 'acertei' | 'parcial' | 'errei' | null }
    rascunhos: {},       // id -> texto (cópia em memória do rascunho)
    origem: null         // { aba, elId, rotulo } para o botão "Voltar"
  };

  // ---------- Estado persistido das dissertativas ----------
  function carregarDiss() {
    let salvo = {};
    try { salvo = JSON.parse(LS.get(CHAVE_DISS) || '{}') || {}; } catch (e) { salvo = {}; }
    DISS.forEach((d) => {
      const s = salvo[d.id] || {};
      estado.diss[d.id] = {
        revelada: !!s.revelada,
        pontos: d.pontosChave.map((_, i) => !!(s.pontos && s.pontos[i])),
        av: ['acertei', 'parcial', 'errei'].includes(s.av) ? s.av : null
      };
      estado.rascunhos[d.id] = LS.get(chaveRascunho(d.id)) || '';
    });
  }
  function salvarDiss() { LS.set(CHAVE_DISS, JSON.stringify(estado.diss)); }

  // ---------- Ordem das questões e dos temas ----------
  const temaDe = (item) => item.bloco.slice(0, 2);
  const TEMAS_PADRAO = [...new Set(OBJ.map(temaDe).concat(DISS.map(temaDe)))].sort();
  const nomeTema = (t) => { const b = RESUMO.find((x) => x.num === t); return b ? b.titulo : t; };

  function embaralharArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Sorteia uma ordem diferente da atual (quando há mais de um item).
  function sortearDiferente(atual) {
    if (atual.length < 2) return atual.slice();
    let nova;
    do { nova = embaralharArray(atual); } while (nova.every((x, i) => x === atual[i]));
    return nova;
  }

  function carregarOrdem() {
    let s = {};
    try { s = JSON.parse(LS.get(CHAVE_ORDEM) || '{}') || {}; } catch (e) { s = {}; }
    estado.modo = s.modo === 'misturado' ? 'misturado' : 'tema';
    const salvos = Array.isArray(s.temas) ? s.temas.filter((t) => TEMAS_PADRAO.includes(t)) : [];
    estado.ordemTemas = salvos.length === TEMAS_PADRAO.length && new Set(salvos).size === salvos.length
      ? salvos : TEMAS_PADRAO.slice();
  }
  function salvarOrdem() { LS.set(CHAVE_ORDEM, JSON.stringify({ modo: estado.modo, temas: estado.ordemTemas })); }

  // No modo "tema", agrupa pelos temas na ordem escolhida; dentro de cada tema
  // (ou na lista toda, no modo "misturado") segue a sequência sorteada.
  function ordenar(lista, seq) {
    const pos = new Map(seq.map((id, i) => [id, i]));
    return lista.slice().sort((a, b) => {
      if (estado.modo === 'tema') {
        const d = estado.ordemTemas.indexOf(temaDe(a)) - estado.ordemTemas.indexOf(temaDe(b));
        if (d) return d;
      }
      return pos.get(a.id) - pos.get(b.id);
    });
  }

  function embaralharObjetivas() {
    estado.seqObj = sortearDiferente(estado.seqObj);
    OBJ.forEach((q) => { estado.ordem[q.id] = embaralharArray(q.alternativas.map((_, i) => i)); });
  }
  function embaralharDissertativas() { estado.seqDiss = sortearDiferente(estado.seqDiss); }

  function moverTema(t, delta) {
    const i = estado.ordemTemas.indexOf(t);
    const j = i + delta;
    if (i < 0 || j < 0 || j >= estado.ordemTemas.length) return;
    const nova = estado.ordemTemas.slice();
    [nova[i], nova[j]] = [nova[j], nova[i]];
    estado.ordemTemas = nova;
  }

  function controlesOrdem(aba) {
    const ultimo = estado.ordemTemas.length - 1;
    const temas = estado.ordemTemas.map((t, i) => `<li>
        <span class="num">${t}</span><span class="tema-nome">${esc(nomeTema(t))}</span>
        <button type="button" class="mini" data-acao="tema-subir" data-tema="${t}" aria-label="Subir o tema ${esc(nomeTema(t))}" ${i === 0 ? 'disabled' : ''}>↑</button>
        <button type="button" class="mini" data-acao="tema-descer" data-tema="${t}" aria-label="Descer o tema ${esc(nomeTema(t))}" ${i === ultimo ? 'disabled' : ''}>↓</button>
      </li>`).join('');
    const modoChip = (valor, texto) =>
      `<button type="button" class="chip" data-acao="modo" data-modo="${valor}" aria-pressed="${estado.modo === valor}">${texto}</button>`;

    return `<div class="ordem-controles">
      <div class="barra-filtros">
        <button type="button" class="chip chip-forte" data-acao="embaralhar">Embaralhar</button>
        <button type="button" class="chip" data-acao="ordem-original">Ordem original</button>
        <span class="espaco"></span>
        <span class="grupo-modo" role="group" aria-label="Organização das questões">
          ${modoChip('tema', 'Agrupar por tema')}${modoChip('misturado', 'Misturar temas')}
        </span>
      </div>
      <details class="temas"${estado.temasAbertos ? ' open' : ''}>
        <summary>Ordem dos temas</summary>
        ${estado.modo === 'misturado' ? '<p class="nota-temas">No modo "Misturar temas" a ordem dos temas não é usada. Ao mexer nela, o quiz volta para "Agrupar por tema".</p>' : ''}
        <ol class="lista-temas">${temas}</ol>
        <div class="acoes">
          <button type="button" class="chip" data-acao="temas-sortear">Sortear ordem dos temas</button>
          <button type="button" class="chip" data-acao="temas-padrao">Ordem padrão (01 → 07)</button>
        </div>
      </details>
      <p class="aviso" role="status">${esc(estado.aviso)}</p>
    </div>`;
  }

  // ---------- Topo fixo ----------
  function medirTopo() {
    document.documentElement.style.setProperty('--topo', $('#topo-fixo').offsetHeight + 'px');
  }

  function rolarAte(el) {
    medirTopo();
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: movReduzido.matches ? 'auto' : 'smooth', block: 'start' });
    });
  }

  const timersDestaque = new WeakMap();
  function destacar(el) {
    clearTimeout(timersDestaque.get(el));
    el.classList.remove('destaque');
    void el.offsetWidth; // reinicia a animação
    el.classList.add('destaque');
    timersDestaque.set(el, setTimeout(() => el.classList.remove('destaque'), 2500));
  }

  function definirHash(h) {
    const url = location.pathname + location.search + (h ? '#' + h : '');
    try { history.replaceState(null, '', url); } catch (e) { /* file:// em alguns navegadores */ }
  }

  // ---------- Abas ----------
  function mostrarAba(nome, opcoes = {}) {
    estado.aba = nome;
    $$('.aba').forEach((b) => {
      const ativa = b.dataset.aba === nome;
      b.setAttribute('aria-selected', String(ativa));
      b.tabIndex = ativa ? 0 : -1;
    });
    Object.entries(painel).forEach(([k, p]) => { p.hidden = k !== nome; });
    $('#placar').hidden = nome === 'resumo';
    atualizarPlacar();
    medirTopo();
    if (opcoes.manual) {
      esconderVoltar();
      definirHash(nome === 'resumo' ? '' : nome);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  $('.abas').addEventListener('click', (e) => {
    const b = e.target.closest('.aba');
    if (b) mostrarAba(b.dataset.aba, { manual: true });
  });
  $('.abas').addEventListener('keydown', (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    const abas = $$('.aba');
    let i = abas.indexOf(document.activeElement);
    if (i < 0) return;
    if (e.key === 'ArrowLeft') i = (i - 1 + abas.length) % abas.length;
    if (e.key === 'ArrowRight') i = (i + 1) % abas.length;
    if (e.key === 'Home') i = 0;
    if (e.key === 'End') i = abas.length - 1;
    e.preventDefault();
    abas[i].focus();
    mostrarAba(abas[i].dataset.aba, { manual: true });
  });

  // ---------- Link "Ver no resumo" e botão "Voltar" ----------
  function irParaResumo(ancora, origem) {
    if (!ID_VALIDO.test(ancora)) return false;
    const alvo = document.getElementById(ancora);
    if (!alvo || !painel.resumo.contains(alvo)) return false;
    mostrarAba('resumo');
    estado.origem = origem || null;
    atualizarVoltar();
    definirHash(ancora);
    rolarAte(alvo);
    destacar(alvo);
    alvo.focus({ preventScroll: true });
    return true;
  }

  function atualizarVoltar() {
    const btn = $('#btn-voltar');
    if (estado.origem) {
      btn.textContent = '← Voltar para a questão ' + estado.origem.rotulo;
      btn.hidden = false;
    } else {
      btn.hidden = true;
    }
  }
  function esconderVoltar() { estado.origem = null; atualizarVoltar(); }

  $('#btn-voltar').addEventListener('click', () => {
    const o = estado.origem;
    if (!o) return;
    esconderVoltar();
    mostrarAba(o.aba);
    definirHash(o.aba);
    const el = document.getElementById(o.elId);
    if (el) {
      rolarAte(el);
      el.focus({ preventScroll: true });
    }
  });

  function linkResumo(ancora, aba, elId, rotulo) {
    return `<a class="link-resumo" href="#${esc(ancora)}" data-ancora="${esc(ancora)}"` +
      ` data-origem-aba="${aba}" data-origem-el="${esc(elId)}" data-origem-rotulo="${esc(rotulo)}">Ver no resumo →</a>`;
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-ancora]');
    if (!a) return;
    e.preventDefault();
    const origem = a.dataset.origemAba
      ? { aba: a.dataset.origemAba, elId: a.dataset.origemEl, rotulo: a.dataset.origemRotulo }
      : null;
    irParaResumo(a.dataset.ancora, origem);
  });

  // ---------- Resumo ----------
  function renderResumo() {
    const sumario = `<nav class="sumario" aria-label="Sumário do resumo"><h2>Sumário</h2><ol>` +
      RESUMO.map((b) => `<li><a href="#${b.id}" data-ancora="${b.id}">` +
        (b.num ? `<span class="num">${b.num}</span>` : '') + `${esc(b.titulo)}</a></li>`).join('') +
      `</ol></nav>`;

    const blocos = RESUMO.map((b) => `
      <article class="bloco">
        <h2 class="bloco-titulo" id="${b.id}" tabindex="-1">${b.num ? `<span class="num">${b.num}</span>` : ''}${esc(b.titulo)}</h2>
        ${b.secoes.map((s) => `
          <section class="secao" id="${s.id}" tabindex="-1" aria-labelledby="${s.id}-t">
            <h3 id="${s.id}-t">${esc(s.titulo)}</h3>
            ${s.html}
            ${s.pegadinha ? `<div class="pegadinha"><strong>Pegadinha:</strong> ${s.pegadinha}</div>` : ''}
          </section>`).join('')}
      </article>`).join('');

    painel.resumo.innerHTML = sumario + blocos;
  }

  // ---------- Objetivas ----------
  function ordemDe(q) {
    return estado.ordem[q.id] || q.alternativas.map((_, i) => i);
  }

  function cartaoObjetiva(q) {
    const resp = estado.respostas[q.id];
    const respondida = resp !== undefined;
    const ordem = ordemDe(q);
    const elId = 'q-' + q.id;
    const n = estado.posObj[q.id];

    const alts = ordem.map((orig, pos) => {
      const alt = q.alternativas[orig];
      let cls = '';
      if (respondida) {
        if (alt.correta) cls = 'certa';
        else if (orig === resp) cls = 'errada';
        else cls = 'apagada';
      }
      return `<li><button type="button" class="alt ${cls}" data-q="${q.id}" data-i="${orig}" ${respondida ? 'disabled' : ''}>
        <span class="letra" aria-hidden="true">${LETRAS[pos]}</span><span>${esc(alt.texto)}</span></button></li>`;
    }).join('');

    let explicacoes = '';
    if (respondida) {
      const acertou = q.alternativas[resp].correta;
      explicacoes = `<div class="explicacoes" tabindex="-1">
        <p role="status" class="${acertou ? 'e-certa' : 'e-errada'}"><strong class="rotulo">${acertou ? 'Você acertou!' : 'Resposta errada.'}</strong></p>
        ${ordem.map((orig, pos) => {
          const alt = q.alternativas[orig];
          return `<div class="explicacao ${alt.correta ? 'e-certa' : 'e-errada'}">
            <span class="rotulo">${alt.correta ? 'Correta' : 'Errada'}</span><strong>${LETRAS[pos]})</strong>
            ${esc(alt.explicacao)}
            ${orig === resp ? '<span class="escolhida">(sua resposta)</span>' : ''}
            ${linkResumo(alt.ancora, 'objetivas', elId, String(n))}
          </div>`;
        }).join('')}
      </div>`;
    }

    return `<article class="questao" id="${elId}" tabindex="-1" aria-labelledby="${elId}-e">
      <div class="questao-meta"><span>Questão ${n} de ${OBJ.length}</span><span class="etiqueta">${esc(q.bloco)}</span></div>
      <p class="enunciado" id="${elId}-e">${esc(q.enunciado)}</p>
      <ol class="alternativas" aria-label="Alternativas">${alts}</ol>
      ${explicacoes}
    </article>`;
  }

  function cartaoResultado() {
    const total = OBJ.length;
    const respondidas = Object.keys(estado.respostas).length;
    if (respondidas < total) return '';
    const acertos = contarAcertos();
    return `<article class="questao resultado" id="resultado-objetivas">
      <p>Você terminou as ${total} objetivas e acertou ${acertos}.</p>
      <p class="grande">${fmt((acertos / total) * 10)} / 10</p>
      <button type="button" class="botao" data-acao="refazer">Refazer (com perguntas em nova ordem)</button>
    </article>`;
  }

  function renderObjetivas() {
    const ordenadas = ordenar(OBJ, estado.seqObj);
    estado.posObj = {};
    ordenadas.forEach((q, i) => { estado.posObj[q.id] = i + 1; });

    const temasComQuestoes = estado.ordemTemas.filter((t) => OBJ.some((q) => temaDe(q) === t));
    const chips = [`<button type="button" class="chip" data-filtro="todos" aria-pressed="${estado.filtro === 'todos'}">Todos</button>`]
      .concat(temasComQuestoes.map((t) => `<button type="button" class="chip" data-filtro="${t}" aria-pressed="${estado.filtro === t}" title="${esc(nomeTema(t))}" aria-label="Tema ${t}: ${esc(nomeTema(t))}">${t}</button>`))
      .join('');

    const visiveis = ordenadas.filter((q) => estado.filtro === 'todos' || temaDe(q) === estado.filtro);

    painel.objetivas.innerHTML = `
      ${controlesOrdem('objetivas')}
      <div class="barra-filtros" role="group" aria-label="Filtrar por tema">${chips}</div>
      <div id="lista-objetivas">${visiveis.map(cartaoObjetiva).join('')}</div>
      <div id="resultado-wrap">${cartaoResultado()}</div>`;
  }

  function contarAcertos() {
    return OBJ.reduce((n, q) => n + (estado.respostas[q.id] !== undefined && q.alternativas[estado.respostas[q.id]].correta ? 1 : 0), 0);
  }

  function responder(qid, i) {
    if (estado.respostas[qid] !== undefined) return;
    const q = OBJ.find((x) => x.id === qid);
    if (!q) return;
    estado.respostas[qid] = i;
    const el = document.getElementById('q-' + qid);
    el.outerHTML = cartaoObjetiva(q);
    const novo = document.getElementById('q-' + qid);
    const exp = $('.explicacoes', novo);
    if (exp) exp.focus({ preventScroll: true });
    $('#resultado-wrap').innerHTML = cartaoResultado();
    atualizarPlacar();
  }

  painel.objetivas.addEventListener('click', (e) => {
    const alt = e.target.closest('.alt');
    if (alt && !alt.disabled) {
      responder(Number(alt.dataset.q), Number(alt.dataset.i));
      return;
    }
    const chip = e.target.closest('[data-filtro]');
    if (chip) {
      estado.filtro = chip.dataset.filtro;
      renderObjetivas();
      const novo = $(`#painel-objetivas [data-filtro="${estado.filtro}"]`);
      if (novo) novo.focus({ preventScroll: true });
    }
  });

  // ---------- Dissertativas ----------
  const PESO = { acertei: 1, parcial: 0.5, errei: 0 };

  function cartaoDissertativa(d) {
    const s = estado.diss[d.id];
    const n = estado.posDiss[d.id];
    const elId = 'd-' + d.id;
    const rotulo = d.id;
    const avBtn = (valor, texto) =>
      `<button type="button" class="botao av av-${valor}" data-av="${valor}" data-d="${d.id}" aria-pressed="${s.av === valor}">${texto}</button>`;

    const revelado = s.revelada ? `
      <div class="modelo">
        <h4>Resposta modelo</h4>
        <p>${esc(d.respostaModelo)}</p>
      </div>
      <p class="enunciado" style="margin:14px 0 0">Pontos-chave: marque os que você cobriu</p>
      <ul class="pontos">
        ${d.pontosChave.map((p, i) => `<li>
          <label><input type="checkbox" data-ponto="${d.id}" data-i="${i}" ${s.pontos[i] ? 'checked' : ''}> ${esc(p.texto)}</label>
          ${linkResumo(p.ancora, 'dissertativas', elId, rotulo)}
        </li>`).join('')}
      </ul>
      <div class="autoavaliacao" role="group" aria-label="Autoavaliação de ${d.id}">
        <p>Como foi sua resposta?</p>
        <div class="acoes">${avBtn('acertei', 'Acertei')}${avBtn('parcial', 'Parcial')}${avBtn('errei', 'Errei')}</div>
      </div>` : '';

    return `<article class="questao" id="${elId}" tabindex="-1" aria-labelledby="${elId}-e">
      <div class="questao-meta"><span>Dissertativa ${n} de ${DISS.length} · ${d.id}</span><span class="etiqueta">${esc(d.bloco)}</span></div>
      <p class="enunciado" id="${elId}-e">${esc(d.enunciado)}</p>
      <label class="sr-only" for="resp-${d.id}">Sua resposta para ${d.id}</label>
      <textarea id="resp-${d.id}" data-rascunho="${d.id}" placeholder="Escreva sua resposta aqui…">${esc(estado.rascunhos[d.id])}</textarea>
      <div class="acoes">
        <button type="button" class="botao ${s.revelada ? 'botao-secundario' : ''}" data-ver="${d.id}" aria-expanded="${s.revelada}">${s.revelada ? 'Ocultar resposta' : 'Ver resposta'}</button>
        <span class="salvo" id="salvo-${d.id}" aria-live="polite"></span>
      </div>
      ${revelado}
    </article>`;
  }

  function renderDissertativas() {
    const ordenadas = ordenar(DISS, estado.seqDiss);
    estado.posDiss = {};
    ordenadas.forEach((d, i) => { estado.posDiss[d.id] = i + 1; });
    painel.dissertativas.innerHTML =
      controlesOrdem('dissertativas') +
      `<p class="salvo">Seu rascunho fica salvo neste navegador. Depois de ver a resposta, marque os pontos-chave e faça a autoavaliação (Acertei = 1, Parcial = 0,5, Errei = 0).</p>` +
      ordenadas.map(cartaoDissertativa).join('');
  }

  function rerenderDiss(id) {
    const d = DISS.find((x) => x.id === id);
    document.getElementById('d-' + id).outerHTML = cartaoDissertativa(d);
  }

  const timersRascunho = {};
  painel.dissertativas.addEventListener('input', (e) => {
    const t = e.target.closest('textarea[data-rascunho]');
    if (!t) return;
    const id = t.dataset.rascunho;
    estado.rascunhos[id] = t.value;
    clearTimeout(timersRascunho[id]);
    timersRascunho[id] = setTimeout(() => {
      const ok = LS.set(chaveRascunho(id), t.value);
      const aviso = document.getElementById('salvo-' + id);
      if (aviso) aviso.textContent = ok ? 'Rascunho salvo' : '';
    }, 400);
  });

  painel.dissertativas.addEventListener('change', (e) => {
    const c = e.target.closest('input[data-ponto]');
    if (!c) return;
    estado.diss[c.dataset.ponto].pontos[Number(c.dataset.i)] = c.checked;
    salvarDiss();
  });

  painel.dissertativas.addEventListener('click', (e) => {
    const ver = e.target.closest('[data-ver]');
    if (ver) {
      const id = ver.dataset.ver;
      estado.diss[id].revelada = !estado.diss[id].revelada;
      salvarDiss();
      rerenderDiss(id);
      const btn = $(`[data-ver="${id}"]`);
      if (btn) btn.focus();
      return;
    }
    const av = e.target.closest('[data-av]');
    if (av) {
      const id = av.dataset.d;
      const s = estado.diss[id];
      s.av = s.av === av.dataset.av ? null : av.dataset.av; // clicar de novo desmarca
      salvarDiss();
      $$(`[data-av][data-d="${id}"]`).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.av === s.av)));
      atualizarPlacar();
    }
  });

  // ---------- Ações de ordem (Embaralhar, modo, temas, Refazer) ----------
  function renderQuestoes() {
    renderObjetivas();
    renderDissertativas();
    estado.aviso = '';
  }

  // Devolve o foco ao botão equivalente depois de redesenhar o painel.
  function restaurarFoco(b) {
    let sel = `#painel-${estado.aba} [data-acao="${b.dataset.acao}"]`;
    if (b.dataset.tema) sel += `[data-tema="${b.dataset.tema}"]`;
    if (b.dataset.modo) sel += `[data-modo="${b.dataset.modo}"]`;
    let novo = $(sel);
    if (novo && novo.disabled) novo = novo.parentElement.querySelector('button:not(:disabled)');
    if (novo) novo.focus({ preventScroll: true });
  }

  $('main').addEventListener('click', (e) => {
    const b = e.target.closest('[data-acao]');
    if (!b) return;
    const aba = estado.aba;

    switch (b.dataset.acao) {
      case 'refazer':
        refazer();
        return;
      case 'embaralhar':
        if (aba === 'objetivas') embaralharObjetivas(); else embaralharDissertativas();
        estado.aviso = estado.modo === 'tema'
          ? 'Perguntas embaralhadas dentro de cada tema.'
          : 'Perguntas embaralhadas.';
        break;
      case 'ordem-original':
        if (aba === 'objetivas') { estado.seqObj = OBJ.map((q) => q.id); estado.ordem = {}; }
        else estado.seqDiss = DISS.map((d) => d.id);
        estado.aviso = 'Perguntas na ordem original.';
        break;
      case 'modo':
        estado.modo = b.dataset.modo === 'misturado' ? 'misturado' : 'tema';
        salvarOrdem();
        estado.aviso = estado.modo === 'tema' ? 'Questões agrupadas por tema.' : 'Temas misturados.';
        break;
      case 'tema-subir':
      case 'tema-descer':
        moverTema(b.dataset.tema, b.dataset.acao === 'tema-subir' ? -1 : 1);
        estado.modo = 'tema';
        salvarOrdem();
        estado.aviso = `Tema ${b.dataset.tema} agora é o ${estado.ordemTemas.indexOf(b.dataset.tema) + 1}º.`;
        break;
      case 'temas-sortear':
        estado.ordemTemas = sortearDiferente(estado.ordemTemas);
        estado.modo = 'tema';
        salvarOrdem();
        estado.aviso = 'Nova ordem dos temas: ' + estado.ordemTemas.join(', ') + '.';
        break;
      case 'temas-padrao':
        estado.ordemTemas = TEMAS_PADRAO.slice();
        estado.modo = 'tema';
        salvarOrdem();
        estado.aviso = 'Temas na ordem padrão.';
        break;
      default:
        return;
    }
    renderQuestoes();
    restaurarFoco(b);
  });

  // Lembra se o painel "Ordem dos temas" está aberto ("toggle" não borbulha: usa captura).
  $('main').addEventListener('toggle', (e) => {
    if (e.target.matches && e.target.matches('details.temas')) {
      estado.temasAbertos = e.target.open;
      $$('details.temas').forEach((d) => { if (d !== e.target) d.open = e.target.open; });
    }
  }, true);

  // ---------- Placar ----------
  function atualizarPlacar() {
    const texto = $('#placar-texto');
    const nota = $('#placar-nota');
    const barra = $('#barra');
    let feitas = 0, total = 1, notaFinal = null;

    if (estado.aba === 'objetivas') {
      total = OBJ.length;
      feitas = Object.keys(estado.respostas).length;
      const acertos = contarAcertos();
      texto.textContent = `${acertos} acertos · ${feitas}/${total}`;
      if (feitas === total) notaFinal = (acertos / total) * 10;
    } else if (estado.aba === 'dissertativas') {
      total = DISS.length;
      const avaliadas = DISS.filter((d) => estado.diss[d.id].av);
      feitas = avaliadas.length;
      const soma = avaliadas.reduce((n, d) => n + PESO[estado.diss[d.id].av], 0);
      texto.textContent = `${fmt(soma)} pts · ${feitas}/${total}`;
      if (feitas === total) notaFinal = (soma / total) * 10;
    } else {
      return;
    }

    const pct = Math.round((feitas / total) * 100);
    $('#barra-preenchida').style.width = pct + '%';
    barra.setAttribute('aria-valuenow', String(pct));
    barra.setAttribute('aria-valuetext', `${feitas} de ${total}`);
    nota.hidden = notaFinal === null;
    if (notaFinal !== null) nota.textContent = `Nota: ${fmt(notaFinal)} / 10`;
  }

  // ---------- Refazer: zera e sorteia nova ordem das perguntas ----------
  function refazer() {
    if (estado.aba === 'objetivas') {
      estado.respostas = {};
      embaralharObjetivas();
      estado.aviso = 'Novo teste: perguntas em nova ordem.';
      renderObjetivas();
      estado.aviso = '';
    } else if (estado.aba === 'dissertativas') {
      const temTexto = DISS.some((d) => estado.rascunhos[d.id].trim());
      if (temTexto && !window.confirm('Apagar suas respostas escritas e a autoavaliação?')) return;
      DISS.forEach((d) => {
        estado.diss[d.id] = { revelada: false, pontos: d.pontosChave.map(() => false), av: null };
        estado.rascunhos[d.id] = '';
        LS.del(chaveRascunho(d.id));
      });
      salvarDiss();
      embaralharDissertativas();
      estado.aviso = 'Novo teste: perguntas em nova ordem.';
      renderDissertativas();
      estado.aviso = '';
    }
    atualizarPlacar();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  $('#btn-refazer').addEventListener('click', refazer);

  // ---------- Verificação de dados (rode verificarDados() no console) ----------
  function verificarDados() {
    const problemas = [];
    OBJ.forEach((q) => {
      const corretas = q.alternativas.filter((a) => a.correta).length;
      if (corretas !== 1) problemas.push(`Q${q.id}: ${corretas} alternativas corretas`);
      q.alternativas.forEach((a, i) => {
        if (!ID_VALIDO.test(a.ancora) || !document.getElementById(a.ancora)) problemas.push(`Q${q.id} ${LETRAS[i]}: âncora quebrada "${a.ancora}"`);
      });
    });
    DISS.forEach((d) => d.pontosChave.forEach((p, i) => {
      if (!ID_VALIDO.test(p.ancora) || !document.getElementById(p.ancora)) problemas.push(`${d.id} ponto ${i + 1}: âncora quebrada "${p.ancora}"`);
    }));
    if (problemas.length) console.warn('Problemas nos dados do quiz:\n' + problemas.join('\n'));
    else console.info(`Dados OK: ${OBJ.length} objetivas, ${DISS.length} dissertativas, todas as âncoras existem.`);
    return problemas;
  }
  window.verificarDados = verificarDados;

  // ---------- Hash da URL ----------
  function aplicarHash() {
    let h = '';
    try { h = decodeURIComponent(location.hash.slice(1)); } catch (e) { h = ''; }
    if (h === 'objetivas' || h === 'dissertativas') { mostrarAba(h); return; }
    if (h && irParaResumo(h)) return;
    mostrarAba('resumo');
  }
  window.addEventListener('hashchange', aplicarHash);
  window.addEventListener('resize', medirTopo);

  // ---------- Início ----------
  carregarDiss();
  carregarOrdem();
  renderResumo();
  renderQuestoes();
  verificarDados();
  aplicarHash();
})();
