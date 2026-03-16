import type { Metadata } from "next";
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
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
