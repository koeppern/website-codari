import type { Metadata } from "next";
import Image from "next/image";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Social Corporate Responsibility",
  description:
    "CODARI spendet pro Geschäftsabschluss an Umweltschutz- und Hilfsorganisationen. Unser CSR-Engagement im Überblick.",
  alternates: { canonical: "/social-corporate-responsibility" },
};

export default function SCRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Social Corporate Responsibility", href: "/social-corporate-responsibility" }])) }}
      />

      {/* Hero */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h1
            className="animate-hero-title heading-upper text-5xl text-foreground md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SOCIAL CORPORATE
            <br />
            RESPONSIBILITY
          </h1>
        </div>
      </section>

      {/* Unsere Verantwortung */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2
            className="mb-8 text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Unsere Verantwortung
          </h2>
          <p className="text-lg text-muted">
            Corporate Social Responsibility ist für CODARI nicht nur ein ethischer Imperativ,
            sondern auch ein strategischer Vorteil. Wir spenden einen variablen Umsatzanteil
            pro abgeschlossenes Geschäft an Organisationen für Umweltschutz, humanitäre
            Hilfe und soziale Gerechtigkeit.
          </p>
        </div>
      </section>

      {/* SCR Programm */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-16 text-center text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SCR Programm
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Natur */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/30">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/nature.jpg"
                  alt="Naturschutz"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="img-zoom object-cover"
                />
              </div>
              <div className="p-8">
                <h3
                  className="mb-4 text-xl font-normal text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Warum wir unsere Natur schützen
                </h3>
                <p className="text-muted">
                  Millionen Hektar Wald gehen jährlich verloren. Laut dem UN-Bericht 2020
                  schreitet der Waldverlust mit alarmierender Geschwindigkeit voran und
                  bedroht die Artenvielfalt. Unternehmen tragen Verantwortung, ihren
                  ökologischen Fußabdruck zu reduzieren.
                </p>
              </div>
            </div>

            {/* Humanitär */}
            <div className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/30">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/humanitarian.jpg"
                  alt="Humanitäre Unterstützung"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="img-zoom object-cover"
                />
              </div>
              <div className="p-8">
                <h3
                  className="mb-4 text-xl font-normal text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Humanitäre Unterstützung
                </h3>
                <p className="text-muted">
                  Laut UNHCR waren 2021 über 82 Millionen Menschen auf der Flucht. Durch
                  gezielte CSR-Initiativen unterstützen wir Organisationen, die sich für
                  Krisenhilfe und humanitäre Unterstützung einsetzen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weiterführende Links */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-12 text-center text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Weiterführende Artikel
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <a
              href="https://www.wwf.de/themen-projekte/projektregionen/amazonien"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary"
            >
              <div className="relative aspect-[3/4] max-h-[300px]">
                <Image
                  src="/images/regenwald.jpg"
                  alt="Regenwald"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3
                  className="mb-2 text-lg font-normal text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Der größte Regenwald der Erde
                </h3>
                <p className="text-sm text-muted">WWF Amazonien-Projekt</p>
              </div>
            </a>
            <a
              href="https://www.amnesty.de/informieren/amnesty-report"
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary"
            >
              <div className="relative aspect-[3/4] max-h-[300px]">
                <Image
                  src="/images/menschenrechte.jpg"
                  alt="Menschenrechte"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3
                  className="mb-2 text-lg font-normal text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Zur weltweiten Lage der Menschenrechte
                </h3>
                <p className="text-sm text-muted">Amnesty International</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
