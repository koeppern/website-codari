import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Für Unternehmen — Personal & Employer Branding",
  description:
    "Fach- und Führungskräfte in IT, Pharma und Engineering finden. Festanstellung oder Freelancer — CODARI vermittelt passgenau.",
  alternates: { canonical: "/fur-unternehmen" },
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
      <section className="relative flex min-h-[50vh] items-center">
        <Image
          src="/images/karriere.jpg"
          alt="Für Unternehmen"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
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
          <h2 className="sr-only">Unsere Leistungen</h2>
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
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Festanstellung
            </p>
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
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Freelancer
            </p>
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
          <ContactForm />
        </div>
      </section>
    </>
  );
}
