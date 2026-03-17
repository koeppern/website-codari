import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "EmployerBranding" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/employer-branding`,
      languages: { de: "/de/employer-branding", en: "/en/employer-branding" },
    },
  };
}

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Employer Branding",
  description: "Maßgeschneiderte Employer-Branding-Strategien: Audits, Kampagnen, EVP-Entwicklung und Personalentwicklung.",
  provider: {
    "@type": "Organization",
    name: "CODARI GbR",
    url: "https://codari.de",
  },
});

export default async function EmployerBrandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("EmployerBranding");

  const bcJsonLd = JSON.stringify(
    breadcrumbJsonLd([{ name: "Employer Branding", href: "/employer-branding" }])
  );

  const portfolioKeys = [
    "portfolio1", "portfolio2", "portfolio3", "portfolio4", "portfolio5",
    "portfolio6", "portfolio7", "portfolio8", "portfolio9",
  ] as const;

  const mainServices = [
    { titleKey: "service1Title" as const, descKey: "service1Desc" as const },
    { titleKey: "service2Title" as const, descKey: "service2Desc" as const },
    { titleKey: "service3Title" as const, descKey: "service3Desc" as const },
    { titleKey: "service4Title" as const, descKey: "service4Desc" as const },
  ];

  return (
    <>
      <script type="application/ld+json">{serviceJsonLd}</script>
      <script type="application/ld+json">{bcJsonLd}</script>

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center">
        <Image
          src="/images/hero-home.jpg"
          alt="Employer Branding"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <h1 className="animate-hero-title max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            {t("heroTitle")}
          </h1>
          <p className="animate-hero-sub mt-4 max-w-2xl text-xl text-slate-300">
            {t("heroSub")}
          </p>
          <Link href="/kontakt" className="animate-hero-cta btn-primary mt-8">
            {t("heroCtaKontakt")}
          </Link>
        </div>
      </section>

      {/* Service Portfolio */}
      <FadeIn>
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
              {t("portfolioTitle")}
            </h2>
            <p className="mb-12 text-center text-muted">{t("portfolioText")}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {portfolioKeys.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary/50"
                >
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-muted">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* Main Services */}
      <FadeIn>
        <section className="border-t border-border bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {mainServices.map((service) => (
                <div
                  key={service.titleKey}
                  className="card-interactive rounded-2xl border border-border bg-background p-8"
                >
                  <h3 className="mb-4 text-xl font-semibold text-primary">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-muted">{t(service.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="cta-gradient border-t border-border py-20 text-center">
          <div className="relative mx-auto max-w-3xl px-6">
            <h2 className="mb-4 text-3xl font-bold text-foreground">{t("ctaTitle")}</h2>
            <p className="mb-8 text-lg text-muted">{t("ctaText")}</p>
            <Link href="/kontakt" className="btn-primary">{t("ctaButton")}</Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
