import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const pageTitle = "Speisekarte – Sushi, Sashimi & Koreanisch | San Sushi Hagen";
const pageDescription =
  "Speisekarte San Sushi Hagen: Sushi, Sashimi, Bibimbap, koreanische und japanische Gerichte. Frische Zutaten, vor Ort oder zum Mitnehmen. Jetzt ansehen oder als PDF herunterladen.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
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
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "San Sushi Speisekarte – Sushi, Sashimi und koreanische Küche",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image"],
  },
  keywords: [
    "San Sushi Speisekarte",
    "Sushi Karte Hagen",
    "Sashimi",
    "Bibimbap",
    "Japanische Küche",
    "Koreanische Gerichte",
    "Takeaway Hagen",
  ],
};

export default function SpeisekarteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
