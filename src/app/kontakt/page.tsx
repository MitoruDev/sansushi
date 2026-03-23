import type { Metadata } from "next";
import { KontaktPageContent } from "@/components/KontaktPageContent";
import { getSiteUrl } from "@/lib/site-url";

const pageTitle = "Kontakt & Anfahrt – San Sushi Restaurant Hagen";
const pageDescription =
  "Kontakt & Anfahrt zu San Sushi in Hagen: Adresse Bergstraße 128-130 (Elb-Center), Telefon, Öffnungszeiten. Gern anrufen für Reservierungen oder Anfahrt in Google Maps planen.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/kontakt",
    languages: {
      de: "/kontakt",
      "x-default": "/kontakt",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "San Sushi",
    url: `${getSiteUrl()}/kontakt`,
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "San Sushi – Kontakt und Anfahrt in Hagen",
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
    "San Sushi Kontakt",
    "Anfahrt Hagen",
    "Telefonnummer San Sushi",
    "Bergstraße 128-130",
  ],
};

export default function KontaktPage() {
  return <KontaktPageContent />;
}
