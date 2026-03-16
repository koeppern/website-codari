import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "CODARI",
    links: [
      { label: "Informationstechnologie", href: "/fur-unternehmen" },
      { label: "Ingenieurswesen", href: "/fur-unternehmen" },
      { label: "Gesundheitswesen", href: "/fur-unternehmen" },
      { label: "Führungskräfte", href: "/fur-unternehmen" },
    ],
  },
  {
    title: "CODARI 360°",
    links: [
      { label: "Prozesseinführung", href: "/employer-branding" },
      { label: "Audits & Kampagnen", href: "/employer-branding" },
      { label: "Personalentwicklung", href: "/employer-branding" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Über Uns", href: "/uber-uns" },
      { label: "SCR-Programm", href: "/social-corporate-responsibility" },
      { label: "Stellenanzeigen", href: "https://careers.codari.de/", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Standorte & Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              Standorte
            </h3>
            <div className="space-y-4 text-sm text-muted">
              <div>
                <p className="font-medium text-white">Standort Düsseldorf</p>
                <p>Breite Straße 3</p>
                <p>40213 Düsseldorf</p>
              </div>
              <div>
                <p className="font-medium text-white">Standort Krefeld</p>
                <p>Eichendorffstraße 38</p>
                <p>47800 Krefeld</p>
              </div>
            </div>
            <div className="mt-6 space-y-1 text-sm text-muted">
              <p>E-Mail: <a href="mailto:info@codari.de" className="text-white hover:text-primary transition-colors">info@codari.de</a></p>
              <p>Telefon: <a href="tel:+4921516476293" className="text-white hover:text-primary transition-colors">+49 2151 6476293</a></p>
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section, i) => (
            <div key={i}>
              {section.title && (
                <h3 className="mb-4 text-sm font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                  {section.title}
                </h3>
              )}
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-muted transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row">
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-primary">Impressum</Link>
            <Link href="/datenschutzerklarung" className="transition-colors hover:text-primary">Datenschutzerklärung</Link>
          </div>
          <Image src="/images/logo.png" alt="CODARI" width={100} height={25} className="brightness-0 invert opacity-60" />
        </div>
      </div>
    </footer>
  );
}
