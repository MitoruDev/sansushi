import { NotFoundContent } from "@/components/NotFoundContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | San Sushi",
  description: "Die angeforderte Seite wurde nicht gefunden.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16">
      <NotFoundContent />
    </div>
  );
}
