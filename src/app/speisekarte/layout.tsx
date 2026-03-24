import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const pageTitle = "San Sushi Hagen Speisekarte – Sushi, Sashimi, Bibimbap";
const pageDescription =
  "Speisekarte San Sushi Hagen: Sushi, Sashimi, Bibimbap, koreanische und japanische Gerichte mit frischen Zutaten. Online ansehen oder als PDF herunterladen.";
const pageTitleWithBrand = pageTitle;
const socialImageUrl = `${getSiteUrl()}/opengraph-image`;

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
    title: pageTitleWithBrand,
    description: pageDescription,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "San Sushi Speisekarte – Sushi, Sashimi und koreanische Küche",
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
        alt: "San Sushi Speisekarte – Sushi, Sashimi und koreanische Küche",
      },
    ],
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
