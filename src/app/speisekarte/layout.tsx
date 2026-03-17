import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speisekarte – Sushi, Sashimi & Koreanisch | San Sushi Hagen",
  description:
    "Speisekarte San Sushi Hagen: Sushi, Sashimi, Bibimbap, koreanische und japanische Gerichte. Frische Zutaten, vor Ort oder zum Mitnehmen. Jetzt ansehen oder als PDF herunterladen.",
  alternates: { canonical: "/speisekarte" },
};

export default function SpeisekarteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
