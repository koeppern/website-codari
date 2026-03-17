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
  const t = await getTranslations({ locale, namespace: "UberUns" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/uber-uns`,
      languages: { de: "/de/uber-uns", en: "/en/uber-uns" },
    },
  };
}

export default async function UberUnsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("UberUns");

  const jsonLd = JSON.stringify(
    breadcrumbJsonLd([{ name: t("heroTitle"), href: "/uber-uns" }])
  );

  return (
    <>
      <script type="application/ld+json">{jsonLd}</script>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/uber-uns-hero.jpg"
          alt="CODARI Team"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60" />
        <div className="relative flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="animate-hero-title text-5xl font-bold text-white md:text-7xl">
              {t("heroTitle")}
            </h1>
          </div>
        </div>
      </section>

      {/* Unsere Geschichte */}
      <FadeIn>
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl font-bold text-foreground">{t("geschichteTitle")}</h2>
            <p className="text-lg text-muted">{t("geschichteText")}</p>
          </div>
        </section>
      </FadeIn>

      {/* Der Beginn */}
      <FadeIn>
        <section className="border-t border-border bg-surface py-24">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t("beginnLabel")}
            </p>
            <h2 className="mb-8 text-3xl font-bold text-foreground">{t("beginnTitle")}</h2>
            <div className="space-y-6 text-muted">
              <p>{t("beginnText1")}</p>
              <p>{t("beginnText2")}</p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Die Zukunft */}
      <FadeIn>
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-3xl font-bold text-foreground">{t("zukunftTitle")}</h2>
            <p className="text-lg text-muted">{t("zukunftText")}</p>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
