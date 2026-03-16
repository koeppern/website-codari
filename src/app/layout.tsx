import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codari.de"),
  title: {
    default: "CODARI — Employer Branding & HR Services | DACH",
    template: "%s | CODARI — Employer Branding & HR",
  },
  description:
    "Nachhaltige Unterstützung in Employer Branding, Recruitment und HR-Services in der DACH-Region. Fachkräfte finden und binden.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "CODARI",
    images: [{ url: "/images/hero-poster.jpg", width: 1200, height: 630, alt: "CODARI — Employer Branding & HR Services" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
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
    availableLanguage: "German",
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
  sameAs: [
    "https://www.linkedin.com/company/codari",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSans.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
