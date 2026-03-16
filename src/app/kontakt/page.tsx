import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Beratungsgespräch vereinbaren",
  description:
    "Kostenloses Beratungsgespräch für Employer Branding und Recruitment. Standorte in Düsseldorf und Krefeld. Jetzt Kontakt aufnehmen.",
  alternates: { canonical: "/kontakt" },
};

const localBusinessJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CODARI GbR — Düsseldorf",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Breite Straße 3",
      addressLocality: "Düsseldorf",
      postalCode: "40213",
      addressCountry: "DE",
    },
    telephone: "+49-2151-6476293",
    email: "info@codari.de",
    url: "https://codari.de/kontakt",
    openingHours: "Mo-Fr 08:00-18:00",
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CODARI GbR — Krefeld",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Eichendorffstraße 38",
      addressLocality: "Krefeld",
      postalCode: "47800",
      addressCountry: "DE",
    },
    telephone: "+49-2151-6476293",
    email: "info@codari.de",
    url: "https://codari.de/kontakt",
    openingHours: "Mo-Fr 08:00-18:00",
  },
];

export default function KontaktPage() {
  return (
    <>
      {localBusinessJsonLd.map((business, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
        />
      ))}

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/kontakt-hero.jpg"
          alt="Kontakt"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1
              className="text-5xl font-normal text-foreground md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Kontakt
            </h1>
            <p className="mt-4 text-xl text-muted">Kontakt aufnehmen</p>
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          {/* Form */}
          <div>
            <h2
              className="mb-8 text-3xl font-normal text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Schreiben Sie uns
            </h2>
            <ContactForm showCompanyField />
          </div>

          {/* Contact Info */}
          <div>
            <h2
              className="mb-8 text-3xl font-normal text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Standorte
            </h2>
            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3
                  className="mb-2 text-lg font-normal text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Düsseldorf
                </h3>
                <p className="text-muted">Breite Straße 3, 40213 Düsseldorf</p>
                <p className="mt-2 text-sm text-muted">Mo--Fr 08:00--18:00 Uhr</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3
                  className="mb-2 text-lg font-normal text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Krefeld
                </h3>
                <p className="text-muted">Eichendorffstraße 38, 47800 Krefeld</p>
                <p className="mt-2 text-sm text-muted">Mo--Fr 08:00--18:00 Uhr</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <h3
                  className="mb-3 text-lg font-normal text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Kontaktdaten
                </h3>
                <div className="space-y-2 text-muted">
                  <p>
                    <span className="font-medium text-foreground">E-Mail:</span>{" "}
                    <a href="mailto:info@codari.de" className="text-primary hover:underline">
                      info@codari.de
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Telefon:</span>{" "}
                    <a href="tel:+4921516476293" className="text-primary hover:underline">
                      +49 2151 6476293
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
