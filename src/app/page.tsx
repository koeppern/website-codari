import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Employer Branding & Recruitment DACH",
  description:
    "CODARI verbindet Employer Branding mit Recruitment — Fachkräfte finden, binden und Ihre Arbeitgebermarke stärken. Jetzt beraten lassen.",
  alternates: { canonical: "/" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CODARI",
  url: "https://codari.de",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center">
        <Image
          src="/images/hero-poster.jpg"
          alt="Professionelles Teammeeting in modernem Büro — CODARI Employer Branding"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <h1
            className="animate-hero-title mb-2 text-7xl font-normal tracking-tight text-foreground md:text-9xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CODARI.
          </h1>
          <p className="animate-hero-sub mx-auto mt-6 max-w-2xl text-xl text-muted md:text-2xl">
            Nachhaltige Unterstützung in den Bereichen Employer Branding, HR- und
            Recruitment-Services in der DACH-Region.
          </p>
          <div className="animate-hero-cta mt-8">
            <Link
              href="#services"
              className="btn-primary"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* Marke stärken & Fachkräfte sichern */}
      <section className="reveal-section border-t border-border bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <h2
              className="heading-upper mb-6 text-3xl tracking-tight text-foreground md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              MARKE STÄRKEN &amp; FACHKRÄFTE SICHERN
            </h2>
            <p className="text-lg text-muted">
              Wir helfen Ihnen, nicht nur <strong className="text-foreground">Mitarbeitende zu finden</strong>,
              sondern auch <strong className="text-foreground">nachhaltig zu binden</strong>. Durch unsere
              Kombination aus <strong className="text-foreground">strategischer Personalberatung</strong> und{" "}
              <strong className="text-foreground">Employer-Branding-Expertise</strong> unterscheiden wir uns
              von klassischen Personalvermittlungen.
            </p>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="stat-value text-4xl font-normal text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  120+
                </p>
                <p className="mt-1 text-sm text-muted">Vermittelte Fachkräfte</p>
              </div>
              <div>
                <p className="stat-value text-4xl font-normal text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  1500+
                </p>
                <p className="mt-1 text-sm text-muted">Kontaktierte Unternehmen</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/handshake.jpg"
              alt="Geschäftspartner beim Handschlag nach erfolgreicher Personalvermittlung"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="reveal-section border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Recruitment */}
            <div className="card-interactive rounded-2xl border border-border bg-surface p-8">
              <h3
                className="mb-3 text-2xl font-normal text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Recruitment Services
              </h3>
              <p className="mb-6 text-muted">
                Spezialisiert auf die Vermittlung von Fach- und Führungskräften in den
                Bereichen IT, Gesundheitswesen, Ingenieurswesen und Executive Search für
                Festanstellungen sowie projektbasierte Einsätze.
              </p>
              <Link
                href="/recruitment-services"
                className="link-arrow inline-flex items-center font-semibold text-primary hover:underline"
              >
                Mehr erfahren
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Employer Branding */}
            <div className="card-interactive rounded-2xl border border-border bg-surface p-8">
              <h3
                className="mb-3 text-2xl font-normal text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Employer Branding
              </h3>
              <p className="mb-6 text-muted">
                Von der Employer Value Proposition (EVP) über gezielte
                Kommunikationskampagnen bis hin zur Mitarbeiterentwicklung — maßgeschneiderte
                Strategien für Ihre Arbeitgebermarke.
              </p>
              <Link
                href="/employer-branding"
                className="link-arrow inline-flex items-center font-semibold text-primary hover:underline"
              >
                Mehr erfahren
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gemeinsam zum Erfolg */}
      <section className="reveal-section border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="heading-upper mb-16 text-center text-3xl text-foreground md:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            GEMEINSAM ZUM ERFOLG
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Kontaktaufnahme",
                desc: "Lernen Sie uns kennen und teilen Sie Ihre Anforderungen mit uns in einem unverbindlichen Erstgespräch.",
              },
              {
                step: "02",
                title: "Beratungsgespräch & Service Auswahl",
                desc: "Gemeinsam wählen wir die passenden Services aus unserem Portfolio für Ihre individuellen Bedürfnisse.",
              },
              {
                step: "03",
                title: "Detaillierte Analyse",
                desc: "Wir analysieren Ihre Anforderungen im Detail und entwickeln eine maßgeschneiderte Strategie.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="step-circle mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface text-2xl font-normal text-primary transition-colors">
                  {item.step}
                </div>
                <h3
                  className="mb-3 text-xl font-normal text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/kontakt" className="btn-primary">
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
