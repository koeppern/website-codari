import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FurKandidaten" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/fur-kandidaten`,
      languages: { de: "/de/fur-kandidaten", en: "/en/fur-kandidaten" },
    },
  };
}

export default async function FurKandidatenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FurKandidaten");

  const jsonLd = JSON.stringify(
    breadcrumbJsonLd([
      { name: "HR Services", href: "/fur-unternehmen" },
      { name: "Für Kandidaten", href: "/fur-kandidaten" },
    ])
  );

  return (
    <>
      <script type="application/ld+json">{jsonLd}</script>

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center">
        <Image
          src="/images/karriere.jpg"
          alt={t("heroTitle")}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <h1 className="animate-hero-title heading-upper text-5xl font-bold text-white md:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="animate-hero-sub mt-4 text-xl text-slate-300">{t("heroSub")}</p>
        </div>
      </section>

      {/* Fachkräftemangel */}
      <FadeIn>
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-3xl font-bold text-foreground">{t("fachkraefteTitle")}</h2>
            <p className="text-lg text-muted">{t("fachkraefteText")}</p>
          </div>
        </section>
      </FadeIn>

      {/* Innovation & Lead */}
      <FadeIn>
        <section className="border-t border-border bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="card-interactive rounded-2xl border border-border bg-background p-8">
                <p className="mb-2 text-sm font-semibold italic text-primary">{t("innovateLabel")}</p>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">{t("innovateTitle")}</h3>
                <p className="text-muted">{t("innovateDesc")}</p>
              </div>
              <div className="card-interactive rounded-2xl border border-border bg-background p-8">
                <p className="mb-2 text-sm font-semibold italic text-primary">{t("leadLabel")}</p>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">{t("leadTitle")}</h3>
                <p className="text-muted">{t("leadDesc")}</p>
              </div>
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
            <a
              href="https://careers.codari.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t("ctaButton")}
            </a>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
