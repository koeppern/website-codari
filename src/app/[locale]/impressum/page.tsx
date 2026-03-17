import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Impressum" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/impressum`,
      languages: { de: "/de/impressum", en: "/en/impressum" },
    },
    robots: { index: true, follow: true },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const jsonLd = JSON.stringify(
    breadcrumbJsonLd([{ name: "Impressum", href: "/impressum" }])
  );

  return (
    <>
      <script type="application/ld+json">{jsonLd}</script>
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-12 text-4xl font-bold text-foreground">Impressum</h1>

          <div className="prose max-w-none text-muted">
            <h2 className="text-xl font-semibold text-foreground">
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

            <h3 className="mt-8 text-lg font-semibold text-foreground">Kontakt</h3>
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

            <h3 className="mt-8 text-lg font-semibold text-foreground">Geschäftsführung</h3>
            <p>
              Antonia Kruck
              <br />
              Adam Rupaszov
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
