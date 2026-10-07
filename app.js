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
    filtro: 'todos',
    embaralhar: false,
    ordem: {},       // id da questão -> ordem de exibição (índices originais)
    respostas: {},   // id da questão -> índice original escolhido
    diss: {},        // id -> { revelada, pontos: [bool], av: 'acertei' | 'parcial' | 'errei' | null }
    rascunhos: {},   // id -> texto (cópia em memória do rascunho)
    origem: null     // { aba, elId, rotulo } para o botão "Voltar"
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
  const blocosObj = [...new Set(OBJ.map((q) => q.bloco))];

  function ordemDe(q) {
    return estado.ordem[q.id] || q.alternativas.map((_, i) => i);
  }

  function embaralharArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function cartaoObjetiva(q) {
    const resp = estado.respostas[q.id];
    const respondida = resp !== undefined;
    const ordem = ordemDe(q);
    const elId = 'q-' + q.id;

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
            ${linkResumo(alt.ancora, 'objetivas', elId, String(q.id))}
          </div>`;
        }).join('')}
      </div>`;
    }

    return `<article class="questao" id="${elId}" tabindex="-1" aria-labelledby="${elId}-e">
      <div class="questao-meta"><span>Questão ${q.id} de ${OBJ.length}</span><span class="etiqueta">${esc(q.bloco)}</span></div>
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
      <button type="button" class="botao" data-acao="refazer">Refazer</button>
    </article>`;
  }

  function renderObjetivas() {
    const chips = [`<button type="button" class="chip" data-filtro="todos" aria-pressed="${estado.filtro === 'todos'}">Todos</button>`]
      .concat(blocosObj.map((b) => `<button type="button" class="chip" data-filtro="${esc(b)}" aria-pressed="${estado.filtro === b}" title="${esc(b)}" aria-label="Bloco ${esc(b)}">${esc(b.slice(0, 2))}</button>`))
      .join('');

    const visiveis = OBJ.filter((q) => estado.filtro === 'todos' || q.bloco === estado.filtro);

    painel.objetivas.innerHTML = `
      <div class="barra-filtros" role="group" aria-label="Filtrar por bloco">
        ${chips}
        <span class="espaco"></span>
        <button type="button" class="chip" data-acao="embaralhar" aria-pressed="${estado.embaralhar}">Embaralhar</button>
      </div>
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
      return;
    }
    const acao = e.target.closest('[data-acao]');
    if (!acao) return;
    if (acao.dataset.acao === 'embaralhar') {
      estado.embaralhar = !estado.embaralhar;
      estado.ordem = {};
      if (estado.embaralhar) OBJ.forEach((q) => { estado.ordem[q.id] = embaralharArray(q.alternativas.map((_, i) => i)); });
      renderObjetivas();
    } else if (acao.dataset.acao === 'refazer') {
      refazer();
    }
  });

  // ---------- Dissertativas ----------
  const PESO = { acertei: 1, parcial: 0.5, errei: 0 };

  function cartaoDissertativa(d, n) {
    const s = estado.diss[d.id];
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
    painel.dissertativas.innerHTML =
      `<p class="salvo">Seu rascunho fica salvo neste navegador. Depois de ver a resposta, marque os pontos-chave e faça a autoavaliação (Acertei = 1, Parcial = 0,5, Errei = 0).</p>` +
      DISS.map((d, i) => cartaoDissertativa(d, i + 1)).join('');
  }

  function rerenderDiss(id) {
    const d = DISS.find((x) => x.id === id);
    const n = DISS.indexOf(d) + 1;
    document.getElementById('d-' + id).outerHTML = cartaoDissertativa(d, n);
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

  // ---------- Refazer ----------
  function refazer() {
    if (estado.aba === 'objetivas') {
      estado.respostas = {};
      if (estado.embaralhar) OBJ.forEach((q) => { estado.ordem[q.id] = embaralharArray(q.alternativas.map((_, i) => i)); });
      renderObjetivas();
    } else if (estado.aba === 'dissertativas') {
      const temTexto = DISS.some((d) => estado.rascunhos[d.id].trim());
      if (temTexto && !window.confirm('Apagar suas respostas escritas e a autoavaliação?')) return;
      DISS.forEach((d) => {
        estado.diss[d.id] = { revelada: false, pontos: d.pontosChave.map(() => false), av: null };
        estado.rascunhos[d.id] = '';
        LS.del(chaveRascunho(d.id));
      });
      salvarDiss();
      renderDissertativas();
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
  renderResumo();
  renderObjetivas();
  renderDissertativas();
  verificarDados();
  aplicarHash();
})();
