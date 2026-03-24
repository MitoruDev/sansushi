import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { getSiteUrl } from "@/lib/site-url";

const pageTitle = "Impressum";
const pageDescription =
  "Impressum von San Sushi in Hagen mit Inhaberinformationen, Adresse, Kontakt und den Pflichtangaben nach §5 TMG.";
const pageTitleWithBrand = `${pageTitle} | San Sushi Hagen`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/impressum",
    languages: {
      de: "/impressum",
      "x-default": "/impressum",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "San Sushi",
    url: `${getSiteUrl()}/impressum`,
    title: pageTitleWithBrand,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Impressum von San Sushi Hagen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitleWithBrand,
    description: pageDescription,
    images: ["/opengraph-image"],
  },
  keywords: [
    "Impressum San Sushi",
    "San Sushi Hagen Impressum",
    "Rechtliche Angaben Restaurant",
  ],
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum"
      subtitle="Angaben gemäß § 5 TMG"
      jpAccent="法"
    >
      <div className="prose-custom prose-legal max-w-none">
        <h2>Wer wir sind</h2>
        <p>Die Adresse unserer Website ist: https://sansushi.de.</p>
        <p>
          <strong>Inhaber:</strong> Frau Qian Wang
          <br />
          Bergstr. 128-130
          <br />
          58095 Hagen
        </p>
        <p>
          <strong>EU-Streitschlichtung</strong>
          <br />
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
          (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            title="EU Online Dispute Resolution Plattform in neuem Tab öffnen"
            className="focus-ring text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
          Verbraucherschlichtungsstellen teilzunehmen.
        </p>
        <p>
          <strong>Haftung für Inhalte</strong>
          <br />
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
          TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          <strong>Haftung für Links</strong>
          <br />
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
          wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
          der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </div>
    </LegalPageLayout>
  );
}
