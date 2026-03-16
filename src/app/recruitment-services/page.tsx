import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recruitment Services - CODARI",
  description:
    "Vermittlung von Fach- und Führungskräften in IT, Gesundheitswesen, Ingenieurwesen und Executive Search.",
};

const services = [
  {
    title: "Fachbereiche",
    desc: "Wir sind spezialisiert auf die Branchen Informationstechnologie, Ingenieurswesen und Gesundheitswesen, wo wir gezielt Fachkräfte mit den passenden Qualifikationen und Erfahrungen vermitteln.",
  },
  {
    title: "Executive Search",
    desc: "Darüber hinaus erweitern wir unser Leistungsspektrum durch unsere Executive Search-Dienste, die Unternehmen bei der gezielten Suche nach geeigneten Führungskräften unterstützen.",
  },
  {
    title: "Direktvermittlung & Projektbasiert",
    desc: "Unser Unternehmen bietet umfassende Dienstleistungen in den Bereichen Direktvermittlung und Fachkräftevermittlung für projektbasierte Tätigkeiten an.",
  },
];

const testimonials = [
  {
    author: "Dr. Fabian Deitelhoff",
    role: "Head of IT",
    text: "Im Rahmen der Besetzung eines Entwicklerteams in den Bereichen Web-Entwicklung und Large Language Models habe ich als Head of IT sehr positive Erfahrungen in der Zusammenarbeit mit Herrn Adam Rupaszov gemacht. Die vorgestellten Kandidatenprofile waren von hoher Qualität und passten präzise zu unseren Anforderungen. Besonders hervorzuheben sind die reibungslose Kommunikation und die Fähigkeit von Herrn Rupaszov, unsere spezifischen Anforderungen genau zu verstehen. Die schnelle Besetzung der Positionen hat unser Projektteam enorm gestärkt. Ich kann die Zusammenarbeit mit Herrn Rupaszov uneingeschränkt empfehlen.",
  },
  {
    author: "Senior Frontend Entwickler M.R.",
    role: "Kandidat",
    text: "Herr Rupaszov hat sich mit mir in Verbindung gesetzt, um über passende Stellenangebote zu sprechen, und es gelang ihm innerhalb kürzester Zeit, eine Position als Frontend-Entwickler zu finden, die perfekt zu meinen Fähigkeiten und Erwartungen passte. Was mich besonders beeindruckt hat, war sein tiefes technisches Verständnis. Er stellte fundierte, zielgerichtete Fragen und zu jeder Zeit hatte ich das Gefühl, hervorragend betreut zu werden. Die Zusammenarbeit war durchweg professionell und transparent.",
  },
];

export default function RecruitmentServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-home.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <h1
            className="text-5xl font-normal tracking-tight text-foreground md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            RECRUITMENT
            <br />
            SERVICES
          </h1>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-12 text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Unsere Dienstleistungen
          </h2>
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div className="space-y-8">
              {services.map((service) => (
                <div key={service.title} className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="mb-3 text-xl font-normal text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </h3>
                  <p className="text-muted">{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/meeting.jpg"
                alt="Team beim Meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kernbotschaft */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/campaign.jpg"
              alt="Geschäftstreffen"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2
              className="mb-6 text-3xl font-normal text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              IHR VORHABEN, UNSER NETZWERK
            </h2>
            <p className="text-lg text-muted">
              Wir sind spezialisiert auf die Vermittlung von Fach- und Führungskräften in den
              Bereichen IT, Gesundheitswesen, Ingenieurswesen und Executive Search für
              Festanstellungen, sowie projektbasierte Einsätze. Ob Sie dauerhafte Fachkräfte
              oder flexible Projektunterstützung suchen, wir verbinden Sie mit den
              Spezialisten, die Ihre Unternehmensvision voranbringen.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-16 text-center text-3xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Das sagen unsere Kunden &amp; Kandidaten
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <svg className="mb-4 h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mb-6 text-muted">{t.text}</p>
                <div>
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface py-16 text-center">
        <h2
          className="mb-4 text-3xl font-normal text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Bereit, Ihr Team zu verstärken?
        </h2>
        <p className="mb-8 text-lg text-muted">
          Kontaktieren Sie uns für ein kostenloses Beratungsgespräch.
        </p>
        <Link
          href="/kontakt"
          className="inline-block rounded-lg bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent/80"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </>
  );
}
