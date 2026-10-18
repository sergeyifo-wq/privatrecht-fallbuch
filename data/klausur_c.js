// TEIL III · KLAUSUR C: Haupttermin 19.01.2021. Brüder Jacob & Tobias. Jeder Fall endet mit einem Debug-Log der Vorlage.
window.FB_SECTIONS.push(

{ id: 'C-01', part: 'C', kind: 'case', category: 'SCHADENERSATZ · UMFANG', title: 'Kaffee auf dem Anzug', topic: 'Umfang des Schadenersatzes', sub: '§§ 1293–1295, 1324, 1325, 1332 ABGB', pts: 9, mods: ['T-06'],
  sv: 'Carl befindet sich auf dem Weg in die Arbeit. Heute ist ein wichtiger Tag, da ein Deal unterzeichnet wird und Carl bereits von seinem Chef einen Bonus zugesichert bekommen hat. Dann passiert das Unglück! Der unachtsame Mark schüttet dem in der Schlange auf sein Getränk wartenden Carl seinen Kaffee über den Anzug. Der Anzug ist ruiniert und muss entsorgt werden. Der Wert zum Zeitpunkt der Schädigung beträgt 2.500 €. Carl muss daraufhin auch ins Krankenhaus, weil er schwere Verbrennungen erlitten hat. Die Heilungskosten betragen 750 €. Zu allem Überdruss entgeht ihm auch noch der heiß ersehnte Bonus iHv 5.000 €, da der Klient außer sich ist, dass Carl die „Frechheit“ besitzt und nicht erscheint und daher den Deal platzen lässt. Carl ist äußerst wütend und möchte sich den Schaden von Mark zurückholen!',
  qs: [{ l: 'Frage (sinngemäß)', p: 9, q: 'Kann Carl von Mark Ersatz verlangen, und in welcher Höhe?' }],
  html: `
<h3><span class="n">01</span>Haftungsgrund: deliktischer Schadenersatz</h3>
<p>Zwischen Carl und Mark besteht kein Vertrag. Es geht um <b>deliktische Haftung</b> (§§ 1293 ff, 1295 ABGB).</p>
<table><tr><th>Prüfpunkt</th><th>Subsumtion</th></tr>
<tr><td class="k">Schaden</td><td>Zerstörter Anzug (2.500 €), Verbrennungen (Heilungskosten 750 €, Schmerzen), entgangener Bonus (5.000 €)</td></tr>
<tr><td class="k">Kausalität</td><td>Ohne das Verschütten kein ruinierter Anzug, keine Verbrennung, kein Krankenhaus, kein Fehlen beim Deal (conditio sine qua non)</td></tr>
<tr><td class="k">Adäquanz</td><td>Dass ein Verletzter einen beruflichen Termin versäumt und dadurch Einkommen verliert, ist nicht völlig atypisch</td></tr>
<tr><td class="k">Rechtswidrigkeit</td><td>Eingriff in absolut geschützte Rechtsgüter: Eigentum (Anzug) und körperliche Unversehrtheit</td></tr>
<tr><td class="k">Verschulden</td><td>„Unachtsam“ heißt: Mark hat die gebotene Sorgfalt außer Acht gelassen, ein Fehler, der auch einem sorgfältigen Menschen gelegentlich passiert, also <b>leichte Fahrlässigkeit</b>. Mangels gegenteiliger Angaben ist Mark über 14 und damit deliktsfähig (§ 176 ABGB).</td></tr></table>
<h3><span class="n">02</span>Umfang: der eigentliche Prüfungsschwerpunkt</h3>
<p>Bei leichter Fahrlässigkeit ist grundsätzlich nur der <b>positive Schaden</b> zu ersetzen (eigentliche Schadloshaltung). Den entgangenen Gewinn gibt es erst ab grober Fahrlässigkeit (<b>§ 1324 ABGB</b>). Für Körperverletzungen enthält aber <b>§ 1325 ABGB</b> eine Sonderregel: Heilungskosten, Verdienstentgang und Schmerzengeld sind unabhängig vom Grad des Verschuldens zu ersetzen.</p>
<div data-fig="C-01"></div>
<ul class="sq"><li><b>Anzug 2.500 €:</b> positiver Schaden, zu ersetzen mit dem objektiven Wert im Zeitpunkt der Schädigung (§ 1332). <span class="gr">✔</span></li>
<li><b>Heilungskosten 750 €:</b> § 1325. <span class="gr">✔</span></li>
<li><b>Schmerzengeld:</b> § 1325, „auf Verlangen“. Bei schweren Verbrennungen ist ein spürbarer Betrag angemessen. Carl sollte es unbedingt geltend machen. <span class="gr">✔</span></li>
<li><b>Bonus 5.000 €:</b> Der Bonus war noch nicht in Carls Vermögen. Er ist an sich entgangener Gewinn, nach § 1324 bei leichter Fahrlässigkeit also nicht ersatzfähig. Das ist die Standardlösung. Aber: Carl hat den Bonus verloren, weil er <b>wegen der Verletzung</b> ins Krankenhaus musste und nicht bei der Unterzeichnung sein konnte. Ein Bonus, den der Arbeitgeber für die Unterzeichnung bereits zugesichert hatte, ist Teil seines Verdienstes. Nach § 1325 ist der <b>Verdienstentgang</b> aus einer Körperverletzung auch bei leichter Fahrlässigkeit zu ersetzen. Voraussetzung: Carl beweist, dass der Deal bei seinem Erscheinen unterzeichnet worden wäre.</li></ul>
<div class="box res"><span class="tag">Ergebnis</span><p>Mark haftet deliktisch wegen leichter Fahrlässigkeit. Er muss jedenfalls <b>2.500 €</b> (Anzug), <b>750 €</b> (Heilungskosten) und ein angemessenes <b>Schmerzengeld</b> zahlen. Den <b>Bonus von 5.000 €</b> schuldet er nach der besseren Begründung als Verdienstentgang aus der Körperverletzung (§ 1325), wenn Carl beweist, dass der Deal sonst zustande gekommen wäre. Wer den Bonus nur als entgangenen Gewinn nach § 1324 einordnet, verneint ihn wegen leichter Fahrlässigkeit. Das ist vertretbar, muss dann aber genau so begründet werden.</p></div>
<div class="box fix"><span class="tag">Debug-Log · Vorlage</span><ul class="dbg">
<li class="ok">Deliktische Haftung, Schema, leichte Fahrlässigkeit, Anzug und Heilungskosten: richtig.</li>
<li class="no">Fehlt: Adäquanz und vor allem das Schmerzengeld (§ 1325), das bei „schweren Verbrennungen“ auf der Hand liegt.</li>
<li class="no">„Da er nicht grob fahrlässig gehandelt hat, muss der Bonus nicht erstattet werden“: zu kurz. Die Sonderregel des § 1325 für Verdienstentgang wird übergangen.</li>
<li class="mid">„Deliktsfähige Schadenersatzhaftung“ ist kein Begriff. Gemeint ist: deliktische Haftung, Mark ist deliktsfähig.</li></ul></div>`,
  compact: { key: 'Leichte FL: Anzug 2.500 € + Heilungskosten 750 € + Schmerzengeld sicher. Bonus 5.000 € über § 1325 als Verdienstentgang vertretbar.', bullets: [
    'Kein Vertrag → <b>deliktisch</b>; „unachtsam“ = <b>leichte Fahrlässigkeit</b>.',
    'Leichte FL: nur <b>positiver Schaden</b> (§ 1324): Anzug 2.500 € (Wert § 1332).',
    '<b>§ 1325</b> unabhängig vom Verschuldensgrad: Heilungskosten 750 €, <b>Schmerzengeld</b>, Verdienstentgang.',
    'Bonus: entgangener Gewinn (✘ bei leichter FL) <b>oder</b> Verdienstentgang aus Körperverletzung (✔ § 1325) – Beweis nötig.',
    'Debug: Vorlage vergisst Schmerzengeld und § 1325 für den Bonus.'] } },

{ id: 'C-02', part: 'C', kind: 'case', category: 'SACHENRECHT', title: 'Tennisschläger vom Flohmarkt', topic: 'Gutgläubiger Erwerb', sub: '§§ 366, 367, 368, 442, 971 ABGB', pts: 8, mods: ['T-07'],
  sv: 'Das Brüderpaar Jacob und Tobias ist unzertrennlich. Jacob ist ein passionierter Tennisspieler. Kommenden Samstag steht das Finale der Clubmeisterschaften an. Allerdings sind alle Saiten seiner Schläger gerissen, und im Stress der Arbeit vergisst er, sie bespannen zu lassen. Deshalb borgt er sich 2 Schläger bei seinem gönnerhaften Bruder Tobias aus. Da sich die beiden nach dem Spiel streiten, weil Tobias Jacob nicht in dem gewünschten Ausmaß anfeuert, entscheidet sich Jacob, die Schläger am Flohmarkt zu verscherbeln. Der Anfänger Manuel kauft Jacob die gebrauchten Schläger ab, allerdings wundert er sich kurz, weil auf dem Schläger eine Gravur mit dem Namen „Tobias“ lesbar ist. Er denkt sich aber nichts dabei und freut sich über den guten Preis.',
  qs: [{ l: 'Frage', p: 8, q: 'Hat Manuel Eigentum erworben?' }],
  html: `
<h3><span class="n">01</span>Derivativer Erwerb scheitert</h3>
<p>Tobias hat Jacob die Schläger geliehen (Leihe, § 971 ABGB). Er bleibt Eigentümer. Jacob ist bloßer <b>Inhaber</b> und hält die Schläger für Tobias. Kaufvertrag (Titel) und Übergabe (Modus) zwischen Jacob und Manuel liegen vor, aber Jacob ist nicht verfügungsberechtigt (<b>nemo plus iuris</b>, § 442). Ein abgeleiteter Erwerb scheidet aus.</p>
<h3><span class="n">02</span>Gutgläubiger Erwerb (§ 367 ABGB)</h3>
<table><tr><th>Voraussetzung</th><th>Prüfung</th><th></th></tr>
<tr><td class="k">bewegliche Sache</td><td>Tennisschläger</td><td class="gr">✔</td></tr>
<tr><td class="k">entgeltlich, Titel + Modus</td><td>Kauf am Flohmarkt, Übergabe</td><td class="gr">✔</td></tr>
<tr><td class="k">Erwerbssituation</td><td>Keine Versteigerung, kein Unternehmer (privater Flohmarktverkauf). Aber: Tobias hat Jacob die Schläger freiwillig anvertraut. Jacob ist <b>Vertrauensmann</b> (③).</td><td class="gr">✔</td></tr>
<tr><td class="k">Redlichkeit (§ 368)</td><td>Problem! Siehe unten.</td><td class="led">✘</td></tr></table>
<h3><span class="n">03</span>War Manuel redlich?</h3>
<p>Redlich ist nur, wer weder weiß noch vermuten muss, dass der Veräußerer nicht Eigentümer ist. Unredlich ist, wer aus der Natur der Sache, einem auffallend niedrigen Preis oder anderen Umständen einen begründeten Verdacht schöpfen musste (§ 368 Abs 1). Schon <b>leichte Fahrlässigkeit</b> schadet.</p>
<ul class="sq"><li>Auf den Schlägern steht ein <b>fremder Name</b> („Tobias“). Das ist ein deutlicher Hinweis, dass die Sache jemand anderem gehören könnte.</li>
<li>Manuel hat sich darüber sogar „<b>kurz gewundert</b>“, den Verdacht also tatsächlich gehabt, ist ihm aber nicht nachgegangen.</li>
<li>Dazu kommt der auffallend „<b>gute Preis</b>“.</li>
<li>Eine einfache Nachfrage („Wer ist Tobias?“) hätte genügt.</li></ul>
<p><b>Gegenargument:</b> Gebrauchte Sportgeräte mit Gravuren früherer Besitzer sind am Flohmarkt nicht ungewöhnlich, und Manuel ist Anfänger. In der Gesamtschau (Gravur + günstiger Preis + tatsächliche Zweifel) überwiegt aber die Unredlichkeit.</p>
<div class="box res"><span class="tag">Ergebnis</span><p><b>Nein.</b> Zwar liegt mit Jacob ein Vertrauensmann vor, doch Manuel war wegen der Gravur, des günstigen Preises und seiner eigenen Zweifel nicht redlich (§ 368). Er hat kein Eigentum erworben. Tobias bleibt Eigentümer und kann die Schläger von Manuel herausverlangen (§ 366). Manuel kann sich an Jacob halten (Rechtsmangel, Schadenersatz). Wer Redlichkeit bejaht, kommt über den Vertrauensmann zum Eigentumserwerb des Manuel. Tobias hätte dann nur Ansprüche gegen Jacob (Schadenersatz, Herausgabe des Erlöses).</p></div>
<div class="box fix"><span class="tag">Debug-Log · Vorlage</span><ul class="dbg">
<li class="no">Widersprüchlich: Erst heißt es, keine der drei Situationen liege vor, dann „Jacob ist Vertrauensmann. Manuel hat Eigentum erworben.“ Richtig ist: Vertrauensmann ja, aber Redlichkeit nein.</li>
<li class="no">Der Schlusssatz ignoriert die Gravur, obwohl die Vorlage sie vorher selbst als Grund für fehlende Gutgläubigkeit nennt.</li>
<li class="mid">„Jacob besitzt den Tennisschläger“: Ein Entlehner ist nur Inhaber, nicht Besitzer im Rechtssinn (ihm fehlt der Wille, die Sache als eigene zu haben).</li>
<li class="mid">„Berichtigung des Vormannes“ meint Verfügungsberechtigung.</li></ul></div>`,
  compact: { key: 'Vertrauensmann ja (Leihe), aber Manuel unredlich (Gravur, Preis, eigene Zweifel) → kein Eigentum.', bullets: [
    'Leihe (§ 971): Jacob ist nur <b>Inhaber</b> → nemo plus iuris (§ 442).',
    '§ 367: beweglich ✔ entgeltlich ✔ <b>Vertrauensmann</b> ✔ (freiwillig anvertraut).',
    '<b>Redlichkeit § 368</b> ✘: Gravur „Tobias“ + guter Preis + „kurz gewundert“; leichte FL schadet.',
    'Tobias klagt nach <b>§ 366</b>; Manuel hält sich an Jacob. Vertretbar a. A.: redlich → Eigentum.',
    'Debug: Vorlage widersprüchlich; Entlehner ist Inhaber, nicht Besitzer.'] } },

{ id: 'C-03', part: 'C', kind: 'case', category: 'GEWÄHRLEISTUNG', title: 'Kratzer am Gebrauchtwagen', topic: 'Offenkundiger Mangel', sub: '§§ 922, 924, 928, 932, 933, 933a ABGB · VGG', pts: 9, mods: ['T-05'],
  sv: 'Julian möchte sich unbedingt ein neues Auto kaufen, um endlich mobil zu sein und auch im Sommer auf Urlaub fahren zu können. Allerdings ist seine monetäre Situation als Student nicht berauschend, deshalb sieht er sich auch bei einem Gebrauchtwagenhändler um, um sich ein Bild zu machen. Letztendlich entdeckt er ein Auto, das wenigstens in einem geringen Ausmaß seinen Erwartungen entspricht. Da Julian in Eile ist, weil er noch ins Fitnessstudio möchte, überlegt er nicht lange und schlägt zu. Eine nähere Betrachtung des Autos bedarf es für ihn nicht. Eine Woche nach dem Kauf des Autos fällt Julian ein riesiger Kratzer auf der Hintertür des Autos auf. Er fährt zu dem Autohändler und fordert eine Reparatur. Dieser verweigert diese allerdings und erklärt ihm, dass der Mangel klar erkennbar war und er diesen deshalb nicht vertreten muss.',
  qs: [{ l: 'Frage', p: 9, q: 'Liegt der Händler im Recht? Und wie würde die Situation aussehen, wenn der Mangel nicht erkennbar war?' }],
  html: `
<h3><span class="n">01</span>Mangel</h3>
<p>Ein „riesiger Kratzer“ an der Tür ist eine Abweichung vom geschuldeten Zustand und damit ein <b>Sachmangel</b> (§ 922). Bloße Gebrauchsspuren, die bei einem Gebrauchtwagen dieses Alters üblich sind, wären keiner. Ein großer Kratzer geht darüber hinaus.</p>
<h3><span class="n">02</span>Variante 1: Kratzer war klar erkennbar</h3>
<p>Nach <b>§ 928 ABGB</b> gibt es keine Gewährleistung für Mängel, die „in die Augen fallen“, also bei üblicher Aufmerksamkeit sofort erkennbar sind. Wer eine Sache ungeprüft nimmt, kann sich später nicht auf offenkundige Mängel berufen. Ausnahmen: Der Verkäufer hat den Mangel <b>arglistig verschwiegen</b> oder ausdrücklich <b>Mangelfreiheit zugesagt</b>. Beides liegt hier nicht vor. Dass Julian aus Eile auf eine Besichtigung verzichtet hat, ist sein Risiko. <b>Der Händler liegt im Recht.</b></p>
<div class="box upd"><span class="tag">Patch 2022 · Verbraucherkauf</span><p>Julian ist Verbraucher. Für Verbraucherkäufe ab 2022 gilt das VGG. Nach der EU-Warenkauf-Richtlinie entfällt die Haftung für eine Abweichung von den objektiven Anforderungen nur, wenn der Verbraucher eigens darauf hingewiesen wurde und ausdrücklich und gesondert zugestimmt hat. Ob § 928 ABGB daneben im Verbrauchergeschäft noch gilt, ist daher umstritten. Für die Klausur ist § 928 die erwartete Lösung. Kennst du die Diskussion, erwähne sie in einem Satz.</p></div>
<h3><span class="n">03</span>Variante 2: Kratzer war nicht erkennbar</h3>
<ol class="steps">
<li><b>Kein § 928:</b> Gewährleistung besteht. Julian ist Verbraucher, ein Ausschluss wäre unwirksam (§ 9 KSchG / VGG).</li>
<li><b>Vermutung:</b> Der Mangel zeigte sich nach einer Woche, also innerhalb der Vermutungsfrist (beim Verbraucherkauf heute 1 Jahr nach § 11 VGG, im Klausurjahr 6 Monate nach § 924 ABGB). Es wird vermutet, dass er schon bei Übergabe vorlag. Der Händler müsste das Gegenteil beweisen.</li>
<li><b>Primär:</b> Julian kann Verbesserung (Ausbessern, Lackieren) verlangen. Austausch scheidet praktisch aus, weil ein bestimmter Gebrauchtwagen als Stückschuld verkauft wurde.</li>
<li><b>Händler verweigert:</b> Damit kann Julian sofort auf die sekundären Behelfe übergehen (§ 932 Abs 4). Er bekommt <b>Preisminderung</b>. Eine Wandlung scheidet aus, weil ein Kratzer ein <b>geringfügiger Mangel</b> ist.</li>
<li><b>Schadenersatz:</b> Alternativ kann Julian den Kratzer selbst reparieren lassen und die Kosten nach § 933a verlangen. Das Verschulden des Händlers wird vermutet (§ 1298).</li>
<li><b>Frist:</b> 2 Jahre ab Übergabe, danach 3 Monate zur Klage (§ 933). Bei gebrauchten Sachen kann die Frist vertraglich auf ein Jahr verkürzt werden.</li></ol>
<div class="box res"><span class="tag">Ergebnis</span><p><b>Erkennbarer Kratzer:</b> Der Händler hat recht. Für offenkundige Mängel gibt es keine Gewährleistung (§ 928). <b>Nicht erkennbarer Kratzer:</b> Julian hat Gewährleistungsansprüche. Wegen der Verweigerung der Verbesserung kann er sofort Preisminderung (keine Wandlung, da geringfügig) oder als Schadenersatz die Reparaturkosten verlangen.</p></div>
<div class="box fix"><span class="tag">Debug-Log · Vorlage</span><ul class="dbg">
<li class="ok">Erkennbarkeit, Vermutungsregel, Stufenbau, 2 Jahre Frist: im Kern richtig.</li>
<li class="no">„Da der Händler sich weigert, kann Julian den Austausch fordern“: falsch. Die Weigerung führt auf die zweite Stufe (Preisminderung/Wandlung), nicht zum anderen primären Behelf. Ein Austausch des konkreten Gebrauchtwagens ist ohnehin unmöglich.</li>
<li class="no">Fehlt: Wandlung ausgeschlossen bei geringfügigem Mangel; § 928 als Norm; die Ausnahmen (Arglist, Zusage).</li>
<li class="mid">„Weil gebrauchte Wagen Kratzer haben“ vermischt zwei Fragen: Übliche Gebrauchsspuren sind kein Mangel. Offenkundige Mängel sind Mängel, für die nur nicht gehaftet wird. Vermutungsfrist beim Verbraucherkauf heute: 1 Jahr (VGG).</li></ul></div>`,
  compact: { key: 'Erkennbar: § 928, keine Gewährleistung. Nicht erkennbar: Verbesserung verweigert → sofort Preisminderung (keine Wandlung, geringfügig).', bullets: [
    'Großer Kratzer = <b>Mangel</b>; übliche Gebrauchsspuren wären keiner.',
    '<b>§ 928</b>: keine Gewährleistung für Mängel, die in die Augen fallen (außer Arglist/Zusage).',
    'Patch 2022: Verhältnis § 928 ↔ VGG umstritten; Klausur erwartet § 928.',
    'Nicht erkennbar: Vermutung (1 J VGG / 6 M alt), Verbesserung; <b>Verweigerung → Stufe 2</b>.',
    'Kratzer = <b>geringfügig</b> → nur Preisminderung; alternativ § 933a Reparaturkosten. Frist 2 J + 3 M.'] } },

{ id: 'C-04', part: 'C', kind: 'case', category: 'WILLENSMÄNGEL', title: 'Händler ohne Gewerbeberechtigung', topic: 'Irrtum oder List?', sub: '§§ 870, 871, 873, 879, 901, 1478, 1487 ABGB', pts: 8, mods: ['T-03'],
  sv: 'Doch der Kratzer ist nicht die einzige Sache, die Julian auffällt. Über einen Freund erfährt er, dass der Händler sein Gewerbe „schwarz“ betreibt und somit gar keine Zulassung als Gebrauchtwagenhändler hat. Julian, der selbst Jus studiert hat und ein ausgeprägtes Rechtsbewusstsein hat, wäre den Vertrag gar nicht erst eingegangen, wenn er von der fehlenden Berechtigung gewusst hätte. Da er sowieso mit dem Auto unglücklich ist, möchte er von dem Vertrag zurücktreten. Als gelernter Jurist behauptet er, den Vertrag wegen Irrtum anfechten zu können.',
  qs: [{ l: 'Frage', p: 8, q: 'Hat er Recht und wie lange hat er Zeit?' }],
  html: `
<h3><span class="n">01</span>Ist der Vertrag schon nichtig?</h3>
<p><b>Nein.</b> Ein Verstoß gegen die Gewerbeordnung betrifft nach stRsp nur die Berufsausübung, nicht die Gültigkeit der einzelnen Verträge. Der Kaufvertrag ist nicht nach § 879 nichtig. Sonst würde gerade der Kunde seine Gewährleistungsrechte verlieren.</p>
<h3><span class="n">02</span>Welcher Irrtum?</h3>
<p>Julian irrt über eine Eigenschaft seines Vertragspartners (Gewerbeberechtigung). Ein <b>Irrtum in der Person</b> ist nach § 873 ABGB nur dann ein beachtlicher Geschäftsirrtum, wenn die Eigenschaft der Person für das konkrete Geschäft <b>verkehrswesentlich</b> ist. Typisch ist das etwa bei Kredit- oder Dauerschuldverhältnissen, bei denen es auf die Person ankommt.</p>
<div class="grid g2">
<div class="box err"><span class="tag">Contra: Motivirrtum</span><p>Bei einem einmaligen Barkauf eines Autos bekommt Julian das Auto, gleich ob der Händler eine Gewerbeberechtigung hat. Sein Wunsch, nur mit rechtstreuen Händlern zu kontrahieren, ist ein persönliches Motiv. Bei entgeltlichen Geschäften ist das unbeachtlich (§ 901).</p></div>
<div class="box res"><span class="tag">Pro: Geschäftsirrtum</span><p>Beim Kauf vom „Gebrauchtwagenhändler“ gehört die Befugnis zum Handel zu dem, worauf ein Kunde gewöhnlich vertraut (Seriosität, Haftung, Typisierung). Der Händler hat den Irrtum durch sein Auftreten veranlasst (§ 871).</p></div></div>
<p>Hält man den Irrtum für einen Geschäftsirrtum, ist er <b>veranlasst</b> (§ 871, erste Variante) und <b>wesentlich</b>, denn Julian hätte gar nicht abgeschlossen. Dann kann er den Vertrag aufheben lassen. <b>Frist: 3 Jahre ab Vertragsschluss</b> (§ 1487).</p>
<h3><span class="n">03</span>Der sicherere Weg: List (§ 870)</h3>
<p>Wer ein Gewerbe „schwarz“ betreibt und als Händler auftritt, erweckt durch schlüssiges Verhalten den Eindruck, dazu befugt zu sein. Er weiß, dass das nicht stimmt. Verschweigt er es bewusst, liegt eine <b>vorsätzliche Täuschung</b> vor. Bei List ist auch ein Motivirrtum beachtlich, und die Frage nach § 873 stellt sich nicht. Julian kann den Vertrag anfechten. <b>Frist: nach hA 30 Jahre</b> (§ 1478).</p>
<div class="box res"><span class="tag">Ergebnis</span><p>Die fehlende Gewerbeberechtigung macht den Vertrag <b>nicht nichtig</b>. Ob Julian wegen Irrtums anfechten kann, hängt davon ab, ob man die Befugnis des Händlers als verkehrswesentliche Eigenschaft wertet (§ 873). Bejaht man das, ist der Irrtum veranlasst und wesentlich, und die Frist beträgt <b>3 Jahre</b> ab Vertragsschluss (§ 1487). Zuverlässiger ist die Anfechtung wegen <b>List</b> (§ 870): Der Händler hat seine Befugnis bewusst vorgespiegelt. Dafür hat Julian <b>30 Jahre</b> Zeit (hA).</p></div>
<div class="box fix"><span class="tag">Debug-Log · Vorlage</span><ul class="dbg">
<li class="no">„Folgende Punkte müssen erfüllt sein: veranlasst, auffallen müssen, rechtzeitig aufgeklärt“: falsch. Die drei Varianten des § 871 sind Alternativen, nicht kumulative Voraussetzungen. Eine genügt.</li>
<li class="no">„List … hierfür gibt es auch eine Frist von 3 Jahren“: falsch. Bei List gilt nach hA die 30-jährige Frist.</li>
<li class="mid">Fehlt: § 873 (wann ein Irrtum über die Person überhaupt beachtlich ist), die Abgrenzung zum Motivirrtum und die Frage, ob der Vertrag wegen der GewO-Verletzung nichtig ist.</li>
<li class="mid">„Zurücktreten“ ist bei Irrtum der falsche Begriff. Richtig ist „anfechten“ (Aufhebung).</li></ul></div>`,
  compact: { key: 'Nicht nichtig. Irrtum in der Person nur bei Verkehrswesentlichkeit (§ 873) → 3 J. Sicherer: List (§ 870) → 30 J.', bullets: [
    'GewO-Verstoß macht den Vertrag <b>nicht nichtig</b> (§ 879).',
    '<b>§ 873</b>: Irrtum über die Person nur beachtlich, wenn <b>verkehrswesentlich</b>.',
    'Contra: bloßes <b>Motiv</b> (§ 901). Pro: Befugnis gehört zum typischen Vertrauen, <b>veranlasst</b> (§ 871).',
    'Irrtum: Aufhebung, <b>3 J</b> (§ 1487) · List: bewusst vorgespiegelt, <b>30 J</b> (§ 1478, hA).',
    'Debug: § 871-Varianten sind <b>alternativ</b>; List-Frist nicht 3 J; „anfechten“, nicht „zurücktreten“.'] } },

{ id: 'C-05', part: 'C', kind: 'case', category: 'GEHILFENHAFTUNG', title: 'Keime im Hotel', topic: 'Erfüllungsgehilfe', sub: '§§ 1295, 1298, 1313a, 1315, 1325 ABGB', pts: 6, mods: ['T-06'],
  sv: 'Um ihren brüderlichen Zwist zu beenden, fahren Jacob und Tobias gemeinsam auf Wanderurlaub nach Südtirol. Der Urlaub verläuft gut und das Verhältnis der Brüder bessert sich wieder. Zurück im Alltag wollen sie nun auch wieder regelmäßig miteinander Tennis spielen. Allerdings macht dem eine Nagelbetteiterung von Tobias einen Strich durch die Rechnung. Anscheinend wurden die Wasserleitungen des Hotels nicht ordnungsgemäß gewartet und dadurch konnten sich Keime bilden, welche eine offene Wunde am Fuß von Tobias infizierten. Als sich Tobias an das Hotel wendet, verweist dieses darauf, dass die Wartung ein externes Unternehmen durchführt und er sich daher an dieses wenden soll. Außerdem sei dieses Unternehmen in der Branche enorm angesehen und man könne so einen Zwischenfall nicht erahnen.',
  qs: [{ l: 'Frage', p: 6, q: 'An wen kann sich Tobias auf welcher Grundlage wenden?' }],
  html: `
<h3><span class="n">01</span>Gegen das Hotel: vertraglich</h3>
<p>Tobias hat mit dem Hotel einen <b>Beherbergungsvertrag</b>. Dieser verpflichtet das Hotel nicht nur zur Unterkunft, sondern auch zu <b>Schutz- und Sorgfaltspflichten</b>: Die Gäste dürfen durch Einrichtungen wie die Wasserleitungen nicht an ihrer Gesundheit geschädigt werden.</p>
<ul class="sq"><li><b>Schaden:</b> Nagelbetteiterung, also Heilungskosten, Schmerzengeld und ggf. Verdienstentgang (§ 1325).</li>
<li><b>Kausalität und Adäquanz:</b> Mangelhafte Wartung → Keime → Infektion der Wunde.</li>
<li><b>Rechtswidrigkeit:</b> Verletzung vertraglicher Schutzpflichten.</li>
<li><b>Verschulden:</b> Die Leitungen wurden „nicht ordnungsgemäß gewartet“, die Wartungsfirma handelte also sorgfaltswidrig. Das wird dem Hotel nach § 1313a zugerechnet. Außerdem wird es vermutet (§ 1298): Das Hotel müsste beweisen, dass weder es selbst noch seinen Gehilfen ein Verschulden trifft.</li></ul>
<p>Das Hotel lässt diese Pflicht durch ein externes Wartungsunternehmen erfüllen. Wer sich zur Erfüllung einer Vertragspflicht eines Gehilfen bedient, haftet für dessen Verschulden wie für sein eigenes (<b>§ 1313a ABGB</b>). Erfüllungsgehilfe kann auch ein <b>selbständiges Unternehmen</b> sein. Es kommt nur darauf an, dass es in die Erfüllung der Pflicht des Hotels gegenüber dem Gast eingebunden ist.</p>
<p>Die Einwände des Hotels greifen nicht. „Wende dich an die Firma“: Tobias kann sich an seinen Vertragspartner halten. „Die Firma ist renommiert“: Das wäre ein Argument gegen ein Auswahlverschulden, also gegen eine Haftung nach <b>§ 1315</b>. Bei § 1313a kommt es darauf nicht an. Gehaftet wird für das Verschulden des Gehilfen selbst.</p>
<h3><span class="n">02</span>Gegen das Wartungsunternehmen: deliktisch</h3>
<p>Mit der Wartungsfirma hat Tobias keinen Vertrag. Sie haftet ihm aber <b>deliktisch</b> (§ 1295), weil ihre mangelhafte Wartung seine körperliche Integrität, ein absolut geschütztes Rechtsgut, verletzt hat. Hier muss Tobias allerdings das Verschulden beweisen. Ein Anspruch aus einem Vertrag mit Schutzwirkung zugunsten Dritter scheitert nach der Rsp daran, dass Tobias einen gleichwertigen eigenen Vertragsanspruch gegen das Hotel hat.</p>
<div class="box res"><span class="tag">Ergebnis</span><p>Tobias kann sich an das <b>Hotel</b> wenden, und zwar aus dem Beherbergungsvertrag. Das Hotel haftet für die Wartungsfirma als Erfüllungsgehilfin wie für eigenes Verschulden (§ 1313a), bei Beweislastumkehr (§ 1298). Daneben haftet die <b>Wartungsfirma deliktisch</b> (§ 1295). Beide haften solidarisch für Heilungskosten, Schmerzengeld und allfälligen Verdienstentgang (§ 1325).</p></div>
<div class="box deep"><span class="tag">Realitätscheck · IPR</span><p>Südtirol liegt in Italien. In der Realität wäre zu prüfen, welches Recht anwendbar ist (Rom I für den Vertrag, bei Verbrauchern unter Umständen österreichisches Recht; Rom II für das Delikt, grundsätzlich italienisches Recht). Die Klausur unterstellt österreichisches Recht.</p></div>
<div class="box fix"><span class="tag">Debug-Log · Vorlage</span><ul class="dbg">
<li class="ok">Vertraglicher Schadenersatz, Schema, Erfüllungsgehilfe: richtig erkannt.</li>
<li class="no">Fehlt: die Norm § 1313a, die Beweislastumkehr § 1298 und warum das „renommierte Unternehmen“-Argument nicht zählt (§ 1315 vs. § 1313a).</li>
<li class="mid">„Die Prüfung des Schadenersatzes von dem externen Unternehmen würde wiederum zeigen, dass das Hotel aufkommen muss“: unklar. Richtig ist: Die Firma haftet daneben selbst deliktisch.</li></ul></div>`,
  compact: { key: 'Hotel haftet aus dem Beherbergungsvertrag für die Wartungsfirma (§ 1313a, § 1298); Firma daneben deliktisch.', bullets: [
    'Beherbergungsvertrag mit <b>Schutzpflichten</b> für die Gesundheit der Gäste.',
    'Wartungsfirma = <b>Erfüllungsgehilfe</b> (auch selbständige Unternehmen) → <b>§ 1313a</b>.',
    '„Renommiert“ betrifft nur Auswahlverschulden (<b>§ 1315</b>) – bei § 1313a irrelevant.',
    'Beweislastumkehr <b>§ 1298</b>; Firma haftet <b>deliktisch</b> (§ 1295), solidarisch; § 1325.',
    'IPR-Realitätscheck: Südtirol = Italien (Rom I/II), Klausur unterstellt AT-Recht.'] } },

{ id: 'C-06', part: 'C', kind: 'case', category: 'STELLVERTRETUNG', title: 'Rasenmäher über Limit', topic: 'Vollmachtsüberschreitung', sub: '§§ 1002, 1016, 1017, 1019, 1029 ABGB', pts: 7, mods: ['T-04'],
  sv: 'Da sich Tobias noch nicht ohne Probleme bewegen kann, muss er seinen Bruder Jacob bitten, die alltäglichen Angelegenheiten und auch darüber hinausgehende Dinge zu erledigen. Damit dabei keine Missverständnisse aufkommen, stellt er ihm eine Vollmacht für alle Angelegenheiten des täglichen Lebens auf einem Blatt Papier aus. Eines Tages bittet Tobias Jacob, für ihn einen Rasenmäher zu besorgen, und stellt ihm erneut eine Vollmacht für dieses spezifische Geschäft aus. Zusätzlich schreibt er auch einen Höchstpreis von 1.000 € auf den Zettel. Bei dem Händler ist Jacob von den Geräten begeistert und achtet auch nicht mehr auf den Preis. Er kauft letztendlich ohne eine Bemerkung abzugeben einen Mäher um 1.100 €. Zu Hause angekommen ist Tobias zuerst außer Rand und Band, da sein kleiner Bruder schon wieder einmal seine Anweisungen nicht befolgt hat. Nachdem sich seine Stimmung wieder beruhigt hat, teilt er Jacob jedoch mit, dass der Aufpreis kein Problem sei und der Rasenmäher seinen Preis wert sei.',
  qs: [{ l: 'Frage', p: 7, q: 'Beurteilen Sie die vertretungsrechtliche Situation!' }],
  html: `
<div data-fig="C-06"></div>
<h3><span class="n">01</span>Innen- und Außenverhältnis</h3>
<p><b>Innenverhältnis:</b> Tobias beauftragt Jacob, einen Rasenmäher zu besorgen (Auftrag, § 1002 ABGB), mit der Weisung „höchstens 1.000 €“. <b>Außenverhältnis:</b> Tobias erteilt eine schriftliche Spezialvollmacht. Weil der Höchstpreis <b>auf der Vollmachtsurkunde selbst</b> steht, ist nicht nur das Dürfen, sondern auch das Können (die Vertretungsmacht) auf 1.000 € beschränkt. Die allgemeine Vollmacht für Angelegenheiten des täglichen Lebens hilft nicht weiter: Der Kauf eines Rasenmähers um 1.100 € ist kein Alltagsgeschäft, und die spätere Spezialvollmacht regelt dieses Geschäft abschließend.</p>
<h3><span class="n">02</span>Offenlegung</h3>
<p>Dass Jacob „ohne eine Bemerkung“ kauft, heißt hier: Er weist den Händler nicht auf das Limit hin. Er kauft aber für Tobias (Besorgung mit Vollmacht), also im fremden Namen (§ 1017). Hätte er gar nicht offengelegt, wäre er selbst Vertragspartner geworden (Eigengeschäft).</p>
<h3><span class="n">03</span>Überschreitung der Vollmacht</h3>
<p>Mit 1.100 € überschreitet Jacob seine Vertretungsmacht. Er handelt als Vertreter ohne Vertretungsmacht (<b>falsus procurator</b>). Der Vertrag ist für Tobias zunächst <b>schwebend unwirksam</b>. Tobias ist nur gebunden, wenn er das Geschäft genehmigt oder sich den Vorteil daraus zuwendet (§ 1016 ABGB). Eine Anscheinsvollmacht scheidet aus: Tobias hat keinen Anschein einer Vollmacht über 1.000 € gesetzt.</p>
<h3><span class="n">04</span>Genehmigung durch Tobias</h3>
<p>Tobias erklärt, „der Aufpreis sei kein Problem und der Rasenmäher seinen Preis wert“. Das ist eine <b>Genehmigung</b>. Sie kann gegenüber dem Vertreter oder dem Dritten erklärt werden und auch schlüssig erfolgen, etwa dadurch, dass Tobias den Mäher behält und benützt. Die Genehmigung <b>wirkt zurück</b> auf den Zeitpunkt des Vertragsschlusses.</p>
<div class="box res"><span class="tag">Ergebnis</span><p>Jacob hat seine (in der Urkunde beschränkte) Vollmacht überschritten und als falsus procurator gehandelt. Durch die nachträgliche Genehmigung des Tobias (§ 1016 ABGB) ist aber <b>rückwirkend ein wirksamer Kaufvertrag zwischen Tobias und dem Händler über 1.100 €</b> zustande gekommen. Eine Haftung des Jacob nach § 1019 entfällt, und im Innenverhältnis hat Tobias die Weisungsverletzung nachträglich gebilligt.</p></div>
<div class="box merk"><span class="tag">Merksatz</span><p>Lies den Sachverhalt bis zum Ende. Der letzte Satz („der Aufpreis ist kein Problem“) entscheidet den Fall.</p></div>
<div class="box fix"><span class="tag">Debug-Log · Vorlage</span><ul class="dbg">
<li class="no">Hauptfehler: „Es ist kein Vertrag zwischen Tobias und dem Händler zustande gekommen (außer er genehmigt das nachträglich)“: Er hat nachträglich genehmigt! Das Ergebnis muss lauten: wirksamer Vertrag Tobias–Händler.</li>
<li class="no">„Im Innenverhältnis hat Tobias Jacob eine schriftliche Vollmacht gegeben“: Die Vollmacht betrifft das Außenverhältnis. Das Innenverhältnis ist der Auftrag.</li>
<li class="mid">Haftung nach § 1019 (Vertrauensschaden): richtig beschrieben, wegen der Genehmigung hier aber gegenstandslos. Außerdem schützt § 1019 nur einen redlichen Dritten.</li></ul></div>`,
  compact: { key: 'Limit in der Vollmachtsurkunde → falsus procurator → schwebend unwirksam → Genehmigung (§ 1016) → Vertrag Tobias–Händler über 1.100 €.', bullets: [
    'Innen: <b>Auftrag</b> (§ 1002) mit Weisung · Außen: <b>Spezialvollmacht</b> mit Limit in der Urkunde → Können begrenzt.',
    'Alltagsvollmacht deckt den Rasenmäher nicht; Offenlegung (§ 1017) liegt vor.',
    '1.100 € > 1.000 € → <b>falsus procurator</b>, schwebend unwirksam; kein Anschein.',
    '„Aufpreis kein Problem“ = <b>Genehmigung § 1016</b>, wirkt zurück → wirksamer Vertrag; § 1019 entfällt.',
    'Debug: Vorlage übersieht die Genehmigung und verwechselt Innen-/Außenverhältnis.'] } },

{ id: 'C-07', part: 'C', kind: 'case', category: 'GESCHÄFTSFÄHIGKEIT', title: 'Rudergerät an einen 13-Jährigen', topic: 'Geschäftsfähigkeit', sub: '§§ 21, 170, 877, 1431 ff ABGB', pts: 6, mods: ['T-02'],
  sv: 'Nicht nur Tobias hat gerade Sorgen, sondern auch Jochen. Er hat dem Sportler Tobias ein Rudergerät um 500 € verkauft und mit dem Geld kurz darauf seiner Frau neue Ohrringe geschenkt. Allerdings melden sich wenige Tage später die Eltern von Tobias und erklären, dass sie dem Geschäft nicht zustimmen und ihr Sohn erst 13 ist. Jochen entgegnet, dass Tobias schon „mindestens wie 19“ ausgesehen hat.',
  qs: [{ l: 'Frage', p: 6, q: 'Wird Jochen Recht bekommen?' }],
  html: `
<h3><span class="n">01</span>Geschäftsfähigkeit des Tobias</h3>
<p>Tobias ist 13 und damit <b>unmündiger Minderjähriger</b> (§ 21 Abs 2 ABGB: unter 14). Ohne Einwilligung seines gesetzlichen Vertreters kann er sich rechtsgeschäftlich weder verpflichten noch verfügen (§ 170 Abs 1 ABGB).</p>
<ul class="sq"><li><b>§ 170 Abs 2</b> (freie Verfügung über Einkommen) gilt erst für mündige Minderjährige. <span class="led">✘</span></li>
<li><b>§ 170 Abs 3</b> (geringfügige Angelegenheit des täglichen Lebens, wie sie Gleichaltrige üblicherweise schließen): Ein Rudergerät um 500 € ist das nicht. <span class="led">✘</span></li></ul>
<p>Der Vertrag war daher <b>schwebend unwirksam</b>. Die Eltern haben die Genehmigung verweigert. Er ist damit <b>endgültig unwirksam</b>.</p>
<h3><span class="n">02</span>„Er sah aus wie 19“</h3>
<p>Das ist <b>unerheblich</b>. Der gute Glaube an die Geschäftsfähigkeit wird nicht geschützt. Der Schutz des Minderjährigen geht dem Verkehrsschutz vor. Jochen trägt das Risiko, wenn er sich nicht vergewissert (z. B. Ausweis). Selbst wenn Tobias sein Alter listig vorgespiegelt hätte, würde das an der Unwirksamkeit nichts ändern. Mit 13 ist Tobias zudem nicht einmal deliktsfähig.</p>
<h3><span class="n">03</span>Rückabwicklung</h3>
<p>Die Leistungen sind nach Bereicherungsrecht zurückzustellen (§ 877, §§ 1431 ff ABGB): Tobias gibt das Rudergerät zurück, Jochen zahlt die 500 € zurück. Dass Jochen das Geld für Ohrringe ausgegeben hat, entlastet ihn nicht. Geld ist Gattungsschuld, er muss den Betrag aus seinem Vermögen erstatten. Der Minderjährige muss umgekehrt nur zurückgeben, was noch bei ihm vorhanden ist oder zu seinem Vorteil verwendet wurde.</p>
<div class="box res"><span class="tag">Ergebnis</span><p><b>Nein.</b> Der Kaufvertrag mit dem 13-jährigen Tobias ist mangels Genehmigung der Eltern unwirksam (§ 170 ABGB). Auf das Aussehen kommt es nicht an. Jochen muss die <b>500 €</b> gegen Rückgabe des Rudergeräts zurückzahlen.</p></div>
<div class="box fix"><span class="tag">Debug-Log · Vorlage</span><ul class="dbg">
<li class="ok">Unmündig, schwebend unwirksam, Genehmigung der Eltern nötig, kein Schutz für Jochen: richtig.</li>
<li class="no">Fehlt: Norm (§ 170), die Prüfung von § 170 Abs 3 (Alltagsgeschäft) und die Rückabwicklung (500 € zurück, Ohrringe irrelevant). Bei 6 Punkten wird genau das erwartet.</li></ul></div>`,
  compact: { key: '13 = unmündig; 500 € kein Alltagsgeschäft; Eltern verweigern → unwirksam. Aussehen egal, 500 € zurück.', bullets: [
    'Unter 14 = <b>unmündig</b> (§ 21 Abs 2) → ohne Einwilligung schwebend unwirksam (§ 170 Abs 1).',
    '§ 170 Abs 2 erst ab 14 ✘ · § 170 Abs 3: 500 € ist <b>kein geringfügiges Alltagsgeschäft</b> ✘.',
    'Genehmigung verweigert → <b>endgültig unwirksam</b>.',
    '„Sah aus wie 19“: <b>kein Vertrauensschutz</b>.',
    'Rückabwicklung § 877, §§ 1431 ff: Gerät gegen <b>500 €</b>; Ohrringe irrelevant (Geld = Gattungsschuld).'] } },

{ id: 'C-08', part: 'C', kind: 'case', category: 'LEISTUNGSSTÖRUNG', title: 'Sitzgarnitur zu spät', topic: 'Fixgeschäft?', sub: '§§ 918, 919, 921, 1298 ABGB · § 349 UGB', pts: 8, mods: ['T-05'],
  sv: 'Ivo möchte mit seinem neuen Restaurant richtig durchstarten und hat die Eröffnung am 28.06. bis ins kleinste Detail geplant. Um auch optisch bei den Kunden einen Eindruck zu hinterlassen, hat er eine neue Sitzgarnitur bei Rene bestellt, der diese am Vortag, den 27.06., liefern soll. Von der Eröffnung weiß Rene jedoch nichts. Aufgrund eines Engpasses kann Rene die Garnitur nicht rechtzeitig liefern. Als er sie dann am 30.06. vorbeibringt, erklärt ihm Ivo, dass er sie nicht mehr benötige und auch der Vertrag nicht mehr bestehe.',
  qs: [{ l: 'Frage', p: 8, q: 'Hat Ivo Recht?' }],
  html: `
<div data-fig="C-08"></div>
<h3><span class="n">01</span>Schuldnerverzug</h3>
<p>Rene hat zum vereinbarten Termin (27.06.) nicht geliefert. Er ist in <b>Schuldnerverzug</b> (§ 918 ABGB), und zwar unabhängig vom Verschulden (Engpass).</p>
<h3><span class="n">02</span>Fixgeschäft?</h3>
<p>Ein Fixgeschäft (§ 919) liegt vor, wenn die Leistung zu einer festbestimmten Zeit „bei sonstigem Rücktritt“ bedungen wurde. Das muss ausdrücklich vereinbart sein oder sich aus der <b>für beide erkennbaren</b> Natur des Geschäfts ergeben. Bei einem Fixgeschäft kann der Gläubiger ohne Nachfrist zurücktreten. Rene wusste nichts von der Eröffnung. Für ihn war nicht erkennbar, dass eine spätere Lieferung für Ivo sinnlos ist. Ein bloß vereinbarter Liefertermin macht noch kein Fixgeschäft. <b>Kein Fixgeschäft.</b></p>
<h3><span class="n">03</span>Rücktritt nach § 918</h3>
<p>Beim einfachen Verzug kann Ivo nur unter Setzung einer <b>angemessenen Nachfrist</b> zurücktreten. Das hat er nicht getan. Er hat erst am 30.06., als Rene bereits mit der Ware vor der Tür stand, die Annahme verweigert. Nach der Rsp wird eine Rücktrittserklärung ohne Nachfrist zwar wirksam, wenn der Schuldner auch innerhalb einer angemessenen Frist nicht leistet. Rene hat aber binnen drei Tagen geliefert, also jedenfalls innerhalb einer angemessenen Nachfrist. Der <b>Rücktritt ist unwirksam</b>.</p>
<h3><span class="n">04</span>Rechtsfolgen</h3>
<p>Der Vertrag besteht weiter. Ivo muss die Garnitur abnehmen und bezahlen. Verweigert er die Annahme, gerät er selbst in <b>Annahmeverzug</b>.</p>
<p>Ivo kann aber den <b>Verspätungsschaden</b> ersetzt verlangen (§§ 918, 921, 1298), wenn Rene schuldhaft verspätet geliefert hat. Ein Lieferengpass entlastet ihn nur, wenn er unvorhersehbar und unabwendbar war. Da beide Unternehmer sind und das Geschäft für beide unternehmensbezogen ist, umfasst der Ersatz auch den entgangenen Gewinn (<b>§ 349 UGB</b>). Schäden aus der missglückten Eröffnung muss Ivo aber beweisen, und ihr Ersatz kann daran scheitern, dass Rene davon nichts wusste (Adäquanz, Schutzzweck).</p>
<div class="box res"><span class="tag">Ergebnis</span><p><b>Ivo hat nicht recht.</b> Mangels Erkennbarkeit für Rene liegt kein Fixgeschäft vor, sondern einfacher Schuldnerverzug. Ivo hätte nur unter Setzung einer angemessenen Nachfrist zurücktreten können (§ 918). Der Vertrag besteht weiter, Ivo muss die Garnitur abnehmen und zahlen. Er kann allenfalls einen Verspätungsschaden geltend machen.</p></div>
<div class="box fix"><span class="tag">Debug-Log · Vorlage</span><ul class="dbg">
<li class="ok">Kein Fixgeschäft, weil Rene von der Eröffnung nichts wusste, Schuldnerverzug, Nachfrist: richtig.</li>
<li class="no">Fehlt das Ergebnis zur Frage „Hat Ivo Recht?“: Nein, der Vertrag besteht weiter, weil keine Nachfrist gesetzt wurde und Rene schon geliefert hat.</li>
<li class="no">Fehlt: Normen (§§ 918, 919), Verspätungsschaden (§ 921, § 1298, § 349 UGB).</li></ul></div>`,
  compact: { key: 'Kein Fixgeschäft (Rene wusste nichts) → Rücktritt nur mit Nachfrist; Rene lieferte nach 3 Tagen → Vertrag besteht.', bullets: [
    'Nicht geliefert am 27.06. → <b>Schuldnerverzug</b> (verschuldensunabhängig).',
    '<b>Fixgeschäft § 919</b> nur bei Erkennbarkeit für beide – Rene wusste nichts von der Eröffnung ✘.',
    'Rücktritt nur mit <b>angemessener Nachfrist</b>; Lieferung binnen 3 Tagen → Rücktritt unwirksam.',
    'Ivo muss abnehmen und zahlen (sonst <b>Annahmeverzug</b>); ggf. Verspätungsschaden (§ 921, § 1298, <b>§ 349 UGB</b>).'] } }
);
