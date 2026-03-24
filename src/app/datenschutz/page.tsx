import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { getSiteUrl } from "@/lib/site-url";

const pageTitle = "Datenschutz San Sushi Hagen – Cookies, Datenschutz, DSGVO";
const pageDescription =
  "Datenschutzerklärung von San Sushi in Hagen: wie Daten erhoben werden, welche Cookies wir verwenden und welche Datenschutzrechte Ihnen laut DSGVO zustehen.";
const pageTitleWithBrand = pageTitle;
const socialImageUrl = `${getSiteUrl()}/opengraph-image`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/datenschutz",
    languages: {
      de: "/datenschutz",
      "x-default": "/datenschutz",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "San Sushi",
    url: `${getSiteUrl()}/datenschutz`,
    title: pageTitleWithBrand,
    description: pageDescription,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Datenschutzerklärung San Sushi Hagen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitleWithBrand,
    description: pageDescription,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Datenschutzerklärung San Sushi Hagen",
      },
    ],
  },
  keywords: [
    "Datenschutz San Sushi",
    "San Sushi Datenschutz",
    "Cookies Zustimmung",
    "Google Analytics",
  ],
};

export default function DatenschutzPage() {
  return (
    <LegalPageLayout
      title="Datenschutzerklärung"
      subtitle="Website sansushi.de · Verantwortliche: siehe Impressum (Frau Qian Wang, Bergstr. 128–130, 58095 Hagen)"
      jpAccent="秘"
    >
      <div className="prose-custom prose-legal max-w-none">
        <h2>Medien</h2>
        <p>
          Wenn du ein registrierter Benutzer bist und Fotos auf diese Website lädst,
          solltest du vermeiden, Fotos mit einem EXIF-GPS-Standort hochzuladen.
          Besucher dieser Website könnten Fotos, die auf dieser Website gespeichert
          sind, herunterladen und deren Standort-Informationen extrahieren.
        </p>
        <p>
          <em>
            Hinweis: Diese Website bietet derzeit keine Registrierung oder
            Upload-Funktion für Besucher.
          </em>
        </p>

        <h2>Cookie-Hinweis und Einwilligung</h2>
        <p>
          Beim ersten Besuch dieser Website erscheint ein Hinweis zu Cookies. Du kannst
          „Alle akzeptieren“ wählen (dann dürfen wir z. B. Google Analytics nutzen) oder
          „Ablehnen“ (dann setzen wir nur technisch notwendige Cookies). Deine Wahl
          speichern wir in einem Cookie bzw. im lokalen Speicher deines Geräts, damit
          der Hinweis nicht bei jedem Besuch erneut erscheint. Du kannst deine
          Entscheidung jederzeit in den Browsereinstellungen (Cookies löschen)
          zurücksetzen.
        </p>

        <h2>Google Analytics (GA4)</h2>
        <p>
          Der Google-Tag (gtag.js) wird erst nach Ihrer Einwilligung geladen; die
          Auswertung erfolgt dann nur, wenn Sie „Alle akzeptieren“
          gewählt haben. Vorher bleibt Analytics-Speicherung deaktiviert (Google Consent
          Mode: analytics_storage denied). Die Einstellungen können Sie im Consent-Banner ändern.
          Wenn Sie „Alle akzeptieren“ wählen, startet die Datenerhebung; bei „Ablehnen“ werden
          keine personenbezogenen Analytics-Daten genutzt.
          Anbieter: Google Ireland Limited, Gordon House, Barrow
          Street, Dublin 4, Irland (Mutterunternehmen: Google LLC, USA). Verarbeitet werden
          u. a. aufgerufene Seiten, Verweildauer und grobe Herkunft; Daten können in die
          USA übermittelt werden. Mehr in den{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            title="Datenschutzhinweise von Google in neuem Tab öffnen"
            className="text-primary underline hover:no-underline"
          >
            Datenschutzhinweisen von Google
          </a>
          . Ohne Zustimmung („Ablehnen“) nutzen wir keine Analytics-Cookies für die
          personenbezogene Auswertung; Sie können Ihre Wahl durch Löschen der
          Website-Daten im Browser zurücksetzen.
        </p>
        <h2>Cookies (technisch / Anmeldung)</h2>
        <p>
          Wenn du dich anmeldest, werden wir einige Cookies einrichten, um deine
          Anmeldeinformationen und Anzeigeoptionen zu speichern. Anmelde-Cookies
          verfallen nach zwei Tagen und Cookies für die Anzeigeoptionen nach einem Jahr.
          Falls du bei der Anmeldung „Angemeldet bleiben“ auswählst, wird deine Anmeldung
          zwei Wochen lang aufrechterhalten. Mit der Abmeldung aus deinem Konto werden
          die Anmelde-Cookies gelöscht.
        </p>
        <p>
          Falls du ein Konto hast und dich auf dieser Website anmeldest, werden wir ein
          temporäres Cookie setzen, um festzustellen, ob dein Browser Cookies akzeptiert.
          Dieses Cookie enthält keine personenbezogenen Daten und wird verworfen, wenn
          du deinen Browser schließt.
        </p>
        <p>
          Wenn du einen Artikel bearbeitest oder veröffentlichst, wird ein zusätzlicher
          Cookie in deinem Browser gespeichert. Dieser Cookie enthält keine
          personenbezogenen Daten und verweist nur auf die Beitrags-ID des Artikels, den
          du gerade bearbeitest hast. Der Cookie verfällt nach einem Tag.
        </p>
        <p>
          Darüber hinaus können Sie in Ihrem Browser Einstellungen zum Löschen oder
          Blockieren von Cookies vornehmen.
        </p>

        <h2>Eingebettete Inhalte von anderen Websites</h2>
        <p>
          Beiträge auf dieser Website können eingebettete Inhalte beinhalten (z. B.
          Videos, Bilder, Karten etc.). Eingebettete Inhalte von anderen Websites
          verhalten sich exakt so, als ob der Besucher die andere Website besucht hätte.
        </p>
        <p>
          Diese Websites können Daten über dich sammeln, Cookies benutzen, zusätzliche
          Tracking-Dienste von Dritten einbetten und deine Interaktion mit diesem
          eingebetteten Inhalt aufzeichnen, inklusive deiner Interaktion mit dem
          eingebetteten Inhalt, falls du ein Konto hast und auf dieser Website angemeldet
          bist.
        </p>

        <h2>Mit wem wir deine Daten teilen</h2>
        <p>
          Wenn du eine Zurücksetzung des Passworts beantragst, wird deine IP-Adresse in
          der E-Mail zur Zurücksetzung enthalten sein. Diese Website bietet derzeit keine
          Benutzerkonten oder Passwort-Funktionen für Besucher.
        </p>

        <h2>Wie lange wir deine Daten speichern</h2>
        <p>
          Für Benutzer, die sich auf unserer Website registrieren, speichern wir
          zusätzlich die persönlichen Informationen, die sie in ihren Benutzerprofilen
          angeben. Alle Benutzer können jederzeit ihre persönlichen Informationen
          einsehen, verändern oder löschen (der Benutzername kann nicht verändert
          werden). Administratoren der Website können diese Informationen ebenfalls
          einsehen und verändern.
        </p>
        <p>
          <em>Diese Website bietet derzeit keine Registrierung für Besucher.</em>
        </p>

        <h2>Welche Rechte du an deinen Daten hast</h2>
        <p>
          Wenn du ein Konto auf dieser Website besitzt, kannst du einen Export deiner
          personenbezogenen Daten bei uns anfordern, inklusive aller Daten, die du uns
          mitgeteilt hast. Darüber hinaus kannst du die Löschung aller personenbezogenen
          Daten, die wir von dir gespeichert haben, anfordern. Dies umfasst nicht die
          Daten, die wir aufgrund administrativer, rechtlicher oder
          sicherheitsrelevanter Notwendigkeiten aufbewahren müssen.
        </p>
        <p>
          Sie haben zudem das Recht auf Auskunft, Berichtigung, Löschung und
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie auf
          Datenübertragbarkeit. Sie können sich bei Beschwerden an die zuständige
          Aufsichtsbehörde wenden.
        </p>

        <h2>Wohin deine Daten gesendet werden</h2>
        <p>
          Beim Aufruf der Website werden durch den Browser automatisch Informationen an
          den Server gesendet (z. B. IP-Adresse, Datum, Uhrzeit, aufgerufene Seiten).
          Diese Daten werden ausschließlich zur Gewährleistung eines störungsfreien
          Betriebs ausgewertet und nicht mit anderen Datenquellen zusammengeführt.
        </p>
        <p>
          Eingebettete Inhalte (z. B. Karten) können Daten an die jeweiligen
          Diensteanbieter übermitteln; dazu gelten die Datenschutzbestimmungen dieser
          Anbieter.
        </p>

        <h2>Kontakt</h2>
        <p>
          Bei Fragen zum Datenschutz kontaktieren Sie uns unter der im Impressum
          genannten Adresse bzw. Telefonnummer.
        </p>
      </div>
    </LegalPageLayout>
  );
}
