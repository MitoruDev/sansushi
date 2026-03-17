import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | San Sushi Hagen",
  description:
    "Impressum und rechtliche Angaben zum Betreiber von San Sushi in Hagen: Inhaber, Adresse, Kontakt – alle Pflichtangaben gemäß § 5 TMG.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-foreground">Impressum</h1>
      <p className="mt-4 text-sm text-muted">Angaben gemäß § 5 TMG</p>
      <div className="prose-custom mt-6 max-w-none">
        <h2 className="text-xl font-semibold text-foreground">Wer wir sind</h2>
        <p>
          Die Adresse unserer Website ist: https://sansushi.de.
        </p>
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
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor Verbraucherschlichtungsstellen teilzunehmen.
        </p>
        <p>
          <strong>Haftung für Inhalte</strong>
          <br />
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          <strong>Haftung für Links</strong>
          <br />
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </div>
    </article>
  );
}
