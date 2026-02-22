# Changelog – Gunst & Tinte Website

Jede Änderung an der Website wird hier mit Datum, betroffenen Dateien und Details eingetragen.
Um eine frühere Version wiederherzustellen: `git log` → `git checkout <commit-hash> -- public/index.html`

---

## Format
```
### [DATUM] – Titel
**Dateien:** datei1, datei2
**Was:** Kurzbeschreibung
**Details:** Genaue Beschreibung was geändert wurde (Zeilen, Klassen, etc.)
```

---

## Einträge

### [2026-02-20] – Projekt-Setup & Planung
**Dateien:** CLAUDE.md, docs/plans/KUNDIN-ANPASSUNGEN.md, Änderungen.txt
**Was:** Infrastruktur & Dokumentation
**Details:** Kundenwünsche aus Änderungen.txt dokumentiert, Umsetzungsplan in KUNDIN-ANPASSUNGEN.md erstellt, CLAUDE.md mit Changelog-Pflicht angelegt

---

### [2026-02-20] – Design Critique
**Dateien:** docs/plans/critique-Plan.md
**Was:** Design-Analyse erstellt
**Details:** Vollständige Design-Kritik mit Prioritäten, Anti-Pattern-Check, Verbesserungsvorschlägen

---

### [2026-02-20] – Fix 1: Font-Audit
**Dateien:** public/index.html
**Was:** Schriftarten vereinheitlicht
**Details:** `font-display: block` für alle 5 @font-face Blöcke; alle font-family Deklarationen auf Casta (Headings) / Space Mono (Body) bereinigt; Georgia-Fallbacks entfernt; Formular-Inputs, Labels, Buttons explizit auf Space Mono gesetzt

---

### [2026-02-20] – Fix 2: Caption-Bars entfernt
**Dateien:** public/index.html
**Was:** Foto-Beschriftungen aus Overlay-Position entfernt
**Details:** Alle 8 `.caption-bar` Elemente aus showcase-items entfernt; CSS für .caption-bar gelöscht; Stilbezeichnungen als `.showcase-label` unter den Bild-Containern neu positioniert (Space Mono, 11px, rgba(247,237,194,0.5))

---

### [2026-02-20] – Fix 3: Atelier vereinfacht
**Dateien:** public/index.html
**Was:** Sonne-Dekorationen aus Atelier entfernt, Rahmen verfeinert
**Details:** Alle 3 `.atelier-sonne-deco` HTML-Elemente entfernt; CSS + Keyframes (`atelier-sonne-spin`, `atelier-sonne-float`) entfernt; Waldbild-Parallax unverändert; `.atelier-image-frame` mit `inset box-shadow` und `filter: sepia(15%) contrast(1.05)` verfeinert

---

### [2026-02-20] – Fix 4b: Rotierende Sonne vollständig aus Nicht-Hero-Sections entfernt
**Dateien:** public/index.html
**Was:** Zwei verbliebene rotierende Elemente außerhalb des Heroes entfernt
**Details:** `.rotating-strahlen` + strahlen.svg um Handwerk-Portrait entfernt (Zeile ~1197); `position:fixed` rotierende sonne.svg in "Die Werke" entfernt (Zeile ~1265, war page-wide sichtbar durch fixed positioning). Hero-Sonne bleibt unverändert.

---

### [2026-02-20] – Fix 5: "Das Handwerk" K-Fix
**Dateien:** public/index.html
**Was:** Typografie-Fix – "K" steht nicht mehr allein
**Details:** `white-space: nowrap` auf h2 und inner span für "Handwerk" gesetzt, verhindert Zeilenumbruch innerhalb des Wortes auf allen Viewport-Breiten

---

### [2026-02-20] – Fix 6: Traditional + Mikrorealismus hinzugefügt
**Dateien:** public/index.html
**Was:** Stilrichtungen in "Die Werke" ergänzt
**Details:** "Traditional" und "Mikrorealismus" in Subtitle-Zeile und Ticker-Band der Werke-Section hinzugefügt

---

### [2026-02-20] – Fix 7: Philosophie-Text aktualisiert
**Dateien:** public/index.html
**Was:** Einleitungstext in "Das Handwerk" auf Kundinnen-Text geändert
**Details:** Alter Placeholder-Text ersetzt durch: "In einer Zeit des digitalen Wachstums ist die Tätowierkunst mein Weg, Beständigkeit zu manifestieren..."

---

### [2026-02-20] – Fix 8: Atelier-Text aktualisiert + letzte Spin-Animation entfernt
**Dateien:** public/index.html
**Was:** Persönlicher Atelier-Text der Kundin eingesetzt, spinning strahlen.svg entfernt
**Details:** Blockquote und 3 Paragraphen im Atelier durch Kundinnen-Text ersetzt; verbleibende spinning strahlen.svg um das Atelier-Bild entfernt

---

### [2026-02-20] – Fix 9: Gutschein-Sektion eingefügt
**Dateien:** public/index.html
**Was:** Neue Gutschein-Info zwischen Atelier und Kontakt
**Details:** Neue Section mit Headline "Gutscheine", kurzem Erklärungstext und CTA-Button "Anfrage stellen →" eingefügt; Dunkelgrün-Hintergrund für nahtlosen Übergang

---

### [2026-02-20] – Fix 4: Kontaktformular vollständig neu aufgebaut
**Dateien:** public/index.html
**Was:** "Deine Zeremonie" → "Der Weg zu deinem Tattoo" + vollständiges Anfrageformular
**Details:** Section-Titel und Nav-Link umbenannt; Info-Block mit wegklappbarem AGB-Text (max-height transition) eingefügt; altes 3-Feld-Formular durch 12-Felder-Formular ersetzt (Vorname, Nachname, E-Mail, Telefon, Anschrift, PLZ/Ort, Motiv, Körperstelle, Größe, Stilrichtung, Referenzbild-Upload, Beschreibung); floating labels, 2-Spalten-Grid, Checkboxen (18+, AGB), disabled Submit-Button, GSAP stagger entrance, Erfolgs-Nachricht

---

### [2026-02-20] – Bold-Redesign Kontakt-Section
**Dateien:** public/index.html
**Was:** Visuelle Aufwertung der Kontakt/Anfrage-Section
**Details:** Painting-Hero: 65vh, opacity 0.45, dramatische Titelüberlagerung (clamp 3.5-10rem, weight 800); "04" Wasserzeichen; Layout: 5fr/7fr Grid, max-width 1280px, 8rem gap; Kontakt-Links als Border-Listen; Form-Section-Labels als Trennelemente; Submit-Button: 72px Höhe, Pfeil-Animation, letter-spacing 0.4em

---

### [2026-02-21] – Quote-Section: Typografie, Inline-Block, Underline-Stärke und Y-Bewegungsanimation
**Dateien:** public/index.html
**Was:** Quote-Typografie massiv aufgewertet
**Details:**
  1. .quote-word CSS: display von "inline" auf "inline-block" geändert
  2. Blockquote #quote-text: Klasse "font-medium" entfernt; font-size auf clamp(42px,7.5vw,116px), line-height 1.1, font-weight: 300, letter-spacing: -0.01em
  3. "Chronik," span: style="font-weight: 800;" hinzugefügt
  4. SVG underline stroke-width von 3 auf 5 erhöht
  5. "Tinte." span: style="font-weight: 800; color: var(--color-orange);" hinzugefügt
  6. GSAP: gsap.set opacity 0.2→0.08, y: 25 hinzugefügt; quoteTl.to mit y: 0 ergänzt

---

### [2026-02-21] – Quote-Section: Overflow-Fix – Container breiter, Schrift kleiner
**Dateien:** public/index.html
**Was:** Zeilenumbruch in Quote verhindert
**Details:** Container von max-w-5xl auf max-width: 88vw; font-size von clamp(42px, 7.5vw, 116px) auf clamp(36px, 5vw, 78px) reduziert

---

### [2026-02-21] – Philosophie-Section: Kachel-Layout → horizontale Manifestozeilen
**Dateien:** public/index.html
**Was:** Philosophie-Cards durch elegante Listenform ersetzt
**Details:** Drei philosophy-card Boxen ersetzt durch horizontale Manifestozeilen (grid: Nummer | Titel | Text). Farben korrigiert (dunkelgrün auf creme). philosophy-text font-size auf clamp(0.85rem,1vw,0.95rem) und opacity 0.72 für bessere Lesbarkeit. mb-40 → mb-20.

---

### [2026-02-21] – Hero: Sequenzielles Staggering der Eingangsanimationen
**Dateien:** public/index.html
**Was:** Hero-Elemente erscheinen nacheinander in logischer Reihenfolge
**Details:**
  1. Neues @keyframes fade-in (Opacity 0→1) und strahlen-enter (Opacity 0→0.2)
  2. bounce-slow Amplitude reduziert: -10px→-6px, -5px→-3px
  3. Sequenz: Rubens (0s) → Logo (0.6s) → Sonne (1.4s) → Strahlen (1.5s) → Button (1.8s) → Pfeil (3.5s)

---

### [2026-02-21] – Hero-Bild ersetzt durch KI-generierte Version mit dezenten Tattoos
**Dateien:** public/index.html, public/images/hero/rubens_tattoo_v1_florals.png
**Was:** Neues Hero-Bild mit feineren, eleganteren Tattoo-Motiven
**Details:** rubens_with_tattoos.webp durch rubens_tattoo_v1_florals.png ersetzt (nano banana pro image-to-image). Dezente botanische Feinlinien-Tattoos. Preload-Tag, mobile source und img src aktualisiert.

---

### [2026-02-21] – Kontakt-Bild: Transparenz reduziert
**Dateien:** public/index.html
**Was:** Kontakt-Hintergrundbild deutlicher sichtbar
**Details:** .kontakt-image-section img opacity von 0.45 auf 0.70 erhöht

---

### [2026-02-21] – Audit-Umsetzung: Mobile-Fix, Accessibility, Performance, Kontrast
**Dateien:** public/index.html
**Was:** Umfassendes Audit mit 29 Fixes
**Details:**
  KRITISCH – MOBILE MENU REPARIERT:
  1. Hamburger-Icon <div> → <button id="mobile-menu-btn"> mit aria-label, aria-expanded, aria-controls
  2. Mobile-Menu-Overlay komplett neu: Logo, Nav-Links, CTA, Stadtzeile; GSAP Stagger-Animation
  3. Escape-Taste schließt Mobile Menu
  ACCESSIBILITY: <main> Landmark, aria-hidden auf dekorative Zahlen/SVGs, Lightbox-Roles
  KONTRAST: ticker 0.25→0.55, showcase-label 0.50→0.72, contact-link 0.50→0.72
  PERFORMANCE: RAF + passive scroll-listener, GSAP-Scripts in body verschoben, gecachte Variablen
  MOBILE LAYOUT: Nav-Padding, Handwerk-Overflow, Portfolio-Grid, Featured-Section, Kontakt-Padding
  SONSTIGES: <title> auf "Gunst & Tinte – Tattoo Atelier Berlin & Stuttgart", Open Graph meta tags, prefers-reduced-motion

---

### [2026-02-21] – Quote-Section: Wow-Effekt Animation (Tinte-in-Haut)
**Dateien:** public/index.html
**Was:** Quote-Animation massiv erweitert
**Details:**
  1. Jedes Wort startet: opacity 0.05, y:32, scale:1.12, blur(5px) – Tinte noch nicht eingesunken
  2. Beim Scrollen: scale+blur+y+opacity aufgelöst (Tinte sinkt in Haut)
  3. Blockquote: letter-spacing 0.06em→-0.01em + scale 0.97→1
  4. Dekorative Zierkreise erscheinen bei 72%
  5. "Tinte." finale: skaliert 1.10→1.02 – kulminierendes Wort
  6. will-change für GPU-Performance; prefers-reduced-motion: sofort sichtbar

---

### [2026-02-21] – Quote-Section: Unterstreichung auf 80% verschoben
**Dateien:** public/index.html
**Was:** Underline-Timing angepasst
**Details:** .underline-path Animation von Position 0.45 auf 0.80 (Dauer 0.2→0.15) verschoben

---

### [2026-02-21] – Fix: Bild-Glitch vor Scroll-Animationen behoben
**Dateien:** public/index.html
**Was:** Flash/Sprung der Elemente beim Laden behoben
**Details:** `immediateRender: false` aus allen 18 gsap.from() Animationen entfernt. Ursache: GSAP setzte Start-Zustand nicht sofort beim Laden, sondern erst beim ScrollTrigger-Auslösen.

---

### [2026-02-21] – Section-Reihenfolge: Atelier vor Portfolio getauscht
**Dateien:** public/index.html
**Was:** Emotionale Reise optimiert
**Details:** Neue Reihenfolge: Philosophie → Atelier → Portfolio → Kontakt. Section-Nummern angepasst: Atelier 03→02, Werke 02→03.

---

### [2026-02-21] – Navigation: Link-Reihenfolge an neue Section-Reihenfolge angepasst
**Dateien:** public/index.html
**Was:** Nav-Reihenfolge synchronisiert
**Details:** Desktop-Nav und Mobile-Menu: "Die Werke" und "Das Atelier" getauscht. Neue Reihenfolge: Das Handwerk → Das Atelier → Die Werke → Anfrage.

---

### [2026-02-21] – Kontaktformular: Custom File-Input poliert
**Dateien:** public/index.html
**Was:** Datei-Upload-Button neu gestaltet
**Details:** Native file-input durch custom Pattern ersetzt: verstecktes Input + styled Label als Button. Hover-State orange, aria-describedby, Filename-Display live via JS.

---

### [2026-02-21] – Kontakt-Section: Rechtstext-Gate entfernt, Formular direkt sichtbar
**Dateien:** public/index.html
**Was:** UX verbessert – kein Legaltext-Blocker mehr vor dem Formular
**Details:** #kontakt-info Block mit 6 Absätzen Legaltext entfernt; Formular direkt sichtbar; neues Akkordeon "Buchungshinweise & Stornoregeln" nach dem Formular.

---

### [2026-02-21] – Handwerk-Section: Abstand vor Signatur reduziert
**Dateien:** public/index.html
**Was:** Whitespace zwischen Philosophie-Zeilen und Signatur halbiert
**Details:** #philosophy-grid margin-bottom von mb-12 md:mb-20 auf mb-6 md:mb-10

---

### [2026-02-21] – Mobile Hardening: JS-Bug, Heading-Overflow, Portfolio-Grid, Formular-UX
**Dateien:** public/index.html
**Was:** 5 mobile Bugs behoben
**Details:**
  1. ReferenceError: `const form` vor dem `if (form && submitBtn)` Block hinzugefügt
  2. Handwerk-Overflow auf <768px: white-space: normal !important + clamp(2.25rem,11vw,3rem)
  3. Portfolio showcase-row: `.showcase-row > div { width: 100% !important }` für mobile
  4. inputmode="decimal" auf Größe-Feld
  5. autocomplete-Attribute auf Formular-Feldern

---

### [2026-02-21] – Lenis Smooth Scroll integriert & wieder revertiert
**Dateien:** public/index.html
**Was:** Smooth Scroll getestet (anschließend rückgängig gemacht)
**Details:** Lenis 1.1.14 via CDN, GSAP-Ticker-Integration, ScrollTrigger-Sync. Wegen Kompatibilitätsproblemen revertiert.

---

### [2026-02-21] – Quote-Section: Tattoo-Nadel-Effekt (SVG Stroke / Needle Reveal)
**Dateien:** public/index.html
**Was:** Quote-Animation komplett neu als Nadel-Enthüllung
**Details:**
  1. .quote-word Spans → .quote-line/.quote-reveal Divs
  2. Hintergrund: direkt dunkelgrün (#203D36), Text creme (#F7EDC2)
  3. Nadel-Dot (#quote-needle): 9px orange Kugel mit Glow
  4. clip-path inset(0 100% 0 0)→inset(0 0% 0 0) pro Zeile
  5. Nadel bewegt sich synchron (Carriage-Return zwischen Zeilen)
  6. Underline draw-in nach Zeile 3, Ink-Ringe nach Abschluss

---

### [2026-02-21] – Signatur-Block: Spacing-Fix & Bolder Design
**Dateien:** public/index.html
**Was:** Signatur prominenter und eleganter gestaltet
**Details:**
  1. Section-Padding: py-24/py-40 → pt-24/pt-40 + pb-10/pb-14
  2. "Permanente Handschrift" als schmale Label-Zeile (opacity 0.45, letter-spacing 0.38em)
  3. Trennlinie: oranger Verlauf (transparent → orange → transparent)
  4. "Theresa"-SVG: font-size 48→108, viewBox 300x120→560x148, letter-spacing -3

---

### [2026-02-21] – Signatur-Block: Handgezeichnete Linie + GSAP Scroll-Animation
**Dateien:** public/index.html
**Was:** Organische Squiggle-Linien unter Signatur mit Scroll-Animation
**Details:**
  1. Zwei SVG-Squiggle-Pfade hinter "Theresa" (Bezier-Kurven, organisch)
  2. Hauptlinie: stroke-width 1.3, opacity 0.18; Echo: stroke-width 0.65, opacity 0.10
  3. GSAP Timeline: Label → Divider-Linie → Squiggle-Draw-In → Text-Fade
  4. Trigger: top 82%, play once

---

### [2026-02-21] – Neues mobiles Hero-Bild: Rubens mit botanischen Fine-Line-Tattoos
**Dateien:** public/index.html, public/images/hero/rubens-mobile-v1-botanical.webp
**Was:** Separate mobile Hero-Version mit dezenten botanischen Tattoos
**Details:** `<source media="(max-width: 767px)">` auf rubens-mobile-v1-botanical.webp geändert. Generiert via fal.ai Nano Banana Pro image-to-image. 1536×2752px, 490KB WebP. Desktop-Bild bleibt rubens_tattoo_v1_florals.png.

---

### [2026-02-21] – Squiggle-Linie prominenter + scroll-scrubbed + orange Akzentfarbe
**Dateien:** public/index.html
**Was:** Squiggle-Animation intensiver und organischer
**Details:**
  1. sig-squiggle: Farbe dunkelgrün → orange, stroke-width 2.5→3.2, opacity 0.4→0.72
  2. sig-squiggle-2: stroke-width 1.2→1.6, opacity 0.22→0.3
  3. GSAP aufgeteilt: Label/Divider/Text play-once; Squiggles als separater scrub-ScrollTrigger
  4. scrub: 1.5 (Linie 1) und scrub: 2.2 (Linie 2) für organischen Effekt

---

### [2026-02-21] – Neue Prozess-Section (#9): "Dein Weg zum eigenen Tattoo"
**Dateien:** public/index.html
**Was:** Neue Section zwischen Gutscheine und Kontakt – erklärt den 4-stufigen Ablauf
**Details:** Section id="prozess" eingefügt vor #gutscheine. Vier Schritte im I/II/III/IV Philosophy-Stil: Anfrage → Gespräch → Termin → Das Tattoo. Hintergrund burgund, Raster Nummer|Titel|Text. GSAP ScrollTrigger fade-in. Kontakt-Nummer von 04 → 05. Nav-Links in Desktop + Mobile ergänzt.

---

### [2026-02-21] – Neue 404-Seite im Brand-Design
**Dateien:** public/404.html (neu)
**Was:** Eigene 404-Fehlerseite mit Gunst & Tinte Branding
**Details:** public/404.html erstellt. Hintergrund burgund, große dekorative "404", Headline "Verloren in der Tinte", CTA zur Startseite. Gleiche Nav und Footer wie Hauptseite. GSAP fade-in Animation.

---

### [2026-02-21] – Neue Legal-Pages: Impressum, Datenschutz, AGB
**Dateien:** public/impressum.html (neu), public/datenschutz.html (neu), public/agb.html (neu)
**Was:** Drei rechtliche Unterseiten im Brand-Design mit Nav und Footer
**Details:** Alle drei Seiten: dunkelgrün Hintergrund, Casta-Überschriften, Space Mono Body, gleiche Nav (Anker zu /#section) und Footer wie Hauptseite. Platzhalter-Inhalte eingesetzt – werden durch Kundin/Anwalt befüllt. Footer-Links aus index.html zeigen bereits auf /impressum, /datenschutz, /agb.

---

### [2026-02-21] – Footer-Logo: Größe auf allen Seiten korrigiert
**Dateien:** public/index.html, public/404.html, public/impressum.html, public/datenschutz.html, public/agb.html
**Was:** Logo im Footer war kaum sichtbar
**Details:** SVG hat A4-ViewBox (841×595px), Logotext sitzt nur im mittleren Drittel → effektiv ~15px sichtbar bei 60px Höhe. Fix: `.footer-logo` height 60px → 200px (Desktop), → 150px (≤1024px) auf allen 5 Seiten.

---

### [2026-02-21] – CSS-Korrekturen: Drop-Cap, Contact-Links, Select-Arrow, Row4-Aspect-Ratio
**Dateien:** public/index.html
**Was:** Vier gezielte CSS-Anpassungen für bessere Mobile-Darstellung und UX
**Details:**
- Edit 1 (nach Z. 375): Neue `@media (max-width: 767px)` Regel für `.drop-cap::first-letter` – reduziert font-size auf 2.5rem, padding-top 6px, padding-right 8px auf Mobilgeräten.
- Edit 2 (Z. 764–777): `.contact-link` – font-size 11px → 13px, padding 1rem 0 → 0.875rem 0, min-height: 44px ergänzt (bessere Touch-Targets).
- Edit 3 (Z. 1103–1115): `.tattoo-select` – padding 0.4rem 0 → 0.4rem 1.5rem 0.4rem 0, `-webkit-appearance: none` hinzugefügt, orangener SVG-Pfeil-Hintergrund via data-URI als Custom-Dropdown-Arrow.
- Edit 4 (nach Z. 1117): Neue `@media (max-width: 767px)` Regel für `#row4 .showcase-item[style*="21/9"]` – erzwingt aspect-ratio 16/9 auf Mobil.

---

### [2026-02-21] � Quote-Animation: Mobile = zeitbasiert, Desktop = scroll-scrub
**Dateien:** public/index.html
**Was:** Quote-Section-Animation auf Mobilgeraeten von scroll-scrub auf zeitbasierte Wiedergabe umgestellt
**Details:** Der alte  ScrollTrigger-Block (Z. 2305-2383) wurde durch eine if/else-Verzweigung ersetzt. Auf Mobilgeraeten (isMobile) laeuft eine GSAP-Timeline mit paused:true und wird per ScrollTrigger.create (once:true, start 'top 65%') einmalig abgespielt � kein Pin, kein Scrub, keine iOS-Freeze-Gefahr. MOB_SEG=0.5s/Zeile, MOB_GAP=0.12s Pause. Desktop-Pfad bleibt unveraendert (pin + scrub, end '+=200%'). reduced-motion-Check bleibt am Ende erhalten.

---

### [2026-02-21] – Reactive isMobile + mobile-safe parallax guards
**Dateien:** public/index.html
**Was:** isMobile reaktiv gemacht und parallax-Animationen auf Mobilgeraeten abgesichert
**Details:**
- Edit 1 (Z. 2189): `const isMobile` zu `let isMobile` geaendert; neuer resize-Listener mit `{ passive: true }` prueft Breakpoint-Crossing (768px) und ruft `ScrollTrigger.refresh()` auf, wenn Desktop <-> Mobile gewechselt wird.
- Edit 2 (Z. 2449-2452): `.portrait-img` parallax – `yPercent` jetzt `isMobile ? -6 : -15`, `scrub` jetzt `isMobile ? 2 : true` fuer weicheres Scrubbing auf Mobilgeraeten.
- Edit 3 (Z. 2540-2547): `#atelier-forest-bg` parallax komplett in `if (\!isMobile)` eingeschlossen – verhindert yPercent+scale-Animation auf Mobilgeraeten.

---

### [2026-02-21] – Mobile Menu: GSAP try/catch Fallbacks
**Dateien:** public/index.html
**Was:** Robustheit des Mobile Menus verbessert falls GSAP nicht lädt
**Details:**
- openMenu (Z. ~2213): `gsap.fromTo(menuLinks, ...)` in try/catch eingeschlossen; catch-Zweig setzt opacity:1 und transform:none direkt per Inline-Style, damit Links sofort sichtbar sind.
- closeMenu (Z. ~2226): `gsap.to(menuLinks, ...)` in try/catch eingeschlossen; catch-Zweig setzt opacity:0 und display:none sofort, damit das Menü auch ohne GSAP schließt.

---

### [2026-02-21] – Fix Desktop Scroll-Bounce + Mobile Animationen aktiviert
**Dateien:** public/index.html
**Was:** Desktop-Scroll-Bounce beim ersten Scrollen behoben; GSAP-Animationen auf Mobile reaktiviert
**Details:**
- Z. 276: `scroll-behavior: smooth` → `scroll-behavior: auto` (behebt GSAP-Pin-Konflikt auf Desktop)
- Z. ~2281: JS Smooth-Scroll-Handler für Anchor-Links hinzugefügt (`scrollIntoView({ behavior: 'smooth' })`)
- Z. ~2477: `#section-num-alt` parallax in `if (!isMobile)` eingeschlossen (scrub vermeidet iOS-Freeze)
- Z. ~2513: Sig-Squiggles scrub in `if (!isMobile)` eingeschlossen; Mobile-Zweig nutzt `onEnter`-Zeitanimation statt scrub
- Z. ~2615: `#kontaktHeroImage`-Parallax bleibt Desktop-only; `#infoCol`- und `#formCol`-Fade-Ins jetzt auch auf Mobile aktiv
- Z. ~2677: KILL-ALL-Block ersetzt durch minimales Cleanup (nur Needle opacity:0 zurücksetzen); alle toggleActions-Animationen laufen jetzt auf Mobile (philosophy, prozess, atelier, werke, footer, sig, kontakt-form)

---

### [2026-02-21] – Mobile: Featured-Text im Portfolio ausgeblendet
**Dateien:** public/index.html
**Was:** Text neben dem Fledermaus-Tattoo auf Mobile ausgeblendet, Bild zeigt korrekt
**Details:** In der `@media (max-width: 768px)` Regel für `#featured-section`: `#featured-text` auf `display: none` gesetzt; `gap` auf 0 reduziert; `max-height: none` und `aspect-ratio: 4/5` für das Bild-Div erzwungen, damit das Fledermaus-Bild vollständig sichtbar ist (ca. Z. 1360–1378)

---

### [2026-02-21] – Nav: Glassmorphic-Element entfernt, Hero-Vignette hinzugefügt
**Dateien:** public/index.html
**Was:** Glassmorphic-Nav durch transparente Nav mit Dunkel-Vignette oben ersetzt; Nav-Text lesbar
**Details:**
- Nav HTML: `backdrop-blur-md bg-white/5 border-b border-white/10` Klassen entfernt
- CSS: `#main-nav { background: transparent; border-bottom: none }` hinzugefügt
- CSS: `.nav-transition` vereinfacht (nur background-color + box-shadow)
- CSS: `.nav-link` erhält `text-shadow` für Lesbarkeit über Bild; entfernt bei `nav-scrolled`
- CSS: `.hero-top-vignette` — Gradient von rgba(20,8,15,0.72) nach transparent (Höhe 220px)
- CSS: `#mobile-menu-btn` Farbe cream/dunkelgrün via CSS statt nur JS
- HTML: `<div class="hero-top-vignette">` als erstes Kind der Hero-Section eingefügt
- JS: Überflüssige `bg-white/5`/`backdrop-blur-md` add/remove Logik aus scroll-handler entfernt

---

### [2026-02-21] – Nav-Text weiß + mobile "01" Clipping-Fix
**Dateien:** public/index.html
**Was:** Nav-Links auf Weiß geändert (statt Creme) für besseren Kontrast; "01" wird auf Mobile nicht mehr vom Hero abgeschnitten
**Details:**
- CSS `.nav-link`: text-shadow verstärkt auf `0 1px 12px rgba(0,0,0,0.9), 0 2px 24px rgba(0,0,0,0.6)`
- HTML Nav-Links: `text-[#F7EDC2]` → `text-white` (Creme hatte zu ähnliche Töne wie das Barock-Gemälde)
- JS Scroll-Handler: Toggle-Logik von `text-[#F7EDC2]` auf `text-white` aktualisiert
- CSS Mobile `@media (max-width: 767px)`: `.section-number-oversized { top: 0 !important }` — verhindert, dass das "01"-Element mit `top: -40px` über den `#handwerk`-Div-Rand (overflow:hidden) hinausragt und vom Hero verdeckt wird

---

### [2026-02-21] – Projekt-Cleanup & Handover-Dokumentation
**Dateien:** docs/HANDOVER-WEGEL.md (neu), docs/AUDIT.md, CHANGELOG.md, _temp/ (neu)
**Was:** Root-Verzeichnis aufgeräumt, AUDIT-Status aktualisiert, vollständiges Handover-Dokument für wegel.cloud erstellt
**Details:**
- Root-Cleanup: Debug-Screenshots (*.png), Test-Webps und leere Dateien in `_temp/` verschoben
- `transform.py` nach `scripts/` verschoben, `Änderungen.txt` nach `docs/kundin/` verschoben
- `docs/HANDOVER-WEGEL.md` erstellt: Schritt-für-Schritt-Anleitung für Formspree-Integration, Platzhalter-Übersicht für alle 3 Rechtsdokumente, SEO Meta-Tags Code-Snippet, Favicon-Anforderungen, Vercel-Deployment-Hinweise
- `docs/AUDIT.md`: 3 erledigte Aufgaben markiert (Prozess-Section, Gutschein-Button, 404-Seite), Gesamtbewertung 72→82/100, Verweis auf HANDOVER-WEGEL.md ergänzt
- Executive Summary aktualisiert: 5 erledigte Items dokumentiert

---

### [2026-02-22] – Mobile quote text font-size media query
**Dateien:** public/index.html
**Was:** Responsive Schriftgröße für #quote-text auf mobilen Geräten
**Details:** Nach Zeile 467 (schließende } von .underline-path) eingefügt: @media (max-width: 767px) { #quote-text { font-size: clamp(20px, 6vw, 36px) !important; } } (neue Zeilen 469-473)

---

### [2026-02-22] – Anfahrt-Block im Kontaktbereich ergänzt
**Dateien:** public/index.html
**Was:** Adress- und Hinweisblock unter den Kontaktlinks in #infoCol hinzugefügt
**Details:** (1) CSS: Nach `.contact-link svg { flex-shrink: 0; }` (~Zeile 830) vier neue Klassen eingefügt: `.anfahrt-block`, `.anfahrt-label` (Casta, orange, uppercase), `.anfahrt-address` (flex, Space Mono, 13px, opacity 0.72), `.anfahrt-hinweis` (Space Mono, 11px, opacity 0.45). (2) HTML: In #infoCol nach dem schließenden `</div>` der `.contact-links` einen `.kontakt-divider` sowie einen `.anfahrt-block` mit Pin-Icon-SVG, Adresse (Propsteihof 3, 36100 Petersberg) und Einbahnstraßen-Hinweis eingefügt.

---
