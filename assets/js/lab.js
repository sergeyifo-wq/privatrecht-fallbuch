/* Interaktives Labor: Rechner, Prüf-Assistenten und Spiele zu den Prüfschemata. Jedes Tool rendert in ein Element. */
(function () {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const eur = n => Number(n).toLocaleString('de-AT', { maximumFractionDigits: 0 }) + ' €';
  const C = { or: '#ff6200', cy: '#19f0ff', mg: '#ff2a6d', ye: '#ffd400', gr: '#39ff88', led: '#ff2b2b', bl: '#2f6bff', st: '#adb3b7', mu: '#8d949a', line: '#2c2c33' };
  const slider = (id, label, min, max, step, val, unit = '') => `<div class="sl"><div class="sl-head"><label for="${id}">${label}</label><span class="sl-val"><span class="cy" id="${id}V">${val}</span>${unit ? ' <small>' + unit + '</small>' : ''}</span></div><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"></div>`;
  const num = (id, label, val, unit = '') => `<label class="f" for="${id}">${label}${unit ? ' [' + unit + ']' : ''}</label><input class="input" type="number" id="${id}" value="${val}" step="any" min="0">`;
  const seg = (name, opts, cur) => `<div class="seg seg-sm" role="group" data-seg="${name}">${opts.map(([v, l]) => `<button type="button" data-v="${v}" class="${v === cur ? 'on' : ''}" aria-pressed="${v === cur}">${l}</button>`).join('')}</div>`;
  const bindSeg = (el, onChange) => $$('[data-seg]', el).forEach(g => $$('button', g).forEach(b => b.addEventListener('click', () => { $$('button', g).forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); }); onChange(); })));
  const segVal = (el, name) => { const b = $(`[data-seg="${name}"] button.on`, el); return b ? b.dataset.v : null; };
  const chk = (id, label, on) => `<label class="chk"><input type="checkbox" id="${id}" ${on ? 'checked' : ''}> ${label}</label>`;
  const verdict = (ok, title, body) => `<div class="box ${ok === true ? 'fix' : ok === false ? 'err' : 'upd'}"><span class="tag">${ok === true ? '✔ ' : ok === false ? '✘ ' : '~ '}${title}</span><p>${body}</p></div>`;
  const tools = [];
  const addMonths = (d, m) => { const x = new Date(d); const day = x.getDate(); x.setMonth(x.getMonth() + m); if (x.getDate() < day) x.setDate(0); return x; };
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const fmtD = d => d.toLocaleDateString('de-AT', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const iso = d => d.toISOString().slice(0, 10);

  /* ---------- 1. Fristen-Rechner ---------- */
  tools.push({ id: 'fristen', title: 'Fristen-Rechner', sec: 'T-05',
    desc: 'Datum eingeben, Fall wählen, und du siehst jede relevante Frist mit konkretem Enddatum. Unten der Fristen-Radar aus dem Anhang X-01.',
    render(el) {
      const today = new Date();
      el.innerHTML = `<div class="lab-grid"><div class="panel">
        <label class="f" for="dV">Vertragsschluss</label><input class="input" type="date" id="dV" value="${iso(addMonths(today, -6))}">
        <label class="f" for="dU">Übergabe / Erhalt der Ware</label><input class="input" type="date" id="dU" value="${iso(addMonths(today, -5))}">
        <label class="f" for="dK">Kenntnis von Schaden + Schädiger</label><input class="input" type="date" id="dK" value="${iso(today)}">
        <div class="lbl" style="margin-top:14px">SACHE</div>${seg('sache', [['b', 'beweglich'], ['u', 'unbeweglich / Gebäude']], 'b')}
        <div class="lbl" style="margin-top:10px">PARTEIEN</div>${seg('p', [['b2c', 'Verbraucherkauf (VGG)'], ['abgb', 'sonst (ABGB)']], 'b2c')}
        <label class="f" for="dH">Heute (Prüfdatum)</label><input class="input" type="date" id="dH" value="${iso(today)}"></div>
        <div><div id="out"></div></div></div>
        <h3><span class="n">X</span>Fristen-Radar</h3><div class="tbl-wrap"><table id="radar"></table></div>`;
      const draw = () => {
        const V = new Date($('#dV', el).value), U = new Date($('#dU', el).value), K = new Date($('#dK', el).value), H = new Date($('#dH', el).value);
        if ([V, U, K, H].some(d => isNaN(d))) return;
        const unb = segVal(el, 'sache') === 'u', b2c = segVal(el, 'p') === 'b2c' && !unb;
        const gw = addMonths(U, unb ? 36 : 24), gwK = addMonths(gw, 3);
        const rows = [
          ['Vermutungsfrist', b2c ? '1 Jahr ab Übergabe (§ 11 VGG)' : '6 Monate ab Übergabe (§ 924)', addMonths(U, b2c ? 12 : 6), 'Mangel gilt als bei Übergabe vorhanden'],
          ['Gewährleistung', (unb ? '3' : '2') + ' Jahre ab Übergabe (§ 933)', gw, 'Mangel muss in dieser Zeit hervorkommen'],
          ['… gerichtlich geltend machen', '+ 3 Monate', gwK, 'Klage bis spätestens'],
          ['Irrtumsanfechtung', '3 Jahre ab Vertragsschluss (§ 1487)', addMonths(V, 36), ''],
          ['laesio enormis', '3 Jahre ab Vertragsschluss (§ 1487)', addMonths(V, 36), ''],
          ['Anfechtung wegen List', '30 Jahre (hA, § 1478)', addMonths(V, 360), ''],
          ['Schadenersatz', '3 Jahre ab Kenntnis (§ 1489)', addMonths(K, 36), 'absolut 30 Jahre'],
          ['Verschuldensvermutung § 933a', '10 Jahre ab Übergabe', addMonths(U, 120), ''],
          ['FAGG-Rücktritt (Fernabsatz)', '14 Tage ab Erhalt (§ 11)', addDays(U, 14), 'ohne Belehrung + 12 Monate']];
        $('#out', el).innerHTML = `<div class="tbl-wrap"><table><tr><th>Frist</th><th>Regel</th><th>Ende</th><th>Status</th></tr>${rows.map(r => { const open = H <= r[2];
          return `<tr><td class="k">${r[0]}</td><td>${r[1]}${r[3] ? `<br><span class="muted" style="font-size:12px">${r[3]}</span>` : ''}</td><td class="mono">${fmtD(r[2])}</td><td><span class="chip ${open ? 'g' : 'r'}" style="${open ? 'border-color:var(--gr);color:var(--gr)' : ''}">${open ? 'OFFEN' : 'ABGELAUFEN'}</span></td></tr>`; }).join('')}</table></div>
          <p class="muted" style="font-size:13px">Vereinfachte Lernhilfe: Hemmung, Unterbrechung und vertragliche Verkürzungen (z. B. 1 Jahr bei gebrauchten Sachen) sind nicht berücksichtigt.</p>`;
      };
      $$('input', el).forEach(i => i.addEventListener('input', draw)); bindSeg(el, draw); draw();
      const D = window.FB_DEADLINES || [];
      $('#radar', el).innerHTML = `<tr><th>Was</th><th>Frist</th><th>Beginn</th><th>Norm · Fall</th><th style="min-width:160px">Dauer</th></tr>` + D.map(d => {
        const w = Math.min(100, Math.log10(1 + d[4] * 12) / Math.log10(1 + 360) * 100);
        return `<tr><td class="k">${d[0]}</td><td>${d[1]}</td><td>${d[2]}</td><td class="mono" style="font-size:12px">${d[3]}</td><td><div class="fbar"><i style="width:${w}%;background:var(--${d[5] === 'st' ? 'steel' : d[5]})"></i></div></td></tr>`; }).join('');
    } });

  /* ---------- 2. Gewährleistungs-Navigator ---------- */
  tools.push({ id: 'gewaehr', title: 'Gewährleistungs-Navigator', sec: 'T-05',
    desc: 'Stell den Fall ein und der Navigator führt dich durch Mangel, Vermutung, Frist und Stufenbau – wie in A-03, B-02 und C-03.',
    render(el) {
      el.innerHTML = `<div class="lab-grid"><div class="panel">
        <div class="lbl">PARTEIEN</div>${seg('p', [['b2c', 'Unternehmer → Verbraucher'], ['b2b', 'B2B / privat']], 'b2c')}
        <div class="lbl" style="margin-top:10px">SACHE</div>${seg('s', [['b', 'beweglich'], ['u', 'unbeweglich']], 'b')}
        ${slider('m', 'Mangel hervorgekommen nach', 0, 60, 1, 1, 'Monaten')}
        <div style="margin-top:10px">${chk('off', 'Mangel war bei Übergabe offenkundig (§ 928)')}${chk('ver', 'Verkäufer verweigert Verbesserung/Austausch')}${chk('unm', 'Verbesserung und Austausch unmöglich (z. B. Unikat)')}${chk('ger', 'Mangel ist geringfügig (z. B. Kratzer)')}${chk('sch', 'Mangel ist schwerwiegend (z. B. Brand)')}${chk('vs', 'Verkäufer trifft Verschulden')}</div></div>
        <div id="out"></div></div>`;
      const draw = () => {
        const b2c = segVal(el, 'p') === 'b2c', unb = segVal(el, 's') === 'u', m = +$('#m', el).value; $('#mV', el).textContent = m;
        const g = id => $('#' + id, el).checked;
        const vgg = b2c && !unb, vermM = vgg ? 12 : 6, fristM = unb ? 36 : 24;
        let h = '';
        if (g('off')) { h += verdict(false, 'Keine Gewährleistung', '§ 928: Für Mängel, die bei Übergabe in die Augen fallen, wird nicht gehaftet (außer Arglist oder zugesagte Mangelfreiheit).' + (b2c ? ' <b>Patch 2022:</b> Im Verbrauchergeschäft ist das Verhältnis zum VGG umstritten (→ C-03).' : '')); }
        else if (m > fristM) {
          h += verdict(false, 'Gewährleistungsfrist abgelaufen', `Der Mangel kam erst nach ${m} Monaten hervor; die Frist beträgt ${fristM / 12} Jahre (§ 933). Es bleibt <b>Schadenersatz nach § 933a</b>${m <= 120 ? ' mit Verschuldensvermutung (bis 10 J nach Übergabe)' : ''}${g('vs') ? '' : ' – setzt aber Verschulden voraus'}. → B-02 Var. b`);
        } else {
          h += verdict(m <= vermM ? true : null, m <= vermM ? 'Vermutung greift' : 'Vermutung abgelaufen', m <= vermM ? `Innerhalb von ${vermM} Monaten (${vgg ? '§ 11 VGG' : '§ 924 ABGB'}) wird vermutet, dass der Mangel schon bei Übergabe vorlag. Der Verkäufer muss das Gegenteil beweisen.` : `Nach ${vermM} Monaten muss der Übernehmer beweisen, dass der Mangel bei Übergabe (zumindest im Keim) vorlag. → B-02 Var. a`);
          const s2 = g('ver') || g('unm') || (vgg && g('sch'));
          h += verdict(true, s2 ? 'Sofort Stufe 2' : 'Stufe 1: Verbesserung oder Austausch', s2 ? `Grund: ${[g('ver') && 'Verkäufer verweigert', g('unm') && 'Stufe 1 unmöglich', vgg && g('sch') && 'schwerwiegender Mangel (VGG)'].filter(Boolean).join(' · ')}. ${g('ger') ? '<b>Preisminderung</b> – Wandlung ist bei geringfügigem Mangel ausgeschlossen.' : '<b>Preisminderung oder Wandlung</b> nach Wahl.'}` : 'Der Verkäufer bekommt die „zweite Chance“ (§ 932 / VGG). Erst wenn er verweigert, zu langsam ist oder Stufe 1 unmöglich/unzumutbar ist, geht es auf Stufe 2.');
          h += `<div class="panel" style="margin-top:12px"><div class="out-row"><span>Gewährleistungsfrist</span><b>${fristM / 12} J ab Übergabe</b></div><div class="out-row"><span>Klage bis</span><b>+ 3 Monate</b></div><div class="out-row"><span>Gewährleistung abdingbar?</span><b class="${b2c ? 'led' : 'gr'}">${b2c ? 'nein (VGG / § 9 KSchG)' : 'ja, grundsätzlich'}</b></div><div class="out-row"><span>Schadenersatz § 933a</span><b>${g('vs') ? 'zusätzlich möglich' : 'nur bei Verschulden'}</b></div></div>`;
        }
        $('#out', el).innerHTML = h;
      };
      $$('input', el).forEach(i => i.addEventListener('input', draw)); bindSeg(el, draw); draw();
    } });

  /* ---------- 3. Irrtums-Navigator ---------- */
  tools.push({ id: 'irrtum', title: 'Irrtums-Navigator', sec: 'T-03',
    desc: 'Klick dich durch den Entscheidungsbaum zur Irrtumsanfechtung. Jede Antwort zeigt die Norm, am Ende stehen Rechtsfolge und Frist.',
    render(el) {
      const N = {
        start: { q: 'Wurde der Irrende durch List (vorsätzliche Täuschung) zum Vertrag bewogen?', o: [['Ja', 'list'], ['Nein', 'art']] },
        list: { end: true, ok: true, t: 'Anfechtung wegen List (§ 870)', b: 'Jeder Irrtum ist beachtlich, auch ein Motivirrtum; die § 871-Varianten spielen keine Rolle. Aufhebung oder Anpassung + Schadenersatz (§ 874). Frist: <b>30 Jahre</b> (hA, § 1478). Täuscht ein Dritter: § 875. → A-08, C-04' },
        art: { q: 'Worüber irrt er?', o: [['Inhalt, Erklärung, Gegenstand, wesentliche Eigenschaft', 'gesch'], ['Person des Partners', 'person'], ['Beweggrund, Erwartung, Zweck', 'motiv']] },
        person: { q: 'Ist die Eigenschaft der Person für dieses Geschäft verkehrswesentlich (§ 873)?', o: [['Ja (z. B. Kreditwürdigkeit beim Darlehen)', 'gesch'], ['Nein (z. B. einmaliger Barkauf)', 'motiv']] },
        motiv: { q: 'Ist das Geschäft unentgeltlich (Schenkung, Testament) oder das Motiv zur Bedingung gemacht?', o: [['Ja', 'var'], ['Nein', 'motivEnd']] },
        motivEnd: { end: true, ok: false, t: 'Unbeachtlicher Motivirrtum (§ 901)', b: 'Bei entgeltlichen Geschäften berechtigt ein Motivirrtum nicht zur Anfechtung. → A-02 (High-Heels)' },
        gesch: { q: 'Liegt eine der drei Varianten des § 871 vor? (veranlasst · offenbar auffallen · rechtzeitig aufgeklärt)', o: [['Ja, mindestens eine', 'var'], ['Nein, keine', 'noVar']] },
        noVar: { end: true, ok: false, t: 'Keine Anfechtung', b: 'Der Vertragspartner ist schutzwürdig. Die drei Varianten sind Alternativen – aber eine muss vorliegen.' },
        var: { q: 'Hätte der Irrende ohne den Irrtum gar nicht abgeschlossen?', o: [['Ja – gar nicht (wesentlich)', 'auf'], ['Nein – nur zu anderen Bedingungen', 'anp']] },
        auf: { end: true, ok: true, t: 'Aufhebung des Vertrags', b: 'Wesentlicher Irrtum → Aufhebung ex tunc mit Rückabwicklung (§ 877). Frist: <b>3 Jahre</b> ab Vertragsschluss (§ 1487).' },
        anp: { end: true, ok: true, t: 'Anpassung des Vertrags', b: 'Unwesentlicher Irrtum → Vertragsanpassung (§ 872). Frist: <b>3 Jahre</b> ab Vertragsschluss (§ 1487).' } };
      let path = ['start'];
      const draw = () => {
        el.innerHTML = `<div class="tree">${path.map((id, i) => { const n = N[id];
          if (n.end) return verdict(n.ok, n.t, n.b);
          const chosen = path[i + 1];
          return `<div class="tree-q ${chosen ? 'done' : ''}"><div class="mono or" style="font-size:11px">SCHRITT ${i + 1}</div><p>${n.q}</p><div class="btn-row">${n.o.map(([l, to]) => `<button class="btn ${chosen === to ? 'solid' : chosen ? 'ghost' : ''}" data-i="${i}" data-to="${to}">${l}</button>`).join('')}</div></div>`; }).join('')}</div>
          <div class="btn-row"><button class="btn ghost" id="rs">↺ Neu starten</button></div>`;
        $$('[data-to]', el).forEach(b => b.addEventListener('click', () => { path = path.slice(0, +b.dataset.i + 1).concat(b.dataset.to); draw(); }));
        $('#rs', el).addEventListener('click', () => { path = ['start']; draw(); });
      };
      draw();
    } });

  /* ---------- 4. laesio enormis ---------- */
  tools.push({ id: 'laesio', title: 'Laesio-enormis-Rechner', sec: 'T-03',
    desc: 'Hat jemand weniger als die Hälfte dessen erhalten, was er gegeben hat? Gib Leistung und gemeinen Wert ein – wie im Sportwagen-Fall A-08.',
    render(el) {
      el.innerHTML = `<div class="lab-grid"><div class="panel">${num('g', 'Gegeben (Preis)', 50000, '€')}${num('w', 'Erhalten (gemeiner Wert bei Vertragsschluss)', 20000, '€')}
        <div class="btn-row"><button class="btn ghost" data-ex="50000,20000">A-08 Sportwagen</button><button class="btn ghost" data-ex="1000,600">Grenzfall</button><button class="btn ghost" data-ex="4500,5000">A-04 Rad</button></div>
        <div style="margin-top:8px">${chk('x935', 'Ausschluss nach § 935 (wahren Wert gekannt, besondere Vorliebe, Glücksgeschäft)')}${chk('xugb', 'B2B: vertraglich ausgeschlossen (§ 351 UGB)')}</div></div>
        <div><svg class="lab-svg" id="sv" viewBox="0 0 600 170"></svg><div id="out"></div></div></div>`;
      const draw = () => {
        const g = +$('#g', el).value || 0, w = +$('#w', el).value || 0, half = g / 2, hit = w < half, ex = $('#x935', el).checked || $('#xugb', el).checked;
        const mx = Math.max(g, w, 1), sc = v => v / mx * 440;
        $('#sv', el).innerHTML = `<text x="10" y="40" class="m" font-size="12" fill="${C.st}">GEGEBEN</text><rect x="110" y="26" width="${sc(g)}" height="22" fill="${C.or}"/><text x="${118 + sc(g)}" y="42" class="m" font-size="12" fill="${C.or}">${eur(g)}</text>
          <text x="10" y="90" class="m" font-size="12" fill="${C.st}">ERHALTEN</text><rect x="110" y="76" width="${sc(w)}" height="22" fill="${hit ? C.led : C.cy}"/><text x="${118 + sc(w)}" y="92" class="m" font-size="12" fill="${hit ? C.led : C.cy}">${eur(w)}</text>
          <line x1="${110 + sc(half)}" y1="14" x2="${110 + sc(half)}" y2="116" stroke="${C.mg}" stroke-dasharray="4 3"/><text x="${114 + sc(half)}" y="132" class="m" font-size="11" fill="${C.mg}">½ = ${eur(half)}</text>
          <text x="300" y="160" text-anchor="middle" class="m" font-size="11" fill="${C.ye}">${hit ? 'ERHALTEN < ½ DES GEGEBENEN → VERKÜRZUNG ÜBER DIE HÄLFTE' : 'ERHALTEN ≥ ½ → KEINE LAESIO ENORMIS'}</text>`;
        $('#out', el).innerHTML = !hit ? verdict(false, 'Keine laesio enormis', `${eur(w)} sind nicht weniger als die Hälfte von ${eur(g)} (${eur(half)}). Prüfe List, Irrtum oder Gewährleistung.`) :
          ex ? verdict(false, 'Ausgeschlossen', 'Die Verkürzung liegt vor, aber § 935 bzw. ein zulässiger B2B-Ausschluss (§ 351 UGB) sperrt die Aufhebung.') :
          verdict(true, 'Aufhebung nach § 934', `Der Verkürzte kann binnen <b>3 Jahren ab Vertragsschluss</b> (§ 1487) die Aufhebung verlangen. Der Gegner kann den Vertrag retten, indem er <b>${eur(g - w)}</b> (Differenz zum gemeinen Wert) nachzahlt.`);
      };
      $$('input', el).forEach(i => i.addEventListener('input', draw));
      $$('[data-ex]', el).forEach(b => b.addEventListener('click', () => { const [g, w] = b.dataset.ex.split(','); $('#g', el).value = g; $('#w', el).value = w; draw(); }));
      draw();
    } });

  /* ---------- 5. Altersleiste ---------- */
  tools.push({ id: 'alter', title: 'Altersleiste & Geschäftsfähigkeit', sec: 'T-02',
    desc: 'Alter einstellen, Geschäft wählen: Ist der Vertrag wirksam, schwebend unwirksam oder endgültig unwirksam? Probier C-07 (13 Jahre, Rudergerät 500 €).',
    render(el) {
      el.innerHTML = `<div class="lab-grid"><div class="panel">${slider('a', 'Alter', 0, 25, 1, 13, 'Jahre')}
        <div class="lbl" style="margin-top:10px">GESCHÄFT</div>${seg('g', [['alltag', 'Alltagsgeschäft (Eis, Busticket)'], ['eink', 'aus eigenem Einkommen'], ['gross', 'größeres Geschäft (500 €+)']], 'gross')}
        <div class="lbl" style="margin-top:10px">ELTERN</div>${seg('e', [['offen', 'noch nicht gefragt'], ['ja', 'stimmen zu'], ['nein', 'verweigern']], 'nein')}
        <div style="margin-top:10px">${chk('look', 'Sah deutlich älter aus / hat gelogen')}${chk('psy', 'Volljährig mit psychischer Beeinträchtigung + Genehmigungsvorbehalt (§ 242 Abs 2)')}</div></div>
        <div><svg class="lab-svg" id="sv" viewBox="0 0 600 90"></svg><div id="out"></div></div></div>`;
      const draw = () => {
        const a = +$('#a', el).value; $('#aV', el).textContent = a;
        const g = segVal(el, 'g'), e = segVal(el, 'e'), look = $('#look', el).checked, psy = $('#psy', el).checked;
        const segs = [[0, 7, 'KIND', C.led], [7, 14, 'UNMÜNDIG', C.or], [14, 18, 'MÜNDIG', C.ye], [18, 25, 'VOLLJÄHRIG', C.gr]];
        $('#sv', el).innerHTML = segs.map(([x0, x1, l, c]) => `<rect x="${20 + x0 * 22.4}" y="20" width="${(x1 - x0) * 22.4}" height="24" fill="${c}" opacity="${a >= x0 && a < x1 || (x1 === 25 && a >= 18) ? 1 : .3}"/><text x="${20 + (x0 + x1) / 2 * 22.4}" y="36" text-anchor="middle" class="m" font-size="11" fill="#0a0a0c" font-weight="700">${l}</text>`).join('') +
          `<polygon points="${20 + a * 22.4},50 ${14 + a * 22.4},62 ${26 + a * 22.4},62" fill="${C.cy}"/><text x="${20 + a * 22.4}" y="78" text-anchor="middle" class="m" font-size="12" fill="${C.cy}">${a} J</text>`;
        let r;
        if (a >= 18) r = psy && g !== 'alltag' ? verdict(null, 'Genehmigungsvorbehalt', 'Bei angeordnetem Genehmigungsvorbehalt (§ 242 Abs 2) braucht es die Genehmigung des Erwachsenenvertreters. Bloße Unvernunft reicht dafür nie (→ B-06).') :
          verdict(true, 'Wirksam', 'Volljährig (§ 21 Abs 2) = voll geschäftsfähig. Die Eltern haben keine Obsorge mehr – auch ein unvernünftiger Kauf ist wirksam (→ B-06).');
        else if (g === 'alltag') r = verdict(true, 'Wirksam mit Erfüllung', '§ 170 Abs 3: geringfügige Angelegenheit des täglichen Lebens, die Gleichaltrige üblicherweise schließen.');
        else if (g === 'eink' && a >= 14) r = verdict(true, 'Wirksam', '§ 170 Abs 2: Mündige Minderjährige verfügen frei über Einkommen/Taschengeld, soweit ihre Lebensbedürfnisse nicht gefährdet werden.');
        else if (e === 'ja') r = verdict(true, 'Wirksam', 'Mit Einwilligung bzw. Genehmigung des gesetzlichen Vertreters (§ 170 Abs 1) – rückwirkend wirksam.');
        else if (e === 'nein') r = verdict(false, 'Endgültig unwirksam', `Genehmigung verweigert. Rückabwicklung nach § 877, §§ 1431 ff. ${g === 'eink' ? 'Freie Verfügung über Einkommen gibt es erst ab 14. ' : ''}(→ C-07)`);
        else r = verdict(null, 'Schwebend unwirksam', 'Die gesetzlichen Vertreter können genehmigen (wirksam ex tunc) oder verweigern (endgültig unwirksam).');
        if (look && a < 18) r += verdict(false, 'Aussehen / Lüge hilft nicht', 'Der gute Glaube an die Volljährigkeit wird nicht geschützt; Minderjährigenschutz geht vor. Haftung höchstens deliktisch und erst ab 14 (§ 176).');
        $('#out', el).innerHTML = r + `<div class="muted mono" style="font-size:12px">DELIKTSFÄHIG: ${a >= 14 ? '<span class="gr">JA (§ 176)</span>' : '<span class="led">NEIN – höchstens § 1310</span>'}</div>`;
      };
      $$('input', el).forEach(i => i.addEventListener('input', draw)); bindSeg(el, draw); draw();
    } });

  /* ---------- 6. Gehilfen-Weiche ---------- */
  tools.push({ id: 'gehilfe', title: 'Gehilfen-Weiche', sec: 'T-06',
    desc: '§ 1313a oder § 1315? Stell ein, ob zwischen Geschädigtem und Geschäftsherr ein Vertrag besteht und wie der Gehilfe ist – wie in B-04 und C-05.',
    render(el) {
      el.innerHTML = `<div class="lab-grid"><div class="panel">
        <div class="lbl">VERTRAG GESCHÄDIGTER ↔ GESCHÄFTSHERR?</div>${seg('v', [['ja', 'Ja (Kunde, Hotelgast)'], ['nein', 'Nein (Gast des Kunden, Passant)']], 'ja')}
        <div class="lbl" style="margin-top:10px">GEHILFE</div>${seg('g', [['ok', 'normal tüchtig'], ['unt', 'habituell untüchtig'], ['gef', 'wissentlich gefährlich']], 'ok')}
        <div style="margin-top:10px">${chk('kn', 'Geschäftsherr kannte die Untüchtigkeit')}${chk('ext', 'Gehilfe ist ein selbständiges Unternehmen')}${chk('ren', 'Gehilfe ist „renommiert“ / sorgfältig ausgewählt')}${chk('an', 'Gehilfe ist Arbeitnehmer')}</div></div><div id="out"></div></div>`;
      const draw = () => {
        const v = segVal(el, 'v') === 'ja', g = segVal(el, 'g'), kn = $('#kn', el).checked, ext = $('#ext', el).checked, ren = $('#ren', el).checked, an = $('#an', el).checked;
        let h = '';
        if (v) h += verdict(true, 'Geschäftsherr haftet nach § 1313a', `Erfüllungsgehilfe: Haftung für dessen Verschulden wie für eigenes; Beweislastumkehr (§ 1298).${ext ? ' Auch ein selbständiges Unternehmen kann Erfüllungsgehilfe sein (→ C-05).' : ''}${ren ? ' „Renommiert“ ist hier egal – das betrifft nur das Auswahlverschulden des § 1315.' : ''}`);
        else if (g === 'gef' || (g === 'unt' && kn)) h += verdict(true, 'Geschäftsherr haftet nach § 1315', g === 'gef' ? 'Er setzt wissentlich eine gefährliche Person ein.' : 'Habituell untüchtiger Gehilfe; der Schaden beruht auf genau dieser Untüchtigkeit (→ B-04: „zwei linke Hände“).');
        else if (g === 'unt') h += verdict(null, '§ 1315 – Untüchtigkeit genügt', 'Nach § 1315 genügt objektive Untüchtigkeit; dass der Geschäftsherr sie kannte, ist ein starkes Indiz, aber keine Voraussetzung. Der Schaden muss auf der Untüchtigkeit beruhen.');
        else h += verdict(false, 'Keine Haftung des Geschäftsherrn', 'Kein Vertrag und ein tüchtiger Gehilfe: § 1315 greift nicht. Allenfalls Vertrag mit Schutzwirkung zugunsten Dritter (strittig) prüfen.');
        h += verdict(true, 'Gehilfe haftet selbst deliktisch (§ 1295)', `Bei Verschulden; der Geschädigte muss es beweisen.${an ? ' Als Arbeitnehmer kann er beim Arbeitgeber Rückgriff nehmen; das DHG mäßigt seine Haftung (bis null bei entschuldbarer Fehlleistung).' : ''} Geschäftsherr und Gehilfe haften solidarisch.`);
        $('#out', el).innerHTML = h;
      };
      $$('input', el).forEach(i => i.addEventListener('input', draw)); bindSeg(el, draw); draw();
    } });

  /* ---------- 7. § 367-Check ---------- */
  tools.push({ id: 'erwerb', title: '§ 367-Check: gutgläubiger Erwerb', sec: 'T-07',
    desc: 'Prüfe Schritt für Schritt, ob ein Erwerber vom Nichtberechtigten Eigentum erwirbt. Vergleiche A-04 (Diebstahl) mit C-02 (Leihe).',
    render(el) {
      el.innerHTML = `<div class="lab-grid"><div class="panel">
        <div class="btn-row" style="margin-top:0"><button class="btn ghost" data-pre="a04">A-04 Mountainbike</button><button class="btn ghost" data-pre="c02">C-02 Tennisschläger</button></div>
        ${chk('bew', 'Bewegliche Sache', true)}${chk('ent', 'Entgeltlich', true)}${chk('tm', 'Gültiger Titel + Übergabe', true)}
        <div class="lbl" style="margin-top:10px">ERWERBSSITUATION</div>${seg('sit', [['keine', 'keine'], ['vers', 'Versteigerung'], ['untern', 'Unternehmer im Betrieb'], ['vm', 'Vertrauensmann']], 'vm')}
        <div class="lbl" style="margin-top:10px">ROTE FLAGGEN (§ 368)</div>${chk('f1', 'Auffallend niedriger Preis')}${chk('f2', 'Fremder Name / Gravur auf der Sache')}${chk('f3', 'Erwerber hatte selbst Zweifel')}${chk('f4', 'Persönliche Umstände des Veräußerers verdächtig')}</div><div id="out"></div></div>`;
      const draw = () => {
        const c = id => $('#' + id, el).checked, sit = segVal(el, 'sit');
        const flags = ['f1', 'f2', 'f3', 'f4'].filter(c).length;
        const steps = [['Bewegliche Sache', c('bew'), 'Liegenschaften: nur Vertrauensgrundsatz des Grundbuchs (§ 1500)'], ['Entgeltlich', c('ent'), 'Geschenkt? Kein § 367.'], ['Titel + Modus', c('tm'), 'Ohne gültigen Kauf und Übergabe kein Erwerb.'],
          ['Erwerbssituation', sit !== 'keine', 'Gestohlene Sachen sind nie anvertraut – beim Privatkauf keine Situation (→ A-04).'], ['Redlichkeit (§ 368)', flags === 0, `${flags} rote Flagge(n): schon leichte Fahrlässigkeit schadet (→ C-02).`]];
        const ok = steps.every(s => s[1]);
        $('#out', el).innerHTML = `<div class="checklist">${steps.map(s => `<div class="cl-row ${s[1] ? 'ok' : 'no'}"><span>${s[1] ? '✔' : '✘'}</span><div><b>${s[0]}</b>${s[1] ? '' : `<br><span class="muted" style="font-size:13px">${s[2]}</span>`}</div></div>`).join('')}</div>` +
          (ok ? verdict(true, 'Eigentumserwerb nach § 367', 'Der Erwerber wird Eigentümer, der bisherige Eigentümer verliert sein Recht. Er hält sich an den Veräußerer (Schadenersatz, Herausgabe des Erlöses).') :
            verdict(false, 'Kein Eigentumserwerb', 'Der Eigentümer kann die Sache mit der rei vindicatio (§ 366) von jedem Inhaber herausverlangen. Der Erwerber hält sich an seinen Verkäufer (Rechtsmangel, Schadenersatz).'));
      };
      const pre = { a04: { bew: 1, ent: 1, tm: 1, sit: 'keine', f1: 0, f2: 0, f3: 0, f4: 0 }, c02: { bew: 1, ent: 1, tm: 1, sit: 'vm', f1: 1, f2: 1, f3: 1, f4: 0 } };
      $$('[data-pre]', el).forEach(b => b.addEventListener('click', () => { const p = pre[b.dataset.pre]; ['bew', 'ent', 'tm', 'f1', 'f2', 'f3', 'f4'].forEach(k => $('#' + k, el).checked = !!p[k]); $$('[data-seg="sit"] button', el).forEach(x => x.classList.toggle('on', x.dataset.v === p.sit)); draw(); }));
      $$('input', el).forEach(i => i.addEventListener('input', draw)); bindSeg(el, draw); draw();
    } });

  /* ---------- 8. Umfang-Rechner ---------- */
  tools.push({ id: 'umfang', title: 'Schadenersatz-Umfang-Rechner', sec: 'T-06',
    desc: 'Positionen eintragen, Verschuldensgrad wählen: Was ist ersatzfähig? Mit den Zahlen aus C-01 (Kaffee) und B-09 (SMS am Steuer) als Vorlage.',
    render(el) {
      const P = [['pos', 'Positiver Schaden (Sache, Anzug)', 2500], ['heil', 'Heilungskosten (§ 1325)', 750], ['schm', 'Schmerzengeld (§ 1325)', 1500], ['verd', 'Verdienstentgang aus Körperverletzung (§ 1325)', 5000], ['gew', 'Entgangener Gewinn (sonst)', 0], ['vorl', 'Wert der besonderen Vorliebe (§ 1331)', 0]];
      el.innerHTML = `<div class="lab-grid"><div class="panel"><div class="btn-row" style="margin-top:0"><button class="btn ghost" data-pre="c01">C-01 Kaffee</button><button class="btn ghost" data-pre="b09">B-09 SMS</button></div>
        <div class="lbl" style="margin-top:8px">VERSCHULDEN</div>${seg('v', [['leicht', 'leichte FL'], ['grob', 'grobe FL / Vorsatz'], ['mut', 'Mutwille']], 'leicht')}
        <div style="margin-top:8px">${chk('b2b', 'Unternehmensbezogenes B2B-Geschäft (§ 349 UGB)')}</div>
        ${P.map(p => num(p[0], p[1], p[2], '€')).join('')}</div><div id="out"></div></div>`;
      const draw = () => {
        const v = segVal(el, 'v'), b2b = $('#b2b', el).checked, val = id => +$('#' + id, el).value || 0;
        const rule = { pos: [true, 'stets'], heil: [true, '§ 1325 – unabhängig vom Grad'], schm: [true, '§ 1325 – unabhängig vom Grad'], verd: [true, '§ 1325 – unabhängig vom Grad'],
          gew: [v !== 'leicht' || b2b, v !== 'leicht' ? '§ 1324 volle Genugtuung' : b2b ? '§ 349 UGB' : 'erst ab grober FL (§ 1324)'], vorl: [v === 'mut', v === 'mut' ? '§ 1331' : 'nur bei Vorsatz/Mutwille'] };
        let sum = 0;
        $('#out', el).innerHTML = `<div class="tbl-wrap"><table><tr><th>Position</th><th>Betrag</th><th>Ersatz</th><th>Grund</th></tr>${P.map(p => { const [ok, why] = rule[p[0]], a = val(p[0]); if (ok) sum += a;
          return `<tr><td class="k">${p[1]}</td><td class="mono">${eur(a)}</td><td class="${ok ? 'gr' : 'led'}">${ok ? '✔' : '✘'}</td><td style="font-size:13px">${why}</td></tr>`; }).join('')}</table></div>
          <div class="panel" style="text-align:center"><div class="lbl">ERSATZFÄHIG</div><div class="led-num">${eur(sum)}</div></div>
          <p class="muted" style="font-size:13px">Entgangener Gewinn nur, wenn er mit hoher Wahrscheinlichkeit zu erwarten war (→ B-09). Mitverschulden (§ 1304) würde kürzen.</p>`;
      };
      const pre = { c01: { v: 'leicht', pos: 2500, heil: 750, schm: 1500, verd: 5000, gew: 0, vorl: 0 }, b09: { v: 'grob', pos: 4000, heil: 800, schm: 1000, verd: 0, gew: 9000, vorl: 0 } };
      $$('[data-pre]', el).forEach(b => b.addEventListener('click', () => { const p = pre[b.dataset.pre]; Object.keys(p).forEach(k => { if (k !== 'v') $('#' + k, el).value = p[k]; }); $$('[data-seg="v"] button', el).forEach(x => x.classList.toggle('on', x.dataset.v === p.v)); draw(); }));
      $$('input', el).forEach(i => i.addEventListener('input', draw)); bindSeg(el, draw); draw();
    } });

  /* ---------- 9. Zeitbudget ---------- */
  tools.push({ id: 'zeit', title: 'Zeitbudget & Klausur-Pacer', sec: 'T-00',
    desc: 'Wie viel Zeit verdient jede Frage? Wähle eine Originalklausur oder gib Punkte ein. Der Pacer zählt mit und sagt dir, wann du weitermusst.',
    render(el, h) {
      const S = window.FB_SECTIONS.filter(s => s.kind === 'case');
      const preset = p => S.filter(s => s.part === p).flatMap(s => s.qs.map(q => s.id + (s.qs.length > 1 ? ' ' + q.l.replace('Frage ', '') : '') + ':' + q.p)).join('\n');
      el.innerHTML = `<div class="lab-grid"><div class="panel">${slider('min', 'Gesamtzeit', 30, 180, 5, 90, 'min')}${slider('rd', 'Lesen am Anfang', 0, 20, 1, 7, 'min')}${slider('ck', 'Check am Ende', 0, 20, 1, 7, 'min')}
        <div class="btn-row"><button class="btn ghost" data-k="A">Klausur A</button><button class="btn ghost" data-k="B">Klausur B</button><button class="btn ghost" data-k="C">Klausur C</button></div>
        <label class="f" for="ls">Fragen (Name:Punkte, je Zeile)</label><textarea class="input" id="ls" rows="8">${preset('A')}</textarea></div>
        <div><div id="out"></div><div class="btn-row"><button class="btn solid" id="go">▶ Pacer starten</button><button class="btn ghost" id="st">■ Stopp</button></div><div id="pace"></div></div></div>`;
      let plan = [], iv = null, t0 = 0;
      const draw = () => {
        const tot = +$('#min', el).value, rd = +$('#rd', el).value, ck = +$('#ck', el).value; ['min', 'rd', 'ck'].forEach(k => $('#' + k + 'V', el).textContent = $('#' + k, el).value);
        const qs = $('#ls', el).value.split('\n').map(l => l.split(':')).filter(a => a.length > 1 && +a[1] > 0).map(a => ({ n: a[0].trim(), p: +a[1] }));
        const P = qs.reduce((a, q) => a + q.p, 0), per = (tot - rd - ck) / (P || 1);
        let acc = rd; plan = qs.map(q => { const m = q.p * per; const r = { ...q, m, from: acc, to: acc + m }; acc += m; return r; });
        $('#out', el).innerHTML = `<div class="out-row"><span>Punkte gesamt</span><b>${P}</b></div><div class="out-row"><span>Schreibzeit pro Punkt</span><b class="cy">${per.toFixed(2).replace('.', ',')} min</b></div>
          <div class="tbl-wrap"><table><tr><th>Frage</th><th>P</th><th>Minuten</th><th>Fertig bei</th></tr>${plan.map(q => `<tr><td class="k">${q.n}</td><td>${q.p}</td><td class="mono">${q.m.toFixed(1).replace('.', ',')}</td><td class="mono">${Math.round(q.to)}'</td></tr>`).join('')}</table></div>`;
      };
      const pace = () => {
        const el2 = $('#pace', el); if (!el2) return; const m = (Date.now() - t0) / 60000, tot = +$('#min', el).value;
        const cur = plan.find(q => m >= q.from && m < q.to);
        el2.innerHTML = `<div class="panel" style="text-align:center;margin-top:10px"><div class="lbl">${cur ? 'JETZT: ' + cur.n + ' · BIS ' + Math.round(cur.to) + "'" : m < (plan[0] || { from: 0 }).from ? 'LESEN' : m < tot ? 'CHECK' : 'ZEIT UM'}</div><div class="led-num">${String(Math.floor(m)).padStart(2, '0')}:${String(Math.floor(m * 60 % 60)).padStart(2, '0')}</div></div>`;
      };
      $$('input,textarea', el).forEach(i => i.addEventListener('input', draw));
      $$('[data-k]', el).forEach(b => b.addEventListener('click', () => { $('#ls', el).value = preset(b.dataset.k); draw(); }));
      $('#go', el).addEventListener('click', () => { t0 = Date.now(); clearInterval(iv); iv = setInterval(pace, 1000); pace(); });
      $('#st', el).addEventListener('click', () => { clearInterval(iv); $('#pace', el).innerHTML = ''; });
      h.onLeave(() => clearInterval(iv));
      draw();
    } });

  /* ---------- 10. AGB-Filter-Spiel ---------- */
  tools.push({ id: 'agb', title: 'AGB-Filter-Spiel', sec: 'T-01',
    desc: 'Jede Klausel muss vier Filter passieren. An welchem scheitert sie zuerst – oder ist sie wirksam? Verbrauchergeschäft (B2C) angenommen.',
    render(el, h) {
      const F = [['ok', 'Wirksam'], ['ein', '1 · nicht einbezogen'], ['864a', '2 · § 864a'], ['879', '3 · § 879 / § 6 KSchG'], ['915', '4 · Auslegung § 915']];
      const D = [
        ['Die AGB wurden dem Kunden erst mit der Rechnung, also nach Vertragsschluss, zugeschickt.', 'ein', 'AGB gelten nur, wenn sie vor/bei Vertragsschluss vereinbart wurden.'],
        ['Kunde verliert bei falscher Bestellung sämtliche Rücktrittsrechte.', '879', 'Widerspricht dem zwingenden FAGG; gröblich benachteiligend (→ B-07).'],
        ['Mit dem Kauf eines Druckers verpflichtet sich der Kunde, 5 Jahre lang Tinte nur beim Händler zu kaufen – versteckt im Kleingedruckten.', '864a', 'Ungewöhnlich und nachteilig, ohne besonderen Hinweis nicht Vertragsinhalt.'],
        ['Lieferzeit: „in der Regel 3–5 Werktage“.', 'ok', 'Üblich, transparent, nicht benachteiligend.'],
        ['Es gilt stets die für den Kunden nachteiligste Regelung.', '879', 'Intransparent (§ 6 Abs 3 KSchG) und gröblich benachteiligend.'],
        ['Die Gewährleistung ist gegenüber Verbrauchern ausgeschlossen.', '879', 'Gewährleistung ist für Verbraucher zwingend (VGG / § 9 KSchG).'],
        ['„Versandkosten trägt der Käufer“ – unklar, ob auch bei der Rücksendung einer mangelhaften Ware.', '915', 'Unklarheiten gehen zulasten des Verwenders: Rücksendung mangelhafter Ware nicht erfasst.'],
        ['Der Händler darf den Preis nach Vertragsschluss jederzeit nach freiem Ermessen erhöhen.', '879', 'Einseitige, sachlich nicht gerechtfertigte Preisänderung – unzulässig (§ 6 KSchG, § 879 Abs 3).'],
        ['Zahlung binnen 14 Tagen ab Rechnungserhalt.', 'ok', 'Übliche, faire Zahlungsfrist.'],
        ['Ein Fitnessstudio-Vertrag verlängert sich automatisch um 10 Jahre – geregelt auf Seite 12 der AGB.', '864a', 'Überraschend und nachteilig, ohne Hinweis kein Vertragsinhalt.']];
      let order = h.shuffle(D.map((_, i) => i)), i = 0, score = 0;
      const draw = () => {
        if (i >= order.length) { el.innerHTML = `<div class="panel grade"><div class="lbl">ERGEBNIS</div><div class="led-num">${score}/${order.length}</div><div class="btn-row" style="justify-content:center"><button class="btn solid" id="ag">Nochmal</button></div></div>`; $('#ag', el).addEventListener('click', () => { order = h.shuffle(order); i = 0; score = 0; draw(); }); return; }
        const d = D[order[i]];
        el.innerHTML = `<div class="mono muted" style="font-size:12px">KLAUSEL ${i + 1}/${order.length} · PUNKTE ${score}</div><div class="hatch brk clause"><span class="c3"></span><span class="c4"></span><span class="lbl">[ AGB-KLAUSEL ]</span><p>${d[0]}</p></div>
          <div class="game-opts">${F.map(f => `<button class="opt" data-f="${f[0]}"><span class="k">${f[0] === 'ok' ? '✔' : f[1][0]}</span><span>${f[1]}</span></button>`).join('')}</div><div id="fb"></div>`;
        $$('[data-f]', el).forEach(b => b.addEventListener('click', () => {
          if ($('#fb', el).innerHTML) return; const ok = b.dataset.f === d[1]; if (ok) score++;
          $$('[data-f]', el).forEach(x => x.classList.add(x.dataset.f === d[1] ? 'right' : (x === b ? 'wrong' : '')));
          $('#fb', el).innerHTML = `<div class="fb ${ok ? '' : 'bad'}"><b class="h ${ok ? 'gr' : 'led'}">${ok ? '✔ RICHTIG' : '✘ NICHT GANZ'}</b>${d[2]}</div><div class="btn-row"><button class="btn" id="nx">Weiter →</button></div>`;
          $('#nx', el).addEventListener('click', () => { i++; draw(); });
        }));
      };
      draw();
    } });

  /* ---------- 11. Zuordnen (Blitzspiel) ---------- */
  tools.push({ id: 'zuordnen', title: 'Blitz-Zuordnen', sec: 'T-01',
    desc: 'Schnelle Entscheidungen, wie in der Klausur: Angebot oder invitatio? Geschäfts- oder Motivirrtum? § 1313a oder § 1315? Fixgeschäft oder nicht?',
    render(el, h) {
      const DECKS = {
        angebot: { t: 'Angebot oder invitatio?', a: ['Angebot', 'invitatio ad offerendum'], items: [['Preisschild im Schaufenster', 1], ['Webshop-Produktseite mit Preis', 1], ['Kunde bestellt telefonisch aus dem Katalog', 0], ['Prospekt „solange der Vorrat reicht“', 1], ['„Ich verkaufe dir mein Rad um 300 €“ – mündlich zum Freund', 0], ['Zeitungsinserat „Wohnung zu vermieten“', 1], ['Kunde legt Ware an der Kassa aufs Band', 0], ['Schriftliches Offert eines Handwerkers an einen bestimmten Kunden', 0]] },
        irrtum: { t: 'Geschäfts- oder Motivirrtum?', a: ['Geschäftsirrtum', 'Motivirrtum'], items: [['„100“ statt „1.000“ vertippt', 0], ['Geschenk passt der Freundin nicht', 1], ['Fälschung statt Original gekauft', 0], ['Hält Miete für Kauf', 0], ['Hofft auf Wertsteigerung, die ausbleibt', 1], ['Interne Preiskalkulation falsch addiert (nicht offengelegt)', 1], ['Falscher Artikel im Webshop angeklickt', 0], ['Kauft Anzug für ein Fest, das abgesagt wird', 1]] },
        gehilfe: { t: '§ 1313a oder § 1315?', a: ['§ 1313a', '§ 1315'], items: [['Hotel – Wartungsfirma – Hotelgast erkrankt', 0], ['Installateur – Lehrling beschädigt Fliesen des Kunden', 0], ['Installateur – Lehrling verletzt Nachbarn im Stiegenhaus', 1], ['MediaMarkt – Lagerist – Käufer erleidet Brandschaden', 0], ['Kaminhändler – Mitarbeiter verletzt Gast des Kunden', 1], ['Taxiunternehmen – Fahrer fährt Passanten an', 1]] },
        fix: { t: 'Fixgeschäft oder einfacher Verzug?', a: ['Fixgeschäft', 'einfacher Verzug'], items: [['Hochzeitstorte für den Hochzeitstag bestellt', 0], ['Notebook mit Liefertermin 25. Jänner', 1], ['Sitzgarnitur am 27.06., Lieferant weiß nichts von der Eröffnung', 1], ['Weihnachtsbäume „spätestens 23.12., sonst sinnlos“', 0], ['Kostüm für ein bestimmtes Faschingsfest, Anlass bekannt', 0], ['Büromöbel „bis Ende des Monats“', 1]] } };
      let deck = 'angebot', order = [], i = 0, score = 0, cur = null;
      const key = e => { if (!cur || !el.isConnected) return; if (e.key === 'ArrowLeft') cur(0); if (e.key === 'ArrowRight') cur(1); };
      document.addEventListener('keydown', key); h.onLeave(() => document.removeEventListener('keydown', key));
      const start = () => { order = h.shuffle(DECKS[deck].items.map((_, k) => k)); i = 0; score = 0; draw(); };
      const draw = () => {
        const D = DECKS[deck];
        const head = `<div class="seg seg-sm" style="margin-bottom:12px">${Object.keys(DECKS).map(k => `<button data-d="${k}" class="${k === deck ? 'on' : ''}">${DECKS[k].t}</button>`).join('')}</div>`;
        if (i >= order.length) { cur = null; el.innerHTML = head + `<div class="panel grade"><div class="lbl">${D.t}</div><div class="led-num">${score}/${order.length}</div><div class="btn-row" style="justify-content:center"><button class="btn solid" id="ag">Nochmal</button></div></div>`; $('#ag', el).addEventListener('click', start); }
        else {
          const it = D.items[order[i]];
          el.innerHTML = head + `<div class="mono muted" style="font-size:12px">${i + 1}/${order.length} · PUNKTE ${score}</div><div class="zu-card">${it[0]}</div>
            <div class="zu-btns">${D.a.map((a, k) => `<button class="btn ${k ? 'mg' : 'cy'}" data-a="${k}">${k ? a + ' →' : '← ' + a}</button>`).join('')}</div><div id="fb"></div>`;
          cur = k => { if ($('#fb', el).innerHTML) return; const ok = k === it[1]; if (ok) score++; $('#fb', el).innerHTML = `<div class="fb ${ok ? '' : 'bad'}"><b class="h ${ok ? 'gr' : 'led'}">${ok ? '✔ RICHTIG' : '✘ FALSCH'}</b>Richtig: <b>${D.a[it[1]]}</b></div>`; setTimeout(() => { i++; draw(); }, ok ? 650 : 1500); };
          $$('[data-a]', el).forEach(b => b.addEventListener('click', () => cur(+b.dataset.a)));
        }
        $$('[data-d]', el).forEach(b => b.addEventListener('click', () => { deck = b.dataset.d; start(); }));
      };
      start();
    } });

  window.FB_LAB = { tools };
})();
