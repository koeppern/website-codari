import type { Metadata } from "next";
import Image from "next/image";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Über Uns — Geschichte & Vision",
  description:
    "CODARI vereint Employer Branding und HR-Expertise. Erfahren Sie, wie wir Unternehmen in der DACH-Region nachhaltig stärken.",
  alternates: { canonical: "/uber-uns" },
};

export default function UberUnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Über Uns", href: "/uber-uns" }])) }}
      />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/uber-uns-hero.jpg"
          alt="CODARI Büro — Team bei der Arbeit"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1
              className="animate-hero-title text-5xl font-normal text-foreground md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Über Uns
            </h1>
          </div>
        </div>
      </section>

      {/* Unsere Geschichte */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2
            className="mb-8 text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Unsere Geschichte
          </h2>
          <p className="mb-6 text-lg text-muted">
            CODARI positioniert sich als vertrauenswürdiger Partner und Innovator mit
            maßgeschneiderten Services. Unser ganzheitlicher Ansatz in Mitarbeiterbindung,
            HR-Services und Employer Branding fördert die langfristige Zufriedenheit der
            Mitarbeiter und stärkt Unternehmen nachhaltig.
          </p>
        </div>
      </section>

      {/* Der Beginn */}
      <section className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Der Beginn einer Partnerschaft
          </p>
          <h2
            className="mb-8 text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ein neues Kapitel: CODARI
          </h2>
          <div className="space-y-6 text-muted">
            <p>
              Die Geschichte von CODARI beginnt mit zwei Kollegen, deren starke Synergie und
              gemeinsame Erfolge beim Unternehmensaufbau den Grundstein legten. Getrieben von
              der Vision, innovative Lösungen anzubieten, gründeten sie CODARI.
            </p>
            <p>
              Heute unterstützen wir unsere Kunden dabei, robuste Unternehmensstrukturen
              aufzubauen und ihre Teams mit den besten Talenten zu verstärken. Unsere
              Erfahrung und unser Netzwerk sind die Basis für Ihren Erfolg.
            </p>
          </div>
        </div>
      </section>

      {/* Die Zukunft */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2
            className="mb-8 text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Die Zukunft
          </h2>
          <p className="text-lg text-muted">
            CODARI plant die Expansion mit Integration neuester technologischer Fortschritte
            und Markttrends. Unser Fokus liegt auf Innovation und dem Erfolg unserer Kunden.
            Wir entwickeln unsere Services kontinuierlich weiter, um den sich wandelnden
            Anforderungen des Marktes gerecht zu werden.
          </p>
        </div>
      </section>
    </>
  );
}
