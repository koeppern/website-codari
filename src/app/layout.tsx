import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CODARI - Employer Branding & HR Services",
  description:
    "Nachhaltige Unterstützung in den Bereichen Employer Branding, HR- und Recruitment-Services in der DACH-Region.",
  keywords: "Employer Branding, Recruitment, Personalberatung, HR Services, DACH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
