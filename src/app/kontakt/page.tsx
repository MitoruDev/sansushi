import type { Metadata } from "next";
import { KontaktPageContent } from "@/components/KontaktPageContent";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt – San Sushi Restaurant Hagen",
  description:
    "Kontakt & Anfahrt zu San Sushi in Hagen: Adresse Bergstraße 128-130 (Elb-Center), Telefon, Öffnungszeiten. Gern anrufen für Reservierungen oder Anfahrt in Google Maps planen.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return <KontaktPageContent />;
}
