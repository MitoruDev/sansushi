import { Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

type OpeningHoursProps = {
  variant?: "default" | "onPrimary";
};

export function OpeningHours({ variant = "default" }: OpeningHoursProps) {
  const isOnPrimary = variant === "onPrimary";
  return (
    <div
      className={
        isOnPrimary
          ? "rounded-xl border border-white/10 bg-black p-5"
          : "rounded-2xl border border-border bg-card p-6"
      }
    >
      <div className="flex items-center gap-3">
        <div
          className={
            isOnPrimary
              ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-primary-on-dark"
              : "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-on-dark"
          }
        >
          <Clock className="h-6 w-6" aria-hidden />
        </div>
        <div className="min-w-0">
          <h3
            className={
              isOnPrimary
                ? "text-lg font-semibold text-primary-on-dark"
                : "text-base font-semibold text-foreground"
            }
          >
            Öffnungszeiten
          </h3>
          <p className={`mt-0.5 ${isOnPrimary ? "text-white/90" : "text-sm text-muted"}`}>
            {SITE.openingHours.weekdays}
          </p>
          <p className={isOnPrimary ? "text-white/90" : "text-sm text-muted"}>
            {SITE.openingHours.sunday}
          </p>
        </div>
      </div>
    </div>
  );
}
