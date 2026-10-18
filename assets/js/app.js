/* Fallbuch Privatrecht: Router + Ansichten. Vanilla JS, kein Build-Schritt. */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const view = $('#view');
  const PARTS = window.FB_PARTS || [], SEC = window.FB_SECTIONS || [];
  const GLOSS = window.FB_GLOSSARY || [], QUIZ = (window.FB_QUIZ || []).map((q, i) => Object.assign({ id: 'q' + i }, q));
  const VIDS = window.FB_VIDEOS || [], EH = window.FB_EH || {}, LAB = (window.FB_LAB || { tools: [] }).tools;
  const CASES = SEC.filter(s => s.kind === 'case');

  /* ---------- storage (per-viewer convenience; works without it) ---------- */
  const S = {
    get(k, d) { try { const v = localStorage.getItem('fb.' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { if (v === null) localStorage.removeItem('fb.' + k); else localStorage.setItem('fb.' + k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const strip = s => String(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const secById = id => SEC.find(s => s.id === id);
  const partOf = id => PARTS.find(p => p.id === id) || {};
  const toast = msg => { const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 2400); };
  const fmtTime = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  const de = n => String(Math.round(n * 2) / 2).replace('.', ',');
  const note = pct => pct >= 88 ? [1, 'Sehr gut'] : pct >= 75.5 ? [2, 'Gut'] : pct >= 63 ? [3, 'Befriedigend'] : pct >= 50.5 ? [4, 'Genügend'] : [5, 'Nicht genügend'];
  const tool = id => LAB.find(t => t.id === id);
  const SEC_TOOLS = { 'T-00': 'zeit', 'T-01': 'agb', 'T-02': 'alter', 'T-03': 'irrtum', 'T-05': 'gewaehr', 'T-06': 'umfang', 'T-07': 'erwerb', 'A-08': 'laesio', 'A-04': 'erwerb', 'C-02': 'erwerb', 'C-07': 'alter', 'B-06': 'alter', 'B-02': 'fristen', 'A-03': 'gewaehr', 'C-03': 'gewaehr', 'B-04': 'gehilfe', 'C-05': 'gehilfe', 'C-01': 'umfang', 'B-09': 'umfang', 'B-07': 'agb', 'B-11': 'zuordnen', 'A-02': 'irrtum', 'C-04': 'irrtum', 'A-06': 'zuordnen', 'C-08': 'zuordnen' };

  /* ---------- cards (extra + glossary) ---------- */
  const CARDS = (window.FB_CARDS_EXTRA || []).map((c, i) => ({ id: 'x' + i, f: c.f, b: c.b, s: c.s, tag: c.tag }))
    .concat(GLOSS.map((g, i) => ({ id: 'g' + i, f: g[0], b: g[1], s: g[2], tag: 'Begriff' })));

  /* ---------- nav ---------- */
  const navToggle = $('.nav-toggle'), navLinks = $('.nav-links');
  navToggle.addEventListener('click', () => { const o = navLinks.classList.toggle('open'); navToggle.setAttribute('aria-expanded', o); });
  $('[data-reset]').addEventListener('click', e => {
    e.preventDefault();
    if (confirm('Gesamten Lernfortschritt (gelesene Fälle, Entwürfe, Quiz-Statistik, Karteikarten, Klausuren) zurücksetzen?')) {
      Object.keys(localStorage).filter(k => k.startsWith('fb.')).forEach(k => { try { localStorage.removeItem(k); } catch (er) { } });
      toast('Fortschritt zurückgesetzt'); route();
    }
  });
  let cleanup = [];
  const onLeave = fn => cleanup.push(fn);

  function route() {
    cleanup.forEach(f => { try { f(); } catch (e) { } }); cleanup = [];
    closePop();
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    const [r, a, b] = h.split('/');
    navLinks.classList.remove('open');
    $$('.nav-links a').forEach(x => x.classList.toggle('on', x.dataset.r === (r || 'start')));
    view.innerHTML = '';
    switch (r) {
      case 'faelle': a && !a.startsWith('teil-') ? renderSection(a) : renderIndex(a); break;
      case 'videos': a ? renderPlayer(a) : renderVideos(); break;
      case 'test': renderTest(a, b); break;
      case 'glossar': renderGlossary(a); break;
      case 'karten': renderCards(); break;
      case 'labor': renderLab(a); break;
      case 'anhang': renderAnhang(); break;
      default: renderStart();
    }
    window.scrollTo(0, 0);
    view.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);

  /* =====================================================================
     START
     ===================================================================== */
  function stats() {
    const read = S.get('read', []), qs = S.get('qstats', {}), lt = S.get('leitner', {}), ex = S.get('examLog', []);
    let ok = 0, n = 0; Object.values(qs).forEach(v => { ok += v.ok; n += v.n; });
    return { read: read.length, acc: n ? Math.round(ok / n * 100) : null, answered: n, mastered: Object.values(lt).filter(b => b >= 4).length,
      best: ex.length ? Math.max(...ex.map(e => e.pct)) : null, exams: ex.length };
  }
  function heroArt() {
    return `<svg viewBox="0 0 182 118" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><clipPath id="hsky"><rect width="182" height="74"/></clipPath><linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050507"/><stop offset="1" stop-color="#1a0614"/></linearGradient>
      <filter id="hgl" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <rect width="182" height="118" fill="url(#hg)"/>
      <g clip-path="url(#hsky)"><circle cx="64" cy="62" r="27" fill="#ffd400"/><circle cx="91" cy="62" r="27" fill="#ff2b2b"/><circle cx="118" cy="62" r="27" fill="#2f6bff"/>
      <g fill="#050507"><rect y="42" width="182" height=".5"/><rect y="47" width="182" height=".7"/><rect y="52" width="182" height=".9"/><rect y="57" width="182" height="1.2"/><rect y="62" width="182" height="1.6"/><rect y="67" width="182" height="2"/><rect y="72" width="182" height="2.6"/></g></g>
      <line x1="0" y1="74" x2="182" y2="74" stroke="#ff2a6d" stroke-width=".6"/>
      <g stroke="#ff2a6d" stroke-width=".28" opacity=".7"><line x1="91" y1="74" x2="-60" y2="118"/><line x1="91" y1="74" x2="-15" y2="118"/><line x1="91" y1="74" x2="25" y2="118"/><line x1="91" y1="74" x2="58" y2="118"/><line x1="91" y1="74" x2="124" y2="118"/><line x1="91" y1="74" x2="157" y2="118"/><line x1="91" y1="74" x2="197" y2="118"/><line x1="91" y1="74" x2="242" y2="118"/>
      <line x1="0" y1="77.8" x2="182" y2="77.8"/><line x1="0" y1="81" x2="182" y2="81"/><line x1="0" y1="85.5" x2="182" y2="85.5"/><line x1="0" y1="91.5" x2="182" y2="91.5"/><line x1="0" y1="99.5" x2="182" y2="99.5"/><line x1="0" y1="109.5" x2="182" y2="109.5"/></g>
      <g class="scales" stroke="#19f0ff" stroke-width=".55" fill="none" filter="url(#hgl)"><line x1="91" y1="16" x2="91" y2="58"/><line x1="84" y1="58" x2="98" y2="58"/>
        <g><animateTransform attributeName="transform" type="rotate" values="-4 91 20;4 91 20;-4 91 20" dur="7s" repeatCount="indefinite"/><line x1="62" y1="20" x2="120" y2="20"/><circle cx="91" cy="20" r="1.4" fill="#19f0ff"/>
        <path d="M62 20 L55 36 M62 20 L69 36 M53 36 Q62 42 71 36 Z"/><path d="M120 20 L113 36 M120 20 L127 36 M111 36 Q120 42 129 36 Z"/></g></g>
      <text x="91" y="104" text-anchor="middle" font-family="Chakra Petch" font-weight="700" font-size="30" fill="#19f0ff" opacity=".55" transform="translate(-1 0)">§</text>
      <text x="91" y="104" text-anchor="middle" font-family="Chakra Petch" font-weight="700" font-size="30" fill="#ff2a6d" opacity=".55" transform="translate(1 0)">§</text>
      <text x="91" y="104" text-anchor="middle" font-family="Chakra Petch" font-weight="700" font-size="30" fill="#ff6200" filter="url(#hgl)">§</text>
      </svg>`;
  }
  const PLAN = [
    ['Tag 1', 'Methode + Vertragsabschluss', ['T-00', 'T-01', 'A-01', 'B-11']], ['Tag 2', 'Personen & Willensmängel', ['T-02', 'T-03', 'A-02', 'C-07', 'B-06']],
    ['Tag 3', 'Boss Fight: List, Irrtum, laesio', ['A-08', 'B-10', 'C-04', 'B-03']], ['Tag 4', 'Stellvertretung & Verzug', ['T-04', 'A-05', 'C-06', 'A-06', 'C-08']],
    ['Tag 5', 'Gewährleistung', ['T-05', 'A-03', 'B-02', 'C-03', 'B-01']], ['Tag 6', 'Schadenersatz & Gehilfen', ['T-06', 'B-04', 'C-05', 'B-09', 'C-01', 'B-08']],
    ['Tag 7', 'Sachenrecht + Generalprobe', ['T-07', 'A-04', 'C-02', 'A-07', 'B-05', 'B-07']]];
  function renderStart() {
    const st = stats(), last = S.get('last', null), examAt = S.get('examAt', null), read = S.get('read', []);
    view.innerHTML = `
    <section class="hero fade-in">
      <div class="hero-txt">
        <div class="page-k">[ DECRYPTED ] // ÖSTERREICHISCHES PRIVATRECHT · SEMESTER 01</div>
        <div class="glitch-h" aria-label="Fallbuch"><span class="g1" aria-hidden="true">FALLBUCH</span><span class="g2" aria-hidden="true">FALLBUCH</span><span class="g3">FALLBUCH</span></div>
        <div class="hero-sub">Privatrecht</div>
        <p class="muted" style="margin:10px 0 0;max-width:470px">27 Klausurfälle aus drei echten Privatrechts-Klausuren, gelöst im Gutachtenstil, plus 8 Prüfschemata. Erst selbst lösen, dann mit der Musterlösung und dem Erwartungshorizont vergleichen.</p>
        <div class="btn-row">${last ? `<a class="btn solid" href="#/faelle/${last}">▶ Weiter: ${esc(last)}</a>` : `<a class="btn solid" href="#/faelle/T-00">▶ Mit dem Toolkit starten</a>`}<a class="btn cy" href="#/test/klausur">Klausur-Simulation</a></div>
        <div class="hud mono"><span>UNIT ID: ABGB-1811</span><span class="mg">( SIGNAL ACQUIRED )</span><span>JURISDICTION: AT</span><span>STATUS: EXAM-READY</span></div>
      </div>
      <div class="hero-art">${heroArt()}</div><div class="scan"></div>
    </section>
    <div class="countdown fade-in"><div class="led-num" id="cd">--T --:--:--</div><div class="t">[ COUNTDOWN ZUR PRÜFUNG ]<br><span id="cdl">${examAt ? new Date(examAt).toLocaleString('de-AT', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Termin noch nicht gesetzt'}</span>
      <br><button class="linkbtn" id="setExam">${examAt ? 'Termin ändern' : 'Prüfungstermin setzen'}</button></div></div>
    <div id="examForm" class="panel" style="display:none;margin-top:10px"><label class="f" for="examIn">Datum und Uhrzeit deiner Privatrecht-Prüfung</label><div style="display:flex;gap:10px;flex-wrap:wrap"><input class="input" type="datetime-local" id="examIn" style="max-width:280px" value="${examAt ? examAt.slice(0, 16) : ''}"><button class="btn solid" id="examSave">Speichern</button>${examAt ? '<button class="btn ghost" id="examDel">Entfernen</button>' : ''}</div></div>
    <div class="grid g4" style="margin-top:16px">
      <div class="stat"><span class="lbl">Fälle & Module erledigt</span><div class="led-num">${st.read}/${SEC.length}</div><div class="bar" style="margin-top:10px"><i style="width:${st.read / SEC.length * 100}%"></i></div></div>
      <div class="stat"><span class="lbl">Quiz-Trefferquote</span><div class="led-num">${st.acc === null ? '--' : st.acc + '%'}</div><div class="muted mono" style="font-size:12px;margin-top:8px">${st.answered} Antworten</div></div>
      <div class="stat"><span class="lbl">Karten sicher (Box 4–5)</span><div class="led-num">${st.mastered}/${CARDS.length}</div><div class="bar or" style="margin-top:10px"><i style="width:${st.mastered / CARDS.length * 100}%"></i></div></div>
      <div class="stat"><span class="lbl">Beste Klausur</span><div class="led-num">${st.best === null ? '--' : Math.round(st.best) + '%'}</div><div class="muted mono" style="font-size:12px;margin-top:8px">${st.exams} Simulation(en) abgegeben</div></div>
    </div>
    <h3><span class="n">01</span>Bereiche</h3>
    <div class="grid g3">
      ${[['faelle', 'FÄLLE', 'Fallbuch', '8 Prüfschemata und 27 Fälle im Detail- oder Kompaktmodus. Trainingsmodus: erst selbst lösen, dann aufdecken.'],
         ['videos', 'VIDEOS', 'Erklärvideos', `${VIDS.length || 8} vertonte Neon-Brass-Videos zu den Prüfschemata, mit Kapitelmarken, Untertiteln und Transkript.`],
         ['test', 'TEST', 'Testmodus', 'Schnelltest, Kapitel-Test, Fehler-Training und Klausur-Simulation mit offenen Antworten und Erwartungshorizont.'],
         ['glossar', 'GLOSSAR', 'Glossar', `${GLOSS.length} Fachbegriffe mit Suche und A–Z. Im Fallbuch einfach auf unterstrichene Begriffe tippen.`],
         ['karten', 'KARTEN', 'Karteikarten', `${CARDS.length} Karten mit Leitner-System: Schemata, Fristen, Merksätze und Begriffe.`],
         ['labor', 'LABOR', 'Interaktives Labor', `${LAB.length} Werkzeuge: Fristen-Rechner, Gewährleistungs-Navigator, Irrtumsbaum, § 367-Check, Spiele …`]]
        .map(([r, ic, t, p]) => `<a class="tile" href="#/${r}"><span class="ic">// ${ic}</span><h3>${t}</h3><p>${p}</p></a>`).join('')}
    </div>
    <h3><span class="n">02</span>Klausur-Kompass</h3>
    <div class="grid g3">${PARTS.filter(p => p.id !== 'T').map(p => { const cs = CASES.filter(c => c.part === p.id), done = cs.filter(c => read.includes(c.id)).length;
      return `<a class="tile klausur-tile" href="#/faelle/teil-${p.id}"><span class="big-letter">${p.id}</span><span class="ic">// ${esc(p.subtitle)}</span><h3>${esc(p.title)}</h3><div class="led-num" style="font-size:30px">${esc(p.led)}</div><p>${esc(p.meta)}</p><div class="bar" style="margin-top:8px"><i style="width:${done / cs.length * 100}%"></i></div><span class="mono muted" style="font-size:11px">${done}/${cs.length} FÄLLE · ${cs.reduce((a, c) => a + c.pts, 0)} PUNKTE</span></a>`; }).join('')}</div>
    <div class="box merk"><span class="tag">Antwort-Rezept</span><p><b>Begründung &gt; Ergebnis.</b> Norm zitieren (Open Book: Kodex nutzen!) · Gutachtenstil · alle Varianten beantworten · bei „Was kann X tun?“ <b>alle</b> Behelfe mit Frist · ganze Sätze, keine Stichpunkte · ≈ 1,2 Minuten pro Punkt.</p></div>
    <h3><span class="n">03</span>7-Tage-Lernplan</h3>
    <div class="timeline">${PLAN.map(([d, t, ids]) => { const done = ids.every(i => read.includes(i));
      return `<div class="tl-item ${done ? 'done' : ''}"><div class="d">${d}${done ? ' · ✔ ERLEDIGT' : ''}</div><div class="x">${esc(t)}</div><div class="c">${ids.map(i => `<a href="#/faelle/${i}" class="${read.includes(i) ? 'gr' : ''}">${i}</a>`).join(' · ')}</div></div>`; }).join('')}
      <div class="tl-item exam"><div class="d">Danach</div><div class="x">Generalprobe: eine Originalklausur unter Zeitdruck (90 min)</div><div class="c"><a href="#/test/klausur">Klausur-Simulation</a> · <a href="#/karten">Karteikarten</a> · <a href="#/anhang">Fristen-Radar</a></div></div></div>`;
    const cd = $('#cd');
    const tick = () => {
      if (!examAt) { cd.textContent = '--T --:--:--'; return; }
      const s = Math.max(0, (new Date(examAt) - new Date()) / 1000);
      const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60), se = Math.floor(s % 60);
      cd.textContent = s <= 0 ? 'GOOD LUCK' : `${String(d).padStart(2, '0')}T ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(se).padStart(2, '0')}`;
    };
    tick(); const iv = setInterval(tick, 1000); onLeave(() => clearInterval(iv));
    $('#setExam').addEventListener('click', () => { const f = $('#examForm'); f.style.display = f.style.display === 'none' ? 'block' : 'none'; });
    $('#examSave').addEventListener('click', () => { const v = $('#examIn').value; if (!v) { toast('Bitte Datum wählen'); return; } S.set('examAt', v); toast('Prüfungstermin gespeichert'); route(); });
    const del = $('#examDel'); if (del) del.addEventListener('click', () => { S.set('examAt', null); route(); });
  }

  /* =====================================================================
     FÄLLE: Index + Abschnitt
     ===================================================================== */
  function sidebar(cur) {
    const read = S.get('read', []);
    return PARTS.map(p => `<div class="grp"><span>${p.id === 'T' ? 'Teil 0' : 'Teil ' + p.id} · ${esc(p.title)}</span></div>` +
      SEC.filter(s => s.part === p.id).map(s => `<a href="#/faelle/${s.id}" class="${s.id === cur ? 'on' : ''}"><span class="id">${s.id}</span><span>${esc(s.title)}</span>${read.includes(s.id) ? '<span class="ok">✔</span>' : ''}</a>`).join('')).join('') +
      `<div class="grp"><span>Anhang</span></div><a href="#/anhang"><span class="id">X</span><span>Fristen-Radar & Normen-Index</span></a>`;
  }
  function modeButtons() {
    const m = S.get('mode', 'detail');
    return `<button data-mode="detail" class="${m === 'detail' ? 'on' : ''}" aria-pressed="${m === 'detail'}">Detail</button><button data-mode="kompakt" class="${m === 'kompakt' ? 'on' : ''}" aria-pressed="${m === 'kompakt'}">Kompakt</button>`;
  }
  function bindMode(rerender) { $$('[data-mode]').forEach(b => b.addEventListener('click', () => { S.set('mode', b.dataset.mode); rerender(); })); }
  function renderIndex(anchor) {
    const read = S.get('read', []), train = S.get('train', true);
    view.innerHTML = `<div class="page-k">// FILE_ID // TOC</div><h1 class="page-h">Fallbuch</h1>
    <p class="page-sub">Teil 0 fasst die Prüfschemata zusammen, die in den Klausuren immer wieder vorkommen. Lies es zuerst oder schlag dort nach. Dann folgen alle Fälle der drei Klausuren mit Musterlösung im Gutachtenstil.</p>
    <div class="learn-tools" style="margin-bottom:0"><div class="seg" role="group" aria-label="Lernmodus">${modeButtons()}</div>
      <label class="chk" style="margin:0"><input type="checkbox" id="train" ${train ? 'checked' : ''}> Trainingsmodus: Lösung erst nach eigenem Versuch zeigen</label></div>
    ${PARTS.map(p => { const list = SEC.filter(s => s.part === p.id);
      return `<div class="part-head" id="teil-${p.id}"><div class="pl">${p.id === 'T' ? '00' : p.id}</div><div><div class="page-k">[ ${p.id === 'T' ? 'TEIL 0' : 'TEIL ' + ({ A: 'I', B: 'II', C: 'III' })[p.id]} ] // ${p.id === 'T' ? 'LOADING MODULES …' : 'CASE FILES ' + list[0].id + ' … ' + list[list.length - 1].id}</div>
        <h2>${esc(p.title)} <span class="or">· ${esc(p.subtitle)}</span></h2><p class="muted mono" style="font-size:12px;margin:2px 0 0">${esc(p.meta)}</p></div><div class="led-num">${esc(p.led)}</div></div>
        ${p.hint ? `<p class="mono ye" style="font-size:12px">HINWEIS DER ANGABE: ${esc(p.hint)}</p>` : ''}<p class="muted" style="font-size:14px">${esc(p.intro)}</p>
        ${p.debug ? `<div class="box fix"><span class="tag">Debug-Log · Hinweis</span><p>${esc(p.debug)}</p></div>` : ''}
        <div class="grid g3 chap-grid">${list.map(s => `<a class="tile case-tile ${read.includes(s.id) ? 'is-read' : ''}" href="#/faelle/${s.id}"><span class="id">${s.id}${read.includes(s.id) ? ' · <span class="gr">✔</span>' : ''}${s.pts ? `<span class="pts-mini">${s.pts} P</span>` : ''}</span><h3 style="font-size:16px">${esc(s.title)}</h3><p>${esc(s.kind === 'case' ? s.topic + ' · ' + s.sub : s.sub)}</p></a>`).join('')}</div>`; }).join('')}
    <div class="part-head"><div class="pl">X</div><div><div class="page-k">[ ANHANG ] // X-01 … X-03</div><h2>Anhang <span class="or">· Spickzettel</span></h2></div></div>
    <div class="grid g3"><a class="tile" href="#/anhang"><span class="id">X-01</span><h3 style="font-size:16px">Fristen-Radar</h3><p>Alle Fristen aus den 27 Fällen auf einen Blick.</p></a><a class="tile" href="#/glossar"><span class="id">X-02</span><h3 style="font-size:16px">Glossar</h3><p>${GLOSS.length} Fachbegriffe.</p></a><a class="tile" href="#/anhang"><span class="id">X-03</span><h3 style="font-size:16px">Normen-Index</h3><p>Welche Norm in welchem Fall vorkommt.</p></a></div>`;
    bindMode(() => renderIndex());
    $('#train').addEventListener('change', e => S.set('train', e.target.checked));
    if (anchor) { const t = document.getElementById(anchor); if (t) setTimeout(() => t.scrollIntoView({ block: 'start' }), 30); }
  }

  function caseTaskHTML(s) {
    return `${s.sv ? `<div class="hatch brk sv"><span class="c3"></span><span class="c4"></span><span class="lbl">[ SACHVERHALT ]</span><p>${esc(s.sv)}</p></div>` : `<div class="hatch brk sv"><span class="c3"></span><span class="c4"></span><span class="lbl">[ THEORIEFRAGE ]</span><p>Diese Frage kommt ohne Sachverhalt aus.</p></div>`}
      ${s.qs.map(q => `<div class="q"><span class="lbl">${esc(q.l)} · ${q.p} ${q.p === 1 ? 'Punkt' : 'Punkte'}</span>${esc(q.q)}</div>`).join('')}`;
  }
  // model answer per question = the "Ergebnis" boxes inside the solution chunk of that question
  function modelAnswers(s) {
    const chunks = s.qs.length > 1 ? s.html.split(/<div class="q">/).slice(1) : [s.html];
    return s.qs.map((q, i) => { const m = (chunks[i] || '').match(/<div class="box res">[\s\S]*?<\/div>/g) || []; return m.map(x => x.replace(/<span class="tag">[^<]*<\/span>/, '')).join(''); });
  }
  const norm = t => String(t).toLowerCase().replace(/\s+/g, ' ');
  function autoHits(item, ans) { const a = norm(ans); return item.k.some(k => a.includes(k) || a.includes(k.replace(/\./g, ''))); }
  function bulletHint(ans) {
    const lines = String(ans).split('\n').map(l => l.trim()).filter(Boolean);
    const bul = lines.filter(l => /^([-•*–·▸]|\d+[.)])\s/.test(l)).length;
    const sent = (String(ans).match(/[.!?](\s|$)/g) || []).length;
    return ans.trim().length > 30 && (bul / Math.max(1, lines.length) > .5 || sent < 2);
  }
  // Erwartungshorizont-Bewertung. answers: string[] je Frage. Gibt {html, bind(onScore)} zurück.
  function ehBlock(s, answers, keyPrefix) {
    const eh = EH[s.id] || [], models = modelAnswers(s), saved = S.get('eh.' + keyPrefix, null);
    const state = eh.map((g, qi) => g.map((it, ii) => saved && saved[qi] && saved[qi][ii] !== undefined ? saved[qi][ii] : autoHits(it, answers[qi] || '')));
    const html = eh.map((g, qi) => `<div class="eh" data-q="${qi}"><div class="eh-head"><span class="mono or">${esc(s.qs[qi].l.toUpperCase())}</span><span class="led-num eh-pts" data-pts="${qi}">0/${s.qs[qi].p}</span></div>
      ${answers[qi] !== undefined ? `<div class="eh-ans"><div class="lbl">DEINE ANTWORT</div>${answers[qi].trim() ? `<p>${esc(answers[qi]).replace(/\n/g, '<br>')}</p>` : '<p class="muted">– keine Antwort –</p>'}</div>
        ${bulletHint(answers[qi] || '') ? `<div class="box err"><span class="tag">⚠ Stichpunkte erkannt</span><p>Die Angabe verlangt <b>ganze Sätze</b> und eine ausführliche Begründung. Formuliere im Gutachtenstil – Stichpunkte kosten in der echten Klausur Punkte.</p></div>` : ''}` : ''}
      <div class="lbl" style="margin-top:8px">ERWARTUNGSHORIZONT · HAKE AB, WAS DU (SINNGEMÄSS) GESCHRIEBEN HAST</div>
      ${g.map((it, ii) => `<label class="eh-item"><input type="checkbox" data-qi="${qi}" data-ii="${ii}" ${state[qi][ii] ? 'checked' : ''}><span>${esc(it.t)}</span><b>${de(it.p)} P</b>${answers[qi] !== undefined && autoHits(it, answers[qi] || '') ? '<i class="auto" title="Automatisch erkannt (Stichwort gefunden)">AUTO</i>' : ''}</label>`).join('')}
      ${models[qi] ? `<details class="model"><summary>Musterantwort anzeigen</summary><div class="book">${models[qi]}</div></details>` : ''}</div>`).join('');
    const bind = (root, onScore) => {
      const calc = () => {
        let tot = 0;
        eh.forEach((g, qi) => { const p = g.reduce((a, it, ii) => a + (state[qi][ii] ? it.p : 0), 0); tot += p; const el = $(`[data-pts="${qi}"]`, root); if (el) el.textContent = de(p) + '/' + s.qs[qi].p; });
        S.set('eh.' + keyPrefix, state); onScore && onScore(tot);
      };
      $$('input[data-qi]', root).forEach(cb => cb.addEventListener('change', () => { state[+cb.dataset.qi][+cb.dataset.ii] = cb.checked; calc(); }));
      calc();
    };
    return { html, bind };
  }

  function renderSection(id) {
    const s = secById(id); if (!s) { renderIndex(); return; }
    S.set('last', id);
    const idx = SEC.indexOf(s), prev = SEC[idx - 1], next = SEC[idx + 1];
    const mode = S.get('mode', 'detail'), read = S.get('read', []), isCase = s.kind === 'case';
    const train = S.get('train', true), revealed = S.get('rev', []).includes(id) || !isCase || !train;
    const vids = VIDS.filter(v => v.sec === id || (s.mods || []).includes(v.sec));
    const terms = GLOSS.filter(g => g[2] === id);
    const tl = SEC_TOOLS[id] && tool(SEC_TOOLS[id]);
    const c = s.compact || { key: '', bullets: [] };
    const drafts = S.get('draft.' + id, []);
    const solution = mode === 'detail' ? `<div class="book fade-in" id="book">${s.html}</div>` :
      `<div class="fade-in"><div class="box res"><span class="tag">Kernaussage</span><p>${c.key}</p></div><ul class="kompakt-list">${c.bullets.map((b, i) => `<li data-n="${String(i + 1).padStart(2, '0')}" style="animation-delay:${i * 60}ms">${b}</li>`).join('')}</ul>
       <p class="muted" style="font-size:14px">Ganze Musterlösung mit Abbildungen: <a href="#" data-to-detail>zur Detailansicht</a>.</p></div>`;
    const pt = partOf(s.part);
    view.innerHTML = `<div class="learn">
      <aside class="side" id="side" aria-label="Fallnavigation">${sidebar(id)}</aside>
      <article>
        <div class="learn-tools"><button class="btn ghost side-toggle" id="sideBtn">☰ Fälle</button><div class="seg" role="group" aria-label="Lernmodus">${modeButtons()}</div>
          <button class="btn ${read.includes(id) ? 'gr' : 'ghost'}" id="markRead">${read.includes(id) ? '✔ Erledigt' : 'Als erledigt markieren'}</button></div>
        <div class="case-top"><span class="lbl">${isCase ? 'CASE FILE' : 'MODULE'} // <b>${id}</b> · ${s.part === 'T' ? 'TEIL 0 // TOOLKIT' : esc(pt.title.toUpperCase()) + ' // ' + esc(pt.subtitle.toUpperCase())}</span><span class="lbl">${esc(s.category)}</span></div>
        <div class="case-title"><div class="case-id"><small>${isCase ? 'FALL' : 'MOD'}</small>${id}</div><h2>${esc(s.title)}<span>${esc(s.sub)}</span></h2>${isCase ? `<div class="pts">${String(s.pts).padStart(2, '0')}<small>P U N K T E</small></div>` : ''}</div>
        <span class="fid">FILE_ID // ${id}</span>
        ${isCase ? `<div id="task">${caseTaskHTML(s)}</div>` : ''}
        ${isCase && !revealed ? `<div class="panel brk trainer" id="trainer"><span class="c3"></span><span class="c4"></span>
            <div class="trainer-top"><div><div class="lbl">[ TRAININGSMODUS ] // ERST SELBST LÖSEN</div><p class="muted" style="margin:4px 0 0;font-size:14px">Schreib deine Lösung im Gutachtenstil. Zeitbudget nach der Faustregel 1,2 min/Punkt: <b class="cy">${Math.round(s.pts * 1.2)} Minuten</b>.</p></div>
              <div class="led-num timer" id="tTimer">${fmtTime(s.pts * 72)}</div></div>
            ${s.qs.map((q, i) => `<label class="f" for="d${i}">${esc(q.l)} · ${q.p} P</label><textarea class="input draft" id="d${i}" rows="${Math.min(12, 4 + q.p)}" placeholder="Fraglich ist, ob …">${esc(drafts[i] || '')}</textarea>`).join('')}
            <div class="btn-row"><button class="btn ghost" id="tStart">▶ Timer starten</button><button class="btn solid" id="reveal">Lösung aufdecken & bewerten</button><button class="btn ghost" id="skip">Ohne Versuch aufdecken</button></div></div>` : ''}
        ${revealed ? `<div id="sol">${isCase ? `<div class="sol-head"><span class="lbl">[ MUSTERLÖSUNG ]</span>${train ? '<button class="linkbtn" id="hide">Lösung wieder verstecken</button>' : ''}</div>` : ''}${solution}</div>` : ''}
        ${isCase && revealed && drafts.some(d => d && d.trim()) ? `<h3><span class="n">✓</span>Selbstcheck: dein Entwurf gegen den Erwartungshorizont</h3><div id="ehWrap"></div>` : ''}
        ${(vids.length || terms.length || tl || (s.mods || []).length) ? `<h3><span class="n">+</span>Passend dazu</h3><div class="related">
          ${(s.mods || []).map(m => `<a class="chip o" href="#/faelle/${m}">◆ Schema ${m}: ${esc(secById(m).title)}</a>`).join('')}
          ${vids.map(v => `<a class="chip c" href="#/videos/${v.id}">▶ Video: ${esc(v.title)}</a>`).join('')}
          ${tl ? `<a class="chip m" href="#/labor/${tl.id}">⚙ Labor: ${esc(tl.title)}</a>` : ''}
          ${terms.map(g => `<a class="chip g" href="#/glossar/${encodeURIComponent(g[0])}">${esc(g[0])}</a>`).join('')}</div>` : ''}
        <div class="checkup" id="checkup"></div>
        <div class="pn">${prev ? `<a class="btn ghost" href="#/faelle/${prev.id}">← ${prev.id} ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn" href="#/faelle/${next.id}">${next.id} ${esc(next.title)} →</a>` : ''}</div>
      </article></div>`;
    enhance(view, id);
    bindMode(() => renderSection(id));
    const td = $('[data-to-detail]'); if (td) td.addEventListener('click', e => { e.preventDefault(); S.set('mode', 'detail'); renderSection(id); });
    $('#sideBtn').addEventListener('click', () => $('#side').classList.toggle('open'));
    $('#markRead').addEventListener('click', () => { let r = S.get('read', []); r = r.includes(id) ? r.filter(x => x !== id) : r.concat(id); S.set('read', r); renderSection(id); });
    const saveDrafts = () => S.set('draft.' + id, s.qs.map((_, i) => ($('#d' + i) || {}).value || ''));
    $$('.draft').forEach(t => t.addEventListener('input', saveDrafts));
    const doReveal = () => { saveDrafts(); S.set('rev', S.get('rev', []).concat(id)); S.set('eh.case.' + id, null); renderSection(id); setTimeout(() => { const t = $('#sol'); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60); };
    const rv = $('#reveal'); if (rv) rv.addEventListener('click', () => { if (!s.qs.some((_, i) => ($('#d' + i).value || '').trim())) { if (!confirm('Noch nichts geschrieben. Trotzdem aufdecken?')) return; } doReveal(); });
    const sk = $('#skip'); if (sk) sk.addEventListener('click', doReveal);
    const hd = $('#hide'); if (hd) hd.addEventListener('click', () => { S.set('rev', S.get('rev', []).filter(x => x !== id)); renderSection(id); });
    const ts = $('#tStart'); if (ts) {
      let iv = null; ts.addEventListener('click', () => {
        if (iv) { clearInterval(iv); iv = null; ts.textContent = '▶ Timer starten'; return; }
        const end = Date.now() + s.pts * 72000; ts.textContent = '■ Timer stoppen';
        iv = setInterval(() => { const r = (end - Date.now()) / 1000, t = $('#tTimer'); if (!t) return clearInterval(iv); t.textContent = fmtTime(r); t.classList.toggle('warn', r < 60); if (r <= 0) { clearInterval(iv); toast('Zeitbudget aufgebraucht – jetzt Ergebnis formulieren!'); } }, 500);
        onLeave(() => clearInterval(iv));
      });
    }
    const ew = $('#ehWrap'); if (ew) {
      const b = ehBlock(s, s.qs.map((_, i) => drafts[i] || ''), 'case.' + id);
      ew.innerHTML = `<div class="panel"><div class="eh-total"><span class="lbl">DEIN ERGEBNIS</span><span class="led-num" id="ehTot">0</span><span class="mono muted">/ ${s.pts} PUNKTE</span></div>${b.html}</div>`;
      b.bind(ew, tot => { $('#ehTot').textContent = de(tot); });
    }
    const qs = shuffle(QUIZ.filter(q => q.s === id)).slice(0, 3);
    if (qs.length && revealed) {
      $('#checkup').innerHTML = `<h3><span class="n">?</span>Check-up: ${qs.length} Fragen zu ${id}</h3><div id="cuRun"></div>`;
      runQuiz($('#cuRun'), qs, { mode: 'practice', compact: true, onFinish: res => {
        if (res.correct === res.total) { const r = S.get('read', []); if (!r.includes(id)) { S.set('read', r.concat(id)); toast('Alles richtig. Als erledigt markiert.'); } }
      } });
    }
  }

  /* ---------- content enhancement: figures, cross-refs, glossary popovers, tables ---------- */
  const GL_RE = (() => {
    const terms = GLOSS.map((g, i) => [g[0], i]).filter(([t]) => t.length >= 5 && !/^(Titel|Modus|Mangel|Angebot|Annahme|Auftrag|Leihe|Inhaber|Obsorge|Vollmacht|Verbraucher|Schenkung|Austausch|Anfechtung|Genehmigung|Gewährleistung|Ersitzung|Redlichkeit|List|Notariatsakt)$/.test(t)).sort((a, b) => b[0].length - a[0].length);
    return { terms, re: new RegExp('(' + terms.map(([t]) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'i') };
  })();
  function enhance(root, curId) {
    if (window.FB_FIG) window.FB_FIG.render(root);
    $$('.book table, #task table', root).forEach(t => { if (!t.parentElement.classList.contains('tbl-wrap')) { const w = document.createElement('div'); w.className = 'tbl-wrap'; t.replaceWith(w); w.appendChild(t); } });
    const used = new Set();
    $$('.book, .sv p', root).forEach(scope => {
      const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest('a,button,.tag,.lbl,h3,h4,.cap,svg,summary,.case-id') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
      const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(n => {
        let txt = n.nodeValue; if (!/[A-Za-zÄÖÜäöü]/.test(txt)) return;
        const frag = document.createDocumentFragment(); let changed = false, guard = 0;
        while (txt && guard++ < 20) {
          const xr = txt.match(/\b([TABC]-\d\d)\b/), gm = txt.match(GL_RE.re);
          let m = null, kind = null;
          if (xr && secById(xr[1]) && xr[1] !== curId) { m = xr; kind = 'x'; }
          if (gm && (!m || gm.index < m.index)) { const gi = GL_RE.terms.find(([t]) => t.toLowerCase() === gm[1].toLowerCase()); if (gi && !used.has(gi[1])) { m = gm; kind = 'g'; } }
          if (!m) break;
          frag.appendChild(document.createTextNode(txt.slice(0, m.index)));
          if (kind === 'x') { const a = document.createElement('a'); a.href = '#/faelle/' + m[1]; a.className = 'xref'; a.textContent = m[1]; frag.appendChild(a); }
          else { const gi = GL_RE.terms.find(([t]) => t.toLowerCase() === m[1].toLowerCase()); used.add(gi[1]); const b = document.createElement('button'); b.type = 'button'; b.className = 'gl'; b.dataset.g = gi[1]; b.textContent = m[1]; frag.appendChild(b); }
          txt = txt.slice(m.index + m[1].length); changed = true;
        }
        if (changed) { frag.appendChild(document.createTextNode(txt)); n.replaceWith(frag); }
      });
    });
    $$('button.gl', root).forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openPop(b, GLOSS[+b.dataset.g]); }));
  }
  let pop = null;
  function closePop() { if (pop) { pop.remove(); pop = null; } }
  function openPop(anchor, g) {
    closePop();
    pop = document.createElement('div'); pop.className = 'gl-pop'; pop.setAttribute('role', 'dialog');
    pop.innerHTML = `<div class="lbl">[ GLOSSAR ]</div><b>${esc(g[0])}</b><p>${esc(g[1])}</p><a href="#/glossar/${encodeURIComponent(g[0])}">→ Glossar</a>${g[2] ? ` · <a href="#/faelle/${g[2]}">${g[2]}</a>` : ''}`;
    document.body.appendChild(pop);
    const r = anchor.getBoundingClientRect(), w = Math.min(320, window.innerWidth - 24);
    pop.style.width = w + 'px'; pop.style.left = Math.max(12, Math.min(window.innerWidth - w - 12, r.left + window.scrollX - 20)) + 'px'; pop.style.top = (r.bottom + window.scrollY + 8) + 'px';
  }
  document.addEventListener('click', e => { if (pop && !pop.contains(e.target)) closePop(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closePop(); closeSearch(); } });

  /* =====================================================================
     QUIZ ENGINE
     ===================================================================== */
  function parseNum(str) {
    let t = String(str).trim().replace(/\s/g, '').replace(/[^\d.,\-]/g, '');
    if (!t) return NaN;
    if (t.includes(',')) t = t.replace(/\./g, '').replace(',', '.');
    else if (/^-?\d{1,3}(\.\d{3})+$/.test(t)) t = t.replace(/\./g, '');
    return parseFloat(t);
  }
  function score(q, ans) {
    if (ans === undefined || ans === null || ans === '') return 0;
    if (q.t === 'mc' || q.t === 'tf') return ans === q.a ? 1 : 0;
    if (q.t === 'num') { const v = parseNum(ans); return !isNaN(v) && Math.abs(v - q.a) <= (q.tol || 0) + 1e-9 ? 1 : 0; }
    if (q.t === 'multi') { const sel = ans || [], right = sel.filter(i => q.a.includes(i)).length, wrong = sel.length - right; if (right === q.a.length && wrong === 0) return 1; return Math.max(0, (right - wrong) / q.a.length) * 0.5; }
    return 0;
  }
  function record(q, ok) {
    const st = S.get('qstats', {}); const e = st[q.id] || { ok: 0, n: 0 }; e.n++; if (ok) e.ok++; st[q.id] = e; S.set('qstats', st);
    let w = S.get('wrong', []); w = ok ? w.filter(x => x !== q.id) : (w.includes(q.id) ? w : w.concat(q.id)); S.set('wrong', w);
  }
  function answerText(q) {
    if (q.t === 'mc') return q.o[q.a]; if (q.t === 'tf') return q.a ? 'Wahr' : 'Falsch';
    if (q.t === 'num') return Number(q.a).toLocaleString('de-AT') + (q.unit ? ' ' + q.unit : ''); if (q.t === 'multi') return q.a.map(i => q.o[i]).join(' · ');
  }
  function qHTML(q, ans, locked) {
    const L = 'ABCDEFG'; let inner = '';
    if (q.t === 'mc' || q.t === 'multi') inner = q.o.map((o, i) => { const sel = q.t === 'mc' ? ans === i : (ans || []).includes(i); let cls = sel ? 'sel' : '';
      if (locked) { const right = q.t === 'mc' ? i === q.a : q.a.includes(i); cls = right ? 'right' : (sel ? 'wrong' : ''); }
      return `<button class="opt ${cls}" data-i="${i}" ${locked ? 'disabled' : ''}><span class="k">${q.t === 'multi' ? (sel ? '☑' : '☐') : L[i]}</span><span>${o}</span></button>`; }).join('');
    else if (q.t === 'tf') inner = [true, false].map(v => { let cls = ans === v ? 'sel' : ''; if (locked) cls = v === q.a ? 'right' : (ans === v ? 'wrong' : '');
      return `<button class="opt ${cls}" data-tf="${v}" ${locked ? 'disabled' : ''}><span class="k">${v ? 'W' : 'F'}</span><span>${v ? 'Wahr' : 'Falsch'}</span></button>`; }).join('');
    else if (q.t === 'num') inner = `<div style="display:flex;gap:10px;align-items:center;max-width:360px"><input class="input" inputmode="decimal" autocomplete="off" aria-label="Antwort" value="${ans !== undefined ? esc(ans) : ''}" ${locked ? 'disabled' : ''}><span class="mono muted">${esc(q.unit || '')}</span></div>`;
    return `<div class="q-text">${q.q}</div>${q.t === 'multi' ? '<div class="muted mono" style="font-size:12px;margin:-8px 0 10px">MEHRERE ANTWORTEN RICHTIG</div>' : ''}<div class="q-opts">${inner}</div>`;
  }
  function bindAnswer(el, q, get, set) {
    $$('.opt[data-i]', el).forEach(b => b.addEventListener('click', () => { const i = +b.dataset.i; if (q.t === 'mc') set(i); else { const a = (get() || []).slice(); const k = a.indexOf(i); k >= 0 ? a.splice(k, 1) : a.push(i); set(a); } }));
    $$('.opt[data-tf]', el).forEach(b => b.addEventListener('click', () => set(b.dataset.tf === 'true')));
    const inp = $('input.input', el); if (inp) { inp.addEventListener('input', () => set(inp.value, true)); setTimeout(() => inp.focus(), 50); }
  }
  function runQuiz(root, qs, opt) {
    const ans = {}; let i = 0; const locked = {}; let correct = 0;
    const total = qs.length;
    function draw() {
      const q = qs[i], sec = secById(q.s);
      root.innerHTML = `${opt.compact ? '' : `<div class="q-top"><div style="flex:1;min-width:200px"><div class="mono muted" style="font-size:12px">FRAGE ${i + 1} / ${total}</div><div class="bar" style="margin-top:6px"><i style="width:${(i + 1) / total * 100}%"></i></div></div></div>`}
        <div class="q-card"><div class="q-meta"><span>${q.s} · ${esc(sec ? sec.title : '')}</span><span>${opt.compact ? 'FRAGE ' + (i + 1) + '/' + total : ''}</span></div>
        ${qHTML(q, ans[q.id], locked[q.id])}<div id="fbox"></div>
        <div class="btn-row">${locked[q.id] ? `<button class="btn" id="next">${i === total - 1 ? 'Auswertung' : 'Nächste Frage →'}</button>` : `<button class="btn cy" id="check">Antwort prüfen</button>`}</div></div>`;
      bindAnswer(root, q, () => ans[q.id], (v, quiet) => { ans[q.id] = v; if (!quiet) draw(); });
      if (locked[q.id]) { const sc = score(q, ans[q.id]); $('#fbox', root).innerHTML = `<div class="fb ${sc === 1 ? '' : 'bad'}"><b class="h ${sc === 1 ? 'gr' : 'led'}">${sc === 1 ? '✔ RICHTIG' : sc > 0 ? '~ TEILWEISE RICHTIG' : '✘ NICHT RICHTIG'}</b>${sc === 1 ? '' : `Richtig: <b>${answerText(q)}</b><br>`}${q.e || ''} <a href="#/faelle/${q.s}" class="mono" style="font-size:12px">→ ${q.s}</a></div>`; }
      const ck = $('#check', root); if (ck) ck.addEventListener('click', () => {
        if (ans[q.id] === undefined || ans[q.id] === '' || (Array.isArray(ans[q.id]) && !ans[q.id].length)) { toast('Bitte zuerst antworten'); return; }
        const sc = score(q, ans[q.id]); locked[q.id] = true; if (sc === 1) correct++; record(q, sc === 1); draw();
      });
      const nx = $('#next', root); if (nx) nx.addEventListener('click', () => { if (i < total - 1) { i++; draw(); } else finish(); });
      const inp = $('input.input', root); if (inp) inp.addEventListener('keydown', e => { if (e.key === 'Enter') (ck || nx).click(); });
    }
    function finish() {
      const res = { correct, total };
      if (opt.compact) {
        root.innerHTML = `<div class="box ${correct === total ? 'fix' : 'res'}"><span class="tag">Check-up</span><p><b>${correct} von ${total}</b> richtig. ${correct === total ? 'Stark!' : 'Schau dir die Erklärungen an und wiederhole den Fall.'}</p></div><button class="btn ghost" id="again">Neue Fragen</button>`;
        $('#again', root).addEventListener('click', () => route());
      } else {
        const pct = correct / total * 100;
        root.innerHTML = `<div class="panel grade fade-in"><div class="lbl">AUSWERTUNG</div><div class="led-num">${correct} / ${total}</div>
          <div class="grade-t" style="color:${pct >= 50 ? 'var(--gr)' : 'var(--led)'}">${Math.round(pct)} %</div>
          <div class="btn-row" style="justify-content:center"><button class="btn solid" id="restart">Nochmal</button><a class="btn cy" href="#/test">Andere Testart</a>${S.get('wrong', []).length ? '<a class="btn red" href="#/test/fehler">Fehler-Training</a>' : ''}</div></div>
          <h3><span class="n">✓</span>Durchsicht</h3>${qs.map((q, k) => { const sc = score(q, ans[q.id]); return `<div class="review-item ${sc === 1 ? '' : 'bad'}"><span class="mono" style="font-size:11px;color:var(--mute)">${k + 1} · ${q.s}</span><br>${q.q}<br><span class="${sc === 1 ? 'gr' : 'led'}">${sc === 1 ? '✔' : '✘'}</span> Richtig: <b>${answerText(q)}</b><div class="muted" style="font-size:13px">${q.e || ''}</div></div>`; }).join('')}`;
        $('#restart', root).addEventListener('click', () => route());
      }
      opt.onFinish && opt.onFinish(res);
    }
    draw();
  }

  /* =====================================================================
     TEST
     ===================================================================== */
  function renderTest(mode, arg) {
    const wrong = S.get('wrong', []), qs = S.get('qstats', {});
    if (mode === 'schnell') return startRun('Schnelltest', shuffle(QUIZ).slice(0, 10));
    if (mode === 'fehler') { const list = QUIZ.filter(q => wrong.includes(q.id)); if (!list.length) { toast('Keine falsch beantworteten Fragen gespeichert'); location.hash = '#/test'; return; } return startRun('Fehler-Training', shuffle(list)); }
    if (mode === 'klausur') return arg ? startExam(arg) : renderExamPick();
    const partStats = PARTS.map(p => { let ok = 0, n = 0; QUIZ.filter(q => q.s[0] === p.id).forEach(q => { const e = qs[q.id]; if (e) { ok += e.ok; n += e.n; } }); return { p, ok, n, cnt: QUIZ.filter(q => q.s[0] === p.id).length }; });
    view.innerHTML = `<div class="page-k">// TESTMODUS</div><h1 class="page-h">Test</h1>
      <p class="page-sub">${QUIZ.length} Wissensfragen (Single-/Multiple-Choice, Wahr/Falsch, Beträge) und die Klausur-Simulation mit <b>offenen Antworten</b> – so wie in der echten Prüfung.</p>
      <div class="grid g4">
        <a class="tile tile-hl" href="#/test/klausur"><span class="ic">// 90 MIN · OFFENE ANTWORTEN</span><h3>Klausur-Simulation</h3><p>Originalklausur A, B, C oder Zufallsmix. Bewertung mit Erwartungshorizont, Musterantworten und Note.</p></a>
        <a class="tile" href="#/test/schnell"><span class="ic">// 10 FRAGEN</span><h3>Schnelltest</h3><p>Zufällige Fragen aus allen Fällen, sofortiges Feedback.</p></a>
        <a class="tile" href="#" id="kapBtn"><span class="ic">// FREI WÄHLBAR</span><h3>Kapitel-Test</h3><p>Wähle Module oder Fälle und die Anzahl Fragen.</p></a>
        <a class="tile" href="#/test/fehler" style="${wrong.length ? '' : 'opacity:.45;pointer-events:none'}"><span class="ic">// ${wrong.length} FRAGEN</span><h3>Fehler-Training</h3><p>Nur die Fragen, die du zuletzt falsch beantwortet hast.</p></a>
      </div>
      <div id="kapPanel" class="panel" style="display:none;margin-top:18px"></div>
      <h3><span class="n">%</span>Deine Trefferquote je Teil</h3>
      <div class="grid g4">${partStats.map(s => `<div class="stat"><span class="lbl">${s.p.id === 'T' ? 'Toolkit' : s.p.title}</span><div class="led-num" style="font-size:34px">${s.n ? Math.round(s.ok / s.n * 100) + '%' : '--'}</div><div class="bar" style="margin-top:8px"><i style="width:${s.n ? s.ok / s.n * 100 : 0}%"></i></div><div class="muted mono" style="font-size:11px;margin-top:6px">${s.n} Antworten · ${s.cnt} Fragen</div></div>`).join('')}</div>
      ${examLogHTML()}`;
    $('#kapBtn').addEventListener('click', e => {
      e.preventDefault(); const p = $('#kapPanel'); p.style.display = 'block';
      p.innerHTML = `<div class="grid g4">${PARTS.map(pt => `<div><label class="chk" style="font-family:'Chakra Petch';font-weight:700;color:var(--or);text-transform:uppercase"><input type="checkbox" data-part="${pt.id}"> ${esc(pt.title)}</label>
        ${SEC.filter(s => s.part === pt.id).map(s => `<label class="chk"><input type="checkbox" data-sec="${s.id}"> ${s.id} ${esc(s.title)} <span class="muted mono" style="font-size:11px">(${QUIZ.filter(q => q.s === s.id).length})</span></label>`).join('')}</div>`).join('')}</div>
        <label class="f" for="cnt">Anzahl Fragen</label><select class="input" id="cnt" style="max-width:200px"><option>5</option><option selected>10</option><option>20</option><option value="999">alle</option></select>
        <div class="btn-row"><button class="btn solid" id="kapGo">▶ Test starten</button></div>`;
      $$('[data-part]', p).forEach(cb => cb.addEventListener('change', () => $$(`[data-sec^="${cb.dataset.part}-"]`, p).forEach(x => x.checked = cb.checked)));
      $('#kapGo').addEventListener('click', () => { const secs = $$('[data-sec]', p).filter(x => x.checked).map(x => x.dataset.sec); if (!secs.length) { toast('Bitte mindestens einen Abschnitt wählen'); return; } startRun('Kapitel-Test', shuffle(QUIZ.filter(q => secs.includes(q.s))).slice(0, +$('#cnt').value)); });
      p.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
  function examLogHTML() {
    const log = S.get('examLog', []); if (!log.length) return '';
    return `<h3><span class="n">≡</span>Deine Klausur-Simulationen</h3><div class="tbl-wrap"><table><tr><th>Datum</th><th>Klausur</th><th>Punkte</th><th>%</th><th>Note</th></tr>${log.slice(-8).reverse().map(e => `<tr><td class="mono">${new Date(e.at).toLocaleDateString('de-AT')}</td><td>${esc(e.title)}</td><td class="mono">${de(e.pts)} / ${e.max}</td><td class="mono">${Math.round(e.pct)} %</td><td>${note(e.pct).join(' · ')}</td></tr>`).join('')}</table></div>`;
  }
  function startRun(title, list) {
    view.innerHTML = `<div class="page-k">// TEST · ${esc(title.toUpperCase())}</div><h1 class="page-h">${esc(title)}</h1><div id="run"></div>`;
    runQuiz($('#run'), list, { mode: 'practice' }); window.scrollTo(0, 0);
  }

  /* ---------- Klausur-Simulation mit offenen Antworten ---------- */
  function mixSet() {
    const pick = []; let sum = 0;
    ['A', 'B', 'C'].forEach(p => shuffle(CASES.filter(c => c.part === p)).slice(0, 2).forEach(c => { pick.push(c); sum += c.pts; }));
    for (const c of shuffle(CASES)) { if (sum >= 66) break; if (!pick.includes(c) && sum + c.pts <= 70) { pick.push(c); sum += c.pts; } }
    return pick.sort((a, b) => a.id.localeCompare(b.id)).map(c => c.id);
  }
  function renderExamPick() {
    const run = S.get('examRun', null);
    view.innerHTML = `<div class="page-k">// TEST · KLAUSUR-SIMULATION</div><h1 class="page-h">Klausur-Simulation</h1>
      <p class="page-sub">Wie in der echten Prüfung: Sachverhalte lesen, <b>in ganzen Sätzen</b> und im Gutachtenstil antworten, Normen zitieren. Nach der Abgabe bewertest du dich mit dem <b>Erwartungshorizont</b>: Erkannte Stichwörter werden automatisch vorausgewählt, du korrigierst die Haken. Dazu Musterantworten und Note.</p>
      ${run && !run.done ? `<div class="box upd"><span class="tag">Laufende Klausur</span><p>${esc(run.title)} · begonnen ${new Date(run.start).toLocaleString('de-AT')}. <a href="#/test/klausur/weiter">Fortsetzen →</a></p></div>` : ''}
      <div class="grid g4">
        ${PARTS.filter(p => p.id !== 'T').map(p => `<button class="tile tile-btn" data-k="${p.id}"><span class="big-letter">${p.id}</span><span class="ic">// ${esc(p.subtitle)}</span><h3>${esc(p.title)}</h3><p>${CASES.filter(c => c.part === p.id).length} Fälle · ${CASES.filter(c => c.part === p.id).reduce((a, c) => a + c.pts, 0)} Punkte · 90 Minuten</p></button>`).join('')}
        <button class="tile tile-btn" data-k="mix"><span class="big-letter">?</span><span class="ic">// ZUFALLSMIX</span><h3>Gemischte Klausur</h3><p>Fälle aus allen drei Klausuren, rund 70 Punkte, 90 Minuten.</p></button>
      </div>
      <div class="panel" style="margin-top:16px"><label class="chk"><input type="checkbox" id="noTimer"> Übungsmodus ohne Zeitlimit</label>
        <p class="muted" style="font-size:13px;margin:6px 0 0">Notenschlüssel (angenommen, übliche FH-Skala, bitte mit deiner LV abgleichen): ab 88 % Sehr gut · 75,5 % Gut · 63 % Befriedigend · 50,5 % Genügend.</p></div>
      ${examLogHTML()}`;
    $$('[data-k]').forEach(b => b.addEventListener('click', () => {
      const k = b.dataset.k, ids = k === 'mix' ? mixSet() : CASES.filter(c => c.part === k).map(c => c.id);
      const max = ids.reduce((a, id) => a + secById(id).pts, 0), noT = $('#noTimer').checked;
      S.set('examRun', { title: k === 'mix' ? 'Zufallsmix' : partOf(k).title + ' · ' + partOf(k).subtitle, ids, answers: {}, start: Date.now(), deadline: noT ? null : Date.now() + 90 * 60000, max, done: false, cur: 0 });
      location.hash = '#/test/klausur/weiter';
    }));
  }
  function startExam(arg) {
    const run = S.get('examRun', null);
    if (!run) { location.hash = '#/test/klausur'; return; }
    if (run.done || arg === 'auswertung') return renderExamResult(run);
    const save = () => S.set('examRun', run);
    let iv = null;
    const draw = () => {
      const s = secById(run.ids[run.cur]);
      view.innerHTML = `<div class="page-k">// KLAUSUR-SIMULATION · ${esc(run.title.toUpperCase())}</div>
        <div class="q-top exam-top"><div style="flex:1"><h1 class="page-h" style="margin:0">${esc(run.title)}</h1><div class="mono muted" style="font-size:12px">FALL ${run.cur + 1} / ${run.ids.length} · ${run.max} PUNKTE GESAMT</div></div>${run.deadline ? '<div class="led-num timer" id="timer">--:--</div>' : '<div class="mono muted">OHNE ZEITLIMIT</div>'}</div>
        <div class="palette">${run.ids.map((id, k) => { const c = secById(id), filled = c.qs.some((_, qi) => (run.answers[id + '#' + qi] || '').trim()); return `<button class="btn ${k === run.cur ? 'solid' : filled ? 'cy' : 'ghost'}" data-jump="${k}">${id}<small>${c.pts}P</small></button>`; }).join('')}</div>
        <div class="case-title" style="margin-top:14px"><div class="case-id"><small>FALL</small>${s.id}</div><h2>${esc(s.title)}<span>Normen bitte selbst finden – Kodex erlaubt</span></h2><div class="pts">${String(s.pts).padStart(2, '0')}<small>P U N K T E</small></div></div>
        ${caseTaskHTML(s)}
        ${s.qs.map((q, qi) => `<label class="f" for="a${qi}">Antwort ${esc(q.l)} · ${q.p} P · Richtwert ${Math.round(q.p * 1.2)} min</label><textarea class="input draft" id="a${qi}" data-qi="${qi}" rows="${Math.min(14, 5 + q.p)}" placeholder="Fraglich ist, ob …">${esc(run.answers[s.id + '#' + qi] || '')}</textarea>`).join('')}
        <div class="btn-row"><button class="btn ghost" id="pv" ${run.cur === 0 ? 'disabled' : ''}>← Voriger Fall</button>${run.cur < run.ids.length - 1 ? '<button class="btn" id="nx">Nächster Fall →</button>' : ''}<button class="btn solid" id="submit">Klausur abgeben</button><button class="btn red" id="abort">Abbrechen</button></div>`;
      $$('textarea[data-qi]').forEach(t => t.addEventListener('input', () => { run.answers[s.id + '#' + t.dataset.qi] = t.value; save(); }));
      $$('[data-jump]').forEach(b => b.addEventListener('click', () => { run.cur = +b.dataset.jump; save(); draw(); window.scrollTo(0, 0); }));
      const pv = $('#pv'); pv.addEventListener('click', () => { run.cur--; save(); draw(); window.scrollTo(0, 0); });
      const nx = $('#nx'); if (nx) nx.addEventListener('click', () => { run.cur++; save(); draw(); window.scrollTo(0, 0); });
      $('#submit').addEventListener('click', () => {
        const open = run.ids.reduce((a, id) => a + secById(id).qs.filter((_, qi) => !(run.answers[id + '#' + qi] || '').trim()).length, 0);
        if (!confirm(`Klausur abgeben?${open ? ` ${open} Frage(n) sind noch unbeantwortet.` : ''}`)) return; submit();
      });
      $('#abort').addEventListener('click', () => { if (confirm('Klausur abbrechen? Deine Antworten werden verworfen.')) { S.set('examRun', null); location.hash = '#/test/klausur'; } });
      tick();
    };
    const submit = () => { clearInterval(iv); run.done = true; run.end = Date.now(); save(); location.hash = '#/test/klausur/auswertung'; };
    const tick = () => { if (!run.deadline) return; const t = $('#timer'); const s = (run.deadline - Date.now()) / 1000; if (t) { t.textContent = fmtTime(s); t.classList.toggle('warn', s < 600); } if (s <= 0) { toast('Zeit abgelaufen – die Klausur wird abgegeben'); submit(); } };
    if (run.deadline) { iv = setInterval(tick, 1000); onLeave(() => clearInterval(iv)); }
    draw();
  }
  function renderExamResult(run) {
    view.innerHTML = `<div class="page-k">// KLAUSUR-SIMULATION · AUSWERTUNG</div><h1 class="page-h">${esc(run.title)}</h1>
      <div class="panel grade fade-in"><div class="lbl">ERGEBNIS NACH ERWARTUNGSHORIZONT</div><div class="led-num" id="gPts">0 / ${run.max}</div><div class="grade-t" id="gNote"></div>
        <p class="muted" style="font-size:13px;max-width:560px;margin:8px auto 0">Grün markierte Punkte hat die Stichwortsuche in deiner Antwort gefunden (Vorauswahl). Prüfe ehrlich: Hast du den Punkt <b>begründet</b> oder nur ein Wort genannt? Die Haken kannst du ändern.</p>
        <div class="btn-row" style="justify-content:center"><button class="btn solid" id="saveRes">Ergebnis speichern</button><a class="btn cy" href="#/test/klausur">Neue Klausur</a></div></div>
      <div id="cases"></div>`;
    const totals = {};
    const upd = () => { const p = Object.values(totals).reduce((a, b) => a + b, 0), pct = p / run.max * 100, n = note(pct); $('#gPts').textContent = de(p) + ' / ' + run.max; const g = $('#gNote'); g.textContent = `${Math.round(pct)} % · Note ${n[0]} · ${n[1]}`; g.style.color = n[0] < 5 ? 'var(--gr)' : 'var(--led)'; return { p, pct }; };
    $('#cases').innerHTML = run.ids.map(id => { const s = secById(id); return `<section class="exam-case" data-case="${id}"><div class="case-top"><span class="lbl">CASE FILE // <b>${id}</b></span><span class="lbl" data-cs="${id}">0 / ${s.pts} P</span></div><h3><span class="n">${id}</span>${esc(s.title)}</h3><div class="eh-wrap"></div><a class="mono" style="font-size:12px" href="#/faelle/${id}">→ Ganze Musterlösung ${id}</a></section>`; }).join('');
    run.ids.forEach(id => {
      const s = secById(id), wrap = $(`[data-case="${id}"] .eh-wrap`);
      const b = ehBlock(s, s.qs.map((_, qi) => run.answers[id + '#' + qi] || ''), 'exam.' + run.start + '.' + id);
      wrap.innerHTML = b.html; b.bind(wrap, tot => { totals[id] = tot; $(`[data-cs="${id}"]`).textContent = de(tot) + ' / ' + s.pts + ' P'; upd(); });
    });
    $('#saveRes').addEventListener('click', () => { const { p, pct } = upd(); const log = S.get('examLog', []).filter(e => e.start !== run.start); log.push({ start: run.start, at: Date.now(), title: run.title, pts: p, max: run.max, pct }); S.set('examLog', log); toast('Ergebnis gespeichert'); });
  }

  /* =====================================================================
     GLOSSARY
     ===================================================================== */
  function renderGlossary(pre) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const nrm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
    const has = new Set(GLOSS.map(g => nrm(g[0])[0]));
    view.innerHTML = `<div class="page-k">// APPENDIX // X-02</div><h1 class="page-h">Glossar</h1>
      <p class="page-sub">${GLOSS.length} Fachbegriffe aus den Lösungen. Suche nach Begriff oder Inhalt; jeder Eintrag verlinkt den passenden Fall. <a href="#/karten">Alle Begriffe als Karteikarten →</a></p>
      <input class="input" id="gq" type="search" placeholder="Begriff oder Stichwort suchen, z. B. laesio, § 1313a, Vertrauensmann …" aria-label="Glossar durchsuchen" value="${pre ? esc(pre) : ''}">
      <div class="az" id="az"><button class="on all" data-l="">ALLE</button>${letters.map(l => `<button data-l="${l}" ${has.has(l) ? '' : 'disabled'}>${l}</button>`).join('')}</div>
      <div class="muted mono" id="gcount" style="font-size:12px;margin-bottom:10px"></div><div class="grid g2" id="glist"></div>`;
    let letter = '';
    const draw = () => {
      const q = $('#gq').value.trim().toLowerCase(), re = q ? new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig') : null;
      const list = GLOSS.filter(g => (!letter || nrm(g[0])[0] === letter) && (!q || (g[0] + ' ' + g[1]).toLowerCase().includes(q))).sort((a, b) => a[0].localeCompare(b[0], 'de'));
      $('#gcount').textContent = list.length + ' BEGRIFFE';
      const hl = s => re ? esc(s).replace(re, '<mark>$1</mark>') : esc(s);
      $('#glist').innerHTML = list.map(g => { const s = secById(g[2]); return `<div class="g-item"><h4>${hl(g[0])}</h4><p>${hl(g[1])}</p><a href="#/faelle/${g[2]}">→ ${g[2]} ${esc(s ? s.title : '')}</a></div>`; }).join('') || '<p class="muted">Kein Treffer.</p>';
    };
    $('#gq').addEventListener('input', draw);
    $$('#az button').forEach(b => b.addEventListener('click', () => { letter = b.dataset.l; $$('#az button').forEach(x => x.classList.toggle('on', x === b)); draw(); }));
    draw();
  }

  /* =====================================================================
     ANHANG: Fristen-Radar + Normen-Index
     ===================================================================== */
  function renderAnhang() {
    const D = window.FB_DEADLINES || [], N = window.FB_NORMS || [];
    const link = s => s.replace(/\b([TABCX]-\d\d)\b/g, m => secById(m) ? `<a href="#/faelle/${m}">${m}</a>` : m);
    view.innerHTML = `<div class="page-k">// APPENDIX // X-01 · X-03</div><h1 class="page-h">Anhang</h1>
      <p class="page-sub">Spickzettel für die letzte Woche: alle Fristen aus den 27 Fällen und welche Norm in welchem Fall vorkommt. Mit konkreten Daten rechnen: <a href="#/labor/fristen">Fristen-Rechner</a>.</p>
      <div class="case-top"><span class="lbl">APPENDIX // <b>X-01</b></span><span class="lbl">SPICKZETTEL</span></div><h2 class="sec-h">Fristen-Radar</h2>
      <div class="tbl-wrap"><table><tr><th>Was</th><th>Frist</th><th>Beginn</th><th>Norm · Fall</th></tr>${D.map(d => `<tr><td class="k">${esc(d[0])}</td><td>${esc(d[1])}</td><td>${esc(d[2])}</td><td class="mono" style="font-size:12px">${link(esc(d[3]))}</td></tr>`).join('')}</table></div>
      <div class="box upd"><span class="tag">Patch 2022</span><p>Seit 2022 bleiben nach Ende der Gewährleistungsfrist 3 Monate zur gerichtlichen Geltendmachung. Vermutungsfrist beim Verbraucherkauf (VGG): 1 Jahr; sonst 6 Monate (§ 924).</p></div>
      <div class="case-top" style="margin-top:28px"><span class="lbl">APPENDIX // <b>X-03</b></span><span class="lbl">REGISTER</span></div><h2 class="sec-h">Normen-Index</h2>
      <input class="input" id="nq" type="search" placeholder="Norm suchen, z. B. 1313a, 934, FAGG …" aria-label="Normen durchsuchen">
      <div class="tbl-wrap" style="margin-top:10px"><table id="nt"></table></div>
      <div class="hatch brk orx" style="margin-top:24px;text-align:center"><span class="c3"></span><span class="c4"></span><span class="lbl">[ VIEL ERFOLG BEI DER PRÜFUNG ]</span><p class="mono" style="margin:6px 0 0">BEGRÜNDUNG &gt; ERGEBNIS · NORM ZITIEREN · ALLE VARIANTEN BEANTWORTEN</p></div>`;
    const draw = () => { const q = $('#nq').value.trim().toLowerCase();
      $('#nt').innerHTML = `<tr><th>Gesetz</th><th>Norm</th><th>Fälle</th></tr>` + N.filter(n => !q || n.join(' ').toLowerCase().includes(q)).map(n => `<tr><td class="k">${esc(n[0])}</td><td class="mono">${esc(n[1])}</td><td class="mono">${link(esc(n[2]))}</td></tr>`).join(''); };
    $('#nq').addEventListener('input', draw); draw();
  }

  /* =====================================================================
     FLASHCARDS (Leitner, 3D flip)
     ===================================================================== */
  function renderCards() {
    const tags = [...new Set(CARDS.map(c => c.tag))];
    const decks = [['all', 'Alle Karten'], ['due', 'Noch nicht sicher (Box 1–3)'], ['hard', 'Schwierig (Box 1)']].concat(tags.map(t => ['tag:' + t, t + (t === 'Begriff' ? 'e' : t.endsWith('e') ? 'n' : 'e')])).concat(PARTS.map(p => ['part:' + p.id, p.title]));
    view.innerHTML = `<div class="page-k">// KARTEIKARTEN</div><h1 class="page-h">Karteikarten</h1>
      <p class="page-sub">Leitner-System: Gewusste Karten wandern eine Box weiter, nicht gewusste zurück in Box 1. Karte anklicken oder <span class="kbd">LEERTASTE</span> zum Umdrehen, <span class="kbd">←</span> nochmal, <span class="kbd">→</span> gewusst.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:end"><div style="flex:1;min-width:220px"><label class="f" for="deck">Stapel</label><select class="input" id="deck">${decks.map(d => `<option value="${d[0]}">${esc(d[1])}</option>`).join('')}</select></div>
        <button class="btn ghost" id="shuf">⤮ Neu mischen</button><button class="btn red" id="rst">Stapel zurücksetzen</button></div>
      <div class="boxes" id="boxes"></div><div id="stage"></div>`;
    let queue = [], cur = null, done = 0, sessionN = 0, busy = false;
    const deckCards = () => { const lt = S.get('leitner', {}), d = $('#deck').value;
      return CARDS.filter(c => d === 'all' ? true : d === 'due' ? (lt[c.id] || 1) <= 3 : d === 'hard' ? (lt[c.id] || 1) === 1 && lt[c.id] : d.startsWith('tag:') ? c.tag === d.slice(4) : c.s[0] === d.split(':')[1]); };
    const drawBoxes = () => { const lt = S.get('leitner', {}), cnt = [0, 0, 0, 0, 0]; deckCards().forEach(c => cnt[(lt[c.id] || 1) - 1]++); $('#boxes').innerHTML = cnt.map((n, i) => `<div class="b${i + 1}"><span class="lbl">BOX ${i + 1}</span><span class="led-num">${n}</span></div>`).join(''); };
    const build = () => { const lt = S.get('leitner', {}); queue = shuffle(deckCards()).sort((a, b) => (lt[a.id] || 1) - (lt[b.id] || 1)).slice(0, 20); sessionN = queue.length; done = 0; drawBoxes(); next(); };
    const next = () => {
      cur = queue.shift();
      if (!cur) { $('#stage').innerHTML = `<div class="panel grade fade-in"><div class="lbl">RUNDE BEENDET</div><div class="led-num">${done}/${sessionN}</div><p>${sessionN ? 'Karten in dieser Runde gewusst.' : 'Dieser Stapel ist leer. Wähle einen anderen.'}</p><div class="btn-row" style="justify-content:center"><button class="btn solid" id="more">Nächste Runde</button></div></div>`; const m = $('#more'); if (m) m.addEventListener('click', build); return; }
      const sec = secById(cur.s), lt = S.get('leitner', {});
      $('#stage').innerHTML = `<div class="mono muted" style="text-align:center;font-size:12px;margin-top:6px">KARTE ${sessionN - queue.length}/${sessionN} · BOX ${lt[cur.id] || 1}</div>
        <div class="fc-wrap deal-in" id="fw"><div class="fc-move"><div class="fc" id="fc" tabindex="0" role="button" aria-label="Karte umdrehen">
          <div class="fc-face fc-front"><span class="tag">[ ${esc(cur.tag)} ]</span><div class="t">${esc(cur.f)}</div><span class="src">${cur.s}</span><span class="hint">KLICK = UMDREHEN</span></div>
          <div class="fc-face fc-back"><span class="tag">[ ANTWORT ]</span><div class="t">${esc(cur.b)}</div><span class="src">→ ${cur.s} ${esc(sec ? sec.title : '')}</span></div>
        </div></div><div class="stack-shadow"></div><div class="stack-shadow s2"></div></div>
        <div class="fc-actions"><button class="btn red" id="no">← Nochmal</button><button class="btn ghost" id="flip">⟲ Umdrehen</button><button class="btn gr" id="yes">Gewusst →</button></div>`;
      const fc = $('#fc'), flip = () => fc.classList.toggle('flip');
      fc.addEventListener('click', flip); $('#flip').addEventListener('click', flip);
      $('#yes').addEventListener('click', () => grade(true)); $('#no').addEventListener('click', () => grade(false));
    };
    const grade = ok => {
      if (busy || !cur) return; busy = true;
      const lt = S.get('leitner', {}), b = lt[cur.id] || 1; lt[cur.id] = ok ? Math.min(5, b + 1) : 1; S.set('leitner', lt);
      if (ok) done++; else queue.splice(Math.min(queue.length, 3), 0, cur);
      const fw = $('#fw'); fw.classList.remove('deal-in'); void fw.offsetWidth; fw.classList.add(ok ? 'out-right' : 'out-left');
      drawBoxes(); setTimeout(() => { busy = false; next(); }, 430);
    };
    const key = e => { if (!$('#fc') || ['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      if (e.key === ' ') { e.preventDefault(); $('#fc').classList.toggle('flip'); } if (e.key === 'ArrowRight') grade(true); if (e.key === 'ArrowLeft') grade(false); };
    document.addEventListener('keydown', key); onLeave(() => document.removeEventListener('keydown', key));
    $('#deck').addEventListener('change', build); $('#shuf').addEventListener('click', build);
    $('#rst').addEventListener('click', () => { if (!confirm('Boxen für diesen Stapel zurücksetzen?')) return; const lt = S.get('leitner', {}); deckCards().forEach(c => delete lt[c.id]); S.set('leitner', lt); build(); });
    build();
  }

  /* =====================================================================
     VIDEOS
     ===================================================================== */
  function renderVideos() {
    view.innerHTML = `<div class="page-k">// VIDEOS</div><h1 class="page-h">Erklärvideos</h1>
      <p class="page-sub">${VIDS.length} vertonte Erklärvideos im Neon-Brass-Stil zu den acht Prüfschemata, je rund zwei Minuten. Mit Untertiteln, Kapitelmarken und anklickbarem Transkript.</p>
      ${VIDS.length ? `<div class="grid g3">${VIDS.map((v, i) => `<a class="v-card fade-in" style="animation-delay:${i * 50}ms" href="#/videos/${v.id}"><div class="v-thumb"><img src="videos/${v.id}.jpg" alt="" loading="lazy"><div class="play"><i>▶</i></div><span class="dur">${fmtTime(v.duration)}</span></div>
        <div class="v-body"><span class="mono or" style="font-size:11px">VIDEO ${String(i + 1).padStart(2, '0')} · ${v.sec}</span><h3>${esc(v.title)}</h3><p>${esc(v.sub)}</p></div></a>`).join('')}</div>` : '<p class="muted">Videos werden gerade erstellt.</p>'}`;
  }
  function renderPlayer(id) {
    const v = VIDS.find(x => x.id === id); if (!v) { renderVideos(); return; }
    const i = VIDS.indexOf(v), nx = VIDS[i + 1];
    view.innerHTML = `<div class="page-k">// VIDEO ${String(i + 1).padStart(2, '0')} · ${v.sec}</div><h1 class="page-h">${esc(v.title)}</h1><p class="page-sub">${esc(v.sub)}</p>
      <div class="player"><div>
        <video id="vid" controls preload="metadata" playsinline poster="videos/${v.id}.jpg"><source src="videos/${v.id}.mp4" type="video/mp4"><track kind="subtitles" srclang="de" label="Deutsch" src="videos/${v.id}.vtt" default></video>
        <div class="btn-row"><span class="mono muted" style="font-size:12px;align-self:center">TEMPO</span>${[0.75, 1, 1.25, 1.5].map(r => `<button class="btn ghost" data-rate="${r}" style="padding:5px 10px">${String(r).replace('.', ',')}×</button>`).join('')}
          <a class="btn cy" href="#/faelle/${v.sec}">Modul ${v.sec} lesen</a>${nx ? `<a class="btn" href="#/videos/${nx.id}">Nächstes Video →</a>` : ''}</div>
      </div><aside>
        <div class="lbl">KAPITELMARKEN</div>${v.chapters.map(c => `<button class="chap" data-t="${c.t}"><span class="t">${fmtTime(c.t)}</span><span>${esc(c.title)}</span></button>`).join('')}
        <div class="lbl" style="margin-top:16px">TRANSKRIPT</div><div class="transcript" id="tr"><p class="muted">Wird geladen …</p></div>
      </aside></div>`;
    const vid = $('#vid'), tr = $('#tr');
    $$('[data-rate]').forEach(b => b.addEventListener('click', () => { vid.playbackRate = +b.dataset.rate; $$('[data-rate]').forEach(x => x.classList.toggle('solid', x === b)); }));
    $$('.chap').forEach(b => b.addEventListener('click', () => { vid.currentTime = +b.dataset.t; vid.play(); }));
    const track = vid.textTracks[0];
    const buildTr = () => { if (!track || !track.cues || !track.cues.length) return false;
      tr.innerHTML = Array.from(track.cues).map((c, k) => `<p data-k="${k}" data-s="${c.startTime}">${esc(c.text)}</p>`).join('');
      $$('p', tr).forEach(p => p.addEventListener('click', () => { vid.currentTime = +p.dataset.s + 0.01; vid.play(); })); return true; };
    if (track) { track.mode = 'showing'; const te = vid.querySelector('track'); te.addEventListener('load', buildTr); setTimeout(() => { if (!buildTr()) tr.innerHTML = '<p class="muted">Transkript ist über die Untertitel im Player verfügbar.</p>'; }, 1500); }
    vid.addEventListener('timeupdate', () => {
      const t = vid.currentTime;
      $$('.chap').forEach((b, k, arr) => b.classList.toggle('on', t >= +b.dataset.t && (k === arr.length - 1 || t < +arr[k + 1].dataset.t)));
      let act = null; $$('p[data-s]', tr).forEach(p => { const on = t >= +p.dataset.s && (!p.nextElementSibling || t < +p.nextElementSibling.dataset.s); p.classList.toggle('on', on); if (on) act = p; });
      if (act && !tr.matches(':hover')) { const top = act.offsetTop - tr.offsetTop - 60; if (Math.abs(tr.scrollTop - top) > 40) tr.scrollTop = top; }
    });
    onLeave(() => vid.pause());
  }

  /* =====================================================================
     LAB
     ===================================================================== */
  function renderLab(id) {
    const t = tool(id) || LAB[0];
    view.innerHTML = `<div class="page-k">// INTERAKTIVES LABOR</div><h1 class="page-h">Labor</h1>
      <p class="page-sub">Verstehen durch Ausprobieren: Rechner, Prüf-Assistenten und Spiele zu den Prüfschemata.</p>
      <div class="lab-nav" role="tablist">${LAB.map(x => `<button role="tab" aria-selected="${x === t}" class="${x === t ? 'on' : ''}" data-tool="${x.id}">${esc(x.title)}</button>`).join('')}</div>
      <div id="tool" class="lab-tool"></div>`;
    $$('[data-tool]').forEach(b => b.addEventListener('click', () => { history.replaceState(null, '', '#/labor/' + b.dataset.tool); cleanup.forEach(f => { try { f(); } catch (e) { } }); cleanup = []; renderLab(b.dataset.tool); }));
    const el = $('#tool');
    el.innerHTML = `<div class="case-top"><span class="lbl">LAB // <b>${t.id.toUpperCase()}</b></span><span class="lbl">MODUL ${t.sec}</span></div><h2 class="sec-h">${esc(t.title)}</h2><p class="muted" style="margin-top:0">${t.desc} <a href="#/faelle/${t.sec}" class="mono" style="font-size:12px">→ ${t.sec}</a></p><div id="toolBody"></div>`;
    const body = $('#toolBody');
    t.render(body, { toast, shuffle, esc, onLeave });
    const paint = () => $$('input[type=range]', body).forEach(r => { const mn = +r.min || 0, mx = +r.max || 100; r.style.setProperty('--p', ((r.value - mn) / (mx - mn) * 100) + '%'); });
    body.addEventListener('input', paint); body.addEventListener('change', paint); body.addEventListener('click', paint); paint();
  }

  /* =====================================================================
     SEARCH (Strg + K)
     ===================================================================== */
  const IDX = [].concat(
    SEC.map(s => ({ k: s.kind === 'case' ? 'FALL' : 'MODUL', id: s.id, t: s.title, sub: s.sub, href: '#/faelle/' + s.id, body: strip([s.title, s.topic, s.sub, s.sv, s.html].join(' ')) })),
    GLOSS.map(g => ({ k: 'GLOSSAR', id: g[2], t: g[0], sub: g[1], href: '#/glossar/' + encodeURIComponent(g[0]), body: g[0] + ' ' + g[1] })),
    LAB.map(l => ({ k: 'LABOR', id: l.sec, t: l.title, sub: l.desc, href: '#/labor/' + l.id, body: l.title + ' ' + l.desc })),
    VIDS.map(v => ({ k: 'VIDEO', id: v.sec, t: v.title, sub: v.sub, href: '#/videos/' + v.id, body: v.title + ' ' + v.sub + ' ' + v.chapters.map(c => c.title).join(' ') })));
  let sbox = null;
  function closeSearch() { if (sbox) { sbox.remove(); sbox = null; } }
  function openSearch() {
    if (sbox) return; sbox = document.createElement('div'); sbox.className = 'search-ov';
    sbox.innerHTML = `<div class="search-box" role="dialog" aria-label="Suche"><div class="lbl">[ SUCHE ] // STRG + K · ESC SCHLIESST</div><input class="input" id="sq" type="search" placeholder="Fall, Norm oder Begriff: z. B. § 1315, Fixgeschäft, Kaffee …" autocomplete="off"><div id="sr" class="search-res"></div></div>`;
    document.body.appendChild(sbox);
    sbox.addEventListener('click', e => { if (e.target === sbox) closeSearch(); });
    const inp = $('#sq', sbox), sr = $('#sr', sbox); inp.focus();
    inp.addEventListener('input', () => {
      const q = inp.value.trim().toLowerCase(); if (q.length < 2) { sr.innerHTML = ''; return; }
      const words = q.split(/\s+/);
      const hits = IDX.map(x => { const b = x.body.toLowerCase(), tl = x.t.toLowerCase(); if (!words.every(w => b.includes(w) || tl.includes(w) || x.id.toLowerCase() === w)) return null;
        let sc = words.reduce((a, w) => a + (tl.includes(w) ? 5 : 0) + (x.id.toLowerCase() === w ? 8 : 0), 0); const pos = b.indexOf(words[0]);
        return { x, sc, snip: pos >= 0 ? (pos > 40 ? '…' : '') + x.body.slice(Math.max(0, pos - 40), pos + 90) + '…' : x.sub }; }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 12);
      const re = new RegExp('(' + words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'ig');
      sr.innerHTML = hits.map(h => `<a href="${h.x.href}" class="sr-item"><span class="chip ${h.x.k === 'FALL' ? 'o' : h.x.k === 'MODUL' ? 'm' : h.x.k === 'GLOSSAR' ? 'g' : 'c'}">${h.x.k}</span><b>${esc(h.x.id ? h.x.id + ' · ' : '')}${esc(h.x.t)}</b><span class="muted">${esc(h.snip).replace(re, '<mark>$1</mark>')}</span></a>`).join('') || '<p class="muted">Kein Treffer.</p>';
      $$('a', sr).forEach(a => a.addEventListener('click', closeSearch));
    });
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { const a = $('#sr a', sbox); if (a) { location.hash = a.getAttribute('href'); closeSearch(); } } });
  }
  document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); } });
  $('#searchBtn').addEventListener('click', openSearch);

  route();
})();
