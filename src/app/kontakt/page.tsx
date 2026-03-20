import type { Metadata } from "next";
import { KontaktPageContent } from "@/components/KontaktPageContent";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt – San Sushi Restaurant Hagen",
  description:
    "Kontakt & Anfahrt zu San Sushi in Hagen: Adresse Bergstraße 128-130 (Elb-Center), Telefon, Öffnungszeiten. Gern anrufen für Reservierungen oder Anfahrt in Google Maps planen.",
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
    title: "Kontakt & Anfahrt – San Sushi Restaurant Hagen",
    description:
      "Kontakt & Anfahrt zu San Sushi in Hagen: Adresse Bergstraße 128-130 (Elb-Center), Telefon, Öffnungszeiten. Gern anrufen für Reservierungen oder Anfahrt in Google Maps planen.",
  },
};

export default function KontaktPage() {
  return <KontaktPageContent />;
}
