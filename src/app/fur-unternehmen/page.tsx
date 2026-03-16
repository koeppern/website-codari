import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Für Unternehmen - CODARI",
  description:
    "Ganzheitliche Unterstützung in den Bereichen Personal & Employer Branding für Unternehmen.",
};

const itServices = [
  "Artificial Intelligence & Machine Learning",
  "Softwareentwicklung",
  "Cloud Computing",
  "DevOps Engineering",
  "Cybersecurity",
  "Augmented Reality (AR) & Virtual Reality (VR)",
  "Systemadministration",
  "Internet of Things (IoT)",
  "Data Science & Big Data",
  "IT Architektur & Design",
  "Support & Helpdesk",
  "Quality Assurance & Testing",
];

export default function FurUnternehmenPage() {
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
            WACHSTUM &amp; EXPERTISE
          </h1>
          <p className="mt-4 text-xl opacity-90">Ihr Vorhaben, unsere Netzwerke</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-lg text-muted">
            Wir bieten Ihnen die Vermittlung von Fach- und Führungskräften in den Bereichen
            IT, Pharma, Engineering und Executive Search für Festanstellungen und
            projektbasierte Einsätze. Durch präzise Vorqualifizierung und perfektes Matching
            finden wir die passenden Spezialisten für Ihr Unternehmen.
          </p>
        </div>
      </section>

      {/* Festanstellung & Freelancer */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Festanstellung
            </h2>
            <h3 className="mb-4 text-2xl font-bold">Fachwissen verankern</h3>
            <p className="text-muted">
              Verstärken Sie Ihr Team durch gezielt ausgewählte Spezialisten. Wir legen Wert
              auf Kulturpassung und nutzen fortschrittliche Matching-Technologien sowie
              Branchenkenntnisse für langfristige Mitarbeiterbeziehungen.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Freelancer
            </h2>
            <h3 className="mb-4 text-2xl font-bold">Für flexible Lösungen</h3>
            <p className="text-muted">
              Zugang zu hochqualifizierten unabhängigen Experten für kurzfristige
              Unterstützung oder spezielle Fachkenntnisse. Unsere Freelancer bringen
              sofortigen Wert in Ihre Projekte.
            </p>
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Fachkräfte für Ihre IT-Bedürfnisse
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-muted">
            In einer Welt des schnellen technologischen Wandels und hoher Innovationskraft
            unterstützen wir Sie mit den richtigen IT-Spezialisten. Von technischem Support
            bis Cloud-Architektur — unser Matching-Service entwickelt sich ständig weiter.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {itServices.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-border bg-white p-4 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-primary-bg py-24">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Kontaktieren Sie uns</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Vor- und Nachname *
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-lg border border-border px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                E-Mail *
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg border border-border px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Nachricht *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full rounded-lg border border-border px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <p className="text-sm text-muted">
              Dieses Formular ist derzeit nicht funktional. Bitte kontaktieren Sie uns
              direkt per E-Mail an{" "}
              <a href="mailto:info@codari.de" className="text-primary hover:underline">
                info@codari.de
              </a>{" "}
              oder telefonisch unter{" "}
              <a href="tel:+4921516476293" className="text-primary hover:underline">
                +49 2151 6476293
              </a>
              .
            </p>
            <button
              type="button"
              disabled
              className="w-full rounded-lg bg-primary/50 px-8 py-3 font-semibold text-white"
            >
              Senden
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
