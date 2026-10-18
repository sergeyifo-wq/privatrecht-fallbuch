// Fragenpool. t: mc (eine richtige), multi (mehrere richtige), tf (wahr/falsch), num (Zahl, tol = Toleranz)
// a: Index | [Indizes] | true/false | Zahl. e: Erklärung. s: Abschnitt.
window.FB_QUIZ = [
// ---------- T-00 ----------
{s:"T-00",t:"mc",q:"Welche Reihenfolge entspricht dem Gutachtenstil?",o:["Ergebnis → Norm → Fakten → Obersatz","Obersatz → Voraussetzung → Subsumtion → Ergebnis","Subsumtion → Obersatz → Ergebnis → Norm","Norm → Ergebnis → Subsumtion → Obersatz"],a:1,e:"Erst die Frage als Hypothese, dann Norm + Definition, dann Fakten ↔ Merkmal, zuletzt das Ergebnis."},
{s:"T-00",t:"num",q:"Rund wie viele Minuten Schreibzeit verdient eine 9-Punkte-Frage (70 Punkte in 90 Minuten, ≈ 1,2 min/Punkt)?",a:11,tol:1,unit:"min",e:"9 × 1,2 ≈ 10,8, also rund 11 Minuten."},
{s:"T-00",t:"tf",q:"„Was kann X tun?“ verlangt grundsätzlich alle in Frage kommenden Behelfe samt Voraussetzungen, Rechtsfolge und Frist.",a:true,e:"Wer nur einen Behelf nennt, verschenkt die meisten Punkte."},
{s:"T-00",t:"mc",q:"Was solltest du in jeder Fallprüfung zuerst klären?",o:["Die Höhe des Streitwerts","Parteien und Rechtsverhältnisse, insbesondere Verbraucher oder Unternehmer","Das zuständige Gericht","Ob ein Notar beteiligt war"],a:1,e:"Ob Verbraucher oder Unternehmer beteiligt sind, entscheidet über KSchG, FAGG, VGG und UGB."},
{s:"T-00",t:"tf",q:"Seit 1.1.2022 gilt für Verbraucherverträge über Waren das Verbrauchergewährleistungsgesetz (VGG).",a:true,e:"Das GRUG brachte das VGG und Änderungen im ABGB."},
// ---------- T-01 ----------
{s:"T-01",t:"mc",q:"Ein Webshop präsentiert ein Produkt mit Preis. Rechtlich ist das in der Regel …",o:["ein verbindliches Angebot","eine invitatio ad offerendum","eine Annahme","ein Vorvertrag"],a:1,e:"Der Anbieter will sich nicht gegenüber unbegrenzt vielen Kunden binden. Das Angebot macht der Kunde."},
{s:"T-01",t:"tf",q:"Schweigen auf ein Angebot gilt grundsätzlich als Zustimmung.",a:false,e:"Schweigen ist grundsätzlich keine Zustimmung; Ausnahmen nur bei einer Pflicht zum Widerspruch."},
{s:"T-01",t:"multi",q:"Welche Geschäfte sind nach dem Fallbuch formgebunden? (mehrere richtig)",o:["Schenkung ohne wirkliche Übergabe","Kauf eines Notebooks","Bürgschaft","Liegenschaftserwerb (grundbuchsfähige Urkunde)"],a:[0,2,3],e:"Grundsatz Formfreiheit (§ 883); Ausnahmen: Notariatsakt § 943, Schriftform der Bürgschaft, Urkunde für das Grundbuch."},
{s:"T-01",t:"mc",q:"Welche Norm regelt, dass ungewöhnliche, nachteilige AGB-Klauseln ohne besonderen Hinweis nicht Vertragsinhalt werden?",o:["§ 879 Abs 3 ABGB","§ 864a ABGB","§ 915 ABGB","§ 6 Abs 3 KSchG"],a:1,e:"§ 864a ist die Geltungskontrolle; § 879 Abs 3 die Inhaltskontrolle."},
{s:"T-01",t:"mc",q:"Eine Annahme weicht inhaltlich vom Angebot ab. Was liegt vor?",o:["Ein Vertrag zu den Bedingungen des Angebots","Ein Vertrag zu den Bedingungen der Annahme","Ein neues Angebot","Ein Dissens mit Schadenersatzpflicht"],a:2,e:"Die Annahme muss deckungsgleich sein; eine abweichende Annahme ist ein neues Angebot."},
{s:"T-01",t:"mc",q:"„Unklarheiten gehen zulasten des Verwenders“ steht in …",o:["§ 863 ABGB","§ 915 ABGB","§ 883 ABGB","§ 1029 ABGB"],a:1,e:"§ 915 ABGB, contra proferentem."},
// ---------- T-02 ----------
{s:"T-02",t:"mc",q:"Ab welchem Alter ist man nach § 21 Abs 2 ABGB mündig?",o:["7","12","14","18"],a:2,e:"Unmündig ist, wer das 14. Lebensjahr noch nicht vollendet hat."},
{s:"T-02",t:"tf",q:"Ein 15-Jähriger kann über sein Lehrlingseinkommen frei verfügen, soweit seine Lebensbedürfnisse nicht gefährdet werden.",a:true,e:"§ 170 Abs 2 ABGB gilt für mündige Minderjährige."},
{s:"T-02",t:"tf",q:"Wer mit einem Minderjährigen kontrahiert, der deutlich älter aussieht, wird in seinem Vertrauen geschützt.",a:false,e:"Der Minderjährigenschutz geht dem Verkehrsschutz vor; Aussehen zählt nicht."},
{s:"T-02",t:"mc",q:"Ein Minderjähriger schließt ohne Einwilligung ein Geschäft außerhalb von § 170 Abs 2 und 3. Das Geschäft ist …",o:["nichtig","schwebend unwirksam","voll wirksam","anfechtbar binnen 3 Jahren"],a:1,e:"Die gesetzlichen Vertreter können genehmigen (wirksam ex tunc) oder verweigern (endgültig unwirksam)."},
{s:"T-02",t:"mc",q:"Ab welchem Alter ist man deliktsfähig?",o:["7","14","16","18"],a:1,e:"§ 176 ABGB: mündige Minderjährige sind deliktsfähig."},
// ---------- T-03 ----------
{s:"T-03",t:"tf",q:"Für die Irrtumsanfechtung nach § 871 müssen alle drei Varianten (veranlasst, offenbar auffallen, rechtzeitig aufgeklärt) kumulativ vorliegen.",a:false,e:"Die Varianten sind Alternativen; eine genügt."},
{s:"T-03",t:"mc",q:"Welche Frist gilt nach hA für die Anfechtung wegen List?",o:["14 Tage","3 Jahre","10 Jahre","30 Jahre"],a:3,e:"§ 1478 (hA): 30 Jahre; Irrtum dagegen 3 Jahre (§ 1487)."},
{s:"T-03",t:"mc",q:"Rechtsfolge eines unwesentlichen Geschäftsirrtums?",o:["Aufhebung ex tunc","Anpassung des Vertrags (§ 872)","Nichtigkeit","Schadenersatz ohne Anpassung"],a:1,e:"Wesentlich → Aufhebung, unwesentlich → Anpassung."},
{s:"T-03",t:"num",q:"Jemand zahlt 30.000 € für eine Sache. Bis zu welchem gemeinen Wert (in €) liegt KEINE laesio enormis vor? (Grenze = die Hälfte)",a:15000,tol:0,unit:"€",e:"Erst wenn man weniger als die Hälfte (15.000 €) erhält, greift § 934."},
{s:"T-03",t:"multi",q:"Wann ist ein Motivirrtum beachtlich? (mehrere richtig)",o:["Bei unentgeltlichen Geschäften","Wenn er durch List herbeigeführt wurde","Wenn das Motiv zur Bedingung gemacht wurde","Bei jedem Kauf über 1.000 €"],a:[0,1,2],e:"§ 901: bei entgeltlichen Geschäften sonst unbeachtlich."},
{s:"T-03",t:"tf",q:"Bei der laesio enormis kann der Gegner die Aufhebung abwenden, indem er die Differenz zum gemeinen Wert nachzahlt.",a:true,e:"§ 934 Satz 2."},
// ---------- T-04 ----------
{s:"T-04",t:"mc",q:"Was regelt das Innenverhältnis bei der Stellvertretung?",o:["Was der Vertreter kann (Vollmacht)","Was der Vertreter darf (Auftrag)","Die Haftung des Dritten","Die Form des Vertrags"],a:1,e:"Innen = Dürfen (Auftrag, § 1002); außen = Können (Vollmacht)."},
{s:"T-04",t:"tf",q:"Eine geheime Weisung im Innenverhältnis begrenzt die Vertretungsmacht gegenüber dem Dritten.",a:false,e:"Sie bindet den Dritten nicht. Steht das Limit aber in der Vollmachtsurkunde, ist die Vertretungsmacht selbst begrenzt."},
{s:"T-04",t:"mc",q:"Ein Vertreter ohne Vertretungsmacht schließt ab, der Vertretene genehmigt nicht. Wer haftet dem redlichen Dritten?",o:["Der Vertretene auf Erfüllung","Der Vertreter auf den Vertrauensschaden (§ 1019)","Niemand","Der Dritte selbst"],a:1,e:"§ 1019 ABGB."},
{s:"T-04",t:"multi",q:"Voraussetzungen der Anscheinsvollmacht (§ 1029)? (mehrere richtig)",o:["Rechtsschein, gesetzt durch den Vertretenen","Redliches Vertrauen des Dritten","Kausalität des Vertrauens","Notarielle Beglaubigung"],a:[0,1,2],e:"Der Anschein muss vom Vertretenen ausgehen."},
{s:"T-04",t:"mc",q:"Wie heißt die nachträgliche Zustimmung zum Geschäft eines falsus procurator?",o:["Anfechtung","Genehmigung (§ 1016)","Aufsandung","Wandlung"],a:1,e:"Sie wirkt zurück auf den Zeitpunkt des Vertragsschlusses."},
// ---------- T-05 ----------
{s:"T-05",t:"tf",q:"Schuldnerverzug setzt Verschulden des Schuldners voraus.",a:false,e:"Verzug ist verschuldensunabhängig; Schadenersatz (§ 921) dagegen nicht."},
{s:"T-05",t:"mc",q:"Wie lange beträgt die Vermutungsfrist beim Verbraucherkauf nach dem VGG?",o:["6 Monate","1 Jahr","2 Jahre","3 Jahre"],a:1,e:"§ 11 VGG: 1 Jahr. Sonst (§ 924 ABGB) 6 Monate."},
{s:"T-05",t:"mc",q:"Welche Behelfe stehen auf der ersten Stufe der Gewährleistung?",o:["Preisminderung und Wandlung","Verbesserung und Austausch","Schadenersatz und Rücktritt","Anfechtung und Anpassung"],a:1,e:"Primär Verbesserung/Austausch, sekundär Preisminderung/Wandlung."},
{s:"T-05",t:"mc",q:"Gewährleistungsfrist für unbewegliche Sachen (seit 2022)?",o:["2 Jahre","2 Jahre + 3 Monate","3 Jahre + 3 Monate zur gerichtlichen Geltendmachung","30 Jahre"],a:2,e:"§ 933: 3 Jahre, danach noch 3 Monate zur Klage."},
{s:"T-05",t:"tf",q:"Bei einem geringfügigen Mangel ist die Wandlung ausgeschlossen.",a:true,e:"Preisminderung bleibt möglich."},
{s:"T-05",t:"multi",q:"Wann kann der Übernehmer sofort auf Stufe 2 übergehen? (mehrere richtig)",o:["Der Verkäufer verweigert die Verbesserung","Verbesserung und Austausch sind unmöglich","Der Käufer hat es eilig, ohne weitere Gründe","Erhebliche Unannehmlichkeiten für den Übernehmer"],a:[0,1,3],e:"§ 932 Abs 4 ABGB / VGG."},
{s:"T-05",t:"mc",q:"Wann liegt ein Fixgeschäft (§ 919) vor?",o:["Bei jedem vereinbarten Liefertermin","Wenn die Wesentlichkeit des Termins für beide erkennbar ist","Wenn der Gläubiger es eilig hat","Nur bei Verbrauchergeschäften"],a:1,e:"Ein fester Termin allein macht noch kein Fixgeschäft."},
// ---------- T-06 ----------
{s:"T-06",t:"mc",q:"Was ersetzt der Schädiger bei leichter Fahrlässigkeit grundsätzlich?",o:["Nur den positiven Schaden","Auch den entgangenen Gewinn","Auch den Wert der besonderen Vorliebe","Gar nichts"],a:0,e:"§ 1324: entgangener Gewinn erst ab grober Fahrlässigkeit."},
{s:"T-06",t:"tf",q:"Heilungskosten, Verdienstentgang und Schmerzengeld (§ 1325) sind unabhängig vom Grad des Verschuldens zu ersetzen.",a:true,e:"Sonderregel für Körperverletzungen."},
{s:"T-06",t:"mc",q:"Wer trägt im Vertragsverhältnis die Beweislast für das Verschulden?",o:["Der Geschädigte","Der Schädiger (§ 1298)","Das Gericht","Der Versicherer"],a:1,e:"Beweislastumkehr im Vertrag; beim Delikt beweist der Geschädigte."},
{s:"T-06",t:"mc",q:"Ein Geschäftsherr haftet außerhalb eines Vertrags für seinen Gehilfen nur, wenn …",o:["der Gehilfe leicht fahrlässig handelt","der Gehilfe untüchtig oder wissentlich gefährlich ist (§ 1315)","der Gehilfe ein Unternehmen ist","der Schaden über 1.000 € liegt"],a:1,e:"§ 1315; im Vertrag dagegen immer § 1313a."},
{s:"T-06",t:"mc",q:"Verjährung von Schadenersatzansprüchen (§ 1489)?",o:["3 Jahre ab Schadenseintritt","3 Jahre ab Kenntnis von Schaden und Schädiger, absolut 30 Jahre","2 Jahre ab Übergabe","30 Jahre ab Vertrag"],a:1,e:"§ 1489 ABGB."},
{s:"T-06",t:"tf",q:"Zwischen Unternehmern ist bei unternehmensbezogenen Geschäften entgangener Gewinn schon bei leichter Fahrlässigkeit zu ersetzen.",a:true,e:"§ 349 UGB."},
// ---------- T-07 ----------
{s:"T-07",t:"mc",q:"Was ist der Modus beim Erwerb einer Liegenschaft?",o:["Übergabe","Einverleibung im Grundbuch","Notariatsakt","Kaufvertrag"],a:1,e:"§ 431 ABGB."},
{s:"T-07",t:"multi",q:"Erwerbssituationen des § 367 ABGB? (mehrere richtig)",o:["Öffentliche Versteigerung","Unternehmer im gewöhnlichen Betrieb","Vertrauensmann","Privatkauf vom Dieb"],a:[0,1,2],e:"Gestohlene Sachen sind nie anvertraut."},
{s:"T-07",t:"tf",q:"Für die Redlichkeit nach § 368 schadet schon leichte Fahrlässigkeit.",a:true,e:"Wer Verdacht schöpfen musste, ist unredlich."},
{s:"T-07",t:"mc",q:"Ersitzungszeit für bewegliche Sachen (§ 1466)?",o:["1 Jahr","3 Jahre","10 Jahre","30 Jahre"],a:1,e:"Rechtmäßiger, redlicher und echter Besitz über 3 Jahre."},
{s:"T-07",t:"mc",q:"Wie heißt die Klage des Eigentümers auf Herausgabe gegen jeden Inhaber?",o:["Actio negatoria","Rei vindicatio (§ 366)","Actio Publiciana","Besitzstörungsklage"],a:1,e:"Eigentumsklage nach § 366."},
{s:"T-07",t:"tf",q:"Gutgläubiger Erwerb nach § 367 ist auch bei Liegenschaften möglich.",a:false,e:"Nur bei beweglichen Sachen; bei Liegenschaften schützt der Vertrauensgrundsatz des Grundbuchs (§ 1500)."},
// ---------- A-01 ----------
{s:"A-01",t:"mc",q:"Wann kam der Kistenvertrag zustande?",o:["Mit dem Bestätigungsfax","Am Telefon (Tag 1)","Mit der Lieferung","Gar nicht"],a:1,e:"Konsens über Ware und Preis am Telefon; formfrei (§ 883)."},
{s:"A-01",t:"num",q:"Welchen Betrag (in €) schuldet P für die 1000 Kisten?",a:5000,tol:0,unit:"€",e:"1000 × 5 € – das Fax änderte nichts."},
{s:"A-01",t:"tf",q:"Schweigen auf ein kaufmännisches Bestätigungsschreiben macht auch eine Preiserhöhung um 20 % verbindlich.",a:false,e:"Bei wesentlichen Abweichungen gilt die Regel nie."},
{s:"A-01",t:"mc",q:"Welche Wirkung hat ein Bestätigungsschreiben grundsätzlich?",o:["Konstitutiv","Deklarativ – es dient als Beweismittel","Es hebt den Vertrag auf","Es ersetzt die Annahme"],a:1,e:"Es hält einen bereits geschlossenen Vertrag fest."},
// ---------- A-02 ----------
{s:"A-02",t:"mc",q:"Welcher Irrtum liegt im High-Heels-Fall vor?",o:["Erklärungsirrtum","Eigenschaftsirrtum","Motivirrtum","Irrtum in der Person"],a:2,e:"A irrt nur über den Beweggrund."},
{s:"A-02",t:"tf",q:"A kann den Kauf der High-Heels wegen Irrtums anfechten.",a:false,e:"Motivirrtum bei entgeltlichem Geschäft: unbeachtlich (§ 901)."},
{s:"A-02",t:"mc",q:"„100“ statt „1.000“ vertippt – welche Irrtumsart?",o:["Motivirrtum","Erklärungsirrtum","Rechtsirrtum","Kalkulationsirrtum"],a:1,e:"Man erklärt etwas anderes, als man will."},
{s:"A-02",t:"mc",q:"Wie lange kann man einen Vertrag wegen Irrtums anfechten?",o:["14 Tage","1 Jahr","3 Jahre ab Vertragsabschluss","30 Jahre"],a:2,e:"§ 1487 ABGB."},
// ---------- A-03 ----------
{s:"A-03",t:"mc",q:"Wie nennt man den Brandschaden am Wohnzimmer?",o:["Mangelschaden","Mangelfolgeschaden","Reiner Vermögensschaden","Vertrauensschaden"],a:1,e:"Schaden an anderen Rechtsgütern; nur über Schadenersatz."},
{s:"A-03",t:"tf",q:"Gewährleistung ist verschuldensunabhängig.",a:true,e:"Schadenersatz dagegen setzt Verschulden voraus (vertraglich vermutet, § 1298)."},
{s:"A-03",t:"mc",q:"Warum darf K nach dem Fallbuch sofort Wandlung verlangen?",o:["Weil Verbesserung immer zuerst ausscheidet","Weil der Austausch unzumutbar ist (Fehler aus der Sphäre des Verkäufers) – nach VGG eindeutig","Weil K Unternehmer ist","Weil der Mangel geringfügig ist"],a:1,e:"§ 932 Abs 4 / VGG: schwerwiegender Mangel."},
{s:"A-03",t:"mc",q:"Über welche Norm werden die Mitarbeiter von MediaMarkt zugerechnet?",o:["§ 1315","§ 1313a","§ 1319","§ 1029"],a:1,e:"Erfüllungsgehilfen im Vertrag."},
{s:"A-03",t:"num",q:"Wie hoch ist der Mangelfolgeschaden (in €), den MediaMarkt ersetzen muss?",a:5000,tol:0,unit:"€",e:"Positiver Schaden schon bei leichter FL."},
// ---------- A-04 ----------
{s:"A-04",t:"tf",q:"C hat das gestohlene Mountainbike gutgläubig erworben.",a:false,e:"Keine Erwerbssituation des § 367 – gestohlen ist nicht anvertraut."},
{s:"A-04",t:"mc",q:"Welches Element des derivativen Erwerbs fehlt?",o:["Titel","Modus","Verfügungsbefugnis des Vormanns","Entgeltlichkeit"],a:2,e:"Nemo plus iuris (§ 442)."},
{s:"A-04",t:"mc",q:"Wie bekommt B sein Rad zurück?",o:["Irrtumsanfechtung","Rei vindicatio (§ 366)","Gewährleistung","Wandlung"],a:1,e:"Eigentumsklage gegen jeden Inhaber."},
{s:"A-04",t:"tf",q:"Auch der Verkauf einer fremden Sache ist als Verpflichtungsgeschäft gültig.",a:true,e:"Titel ✔; es fehlt nur die Verfügungsbefugnis."},
// ---------- A-05 ----------
{s:"A-05",t:"mc",q:"Zwischen wem kommt der Vertrag im Fall „Rechnung auf die Freundin“ zustande?",o:["A und B","B und E (Anscheinsvollmacht)","Gar kein Vertrag","A und E"],a:1,e:"E hat durch wiederholtes Zahlen selbst den Rechtsschein gesetzt."},
{s:"A-05",t:"tf",q:"Für die Anscheinsvollmacht reicht es, dass sich der Vertreter als bevollmächtigt ausgibt.",a:false,e:"Der Anschein muss vom Vertretenen ausgehen."},
{s:"A-05",t:"mc",q:"Wie kann E künftig verhindern, dass A sie verpflichtet?",o:["Gar nicht","Indem sie B informiert, dass A nicht mehr für sie kaufen darf","Indem sie A eine schriftliche Vollmacht gibt","Durch Anfechtung wegen List"],a:1,e:"Damit zerstört sie den Anschein."},
// ---------- A-06 ----------
{s:"A-06",t:"mc",q:"Was kann X tun, wenn Y das Notebook nicht liefert (kein Fixgeschäft)?",o:["Sofort zurücktreten ohne Frist","Erfüllung verlangen oder Rücktritt unter Setzung einer angemessenen Nachfrist","Nur Preisminderung","Nichts, er bleibt dauerhaft gebunden"],a:1,e:"§ 918 ABGB."},
{s:"A-06",t:"tf",q:"Weil X das Notebook „dringend“ braucht, liegt ein Fixgeschäft vor.",a:false,e:"Die Dringlichkeit war für Y nicht erkennbar."},
{s:"A-06",t:"mc",q:"Welche Norm gibt X bei Verschulden des Y Schadenersatz wegen Nichterfüllung?",o:["§ 921","§ 933a","§ 1325","§ 870"],a:0,e:"§ 921 ABGB; Verschulden vermutet (§ 1298)."},
// ---------- A-07 ----------
{s:"A-07",t:"multi",q:"Was braucht die grundbuchsfähige Urkunde? (mehrere richtig)",o:["Schriftform","Beglaubigte Unterschriften (§ 31 GBG)","Aufsandungserklärung (§ 32 GBG)","Zeugen"],a:[0,1,2],e:"Grundlage für die Einverleibung."},
{s:"A-07",t:"mc",q:"Wie erwirbt der Erbe eine Liegenschaft?",o:["Erst mit Eintragung","Mit der Einantwortung, das Grundbuch wird nur berichtigt","Durch Ersitzung","Durch Notariatsakt"],a:1,e:"Ausnahme vom Intabulationsprinzip."},
{s:"A-07",t:"mc",q:"Wie lange dauert die außerbücherliche Ersitzung einer Liegenschaft?",o:["3 Jahre","10 Jahre","30 Jahre","40 Jahre gegen jedermann"],a:2,e:"§§ 1467 f; gegen die öffentliche Hand 40 Jahre (§ 1472)."},
// ---------- A-08 ----------
{s:"A-08",t:"num",q:"Wie viel (in €) muss Viktor zahlen, um die Aufhebung wegen laesio enormis abzuwenden?",a:30000,tol:0,unit:"€",e:"Differenz zwischen Preis (50.000 €) und gemeinem Wert (20.000 €)."},
{s:"A-08",t:"mc",q:"Welcher Weg ist für Klaus am stärksten?",o:["Gewährleistung","Anfechtung wegen List (30 Jahre)","Irrtum (3 Jahre)","Rücktritt nach FAGG"],a:1,e:"Vorsatz liegt offen und die Frist ist am längsten."},
{s:"A-08",t:"tf",q:"Ein bloß „zu teurer“ Preis ist ein Mangel im Sinne der Gewährleistung.",a:false,e:"Der Wert ist keine Eigenschaft der Sache."},
{s:"A-08",t:"mc",q:"Ab wann läuft die Frist für die Irrtumsanfechtung im Sportwagen-Fall?",o:["Ab Entdeckung durch den Sachverständigen","Ab Vertragsabschluss","Ab Übergabe","Ab Klagseinbringung"],a:1,e:"§ 1487: 3 Jahre ab Vertragsabschluss."},
{s:"A-08",t:"multi",q:"Welche Möglichkeiten hat Klaus? (mehrere richtig)",o:["Anfechtung wegen List","Irrtumsanfechtung","laesio enormis","Schadenersatz und das Auto behalten"],a:[0,1,2,3],e:"Alle vier, dazu Gewährleistung nur bei zugesagten Eigenschaften."},
// ---------- B-01 ----------
{s:"B-01",t:"num",q:"Wie viel (in €) muss V für das Haus zahlen?",a:230000,tol:0,unit:"€",e:"KV verbindlich nach § 5 Abs 2 KSchG."},
{s:"B-01",t:"tf",q:"Im Verbrauchergeschäft gilt ein Kostenvoranschlag im Zweifel als verbindlich.",a:true,e:"§ 5 Abs 2 KSchG; im reinen ABGB im Zweifel unverbindlich."},
{s:"B-01",t:"mc",q:"Was passiert beim unverbindlichen KV, wenn der Unternehmer eine beträchtliche Überschreitung nicht unverzüglich anzeigt?",o:["Er bekommt die Mehrkosten trotzdem","Er verliert jeden Anspruch auf die Mehrkosten","Der Vertrag ist nichtig","Der Besteller muss die Hälfte zahlen"],a:1,e:"§ 1170a Abs 2."},
{s:"B-01",t:"mc",q:"Die Errichtung eines Hauses durch eine Baufirma ist …",o:["ein Kaufvertrag","ein Werkvertrag","ein Arbeitsvertrag","eine Schenkung"],a:1,e:"Es wird ein Erfolg geschuldet (§ 1165)."},
// ---------- B-02 ----------
{s:"B-02",t:"mc",q:"Welche Gewährleistungsfrist gilt für einen fest eingebauten Kamin?",o:["2 Jahre","3 Jahre (unbeweglich) + 3 Monate","6 Monate","10 Jahre"],a:1,e:"Er wird Bestandteil des Gebäudes."},
{s:"B-02",t:"mc",q:"Variante a (Mangel nach 1 Jahr 1 Monat): Was ist das Problem für V?",o:["Die Gewährleistungsfrist ist abgelaufen","Die Vermutungsfrist ist abgelaufen – V muss beweisen, dass der Mangel bei Übergabe da war","Er hätte rügen müssen","Nichts"],a:1,e:"§ 924: 6 Monate Vermutung."},
{s:"B-02",t:"mc",q:"Was bleibt V in Variante b (nach 4 Jahren)?",o:["Wandlung","Irrtumsanfechtung","Schadenersatz nach § 933a","FAGG-Rücktritt"],a:2,e:"Verschuldensvermutung bis 10 Jahre nach Übergabe."},
{s:"B-02",t:"tf",q:"Die Rügepflicht des § 377 UGB gilt auch für Verbraucher.",a:false,e:"Nur zwischen Unternehmern."},
// ---------- B-03 ----------
{s:"B-03",t:"tf",q:"Ein mündliches Schenkungsversprechen ohne Übergabe ist wirksam.",a:false,e:"Es braucht einen Notariatsakt (§ 943)."},
{s:"B-03",t:"mc",q:"Was heilt den Formmangel einer Schenkung?",o:["Die Scheidung","Die wirkliche Übergabe","Eine E-Mail","Ein Zeuge"],a:1,e:"Mit der Überweisung liegt eine wirkliche Übergabe vor."},
{s:"B-03",t:"mc",q:"Warum scheidet ein Widerruf wegen groben Undanks aus?",o:["Weil Undank nie ein Grund ist","Weil V keine strafbare Handlung gegen G begangen hat","Weil G dürftig ist","Weil die Schenkung formungültig war"],a:1,e:"§ 948 verlangt eine Straftat gegen den Geschenkgeber."},
// ---------- B-04 ----------
{s:"B-04",t:"mc",q:"Auf welcher Grundlage haftet K dem Gast A?",o:["§ 1313a","§ 1315 (untüchtiger Gehilfe)","§ 1029","Gar nicht"],a:1,e:"A hat keinen Vertrag mit K; M ist habituell ungeschickt, K wusste es."},
{s:"B-04",t:"mc",q:"Auf welcher Grundlage haftet K dem Kunden V für das Geschirr?",o:["§ 1313a (Erfüllungsgehilfe)","§ 1315","EKHG","Nur M haftet"],a:0,e:"Werkvertrag mit Schutz- und Sorgfaltspflichten."},
{s:"B-04",t:"tf",q:"M haftet V und A persönlich deliktisch.",a:true,e:"§ 1295; solidarisch mit K."},
{s:"B-04",t:"mc",q:"Welches Gesetz regelt den Regress zwischen K und seinem Arbeitnehmer M?",o:["KSchG","DHG","FAGG","EKHG"],a:1,e:"Dienstnehmerhaftpflichtgesetz."},
// ---------- B-05 ----------
{s:"B-05",t:"mc",q:"Wer ist Eigentümer des doppelt verkauften Hauses?",o:["Emil (erster Vertrag)","Herbert (eingetragen)","V","Beide je zur Hälfte"],a:1,e:"§§ 431, 440."},
{s:"B-05",t:"mc",q:"Wann hat Emil einen Anspruch gegen Herbert?",o:["Immer","Nie","Wenn Herbert den ersten Verkauf kannte und V zum Vertragsbruch verleitet hat","Wenn Herbert mehr bezahlt hat"],a:2,e:"Eingriff in ein fremdes Forderungsrecht (§ 1295)."},
{s:"B-05",t:"mc",q:"Womit hätte sich Emil schützen können?",o:["Anmerkung der Rangordnung","Bestätigungsschreiben","Kostenvoranschlag","Vorsorgevollmacht"],a:0,e:"§§ 53 ff GBG oder einstweilige Verfügung."},
// ---------- B-06 ----------
{s:"B-06",t:"tf",q:"F kann den Audi-Kauf ihrer 19-jährigen Tochter verhindern.",a:false,e:"T ist volljährig und voll geschäftsfähig."},
{s:"B-06",t:"mc",q:"Unter welcher Voraussetzung kommt eine Erwachsenenvertretung in Frage?",o:["Bei unvernünftigen Ausgaben","Bei psychischer Krankheit oder vergleichbarer Beeinträchtigung der Entscheidungsfähigkeit","Auf Antrag der Eltern","Bei Erbschaften über 50.000 €"],a:1,e:"Bloße Unvernunft reicht nie."},
{s:"B-06",t:"mc",q:"Was bräuchte eine minderjährige T zusätzlich zur Zustimmung der Mutter für die Verwendung der Erbschaft?",o:["Nichts","Genehmigung des Pflegschaftsgerichts (§ 167 Abs 3)","Notariatsakt","Zustimmung des Händlers"],a:1,e:"Außerordentliche Vermögensangelegenheit."},
// ---------- B-07 ----------
{s:"B-07",t:"mc",q:"Rücktrittsfrist nach § 11 FAGG?",o:["7 Tage","14 Tage ab Erhalt der Ware","30 Tage","1 Jahr"],a:1,e:"Ohne Belehrung verlängert sie sich um bis zu 12 Monate."},
{s:"B-07",t:"multi",q:"Woran scheitert die AGB-Klausel „Verlust sämtlicher Rücktrittsrechte“? (mehrere richtig)",o:["Zwingendes FAGG","§ 864a ABGB","§ 879 Abs 3 ABGB","§ 6 Abs 3 KSchG (Transparenz)"],a:[0,1,2,3],e:"Sie fällt durch alle Filter."},
{s:"B-07",t:"tf",q:"Eine nach Vertragsschluss einseitig geänderte AGB-Klausel gilt für F.",a:false,e:"Maßgeblich ist die Fassung bei Vertragsschluss."},
{s:"B-07",t:"mc",q:"„Verklicken“ beim Bestellen ist welcher Irrtum?",o:["Motivirrtum","Erklärungsirrtum","Rechtsirrtum","Kalkulationsirrtum"],a:1,e:"Ein Geschäftsirrtum."},
// ---------- B-08 ----------
{s:"B-08",t:"mc",q:"Was schuldet der Werkunternehmer W?",o:["Bloßes Bemühen","Einen Erfolg","Nur den Arbeitsaufwand","Nichts ohne Vorschuss"],a:1,e:"Werkvertrag (§§ 1151, 1165)."},
{s:"B-08",t:"mc",q:"Welche Pflicht hat W verletzt?",o:["Rügepflicht","Warnpflicht (§ 1168a)","Aufklärungspflicht nach FAGG","Offenlegungspflicht"],a:1,e:"Er hätte vor dem untauglichen Stoff warnen müssen."},
{s:"B-08",t:"tf",q:"In der Variante (Arbeitsvertrag) darf F das Gehalt des W einbehalten.",a:false,e:"Arbeitnehmer schulden Bemühen; W hat gewarnt."},
{s:"B-08",t:"num",q:"Werklohn 300 €, Schadenersatz 500 €. Wie viel (in €) müsste W bei Aufrechnung noch an F/T zahlen?",a:200,tol:0,unit:"€",e:"500 − 300 = 200 €."},
// ---------- B-09 ----------
{s:"B-09",t:"mc",q:"Welcher Verschuldensgrad liegt bei Rotlicht + Tempo + SMS vor?",o:["Leichte Fahrlässigkeit","Grobe Fahrlässigkeit","Kein Verschulden","Absicht"],a:1,e:"Auffallende Sorglosigkeit."},
{s:"B-09",t:"mc",q:"Unter welcher Voraussetzung bekommt Gustav die 9.000 € für die Rolle?",o:["Immer, wegen grober FL","Nie","Wenn er beweist, dass er die Rolle mit hoher Wahrscheinlichkeit bekommen hätte","Wenn T versichert ist"],a:2,e:"Eine bloße Chance ist nicht ersatzfähig."},
{s:"B-09",t:"mc",q:"Welche Norm erlaubt die Direktklage gegen den Kfz-Haftpflichtversicherer?",o:["§ 26 KHVG","§ 1325 ABGB","§ 349 UGB","§ 11 FAGG"],a:0,e:"Daneben Halterhaftung nach EKHG."},
// ---------- B-10 ----------
{s:"B-10",t:"mc",q:"Warum kann Gerald bei der Fälschung sofort Wandlung verlangen?",o:["Weil er Verbraucher ist","Weil ein Unikat weder verbessert noch ausgetauscht werden kann","Weil die Frist abgelaufen ist","Weil der Mangel geringfügig ist"],a:1,e:"Stufe 1 unmöglich → Stufe 2."},
{s:"B-10",t:"tf",q:"Gerald kann zwischen Gewährleistung und Irrtumsanfechtung frei wählen.",a:true,e:"So die Rechtsprechung."},
{s:"B-10",t:"mc",q:"Welcher Sorgfaltsmaßstab gilt für den Antiquitätenhändler?",o:["Der eines Laien","Der eines Sachverständigen (§ 1299)","Gar keiner","Nur Vorsatz"],a:1,e:"Wer sich zu einem Gewerbe bekennt, haftet für übliche Fachkenntnis."},
// ---------- B-11 ----------
{s:"B-11",t:"mc",q:"Wer machte im Rosen-Fall das Angebot?",o:["Flora GmbH mit dem Katalog","R mit seiner Bestellung","Niemand","Die Post"],a:1,e:"Der Katalog war nur eine invitatio ad offerendum."},
{s:"B-11",t:"tf",q:"R kann die Rosen um 25 € verlangen.",a:false,e:"Ein Vertrag zu 25 € kam nie zustande."},
{s:"B-11",t:"mc",q:"Was ist die Antwort der Flora GmbH („jetzt 70 €“) rechtlich?",o:["Annahme","Ablehnung verbunden mit einem neuen Angebot","Anfechtung","Rücktritt"],a:1,e:"R kann das neue Angebot annehmen oder ablehnen."},
// ---------- C-01 ----------
{s:"C-01",t:"mc",q:"Welcher Verschuldensgrad liegt bei Mark („unachtsam“) vor?",o:["Vorsatz","Grobe Fahrlässigkeit","Leichte Fahrlässigkeit","Kein Verschulden"],a:2,e:"Ein Fehler, der auch Sorgfältigen gelegentlich passiert."},
{s:"C-01",t:"multi",q:"Was muss Mark jedenfalls ersetzen? (mehrere richtig)",o:["Anzug 2.500 €","Heilungskosten 750 €","Schmerzengeld","Wert der besonderen Vorliebe"],a:[0,1,2],e:"Positiver Schaden + § 1325."},
{s:"C-01",t:"mc",q:"Über welche Norm ist der Bonus nach der besseren Begründung ersatzfähig?",o:["§ 1324 als entgangener Gewinn","§ 1325 als Verdienstentgang aus Körperverletzung","§ 1331","§ 933a"],a:1,e:"§ 1325 gilt unabhängig vom Verschuldensgrad – Beweis nötig."},
{s:"C-01",t:"num",q:"Summe aus Anzug und Heilungskosten (in €)?",a:3250,tol:0,unit:"€",e:"2.500 + 750 = 3.250 € (plus Schmerzengeld, ggf. Bonus)."},
// ---------- C-02 ----------
{s:"C-02",t:"mc",q:"Welche Erwerbssituation des § 367 liegt im Tennisschläger-Fall vor?",o:["Versteigerung","Unternehmer im Betrieb","Vertrauensmann (Leihe)","Keine"],a:2,e:"Tobias hat Jacob die Schläger freiwillig anvertraut."},
{s:"C-02",t:"mc",q:"Woran scheitert Manuels Eigentumserwerb?",o:["Am Titel","An der Redlichkeit (§ 368)","An der Entgeltlichkeit","Am Modus"],a:1,e:"Gravur + guter Preis + eigene Zweifel."},
{s:"C-02",t:"tf",q:"Ein Entlehner ist Besitzer der entlehnten Sache im Rechtssinn.",a:false,e:"Er ist nur Inhaber; ihm fehlt der Wille, die Sache als eigene zu haben."},
// ---------- C-03 ----------
{s:"C-03",t:"mc",q:"Welche Norm schließt die Gewährleistung für offenkundige Mängel aus?",o:["§ 924","§ 928","§ 932","§ 933a"],a:1,e:"Mängel, die in die Augen fallen."},
{s:"C-03",t:"mc",q:"Der Händler verweigert die Verbesserung des nicht erkennbaren Kratzers. Was kann Julian verlangen?",o:["Austausch","Wandlung","Preisminderung","Nichts"],a:2,e:"Stufe 2; Wandlung scheidet aus, weil der Kratzer geringfügig ist."},
{s:"C-03",t:"tf",q:"Weigert sich der Verkäufer zu verbessern, kann der Käufer den Austausch fordern.",a:false,e:"Die Weigerung führt auf die zweite Stufe – genau der Fehler der Vorlage."},
{s:"C-03",t:"mc",q:"Bei gebrauchten Sachen kann die Gewährleistungsfrist vertraglich verkürzt werden auf …",o:["3 Monate","6 Monate","1 Jahr","Gar nicht"],a:2,e:"So das Fallbuch zu § 933 / VGG."},
// ---------- C-04 ----------
{s:"C-04",t:"tf",q:"Ein Vertrag mit einem Händler ohne Gewerbeberechtigung ist nichtig.",a:false,e:"Der GewO-Verstoß betrifft nur die Berufsausübung."},
{s:"C-04",t:"mc",q:"Wann ist ein Irrtum über die Person ein Geschäftsirrtum?",o:["Immer","Nie","Wenn die Eigenschaft für das Geschäft verkehrswesentlich ist (§ 873)","Nur bei Schenkungen"],a:2,e:"Typisch bei Kredit- und Dauerschuldverhältnissen."},
{s:"C-04",t:"mc",q:"„Zurücktreten“ ist bei einem Irrtum der falsche Begriff. Richtig ist …",o:["kündigen","anfechten","wandeln","widerrufen"],a:1,e:"Anfechtung mit dem Ziel der Aufhebung."},
// ---------- C-05 ----------
{s:"C-05",t:"tf",q:"Ein selbständiges Wartungsunternehmen kann Erfüllungsgehilfe des Hotels sein.",a:true,e:"Entscheidend ist die Einbindung in die Erfüllung der Pflicht."},
{s:"C-05",t:"mc",q:"Warum hilft dem Hotel das Argument „renommierte Firma“ nicht?",o:["Es ist gelogen","Es betrifft nur das Auswahlverschulden nach § 1315; bei § 1313a irrelevant","Weil Tobias Verbraucher ist","Weil das Hotel in Italien liegt"],a:1,e:"Gehaftet wird für das Verschulden des Gehilfen selbst."},
{s:"C-05",t:"mc",q:"Wie haftet die Wartungsfirma Tobias gegenüber?",o:["Vertraglich","Deliktisch (§ 1295)","Gar nicht","Nach EKHG"],a:1,e:"Kein Vertrag mit Tobias; Eingriff in die körperliche Integrität."},
// ---------- C-06 ----------
{s:"C-06",t:"mc",q:"Ergebnis im Rasenmäher-Fall?",o:["Kein Vertrag","Vertrag Jacob–Händler","Wirksamer Vertrag Tobias–Händler über 1.100 € (Genehmigung)","Vertrag über 1.000 €"],a:2,e:"„Der Aufpreis ist kein Problem“ = Genehmigung (§ 1016)."},
{s:"C-06",t:"tf",q:"Weil das Limit auf der Vollmachtsurkunde steht, ist auch das Können (die Vertretungsmacht) begrenzt.",a:true,e:"Eine bloß interne Weisung würde den Dritten dagegen nicht binden."},
{s:"C-06",t:"mc",q:"Die Vollmacht betrifft das …",o:["Innenverhältnis","Außenverhältnis","Grundbuch","Arbeitsverhältnis"],a:1,e:"Innenverhältnis ist der Auftrag."},
// ---------- C-07 ----------
{s:"C-07",t:"tf",q:"Jochen bekommt Recht, weil Tobias wie 19 aussah.",a:false,e:"Kein Vertrauensschutz."},
{s:"C-07",t:"num",q:"Wie viel (in €) muss Jochen zurückzahlen?",a:500,tol:0,unit:"€",e:"Gegen Rückgabe des Rudergeräts; Ohrringe irrelevant."},
{s:"C-07",t:"mc",q:"Warum greift § 170 Abs 3 nicht?",o:["Tobias ist zu jung","Ein Rudergerät um 500 € ist keine geringfügige Alltagsangelegenheit","Weil bar bezahlt wurde","Weil Jochen Unternehmer ist"],a:1,e:"Gleichaltrige schließen solche Geschäfte üblicherweise nicht."},
// ---------- C-08 ----------
{s:"C-08",t:"mc",q:"Warum liegt im Sitzgarnitur-Fall kein Fixgeschäft vor?",o:["Weil der Termin nicht fest war","Weil Rene von der Eröffnung nichts wusste","Weil Ivo Verbraucher ist","Weil nur 3 Tage Verspätung"],a:1,e:"Die Wesentlichkeit muss für beide erkennbar sein."},
{s:"C-08",t:"tf",q:"Ivo muss die Sitzgarnitur abnehmen und bezahlen.",a:true,e:"Der Rücktritt ohne Nachfrist ist unwirksam."},
{s:"C-08",t:"mc",q:"Welche Norm erweitert den Verspätungsschaden zwischen Unternehmern um den entgangenen Gewinn?",o:["§ 1324 ABGB","§ 349 UGB","§ 377 UGB","§ 5 KSchG"],a:1,e:"Bei unternehmensbezogenen Geschäften."}
];
