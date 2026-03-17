import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import FadeIn from "@/components/FadeIn";
import WorldMap from "@/components/WorldMap";

const itServices = [
  "Softwareentwicklung",
  "Artificial Intelligence & Machine Learning",
  "Cloud Computing",
  "DevOps Engineering",
  "Cybersecurity",
  "Netzwerkadministration",
  "IT-Administration",
  "Data Science & Big Data",
  "IT Architektur & Design",
  "Quality Assurance & Testing",
];

const engineeringServices = [
  "SPS-Programmierung",
  "Elektrokonstruktion",
  "Elektroniker",
  "Servicetechniker",
  "EMSR-Technik",
  "Automatisierungstechnik",
  "Maschinenbau",
  "Projektmanagement",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FurUnternehmen" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/fur-unternehmen`,
      languages: { de: "/de/fur-unternehmen", en: "/en/fur-unternehmen" },
    },
  };
}

export default async function FurUnternehmenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FurUnternehmen");

  // Static trusted content only
  const jsonLd = JSON.stringify(
    breadcrumbJsonLd([
      { name: "HR Services", href: "/fur-unternehmen" },
      { name: "Für Unternehmen", href: "/fur-unternehmen" },
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

      {/* Intro */}
      <FadeIn>
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-lg text-muted">{t("introText")}</p>
          </div>
        </section>
      </FadeIn>

      {/* Festanstellung & Freelancer */}
      <FadeIn>
        <section className="border-t border-border bg-surface py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
            <div className="card-interactive rounded-2xl border border-border bg-background p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                {t("festanstellung")}
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">{t("festanstellungTitle")}</h3>
              <p className="text-muted">{t("festanstellungDesc")}</p>
            </div>
            <div className="card-interactive rounded-2xl border border-border bg-background p-8">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                {t("freelancer")}
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">{t("freelancerTitle")}</h3>
              <p className="text-muted">{t("freelancerDesc")}</p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* IT Services */}
      <FadeIn>
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
              {t("itTitle")}
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-muted">{t("itText")}</p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {itServices.map((service) => (
                <div
                  key={service}
                  className="rounded-xl border border-border bg-surface p-4 text-center text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[0_4px_15px_var(--color-primary-glow)]"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Engineering Services */}
      <FadeIn>
        <section className="border-t border-border bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-4 text-center text-3xl font-bold text-foreground">
              {t("engineeringTitle")}
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-muted">{t("engineeringText")}</p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {engineeringServices.map((service) => (
                <div
                  key={service}
                  className="rounded-xl border border-border bg-background p-4 text-center text-sm font-medium text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-[0_4px_15px_var(--color-primary-glow)]"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Executive Search */}
      <FadeIn>
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">{t("executiveTitle")}</h2>
            <p className="text-lg text-muted">{t("executiveText")}</p>
          </div>
        </section>
      </FadeIn>

      {/* Weltweites Netzwerk */}
      <FadeIn>
        <section className="border-t border-border bg-primary-bg py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-foreground">{t("netzwerkTitle")}</h2>
                <p className="text-lg text-muted">{t("netzwerkText")}</p>
              </div>
              <div className="h-64">
                <WorldMap />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Contact CTA */}
      <FadeIn>
        <section className="cta-gradient border-t border-border py-20 text-center">
          <div className="relative mx-auto max-w-3xl px-6">
            <h2 className="mb-4 text-3xl font-bold text-foreground">{t("kontaktTitle")}</h2>
            <p className="mb-8 text-lg text-muted">{t("kontaktText")}</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="mailto:info@codari.de" className="btn-primary">
                info@codari.de
              </a>
              <a href="tel:+4921516476293" className="btn-gradient-border">
                +49 2151 6476293
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
