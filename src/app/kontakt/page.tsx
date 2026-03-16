import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt - CODARI",
  description:
    "Nehmen Sie mit uns Kontakt auf für ein kostenloses Beratungsgespräch in Employer Branding und HR-Services.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/kontakt-hero.jpg"
          alt="Kontakt"
          fill
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
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                  Unternehmen
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  E-Mail Adresse *
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
                Versenden
              </button>
            </form>
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
