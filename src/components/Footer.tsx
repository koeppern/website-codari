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
    title: "Weitere Links",
    links: [
      { label: "Über Uns", href: "/uber-uns" },
      { label: "SCR-Programm", href: "/social-corporate-responsibility" },
      { label: "Stellenanzeigen", href: "https://careers.codari.de/", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="CODARI Consulting"
              width={140}
              height={42}
              className="mb-6 brightness-0 invert"
            />
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <a href="mailto:info@codari.de" className="transition-colors hover:text-white">
                  info@codari.de
                </a>
              </p>
              <p>
                <a href="tel:+4921516476293" className="transition-colors hover:text-white">
                  +49 2151 6476293
                </a>
              </p>
            </div>

            <div className="mt-6 space-y-4 text-sm text-gray-400">
              <div>
                <p className="font-semibold text-white">Düsseldorf</p>
                <p>Breite Straße 3, 40213 Düsseldorf</p>
              </div>
              <div>
                <p className="font-semibold text-white">Krefeld</p>
                <p>Eichendorffstraße 38, 47800 Krefeld</p>
              </div>
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 text-sm text-gray-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} CODARI GbR. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutzerklarung" className="transition-colors hover:text-white">
              Datenschutzerklärung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
