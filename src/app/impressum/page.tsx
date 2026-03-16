import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der CODARI GbR — Angaben gemäß § 5 TMG.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1
          className="mb-12 text-4xl font-normal text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Impressum
        </h1>

        <div className="prose max-w-none text-muted">
          <h2
            className="text-xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Angaben gemäß § 5 TMG
          </h2>

          <p className="mt-4">
            <strong className="text-foreground">CODARI GbR</strong>
            <br />
            Eichendorffstraße 38
            <br />
            47800 Krefeld
          </p>

          <p>
            <strong className="text-foreground">Gesellschaftssitz:</strong> Krefeld
          </p>

          <h3
            className="mt-8 text-lg font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kontakt
          </h3>
          <p>
            E-Mail:{" "}
            <a href="mailto:info@codari.de" className="text-primary hover:underline">
              info@codari.de
            </a>
            <br />
            Telefon:{" "}
            <a href="tel:+4921516476293" className="text-primary hover:underline">
              +49 2151 6476293
            </a>
          </p>

          <h3
            className="mt-8 text-lg font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Geschäftsführung
          </h3>
          <p>
            Antonia Kruck
            <br />
            Adam Rupaszov
          </p>
        </div>
      </div>
    </section>
  );
}
