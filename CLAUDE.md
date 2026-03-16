# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Nachbau der [codari.de](https://codari.de) Website — Employer Branding & HR Beratung, DACH-Region. Ursprünglich Zyro/Astro, jetzt Next.js auf Vercel.

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/postcss`) mit Custom Theme in `globals.css`
- Deployment: Vercel (Auto-Deploy bei Push auf `main`)

## Commands

```bash
npm run dev      # Dev-Server (Port 3000)
npm run build    # Production Build (statisch)
npm run lint     # ESLint (Core Web Vitals + TypeScript)
```

## Architecture

Alle Seiten sind **Server Components** (statisch generiert) — kein dynamisches Data Fetching, keine API Routes. Nur `Header.tsx` nutzt `"use client"` für Mobile-Navigation.

**Layout:** Einziges Root-Layout (`src/app/layout.tsx`) mit Header + Footer.

**Components:** `src/components/` — flache Struktur:
- `Header.tsx` — Client Component mit Mobile-Menü und HR-Services-Dropdown
- `Footer.tsx` — Server Component mit Kontaktdaten und Standorten

**Styling:** Tailwind Utility Classes inline. Custom Farben via `@theme inline` in `globals.css`:
- Primary: `#673de6` (Purple), Dark: `#5025d1`, Light: `#8c85ff`
- Background: `primary-bg` (`#f3f0ff`)

**Bilder:** `public/images/`, via `next/image` mit `fill` + `object-cover`.

**Path Alias:** `@/*` → `./src/*`

## Aktueller Stand

- Inhalte hardcoded in JSX, kein CMS
- Kontaktformulare (`/kontakt`, `/fur-unternehmen`) sind deaktiviert — Verweis auf E-Mail/Telefon
- Nur Deutsch, kein i18n
- Keine Tests konfiguriert
