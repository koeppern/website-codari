import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Für Kandidaten - CODARI",
  description:
    "Erkunden Sie Ihre Karrieremöglichkeiten in dynamischen und zukunftsorientierten Branchen.",
};

export default function FurKandidatenPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[50vh] items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/images/karriere.jpg)" }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            ZUKUNFT &amp; KARRIERE
          </h1>
          <p className="mt-4 text-xl opacity-90">
            Erkunden Sie Ihre Karrieremöglichkeiten in dynamischen und zukunftsorientierten
            Branchen
          </p>
        </div>
      </section>

      {/* Fachkräftemangel */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-3xl font-bold">Ihre Fähigkeiten, unser Netzwerk</h2>
          <p className="text-lg text-muted">
            Branchen wie Pharmazie, IT, Maschinenbau und Elektrotechnik erleben einen
            anhaltenden Fachkräftemangel. Dies bietet qualifizierten Fachkräften
            hervorragende Möglichkeiten, ihre Karriere aktiv zu gestalten und in Positionen
            zu wechseln, die ihren Fähigkeiten und Ambitionen entsprechen.
          </p>
        </div>
      </section>

      {/* Innovation & Lead Sections */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-2 text-sm font-semibold italic text-primary">Innovate</p>
              <h3 className="mb-4 text-2xl font-bold">
                Wissenschaft treibt die Innovation voran
              </h3>
              <p className="text-muted">
                Angesichts des rasanten technologischen Fortschritts und der digitalen
                Transformation sind Fachkräfte in den MINT-Bereichen weltweit gefragt. Nutzen
                Sie Ihre Expertise, um Teil der nächsten technologischen Revolution zu werden.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <p className="mb-2 text-sm font-semibold italic text-primary">Lead</p>
              <h3 className="mb-4 text-2xl font-bold">
                Fortschritt durch Fach- &amp; Führungskräfte
              </h3>
              <p className="text-muted">
                Die aktuelle Marktlage ermöglicht es Fachkräften, die Jobsuche und ihre
                Karrieren aktiv zu gestalten. Globale Chancen bieten ein Sprungbrett in eine
                sichere berufliche Zukunft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Bereit für den nächsten Karriereschritt?</h2>
        <p className="mb-8 text-lg opacity-80">
          Entdecken Sie unsere aktuellen Stellenanzeigen und finden Sie Ihre nächste
          Herausforderung.
        </p>
        <a
          href="https://careers.codari.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
        >
          Stellenanzeigen
        </a>
      </section>
    </>
  );
}
