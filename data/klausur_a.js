// TEIL I · KLAUSUR A: Modulprüfung 02.12.2020 (Romanek). sv = Sachverhalt, qs = Fragen, html = Musterlösung.
window.FB_SECTIONS.push(

{ id: 'A-01', part: 'A', kind: 'case', category: 'VERTRAGSABSCHLUSS', title: 'Kistenbestellung', topic: 'Bestätigungsschreiben', sub: '§§ 861, 863, 883 ABGB · Bestätigungsschreiben', pts: 5, mods: ['T-01'],
  sv: 'Der Gurkenproduzent P bestellt telefonisch bei dem Kistenproduzenten K 1000 Kisten. Auf die Frage nach dem Preis sagt K „je EUR 5,00“; P ist damit einverstanden und wird auch sogleich ein Liefertermin vereinbart. Tags darauf langt ein Bestätigungsfax von K bei P ein, in dem die Bestellung von „1000 Kisten um EUR 6,00 pro Stück“ dankend bestätigt wird. Darauf reagiert P nicht. K liefert und verlangt EUR 6.000,00, P will nur EUR 5.000,00 bezahlen. K weist darauf hin, dass er den Preis von EUR 6,00 pro Stück schriftlich festgehalten hat.',
  qs: [{ l: 'Frage', p: 5, q: 'Hat K Anspruch auf EUR 6.000,00? Prüfen Sie, ob und wann ein Vertrag zustande gekommen ist!' }],
  html: `
<div data-fig="A-01"></div>
<h3><span class="n">01</span>Vertragsschluss am Telefon</h3>
<p>Ein Vertrag kommt durch übereinstimmende Willenserklärungen, also <b>Angebot und Annahme</b>, zustande (§ 861 ABGB). Beim Kauf müssen sich die Parteien zumindest über <b>Ware und Preis</b> einigen (essentialia negotii, §§ 1053 f ABGB). Eine besondere Form ist nicht nötig, ein telefonischer Abschluss genügt (Formfreiheit, § 883 ABGB).</p>
<p>P bestellt 1000 Kisten, K nennt auf Nachfrage den Preis von 5 € pro Stück und P erklärt sich einverstanden. Damit liegt Konsens über Ware (1000 Kisten), Preis (5 €/Stück) und sogar den Liefertermin vor. Der Kaufvertrag ist <b>bereits am Telefon (Tag 1) zum Preis von 5.000 €</b> zustande gekommen.</p>
<h3><span class="n">02</span>Wirkung des Bestätigungsfaxes</h3>
<p>Ein Bestätigungsschreiben hält einen bereits geschlossenen Vertrag fest. Es wirkt grundsätzlich nur <b>deklarativ</b> (als Beweismittel). Weicht es vom Vereinbarten ab, kann es den Vertrag nur ändern, wenn der Empfänger der Änderung zustimmt. Es ist dann ein <b>Angebot auf Vertragsänderung</b>.</p>
<p>P hat auf das Fax nicht reagiert. <b>Schweigen gilt grundsätzlich nicht als Zustimmung</b> (§ 863 ABGB: eine schlüssige Erklärung setzt ein Verhalten voraus, das „mit Überlegung aller Umstände keinen vernünftigen Grund, daran zu zweifeln“, übrig lässt; bloßes Schweigen tut das nicht).</p>
<p><b>Kaufmännisches Bestätigungsschreiben:</b> P und K sind Unternehmer. Nach der Rechtsprechung kann Schweigen auf ein Bestätigungsschreiben zwischen Unternehmern <b>ausnahmsweise</b> als Zustimmung gewertet werden, wenn das Schreiben das Vereinbarte richtig wiedergibt oder nur unwesentlich ergänzt, sodass der Absender redlicherweise mit dem Einverständnis rechnen durfte. Bei <b>wesentlichen Abweichungen</b> gilt das nie. Ebenso wenig gilt es, wenn der Absender bewusst etwas anderes festhält, als vereinbart wurde.</p>
<p>Der Preis ist ein Hauptpunkt des Vertrags. Eine Erhöhung um 20 % (1.000 €) ist eine wesentliche Abweichung. K selbst hat am Telefon 5 € genannt, er konnte also nicht redlich annehmen, dass P mit 6 € einverstanden ist. Das Schweigen des P bewirkt keine Vertragsänderung.</p>
<div class="box res"><span class="tag">Ergebnis</span><p>Der Kaufvertrag ist am Telefon (Tag 1) mit einem Preis von 5 € pro Kiste zustande gekommen. Das abweichende Bestätigungsfax hat ihn nicht geändert. K hat nur Anspruch auf <b>5.000 €</b>, nicht auf 6.000 €.</p></div>
<div class="box merk"><span class="tag">Merksatz</span><p>Wer etwas „schriftlich festhält“, hat damit noch nichts vereinbart. Das Schriftstück beweist nur den Vertrag. Es ist nicht der Vertrag.</p></div>
<div class="box err"><span class="tag">⚠ System Alert</span><p>Nicht vorschnell „kaufmännisches Bestätigungsschreiben → Schweigen = Zustimmung“ schreiben. Diese Regel ist in Österreich eng und versagt bei wesentlichen Abweichungen immer.</p></div>
<div class="box deep"><span class="tag">Praxis-Tipp</span><p>P sollte einem abweichenden Bestätigungsschreiben sofort widersprechen. Rechtlich ist das zwar nicht nötig, aber im Prozess erleichtert es den Beweis, dass 5 € vereinbart waren.</p></div>`,
  compact: { key: 'Vertrag am Telefon zu 5 € geschlossen; abweichendes Fax + Schweigen ändert nichts → 5.000 €.', bullets: [
    'Angebot + Annahme über Ware und Preis am Telefon → Kaufvertrag (<b>§ 861</b>), formfrei (<b>§ 883</b>).',
    'Bestätigungsschreiben wirkt nur <b>deklarativ</b>; Abweichung = Angebot auf Vertragsänderung.',
    '<b>Schweigen</b> ist keine Zustimmung (§ 863).',
    'Kaufm. Bestätigungsschreiben greift nur bei <b>unwesentlichen</b> Ergänzungen; +20 % Preis ist wesentlich.'] } },

{ id: 'A-02', part: 'A', kind: 'case', category: 'WILLENSMÄNGEL', title: 'High-Heels', topic: 'Motivirrtum & Irrtumslehre', sub: '§§ 870–873, 901, 1487 ABGB', pts: 11, mods: ['T-03'],
  sv: 'A will seiner Freundin B eine Freude bereiten und kauft deshalb in einer Boutique ein total cooles Paar High-Heels um EUR 1.000,00, weil er weiß, dass sie sich darüber freuen wird. Leider hatte B an diesem Tag einen unerfreulichen Besuch beim Orthopäden, weil dieser ihr in Zukunft das Tragen von Schuhen mit hohen Absätzen untersagt und sie daher die Schuhe nicht verwenden kann.',
  qs: [{ l: 'Frage A', p: 2, q: 'Kann A den Kaufvertrag wegen Irrtums anfechten?' }, { l: 'Frage B', p: 9, q: 'Welche Arten von Irrtümern kennen Sie und unter welchen Voraussetzungen berechtigen diese zur Vertragsanfechtung?' }],
  html: `
<div class="q"><span class="lbl">Frage A · 2 Punkte</span>Kann A den Kaufvertrag wegen Irrtums anfechten?</div>
<p>A irrt nicht über den Inhalt des Geschäfts. Er weiß genau, welche Schuhe er zu welchem Preis kauft, und die Schuhe sind mangelfrei. Er irrt nur über den <b>Beweggrund</b> des Kaufs: Er nimmt an, dass B die Schuhe tragen kann und sich darüber freut. Das ist ein <b>Motivirrtum</b>.</p>
<p>Ein Motivirrtum ist bei entgeltlichen Geschäften <b>unbeachtlich</b> (§ 901 ABGB). Etwas anderes gilt nur, wenn das Motiv ausdrücklich zur Bedingung gemacht wurde (z. B. „nur wenn B sie tragen darf“) oder wenn der Irrtum durch List herbeigeführt wurde (§ 870). Beides liegt nicht vor. Die Boutique hat mit dem Irrtum nichts zu tun.</p>
<div class="box res"><span class="tag">Ergebnis A</span><p><b>Nein.</b> Es liegt ein bloßer Motivirrtum vor, der bei einem entgeltlichen Kaufvertrag unbeachtlich ist (§ 901 ABGB). A kann höchstens auf einen freiwilligen Umtausch (Kulanz) der Boutique hoffen.</p></div>
<div class="q"><span class="lbl">Frage B · 9 Punkte</span>Welche Arten von Irrtümern kennen Sie und unter welchen Voraussetzungen berechtigen diese zur Vertragsanfechtung?</div>
<h3><span class="n">01</span>Begriff</h3>
<p>Irrtum ist eine <b>unrichtige Vorstellung von der Wirklichkeit</b>. Er ist ein Willensmangel: Erklärter und wirklicher Wille fallen auseinander, oder der Wille wurde auf falscher Grundlage gebildet. Davon zu unterscheiden ist der <b>Dissens</b>: Dort decken sich die Erklärungen gar nicht, und es kommt überhaupt kein Vertrag zustande.</p>
<h3><span class="n">02</span>Arten des Irrtums</h3>
<table><tr><th>Art</th><th>Worum es geht</th><th>Beispiel</th><th>Beachtlich?</th></tr>
<tr><td class="k">Erklärungsirrtum</td><td>Man erklärt etwas anderes, als man will (Versprechen, Verschreiben, Vertippen)</td><td>„100“ statt „1.000“ getippt</td><td>Geschäftsirrtum</td></tr>
<tr><td class="k">Inhaltsirrtum</td><td>Man erklärt, was man will, irrt aber über dessen Bedeutung, die Natur des Geschäfts oder den Gegenstand (Hauptsache)</td><td>Hält Miete für Kauf</td><td>Geschäftsirrtum</td></tr>
<tr><td class="k">Eigenschaftsirrtum</td><td>Irrtum über eine wesentliche Beschaffenheit der Sache (§ 871)</td><td>Fälschung statt Original (→ B-10)</td><td>Geschäftsirrtum</td></tr>
<tr><td class="k">Irrtum in der Person</td><td>Identität oder Eigenschaft des Partners, sofern für das Geschäft wesentlich (§ 873)</td><td>Kreditwürdigkeit beim Darlehen</td><td>Geschäftsirrtum</td></tr>
<tr><td class="k">Motivirrtum</td><td>Beweggründe, Erwartungen, Verwendungszweck (§ 901)</td><td>High-Heels für B</td><td>nur unentgeltlich / List / Bedingung</td></tr>
<tr><td class="k">Kalkulationsirrtum</td><td>Fehler in der Preisberechnung</td><td>falsch addiert</td><td>Motivirrtum; Geschäftsirrtum, wenn die Kalkulation offengelegt wurde</td></tr>
<tr><td class="k">Rechtsirrtum</td><td>Irrtum über Rechtsfolgen; Gesetzesunkenntnis entschuldigt nicht (§ 2)</td><td></td><td>grds. Motivirrtum</td></tr></table>
<p>Ein <b>gemeinsamer Irrtum</b> beider Parteien berechtigt nach der Rechtsprechung ebenfalls zur Anfechtung bzw. Anpassung, weil der Gegner dann nicht schutzwürdig ist.</p>
<h3><span class="n">03</span>Voraussetzungen der Anfechtung (§ 871 ABGB)</h3>
<ol class="steps">
<li><b>Geschäftsirrtum</b> (nicht bloß Motivirrtum, außer bei unentgeltlichen Geschäften und List).</li>
<li><b>Schutzunwürdigkeit des Gegners</b>, also eine der drei Varianten: der Irrtum wurde vom anderen Teil <b>veranlasst</b>, ihm hätte er aus den Umständen <b>offenbar auffallen</b> müssen, oder er wurde ihm <b>rechtzeitig aufgeklärt</b> (bevor er im Vertrauen auf den Vertrag Dispositionen getroffen hat).</li>
<li><b>Wesentlichkeit</b>: Ein wesentlicher Irrtum liegt vor, wenn der Irrende den Vertrag ohne den Irrtum gar nicht geschlossen hätte. Rechtsfolge ist die <b>Aufhebung</b> des Vertrags ex tunc mit Rückabwicklung (§ 877). Ein unwesentlicher Irrtum liegt vor, wenn er den Vertrag zu anderen Bedingungen geschlossen hätte. Dann gibt es nur eine <b>Anpassung</b> (§ 872).</li>
<li>Geltendmachung durch Klage oder Einrede binnen <b>3 Jahren</b> ab Vertragsabschluss (§ 1487).</li></ol>
<h3><span class="n">04</span>Sonderfall List und Furcht (§ 870 ABGB)</h3>
<p>Wer durch <b>List</b> (vorsätzliche Täuschung, auch durch Verschweigen bei Aufklärungspflicht) oder durch ungerechte und gegründete <b>Furcht</b> zum Vertrag bewogen wurde, kann ihn anfechten. Bei List ist jeder Irrtum beachtlich, auch ein Motivirrtum, und die drei Varianten des § 871 spielen keine Rolle. Zusätzlich gibt es Schadenersatz (§ 874). Frist bei List nach hA <b>30 Jahre</b> (§ 1478). Täuscht ein Dritter, kann nur angefochten werden, wenn der Vertragspartner an der List teilnahm oder davon offenbar wissen musste (§ 875).</p>
<div class="box merk"><span class="tag">Merksatz</span><p>Geschäftsirrtum + eine der 3 Varianten + wesentlich → Aufhebung · unwesentlich → Anpassung · 3 Jahre. Motivirrtum: bei entgeltlichen Geschäften unbeachtlich, außer bei List.</p></div>`,
  compact: { key: 'A: bloßer Motivirrtum → unbeachtlich (§ 901). B: Irrtumsarten + § 871-Voraussetzungen + List.', bullets: [
    'A irrt nur über den <b>Beweggrund</b> (B kann sie tragen) → Motivirrtum, entgeltlich → <b>keine Anfechtung</b>.',
    'Arten: <b>Erklärungs-, Inhalts-, Eigenschaftsirrtum, Irrtum in der Person</b> (Geschäftsirrtum) vs. <b>Motiv-, Kalkulations-, Rechtsirrtum</b>.',
    '§ 871: Geschäftsirrtum + <b>veranlasst / offenbar auffallen / rechtzeitig aufgeklärt</b> + wesentlich (Aufhebung) oder unwesentlich (Anpassung § 872).',
    'Frist <b>3 J</b> ab Vertrag (§ 1487); List § 870: jeder Irrtum, + Schadenersatz § 874, <b>30 J</b>.',
    'Dissens ≠ Irrtum: Erklärungen decken sich nicht → gar kein Vertrag.'] } },

{ id: 'A-03', part: 'A', kind: 'case', category: 'GEWÄHRLEISTUNG · SCHADENERSATZ', title: 'Brennende Playstation', topic: 'Gewährleistung & Mangelfolgeschaden', sub: '§§ 922 ff, 932, 933a, 1295, 1298, 1313a ABGB · VGG', pts: 16, mods: ['T-05', 'T-06'],
  sv: 'K kauft beim Elektronikgeschäft „MediaMarkt“ eine Playstation 4 um EUR 399,00. Noch am selben Tag schließt K die Spielkonsole bei sich zu Hause an den Fernseher an. Es kommt aufgrund eines Fehlers von „MediaMarkt“ bei der Lagerung zu einem Kurzschluss, wodurch das Gerät in Flammen aufgeht und zerstört wird; dabei beginnt auch das Wohnzimmer zu brennen (Schaden EUR 5.000,00) und K kann sich gerade noch ins Freie retten. Sehr erbost geht K kurz darauf zum „MediaMarkt“ und verlangt den Austausch der zerstörten Spielkonsole gegen eine Neue.',
  qs: [{ l: 'Frage A', p: 1, q: 'Welchen Anspruch macht K hier geltend?' }, { l: 'Frage B', p: 7, q: 'Könnte K auch gleich den Kaufpreis zurückverlangen? Welche Behelfe kennen Sie? Begründen Sie Ihre Antwort.' },
       { l: 'Frage C', p: 5, q: 'Wie nennt man den Schaden, der durch das abgebrannte Wohnzimmer entstanden ist, und muss „MediaMarkt“ hierfür Ersatz leisten? Fallprüfungsschema!' }, { l: 'Frage D', p: 3, q: 'Was versteht man unter einem Mangel?' }],
  html: `
<div class="q"><span class="lbl">Frage A · 1 Punkt</span>Welchen Anspruch macht K hier geltend?</div>
<p>K macht einen <b>Gewährleistungsanspruch</b> geltend, und zwar den primären Gewährleistungsbehelf des <b>Austauschs</b> (§ 932 ABGB; für Verbraucherkäufe seit 2022 ebenso nach dem VGG). Die Konsole war wegen des Lagerungsfehlers schon bei der Übergabe mangelhaft. Das wird außerdem vermutet, weil der Mangel innerhalb der Vermutungsfrist hervorkam (heute § 11 VGG: 1 Jahr; damals § 924 ABGB: 6 Monate). Gewährleistung ist <b>verschuldensunabhängig</b>.</p>
<div class="q"><span class="lbl">Frage B · 7 Punkte</span>Könnte K auch gleich den Kaufpreis zurückverlangen? Welche Behelfe kennen Sie?</div>
<h4>Die Gewährleistungsbehelfe</h4>
<p>Das Gesetz kennt einen <b>Stufenbau</b> (§ 932 ABGB, ebenso VGG): Auf der ersten Stufe stehen <b>Verbesserung</b> (Reparatur) und <b>Austausch</b>, zwischen denen der Käufer wählt, außer der gewählte Behelf ist unmöglich oder unverhältnismäßig aufwendig. Erst auf der zweiten Stufe kann der Käufer <b>Preisminderung</b> oder <b>Wandlung</b> verlangen (Vertragsauflösung = Kaufpreis zurück gegen Rückgabe der Sache). Die Wandlung ist bei bloß geringfügigen Mängeln ausgeschlossen. Der Verkäufer soll grundsätzlich eine „zweite Chance“ bekommen.</p>
<h4>Darf K sofort auf Stufe 2 springen?</h4>
<p>Grundsätzlich <b>nein</b>. Der Kaufpreis zurück ist Wandlung, also ein sekundärer Behelf. Eine Verbesserung ist zwar unmöglich (Gerät verbrannt), ein Austausch einer serienmäßigen PS4 aber ohne Weiteres möglich. Daher hat K zunächst nur Anspruch auf Austausch.</p>
<p>Ausnahmen, in denen sofort Stufe 2 gilt: Stufe 1 ist unmöglich oder unverhältnismäßig, der Verkäufer verweigert sie oder handelt nicht in angemessener Frist, sie wäre mit erheblichen Unannehmlichkeiten verbunden oder sie ist dem Käufer aus <b>triftigen, in der Person des Übergebers liegenden Gründen unzumutbar</b> (§ 932 Abs 4 ABGB).</p>
<p>Hier ging ein Gerät aus dem Lager von MediaMarkt in Flammen auf, und K konnte sich gerade noch retten. Da der Fehler aus der Sphäre des Verkäufers (Lagerung) stammt, muss K kein Vertrauen mehr in ein weiteres Gerät aus demselben Lager haben. Ein Austausch ist ihm <b>unzumutbar</b>. Dass K die Konsole nicht zurückgeben kann, schadet nicht: Sie wurde durch den Mangel selbst zerstört. Geringfügig ist der Mangel offensichtlich nicht.</p>
<div class="box upd"><span class="tag">Patch 2022 · Verbraucherkauf nach VGG</span><p>Für Verbraucherkäufe ab 1.1.2022 regelt das VGG ausdrücklich, dass der Verbraucher <b>sofort</b> Preisminderung oder Vertragsauflösung verlangen kann, wenn der Mangel so schwerwiegend ist, dass dies gerechtfertigt ist. Ein Gerät, das einen Wohnungsbrand auslöst, ist der Paradefall dafür. Nach heutigem Recht kann K daher direkt den Kaufpreis zurückverlangen.</p></div>
<h4>Weitere Behelfe neben der Gewährleistung</h4>
<ul class="sq"><li><b>Schadenersatz wegen des Mangels</b> (§ 933a): Verschulden (Lagerungsfehler) liegt vor und wird ohnehin vermutet (§ 1298).</li>
<li><b>Irrtumsanfechtung</b> (§ 871): K irrte über die Mangelfreiheit (Eigenschaftsirrtum). Die Rechtsprechung lässt sie neben der Gewährleistung zu.</li>
<li><b>Produkthaftung</b> (PHG) trifft den Hersteller, nicht den Händler. Da der Fehler erst beim Händler entstand, also beim Inverkehrbringen noch nicht vorlag, haftet auch der Hersteller nicht.</li></ul>
<div class="box res"><span class="tag">Ergebnis B</span><p>Nach dem Grundsatz des Stufenbaus muss K zuerst Austausch verlangen. Wegen der Schwere des Mangels (Brand) und der Unzumutbarkeit ist ein sofortiger Rücktritt (Wandlung) hier aber gut vertretbar, und nach heutigem VGG eindeutig zulässig. K kann den Kaufpreis von <b>399 €</b> zurückverlangen.</p></div>
<div class="q"><span class="lbl">Frage C · 5 Punkte</span>Wie nennt man den Schaden am Wohnzimmer, und muss „MediaMarkt“ Ersatz leisten? Fallprüfungsschema!</div>
<p>Der Schaden am Wohnzimmer ist ein <b>Mangelfolgeschaden</b>, also ein Schaden an anderen Rechtsgütern des Käufers (anders als der Mangelschaden an der Sache selbst). Die Gewährleistung deckt ihn nicht ab, nur Schadenersatz.</p>
<table><tr><th>Prüfpunkt</th><th>Subsumtion</th></tr>
<tr><td class="k">1 Schaden</td><td>Brandschaden am Wohnzimmer, 5.000 € (positiver Schaden, § 1293)</td></tr>
<tr><td class="k">2 Kausalität</td><td>Ohne den Lagerungsfehler kein Kurzschluss, kein Brand (conditio sine qua non)</td></tr>
<tr><td class="k">3 Adäquanz</td><td>Brand durch defektes Elektrogerät ist nicht atypisch</td></tr>
<tr><td class="k">4 Rechtswidrigkeit</td><td>Vertragsverletzung: Pflicht zur mangelfreien Leistung sowie vertragliche Schutz- und Sorgfaltspflichten gegenüber Leben und Eigentum des Käufers. Zusätzlich deliktisch: Eingriff in das absolut geschützte Eigentum.</td></tr>
<tr><td class="k">5 Schutzzweck</td><td>Die verletzte Pflicht soll gerade Folgeschäden beim Käufer verhindern</td></tr>
<tr><td class="k">6 Verschulden</td><td>Fehler bei der Lagerung, also Fahrlässigkeit. Vertraglich wird Verschulden vermutet (§ 1298); MediaMarkt müsste sich freibeweisen. Das Verhalten der Mitarbeiter wird als Erfüllungsgehilfen zugerechnet (§ 1313a).</td></tr>
<tr><td class="k">Umfang</td><td>Positiver Schaden schon bei leichter FL (§ 1324): 5.000 €</td></tr></table>
<div class="box res"><span class="tag">Ergebnis C</span><p>Es handelt sich um einen <b>Mangelfolgeschaden</b>. MediaMarkt muss aus vertraglichem Schadenersatz (§§ 1295, 1298, 1313a, 933a ABGB) die <b>5.000 €</b> ersetzen.</p></div>
<div class="q"><span class="lbl">Frage D · 3 Punkte</span>Was versteht man unter einem Mangel?</div>
<p>Ein Mangel ist jede <b>Abweichung der tatsächlich erbrachten von der vertraglich geschuldeten Leistung</b> (§ 922 ABGB). Die Sache muss die ausdrücklich oder stillschweigend vereinbarten (subjektiven) und die gewöhnlich vorausgesetzten (objektiven) Eigenschaften haben, der Beschreibung oder einem Muster entsprechen und der Natur des Geschäfts gemäß verwendbar sein. Gewährleistung gibt es nur für Mängel, die <b>bei der Übergabe vorhanden</b> waren (§ 924). Man unterscheidet <b>Sach- und Rechtsmängel</b>, <b>behebbare und unbehebbare</b> (Verbesserung möglich?) sowie <b>geringfügige und nicht geringfügige</b> Mängel (Wandlung möglich?).</p>`,
  compact: { key: 'Austausch = Gewährleistung Stufe 1; sofortige Wandlung wegen Unzumutbarkeit vertretbar (VGG: eindeutig). Wohnzimmer = Mangelfolgeschaden → Schadenersatz 5.000 €.', bullets: [
    'A: Gewährleistung, primärer Behelf <b>Austausch</b> (§ 932 / VGG), verschuldensunabhängig, Vermutung (§ 924 / § 11 VGG).',
    'B: Stufenbau <b>Verbesserung/Austausch → Preisminderung/Wandlung</b>; sofort Stufe 2 bei <b>Unzumutbarkeit</b> (Brand aus Lager des Verkäufers).',
    'Patch 2022: VGG erlaubt bei <b>schwerwiegendem Mangel</b> sofort Auflösung → 399 € zurück.',
    'Daneben: Schadenersatz § 933a, Irrtumsanfechtung § 871; PHG trifft den Hersteller, hier nicht.',
    'C: <b>Mangelfolgeschaden</b> → nur Schadenersatz; Schema; § 1298 Beweislastumkehr, <b>§ 1313a</b> Mitarbeiter → 5.000 €.',
    'D: Mangel = Abweichung Geleistetes ↔ Geschuldetes (§ 922); Sach/Rechts-, behebbar/unbehebbar, geringfügig/nicht.'] } },

{ id: 'A-04', part: 'A', kind: 'case', category: 'SACHENRECHT', title: 'Gestohlenes Mountainbike', topic: 'Gutgläubiger Erwerb', sub: '§§ 366, 367, 368, 380, 442, 1460 ff ABGB', pts: 9, mods: ['T-07'],
  sv: 'Der arbeitslose A stiehlt B ein Mountainbike (objektiver Wert EUR 5.000); dieses verkauft er wenig später um EUR 4.500,00 an C. B sieht kurz darauf dieses Rad bei C und möchte es zurück. C verweigert die Herausgabe mit Hinweis auf seinen Kaufvertrag.',
  qs: [{ l: 'Frage', p: 9, q: 'Wer ist Eigentümer des Fahrrades und warum? (Prüfen Sie sämtliche Voraussetzungen)' }],
  html: `
<div data-fig="A-04"></div>
<h3><span class="n">01</span>Ausgangslage: B war Eigentümer</h3>
<p>B war Eigentümer des Rads. Durch den Diebstahl hat A nur die tatsächliche Gewalt erlangt, <b>kein Eigentum</b>. Ein Dieb ist unredlicher und unrechtmäßiger Besitzer.</p>
<h3><span class="n">02</span>Derivativer Erwerb des C von A?</h3>
<p>Für den abgeleiteten Eigentumserwerb braucht es <b>Titel</b> (gültiges Verpflichtungsgeschäft), <b>Modus</b> (Übergabe bei beweglichen Sachen) und die <b>Verfügungsbefugnis</b> des Vormanns (§ 380 ABGB).</p>
<ul class="sq"><li>Titel: Kaufvertrag A–C. Auch der Verkauf einer fremden Sache ist als Verpflichtungsgeschäft gültig. <span class="gr">✔</span></li>
<li>Modus: Übergabe des Rads an C. <span class="gr">✔</span></li>
<li>Verfügungsbefugnis: A ist nicht Eigentümer. Niemand kann mehr Rechte übertragen, als er selbst hat (<b>nemo plus iuris</b>, § 442 ABGB). <span class="led">✘</span></li></ul>
<p>Ein derivativer Erwerb scheidet daher aus.</p>
<h3><span class="n">03</span>Gutgläubiger Erwerb nach § 367 ABGB?</h3>
<table><tr><th>Voraussetzung</th><th>Prüfung</th><th></th></tr>
<tr><td class="k">bewegliche körperliche Sache</td><td>Mountainbike</td><td class="gr">✔</td></tr>
<tr><td class="k">entgeltlicher Erwerb</td><td>Kauf um 4.500 €</td><td class="gr">✔</td></tr>
<tr><td class="k">gültiger Titel + Modus</td><td>Kaufvertrag + Übergabe</td><td class="gr">✔</td></tr>
<tr><td class="k">Redlichkeit (§ 368)</td><td>4.500 € bei 5.000 € Wert sind kein auffallend niedriger Preis. Wusste C, dass A arbeitslos ist, und hätte ihm ein 5.000-€-Rad verdächtig vorkommen müssen? Der Sachverhalt sagt dazu nichts. Wir unterstellen Redlichkeit.</td><td class="gr">(✔)</td></tr>
<tr><td class="k">① öffentliche Versteigerung</td><td>nein</td><td class="led">✘</td></tr>
<tr><td class="k">② Unternehmer im gewöhnl. Betrieb</td><td>A ist Privatperson (arbeitslos), kein Fahrradhändler</td><td class="led">✘</td></tr>
<tr><td class="k">③ Vertrauensmann</td><td>B hat A das Rad nicht anvertraut, es wurde ihm gestohlen</td><td class="led">✘</td></tr></table>
<p>Keine der drei Erwerbssituationen liegt vor. C erwirbt auch gutgläubig kein Eigentum. Der Gesetzgeber schützt den Eigentümer, dem eine Sache <b>gegen seinen Willen</b> abhandengekommen ist, stärker als den Erwerber.</p>
<h3><span class="n">04</span>Ersitzung?</h3>
<p>Ersitzung beweglicher Sachen erfordert rechtmäßigen, redlichen und echten Besitz über <b>3 Jahre</b> (§§ 1460, 1466 ABGB). C hat das Rad erst „wenig später“, die Frist ist nicht annähernd abgelaufen.</p>
<div class="box res"><span class="tag">Ergebnis</span><p><b>B ist Eigentümer geblieben.</b> Er kann das Rad mit der Eigentumsklage (rei vindicatio, § 366 ABGB) von C herausverlangen. Der Kaufvertrag A–C wirkt nur zwischen A und C. C muss sich an A halten: Gewährleistung wegen Rechtsmangels und Schadenersatz (Rückzahlung der 4.500 €).</p></div>
<div class="box merk"><span class="tag">Merksatz</span><p>Gestohlen bleibt gestohlen. Vom privaten Dieb kann man nie gutgläubig erwerben (anders z. B. beim Kauf von einem Händler im gewöhnlichen Geschäftsbetrieb oder bei einer Versteigerung).</p></div>`,
  compact: { key: 'B bleibt Eigentümer: Dieb hat keine Befugnis (§ 442), und keine Erwerbssituation des § 367 liegt vor.', bullets: [
    'Titel ✔ Modus ✔ <b>Befugnis ✘</b> (nemo plus iuris, § 442) → kein derivativer Erwerb.',
    '§ 367: beweglich ✔ entgeltlich ✔ Titel/Modus ✔ redlich (✔) – aber <b>keine</b> Versteigerung, <b>kein</b> Unternehmer, <b>kein</b> Vertrauensmann.',
    'Gestohlen = nicht anvertraut → Vertrauensmann scheidet aus.',
    'Ersitzung: 3 Jahre (§ 1466) nicht abgelaufen.',
    'B klagt mit <b>rei vindicatio § 366</b>; C hält sich an A (Rechtsmangel, Schadenersatz).'] } },

{ id: 'A-05', part: 'A', kind: 'case', category: 'STELLVERTRETUNG', title: 'Rechnung auf die Freundin', topic: 'Anscheinsvollmacht', sub: '§§ 1017, 1019, 1029 ABGB · Anscheinsvollmacht', pts: 5, mods: ['T-04'],
  sv: 'A kauft des Öfteren im Geschäft des B Waren ein und lässt die Rechnung immer auf seine Freundin E ausstellen. Diese bezahlt auch jeweils anstandslos die übersendeten Rechnungen. Eines Tages tätigt A einen weiteren Kauf. Diesmal weigert sich allerdings E zu bezahlen, da sie A zu diesem Kauf weder bevollmächtigt noch ihn beauftragt hat.',
  qs: [{ l: 'Frage', p: 5, q: 'Kommt ein Vertrag zustande und bejahendenfalls zwischen wem?' }],
  html: `
<h3><span class="n">01</span>Handeln im fremden Namen</h3>
<p>A lässt die Rechnungen auf E ausstellen. Er gibt damit zu erkennen, dass er für E kauft (<b>Offenlegung</b>, § 1017 ABGB). Damit ein Vertrag zwischen B und E zustande kommt, braucht A Vertretungsmacht.</p>
<h3><span class="n">02</span>Echte Vollmacht?</h3>
<p>E hat A keine ausdrückliche Vollmacht erteilt. Auch eine stillschweigende Vollmacht gegenüber A fehlt nach ihrer Aussage.</p>
<h3><span class="n">03</span>Anscheinsvollmacht (§ 1029 ABGB)</h3>
<p>Der Vertretene muss sich so behandeln lassen, als hätte er Vollmacht erteilt, wenn (1) <b>er selbst</b> durch sein Verhalten einen äußeren Tatbestand geschaffen hat, der auf eine Vollmacht schließen lässt, (2) der Dritte darauf <b>redlich vertraut</b> hat und (3) dieses Vertrauen für das Geschäft <b>ursächlich</b> war. Der Anschein muss vom Vertretenen ausgehen. Dass der Vertreter sich bloß als bevollmächtigt ausgibt, reicht nicht.</p>
<ul class="sq"><li><b>Verhalten der E:</b> Sie hat die auf sie ausgestellten Rechnungen für die Einkäufe des A wiederholt und anstandslos bezahlt. Damit hat sie selbst den Eindruck erweckt, A dürfe für sie einkaufen. <span class="gr">✔</span></li>
<li><b>Redliches Vertrauen des B:</b> Nach der eingespielten Praxis hatte B keinen Anlass, an einer Vollmacht zu zweifeln. Dass E intern nichts erlaubt hat, war für ihn nicht erkennbar. <span class="gr">✔</span></li>
<li><b>Kausalität:</b> B hat gerade deshalb auf Rechnung der E verkauft. <span class="gr">✔</span></li></ul>
<div class="box res"><span class="tag">Ergebnis</span><p>Es kommt ein <b>Kaufvertrag zwischen B und E</b> zustande (Anscheinsvollmacht, § 1029 ABGB). E muss zahlen. Im Innenverhältnis kann sie sich an A halten (Rückersatz bzw. Schadenersatz), weil er ohne Auftrag gehandelt hat. Will sie das künftig verhindern, muss sie B informieren, dass A nicht mehr für sie kaufen darf. Damit zerstört sie den Anschein.</p></div>
<div class="box deep"><span class="tag">Gegenprobe</span><p>Würde man die Anscheinsvollmacht verneinen, wäre A falsus procurator. Kein Vertrag mit E, aber A haftet B für den Vertrauensschaden (§ 1019 ABGB).</p></div>`,
  compact: { key: 'Vertrag B–E kraft Anscheinsvollmacht: E hat durch wiederholtes Zahlen selbst den Rechtsschein gesetzt.', bullets: [
    'Offenlegung: Rechnung auf E → Handeln im fremden Namen (§ 1017).',
    'Keine echte Vollmacht, aber <b>Anscheinsvollmacht § 1029</b>: Rechtsschein <b>durch E</b> + redliches Vertrauen des B + Kausalität.',
    'E zahlt, Regress gegen A im Innenverhältnis; künftig B informieren → Anschein zerstört.',
    'Gegenprobe: ohne Anschein wäre A falsus procurator → Haftung § 1019.'] } },

{ id: 'A-06', part: 'A', kind: 'case', category: 'LEISTUNGSSTÖRUNG', title: 'Das Notebook kommt nicht', topic: 'Schuldnerverzug', sub: '§§ 918, 919, 921, 1298 ABGB · § 7c KSchG', pts: 4, mods: ['T-05'],
  sv: 'X kauft von Y ein Notebook wobei als Übergabetermin der 25. Jänner 2020 vereinbart wird. Y erscheint zu dem vereinbarten Termin jedoch nicht. X benötigt jedoch das Notebook sehr dringend und hat Sorge, dass sich die Übergabe des Notebooks weiter verzögert, er auf Dauer an den Vertrag gebunden ist und anstatt elektronisch nunmehr mit Brieftauben kommunizieren muss.',
  qs: [{ l: 'Frage', p: 4, q: 'Was kann X tun?' }],
  html: `
<p>Y leistet nicht zur vereinbarten Zeit. Es liegt <b>Schuldnerverzug</b> vor (§ 918 ABGB). Verzug setzt <b>kein Verschulden</b> voraus.</p>
<p><b>Kein Fixgeschäft:</b> Ein Fixgeschäft (§ 919) läge nur vor, wenn die Leistung „zu einer festbestimmten Zeit … bei sonstigem Rücktritt“ bedungen wäre, also wenn für Y erkennbar gewesen wäre, dass eine spätere Lieferung für X sinnlos ist. Dass X das Notebook „dringend benötigt“, war Y offenbar nicht bekannt. Ein bloß vereinbarter Übergabetermin reicht nicht.</p>
<p>X hat daher nach § 918 ABGB das <b>Wahlrecht</b>:</p>
<ol class="steps"><li><b>Auf Erfüllung bestehen</b> und (bei Verschulden des Y) den Verspätungsschaden verlangen.</li>
<li><b>Rücktritt unter Setzung einer angemessenen Nachfrist</b> erklären (z. B. „Lieferung bis 1. Februar, sonst trete ich zurück“). Leistet Y bis dahin nicht, ist X frei. Er bleibt also nicht dauerhaft gebunden.</li></ol>
<p>Trifft Y ein Verschulden (wird vermutet, § 1298), kann X nach dem Rücktritt außerdem <b>Schadenersatz wegen Nichterfüllung</b> verlangen (§ 921), etwa die Mehrkosten eines Deckungskaufs. Seine schon erbrachte Leistung (Kaufpreis) bekommt er zurück.</p>
<div class="box deep"><span class="tag">Wenn Y Unternehmer und X Verbraucher ist</span><p>Für Verbraucherkäufe gilt zusätzlich § 7c KSchG mit im Ergebnis gleicher Lösung: Nachfrist setzen, nach fruchtlosem Ablauf Rücktritt. Ohne Nachfrist ist ein Rücktritt nur möglich, wenn der Termin erkennbar wesentlich war oder Y die Lieferung verweigert.</p></div>
<div class="box res"><span class="tag">Ergebnis</span><p>X kann auf Erfüllung bestehen oder unter Setzung einer angemessenen Nachfrist zurücktreten (§ 918 ABGB). Bei Verschulden des Y gibt es zusätzlich Schadenersatz (§ 921). Die Brieftauben kann er sich sparen.</p></div>`,
  compact: { key: 'Schuldnerverzug, kein Fixgeschäft → Erfüllung oder Rücktritt mit Nachfrist (§ 918); bei Verschulden § 921.', bullets: [
    'Verzug ist <b>verschuldensunabhängig</b>.',
    '„Dringend“ war für Y nicht erkennbar → <b>kein Fixgeschäft</b> (§ 919).',
    'Wahlrecht: <b>Erfüllung</b> (+ Verspätungsschaden) oder <b>Rücktritt mit angemessener Nachfrist</b>.',
    'Bei Verschulden (vermutet § 1298) Nichterfüllungsschaden § 921 (z. B. Deckungskauf). B2C: § 7c KSchG gleiches Ergebnis.'] } },

{ id: 'A-07', part: 'A', kind: 'case', category: 'SACHENRECHT · GRUNDBUCH', title: 'Eigentum an Liegenschaften', topic: 'Eigentumserwerb an Liegenschaften', sub: '§§ 380, 431, 440, 1467 f, 1500 ABGB · §§ 31 f GBG', pts: 4, mods: ['T-07'],
  sv: '',
  qs: [{ l: 'Frage', p: 4, q: 'Unter welchen Voraussetzungen erwirbt man Eigentum an einer Liegenschaft?' }],
  html: `
<div data-fig="A-07"></div>
<h3><span class="n">01</span>Derivativer Erwerb: Titel + Modus</h3>
<p><b>Titel:</b> ein gültiges Verpflichtungsgeschäft (Kauf, Tausch, Schenkung …) mit dem verfügungsberechtigten Eigentümer (§ 380 ABGB).</p>
<p><b>Modus:</b> die <b>Einverleibung</b> (Eintragung) im Grundbuch (§ 431 ABGB, Eintragungsgrundsatz). Dafür braucht es eine <b>grundbuchsfähige Urkunde</b>: schriftlich, mit beglaubigten Unterschriften (§ 31 GBG) und der ausdrücklichen Einwilligung des Veräußerers in die Eintragung, der <b>Aufsandungserklärung</b> (§ 32 GBG).</p>
<ul class="sq"><li>Bei <b>Doppelveräußerung</b> gewinnt, wer zuerst um Einverleibung ansucht (§ 440 ABGB, → B-05).</li>
<li><b>Vertrauensgrundsatz:</b> Wer redlich auf den Grundbuchsstand vertraut, wird geschützt (§ 1500 ABGB).</li></ul>
<h3><span class="n">02</span>Ausnahmen und originärer Erwerb</h3>
<ul class="sq"><li><b>Ersitzung:</b> Tabularersitzung nach 3 Jahren für den im Grundbuch eingetragenen redlichen Besitzer; außerbücherliche Ersitzung erst nach 30 Jahren (§§ 1467 f, gegen die öffentliche Hand 40 Jahre, § 1472).</li>
<li><b>Erbschaft:</b> Mit der Einantwortung erwirbt der Erbe Eigentum ohne Eintragung, das Grundbuch wird nur berichtigt.</li>
<li>Zuschlag in der Zwangsversteigerung, Enteignung, Bauführung (§§ 417 ff).</li></ul>
<div class="box merk"><span class="tag">Merksatz</span><p>Intabulationsprinzip: Ohne Eintragung kein Eigentum, nur ein Anspruch auf Übertragung.</p></div>
<div class="box res"><span class="tag">Ergebnis</span><p>Eigentum an einer Liegenschaft wird derivativ durch einen <b>gültigen Titel</b> und den <b>Modus der Einverleibung</b> im Grundbuch (§ 431 ABGB) auf Grundlage einer grundbuchsfähigen Urkunde (beglaubigte Unterschriften, Aufsandungserklärung) erworben. Daneben gibt es originären Erwerb, vor allem durch Ersitzung.</p></div>`,
  compact: { key: 'Titel + Einverleibung (§ 431) aufgrund grundbuchsfähiger Urkunde mit Aufsandungserklärung (§§ 31 f GBG).', bullets: [
    'Titel: gültiges Verpflichtungsgeschäft mit dem Verfügungsberechtigten (§ 380).',
    'Modus: <b>Einverleibung</b>; Urkunde mit <b>beglaubigten Unterschriften</b> + <b>Aufsandungserklärung</b>.',
    'Doppelverkauf: <b>§ 440</b> wer zuerst ansucht · Vertrauensgrundsatz <b>§ 1500</b>.',
    'Originär: Ersitzung (Tabular 3 J / sonst 30 J), Einantwortung, Zwangsversteigerung, Enteignung, Bauführung.'] } },

{ id: 'A-08', part: 'A', kind: 'case', category: 'WILLENSMÄNGEL · BOSS FIGHT', title: 'Überteuerter Sportwagen', topic: 'List, Irrtum, laesio enormis', sub: '§§ 870–874, 934 f, 1478, 1487, 1489 ABGB', pts: 16, mods: ['T-03', 'T-06'],
  sv: 'Viktor verkauft Klaus seinen Sportwagen um EUR 50.000,00. Später stellt ein gerichtlich beeideter Sachverständiger fest, dass dieser Wagen lediglich einen objektiven Wert von max. EUR 20.000,00 hat, obwohl Viktor vor dem Kauf Klaus mit blumigen Geschichten glauben machte, dass der Sportwagen mindestens EUR 50.000,00 wert ist und obwohl Viktor von dem deutlich geringeren Wert des Fahrzeuges wusste.',
  qs: [{ l: 'Frage', p: 16, q: 'Was kann Klaus tun? Prüfen Sie alle Möglichkeiten, die Viktor offenstehen? Binnen welcher Fristen müssten diese Möglichkeiten ergriffen werden?' }],
  html: `
<div class="box deep"><span class="tag">Hinweis zur Angabe</span><p>Gemeint sind die Möglichkeiten des Klaus. Wo Viktor selbst reagieren kann (laesio enormis), wird das unten mitbehandelt.</p></div>
<div data-fig="A-08"></div>
<h3><span class="n">01</span>Anfechtung wegen List (§ 870 ABGB)</h3>
<p>Voraussetzungen: (1) <b>Täuschung</b> über Tatsachen, (2) <b>Vorsatz</b> (der Täuschende will den Irrtum hervorrufen), (3) <b>Kausalität</b> für den Vertragsschluss.</p>
<p>Viktor hat Klaus „glauben gemacht“, der Wagen sei mindestens 50.000 € wert, obwohl er den deutlich geringeren Wert kannte. Bloße Werbeübertreibungen wären unbeachtlich. Hier aber hat Viktor gezielt eine falsche Vorstellung über den Wert erzeugt und dabei sein überlegenes Wissen ausgenutzt. Das ist eine vorsätzliche Irreführung. Ohne sie hätte Klaus nicht um 50.000 € gekauft.</p>
<p><b>Rechtsfolge:</b> Klaus kann den Vertrag anfechten (Aufhebung ex tunc, Rückabwicklung Zug um Zug: Auto gegen 50.000 €). Bei List ist auch ein bloßer Motiv- oder Wertirrtum beachtlich. Will Klaus das Auto behalten, kann er stattdessen Vertragsanpassung verlangen. <b>Frist: nach hA 30 Jahre</b> (§ 1478 ABGB).</p>
<h3><span class="n">02</span>Anfechtung wegen Irrtums (§ 871 ABGB)</h3>
<p>Ein Irrtum bloß über den Wert ist für sich genommen ein Motivirrtum. Beachtlich ist er aber, wenn er auf einem Irrtum über <b>wertbildende Eigenschaften</b> beruht (Zustand, Ausstattung, Laufleistung), die Viktor in seinen „Geschichten“ geschildert hat. Dann liegt ein Geschäftsirrtum vor, und Viktor hat ihn <b>veranlasst</b> (§ 871 erste Variante).</p>
<p>Hätte Klaus ohne Irrtum gar nicht gekauft, ist der Irrtum wesentlich: <b>Aufhebung</b>. Hätte er nur billiger gekauft, ist er unwesentlich: <b>Anpassung</b> des Preises (§ 872). <b>Frist: 3 Jahre ab Vertragsabschluss</b> (§ 1487). Der Weg über List ist günstiger, weil dort Vorsatz offenliegt und die Frist länger ist. In der Klausur trotzdem beide nennen!</p>
<h3><span class="n">03</span>Verkürzung über die Hälfte (laesio enormis, § 934 ABGB)</h3>
<p>Klaus hat 50.000 € gegeben und eine Sache im gemeinen Wert von höchstens 20.000 € erhalten. Die Hälfte seiner Leistung wären 25.000 €. Er hat also nicht einmal die Hälfte erhalten: <b>20.000 € &lt; 25.000 €</b>. <span class="gr">✔</span></p>
<p><b>Rechtsfolge:</b> Klaus kann die Aufhebung des Vertrags verlangen. Auf Verschulden oder Irrtum kommt es nicht an, es zählt nur das objektive Missverhältnis im Zeitpunkt des Vertragsschlusses.</p>
<p><b>Viktors Möglichkeit:</b> Viktor kann die Aufhebung abwenden, indem er den Abgang bis zum gemeinen Wert ersetzt, also <b>30.000 €</b> zurückzahlt (§ 934 Satz 2). Dann bleibt der Vertrag zum Preis von 20.000 € bestehen.</p>
<p><b>Kein Ausschluss nach § 935:</b> Klaus kannte den wahren Wert nicht, hat nicht aus besonderer Vorliebe einen außerordentlichen Preis bezahlt, und es handelt sich nicht um ein Glücksgeschäft. Ist Klaus Unternehmer und der Kauf für ihn unternehmensbezogen, könnte § 934 vertraglich ausgeschlossen worden sein (§ 351 UGB). Dafür gibt es keinen Anhaltspunkt. <b>Frist: 3 Jahre ab Vertragsabschluss</b> (§ 1487).</p>
<h3><span class="n">04</span>Schadenersatz</h3>
<p>Wer listig täuscht, haftet für den Schaden (§ 874 ABGB, ebenso culpa in contrahendo). Klaus kann das Auto behalten und den Schaden ersetzt verlangen: Er hätte ohne Täuschung höchstens 20.000 € bezahlt, also <b>30.000 € Vertrauensschaden</b>, dazu etwa Gutachterkosten. Vorsatz bedeutet volle Genugtuung (§ 1324). <b>Frist: 3 Jahre ab Kenntnis</b> von Schaden und Schädiger (§ 1489), absolut 30 Jahre.</p>
<h3><span class="n">05</span>Gewährleistung</h3>
<p>Ein bloß „zu teurer“ Preis ist kein Mangel, denn der Wert ist keine Eigenschaft der Sache. Gewährleistung kommt nur in Frage, wenn Viktor bestimmte Eigenschaften <b>zugesagt</b> hat, die fehlen. Dann gelten Preisminderung bzw. Wandlung binnen 2 Jahren ab Übergabe (+3 Monate, § 933). Ein Gewährleistungsverzicht im Privatverkauf würde arglistig verschwiegene Mängel nicht erfassen.</p>
<table><tr><th>Behelf</th><th>Voraussetzung (Kern)</th><th>Folge</th><th>Frist</th></tr>
<tr><td class="k">List § 870</td><td>vorsätzliche Täuschung</td><td>Aufhebung / Anpassung</td><td>30 J (hA)</td></tr>
<tr><td class="k">Irrtum § 871</td><td>Geschäftsirrtum, veranlasst</td><td>Aufhebung / Anpassung (§ 872)</td><td>3 J ab Vertrag</td></tr>
<tr><td class="k">laesio § 934</td><td>erhalten &lt; ½ des Gegebenen</td><td>Aufhebung; Viktor kann aufzahlen</td><td>3 J ab Vertrag</td></tr>
<tr><td class="k">SE § 874</td><td>List / Verschulden</td><td>30.000 € (Auto behalten)</td><td>3 J ab Kenntnis</td></tr>
<tr><td class="k">Gewährl.</td><td>nur bei zugesicherten Eigenschaften</td><td>Minderung / Wandlung</td><td>2 J + 3 M</td></tr></table>
<div class="box deep"><span class="tag">Strafrecht am Rande</span><p>Das Verhalten Viktors kann zusätzlich den Tatbestand des Betrugs (§ 146 StGB) erfüllen. Klaus könnte sich einem Strafverfahren als Privatbeteiligter anschließen.</p></div>
<div class="box res"><span class="tag">Ergebnis</span><p>Klaus hat mehrere Möglichkeiten zur Wahl. Am stärksten ist die <b>Anfechtung wegen List</b> (30 Jahre) oder alternativ <b>Schadenersatz von 30.000 €</b> bei Behalten des Autos. Daneben stehen die <b>Irrtumsanfechtung</b> und die <b>laesio enormis</b> (jeweils 3 Jahre ab Vertragsschluss). Bei der laesio enormis kann Viktor den Vertrag durch Zahlung von 30.000 € retten.</p></div>`,
  compact: { key: 'Fünf Wege: List (30 J) · Irrtum (3 J) · laesio enormis (3 J, Viktor kann 30.000 € aufzahlen) · Schadenersatz 30.000 € (3 J ab Kenntnis) · Gewährleistung nur bei Zusagen.', bullets: [
    '<b>List § 870</b>: Täuschung + Vorsatz + Kausalität ✔ → Aufhebung/Anpassung, auch Wertirrtum beachtlich, <b>30 J</b> (hA).',
    '<b>Irrtum § 871</b>: über wertbildende Eigenschaften, von Viktor <b>veranlasst</b> → Aufhebung/Anpassung, <b>3 J</b>.',
    '<b>Laesio enormis § 934</b>: 20.000 < 25.000 ✔ → Aufhebung; Viktor rettet durch <b>30.000 € Aufzahlung</b>; § 935 greift nicht.',
    '<b>Schadenersatz § 874</b>: Auto behalten + 30.000 € Vertrauensschaden; 3 J ab Kenntnis (§ 1489).',
    'Gewährleistung: „zu teuer“ ist <b>kein Mangel</b>; nur bei zugesagten Eigenschaften.'] } }
);
