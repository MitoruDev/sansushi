import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Speisekarte – Sushi, Sashimi & Koreanisch | San Sushi Hagen",
  description:
    "Speisekarte San Sushi Hagen: Sushi, Sashimi, Bibimbap, koreanische und japanische Gerichte. Frische Zutaten, vor Ort oder zum Mitnehmen. Jetzt ansehen oder als PDF herunterladen.",
  alternates: {
    canonical: "/speisekarte",
    languages: {
      de: "/speisekarte",
      "x-default": "/speisekarte",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "San Sushi",
    url: `${getSiteUrl()}/speisekarte`,
    title: "Speisekarte – Sushi, Sashimi & Koreanisch | San Sushi Hagen",
    description:
      "Speisekarte San Sushi Hagen: Sushi, Sashimi, Bibimbap, koreanische und japanische Gerichte. Frische Zutaten, vor Ort oder zum Mitnehmen. Jetzt ansehen oder als PDF herunterladen.",
  },
};

export default function SpeisekarteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
