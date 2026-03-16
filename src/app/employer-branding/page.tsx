import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Employer Branding - CODARI",
  description:
    "Maßgeschneiderte Employer-Branding-Strategien und authentische Markenbotschaften.",
};

const servicePortfolio = [
  "Employer Branding Audits, Kampagnen und Maßnahmen",
  "Methoden & Prozesse für das Leistungsmanagement",
  "Schaffung von Dimensionen für die Messbarkeit der Ergebnisse",
  "Outsourcing",
  "Vergütungs- & Vorteilsmanagement",
  "Umfragen für Mitarbeiter & Führungskräfte",
  "Onboarding Prozesse & Veranstaltungen",
  "Personalentwicklungsmaßnahmen",
  "Schulung & Entwicklung von Führungskräften",
];

const mainServices = [
  {
    title: "Prozesseinführung",
    desc: "Wir sind spezialisiert auf die Konzeption und Implementierung maßgeschneiderter HR-Prozesse. Vom analytischen Review bis zur optimierten Verfahrensumsetzung begleiten wir Sie.",
  },
  {
    title: "CODARI 360°",
    desc: "Unsere Rundum-Sorglos-Lösung ermöglicht es Ihnen, sich auf Ihr Kerngeschäft zu konzentrieren. Wir übernehmen administrative Aufgaben und steigern die Mitarbeiterzufriedenheit.",
  },
  {
    title: "Personal-Entwicklung",
    desc: "Maßgeschneiderte Förderungs- und Weiterbildungslösungen zur Ausschöpfung des vollen Potenzials Ihrer Mitarbeiter und zur Etablierung einer nachhaltigen Lernkultur.",
  },
  {
    title: "Audits & Strategie",
    desc: "Ganzheitliche Unterstützung von der Analyse bis zur Umsetzung und Auswertung. Fokus auf Kommunikationsmaßnahmen und Markt-Sichtbarkeit Ihrer Arbeitgebermarke.",
  },
];

export default function EmployerBrandingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[50vh] items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-home.jpg)" }}
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Employer Branding — der Erfolgsfaktor für Unternehmen mit Vision
          </h1>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
          >
            Kontakt
          </Link>
        </div>
      </section>

      {/* Service Portfolio */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Unser Serviceportfolio</h2>
          <p className="mb-12 text-center text-muted">
            Das Serviceportfolio von CODARI erfüllt individuelle Geschäftsanforderungen und
            bietet branchenführende Lösungen.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {servicePortfolio.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border p-4"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {mainServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="mb-4 text-xl font-bold text-primary">{service.title}</h3>
                <p className="text-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">
          Stärken Sie Ihre Arbeitgebermarke
        </h2>
        <p className="mb-8 text-lg opacity-80">
          Lassen Sie uns gemeinsam Ihre Employer-Branding-Strategie entwickeln.
        </p>
        <Link
          href="/kontakt"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
        >
          Kostenloses Beratungsgespräch
        </Link>
      </section>
    </>
  );
}
