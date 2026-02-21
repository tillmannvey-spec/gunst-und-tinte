# Projekt: Gunst und Tinte – Claude Anweisungen

## Changelog-Pflicht
Bei JEDER Änderung an Website-Dateien (insbesondere `public/index.html`, CSS, Bilder) MUSS ein Eintrag am Ende von `CHANGELOG.md` hinzugefügt werden.

Format pro Eintrag:
```
### [DATUM] – [KURZBESCHREIBUNG]
**Dateien:** datei1, datei2
**Was:** Kurzbeschreibung
**Details:** was genau geändert wurde (inkl. Zeilennummern wenn möglich)

---
```

## Technisches Setup
- Projekt-Typ: Statische HTML One-Pager Website
- Entry Point: `public/index.html`
- Server starten: `npx --yes serve@14.2.5 -l 3000 public`
- Schriftarten: Casta (Überschriften), Space Mono (Fließtext)
- Animationen: GSAP + ScrollTrigger (via CDN)

## Schriftarten-Regel (Kundenvorgabe)
- **Überschriften**: Casta (font-family: 'Casta')
- **Fließtext**: Space Mono (font-family: 'Space Mono')
- Keine anderen Schriftarten verwenden

## Wichtige Bereiche in index.html
- Hero Section: Logo + Sonne Animation
- Philosophie/Quote Section
- "Das Handwerk" Section
- Portfolio/Stilrichtungen Section ("Die Werke")
- "Das Atelier" Section
- Kontaktformular Section (ehemals "Deine Zeremonie", jetzt "Der Weg zu deinem Tattoo")
