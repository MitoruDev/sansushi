import { homeFaqItems } from "@/data/faq";

/**
 * FAQPage-Strukturdaten (Startseite) – Fragen/Antworten müssen mit sichtbarem FAQ-Block übereinstimmen.
 */
export function HomeFaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
