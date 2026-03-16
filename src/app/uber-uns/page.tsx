import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Über Uns - CODARI Consulting",
  description:
    "Erfahren Sie mehr über unsere professionelle Beratung und wie wir Unternehmen unterstützen.",
};

export default function UberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/uber-uns-hero.jpg"
          alt="CODARI Büro"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl font-bold text-white md:text-7xl">Über Uns</h1>
          </div>
        </div>
      </section>

      {/* Unsere Geschichte */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-bold">Unsere Geschichte</h2>
          <p className="mb-6 text-lg text-muted">
            CODARI positioniert sich als vertrauenswürdiger Partner und Innovator mit
            maßgeschneiderten Services. Unser ganzheitlicher Ansatz in Mitarbeiterbindung,
            HR-Services und Employer Branding fördert die langfristige Zufriedenheit der
            Mitarbeiter und stärkt Unternehmen nachhaltig.
          </p>
        </div>
      </section>

      {/* Der Beginn */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Der Beginn einer Partnerschaft
          </h2>
          <h3 className="mb-8 text-3xl font-bold">Ein neues Kapitel: CODARI</h3>
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
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-bold">Die Zukunft</h2>
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
