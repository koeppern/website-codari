import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  const serviceSections = [
    {
      title: t("services"),
      links: [
        { label: t("itRecruiting"), href: "/fur-unternehmen" as const },
        { label: t("engineeringRecruiting"), href: "/fur-unternehmen" as const },
        { label: t("executiveSearch"), href: "/fur-unternehmen" as const },
      ],
    },
    {
      title: t("codari360"),
      links: [
        { label: t("prozesseinfuehrung"), href: "/employer-branding" as const },
        { label: t("auditsKampagnen"), href: "/employer-branding" as const },
        { label: t("personalentwicklung"), href: "/employer-branding" as const },
      ],
    },
    {
      title: "",
      links: [
        { label: t("ueberUns"), href: "/uber-uns" as const },
        { label: t("stellenanzeigen"), href: "https://careers.codari.de/" as const, external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-surface-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Standorte & Contact */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold">
              {t("standorte")}
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <p className="font-medium text-white">{t("standortDuesseldorf")}</p>
                <p>Breite Straße 3</p>
                <p>40213 Düsseldorf</p>
              </div>
              <div>
                <p className="font-medium text-white">{t("standortKrefeld")}</p>
                <p>Eichendorffstraße 38</p>
                <p>47800 Krefeld</p>
              </div>
            </div>
            <div className="mt-6 space-y-1 text-sm text-slate-400">
              <p>E-Mail: <a href="mailto:info@codari.de" className="text-white transition-colors hover:text-primary-light">info@codari.de</a></p>
              <p>Telefon: <a href="tel:+4921516476293" className="text-white transition-colors hover:text-primary-light">+49 2151 6476293</a></p>
            </div>
          </div>

          {/* Link Sections */}
          {serviceSections.map((section, i) => (
            <div key={i}>
              {section.title && (
                <h3 className="mb-4 text-sm font-medium">
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
                        className="text-sm text-slate-400 transition-colors hover:text-primary-light"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-primary-light">
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-primary-light">{t("impressum")}</Link>
            <Link href="/datenschutzerklarung" className="transition-colors hover:text-primary-light">{t("datenschutz")}</Link>
          </div>
          <Image src="/images/logo.png" alt="CODARI" width={100} height={25} className="brightness-0 invert opacity-60" />
        </div>
      </div>
    </footer>
  );
}
