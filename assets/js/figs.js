/* Abbildungen des Fallbuchs als Inline-SVG (Neon-Brass-Diagrammkonventionen).
   <div data-fig="ID"></div> im Inhalt wird durch FB_FIG.render() ersetzt. */
(function () {
  'use strict';
  const C = { or: '#ff6200', cy: '#19f0ff', mg: '#ff2a6d', ye: '#ffd400', gr: '#39ff88', led: '#ff2b2b', bl: '#2f6bff', st: '#adb3b7', mu: '#8d949a', ink: '#d9dde0', line: '#2c2c33' };
  const TINT = { [C.cy]: '#101c1f', [C.or]: '#1d1410', [C.mg]: '#1b1018', [C.gr]: '#141a12', [C.led]: '#1c1012', [C.st]: '#18181c', [C.ye]: '#1c1a0e', [C.bl]: '#10142a' };
  const e = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // text: t(x, y, str, {s: size, c: color, a: anchor, k: 'h'|'m'|'' , w: weight})
  const t = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-size="${o.s || 7.5}" fill="${o.c || C.ink}" text-anchor="${o.a || 'start'}"${o.k ? ` class="${o.k}"` : ''}${o.w ? ` font-weight="${o.w}"` : ''}>${e(s)}</text>`;
  // box with title and body lines (centered)
  const b = (x, y, w, h, col, title, lines = [], o = {}) => {
    let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${o.fill || TINT[col] || '#18181c'}" stroke="${col}" stroke-width="${o.sw || 1}"${o.dash ? ' stroke-dasharray="3 2"' : ''}/>`;
    const cx = x + w / 2; let yy = y + (o.ty || 14);
    if (title) { s += t(cx, yy, title, { s: o.ts || 9, c: o.tc || col, a: 'middle', k: 'h' }); yy += o.gap || 11; }
    lines.forEach(l => { s += t(cx, yy, l, { s: o.ls || 7, c: o.lc || C.ink, a: 'middle' }); yy += o.lh || 9.5; });
    return s;
  };
  const ar = (x1, y1, x2, y2, col = C.st, dash) => {
    const a = Math.atan2(y2 - y1, x2 - x1), L = 5;
    const p1 = [x2 - L * Math.cos(a - .45), y2 - L * Math.sin(a - .45)], p2 = [x2 - L * Math.cos(a + .45), y2 - L * Math.sin(a + .45)];
    return `<line x1="${x1}" y1="${y1}" x2="${x2 - 2 * Math.cos(a)}" y2="${y2 - 2 * Math.sin(a)}" stroke="${col}" stroke-width="1"${dash ? ' stroke-dasharray="3 2"' : ''}/><polygon points="${x2},${y2} ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}" fill="${col}"/>`;
  };
  // text on a dark pill so crossing lines never cut through it
  const tb = (x, y, s, o = {}) => { const sz = o.s || 7, w = s.length * sz * 0.6 + 6, x0 = o.a === 'middle' ? x - w / 2 : o.a === 'end' ? x - w : x - 3; return `<rect x="${x0.toFixed(1)}" y="${y - sz - 1}" width="${w.toFixed(1)}" height="${sz + 4}" fill="#0a0a0c"/>` + t(x, y, s, o); };
  const key = (y, s, x = 250) => t(x, y, s, { s: 6.6, c: C.ye, a: 'middle', k: 'm' });
  const svg = (h, body) => `<svg viewBox="0 0 500 ${h}" role="img" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
  const dot = (x, y, col) => `<circle cx="${x}" cy="${y}" r="4.5" fill="${col}"/><circle cx="${x}" cy="${y}" r="8" fill="none" stroke="${col}" stroke-width=".6" opacity=".6"/>`;

  const F = {};

  F['T-00'] = { cap: 'FIG T.0 // DIE VIER SCHRITTE DES GUTACHTENSTILS', svg: svg(150,
    [['01 OBERSATZ', C.or, ['„Fraglich ist, ob ein', 'gültiger Kaufvertrag', 'zustande kam.“']],
     ['02 VORAUSSETZUNG', C.cy, ['Norm + Definition:', '„Nach § 170 ABGB …', 'Voraussetzung ist …“']],
     ['03 SUBSUMTION', C.mg, ['Fakten ↔ Merkmal:', '„T ist 13, also', 'unmündig. Daher …“']],
     ['04 ERGEBNIS', C.gr, ['„Der Vertrag ist', 'daher (schwebend)', 'unwirksam.“']]]
      .map((d, i) => b(8 + i * 123, 14, 108, 70, d[1], d[0], d[2], { ts: 8.5, gap: 14 }) + (i < 3 ? ar(117 + i * 123, 49, 130 + i * 123, 49) : '')).join('') +
    `<path d="M185 92 V104 H315 V92" fill="none" stroke="${C.mg}" stroke-dasharray="3 2"/>` + t(250, 116, 'BEI JEDEM MERKMAL WIEDERHOLEN · HIER STECKEN DIE MEISTEN PUNKTE', { s: 6.4, c: C.mg, a: 'middle', k: 'm' }) +
    key(140, 'ANSPRUCHSFRAGE: WER WILL WAS VON WEM WORAUS?')) };

  F['T-00b'] = { cap: 'FIG 0.1 // FAUSTREGEL: DIE PUNKTEZAHL ZEIGT, WIE AUSFÜHRLICH DIE ANTWORT SEIN SOLL', svg: svg(96,
    `<rect x="20" y="22" width="36" height="22" fill="#101c1f" stroke="${C.cy}"/>` + t(38, 36, 'LESEN', { s: 7, c: C.cy, a: 'middle', k: 'm' }) +
    `<rect x="56" y="22" width="388" height="22" fill="#1d1410" stroke="${C.or}"/>` + t(250, 36, 'SCHREIBEN ≈ 1,2 MIN PRO PUNKT', { s: 7.5, c: C.or, a: 'middle', k: 'm' }) +
    `<rect x="444" y="22" width="36" height="22" fill="#141a12" stroke="${C.gr}"/>` + t(462, 36, 'CHECK', { s: 7, c: C.gr, a: 'middle', k: 'm' }) +
    [[20, "0'"], [56, "~7'"], [444, "~83'"], [480, "90'"]].map(([x, l]) => `<line x1="${x}" y1="46" x2="${x}" y2="54" stroke="${C.st}"/>` + t(x, 63, l, { s: 7, c: C.st, a: 'middle', k: 'm' })).join('') +
    key(86, '70 PUNKTE / 90 MINUTEN → 9-PUNKTE-FRAGE ≈ 11 MIN · 5-PUNKTE-FRAGE ≈ 6 MIN')) };

  F['T-01a'] = { cap: 'FIG T.1A // DER VERTRAG ENTSTEHT DURCH ZWEI ÜBEREINSTIMMENDE WILLENSERKLÄRUNGEN', svg: svg(150,
    b(10, 12, 140, 84, C.or, 'ANGEBOT', ['▸ inhaltlich bestimmt (essentialia)', '▸ Bindungswille erkennbar', '▸ dem Empfänger zugegangen'], { ts: 10, gap: 15 }) + t(80, 88, '≠ invitatio ad offerendum', { s: 6.6, c: C.mg, a: 'middle', k: 'm' }) +
    t(163, 58, '+', { s: 18, c: C.st, a: 'middle', k: 'h' }) +
    b(176, 12, 140, 84, C.cy, 'ANNAHME', ['▸ deckungsgleich mit Angebot', '▸ rechtzeitig (§ 862)', '▸ ausdrücklich o. schlüssig (§ 863)'], { ts: 10, gap: 15 }) + t(246, 88, 'abweichend = neues Angebot', { s: 6.6, c: C.mg, a: 'middle', k: 'm' }) +
    t(329, 58, '=', { s: 18, c: C.st, a: 'middle', k: 'h' }) +
    b(342, 12, 148, 84, C.gr, 'KONSENS', ['Vertrag (§ 861)', 'grds. formfrei (§ 883)', '→ mündlich, telefonisch,', 'schlüssig möglich'], { ts: 10, gap: 15 }) +
    `<rect x="10" y="106" width="480" height="30" fill="#1c1012" stroke="${C.led}" stroke-dasharray="3 2"/>` + t(20, 119, 'SCHWEIGEN', { s: 8, c: C.led, k: 'h' }) +
    t(80, 119, 'ist grundsätzlich keine Zustimmung. Ausnahmen nur bei Pflicht zum Widerspruch', { s: 7 }) + t(80, 129, '(Gesetz, Vereinbarung, Handelsbrauch § 346 UGB).', { s: 7 })) };

  F['T-01b'] = { cap: 'FIG T.1B // JEDE AGB-KLAUSEL MUSS ALLE VIER FILTER PASSIEREN', svg: svg(104,
    [['1 · EINBEZIEHUNG', ['vereinbart vor/bei', 'Vertragsschluss?'], C.cy], ['2 · GELTUNGSKONTR.', ['§ 864a: ungewöhnlich', '+ nachteilig?'], C.or], ['3 · INHALTSKONTR.', ['§ 879 (3) · § 6 KSchG', 'gröblich benachteiligend?'], C.mg], ['4 · AUSLEGUNG', ['§ 915: contra', 'proferentem'], C.gr]]
      .map((d, i) => b(6 + i * 124, 14, 110, 52, d[2], d[0], d[1], { ts: 8, gap: 13 }) + (i < 3 ? ar(117 + i * 124, 40, 129 + i * 124, 40) : '')).join('') +
    key(90, 'SCHEITERT SIE AN EINEM FILTER, GILT STATTDESSEN DAS DISPOSITIVE GESETZ')) };

  F['T-02'] = { cap: 'FIG T.2 // DIE ALTERSLEISTE DES ABGB (§ 21 ABS 2: UNMÜNDIG UNTER 14, VOLLJÄHRIG AB 18)', svg: svg(160,
    [[0, 7, 'KIND', C.led, ['geschäftsunfähig', 'nur § 170 (3): geringfügige', 'Alltagsgeschäfte']], [7, 14, 'UNMÜNDIG', C.or, ['beschränkt geschäftsfähig', 'Einwilligung (§ 170 (1))', 'sonst schwebend unwirksam']],
     [14, 18, 'MÜNDIG', C.ye, ['+ § 170 (2): eigenes', 'Einkommen/Taschengeld', 'deliktsfähig (§ 176)']], [18, 25, 'VOLLJÄHRIG', C.gr, ['voll geschäftsfähig', 'keine Obsorge mehr', 'Ausn.: §§ 239 ff']]]
      .map(([a, z, n, col, ls]) => { const X = { 0: 10, 7: 130, 14: 255, 18: 375, 25: 490 }, x = X[a], w = X[z] - X[a]; return `<rect x="${x}" y="14" width="${w}" height="18" fill="${col}" opacity=".85"/>` + t(x + w / 2, 26.5, n, { s: 7.5, c: '#0a0a0c', a: 'middle', k: 'm', w: 700 }) + b(x + 2, 40, w - 4, 62, col, '', ls, { ty: 14, ls: 6.8 }); }).join('') +
    [[0, 10], [7, 130], [14, 255], [18, 375]].map(([v, x]) => t(x, 116, String(v), { s: 12, c: C.led, a: 'middle', k: 'led' })).join('') +
    key(146, 'DELIKTSFÄHIG AB 14 · GUTER GLAUBE AN VOLLJÄHRIGKEIT NICHT GESCHÜTZT')) };

  F['T-03'] = { cap: 'FIG T.3A // ENTSCHEIDUNGSBAUM ZUR IRRTUMSANFECHTUNG', svg: svg(250,
    b(185, 6, 130, 26, C.st, 'IRRTUM?', [], { ty: 13, ts: 9 }) + t(250, 28, 'falsche Vorstellung', { s: 6.6, c: C.mu, a: 'middle' }) +
    ar(220, 32, 110, 48) + ar(280, 32, 390, 48) +
    b(30, 48, 160, 40, C.cy, 'GESCHÄFTSIRRTUM', ['Inhalt, Erklärung, Person § 873, Eigenschaft']) +
    b(310, 48, 160, 40, C.mg, 'MOTIVIRRTUM', ['Beweggrund, Erwartung, Zweck']) +
    ar(110, 88, 110, 104) + b(20, 104, 180, 42, C.or, '§ 871: EINE DER DREI VARIANTEN', ['veranlasst · offenbar auffallen ·', 'rechtzeitig aufgeklärt'], { ts: 8 }) +
    ar(355, 88, 335, 104) + ar(425, 88, 445, 104) +
    b(285, 104, 100, 42, C.led, 'ENTGELTLICH', ['unbeachtlich (§ 901)', 'außer: Bedingung / List'], { ts: 8 }) +
    b(395, 104, 95, 42, C.gr, 'UNENTGELTLICH', ['beachtlich', 'Schenkung, Testament'], { ts: 8 }) +
    ar(110, 146, 110, 160) + b(30, 160, 160, 26, C.st, 'WESENTLICH?', [], { ty: 13 }) + t(110, 182, 'hätte er sonst gar nicht abgeschlossen?', { s: 6.4, c: C.mu, a: 'middle' }) +
    ar(80, 186, 60, 202) + ar(140, 186, 160, 202) +
    b(8, 202, 104, 34, C.gr, 'JA → AUFHEBUNG', ['ex tunc, § 877'], { ts: 8 }) + b(118, 202, 104, 34, C.ye, 'NEIN → ANPASSUNG', ['unwesentlich, § 872'], { ts: 8 }) +
    b(250, 160, 240, 76, C.or, 'LIST § 870 · SONDERREGEL', ['▸ vorsätzliche Täuschung (auch Verschweigen)', '▸ auch Motivirrtum reicht · § 871 egal', '▸ + Schadenersatz (§ 874)', '▸ Frist 30 J (hA) vs. Irrtum 3 J (§ 1487)'], { ts: 8.5, ls: 7, gap: 13 })) };

  F['T-03b'] = { cap: 'FIG T.3B // LAESIO ENORMIS: ERHALTEN < 1/2 DES GEGEBENEN → AUFHEBUNG', svg: svg(104,
    t(10, 24, 'GEGEBEN', { s: 7, c: C.st, k: 'm' }) + `<rect x="80" y="14" width="360" height="16" fill="${C.or}" opacity=".85"/>` + t(446, 26, '50.000 €', { s: 8, c: C.or, k: 'm' }) +
    t(10, 54, 'WERT', { s: 7, c: C.st, k: 'm' }) + `<rect x="80" y="44" width="144" height="16" fill="${C.cy}" opacity=".85"/>` + t(230, 56, '20.000 €', { s: 8, c: C.cy, k: 'm' }) +
    `<line x1="260" y1="8" x2="260" y2="68" stroke="${C.mg}" stroke-dasharray="3 2"/>` + t(264, 76, 'HÄLFTE = 25.000 €', { s: 7, c: C.mg, k: 'm' }) +
    key(96, '20.000 € < 25.000 € → AUFHEBUNG MÖGLICH · GEGNER KANN DIFFERENZ ZUM WERT NACHZAHLEN')) };

  F['T-04'] = { cap: 'FIG T.4 // DAS VERTRETUNGSDREIECK: DÜRFEN (INNEN) UND KÖNNEN (AUSSEN) AUSEINANDERHALTEN', svg: svg(200,
    b(20, 12, 150, 40, C.or, 'VERTRETENER', ['Machtgeber (z. B. Tobias)']) + b(330, 12, 150, 40, C.cy, 'DRITTER', ['Geschäftspartner (Händler)']) +
    b(175, 132, 150, 40, C.mg, 'VERTRETER', ['Gewalthaber (z. B. Jacob)']) +
    `<line x1="170" y1="32" x2="330" y2="32" stroke="${C.gr}" stroke-width="2"/>` + t(250, 26, 'VERTRAG ENTSTEHT DIREKT HIER', { s: 6.6, c: C.gr, a: 'middle', k: 'm' }) +
    ar(95, 52, 200, 132, C.st) + ar(300, 132, 405, 52, C.st) +
    b(10, 86, 140, 38, C.st, 'INNENVERHÄLTNIS', ['Auftrag (§ 1002): DARF'], { ts: 8, fill: '#18181c' }) +
    b(350, 86, 140, 38, C.st, 'AUSSENVERHÄLTNIS', ['Vollmacht: KANN + Offenlegung'], { ts: 8, fill: '#18181c' }) +
    key(192, 'GEHEIME WEISUNG BINDET DEN DRITTEN NICHT · LIMIT IN DER URKUNDE SCHON')) };

  F['T-05a'] = { cap: 'FIG T.5A // EIN FESTER LIEFERTERMIN ALLEIN MACHT NOCH KEIN FIXGESCHÄFT', svg: svg(150,
    b(6, 42, 110, 40, C.st, 'NICHT RECHTZEITIG', ['oder nicht am richtigen Ort'], { ts: 8 }) + ar(116, 62, 140, 62) +
    b(140, 42, 120, 40, C.or, 'FIXGESCHÄFT?', ['§ 919: Termin erkennbar', 'wesentlich (für beide)'], { ts: 9 }) +
    ar(260, 52, 296, 26, C.gr) + t(272, 32, 'JA', { s: 7, c: C.gr, k: 'm' }) + ar(260, 72, 296, 104, C.mg) + t(254, 100, 'NEIN', { s: 7, c: C.mg, k: 'm', a: 'end' }) +
    b(296, 8, 198, 40, C.gr, 'AUFGELÖST', ['außer Gläubiger verlangt unverzüglich Erfüllung'], { ts: 8.5 }) +
    b(296, 82, 198, 58, C.cy, '§ 918 · WAHLRECHT', ['① auf Erfüllung bestehen, oder', '② Rücktritt mit angemessener Nachfrist', '+ bei Verschulden § 921'], { ts: 8.5 }) +
    t(10, 106, 'Verzug ist', { s: 7, c: C.mu }) + t(10, 116, 'verschuldens-', { s: 7, c: C.mu }) + t(10, 126, 'unabhängig.', { s: 7, c: C.mu })) };

  F['T-05b'] = { cap: 'FIG T.5B // DER VERKÄUFER HAT GRUNDSÄTZLICH EINE „ZWEITE CHANCE“', svg: svg(168,
    `<rect x="10" y="8" width="480" height="26" fill="#18181c" stroke="${C.st}"/>` + t(20, 24, 'MANGEL', { s: 8, c: C.st, k: 'm', w: 700 }) +
    t(70, 24, '= Abweichung vom Geschuldeten (§ 922) · bei Übergabe vorhanden (Vermutung § 924) · verschuldensunabhängig', { s: 6.8 }) +
    b(10, 46, 220, 52, C.cy, 'STUFE 1 · PRIMÄR', ['Verbesserung · Austausch', 'Wahl des Übernehmers, außer unmöglich/unverh.'], { ts: 10, gap: 14 }) + ar(230, 72, 270, 72) +
    b(270, 46, 220, 52, C.mg, 'STUFE 2 · SEKUNDÄR', ['Preisminderung · Wandlung', 'Wandlung nur bei nicht geringfügigem Mangel'], { ts: 10, gap: 14 }) +
    t(10, 116, 'SOFORT STUFE 2 (§ 932 ABS 4 / VGG):', { s: 7, c: C.or, k: 'm', w: 700 }) +
    t(10, 128, '▸ unmöglich / unverhältnismäßig  ▸ Verkäufer verweigert oder zu langsam  ▸ erhebliche Unannehmlichkeiten', { s: 6.8 }) +
    t(10, 139, '▸ unzumutbar aus Gründen in der Person des Übergebers  ▸ VGG: schwerwiegender Mangel', { s: 6.8 }) +
    key(160, 'FRISTEN: 2 J BEWEGLICH · 3 J UNBEWEGLICH · + 3 MONATE ZUR KLAGE (§ 933)')) };

  F['T-06a'] = { cap: 'FIG T.6A // DAS PRÜFSCHEMA: IN DER KLAUSUR IMMER IN DIESER REIHENFOLGE', svg: svg(120,
    [['SCHADEN', '§ 1293: Nachteil', 'Vermögen/Person'], ['KAUSALITÄT', 'conditio sine', 'qua non'], ['ADÄQUANZ', 'nicht völlig', 'atypisch'], ['RECHTSWIDRIG', 'Vertrag · abs.', 'Recht · Schutzges.'], ['SCHUTZZWECK', 'Norm soll genau', 'das verhindern'], ['VERSCHULDEN', 'Vorsatz / grobe /', 'leichte FL']]
      .map((d, i) => { const x = 4 + i * 83; return `<rect x="${x}" y="10" width="76" height="16" fill="${C.or}"/>` + t(x + 38, 21.5, String(i + 1).padStart(2, '0') + ' ' + d[0], { s: 6.4, c: '#0a0a0c', a: 'middle', k: 'm', w: 700 }) +
        `<rect x="${x}" y="26" width="76" height="34" fill="#1d1410" stroke="${C.or}" stroke-width=".6"/>` + t(x + 38, 39, d[1], { s: 6.6, a: 'middle' }) + t(x + 38, 49, d[2], { s: 6.6, a: 'middle' }); }).join('') +
    key(84, 'DANN: UMFANG (§ 1324) → MITVERSCHULDEN (§ 1304) → VERJÄHRUNG (§ 1489)') + t(250, 102, 'Vertrag: Verschulden vermutet (§ 1298) · Delikt: Geschädigter beweist', { s: 7, c: C.mu, a: 'middle' })) };

  F['T-06b'] = { cap: 'FIG T.6B // GEHILFENHAFTUNG: ZUERST FRAGEN, OB EIN VERTRAG BESTEHT → C-05, B-04', svg: svg(150,
    b(10, 20, 130, 44, C.or, 'GESCHÄFTSHERR', ['Hotel, Kaminhändler,', 'MediaMarkt …']) +
    b(360, 20, 130, 44, C.mg, 'GEHILFE', ['haftet selbst deliktisch;', 'Arbeitnehmer: DHG']) +
    ar(140, 36, 360, 36, C.cy) + t(250, 30, 'VERTRAG? → § 1313a (IMMER)', { s: 7.2, c: C.cy, a: 'middle', k: 'm' }) +
    ar(140, 54, 360, 54, C.mg, true) + t(250, 68, 'KEIN VERTRAG? → § 1315 (NUR UNTÜCHTIG)', { s: 7.2, c: C.mg, a: 'middle', k: 'm' }) +
    b(10, 86, 230, 44, C.cy, '§ 1313a ERFÜLLUNGSGEHILFE', ['wie eigenes Verschulden; auch', 'selbständige Unternehmen'], { ts: 8.5 }) +
    b(260, 86, 230, 44, C.mg, '§ 1315 BESORGUNGSGEHILFE', ['nur untüchtig (habituell) oder', 'wissentlich gefährlich'], { ts: 8.5 }) +
    key(144, '„RENOMMIERTE FIRMA“ HILFT NUR GEGEN § 1315, NIE GEGEN § 1313a')) };

  F['T-07'] = { cap: 'FIG T.7 // DERIVATIVER ERWERB UND SEIN RETTUNGSANKER § 367', svg: svg(150,
    b(10, 10, 140, 54, C.cy, 'TITEL', ['gültiges Verpflichtungs-', 'geschäft (Kauf, Schenkung)', '§ 380'], { ts: 10, gap: 13 }) + t(163, 42, '+', { s: 16, c: C.st, a: 'middle', k: 'h' }) +
    b(176, 10, 148, 54, C.or, 'MODUS', ['bewegl.: Übergabe (§ 426 ff)', 'Liegenschaft: Einverleibung', '§ 431'], { ts: 10, gap: 13 }) + t(337, 42, '+', { s: 16, c: C.st, a: 'middle', k: 'h' }) +
    b(350, 10, 140, 54, C.gr, 'BEFUGNIS', ['Vormann ist Eigentümer', 'nemo plus iuris', '§ 442'], { ts: 10, gap: 13 }) +
    ar(420, 64, 420, 80, C.mg, true) +
    `<rect x="10" y="80" width="480" height="58" fill="#1b1018" stroke="${C.mg}" stroke-dasharray="3 2"/>` +
    t(250, 94, 'BEFUGNIS FEHLT? → GUTGLÄUBIGER ERWERB § 367 (NUR BEWEGLICHE SACHEN)', { s: 7.8, c: C.mg, a: 'middle', k: 'h' }) +
    t(250, 108, '▸ entgeltlich ▸ gültiger Titel + Modus ▸ redlich (§ 368: weder Wissen noch fahrlässige Unkenntnis)', { s: 6.8, a: 'middle' }) +
    t(250, 120, '▸ UND eine Erwerbssituation: ① öffentliche Versteigerung ② Unternehmer im gewöhnlichen Betrieb', { s: 6.8, a: 'middle' }) +
    t(250, 131, '③ Vertrauensmann (freiwillig anvertraut)', { s: 6.8, a: 'middle' })) };

  F['A-01'] = { cap: 'FIG A1 // DER VERTRAG STEHT SCHON NACH DEM TELEFONAT FEST. DAS FAX KOMMT ZU SPÄT, UM IHN ZU ÄNDERN.', svg: svg(118,
    `<line x1="60" y1="30" x2="440" y2="30" stroke="${C.line}" stroke-width="2"/>` +
    [[80, 'TAG 1 · TELEFON', C.gr, ['Angebot + Annahme', '1000 × 5 € = 5.000 €', '✔ VERTRAG (§ 861)']], [250, 'TAG 2 · FAX', C.led, ['„1000 × 6 €“ bestätigt', 'P schweigt', '✘ ändert nichts']], [420, 'LIEFERUNG', C.cy, ['K verlangt 6.000 €', 'geschuldet: 5.000 €']]]
      .map(([x, l, col, ls]) => dot(x, 30, col) + t(x, 16, l, { s: 7, c: col, a: 'middle', k: 'm' }) + ls.map((s, i) => t(x, 54 + i * 11, s, { s: 7.2, a: 'middle', c: i === ls.length - 1 ? col : C.ink })).join('')).join('') +
    key(108, 'SCHRIFTSTÜCK BEWEIST DEN VERTRAG · ES IST NICHT DER VERTRAG')) };

  F['A-04'] = { cap: 'FIG A4 // A HAT KEIN EIGENTUM, ALSO KANN ER KEINES ÜBERTRAGEN', svg: svg(132,
    b(14, 34, 110, 40, C.gr, 'B', ['EIGENTÜMER'], { ts: 13, gap: 13 }) + b(195, 34, 110, 40, C.led, 'A', ['DIEB'], { ts: 13, gap: 13 }) + b(376, 34, 110, 40, C.cy, 'C', ['KÄUFER'], { ts: 13, gap: 13 }) +
    ar(124, 46, 195, 46, C.led, true) + t(160, 40, 'DIEBSTAHL', { s: 6.6, c: C.led, a: 'middle', k: 'm' }) + t(160, 60, 'nicht anvertraut', { s: 6.4, c: C.mu, a: 'middle' }) +
    ar(305, 46, 376, 46) + t(340, 40, 'KAUF 4.500 €', { s: 6.6, c: C.st, a: 'middle', k: 'm' }) + t(340, 60, 'Titel + Modus ✔', { s: 6.4, c: C.mu, a: 'middle' }) +
    `<path d="M431 74 V96 H69 V78" fill="none" stroke="${C.gr}" stroke-width="1.2"/>` + `<polygon points="69,74 66,80 72,80" fill="${C.gr}"/>` +
    t(250, 110, '§ 366 EIGENTUMSKLAGE: C MUSS HERAUSGEBEN', { s: 7.2, c: C.gr, a: 'middle', k: 'm' }) + key(126, 'GESTOHLEN BLEIBT GESTOHLEN (BEIM PRIVATKAUF)')) };

  F['A-07'] = { cap: 'FIG A7 // DER DERIVATIVE ERWERB EINER LIEGENSCHAFT', svg: svg(110,
    [['01 TITEL', ['gültiger Kauf-, Schenkungs-,', 'Tauschvertrag …'], C.cy], ['02 URKUNDE', ['beglaubigte Unterschriften', '(§ 31 GBG) + Aufsandung (§ 32)'], C.or], ['03 EINVERLEIBUNG', ['Eintragung im Grundbuch', '(§ 431) = Modus → Eigentum'], C.gr]]
      .map((d, i) => b(8 + i * 166, 12, 152, 52, d[2], d[0], d[1], { ts: 9, gap: 14 }) + (i < 2 ? ar(160 + i * 166, 38, 174 + i * 166, 38) : '')).join('') +
    key(90, 'INTABULATIONSPRINZIP: OHNE EINTRAGUNG KEIN EIGENTUM, NUR EIN ANSPRUCH AUF ÜBERTRAGUNG')) };

  const fristBar = (y, label, x0, x1, col, txt) => t(8, y + 9, label, { s: 7 }) + `<rect x="${x0}" y="${y}" width="${x1 - x0}" height="12" fill="${col}" opacity=".85"/>` + t(x1 + 4, y + 9, txt, { s: 6.4, c: col, k: 'm' });
  F['A-08'] = { cap: 'FIG A8 // FRISTEN-RADAR: LIST IST DIE STÄRKSTE UND LÄNGSTE WAFFE', svg: svg(150,
    [[150, '0'], [230, '3 J'], [440, '30 J']].map(([x, l]) => `<line x1="${x}" y1="10" x2="${x}" y2="114" stroke="${C.line}" stroke-dasharray="2 2"/>` + t(x, 122, l, { s: 7, c: C.st, a: 'middle', k: 'm' })).join('') +
    fristBar(12, '① List § 870', 150, 440, C.or, '') + t(295, 21, '30 JAHRE (hA)', { s: 6.6, c: '#0a0a0c', a: 'middle', k: 'm', w: 700 }) +
    fristBar(32, '② Irrtum § 871', 150, 230, C.cy, '3 J AB VERTRAG') + fristBar(52, '③ laesio enormis § 934', 150, 230, C.cy, '3 J AB VERTRAG') +
    fristBar(72, '④ Schadenersatz §§ 874, 1295', 150, 230, C.mg, '3 J AB KENNTNIS · ABSOLUT 30 J') +
    fristBar(92, '⑤ Gewährleistung §§ 922 ff', 150, 210, C.st, 'NUR BEI ZUGESICHERTEN EIGENSCHAFTEN · 2 J (+3 M)') +
    key(142, 'FRISTBEGINN FÜR ① UND ② IST DER VERTRAGSABSCHLUSS, NICHT DIE ENTDECKUNG')) };

  F['B-02'] = { cap: 'FIG B2 // WO LIEGT DER ZEITPUNKT IN BEZUG AUF DIE DREI FRISTEN?', svg: svg(140,
    `<rect x="40" y="18" width="50" height="14" fill="${C.cy}" opacity=".85"/>` + t(158, 28, 'VERMUTUNG 6 M (§ 924)', { s: 6.4, c: C.cy, k: 'm' }) +
    `<rect x="40" y="36" width="300" height="14" fill="${C.or}" opacity=".85"/>` + t(248, 46, 'GEWÄHRLEISTUNG 3 J (UNBEWEGLICH)', { s: 6.6, c: '#0a0a0c', a: 'middle', k: 'm', w: 700 }) +
    `<rect x="340" y="36" width="25" height="14" fill="${C.ye}" opacity=".85"/>` + t(352, 46, '+3M', { s: 6, c: '#0a0a0c', a: 'middle', k: 'm', w: 700 }) +
    `<rect x="40" y="54" width="440" height="14" fill="none" stroke="${C.mg}" stroke-dasharray="3 2"/>` + t(300, 64, 'SE § 933a · VERSCHULDENSVERMUTUNG 10 J', { s: 6.2, c: C.mg, a: 'middle', k: 'm' }) +
    [0, 1, 2, 3, 4].map(v => `<line x1="${40 + v * 100}" y1="72" x2="${40 + v * 100}" y2="78" stroke="${C.st}"/>` + t(40 + v * 100, 88, v ? v + ' J' : '0', { s: 7, c: C.st, a: 'middle', k: 'm' })).join('') +
    [[46, '3 WO', C.gr], [148, 'a) 1 J 1 M', C.ye], [440, 'b) 4 J', C.led]].map(([x, l, col]) => `<line x1="${x}" y1="12" x2="${x}" y2="96" stroke="${col}" stroke-width="1.5"/>` + t(x, 106, l, { s: 7, c: col, a: 'middle', k: 'm' })).join('') +
    key(128, 'BEI EINEM BEWEGLICHEN KAMINOFEN ENDET DIE GEWÄHRLEISTUNG SCHON NACH 2 J (+3 M)')) };

  F['B-04'] = { cap: 'FIG B4 // ZWEI GESCHÄDIGTE, ZWEI HAFTENDE, ZWEI VERSCHIEDENE HAFTUNGSGRUNDLAGEN GEGEN K', svg: svg(170,
    ar(350, 30, 150, 30, C.cy) + ar(350, 120, 150, 46, C.mg, true) + ar(350, 44, 150, 120, C.st) + ar(350, 140, 150, 140, C.st) +
    `<line x1="85" y1="54" x2="85" y2="112" stroke="${C.ye}" stroke-dasharray="2 2"/>` +
    b(20, 14, 130, 40, C.or, 'K · HÄNDLER', ['Geschäftsherr']) + b(20, 112, 130, 40, C.mg, 'M · MITARBEITER', ['„zwei linke Hände“']) +
    b(350, 14, 130, 40, C.cy, 'V · KUNDE', ['Kaffeegeschirr kaputt']) + b(350, 112, 130, 40, C.led, 'A · GAST', ['Kopfverletzung']) +
    tb(250, 26, 'VERTRAG → § 1313a', { s: 7, c: C.cy, a: 'middle', k: 'm' }) +
    tb(196, 70, 'KEIN VERTRAG → § 1315', { s: 7, c: C.mg, a: 'middle', k: 'm' }) +
    tb(300, 74, 'DELIKT § 1295', { s: 6.6, c: C.st, a: 'middle', k: 'm' }) +
    tb(250, 136, 'DELIKT § 1295', { s: 6.6, c: C.st, a: 'middle', k: 'm' }) +
    tb(90, 86, 'DHG (REGRESS)', { s: 6.4, c: C.ye, k: 'm' })) };

  F['B-05'] = { cap: 'FIG B5 // EIN VERTRAG ALLEIN ÜBERTRÄGT KEIN EIGENTUM AN LIEGENSCHAFTEN', svg: svg(150,
    b(185, 8, 130, 32, C.st, 'V · VERKÄUFER', [], { ty: 20 }) +
    ar(220, 40, 110, 70) + t(150, 52, 'KAUF 1', { s: 6.6, c: C.st, k: 'm', a: 'middle' }) + ar(280, 40, 390, 70) + t(350, 52, 'KAUF 2', { s: 6.6, c: C.st, k: 'm', a: 'middle' }) +
    b(30, 70, 150, 40, C.led, 'EMIL', ['nur Titel (400 k)']) + b(320, 70, 150, 40, C.gr, 'HERBERT', ['Titel + Einverleibung']) +
    t(395, 124, 'EIGENTÜMER (§§ 431, 440)', { s: 7, c: C.gr, a: 'middle', k: 'm' }) + t(105, 124, 'SCHADENERSATZ GEGEN V', { s: 7, c: C.led, a: 'middle', k: 'm' }) +
    key(144, 'WER ZUERST UM EINVERLEIBUNG ANSUCHT, GEWINNT')) };

  const pos = (y, label, amt, w, col, verdict) => t(10, y + 10, label, { s: 7.2 }) + `<rect x="200" y="${y}" width="${w}" height="14" fill="${col}" opacity=".85"/>` + t(204 + w, y + 10, amt, { s: 7, c: col, k: 'm' }) + t(490, y + 10, verdict, { s: 7, c: col, a: 'end', k: 'm' });
  F['B-09'] = { cap: 'FIG B9 // DIE 9.000 € SIND KEINE FRAGE DES VERSCHULDENS, SONDERN DES BEWEISES', svg: svg(104,
    pos(8, 'Anzug (positiver Schaden)', '4.000 €', 55, C.gr, '✔ JA') + pos(28, 'Heilungskosten · Schmerzengeld', 'konkret', 30, C.gr, '✔ JA (§ 1325)') +
    pos(48, 'Rolle im Musical (entgangener Gewinn)', '9.000 €', 125, C.ye, '? NUR MIT BEWEIS') +
    key(90, 'GROBE FAHRLÄSSIGKEIT → VOLLE GENUGTUUNG (§ 1324): ENTGANGENER GEWINN GRUNDSÄTZLICH ERSATZFÄHIG')) };

  F['B-10'] = { cap: 'FIG B10 // VIER ANSPRUCHSGRUNDLAGEN FÜR EIN RÜCKABWICKLUNGSZIEL', svg: svg(104,
    [['GEWÄHRLEISTUNG', ['Wandlung (unbehebbar)', '2 J + 3 M'], C.cy], ['IRRTUM § 871', ['Aufhebung', '3 J ab Vertrag'], C.or], ['LIST § 870', ['nur wenn A wusste', '30 J (hA)'], C.mg], ['SCHADENERSATZ', ['§ 933a / § 874', '3 J ab Kenntnis'], C.gr]]
      .map((d, i) => b(6 + i * 124, 12, 116, 50, d[2], d[0], d[1], { ts: 8.5, gap: 14 })).join('') +
    key(88, 'GERALD DARF WÄHLEN: GEWÄHRLEISTUNG UND IRRTUMSANFECHTUNG STEHEN NEBENEINANDER')) };

  F['B-11'] = { cap: 'FIG B11 // WER MACHT DAS ANGEBOT? BEIM KATALOG IST ES DER KUNDE.', svg: svg(112,
    b(6, 14, 100, 40, C.st, 'KATALOG', ['INVITATIO'], { ts: 9 }) + ar(106, 34, 130, 34) +
    b(130, 14, 110, 40, C.cy, 'R BESTELLT', ['ANGEBOT 25 €'], { ts: 9 }) + ar(240, 34, 264, 34) +
    b(264, 14, 110, 40, C.mg, 'FLORA: 70 €', ['ABLEHNUNG + NEUES', 'ANGEBOT'], { ts: 9 }) + ar(374, 34, 398, 34) +
    b(398, 14, 96, 40, C.led, 'KEIN VERTRAG', ['ZU 25 €'], { ts: 9 }) +
    key(84, 'R KANN DAS 70-€-ANGEBOT ANNEHMEN ODER ES LASSEN')) };

  F['C-01'] = { cap: 'FIG C1 // GRÜN IST SICHER ERSATZFÄHIG. GELB IST DAS PROBLEM, DAS DIE PUNKTE BRINGT.', svg: svg(120,
    pos(8, 'Anzug · positiver Schaden', '2.500 €', 75, C.gr, '✔') + pos(28, 'Heilungskosten · § 1325', '750 €', 23, C.gr, '✔') +
    pos(48, 'Schmerzengeld · § 1325', 'angemessen', 50, C.gr, '✔') + pos(68, 'Bonus · Verdienstentgang § 1325?', '5.000 €', 150, C.ye, 'STREITPUNKT') +
    key(106, 'LEICHTE FL: § 1324 → NUR POSITIVER SCHADEN · ABER § 1325 GILT IMMER')) };

  F['C-06'] = { cap: 'FIG C6 // DER FALL ENDET NICHT BEIM FALSUS PROCURATOR. DIE POINTE IST DIE GENEHMIGUNG.', svg: svg(112,
    b(6, 14, 96, 40, C.or, 'KAUF 1.100 €', ['LIMIT 1.000 €'], { ts: 8.5 }) + ar(102, 34, 124, 34) +
    b(124, 14, 116, 40, C.led, 'ÜBERSCHREITUNG', ['FALSUS PROCURATOR'], { ts: 8.5 }) + ar(240, 34, 262, 34) +
    b(262, 14, 104, 40, C.ye, 'SCHWEBEND', ['UNWIRKSAM'], { ts: 8.5 }) + ar(366, 34, 388, 34) +
    b(388, 14, 106, 40, C.gr, 'GENEHMIGT', ['§ 1016 · EX TUNC'], { ts: 8.5 }) +
    key(84, '„DER AUFPREIS IST KEIN PROBLEM“ = GENEHMIGUNG → VERTRAG TOBIAS–HÄNDLER ÜBER 1.100 €')) };

  F['C-08'] = { cap: 'FIG C8 // WAS RENE NICHT WUSSTE, KANN KEIN FIXGESCHÄFT BEGRÜNDEN', svg: svg(118,
    `<line x1="60" y1="30" x2="440" y2="30" stroke="${C.line}" stroke-width="2"/>` +
    [[80, '27.06. LIEFERTERMIN', C.led, ['keine Lieferung → Verzug']], [250, '28.06. ERÖFFNUNG', C.ye, ['Rene weiß davon nichts']], [420, '30.06. LIEFERUNG', C.cy, ['Ivo: „Vertrag besteht', 'nicht mehr“']]]
      .map(([x, l, col, ls]) => dot(x, 30, col) + t(x, 16, l, { s: 7, c: col, a: 'middle', k: 'm' }) + ls.map((s, i) => t(x, 54 + i * 11, s, { s: 7.2, a: 'middle' })).join('')).join('') +
    key(100, 'KEINE NACHFRIST GESETZT · KEIN FIXGESCHÄFT → RÜCKTRITT UNWIRKSAM')) };

  window.FB_FIG = {
    ids: Object.keys(F),
    get: id => F[id],
    render(root) {
      root.querySelectorAll('[data-fig]').forEach(el => {
        const f = F[el.dataset.fig]; if (!f) return;
        el.className = 'fig'; el.innerHTML = f.svg + `<div class="cap">${f.cap.replace(/^(FIG [^/]+)\/\//, '<b>$1</b>//')}</div>`;
      });
    }
  };
})();
