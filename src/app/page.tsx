import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center">
        <Image
          src="/images/hero-poster.jpg"
          alt="CODARI Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <h1
            className="mb-2 text-7xl font-normal tracking-tight text-foreground md:text-9xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CODARI.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted md:text-2xl">
            Nachhaltige Unterstützung in den Bereichen Employer Branding, HR- und
            Recruitment-Services in der DACH-Region.
          </p>
          <div className="mt-8">
            <Link
              href="#services"
              className="rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent/80"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* Marke stärken & Fachkräfte sichern */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <h2
              className="mb-6 text-3xl font-normal tracking-tight text-foreground md:text-4xl"
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
                <p className="text-4xl font-normal text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  120+
                </p>
                <p className="mt-1 text-sm text-muted">Vermittelte Fachkräfte</p>
              </div>
              <div>
                <p className="text-4xl font-normal text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  1500+
                </p>
                <p className="mt-1 text-sm text-muted">Kontaktierte Unternehmen</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/handshake.jpg"
              alt="Geschäftspartner beim Handschlag"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Recruitment */}
            <div className="rounded-2xl border border-border bg-surface p-8">
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
                className="inline-flex items-center font-semibold text-primary hover:underline"
              >
                Mehr erfahren
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Employer Branding */}
            <div className="rounded-2xl border border-border bg-surface p-8">
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
                className="inline-flex items-center font-semibold text-primary hover:underline"
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
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-16 text-center text-3xl font-normal text-foreground md:text-4xl"
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
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-surface text-2xl font-normal text-primary">
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
            <Link
              href="/kontakt"
              className="rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent/80"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
