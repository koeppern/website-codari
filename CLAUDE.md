# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Codari.de website rebuild — a corporate website for CODARI GbR, a consulting firm specializing in Employer Branding, HR, and Recruitment Services in the DACH region. Originally built on Zyro/Astro, now rebuilt as a Next.js application deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 with custom theme (primary purple #673de6)
- **Deployment:** Vercel (auto-deploy on push to main)
- **Repository:** https://github.com/koeppern/website-codari

## Commands

```bash
npm run dev          # Dev server on localhost:3000
npm run build        # Production build (all pages are statically generated)
npm run lint         # ESLint
```

## Architecture

All pages are **Server Components** (statically generated at build time) — no dynamic data, no API routes. Only the Header component uses `"use client"` for mobile navigation interactivity.

### Pages

| Route | Content |
|-------|---------|
| `/` | Home — Hero, Stats, Services, Process, CTA |
| `/recruitment-services` | Services overview with testimonials |
| `/fur-unternehmen` | For companies — IT service portfolio, contact form |
| `/fur-kandidaten` | For candidates — career opportunities |
| `/employer-branding` | Employer Branding services |
| `/uber-uns` | About — company history |
| `/social-corporate-responsibility` | CSR program |
| `/kontakt` | Contact page with form (non-functional, with hint) |
| `/impressum` | Legal notice |
| `/datenschutzerklarung` | Privacy policy |

### Shared Components

- `src/components/Header.tsx` — Sticky header with responsive nav, dropdown for HR Services
- `src/components/Footer.tsx` — Footer with contact info, locations, link sections

### Images

All images in `public/images/` — downloaded from the original site (Unsplash + Zyro CDN).

## Design

- Primary: `#673de6` (purple), Dark: `#5025d1`, Light: `#8c85ff`
- Background accents: `#f3f0ff` (primary-bg)
- Theme defined in `src/app/globals.css` via `@theme inline`

## Contact Forms

Forms on `/kontakt` and `/fur-unternehmen` are **not functional** — they display a hint to contact via email (info@codari.de) or phone (+49 2151 6476293). The submit buttons are disabled.
