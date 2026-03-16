# SEO-Optimierung — Offene Fragen

## Fragen an den Auftraggeber

### 1. Domain & URLs
- Wie lautet die finale Produktions-URL? (z. B. `https://codari.de` oder `https://www.codari.de`?)
  → Wird für canonical URLs, sitemap und OG-Tags benötigt. **Annahme falls keine Antwort: `https://codari.de`**

### 2. Open Graph Bild
- Gibt es ein OG-Bild (1200×630 px) für Social-Media-Previews?
  → Falls nicht, verwende ich `hero-poster.jpg` als Fallback und schneide es passend zu.
  **Annahme: Verwende vorhandenes Hero-Bild als OG-Image.**

### 3. Google Search Console / Analytics
- Ist Google Search Console eingerichtet? Falls ja: Soll ein Verifizierungs-Meta-Tag eingefügt werden?
- Soll Google Analytics / GA4 integriert werden?
  **Annahme: Keine Integration jetzt, kann später ergänzt werden.**

### 4. Kontaktformulare
- Sollen die deaktivierten Formulare (`/kontakt`, `/fur-unternehmen`) entfernt oder belassen werden?
  → Deaktivierte Formulare schaden SEO nicht direkt, aber leere Formulare können die UX-Signale verschlechtern.
  **Annahme: Belassen wie ist.**

### 5. URL-Umlaute
- `/uber-uns` statt `/ueber-uns`, `/fur-kandidaten` statt `/fuer-kandidaten`, `/datenschutzerklarung` statt `/datenschutzerklaerung`
  → Die aktuellen URLs ohne Umlaute sind SEO-technisch OK, aber Redirects von den alternativen Schreibweisen wären sinnvoll.
  **Annahme: Redirects für alternative Schreibweisen einrichten.**
