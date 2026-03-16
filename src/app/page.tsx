import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center bg-primary-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="mb-2 text-6xl font-bold tracking-tight text-primary md:text-8xl">
            CODARI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted md:text-2xl">
            MARKE STÄRKEN &amp; FACHKRÄFTE SICHERN
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Nachhaltige Unterstützung in den Bereichen Employer Branding, HR- und
            Recruitment-Services in der DACH-Region.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/kontakt"
              className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Kontakt
            </Link>
            <Link
              href="/recruitment-services"
              className="rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-around gap-8 px-6 md:flex-row">
          <div className="text-center">
            <p className="text-5xl font-bold">120+</p>
            <p className="mt-2 text-lg opacity-80">Vermittelte Fachkräfte</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold">1500+</p>
            <p className="mt-2 text-lg opacity-80">Kontaktierte Unternehmen</p>
          </div>
        </div>
      </section>

      {/* Gemeinsam zum Erfolg */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Gemeinsam zum Erfolg
          </h2>
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-muted">
            Wir helfen Ihnen, nicht nur Mitarbeitende zu finden, sondern auch nachhaltig zu
            binden. Durch unsere Kombination aus strategischer Personalberatung und
            Employer-Branding-Expertise unterscheiden wir uns von klassischen
            Personalvermittlungen.
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Recruitment */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-bg">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold">Recruitment Services</h3>
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
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-bg">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold">Employer Branding</h3>
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

      {/* Prozess */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-16 text-center text-3xl font-bold">So starten wir zusammen</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Kostenloses Beratungsgespräch",
                desc: "Lernen Sie uns kennen und teilen Sie Ihre Anforderungen mit uns in einem unverbindlichen Erstgespräch.",
              },
              {
                step: "02",
                title: "Service-Auswahl",
                desc: "Gemeinsam wählen wir die passenden Services aus unserem Portfolio für Ihre individuellen Bedürfnisse.",
              },
              {
                step: "03",
                title: "Detaillierte Analyse",
                desc: "Wir analysieren Ihre Anforderungen im Detail und entwickeln eine maßgeschneiderte Strategie.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/handshake.jpg"
              alt="Geschäftspartner beim Handschlag"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="mb-6 text-3xl font-bold">
              Ihr Vorhaben, unser Netzwerk
            </h2>
            <p className="text-lg text-muted">
              Wir sind spezialisiert auf die Vermittlung von Fach- und Führungskräften in den
              Bereichen IT, Gesundheitswesen, Ingenieurswesen und Executive Search für
              Festanstellungen, sowie projektbasierte Einsätze. Ob Sie dauerhafte Fachkräfte
              oder flexible Projektunterstützung suchen, wir verbinden Sie mit den
              Spezialisten, die Ihre Unternehmensvision voranbringen.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
