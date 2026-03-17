# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Nachbau der [codari.de](https://codari.de) Website — IT & Engineering Recruiting, DACH-Region. Next.js auf Vercel.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/postcss`) mit Custom Theme in `globals.css`
- next-intl (Zweisprachig DE/EN, Locale-Prefix `/de/...` und `/en/...`)
- Framer Motion (Scroll-Animationen via `FadeIn` Komponente)
- Deployment: Vercel (Auto-Deploy bei Push auf `main`)

## Commands

```bash
npm run dev      # Dev-Server (Port 3000)
npm run build    # Production Build (statisch)
npm run lint     # ESLint (Core Web Vitals + TypeScript)
```

## Architecture

**i18n:** next-intl mit `src/i18n/routing.ts`, `request.ts`, `navigation.ts`. Middleware in `src/middleware.ts`. Texte in `messages/de.json` und `messages/en.json`.

**Seiten:** Alle unter `src/app/[locale]/`. Server Components mit `getTranslations()` + `setRequestLocale()`.

**Layout:** Root Layout (`src/app/layout.tsx`) minimal, Locale Layout (`src/app/[locale]/layout.tsx`) mit `NextIntlClientProvider`, Header, Footer.

**Components:** `src/components/` — flache Struktur:
- `Header.tsx` — Client Component mit Mobile-Menü, Dropdown, LanguageSwitcher, GradientBorderButton
- `Footer.tsx` — Server Component mit Locale-aware Links
- `FadeIn.tsx` — Client Component, Framer Motion scroll-triggered
- `CounterAnimation.tsx` — Client Component, IntersectionObserver + rAF
- `WorldMap.tsx` — Server Component, Inline-SVG Weltkarte
- `GradientBorderButton.tsx` — Server Component, CSS gradient-border
- `LanguageSwitcher.tsx` — Client Component, DE/EN Toggle
- `ContactForm.tsx` — Client Component, deaktiviert

**Styling:** Tailwind Utility Classes inline. Custom Farben via `@theme inline` in `globals.css`:
- Primary: `#4f46e5` (Indigo 600), Dark: `#3730a3`, Light: `#818cf8`
- Accent: `#0ea5e9` (Sky 500)
- Background: `#ffffff`, Foreground: `#0f172a` (Slate 900)

**Font:** Inter (400, 500, 600, 700)

**Bilder:** `public/images/`, via `next/image` mit `fill` + `object-cover`.

**Path Alias:** `@/*` → `./src/*`

## Aktueller Stand

- Zweisprachig DE/EN mit URL-Prefix
- IT & Engineering Fokus (kein Pharma/Healthcare/Medizin)
- Kontaktformulare deaktiviert — Verweis auf E-Mail/Telefon
- SCR-Seite entfernt (301-Redirect auf Home)
- Recruitment-Services entfernt (301-Redirect auf Für Unternehmen)
- Keine Tests konfiguriert
