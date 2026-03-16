import type { Metadata } from "next";
import Image from "next/image";
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
    title: "CODARI 360\u00B0",
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
      <section className="relative flex min-h-[50vh] items-center">
        <Image
          src="/images/hero-home.jpg"
          alt="Employer Branding"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <h1
            className="max-w-3xl text-4xl font-normal tracking-tight text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Employer Branding
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-muted">
            Der Erfolgsfaktor für Unternehmen mit Vision
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent/80"
          >
            Kontakt
          </Link>
        </div>
      </section>

      {/* Service Portfolio */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2
            className="mb-8 text-center text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Unser Serviceportfolio
          </h2>
          <p className="mb-12 text-center text-muted">
            Das Serviceportfolio von CODARI erfüllt individuelle Geschäftsanforderungen und
            bietet branchenführende Lösungen.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {servicePortfolio.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4"
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
                <span className="text-sm text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Main Services */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {mainServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <h3
                  className="mb-4 text-xl font-normal text-primary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.title}
                </h3>
                <p className="text-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface py-16 text-center">
        <h2
          className="mb-4 text-3xl font-normal text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Stärken Sie Ihre Arbeitgebermarke
        </h2>
        <p className="mb-8 text-lg text-muted">
          Lassen Sie uns gemeinsam Ihre Employer-Branding-Strategie entwickeln.
        </p>
        <Link
          href="/kontakt"
          className="inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent/80"
        >
          Kostenloses Beratungsgespräch
        </Link>
      </section>
    </>
  );
}
