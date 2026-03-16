import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der CODARI GbR gemäß DSGVO.",
  alternates: { canonical: "/datenschutzerklarung" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Datenschutzerklärung", href: "/datenschutzerklarung" }])) }}
      />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1
          className="mb-12 text-4xl font-normal text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Datenschutzerklärung
        </h1>

        <div className="prose max-w-none space-y-8 text-muted [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-normal [&_h2]:text-foreground [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-normal [&_h3]:text-foreground [&_p]:mb-4">
          <p>
            Der Schutz Ihrer personenbezogenen Daten hat für die CODARI GbR höchste
            Priorität. Die Nutzung unserer Internetseite ist grundsätzlich ohne Angabe
            personenbezogener Daten möglich. Sofern die Verarbeitung personenbezogener Daten
            erforderlich ist und hierfür keine gesetzliche Grundlage besteht, holen wir
            generell eine Einwilligung der betroffenen Person ein.
          </p>
          <p>
            Die Verarbeitung personenbezogener Daten erfolgt stets im Einklang mit der
            Datenschutz-Grundverordnung (DSGVO) und den geltenden landesspezifischen
            Datenschutzbestimmungen.
          </p>

          <h2>1. Begriffsbestimmungen</h2>
          <p>
            Unsere Datenschutzerklärung verwendet Begriffe im Sinne der
            Datenschutz-Grundverordnung (DSGVO):
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong className="text-foreground">Personenbezogene Daten:</strong> Alle
              Informationen, die sich auf eine identifizierte oder identifizierbare
              natürliche Person beziehen.
            </li>
            <li>
              <strong className="text-foreground">Betroffene Person:</strong> Jede
              identifizierte oder identifizierbare natürliche Person, deren
              personenbezogene Daten verarbeitet werden.
            </li>
            <li>
              <strong className="text-foreground">Verarbeitung:</strong> Jeder mit oder
              ohne Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit
              personenbezogenen Daten.
            </li>
            <li>
              <strong className="text-foreground">Verantwortlicher:</strong> Die natürliche
              oder juristische Person, die über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten entscheidet.
            </li>
          </ul>

          <h2>2. Name und Anschrift des Verantwortlichen</h2>
          <p>
            CODARI GbR
            <br />
            Eichendorffstraße 38
            <br />
            47800 Krefeld
            <br />
            Deutschland
          </p>
          <p>
            Telefon: +49 2151 6476293
            <br />
            E-Mail: info@codari.de
            <br />
            Website: www.codari.de
          </p>

          <h2>3. Cookies</h2>
          <p>
            Unsere Internetseite verwendet Cookies. Cookies sind Textdateien, die über einen
            Internetbrowser auf einem Computersystem abgelegt und gespeichert werden. Sie
            können die Setzung von Cookies durch unsere Internetseite jederzeit mittels einer
            entsprechenden Einstellung des genutzten Internetbrowsers verhindern. Bereits
            gesetzte Cookies können jederzeit gelöscht werden.
          </p>

          <h2>4. Erfassung von allgemeinen Daten und Informationen</h2>
          <p>
            Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten
            und Informationen, darunter Browsertyp und -version, Betriebssystem,
            Referrer-Seite, besuchte Unterseiten, Zugriffsdatum und -uhrzeit sowie die
            IP-Adresse. Diese Daten werden benötigt, um die Inhalte unserer Internetseite
            korrekt auszuliefern und die dauerhafte Funktionsfähigkeit zu gewährleisten.
          </p>

          <h2>5. Kontaktmöglichkeit über die Internetseite</h2>
          <p>
            Unsere Internetseite enthält eine E-Mail-Adresse sowie eine Telefonnummer zur
            Kontaktaufnahme. Von der betroffenen Person übermittelte personenbezogene Daten
            werden ausschließlich für Bearbeitungs- und Kontaktzwecke verwendet. Eine
            Weitergabe an Dritte erfolgt nicht.
          </p>

          <h2>6. Routinemäßige Löschung und Sperrung</h2>
          <p>
            Wir speichern personenbezogene Daten nur für den Zeitraum, der zur Erreichung
            des Speicherungszwecks erforderlich ist oder soweit dies gesetzlich vorgeschrieben
            ist. Nach Ablauf der Aufbewahrungsfristen werden die Daten routinemäßig gesperrt
            oder gelöscht.
          </p>

          <h2>7. Rechte der betroffenen Person</h2>
          <p>Sie haben folgende Rechte gemäß DSGVO:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Recht auf Bestätigung und Auskunft</li>
            <li>Recht auf Berichtigung</li>
            <li>Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;)</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Recht auf Widerspruch</li>
            <li>Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</li>
          </ul>

          <h2>8. Datenschutz bei Bewerbungen</h2>
          <p>
            Wir erheben und verarbeiten personenbezogene Daten von Bewerbern zum Zwecke der
            Abwicklung des Bewerbungsverfahrens. Bei Nichteinstellung werden
            Bewerbungsunterlagen zwei Monate nach Bekanntgabe der Absageentscheidung
            automatisch gelöscht, sofern keine sonstigen berechtigten Interessen
            entgegenstehen.
          </p>

          <h2>9. Rechtsgrundlage der Verarbeitung</h2>
          <p>
            Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von Art. 6 DSGVO:
            Einwilligung (Abs. 1 lit. a), Vertragserfüllung (Abs. 1 lit. b), rechtliche
            Verpflichtung (Abs. 1 lit. c), lebenswichtige Interessen (Abs. 1 lit. d) oder
            berechtigte Interessen (Abs. 1 lit. f).
          </p>

          <h2>10. Automatisierte Entscheidungsfindung</h2>
          <p>
            Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische
            Entscheidungsfindung oder ein Profiling.
          </p>

          <p className="mt-12 text-sm">
            Diese Datenschutzerklärung wurde erstellt durch den
            Datenschutzerklärungs-Generator der DGD Deutsche Gesellschaft für Datenschutz
            GmbH.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
