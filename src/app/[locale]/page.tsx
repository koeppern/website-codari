import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";
import CounterAnimation from "@/components/CounterAnimation";
import WorldMap from "@/components/WorldMap";
import GradientBorderButton from "@/components/GradientBorderButton";

// Static trusted JSON-LD — no user input involved
const websiteJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CODARI",
  url: "https://codari.de",
});

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: websiteJsonLd }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center">
        <Image
          src="/images/hero-poster.jpg"
          alt="Professionelles Teammeeting in modernem Büro — CODARI IT & Engineering Recruiting"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/80" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="animate-hero-title mb-2 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            {t("heroTitle")}
          </h1>
          <p className="animate-hero-sub mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
            {t("heroSub")}
          </p>
          <div className="animate-hero-cta mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <GradientBorderButton href="/fur-unternehmen" className="!bg-white/10 !text-white backdrop-blur-sm">
              {t("ctaUnternehmen")}
            </GradientBorderButton>
            <a
              href="https://careers.codari.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {t("ctaKandidaten")}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <FadeIn>
        <section className="border-t border-border bg-primary-bg py-16">
          <div className="mx-auto grid max-w-4xl gap-8 px-6 text-center md:grid-cols-3">
            <div>
              <p className="stat-value text-4xl font-bold text-primary">
                <CounterAnimation end={120} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-muted">{t("statsVermittlungen")}</p>
            </div>
            <div>
              <p className="stat-value text-4xl font-bold text-primary">
                <CounterAnimation end={1500} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-muted">{t("statsUnternehmen")}</p>
            </div>
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <p className="mt-2 text-sm text-muted">{t("statsNetzwerk")}</p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Leistungen */}
      <FadeIn>
        <section id="services" className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-3xl font-bold text-foreground md:text-4xl">
              {t("leistungenTitle")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* IT Recruiting */}
              <div className="card-interactive rounded-2xl border border-border bg-surface p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{t("itRecruiting")}</h3>
                <p className="text-muted">{t("itRecruitingDesc")}</p>
              </div>

              {/* Engineering Recruiting */}
              <div className="card-interactive rounded-2xl border border-border bg-surface p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{t("engineeringRecruiting")}</h3>
                <p className="text-muted">{t("engineeringRecruitingDesc")}</p>
              </div>

              {/* Executive Search */}
              <div className="card-interactive rounded-2xl border border-border bg-surface p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{t("executiveSearch")}</h3>
                <p className="text-muted">{t("executiveSearchDesc")}</p>
              </div>

              {/* Employer Branding */}
              <div className="card-interactive rounded-2xl border border-border bg-surface p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{t("employerBranding")}</h3>
                <p className="text-muted">{t("employerBrandingDesc")}</p>
              </div>

              {/* Weltweites Netzwerk — Highlight Card */}
              <div className="card-interactive col-span-1 rounded-2xl border border-primary/30 bg-primary-bg p-8 md:col-span-2">
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">{t("netzwerk")}</h3>
                    <p className="text-muted">{t("netzwerkDesc")}</p>
                  </div>
                  <div className="h-48">
                    <WorldMap />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Prozess */}
      <FadeIn>
        <section className="border-t border-border bg-surface py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-3xl font-bold text-foreground md:text-4xl">
              {t("prozessTitle")}
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { step: "01", title: t("step1"), desc: t("step1Desc") },
                { step: "02", title: t("step2"), desc: t("step2Desc") },
                { step: "03", title: t("step3"), desc: t("step3Desc") },
                { step: "04", title: t("step4"), desc: t("step4Desc") },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="step-circle mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-background text-2xl font-semibold text-primary transition-colors">
                    {item.step}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Vertrauen */}
      <FadeIn>
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              {t("vertrauenTitle")}
            </h2>
            <p className="text-lg text-muted">
              {t("vertrauenText")}
            </p>
            <Link
              href="/uber-uns"
              className="link-arrow mt-8 inline-flex items-center font-semibold text-primary hover:underline"
            >
              {t("vertrauenLink")}
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <section className="cta-gradient border-t border-border py-20 text-center">
          <div className="relative mx-auto max-w-3xl px-6">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("ctaTitle")}
            </h2>
            <p className="mb-8 text-lg text-muted">
              {t("ctaText")}
            </p>
            <Link href="/kontakt" className="btn-primary">
              {t("ctaButton")}
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
