(function () {
  'use strict';

  // ---------- Utilidades ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const LETRAS = 'ABCDEFGH';
  const ID_VALIDO = /^[a-z0-9-]+$/;
  const ABAS = ['resumo', 'objetivas', 'dissertativas'];
  const movReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n) => n.toFixed(1).replace('.', ',');

  // localStorage pode falhar (aba anônima, bloqueio de dados): sempre em try/catch.
  const LS = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* sem armazenamento */ } }
  };

  const painel = {
    inicio: $('#painel-inicio'),
    resumo: $('#painel-resumo'),
    objetivas: $('#painel-objetivas'),
    dissertativas: $('#painel-dissertativas')
  };

  const temaDe = (item) => item.bloco.slice(0, 2);

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

  // ---------- Matérias: cada uma tem seu próprio contexto (dados, progresso, ordem) ----------
  const MATERIAS = Object.values(window.MATERIAS || {}).filter((m) => m.resumo && m.objetivas && m.dissertativas);

  function criarContexto(M) {
    const ids = new Set();
    M.resumo.forEach((b) => { ids.add(b.id); b.secoes.forEach((s) => ids.add(s.id)); });
    const C = {
      M,
      id: M.id,
      RESUMO: M.resumo,
      OBJ: M.objetivas,
      DISS: M.dissertativas,
      ids,
      TEMAS_PADRAO: [...new Set(M.objetivas.map(temaDe).concat(M.dissertativas.map(temaDe)))].sort(),
      chave: {
        diss: M.prefixo + '-dissertativas',
        ordem: M.prefixo + '-ordem',
        rascunho: (id) => M.prefixo + '-rascunho-' + id
      },
      filtro: 'todos',     // 'todos' ou número do tema ('01'…)
      modo: 'tema',        // 'tema' = agrupa por tema; 'misturado' = temas misturados
      ordemTemas: [],
      temasAbertos: false,
      aviso: '',
      seqObj: M.objetivas.map((q) => q.id),
      seqDiss: M.dissertativas.map((d) => d.id),
      posObj: {},
      posDiss: {},
      ordem: {},           // id da questão -> ordem de exibição das alternativas
      respostas: {},       // id da questão -> índice original escolhido
      diss: {},            // id -> { revelada, pontos: [bool], av }
      rascunhos: {}
    };
    carregarDiss(C);
    carregarOrdem(C);
    return C;
  }

  function carregarDiss(C) {
    let salvo = {};
    try { salvo = JSON.parse(LS.get(C.chave.diss) || '{}') || {}; } catch (e) { salvo = {}; }
    C.DISS.forEach((d) => {
      const s = salvo[d.id] || {};
      C.diss[d.id] = {
        revelada: !!s.revelada,
        pontos: d.pontosChave.map((_, i) => !!(s.pontos && s.pontos[i])),
        av: ['acertei', 'parcial', 'errei'].includes(s.av) ? s.av : null
      };
      C.rascunhos[d.id] = LS.get(C.chave.rascunho(d.id)) || '';
    });
  }
  function salvarDiss() { LS.set(C.chave.diss, JSON.stringify(C.diss)); }

  function carregarOrdem(C) {
    let s = {};
    try { s = JSON.parse(LS.get(C.chave.ordem) || '{}') || {}; } catch (e) { s = {}; }
    C.modo = s.modo === 'misturado' ? 'misturado' : 'tema';
    const salvos = Array.isArray(s.temas) ? s.temas.filter((t) => C.TEMAS_PADRAO.includes(t)) : [];
    C.ordemTemas = salvos.length === C.TEMAS_PADRAO.length && new Set(salvos).size === salvos.length
      ? salvos : C.TEMAS_PADRAO.slice();
  }
  function salvarOrdem() { LS.set(C.chave.ordem, JSON.stringify({ modo: C.modo, temas: C.ordemTemas })); }

  const CONTEXTOS = {};
  MATERIAS.forEach((M) => { CONTEXTOS[M.id] = criarContexto(M); });

  let C = null;                              // contexto da matéria aberta
  const G = { aba: 'inicio', origem: null }; // estado global da navegação

  const nomeTema = (t) => { const b = C.RESUMO.find((x) => x.num === t); return b ? b.titulo : t; };

  // ---------- Ordem das questões e dos temas ----------
  // No modo "tema", agrupa pelos temas na ordem escolhida; dentro de cada tema
  // (ou na lista toda, no modo "misturado") segue a sequência sorteada.
  function ordenar(lista, seq) {
    const pos = new Map(seq.map((id, i) => [id, i]));
    return lista.slice().sort((a, b) => {
      if (C.modo === 'tema') {
        const d = C.ordemTemas.indexOf(temaDe(a)) - C.ordemTemas.indexOf(temaDe(b));
        if (d) return d;
      }
      return pos.get(a.id) - pos.get(b.id);
    });
  }

  function embaralharObjetivas() {
    C.seqObj = sortearDiferente(C.seqObj);
    C.OBJ.forEach((q) => { C.ordem[q.id] = embaralharArray(q.alternativas.map((_, i) => i)); });
  }
  function embaralharDissertativas() { C.seqDiss = sortearDiferente(C.seqDiss); }

  function moverTema(t, delta) {
    const i = C.ordemTemas.indexOf(t);
    const j = i + delta;
    if (i < 0 || j < 0 || j >= C.ordemTemas.length) return;
    const nova = C.ordemTemas.slice();
    [nova[i], nova[j]] = [nova[j], nova[i]];
    C.ordemTemas = nova;
  }

  function controlesOrdem() {
    const ultimo = C.ordemTemas.length - 1;
    const temas = C.ordemTemas.map((t, i) => `<li>
        <span class="num">${t}</span><span class="tema-nome">${esc(nomeTema(t))}</span>
        <button type="button" class="mini" data-acao="tema-subir" data-tema="${t}" aria-label="Subir o tema ${esc(nomeTema(t))}" ${i === 0 ? 'disabled' : ''}>↑</button>
        <button type="button" class="mini" data-acao="tema-descer" data-tema="${t}" aria-label="Descer o tema ${esc(nomeTema(t))}" ${i === ultimo ? 'disabled' : ''}>↓</button>
      </li>`).join('');
    const modoChip = (valor, texto) =>
      `<button type="button" class="chip" data-acao="modo" data-modo="${valor}" aria-pressed="${C.modo === valor}">${texto}</button>`;
    const primeiro = C.TEMAS_PADRAO[0], fim = C.TEMAS_PADRAO[C.TEMAS_PADRAO.length - 1];

    return `<div class="ordem-controles">
      <div class="barra-filtros">
        <button type="button" class="chip chip-forte" data-acao="embaralhar">Embaralhar</button>
        <button type="button" class="chip" data-acao="ordem-original">Ordem original</button>
        <span class="espaco"></span>
        <span class="grupo-modo" role="group" aria-label="Organização das questões">
          ${modoChip('tema', 'Agrupar por tema')}${modoChip('misturado', 'Misturar temas')}
        </span>
      </div>
      <details class="temas"${C.temasAbertos ? ' open' : ''}>
        <summary>Ordem dos temas</summary>
        ${C.modo === 'misturado' ? '<p class="nota-temas">No modo "Misturar temas" a ordem dos temas não é usada. Ao mexer nela, o quiz volta para "Agrupar por tema".</p>' : ''}
        <ol class="lista-temas">${temas}</ol>
        <div class="acoes">
          <button type="button" class="chip" data-acao="temas-sortear">Sortear ordem dos temas</button>
          <button type="button" class="chip" data-acao="temas-padrao">Ordem padrão (${primeiro} → ${fim})</button>
        </div>
      </details>
      <p class="aviso" role="status">${esc(C.aviso)}</p>
    </div>`;
  }

  // ---------- Topo fixo ----------
  function medirTopo() {
    const topo = $('#topo-fixo');
    document.documentElement.style.setProperty('--topo', (topo.hidden ? 0 : topo.offsetHeight) + 'px');
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
  const hashDaAba = (aba) => (aba === 'resumo' ? C.id : C.id + '/' + aba);

  // ---------- Tela inicial e troca de matéria ----------
  function renderInicio() {
    const cartoes = MATERIAS.map((M) => {
      const X = CONTEXTOS[M.id];
      const blocos = X.RESUMO.filter((b) => b.num).length;
      const respondidas = Object.keys(X.respostas).length;
      const avaliadas = X.DISS.filter((d) => X.diss[d.id].av).length;
      const progresso = respondidas || avaliadas
        ? `<p class="cm-progresso">Seu progresso: ${respondidas}/${X.OBJ.length} objetivas nesta visita · ${avaliadas}/${X.DISS.length} dissertativas avaliadas</p>`
        : '';
      return `<a class="cartao-materia" href="#${M.id}" data-ir-materia="${M.id}" data-materia="${M.id}">
        ${M.prova ? `<span class="cm-prova">Prova ${esc(M.prova)}</span>` : ''}
        <h2>${esc(M.titulo)}</h2>
        <p class="cm-prof">${esc(M.professor)}</p>
        <p>${esc(M.descricao)}</p>
        <p class="cm-numeros">Resumo em ${blocos} blocos · ${X.OBJ.length} objetivas · ${X.DISS.length} dissertativas</p>
        ${progresso}
        <span class="cm-entrar">Estudar ${esc(M.curto)} →</span>
      </a>`;
    }).join('');
    painel.inicio.innerHTML = `
      <p class="inicio-intro">Cada matéria tem o seu próprio resumo, questões e progresso. Você pode trocar de matéria a qualquer momento pelo botão <strong>Trocar matéria</strong>, no topo.</p>
      <div class="materias">${cartoes}</div>`;
  }

  function atualizarCabecalho() {
    const trocar = $('#btn-trocar');
    if (C && G.aba !== 'inicio') {
      const M = C.M;
      document.body.dataset.materia = M.id;
      $('#sobretitulo').textContent = 'ADS · USCS · ' + M.professor + (M.prova ? ' · Prova ' + M.prova : '');
      $('#titulo').textContent = M.titulo;
      $('#subtitulo').textContent = `Resumo, ${C.OBJ.length} questões objetivas e ${C.DISS.length} dissertativas.`;
      $('#rodape').textContent = 'Fonte: ' + M.fonte;
      document.title = M.curto + ' · Quiz de Estudos';
      trocar.hidden = false;
    } else {
      delete document.body.dataset.materia;
      $('#sobretitulo').textContent = 'ADS · 4º semestre · USCS';
      $('#titulo').textContent = 'Quiz de Estudos';
      $('#subtitulo').textContent = 'Escolha a matéria que você quer estudar.';
      $('#rodape').textContent = 'Material de estudo das disciplinas de ADS, 4º semestre, USCS.';
      document.title = 'Quiz de Estudos · ADS USCS';
      trocar.hidden = true;
    }
  }

  function irInicio(opcoes = {}) {
    G.aba = 'inicio';
    esconderVoltar();
    renderInicio();
    Object.entries(painel).forEach(([k, p]) => { p.hidden = k !== 'inicio'; });
    $('#topo-fixo').hidden = true;
    atualizarCabecalho();
    medirTopo();
    if (opcoes.manual) definirHash('');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function abrirMateria(id) {
    if (C && C.id === id) return;
    C = CONTEXTOS[id];
    esconderVoltar();
    renderResumo();
    renderQuestoes();
  }

  $('#btn-trocar').addEventListener('click', () => {
    irInicio({ manual: true });
    const cartao = C && $(`[data-ir-materia="${C.id}"]`);
    if (cartao) cartao.focus();
  });

  painel.inicio.addEventListener('click', (e) => {
    const a = e.target.closest('[data-ir-materia]');
    if (!a) return;
    e.preventDefault();
    abrirMateria(a.dataset.irMateria);
    mostrarAba('resumo', { manual: true });
    $('#aba-resumo').focus({ preventScroll: true });
  });

  // ---------- Abas ----------
  function mostrarAba(nome, opcoes = {}) {
    G.aba = nome;
    $('#topo-fixo').hidden = false;
    $$('.aba').forEach((b) => {
      const ativa = b.dataset.aba === nome;
      b.setAttribute('aria-selected', String(ativa));
      b.tabIndex = ativa ? 0 : -1;
    });
    Object.entries(painel).forEach(([k, p]) => { p.hidden = k !== nome; });
    $('#placar').hidden = nome === 'resumo';
    atualizarCabecalho();
    atualizarPlacar();
    medirTopo();
    if (opcoes.manual) {
      esconderVoltar();
      definirHash(hashDaAba(nome));
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
    G.origem = origem || null;
    atualizarVoltar();
    definirHash(ancora);
    rolarAte(alvo);
    destacar(alvo);
    alvo.focus({ preventScroll: true });
    return true;
  }

  function atualizarVoltar() {
    const btn = $('#btn-voltar');
    if (G.origem) {
      btn.textContent = '← Voltar para a questão ' + G.origem.rotulo;
      btn.hidden = false;
    } else {
      btn.hidden = true;
    }
  }
  function esconderVoltar() { G.origem = null; atualizarVoltar(); }

  $('#btn-voltar').addEventListener('click', () => {
    const o = G.origem;
    if (!o) return;
    esconderVoltar();
    mostrarAba(o.aba);
    definirHash(hashDaAba(o.aba));
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
      C.RESUMO.map((b) => `<li><a href="#${b.id}" data-ancora="${b.id}">` +
        (b.num ? `<span class="num">${b.num}</span>` : '') + `${esc(b.titulo)}</a></li>`).join('') +
      `</ol></nav>`;

    const blocos = C.RESUMO.map((b) => `
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
    return C.ordem[q.id] || q.alternativas.map((_, i) => i);
  }

  function cartaoObjetiva(q) {
    const resp = C.respostas[q.id];
    const respondida = resp !== undefined;
    const ordem = ordemDe(q);
    const elId = 'q-' + q.id;
    const n = C.posObj[q.id];

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
      <div class="questao-meta"><span>Questão ${n} de ${C.OBJ.length}</span><span class="etiqueta">${esc(q.bloco)}</span></div>
      ${q.origem ? `<p class="origem">${esc(q.origem)}</p>` : ''}
      <p class="enunciado" id="${elId}-e">${esc(q.enunciado)}</p>
      <ol class="alternativas" aria-label="Alternativas">${alts}</ol>
      ${explicacoes}
    </article>`;
  }

  function contarAcertos() {
    return C.OBJ.reduce((n, q) => n + (C.respostas[q.id] !== undefined && q.alternativas[C.respostas[q.id]].correta ? 1 : 0), 0);
  }

  function cartaoResultado() {
    const total = C.OBJ.length;
    const respondidas = Object.keys(C.respostas).length;
    if (respondidas < total) return '';
    const acertos = contarAcertos();
    return `<article class="questao resultado" id="resultado-objetivas">
      <p>Você terminou as ${total} objetivas de ${esc(C.M.curto)} e acertou ${acertos}.</p>
      <p class="grande">${fmt((acertos / total) * 10)} / 10</p>
      <button type="button" class="botao" data-acao="refazer">Refazer (com perguntas em nova ordem)</button>
    </article>`;
  }

  function renderObjetivas() {
    const ordenadas = ordenar(C.OBJ, C.seqObj);
    C.posObj = {};
    ordenadas.forEach((q, i) => { C.posObj[q.id] = i + 1; });

    const temasComQuestoes = C.ordemTemas.filter((t) => C.OBJ.some((q) => temaDe(q) === t));
    const chips = [`<button type="button" class="chip" data-filtro="todos" aria-pressed="${C.filtro === 'todos'}">Todos</button>`]
      .concat(temasComQuestoes.map((t) => `<button type="button" class="chip" data-filtro="${t}" aria-pressed="${C.filtro === t}" title="${esc(nomeTema(t))}" aria-label="Tema ${t}: ${esc(nomeTema(t))}">${t}</button>`))
      .join('');

    const visiveis = ordenadas.filter((q) => C.filtro === 'todos' || temaDe(q) === C.filtro);

    painel.objetivas.innerHTML = `
      ${controlesOrdem()}
      <div class="barra-filtros" role="group" aria-label="Filtrar por tema">${chips}</div>
      <div id="lista-objetivas">${visiveis.map(cartaoObjetiva).join('')}</div>
      <div id="resultado-wrap">${cartaoResultado()}</div>`;
  }

  function responder(qid, i) {
    if (C.respostas[qid] !== undefined) return;
    const q = C.OBJ.find((x) => x.id === qid);
    if (!q) return;
    C.respostas[qid] = i;
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
      C.filtro = chip.dataset.filtro;
      renderObjetivas();
      const novo = $(`#painel-objetivas [data-filtro="${C.filtro}"]`);
      if (novo) novo.focus({ preventScroll: true });
    }
  });

  // ---------- Dissertativas ----------
  const PESO = { acertei: 1, parcial: 0.5, errei: 0 };

  function cartaoDissertativa(d) {
    const s = C.diss[d.id];
    const n = C.posDiss[d.id];
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
      <div class="questao-meta"><span>Dissertativa ${n} de ${C.DISS.length} · ${d.id}</span><span class="etiqueta">${esc(d.bloco)}</span></div>
      ${d.origem ? `<p class="origem">${esc(d.origem)}</p>` : ''}
      <p class="enunciado" id="${elId}-e">${esc(d.enunciado)}</p>
      <label class="sr-only" for="resp-${d.id}">Sua resposta para ${d.id}</label>
      <textarea id="resp-${d.id}" data-rascunho="${d.id}" placeholder="Escreva sua resposta aqui…">${esc(C.rascunhos[d.id])}</textarea>
      <div class="acoes">
        <button type="button" class="botao ${s.revelada ? 'botao-secundario' : ''}" data-ver="${d.id}" aria-expanded="${s.revelada}">${s.revelada ? 'Ocultar resposta' : 'Ver resposta'}</button>
        <span class="salvo" id="salvo-${d.id}" aria-live="polite"></span>
      </div>
      ${revelado}
    </article>`;
  }

  function renderDissertativas() {
    const ordenadas = ordenar(C.DISS, C.seqDiss);
    C.posDiss = {};
    ordenadas.forEach((d, i) => { C.posDiss[d.id] = i + 1; });
    painel.dissertativas.innerHTML =
      controlesOrdem() +
      `<p class="salvo">Seu rascunho fica salvo neste navegador. Depois de ver a resposta, marque os pontos-chave e faça a autoavaliação (Acertei = 1, Parcial = 0,5, Errei = 0).</p>` +
      ordenadas.map(cartaoDissertativa).join('');
  }

  function rerenderDiss(id) {
    const d = C.DISS.find((x) => x.id === id);
    document.getElementById('d-' + id).outerHTML = cartaoDissertativa(d);
  }

  const timersRascunho = {};
  painel.dissertativas.addEventListener('input', (e) => {
    const t = e.target.closest('textarea[data-rascunho]');
    if (!t) return;
    const id = t.dataset.rascunho;
    const X = C; // a matéria pode mudar antes do salvamento atrasado
    X.rascunhos[id] = t.value;
    const chave = X.id + ':' + id;
    clearTimeout(timersRascunho[chave]);
    timersRascunho[chave] = setTimeout(() => {
      const ok = LS.set(X.chave.rascunho(id), X.rascunhos[id]);
      const aviso = X === C && document.getElementById('salvo-' + id);
      if (aviso) aviso.textContent = ok ? 'Rascunho salvo' : '';
    }, 400);
  });

  painel.dissertativas.addEventListener('change', (e) => {
    const c = e.target.closest('input[data-ponto]');
    if (!c) return;
    C.diss[c.dataset.ponto].pontos[Number(c.dataset.i)] = c.checked;
    salvarDiss();
  });

  painel.dissertativas.addEventListener('click', (e) => {
    const ver = e.target.closest('[data-ver]');
    if (ver) {
      const id = ver.dataset.ver;
      C.diss[id].revelada = !C.diss[id].revelada;
      salvarDiss();
      rerenderDiss(id);
      const btn = $(`[data-ver="${id}"]`);
      if (btn) btn.focus();
      return;
    }
    const av = e.target.closest('[data-av]');
    if (av) {
      const id = av.dataset.d;
      const s = C.diss[id];
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
    C.aviso = '';
  }

  // Devolve o foco ao botão equivalente depois de redesenhar o painel.
  function restaurarFoco(b) {
    let sel = `#painel-${G.aba} [data-acao="${b.dataset.acao}"]`;
    if (b.dataset.tema) sel += `[data-tema="${b.dataset.tema}"]`;
    if (b.dataset.modo) sel += `[data-modo="${b.dataset.modo}"]`;
    let novo = $(sel);
    if (novo && novo.disabled) novo = novo.parentElement.querySelector('button:not(:disabled)');
    if (novo) novo.focus({ preventScroll: true });
  }

  $('main').addEventListener('click', (e) => {
    const b = e.target.closest('[data-acao]');
    if (!b || !C) return;
    const aba = G.aba;

    switch (b.dataset.acao) {
      case 'refazer':
        refazer();
        return;
      case 'embaralhar':
        if (aba === 'objetivas') embaralharObjetivas(); else embaralharDissertativas();
        C.aviso = C.modo === 'tema' ? 'Perguntas embaralhadas dentro de cada tema.' : 'Perguntas embaralhadas.';
        break;
      case 'ordem-original':
        if (aba === 'objetivas') { C.seqObj = C.OBJ.map((q) => q.id); C.ordem = {}; }
        else C.seqDiss = C.DISS.map((d) => d.id);
        C.aviso = 'Perguntas na ordem original.';
        break;
      case 'modo':
        C.modo = b.dataset.modo === 'misturado' ? 'misturado' : 'tema';
        salvarOrdem();
        C.aviso = C.modo === 'tema' ? 'Questões agrupadas por tema.' : 'Temas misturados.';
        break;
      case 'tema-subir':
      case 'tema-descer':
        moverTema(b.dataset.tema, b.dataset.acao === 'tema-subir' ? -1 : 1);
        C.modo = 'tema';
        salvarOrdem();
        C.aviso = `Tema ${b.dataset.tema} agora é o ${C.ordemTemas.indexOf(b.dataset.tema) + 1}º.`;
        break;
      case 'temas-sortear':
        C.ordemTemas = sortearDiferente(C.ordemTemas);
        C.modo = 'tema';
        salvarOrdem();
        C.aviso = 'Nova ordem dos temas: ' + C.ordemTemas.join(', ') + '.';
        break;
      case 'temas-padrao':
        C.ordemTemas = C.TEMAS_PADRAO.slice();
        C.modo = 'tema';
        salvarOrdem();
        C.aviso = 'Temas na ordem padrão.';
        break;
      default:
        return;
    }
    renderQuestoes();
    restaurarFoco(b);
  });

  // Lembra se o painel "Ordem dos temas" está aberto ("toggle" não borbulha: usa captura).
  $('main').addEventListener('toggle', (e) => {
    if (C && e.target.matches && e.target.matches('details.temas')) {
      C.temasAbertos = e.target.open;
      $$('details.temas').forEach((d) => { if (d !== e.target) d.open = e.target.open; });
    }
  }, true);

  // ---------- Placar ----------
  function atualizarPlacar() {
    const texto = $('#placar-texto');
    const nota = $('#placar-nota');
    const barra = $('#barra');
    let feitas = 0, total = 1, notaFinal = null;

    if (G.aba === 'objetivas') {
      total = C.OBJ.length;
      feitas = Object.keys(C.respostas).length;
      const acertos = contarAcertos();
      texto.textContent = `${acertos} acertos · ${feitas}/${total}`;
      if (feitas === total) notaFinal = (acertos / total) * 10;
    } else if (G.aba === 'dissertativas') {
      total = C.DISS.length;
      const avaliadas = C.DISS.filter((d) => C.diss[d.id].av);
      feitas = avaliadas.length;
      const soma = avaliadas.reduce((n, d) => n + PESO[C.diss[d.id].av], 0);
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
    if (G.aba === 'objetivas') {
      C.respostas = {};
      embaralharObjetivas();
      C.aviso = 'Novo teste: perguntas em nova ordem.';
      renderObjetivas();
      C.aviso = '';
    } else if (G.aba === 'dissertativas') {
      const temTexto = C.DISS.some((d) => C.rascunhos[d.id].trim());
      if (temTexto && !window.confirm(`Apagar suas respostas escritas e a autoavaliação de ${C.M.curto}?`)) return;
      C.DISS.forEach((d) => {
        C.diss[d.id] = { revelada: false, pontos: d.pontosChave.map(() => false), av: null };
        C.rascunhos[d.id] = '';
        LS.del(C.chave.rascunho(d.id));
      });
      salvarDiss();
      embaralharDissertativas();
      C.aviso = 'Novo teste: perguntas em nova ordem.';
      renderDissertativas();
      C.aviso = '';
    }
    atualizarPlacar();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  $('#btn-refazer').addEventListener('click', refazer);

  // ---------- Verificação de dados (rode verificarDados() no console) ----------
  function verificarDados() {
    const problemas = [];
    const donos = new Map();
    MATERIAS.forEach((M) => {
      const X = CONTEXTOS[M.id];
      X.ids.forEach((id) => {
        if (donos.has(id)) problemas.push(`Âncora "${id}" repetida em ${donos.get(id)} e ${M.id}`);
        donos.set(id, M.id);
      });
      X.OBJ.forEach((q) => {
        const corretas = q.alternativas.filter((a) => a.correta).length;
        if (corretas !== 1) problemas.push(`${M.id} Q${q.id}: ${corretas} alternativas corretas`);
        q.alternativas.forEach((a, i) => {
          if (!ID_VALIDO.test(a.ancora) || !X.ids.has(a.ancora)) problemas.push(`${M.id} Q${q.id} ${LETRAS[i]}: âncora quebrada "${a.ancora}"`);
        });
      });
      X.DISS.forEach((d) => d.pontosChave.forEach((p, i) => {
        if (!ID_VALIDO.test(p.ancora) || !X.ids.has(p.ancora)) problemas.push(`${M.id} ${d.id} ponto ${i + 1}: âncora quebrada "${p.ancora}"`);
      }));
    });
    if (problemas.length) console.warn('Problemas nos dados do quiz:\n' + problemas.join('\n'));
    else console.info('Dados OK: ' + MATERIAS.map((M) => `${M.curto} (${CONTEXTOS[M.id].OBJ.length} objetivas, ${CONTEXTOS[M.id].DISS.length} dissertativas)`).join('; ') + '. Todas as âncoras existem.');
    return problemas;
  }
  window.verificarDados = verificarDados;

  // ---------- Hash da URL ----------
  // #ageis, #usabilidade/objetivas, #u-peirce (âncora do resumo) ou vazio (tela inicial).
  // Os links antigos (#objetivas, #proj-premissa-risco…) continuam abrindo Métodos Ágeis.
  function aplicarHash() {
    let h = '';
    try { h = decodeURIComponent(location.hash.slice(1)); } catch (e) { h = ''; }
    if (!h) { irInicio(); return; }

    const [m, aba] = h.split('/');
    if (CONTEXTOS[m]) {
      abrirMateria(m);
      mostrarAba(ABAS.includes(aba) ? aba : 'resumo');
      return;
    }
    if ((h === 'objetivas' || h === 'dissertativas') && CONTEXTOS.ageis) {
      abrirMateria('ageis');
      mostrarAba(h);
      return;
    }
    const dono = MATERIAS.find((M) => CONTEXTOS[M.id].ids.has(h));
    if (dono) {
      abrirMateria(dono.id);
      if (irParaResumo(h)) return;
    }
    irInicio();
  }
  window.addEventListener('hashchange', aplicarHash);
  window.addEventListener('resize', medirTopo);

  // ---------- Início ----------
  verificarDados();
  aplicarHash();
})();
