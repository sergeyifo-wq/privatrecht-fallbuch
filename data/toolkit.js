// TEIL 0 · TOOLKIT: die acht Prüfschemata. html = Detailansicht, compact = Kompaktansicht.
// <div data-fig="ID"></div> wird von assets/js/figs.js durch die Abbildung ersetzt.
window.FB_SECTIONS.push(

{ id: 'T-00', part: 'T', kind: 'module', category: 'METHODE', title: 'Fallbearbeitung & Gutachtenstil', sub: 'Wie man eine Klausurantwort baut',
  html: `
<div class="hatch brk sv"><span class="c3"></span><span class="c4"></span><span class="lbl">[ WARUM DAS WICHTIG IST ]</span>
<p>In der Bewertungsanleitung deiner Klausuren steht: „nicht nur nach der Richtigkeit der Antworten, sondern vor allem nach der Qualität der Begründung“. Ein richtiges Ergebnis ohne Begründung bringt also kaum Punkte. Der <b>Gutachtenstil</b> ist das Werkzeug, das die Begründung sichtbar macht.</p></div>
<div data-fig="T-00"></div>
<h3><span class="n">01</span>Die vier Schritte</h3>
<table><tr><th>Schritt</th><th>Was du schreibst</th><th>Beispiel</th></tr>
<tr><td class="k">Obersatz</td><td>Die Frage, die du prüfst, als Hypothese</td><td>„Fraglich ist, ob ein gültiger Kaufvertrag zustande kam.“</td></tr>
<tr><td class="k">Voraussetzung</td><td>Norm + Definition des Merkmals</td><td>„Nach § 170 ABGB … Voraussetzung ist …“</td></tr>
<tr><td class="k">Subsumtion</td><td>Fakten des Sachverhalts ↔ Merkmal</td><td>„T ist 13, also unmündig. Daher …“</td></tr>
<tr><td class="k">Ergebnis</td><td>Klare Antwort auf den Obersatz</td><td>„Der Vertrag ist daher (schwebend) unwirksam.“</td></tr></table>
<p>Schritt 2 und 3 wiederholst du <b>bei jedem Merkmal</b>. Hier stecken die meisten Punkte.</p>
<div class="box deep"><span class="tag">Anspruchsfrage</span><p><b>WER</b> will <b>WAS</b> von <b>WEM</b> <b>WORAUS</b>? → z. B. „K will 6.000 € von P aus dem Kaufvertrag (§ 1062 ABGB).“</p></div>
<h4>Checkliste für jede Antwort</h4>
<ol class="steps">
<li><b>Parteien und Rechtsverhältnisse ordnen:</b> Wer hat mit wem einen Vertrag? Wer ist Verbraucher, wer Unternehmer (§ 1 KSchG)? Das entscheidet über KSchG, FAGG, VGG und UGB.</li>
<li><b>Anspruchsgrundlage benennen</b> und die Norm zitieren (Open Book: Kodex nutzen!).</li>
<li><b>Alle Voraussetzungen</b> nacheinander prüfen. Unproblematische nur kurz feststellen, beim Problem ausführlich argumentieren.</li>
<li><b>Rechtsfolge und Fristen</b> nennen, wenn danach gefragt ist („Was kann X tun?“ heißt fast immer: Behelfe + Fristen).</li>
<li><b>Klares Ergebnis</b> formulieren. Bei Varianten jede Variante getrennt beantworten.</li></ol>
<div class="box merk"><span class="tag">Merksatz</span><p>„Was kann X tun?“ verlangt <b>alle</b> Möglichkeiten (Gewährleistung, Irrtum, List, laesio enormis, Schadenersatz …), jeweils mit Voraussetzungen, Rechtsfolge und Frist. Wer nur eine nennt, verschenkt die meisten Punkte.</p></div>
<h3><span class="n">02</span>Zeitbudget in der Prüfung</h3>
<div data-fig="T-00b"></div>
<p>70 Punkte in 90 Minuten: Rechne mit rund <b>1,2 Minuten pro Punkt</b> Schreibzeit. Eine 9-Punkte-Frage verdient also etwa 11 Minuten, eine 5-Punkte-Frage etwa 6 Minuten. Die <b>Punktezahl zeigt dir, wie ausführlich</b> die Antwort sein soll. Den Zeitbudget-Rechner findest du im <a href="#/labor/zeit">Labor</a>.</p>
<h3><span class="n">03</span>Rechtsstand & Hinweise</h3>
<p>Österreichisches Recht (ABGB, KSchG, UGB, FAGG, VGG, EKHG, GBG), Stand Oktober 2026. Die Klausuren stammen aus 2020/21. Seit 1.1.2022 gilt das neue Gewährleistungsrecht (GRUG: VGG + geändertes ABGB). Wo das Ergebnis davon abhängt, findest du eine <span class="chip">Patch 2022</span>-Box. Lerne die aktuelle Rechtslage, kenne aber die alten Zahlen, falls deine Lehrveranstaltung sie noch verwendet.</p>
<p>Strittige Probleme: Die Lösung zeigt beide Wege und begründet ein Ergebnis. Klausur C enthielt in deiner Vorlage bereits Lösungsskizzen. Sie werden in den <span class="chip g">Debug-Log</span>-Boxen geprüft und korrigiert.</p>
<h4>Die Boxen in diesem Fallbuch</h4>
<div class="grid g2 legend-grid">
<div class="box res"><span class="tag">Ergebnis</span><p>Das Ergebnis in Kurzform. Das muss am Ende deiner Antwort stehen.</p></div>
<div class="box merk"><span class="tag">Merksatz</span><p>Die Regel, die du über diesen Fall hinaus brauchst.</p></div>
<div class="box err"><span class="tag">⚠ System Alert</span><p>Typischer Fehler, der Punkte kostet.</p></div>
<div class="box upd"><span class="tag">Patch 2022</span><p>Hier hat sich die Rechtslage seit der Klausur geändert.</p></div>
<div class="box fix"><span class="tag">Debug-Log</span><p>Korrektur der Lösungsskizze aus deiner Vorlage (Klausur C).</p></div>
<div class="box deep"><span class="tag">Am Rande</span><p>Praxis-Tipp, Gegenprobe oder Blick über den Tellerrand.</p></div></div>`,
  compact: { key: 'Obersatz → Voraussetzung → Subsumtion → Ergebnis. Begründung schlägt Ergebnis.', bullets: [
    '<b>Obersatz</b>: „Fraglich ist, ob …“ · <b>Voraussetzung</b>: Norm + Definition · <b>Subsumtion</b>: Fakten ↔ Merkmal · <b>Ergebnis</b>: klare Antwort.',
    'Anspruchsfrage: <b>Wer will was von wem woraus?</b>',
    'Zuerst Parteien ordnen: <b>Verbraucher oder Unternehmer</b> (§ 1 KSchG)? Das entscheidet über KSchG, FAGG, VGG, UGB.',
    'Unproblematisches kurz, <b>das Problem ausführlich</b>. Norm immer zitieren (Open Book).',
    '„Was kann X tun?“ = <b>alle</b> Behelfe mit Voraussetzungen, Rechtsfolge und <b>Frist</b>.',
    'Zeit: 70 P / 90 min → <b>≈ 1,2 min pro Punkt</b>. Varianten getrennt beantworten.',
    'Seit 1.1.2022 neues Gewährleistungsrecht (<b>GRUG: VGG</b> + geändertes ABGB).'] } },

{ id: 'T-01', part: 'T', kind: 'module', category: 'ALLGEMEINER TEIL', title: 'Vertragsabschluss', sub: '§§ 861 ff, 863, 864a, 879, 883, 915 ABGB · § 6 KSchG',
  html: `
<div data-fig="T-01a"></div>
<h3><span class="n">01</span>Angebot + Annahme = Konsens</h3>
<p>Ein Vertrag entsteht durch zwei übereinstimmende Willenserklärungen (§ 861 ABGB). Das <b>Angebot</b> muss inhaltlich bestimmt sein (essentialia negotii), einen Bindungswillen erkennen lassen und dem Empfänger zugegangen sein. Die <b>Annahme</b> muss deckungsgleich und rechtzeitig sein (§ 862) und kann ausdrücklich oder schlüssig erfolgen (§ 863). Eine abweichende Annahme ist ein <b>neues Angebot</b>.</p>
<div class="box deep"><span class="tag">Schweigen</span><p>Schweigen ist grundsätzlich <b>keine Zustimmung</b>. Ausnahmen nur bei einer Pflicht zum Widerspruch (Gesetz, Vereinbarung, Handelsbrauch § 346 UGB).</p></div>
<h4>Invitatio ad offerendum</h4>
<p>Kataloge, Prospekte, Schaufenster, Webshop-Präsentationen und Inserate sind in der Regel <b>keine Angebote</b>, sondern nur Aufforderungen, selbst ein Angebot zu stellen. Der Grund: Der Anbieter will sich nicht gegenüber unbegrenzt vielen Kunden binden (Vorrat, Bonität). Das Angebot macht erst der Kunde, und der Unternehmer nimmt an oder nicht. → B-11</p>
<h4>Form</h4>
<p>Grundsatz <b>Formfreiheit</b> (§ 883). Ausnahmen: Schenkung ohne wirkliche Übergabe (Notariatsakt, § 943), Bürgschaft (Schriftform), Liegenschaftserwerb (grundbuchsfähige Urkunde) u. a. → B-03, A-07</p>
<h3><span class="n">02</span>AGB-Filter</h3>
<div data-fig="T-01b"></div>
<table><tr><th>Filter</th><th>Frage</th><th>Norm</th></tr>
<tr><td class="k">1 · Einbeziehung</td><td>Wurden die AGB vor/bei Vertragsschluss vereinbart?</td><td>§§ 861 ff</td></tr>
<tr><td class="k">2 · Geltungskontrolle</td><td>Ist die Klausel ungewöhnlich und nachteilig (ohne besonderen Hinweis)?</td><td>§ 864a ABGB</td></tr>
<tr><td class="k">3 · Inhaltskontrolle</td><td>Gröblich benachteiligend? Verbotene Klausel?</td><td>§ 879 Abs 3 ABGB · § 6 KSchG</td></tr>
<tr><td class="k">4 · Auslegung</td><td>Unklarheiten gehen zulasten des Verwenders</td><td>§ 915 ABGB</td></tr></table>
<p>Im Labor kannst du Klauseln selbst durch die Filter schicken: <a href="#/labor/agb">AGB-Filter-Spiel</a>.</p>
<div class="box merk"><span class="tag">Merksatz</span><p>Eine schriftliche Bestätigung nach einem mündlichen Vertrag ändert den Vertrag nicht. Sie ist nur ein Beweismittel. Weicht sie ab, ist sie höchstens ein neues Angebot. → A-01</p></div>`,
  compact: { key: 'Angebot + deckungsgleiche Annahme = Vertrag (§ 861). Grundsätzlich formfrei (§ 883).', bullets: [
    'Angebot: <b>bestimmt</b> (essentialia), <b>Bindungswille</b>, <b>zugegangen</b>. Abweichende Annahme = <b>neues Angebot</b>.',
    'Annahme ausdrücklich oder <b>schlüssig</b> (§ 863). <b>Schweigen</b> ist grundsätzlich keine Zustimmung.',
    'Katalog, Schaufenster, Webshop = <b>invitatio ad offerendum</b>; das Angebot macht der Kunde (→ B-11).',
    'Formpflicht ausnahmsweise: Schenkung ohne Übergabe (<b>Notariatsakt</b>, § 943), Bürgschaft (Schrift), Liegenschaft (Urkunde).',
    'AGB: <b>Einbeziehung</b> → <b>§ 864a</b> (ungewöhnlich + nachteilig) → <b>§ 879 Abs 3 / § 6 KSchG</b> → <b>§ 915</b> contra proferentem.',
    'Bestätigungsschreiben ist nur <b>Beweismittel</b>; Abweichung = höchstens neues Angebot (→ A-01).'] } },

{ id: 'T-02', part: 'T', kind: 'module', category: 'PERSONEN', title: 'Geschäfts- & Deliktsfähigkeit', sub: '§§ 21, 170, 176, 1310 ABGB · §§ 239 ff ABGB',
  html: `
<div data-fig="T-02"></div>
<h3><span class="n">01</span>Die Altersleiste</h3>
<table><tr><th>Alter</th><th>Status</th><th>Was gilt</th></tr>
<tr><td class="k">0 – 7</td><td>Kind</td><td>geschäftsunfähig; nur § 170 Abs 3: geringfügige Alltagsgeschäfte, wirksam mit Erfüllung</td></tr>
<tr><td class="k">7 – 14</td><td>unmündig</td><td>beschränkt geschäftsfähig: nur mit Einwilligung des gesetzlichen Vertreters (§ 170 Abs 1), sonst schwebend unwirksam; + § 170 Abs 3 Alltagsgeschäfte</td></tr>
<tr><td class="k">14 – 18</td><td>mündig minderjährig</td><td>zusätzlich § 170 Abs 2: freie Verfügung über Einkommen/Taschengeld, soweit Lebensbedürfnisse nicht gefährdet · deliktsfähig (§ 176)</td></tr>
<tr><td class="k">ab 18</td><td>volljährig</td><td>voll geschäftsfähig, Eltern haben keine Obsorge mehr. Ausnahme: Erwachsenenvertretung (§§ 239 ff)</td></tr></table>
<p>§ 21 Abs 2 ABGB: <b>unmündig</b> unter 14, <b>volljährig</b> ab 18. Deliktsfähig ab 14, darunter Billigkeitshaftung nach § 1310. Der gute Glaube an die Volljährigkeit wird <b>nicht</b> geschützt. Probier es aus: <a href="#/labor/alter">Altersleiste im Labor</a>.</p>
<h3><span class="n">02</span>Schwebende Unwirksamkeit</h3>
<p>Schließt ein Minderjähriger ohne Einwilligung ein Geschäft, das nicht unter § 170 Abs 2 oder 3 fällt, ist es <b>schwebend unwirksam</b>. Die gesetzlichen Vertreter können es genehmigen (dann wirksam von Anfang an) oder die Genehmigung verweigern (dann endgültig unwirksam). Bereits erbrachte Leistungen werden nach Bereicherungsrecht zurückgegeben (§ 877, §§ 1431 ff ABGB). → C-07</p>
<h3><span class="n">03</span>Kein Vertrauensschutz</h3>
<p>Wer mit einem Minderjährigen kontrahiert, trägt das Risiko. Dass jemand „älter aussieht“, ändert nichts: Der <b>Minderjährigenschutz geht dem Verkehrsschutz vor</b>. Täuscht ein Minderjähriger listig über sein Alter, bleibt der Vertrag trotzdem unwirksam. Eine Schadenersatzhaftung kommt höchstens deliktisch in Frage und setzt Deliktsfähigkeit voraus (der frühere § 866 ist seit 2001 aufgehoben).</p>
<h3><span class="n">04</span>Erwachsenenvertretung</h3>
<p>Für Volljährige nur bei <b>psychischer Krankheit oder vergleichbarer Beeinträchtigung der Entscheidungsfähigkeit</b>. Bloße Unvernunft reicht nie. → B-06</p>
<div class="box merk"><span class="tag">Merksatz</span><p>Unter 14: nur Taschengeld-Alltag (§ 170 Abs 3). 14–18: zusätzlich eigenes Einkommen (§ 170 Abs 2). Alles andere braucht die Einwilligung der Eltern. Aussehen zählt nie.</p></div>`,
  compact: { key: 'Unmündig < 14 · mündig minderjährig 14–18 · volljährig ab 18 (§ 21 Abs 2).', bullets: [
    'Minderjährige: ohne Einwilligung des gesetzlichen Vertreters <b>schwebend unwirksam</b> (§ 170 Abs 1).',
    '<b>§ 170 Abs 3</b>: geringfügige Alltagsgeschäfte, wirksam mit Erfüllung (alle Minderjährigen).',
    '<b>§ 170 Abs 2</b>: Mündige verfügen frei über Einkommen/Taschengeld, soweit Lebensbedürfnisse nicht gefährdet.',
    'Genehmigung → wirksam ex tunc; Verweigerung → endgültig unwirksam, Rückabwicklung <b>§ 877, §§ 1431 ff</b>.',
    '<b>Kein Vertrauensschutz</b>: „sah aus wie 19“ ist egal (→ C-07). Deliktsfähig ab 14 (§ 176).',
    'Erwachsenenvertretung nur bei psychischer Krankheit/Beeinträchtigung, <b>nie wegen bloßer Unvernunft</b> (→ B-06).'] } },

{ id: 'T-03', part: 'T', kind: 'module', category: 'WILLENSMÄNGEL', title: 'Irrtum, List & laesio enormis', sub: '§§ 870–877, 901, 934 f ABGB',
  html: `
<div data-fig="T-03"></div>
<h3><span class="n">01</span>Geschäftsirrtum oder Motivirrtum?</h3>
<p>Irrtum ist eine falsche Vorstellung von der Wirklichkeit. Der <b>Geschäftsirrtum</b> betrifft Inhalt, Erklärung, Person (§ 873) oder wesentliche Eigenschaften. Der <b>Motivirrtum</b> betrifft Beweggrund, Erwartung oder Zweck. Er ist bei entgeltlichen Geschäften <b>unbeachtlich</b> (§ 901), außer er wurde zur Bedingung gemacht oder durch List herbeigeführt. Bei unentgeltlichen Geschäften (Schenkung, Testament) ist er beachtlich.</p>
<h3><span class="n">02</span>Die drei Varianten des § 871</h3>
<p>Der Geschäftsirrtum berechtigt nur zur Anfechtung, wenn der Vertragspartner weniger schutzwürdig ist, weil er</p>
<ol class="steps"><li>den Irrtum <b>veranlasst</b> hat (auch schuldlos, etwa durch falsche Angaben), oder</li><li>ihm der Irrtum <b>offenbar auffallen</b> musste, oder</li><li>der Irrtum <b>rechtzeitig aufgeklärt</b> wurde, also bevor er im Vertrauen auf den Vertrag disponiert hat.</li></ol>
<div class="box err"><span class="tag">⚠ System Alert</span><p>Die drei Varianten sind <b>Alternativen</b>, keine kumulativen Voraussetzungen. Eine genügt. (Genau das war in der Vorlage zu C-04 falsch.)</p></div>
<p><b>Wesentlich</b> ist der Irrtum, wenn der Irrende ohne ihn gar nicht abgeschlossen hätte: Aufhebung ex tunc mit Rückabwicklung (§ 877). <b>Unwesentlich</b>, wenn er zu anderen Bedingungen abgeschlossen hätte: nur Anpassung (§ 872). Frist: <b>3 Jahre</b> ab Vertragsschluss (§ 1487).</p>
<h3><span class="n">03</span>List (§ 870): die Sonderregel</h3>
<ul class="sq"><li>vorsätzliche Täuschung, auch durch Verschweigen bei Aufklärungspflicht</li><li>auch ein bloßer Motivirrtum reicht; die § 871-Varianten spielen keine Rolle</li><li>zusätzlich Schadenersatz (§ 874)</li><li>Frist: <b>30 Jahre</b> (hA, § 1478) statt 3 Jahre</li><li>Täuscht ein Dritter: Anfechtung nur, wenn der Partner teilnahm oder es offenbar wissen musste (§ 875)</li></ul>
<h3><span class="n">04</span>Laesio enormis (§ 934)</h3>
<div data-fig="T-03b"></div>
<p>Wer nicht einmal <b>die Hälfte</b> dessen bekommt, was er gegeben hat (gemeiner Wert, Zeitpunkt des Vertragsschlusses), kann die Aufhebung verlangen. Verschulden oder Irrtum sind egal, es zählt nur das objektive Missverhältnis. Der Gegner kann den Vertrag retten, indem er die Differenz zum gemeinen Wert nachzahlt. Frist 3 Jahre (§ 1487). Ausnahmen in § 935 (Kenntnis des wahren Werts, besondere Vorliebe, Glücksgeschäft); zwischen Unternehmern abdingbar (§ 351 UGB). → A-08 · <a href="#/labor/laesio">laesio-Rechner</a></p>
<div class="box merk"><span class="tag">Merksatz</span><p>Geschäftsirrtum + eine der 3 Varianten + wesentlich → Aufhebung · unwesentlich → Anpassung · 3 Jahre. Motivirrtum: bei entgeltlichen Geschäften unbeachtlich, außer bei List.</p></div>`,
  compact: { key: 'Geschäftsirrtum + 1 von 3 Varianten (§ 871) → Aufhebung/Anpassung, 3 Jahre. List: jeder Irrtum, 30 Jahre.', bullets: [
    '<b>Motivirrtum</b> bei entgeltlichen Geschäften unbeachtlich (§ 901); beachtlich bei Schenkung, Bedingung oder List.',
    '§ 871: <b>veranlasst</b> ODER <b>offenbar auffallen</b> ODER <b>rechtzeitig aufgeklärt</b> (alternativ!).',
    '<b>Wesentlich</b> → Aufhebung ex tunc (§ 877) · <b>unwesentlich</b> → Anpassung (§ 872). Frist <b>3 J</b> ab Vertrag (§ 1487).',
    '<b>List § 870</b>: vorsätzliche Täuschung (auch Verschweigen); auch Motivirrtum; + Schadenersatz § 874; <b>30 J</b> (hA).',
    '<b>Laesio enormis § 934</b>: erhalten < ½ des Gegebenen → Aufhebung; Gegner kann Differenz nachzahlen; 3 J.',
    'Ausschluss § 935 (Kenntnis, Vorliebe, Glücksgeschäft); B2B abdingbar (§ 351 UGB).'] } },

{ id: 'T-04', part: 'T', kind: 'module', category: 'STELLVERTRETUNG', title: 'Stellvertretung', sub: '§§ 1002 ff, 1016, 1017, 1019, 1029 ABGB',
  html: `
<div data-fig="T-04"></div>
<h3><span class="n">01</span>Dürfen und Können</h3>
<p>Der Vertrag entsteht direkt zwischen <b>Vertretenem</b> (Machtgeber) und <b>Drittem</b>. Das <b>Innenverhältnis</b> (Auftrag, § 1002) regelt, was der Vertreter tun <b>darf</b>: Weisungen, Limits, Haftung. Das <b>Außenverhältnis</b> (Vollmacht) regelt, was er <b>kann</b>.</p>
<h3><span class="n">02</span>Voraussetzungen wirksamer Vertretung</h3>
<ol class="steps">
<li><b>Eigene Willenserklärung</b> des Vertreters (sonst Bote).</li>
<li><b>Offenlegung</b>: Handeln im fremden Namen, ausdrücklich oder aus den Umständen (§ 1017). Ausnahme: Bargeschäft des täglichen Lebens („Geschäft für den, den es angeht“).</li>
<li><b>Vertretungsmacht</b>: Vollmacht, gesetzliche Vertretung oder <b>Anscheinsvollmacht</b> (§ 1029). Für den Anschein muss der Vertretene durch sein Verhalten den Rechtsschein gesetzt haben, und der Dritte muss redlich vertrauen. → A-05</li></ol>
<div class="box merk"><span class="tag">Merksatz</span><p>Eine Beschränkung nur im Innenverhältnis (geheime Weisung) bindet den Dritten nicht. Der Vertrag gilt, der Vertreter haftet intern. Steht das Limit in der <b>Vollmachtsurkunde</b>, ist die Vertretungsmacht selbst begrenzt. → C-06</p></div>
<h3><span class="n">03</span>Ohne Vertretungsmacht: falsus procurator</h3>
<p>Das Geschäft ist <b>schwebend unwirksam</b>. Der Vertretene kann es genehmigen (§ 1016), ausdrücklich oder schlüssig (z. B. indem er sich den Vorteil zuwendet). Die Genehmigung wirkt zurück. Verweigert er, haftet der Vertreter dem redlichen Dritten für den <b>Vertrauensschaden</b> (§ 1019). Wer die fehlende Vollmacht kannte oder kennen musste, ist nicht geschützt. → C-06</p>
<div class="box err"><span class="tag">⚠ System Alert</span><p>Der Anschein muss <b>vom Vertretenen</b> ausgehen. Dass der Vertreter sich bloß als bevollmächtigt ausgibt, reicht nie.</p></div>`,
  compact: { key: 'Innen = Dürfen (Auftrag) · Außen = Können (Vollmacht). Ohne Vertretungsmacht: schwebend unwirksam.', bullets: [
    'Voraussetzungen: <b>eigene Erklärung</b> · <b>Offenlegung</b> (§ 1017) · <b>Vertretungsmacht</b>.',
    '<b>Anscheinsvollmacht § 1029</b>: Rechtsschein durch den <b>Vertretenen</b> + redliches Vertrauen + Kausalität (→ A-05).',
    'Geheime Weisung bindet den Dritten nicht; <b>Limit in der Vollmachtsurkunde</b> begrenzt das Können (→ C-06).',
    '<b>Falsus procurator</b>: schwebend unwirksam → Genehmigung § 1016 (auch schlüssig, wirkt zurück).',
    'Keine Genehmigung → Vertreter haftet dem redlichen Dritten auf <b>Vertrauensschaden</b> (§ 1019).'] } },

{ id: 'T-05', part: 'T', kind: 'module', category: 'LEISTUNGSSTÖRUNGEN', title: 'Verzug & Gewährleistung', sub: '§§ 918–921, 922–933a ABGB · VGG · § 9 KSchG',
  html: `
<h3><span class="n">01</span>Schuldnerverzug</h3>
<div data-fig="T-05a"></div>
<p>Leistet der Schuldner nicht rechtzeitig oder nicht am richtigen Ort, ist er in Verzug (§ 918). Verzug setzt <b>kein Verschulden</b> voraus. Der Gläubiger hat ein <b>Wahlrecht</b>: ① auf Erfüllung bestehen oder ② unter Setzung einer <b>angemessenen Nachfrist</b> zurücktreten. Bei Verschulden zusätzlich Verspätungs- bzw. Nichterfüllungsschaden (§ 921).</p>
<p><b>Fixgeschäft (§ 919)</b>: Ist der Termin erkennbar so wesentlich, dass eine spätere Leistung sinnlos ist („bei sonstigem Rücktritt“), gilt der Vertrag als aufgelöst, außer der Gläubiger verlangt unverzüglich Erfüllung. Die Wesentlichkeit muss für <b>beide erkennbar</b> sein. → A-06, C-08</p>
<div class="box merk"><span class="tag">Merksatz</span><p>Ein fester Liefertermin allein macht noch kein Fixgeschäft.</p></div>
<h3><span class="n">02</span>Gewährleistung: Stufenbau der Behelfe</h3>
<div data-fig="T-05b"></div>
<p><b>Mangel</b> = das Geleistete weicht vom Geschuldeten ab (§ 922), bei Übergabe vorhanden (Vermutung § 924), verschuldensunabhängig. <b>Stufe 1</b> (primär): Verbesserung oder Austausch nach Wahl des Übernehmers, außer unmöglich oder unverhältnismäßig. <b>Stufe 2</b> (sekundär): Preisminderung oder Wandlung; Wandlung nur bei nicht geringfügigem Mangel.</p>
<h4>Wann gleich Stufe 2? (§ 932 Abs 4 ABGB / VGG)</h4>
<ul class="sq"><li>Stufe 1 unmöglich oder unverhältnismäßig</li><li>Verkäufer verweigert oder handelt nicht in angemessener Frist</li><li>erhebliche Unannehmlichkeiten</li><li>unzumutbar aus triftigen Gründen in der Person des Übergebers</li><li>VGG (B2C): Mangel so schwerwiegend, dass sofort Preisminderung/Auflösung gerechtfertigt ist; Mangel trotz Behebungsversuch</li></ul>
<div class="box merk"><span class="tag">Merksatz</span><p>Der Verkäufer hat grundsätzlich eine „zweite Chance“.</p></div>
<h3><span class="n">03</span>Patch 2022: alt vs. neu</h3>
<table><tr><th>Thema</th><th>ABGB / VGG (seit 1.1.2022)</th><th>Alt (Klausurjahr 2020/21)</th></tr>
<tr><td class="k">Vermutungsfrist</td><td>Verbraucherkauf (VGG): <b>1 Jahr</b> ab Übergabe (§ 11 VGG). Sonst (ABGB, z. B. B2B, privat, Werk an Gebäude): weiterhin <b>6 Monate</b> (§ 924 ABGB)</td><td>6 Monate für alle</td></tr>
<tr><td class="k">Gewährleistungsfrist</td><td><b>2 Jahre</b> bewegliche, <b>3 Jahre</b> unbewegliche Sachen (§ 933); danach <b>+ 3 Monate</b> zur gerichtlichen Geltendmachung</td><td>2 bzw. 3 Jahre, innerhalb derer gerichtlich geltend zu machen</td></tr>
<tr><td class="k">Verbraucher</td><td>zwingend (VGG für Waren und digitale Leistungen; sonst § 9 KSchG)</td><td>§ 9 KSchG</td></tr>
<tr><td class="k">Mangelschaden</td><td colspan="2">Schadenersatz statt Gewährleistung möglich (§ 933a), Verschulden wird vermutet (§ 1298); primär Verbesserung/Austausch; Verschuldensvermutung bis 10 Jahre nach Übergabe</td></tr></table>
<p>Durchspielen: <a href="#/labor/gewaehr">Gewährleistungs-Navigator</a> · <a href="#/labor/fristen">Fristen-Rechner</a>.</p>`,
  compact: { key: 'Verzug: Erfüllung ODER Rücktritt mit Nachfrist (§ 918). Gewährleistung: erst verbessern/austauschen, dann mindern/wandeln.', bullets: [
    'Verzug ist <b>verschuldensunabhängig</b>; Schadenersatz (§ 921) nur bei Verschulden (vermutet, § 1298).',
    '<b>Fixgeschäft § 919</b> nur, wenn die Wesentlichkeit des Termins <b>für beide erkennbar</b> ist; dann ohne Nachfrist aufgelöst.',
    'Mangel § 922 · bei Übergabe vorhanden (Vermutung <b>6 M</b> ABGB, <b>1 J</b> VGG für Verbraucherkauf).',
    '<b>Stufe 1</b>: Verbesserung/Austausch · <b>Stufe 2</b>: Preisminderung/Wandlung (Wandlung nicht bei geringfügigem Mangel).',
    'Sofort Stufe 2: unmöglich, unverhältnismäßig, <b>verweigert</b>, zu langsam, Unannehmlichkeiten, unzumutbar.',
    'Fristen: <b>2 J</b> beweglich / <b>3 J</b> unbeweglich ab Übergabe <b>+ 3 Monate</b> zur Klage (§ 933).',
    'Schadenersatz § 933a: Verschulden vermutet bis <b>10 J</b> nach Übergabe; Verbraucher: zwingend (VGG / § 9 KSchG).'] } },

{ id: 'T-06', part: 'T', kind: 'module', category: 'SCHADENERSATZ', title: 'Schadenersatz', sub: '§§ 1293 ff, 1298, 1313a, 1315, 1323–1325, 1331 ABGB',
  html: `
<div data-fig="T-06a"></div>
<h3><span class="n">01</span>Das Prüfschema</h3>
<table><tr><th>#</th><th>Prüfpunkt</th><th>Inhalt</th></tr>
<tr><td class="k">01</td><td>Schaden</td><td>§ 1293: Nachteil an Vermögen oder Person</td></tr>
<tr><td class="k">02</td><td>Kausalität</td><td>conditio sine qua non (Wegdenken)</td></tr>
<tr><td class="k">03</td><td>Adäquanz</td><td>kein völlig atypischer Verlauf</td></tr>
<tr><td class="k">04</td><td>Rechtswidrigkeit</td><td>Vertrag · absolutes Recht · Schutzgesetz</td></tr>
<tr><td class="k">05</td><td>Schutzzweck</td><td>Die Norm soll genau diesen Schaden verhindern</td></tr>
<tr><td class="k">06</td><td>Verschulden</td><td>Vorsatz / grobe / leichte Fahrlässigkeit; deliktsfähig</td></tr></table>
<p>Dann: <b>Umfang</b> (§ 1324) → <b>Mitverschulden</b> (§ 1304) → <b>Verjährung</b> (§ 1489: 3 Jahre ab Kenntnis von Schaden und Schädiger, absolut 30 Jahre). In der Klausur immer in dieser Reihenfolge.</p>
<h3><span class="n">02</span>Der Verschuldensgrad bestimmt den Umfang</h3>
<table><tr><th>Verschulden</th><th>Ersatz</th></tr>
<tr><td class="k">leichte FL</td><td>positiver Schaden (eigentliche Schadloshaltung), objektiv berechnet</td></tr>
<tr><td class="k">grobe FL / Vorsatz</td><td>+ entgangener Gewinn (volle Genugtuung, § 1324)</td></tr>
<tr><td class="k">Vorsatz / Mutwille</td><td>+ Wert der besonderen Vorliebe (§ 1331)</td></tr></table>
<p>Ausnahmen: <b>§ 1325</b> (Körperverletzung: Heilungskosten, Verdienstentgang, Schmerzengeld) unabhängig vom Verschuldensgrad. Zwischen Unternehmern bei unternehmensbezogenen Geschäften auch entgangener Gewinn (§ 349 UGB). Rechnen: <a href="#/labor/umfang">Umfang-Rechner</a>.</p>
<h3><span class="n">03</span>Vertrag vs. Delikt</h3>
<table><tr><th></th><th>Vertrag</th><th>Delikt</th></tr>
<tr><td class="k">Beweislast Verschulden</td><td>Schädiger (§ 1298)</td><td>Geschädigter</td></tr>
<tr><td class="k">Gehilfen</td><td>§ 1313a: wie eigenes Verschulden</td><td>§ 1315: nur untüchtiger oder wissentlich gefährlicher Gehilfe</td></tr>
<tr><td class="k">reine Vermögensschäden</td><td>ersatzfähig</td><td>grundsätzlich nicht</td></tr></table>
<div data-fig="T-06b"></div>
<div class="box merk"><span class="tag">Merksatz</span><p>Gehilfenhaftung: zuerst fragen, ob ein <b>Vertrag</b> besteht. Vertrag → § 1313a (immer). Kein Vertrag → § 1315 (nur untüchtig/gefährlich). Der Gehilfe selbst haftet deliktisch; Arbeitnehmer sind über das DHG geschützt. → C-05, B-04</p></div>`,
  compact: { key: 'Schaden → Kausalität → Adäquanz → Rechtswidrigkeit → Schutzzweck → Verschulden → Umfang.', bullets: [
    '<b>Leichte FL</b>: nur positiver Schaden · <b>grobe FL/Vorsatz</b>: + entgangener Gewinn (§ 1324) · <b>Mutwille</b>: + Vorliebe (§ 1331).',
    '<b>§ 1325</b>: Heilungskosten, Verdienstentgang, Schmerzengeld <b>unabhängig</b> vom Verschuldensgrad.',
    'B2B unternehmensbezogen: entgangener Gewinn schon bei leichter FL (<b>§ 349 UGB</b>).',
    'Vertrag: <b>Beweislastumkehr § 1298</b>, Gehilfen <b>§ 1313a</b>, reine Vermögensschäden ersatzfähig.',
    'Delikt: Geschädigter beweist; Gehilfe nur bei <b>Untüchtigkeit/Gefährlichkeit § 1315</b>.',
    'Verjährung <b>§ 1489</b>: 3 J ab Kenntnis von Schaden und Schädiger, absolut 30 J. Mitverschulden § 1304.'] } },

{ id: 'T-07', part: 'T', kind: 'module', category: 'SACHENRECHT', title: 'Eigentumserwerb', sub: '§§ 366–368, 380, 423 ff, 431, 440, 442 ABGB',
  html: `
<div data-fig="T-07"></div>
<h3><span class="n">01</span>Derivativer Erwerb: Titel + Modus + Befugnis</h3>
<table><tr><th>Element</th><th>Inhalt</th><th>Norm</th></tr>
<tr><td class="k">Titel</td><td>gültiges Verpflichtungsgeschäft (Kauf, Schenkung, Tausch)</td><td>§ 380</td></tr>
<tr><td class="k">Modus</td><td>bewegliche Sachen: <b>Übergabe</b> (§§ 426 ff) · Liegenschaft: <b>Einverleibung</b></td><td>§ 431</td></tr>
<tr><td class="k">Befugnis</td><td>Der Vormann ist Eigentümer: nemo plus iuris</td><td>§ 442</td></tr></table>
<h3><span class="n">02</span>Befugnis fehlt? Gutgläubiger Erwerb (§ 367)</h3>
<p>Nur bei <b>beweglichen</b> Sachen. Voraussetzungen: entgeltlich · gültiger Titel + Modus · redlich (§ 368: weder Wissen noch fahrlässige Unkenntnis) · <b>und eine Erwerbssituation</b>:</p>
<ol class="steps"><li><b>Öffentliche Versteigerung</b></li><li><b>Unternehmer im gewöhnlichen Betrieb</b> seines Unternehmens (Händler verkauft Ware seiner Branche)</li><li><b>Vertrauensmann</b>: Der Eigentümer hat die Sache dem Veräußerer freiwillig anvertraut (Leihe, Miete, Verwahrung, Reparatur)</li></ol>
<div class="box err"><span class="tag">⚠ System Alert</span><p>Gestohlene Sachen kommen bei ③ nie in Frage, weil der Eigentümer sie niemandem anvertraut hat. Wer sie privat kauft, wird kein Eigentümer. → A-04 vs. C-02</p></div>
<h4>Redlichkeit (§ 368)</h4>
<p>Unredlich ist, wer aus der Natur der Sache, einem <b>auffallend niedrigen Preis</b>, den persönlichen Eigenschaften des Veräußerers oder anderen Umständen einen begründeten Verdacht schöpfen musste. Schon <b>leichte Fahrlässigkeit</b> schadet. Prüf dich selbst: <a href="#/labor/erwerb">§ 367-Check</a>.</p>
<h3><span class="n">03</span>Originärer Erwerb & Rechtsfolgen</h3>
<p>Ersitzung (§§ 1460 ff: Besitz rechtmäßig, redlich, echt + Zeit: bewegliche Sachen 3 Jahre), Aneignung, Fund, Zuwachs, Eigentumserwerb nach § 367. Der Eigentümer verlangt die Sache mit der <b>Eigentumsklage</b> (rei vindicatio, § 366) von jedem Inhaber heraus. Der Käufer hält sich an seinen Verkäufer (Rechtsmangel, Schadenersatz).</p>
<div class="box merk"><span class="tag">Merksatz</span><p>Liegenschaften: Ohne Einverleibung kein Eigentum (Intabulationsprinzip). Bei Doppelverkauf gewinnt, wer zuerst um Einverleibung ansucht (§ 440). → A-07, B-05</p></div>`,
  compact: { key: 'Titel + Modus + Befugnis (§§ 380, 442). Fehlt die Befugnis: § 367 nur mit einer der 3 Erwerbssituationen.', bullets: [
    'Modus: bewegliche Sachen <b>Übergabe</b>, Liegenschaften <b>Einverleibung</b> im Grundbuch (§ 431).',
    '<b>Nemo plus iuris</b> (§ 442): niemand überträgt mehr Rechte, als er hat.',
    '§ 367: beweglich + entgeltlich + Titel/Modus + <b>redlich</b> + <b>Versteigerung / Unternehmer im Betrieb / Vertrauensmann</b>.',
    'Redlichkeit § 368: schon <b>leichte Fahrlässigkeit</b> schadet (Preis, Gravur, Umstände).',
    '<b>Gestohlen bleibt gestohlen</b> beim Privatkauf (→ A-04); Leihe = anvertraut = Vertrauensmann (→ C-02).',
    'Eigentumsklage <b>§ 366</b> (rei vindicatio); Doppelverkauf Liegenschaft: <b>§ 440</b> – wer zuerst ansucht.'] } }
);
