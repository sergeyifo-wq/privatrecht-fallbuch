# Fallbuch Privatrecht

Interaktive Lernplattform zum **österreichischen Privatrecht** (Semester 1), im Neon-Brass-Design, auf Basis des *Fallbuch Privatrecht* (27 Klausurfälle aus drei Privatrechts-Klausuren, gelöst im Gutachtenstil).

**Live:** https://sergeyifo-wq.github.io/privatrecht-fallbuch/

## Bereiche

| Bereich | Inhalt |
|---|---|
| Fälle | Teil 0 mit 8 Prüfschemata (T-00 … T-07) und alle 27 Fälle der Klausuren A, B und C mit Musterlösung im Gutachtenstil, **Detail**- oder **Kompakt**-Modus, 26 Abbildungen, Merksätze, System-Alerts, Patch-2022-Hinweise und Debug-Logs zur Vorlage (Klausur C) |
| Trainingsmodus | Sachverhalt + Frage lesen, eigene Lösung schreiben (Timer nach Faustregel 1,2 min/Punkt), dann aufdecken und mit dem **Erwartungshorizont** selbst bewerten |
| Videos | 8 vertonte Erklärvideos zu den Prüfschemata (neuronale Sprachausgabe, Untertitel, Kapitelmarken, klickbares Transkript) |
| Test | Schnelltest, Kapitel-Test, Fehler-Training (141 Fragen) und **Klausur-Simulation mit offenen Antworten**: Originalklausur A/B/C oder Zufallsmix, 90 Minuten, automatische Vorauswahl erkannter Punkte, Musterantworten, Hinweis bei Stichpunkten statt ganzen Sätzen, Note |
| Glossar | 102 Fachbegriffe mit Suche und A–Z; im Lerntext antippbar |
| Karteikarten | 138 Karten (Schemata, Fristen, Merksätze, Begriffe) mit 3D-Flip und Leitner-System |
| Labor | 11 Werkzeuge: Fristen-Rechner, Gewährleistungs-Navigator, Irrtums-Navigator, laesio-enormis-Rechner, Altersleiste, Gehilfen-Weiche, § 367-Check, Schadenersatz-Umfang, Zeitbudget-Pacer, AGB-Filter-Spiel, Blitz-Zuordnen |
| Anhang | Fristen-Radar und Normen-Index |

Dazu: Suche mit **Strg + K**, Prüfungs-Countdown (Termin selbst setzen), 7-Tage-Lernplan, Klausur-Kompass, Fortschrittsanzeige.

## Technik

- Statische Seite ohne Build-Schritt: `index.html`, Vanilla JavaScript, CSS.
- Inhalte in `data/*.js` (Toolkit, Klausuren A–C, Fragen, Erwartungshorizont, Glossar, Karten), Abbildungen als Inline-SVG in `assets/js/figs.js`, Labor in `assets/js/lab.js`.
- Videos in `videos/` (MP4 + WebVTT + Poster).
- Lernfortschritt, Entwürfe und Klausurergebnisse werden nur lokal im Browser gespeichert (`localStorage`).
- Lokal starten: `python -m http.server 8000` im Projektordner, dann `http://localhost:8000` öffnen.

## Hinweis

Rechtsstand Österreich Oktober 2026 inkl. GRUG 2022 (VGG). Die Klausuren stammen aus 2020/21; wo sich die Rechtslage geändert hat, steht eine Patch-2022-Box. Lernmaterial, keine Rechtsberatung. Der Notenschlüssel der Klausur-Simulation ist eine Annahme (übliche FH-Skala).
