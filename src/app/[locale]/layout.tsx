import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://codari.de"),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      siteName: "CODARI",
      images: [
        {
          url: "/images/hero-poster.jpg",
          width: 1200,
          height: 630,
          alt: "CODARI — IT & Engineering Recruiting",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/images/logo.png",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        de: "/de",
        en: "/en",
      },
    },
  };
}

// Static JSON-LD — only hardcoded trusted content, no user input
const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CODARI GbR",
  url: "https://codari.de",
  logo: "https://codari.de/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-2151-6476293",
    contactType: "customer service",
    email: "info@codari.de",
    availableLanguage: ["German", "English"],
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Breite Straße 3",
      addressLocality: "Düsseldorf",
      postalCode: "40213",
      addressCountry: "DE",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Eichendorffstraße 38",
      addressLocality: "Krefeld",
      postalCode: "47800",
      addressCountry: "DE",
    },
  ],
  sameAs: ["https://www.linkedin.com/company/codari"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLd }}
        />
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
