import { CalendarX } from "lucide-react";
import type { Abwesenheit } from "@/lib/sanity";
import { formatDateDE } from "@/lib/format";

type ClosedBannerProps = {
  absences: Abwesenheit[];
};

export function ClosedBanner({ absences }: ClosedBannerProps) {
  if (!absences.length) return null;

  const text =
    absences.length === 1 && absences[0].customText
      ? absences[0].customText
      : absences
          .map(
            (a) =>
              a.customText ||
              `Geschlossen vom ${formatDateDE(a.startDate)} bis ${formatDateDE(a.endDate)}.`
          )
          .join(" ");

  return (
    <div
      className="closed-banner flex items-center justify-center gap-2 bg-primary px-4 py-3 text-center text-sm font-medium text-white"
      role="alert"
    >
      <CalendarX className="h-5 w-5 shrink-0" aria-hidden />
      <span>{text}</span>
    </div>
  );
}
