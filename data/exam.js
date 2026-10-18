// Erwartungshorizont für die Klausur-Simulation mit offenen Antworten.
// Pro Fall ein Array je Frage; jeder Punkt: t = was erwartet wird, p = Punkte, k = Stichwörter für die automatische Vorauswahl.
window.FB_EH = {
'A-01': [[
  { t: 'Vertrag durch Angebot und Annahme (§ 861) über Ware und Preis (essentialia)', p: 1, k: ['861', 'angebot', 'annahme', 'essentialia'] },
  { t: 'Formfreiheit (§ 883): Vertrag bereits am Telefon zu 5 €/Stück geschlossen', p: 1, k: ['883', 'formfrei', 'telefon'] },
  { t: 'Bestätigungsschreiben wirkt nur deklarativ (Beweismittel); Abweichung = Angebot auf Vertragsänderung', p: 1, k: ['deklarativ', 'beweis', 'vertragsänderung'] },
  { t: 'Schweigen ist keine Zustimmung (§ 863); kaufm. Bestätigungsschreiben scheitert an wesentlicher Abweichung (+20 % Preis)', p: 1, k: ['schweigen', '863', 'wesentlich', 'kaufmännisch'] },
  { t: 'Ergebnis: K hat nur Anspruch auf 5.000 €', p: 1, k: ['5.000', '5000'] }]],
'A-02': [[
  { t: 'Einordnung als Motivirrtum (Irrtum über den Beweggrund, Schuhe mangelfrei)', p: 1, k: ['motiv', 'beweggrund'] },
  { t: 'Bei entgeltlichen Geschäften unbeachtlich (§ 901), keine Bedingung/List → keine Anfechtung', p: 1, k: ['901', 'entgeltlich', 'unbeachtlich'] }], [
  { t: 'Begriff: unrichtige Vorstellung von der Wirklichkeit; Abgrenzung zum Dissens', p: 1, k: ['vorstellung', 'wirklichkeit', 'dissens'] },
  { t: 'Arten: Erklärungs-, Inhalts-, Eigenschaftsirrtum, Irrtum in der Person (§ 873) = Geschäftsirrtum', p: 2, k: ['erklärungsirrtum', 'inhaltsirrtum', 'eigenschaft', '873'] },
  { t: 'Motiv-, Kalkulations-, Rechtsirrtum und ihre (Un-)Beachtlichkeit', p: 1, k: ['kalkulation', 'rechtsirrtum', 'motivirrtum'] },
  { t: '§ 871: eine der drei Varianten (veranlasst / offenbar auffallen / rechtzeitig aufgeklärt) – alternativ', p: 2, k: ['veranlasst', 'auffallen', 'aufgeklärt', '871'] },
  { t: 'Wesentlich → Aufhebung (§ 877) · unwesentlich → Anpassung (§ 872)', p: 1, k: ['wesentlich', 'aufhebung', 'anpassung', '872'] },
  { t: 'Frist 3 Jahre ab Vertragsabschluss (§ 1487)', p: 1, k: ['1487', '3 jahre', 'drei jahre'] },
  { t: 'List/Furcht (§ 870): jeder Irrtum beachtlich, Schadenersatz § 874, 30 Jahre', p: 1, k: ['list', '870', 'furcht', '30 jahre'] }]],
'A-03': [[
  { t: 'Gewährleistung, primärer Behelf Austausch (§ 932 / VGG), verschuldensunabhängig', p: 1, k: ['gewährleistung', 'austausch', '932'] }], [
  { t: 'Stufenbau: Verbesserung/Austausch vor Preisminderung/Wandlung', p: 2, k: ['stufe', 'verbesserung', 'preisminderung', 'wandlung'] },
  { t: 'Kaufpreis zurück = Wandlung; grundsätzlich erst nach Stufe 1 („zweite Chance“)', p: 1, k: ['zweite chance', 'sekundär', 'kaufpreis'] },
  { t: 'Ausnahmen § 932 Abs 4, hier Unzumutbarkeit (Fehler aus Sphäre des Verkäufers)', p: 2, k: ['unzumutbar', '932 abs 4', 'sphäre'] },
  { t: 'Patch: VGG erlaubt bei schwerwiegendem Mangel sofort Auflösung → 399 € zurück', p: 1, k: ['vgg', 'schwerwiegend', '399'] },
  { t: 'Daneben: Schadenersatz § 933a, Irrtumsanfechtung, (PHG trifft Hersteller)', p: 1, k: ['933a', 'irrtum', 'phg', 'produkthaftung'] }], [
  { t: 'Bezeichnung: Mangelfolgeschaden (nur über Schadenersatz)', p: 1, k: ['mangelfolgeschaden'] },
  { t: 'Schema: Schaden, Kausalität, Adäquanz, Rechtswidrigkeit (Vertragsverletzung), Schutzzweck', p: 2, k: ['kausal', 'adäquan', 'rechtswidrig', 'schutzzweck'] },
  { t: 'Verschulden vermutet (§ 1298), Mitarbeiter über § 1313a zugerechnet', p: 1, k: ['1298', '1313a', 'erfüllungsgehilfe'] },
  { t: 'Ergebnis: Ersatz der 5.000 € (positiver Schaden)', p: 1, k: ['5.000', '5000', 'positiver schaden'] }], [
  { t: 'Mangel = Abweichung des Geleisteten vom Geschuldeten (§ 922)', p: 1, k: ['922', 'abweichung', 'geschuldet'] },
  { t: 'Vereinbarte und gewöhnlich vorausgesetzte Eigenschaften; bei Übergabe vorhanden (§ 924)', p: 1, k: ['gewöhnlich', 'vereinbart', 'übergabe', '924'] },
  { t: 'Arten: Sach-/Rechtsmangel, behebbar/unbehebbar, geringfügig/nicht geringfügig', p: 1, k: ['rechtsmangel', 'behebbar', 'geringfügig'] }]],
'A-04': [[
  { t: 'B war Eigentümer; Dieb A erlangt kein Eigentum', p: 1, k: ['dieb', 'kein eigentum', 'eigentümer'] },
  { t: 'Derivativer Erwerb: Titel ✔ Modus ✔ (§ 380)', p: 1, k: ['titel', 'modus', '380'] },
  { t: 'Verfügungsbefugnis fehlt: nemo plus iuris (§ 442)', p: 1, k: ['nemo plus', '442', 'befugnis'] },
  { t: '§ 367: bewegliche Sache, entgeltlich, Titel + Modus', p: 1, k: ['367', 'beweglich', 'entgeltlich'] },
  { t: 'Redlichkeit (§ 368) diskutiert: 4.500 € kein auffallend niedriger Preis', p: 1, k: ['368', 'redlich', 'preis'] },
  { t: 'Keine Erwerbssituation: keine Versteigerung, kein Unternehmer, kein Vertrauensmann (gestohlen)', p: 2, k: ['versteigerung', 'unternehmer', 'vertrauensmann', 'anvertraut'] },
  { t: 'Ersitzung (3 Jahre, § 1466) nicht abgelaufen', p: 1, k: ['ersitzung', '1466', '1460'] },
  { t: 'Ergebnis: B Eigentümer, rei vindicatio § 366; C hält sich an A', p: 1, k: ['366', 'vindicatio', 'eigentumsklage'] }]],
'A-05': [[
  { t: 'Handeln im fremden Namen / Offenlegung (§ 1017)', p: 1, k: ['1017', 'fremden namen', 'offenlegung'] },
  { t: 'Keine echte (ausdrückliche oder stillschweigende) Vollmacht', p: 1, k: ['keine vollmacht', 'echte vollmacht', 'stillschweigend'] },
  { t: 'Anscheinsvollmacht § 1029: Rechtsschein durch E (wiederholtes Zahlen)', p: 1, k: ['1029', 'anschein', 'rechtsschein'] },
  { t: 'Redliches Vertrauen des B + Kausalität', p: 1, k: ['redlich', 'vertrauen', 'kausal'] },
  { t: 'Ergebnis: Vertrag B–E; Regress im Innenverhältnis (Gegenprobe § 1019)', p: 1, k: ['zwischen b und e', 'b und e', 'regress', '1019'] }]],
'A-06': [[
  { t: 'Schuldnerverzug (§ 918), verschuldensunabhängig', p: 1, k: ['918', 'verzug'] },
  { t: 'Kein Fixgeschäft (§ 919): Dringlichkeit für Y nicht erkennbar', p: 1, k: ['919', 'fixgeschäft', 'erkennbar'] },
  { t: 'Wahlrecht: Erfüllung oder Rücktritt unter angemessener Nachfrist', p: 1, k: ['nachfrist', 'rücktritt', 'erfüllung'] },
  { t: 'Bei Verschulden (§ 1298 vermutet) Schadenersatz § 921', p: 1, k: ['921', 'schadenersatz', '1298'] }]],
'A-07': [[
  { t: 'Titel: gültiges Verpflichtungsgeschäft mit Verfügungsberechtigtem (§ 380)', p: 1, k: ['titel', '380'] },
  { t: 'Modus: Einverleibung im Grundbuch (§ 431), Intabulationsprinzip', p: 1, k: ['einverleibung', '431', 'grundbuch'] },
  { t: 'Grundbuchsfähige Urkunde: beglaubigte Unterschriften (§ 31 GBG) + Aufsandungserklärung (§ 32 GBG)', p: 1, k: ['aufsandung', 'beglaubigt', '31 gbg', 'urkunde'] },
  { t: 'Originärer Erwerb/Ausnahmen: Ersitzung, Einantwortung, § 440, § 1500', p: 1, k: ['ersitzung', 'einantwortung', '440', '1500'] }]],
'A-08': [[
  { t: 'List § 870: Täuschung, Vorsatz, Kausalität subsumiert', p: 2, k: ['list', '870', 'täuschung', 'vorsatz'] },
  { t: 'List-Folge: Aufhebung oder Anpassung; Frist 30 Jahre (hA, § 1478)', p: 2, k: ['30 jahre', '1478', 'anpassung'] },
  { t: 'Irrtum § 871: Geschäftsirrtum über wertbildende Eigenschaften, veranlasst', p: 2, k: ['871', 'veranlasst', 'geschäftsirrtum'] },
  { t: 'Irrtum-Folge (Aufhebung/Anpassung § 872) und Frist 3 Jahre (§ 1487)', p: 1, k: ['1487', '3 jahre', '872'] },
  { t: 'Laesio enormis § 934: 20.000 < 25.000 → Aufhebung', p: 2, k: ['934', 'laesio', 'hälfte', '25.000'] },
  { t: 'Viktor kann durch Zahlung von 30.000 € retten; kein Ausschluss § 935; 3 Jahre', p: 2, k: ['30.000', '935', 'aufzahl'] },
  { t: 'Schadenersatz § 874 / culpa in contrahendo: 30.000 €, Auto behalten; § 1489', p: 2, k: ['874', '1489', 'culpa', 'schadenersatz'] },
  { t: 'Gewährleistung: Preis ist kein Mangel, nur bei zugesagten Eigenschaften (2 J + 3 M)', p: 2, k: ['gewährleistung', 'kein mangel', 'zugesag'] },
  { t: 'Klares Ergebnis mit Wahlmöglichkeiten und Fristen', p: 1, k: ['ergebnis', 'wahl'] }]],
'B-01': [[
  { t: 'Werkvertrag (§ 1165); V Verbraucher, HDG Unternehmer → ABGB + KSchG', p: 1, k: ['werkvertrag', '1165', 'kschg', 'verbraucher'] },
  { t: '§ 5 Abs 2 KSchG: KV im Zweifel verbindlich (§ 1170a Abs 1)', p: 1, k: ['5 abs 2', 'verbindlich', '1170a'] },
  { t: 'Mehrkosten = Kalkulationsrisiko; hilfsweise § 1170a Abs 2: keine unverzügliche Anzeige', p: 1, k: ['kalkulation', 'anzeige', 'beträchtlich'] },
  { t: 'Ergebnis: 230.000 €', p: 1, k: ['230.000', '230000'] }]],
'B-02': [[
  { t: 'Werkvertrag → §§ 922 ff über § 1167; Mangel § 922; Verbraucher: § 9 KSchG', p: 1, k: ['1167', '922', '9 kschg'] },
  { t: 'Frist: eingebaut = unbeweglich → 3 Jahre + 3 Monate (§ 933)', p: 1, k: ['3 jahre', 'unbeweglich', '933'] },
  { t: 'Grundfall: Vermutung § 924 (6 M), Verbesserung, dann Minderung/Wandlung', p: 1, k: ['924', 'vermutung', 'verbesserung'] },
  { t: 'Var. a: Frist läuft, aber Vermutung abgelaufen → Beweislast bei V', p: 1, k: ['beweislast', 'beweisen', 'vermutung'] },
  { t: 'Var. b: Gewährleistung verfristet → Schadenersatz § 933a (10 J Vermutung, § 1489)', p: 2, k: ['933a', '10 jahre', '1489'] },
  { t: 'Einwendungen: später entstanden, erst verbessern, § 928, § 377 UGB, Ausschluss', p: 1, k: ['928', '377', 'einwand', 'einwendung'] }]],
'B-03': [[
  { t: 'Schenkungsvertrag (§ 938)', p: 1, k: ['938', 'schenkung'] },
  { t: 'Ohne wirkliche Übergabe Notariatsakt nötig (§ 943) → formungültig, G nicht gebunden', p: 2, k: ['943', 'notariatsakt', 'form'] },
  { t: 'Variante: Überweisung = wirkliche Übergabe, Formmangel geheilt', p: 1, k: ['übergabe', 'geheilt', 'überweisung'] },
  { t: 'Widerruf: grober Undank § 948 ✘, Dürftigkeit § 947 ✘, Zweckverfehlung strittig', p: 2, k: ['948', 'undank', '947', 'zweck'] }]],
'B-04': [[
  { t: 'V gegen K: Werkvertrag, M Erfüllungsgehilfe, § 1313a', p: 2, k: ['1313a', 'erfüllungsgehilfe', 'werkvertrag'] },
  { t: 'Schema für V (Schaden, Kausalität/Adäquanz, Rechtswidrigkeit, Verschulden vermutet § 1298)', p: 1, k: ['1298', 'adäquan', 'kausal'] },
  { t: 'M haftet V und A deliktisch (§ 1295), solidarisch mit K', p: 1, k: ['1295', 'delikt', 'solidarisch'] },
  { t: 'A: Heilungskosten, Verdienstentgang, Schmerzengeld (§ 1325)', p: 1, k: ['1325', 'schmerzengeld', 'heilungskosten'] },
  { t: 'A gegen K: kein Vertrag → § 1315, M habituell untüchtig und K wusste es', p: 3, k: ['1315', 'untüchtig', 'habituell', 'besorgungsgehilfe'] },
  { t: 'Innenverhältnis: DHG', p: 1, k: ['dhg', 'dienstnehmerhaftpflicht'] }]],
'B-05': [[
  { t: 'Liegenschaft: Titel + Einverleibung (§ 431); Emil nur Titel', p: 1, k: ['431', 'einverleibung', 'titel'] },
  { t: '§ 440: wer zuerst um Einverleibung ansucht → Herbert Eigentümer', p: 1, k: ['440', 'herbert'] },
  { t: 'Emil gegen V: schuldhafte Unmöglichkeit (§ 920) → Schadenersatz/Rücktritt', p: 2, k: ['920', 'unmöglich', 'nichterfüllung'] },
  { t: 'Gegen Herbert nur bei Kenntnis + Verleitung zum Vertragsbruch (§ 1295)', p: 1, k: ['verleit', 'vertragsbruch', 'forderungsrecht'] }]],
'B-06': [[
  { t: 'T mit 19 volljährig (§ 21 Abs 2), voll geschäftsfähig → Kauf wirksam', p: 2, k: ['volljährig', '21', 'geschäftsfähig'] },
  { t: 'Minderjährig: Vermögensverwaltung, § 170, Pflegschaftsgericht § 167 Abs 3', p: 1, k: ['167', 'pflegschaft', 'obsorge'] },
  { t: 'Erwachsenenvertretung §§ 239 ff nur bei psychischer Krankheit/Beeinträchtigung, nicht bei Unvernunft', p: 2, k: ['239', 'erwachsenenvertretung', 'psychisch'] }]],
'B-07': [[
  { t: 'Fernabsatzvertrag; Rücktritt 14 Tage ab Erhalt (§ 11 FAGG), ggf. +12 M (§ 12)', p: 2, k: ['fagg', '14 tage', '11'] },
  { t: 'Daneben Erklärungsirrtum § 871', p: 1, k: ['erklärungsirrtum', '871'] },
  { t: 'AGB: zwingendes Recht, § 864a, § 879 Abs 3, § 6 Abs 3 KSchG, § 915', p: 2, k: ['864a', '879', '6 abs 3', '915'] },
  { t: 'Variante: AGB in Fassung bei Vertragsschluss; einseitige Änderung wirkungslos', p: 1, k: ['vertragsschluss', 'nachträglich', 'einseitig'] }]],
'B-08': [[
  { t: 'Werkvertrag: Erfolg geschuldet, nicht Aufwand', p: 1, k: ['werkvertrag', 'erfolg'] },
  { t: 'Warnpflicht § 1168a verletzt; Sachverständigenmaßstab § 1299', p: 2, k: ['1168a', 'warnpflicht', '1299'] },
  { t: 'Werklohn nicht fällig / Zurückbehaltung (§§ 1170, 1052), Minderung', p: 1, k: ['1170', '1052', 'zurückbehalt'] },
  { t: 'Schadenersatz 500 € (§ 1298); T über Schutzwirkung bzw. deliktisch', p: 2, k: ['500', 'schutzwirkung', '1298'] },
  { t: 'Variante: Arbeitsvertrag schuldet Bemühen; W hat gewarnt, DHG → volles Gehalt', p: 2, k: ['arbeitsvertrag', 'bemühen', 'gehalt', 'dhg'] }]],
'B-09': [[
  { t: 'Schema: Schaden, Kausalität/Adäquanz, Rechtswidrigkeit (absolute Rechte, StVO)', p: 2, k: ['kausal', 'rechtswidrig', 'stvo', 'schutzgesetz'] },
  { t: 'Grobe Fahrlässigkeit, T deliktsfähig', p: 1, k: ['grob', 'deliktsfähig'] },
  { t: 'EKHG-Halterhaftung, Direktklage Versicherer § 26 KHVG', p: 1, k: ['ekhg', 'khvg', 'versicher'] },
  { t: 'Anzug 4.000 € positiver Schaden', p: 1, k: ['4.000', '4000', 'positiver'] },
  { t: 'Heilungskosten und Schmerzengeld (§ 1325)', p: 1, k: ['1325', 'schmerzengeld'] },
  { t: '9.000 € = entgangener Gewinn, bei grober FL grds. ersatzfähig (§ 1324)', p: 2, k: ['entgangen', '1324', '9.000', '9000'] },
  { t: 'Nur bei hoher Wahrscheinlichkeit; bloße Chance nicht', p: 1, k: ['wahrscheinlich', 'chance'] }]],
'B-10': [[
  { t: 'Fälschung = Mangel; Unikat → sofort Wandlung (2 J + 3 M)', p: 2, k: ['mangel', 'wandlung', 'unikat'] },
  { t: 'Eigenschaftsirrtum, veranlasst, wesentlich → Aufhebung (3 J); Wahlrecht', p: 2, k: ['eigenschaftsirrtum', 'veranlasst', '871'] },
  { t: 'List nur, wenn Alexander es wusste (30 J)', p: 1, k: ['list', '870'] },
  { t: 'Schadenersatz: Sachverständiger § 1299, § 933a; ggf. laesio enormis', p: 1, k: ['1299', '933a', '934'] }]],
'B-11': [[
  { t: 'Vertrag = Angebot + Annahme (§ 861); Angebot braucht Bindungswillen', p: 1, k: ['861', 'bindungswille'] },
  { t: 'Katalog = invitatio ad offerendum (unbestimmte Vielzahl, Vorrat)', p: 2, k: ['invitatio', 'aufforderung'] },
  { t: 'R macht das Angebot; Flora: Ablehnung + neues Angebot (70 €)', p: 1, k: ['ablehnung', 'neues angebot'] },
  { t: 'Ergebnis: kein Anspruch auf 25 €', p: 1, k: ['kein vertrag', 'nein', '25'] }]],
'C-01': [[
  { t: 'Deliktische Haftung (kein Vertrag), §§ 1293 ff, 1295', p: 1, k: ['delikt', '1295'] },
  { t: 'Schema inkl. Adäquanz', p: 1, k: ['adäquan', 'kausal'] },
  { t: 'Leichte Fahrlässigkeit, Mark deliktsfähig', p: 1, k: ['leicht', 'deliktsfähig'] },
  { t: '§ 1324: leichte FL → nur positiver Schaden: Anzug 2.500 € (§ 1332)', p: 1, k: ['1324', '2.500', '2500', 'positiver'] },
  { t: 'Heilungskosten 750 € (§ 1325)', p: 1, k: ['750', 'heilungskosten'] },
  { t: 'Schmerzengeld (§ 1325)', p: 1, k: ['schmerzengeld'] },
  { t: 'Bonus: entgangener Gewinn (✘) vs. Verdienstentgang aus Körperverletzung (§ 1325) – begründet', p: 2, k: ['verdienstentgang', 'bonus', 'entgangen'] },
  { t: 'Klares Ergebnis mit Beträgen', p: 1, k: ['ergebnis', 'muss'] }]],
'C-02': [[
  { t: 'Leihe: Tobias Eigentümer, Jacob nur Inhaber; nemo plus iuris (§ 442)', p: 2, k: ['leihe', 'inhaber', '442', 'nemo'] },
  { t: '§ 367: beweglich, entgeltlich, Titel + Modus', p: 1, k: ['367', 'entgeltlich'] },
  { t: 'Vertrauensmann (freiwillig anvertraut)', p: 2, k: ['vertrauensmann', 'anvertraut'] },
  { t: 'Redlichkeit § 368: Gravur, guter Preis, eigene Zweifel → unredlich', p: 2, k: ['368', 'gravur', 'redlich'] },
  { t: 'Ergebnis: kein Eigentum, § 366 Herausgabe (a. A. vertretbar)', p: 1, k: ['366', 'kein eigentum', 'herausgabe'] }]],
'C-03': [[
  { t: 'Großer Kratzer = Mangel (§ 922), keine übliche Gebrauchsspur', p: 1, k: ['922', 'mangel', 'gebrauchsspur'] },
  { t: '§ 928: keine Gewährleistung für offenkundige Mängel; Ausnahmen Arglist/Zusage', p: 2, k: ['928', 'offenkundig', 'in die augen'] },
  { t: 'Variante 1: Händler im Recht (ggf. VGG-Diskussion)', p: 1, k: ['im recht', 'vgg'] },
  { t: 'Variante 2: Vermutung (1 J VGG / 6 M § 924)', p: 1, k: ['vermutung', '924', '1 jahr'] },
  { t: 'Verbesserung; Verweigerung → Stufe 2 (§ 932 Abs 4), kein Austausch (Stückschuld)', p: 2, k: ['verweiger', 'stufe', 'stückschuld'] },
  { t: 'Nur Preisminderung, Wandlung ausgeschlossen (geringfügig); alternativ § 933a', p: 1, k: ['geringfügig', 'preisminderung', '933a'] },
  { t: 'Frist 2 J + 3 M (§ 933)', p: 1, k: ['933', '2 jahre'] }]],
'C-04': [[
  { t: 'GewO-Verstoß macht Vertrag nicht nichtig (§ 879)', p: 1, k: ['nichtig', '879', 'gewo'] },
  { t: 'Irrtum in der Person § 873: nur bei Verkehrswesentlichkeit', p: 2, k: ['873', 'person', 'verkehrswesentlich'] },
  { t: 'Abgrenzung Motivirrtum (§ 901) vs. veranlasster Geschäftsirrtum (§ 871)', p: 2, k: ['motiv', '901', 'veranlasst'] },
  { t: 'Irrtum: Aufhebung, 3 Jahre (§ 1487)', p: 1, k: ['1487', '3 jahre'] },
  { t: 'List § 870: Befugnis bewusst vorgespiegelt; 30 Jahre (hA)', p: 2, k: ['list', '870', '30 jahre', '1478'] }]],
'C-05': [[
  { t: 'Beherbergungsvertrag mit Schutz- und Sorgfaltspflichten', p: 1, k: ['beherbergung', 'schutzpflicht', 'sorgfalt'] },
  { t: 'Wartungsfirma = Erfüllungsgehilfe (auch selbständig), § 1313a', p: 2, k: ['1313a', 'erfüllungsgehilfe'] },
  { t: '„Renommiert“ betrifft nur § 1315; Beweislastumkehr § 1298', p: 1, k: ['1315', '1298', 'renommiert'] },
  { t: 'Wartungsfirma haftet deliktisch (§ 1295), solidarisch; § 1325', p: 2, k: ['1295', 'delikt', 'solidarisch', '1325'] }]],
'C-06': [[
  { t: 'Innenverhältnis Auftrag (§ 1002) vs. Außenverhältnis Vollmacht', p: 1, k: ['1002', 'innenverhältnis', 'auftrag'] },
  { t: 'Limit in der Urkunde begrenzt die Vertretungsmacht; Alltagsvollmacht deckt es nicht', p: 1, k: ['urkunde', 'limit', 'vertretungsmacht'] },
  { t: 'Offenlegung (§ 1017)', p: 1, k: ['1017', 'offenleg', 'fremden namen'] },
  { t: 'Falsus procurator → schwebend unwirksam; kein Anschein', p: 2, k: ['falsus', 'schwebend'] },
  { t: 'Genehmigung (§ 1016) → wirksamer Vertrag Tobias–Händler über 1.100 €; § 1019 entfällt', p: 2, k: ['1016', 'genehmig', '1.100', '1100'] }]],
'C-07': [[
  { t: '13 = unmündig (§ 21 Abs 2); § 170 Abs 1 Einwilligung nötig', p: 1, k: ['unmündig', '170', '21'] },
  { t: '§ 170 Abs 2 (erst ab 14) und Abs 3 (kein Alltagsgeschäft) geprüft', p: 1, k: ['170 abs 3', 'alltag', 'geringfügig'] },
  { t: 'Schwebend → durch Verweigerung endgültig unwirksam', p: 1, k: ['schwebend', 'endgültig', 'verweiger'] },
  { t: 'Aussehen irrelevant: kein Vertrauensschutz', p: 1, k: ['aussehen', 'vertrauensschutz', 'guter glaube'] },
  { t: 'Rückabwicklung § 877, §§ 1431 ff: 500 € zurück, Ohrringe irrelevant', p: 2, k: ['877', '1431', '500', 'rückabwicklung'] }]],
'C-08': [[
  { t: 'Schuldnerverzug (§ 918), verschuldensunabhängig', p: 1, k: ['918', 'verzug'] },
  { t: 'Kein Fixgeschäft (§ 919): Rene wusste nichts von der Eröffnung', p: 2, k: ['919', 'fixgeschäft', 'erkennbar'] },
  { t: 'Rücktritt nur mit angemessener Nachfrist; Lieferung nach 3 Tagen → Rücktritt unwirksam', p: 2, k: ['nachfrist', 'unwirksam'] },
  { t: 'Vertrag besteht, Ivo muss abnehmen/zahlen (sonst Annahmeverzug)', p: 1, k: ['abnehmen', 'annahmeverzug', 'besteht'] },
  { t: 'Verspätungsschaden §§ 921, 1298, § 349 UGB (Beweis, Adäquanz)', p: 1, k: ['921', '349', 'verspätung'] },
  { t: 'Klares Ergebnis: Ivo hat nicht recht', p: 1, k: ['nicht recht', 'nein'] }]]
};
