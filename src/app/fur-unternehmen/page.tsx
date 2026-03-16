import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <h1
            className="text-5xl font-normal tracking-tight text-foreground md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            WACHSTUM &amp; EXPERTISE
          </h1>
          <p className="mt-4 text-xl text-muted">Ihr Vorhaben, unsere Netzwerke</p>
        </div>
      </section>

      {/* Intro */}
      <section className="border-t border-border bg-background py-24">
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
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Festanstellung
            </h2>
            <h3
              className="mb-4 text-2xl font-normal text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Fachwissen verankern
            </h3>
            <p className="text-muted">
              Verstärken Sie Ihr Team durch gezielt ausgewählte Spezialisten. Wir legen Wert
              auf Kulturpassung und nutzen fortschrittliche Matching-Technologien sowie
              Branchenkenntnisse für langfristige Mitarbeiterbeziehungen.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Freelancer
            </h2>
            <h3
              className="mb-4 text-2xl font-normal text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Für flexible Lösungen
            </h3>
            <p className="text-muted">
              Zugang zu hochqualifizierten unabhängigen Experten für kurzfristige
              Unterstützung oder spezielle Fachkenntnisse. Unsere Freelancer bringen
              sofortigen Wert in Ihre Projekte.
            </p>
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-4 text-center text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
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
                className="rounded-xl border border-border bg-surface p-4 text-center text-sm font-medium text-muted transition-colors hover:border-primary hover:text-primary"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-2xl px-6">
          <h2
            className="mb-8 text-center text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kontaktieren Sie uns
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Vor- und Nachname *
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                E-Mail *
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Nachricht *
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
              className="w-full rounded-lg bg-accent/50 px-8 py-3 font-semibold text-white"
            >
              Senden
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
