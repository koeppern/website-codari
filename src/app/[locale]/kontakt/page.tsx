import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Kontakt" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/kontakt`,
      languages: { de: "/de/kontakt", en: "/en/kontakt" },
    },
  };
}

const localBusinessJsonLd = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CODARI GbR — Düsseldorf",
    address: { "@type": "PostalAddress", streetAddress: "Breite Straße 3", addressLocality: "Düsseldorf", postalCode: "40213", addressCountry: "DE" },
    telephone: "+49-2151-6476293",
    email: "info@codari.de",
    url: "https://codari.de/kontakt",
    openingHours: "Mo-Fr 08:00-18:00",
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CODARI GbR — Krefeld",
    address: { "@type": "PostalAddress", streetAddress: "Eichendorffstraße 38", addressLocality: "Krefeld", postalCode: "47800", addressCountry: "DE" },
    telephone: "+49-2151-6476293",
    email: "info@codari.de",
    url: "https://codari.de/kontakt",
    openingHours: "Mo-Fr 08:00-18:00",
  },
]);

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Kontakt");

  const bcJsonLd = JSON.stringify(
    breadcrumbJsonLd([{ name: t("heroTitle"), href: "/kontakt" }])
  );

  return (
    <>
      <script type="application/ld+json">{localBusinessJsonLd}</script>
      <script type="application/ld+json">{bcJsonLd}</script>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/kontakt-hero.jpg"
          alt={t("heroTitle")}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-5xl font-bold text-white md:text-7xl">{t("heroTitle")}</h1>
            <p className="mt-4 text-xl text-slate-300">{t("heroSub")}</p>
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <FadeIn>
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-foreground">{t("formTitle")}</h2>
              <ContactForm showCompanyField />
            </div>
            <div>
              <h2 className="mb-8 text-3xl font-bold text-foreground">{t("standorteTitle")}</h2>
              <div className="space-y-8">
                <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/30">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{t("duesseldorf")}</h3>
                  <p className="text-muted">{t("duesseldorfAddress")}</p>
                  <p className="mt-2 text-sm text-muted">{t("oeffnungszeiten")}</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/30">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{t("krefeld")}</h3>
                  <p className="text-muted">{t("krefeldAddress")}</p>
                  <p className="mt-2 text-sm text-muted">{t("oeffnungszeiten")}</p>
                </div>
                <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/30">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{t("kontaktdaten")}</h3>
                  <div className="space-y-2 text-muted">
                    <p>
                      <span className="font-medium text-foreground">{t("email")}:</span>{" "}
                      <a href="mailto:info@codari.de" className="text-primary hover:underline">info@codari.de</a>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">{t("telefon")}:</span>{" "}
                      <a href="tel:+4921516476293" className="text-primary hover:underline">+49 2151 6476293</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
