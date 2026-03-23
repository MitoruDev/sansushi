"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useLiteMotion } from "@/hooks/useLiteMotion";
import { SITE } from "@/lib/constants";

const spring = { type: "spring" as const, stiffness: 360, damping: 28 };

type OpeningHoursProps = {
  variant?: "default" | "onPrimary";
  /** Nur Inhalt (Icon + Text); äußere Karte + Einblend-Animation kommen vom Parent (z. B. Kontakt). */
  embedded?: boolean;
};

export function OpeningHours({ variant = "default", embedded = false }: OpeningHoursProps) {
  const lite = useLiteMotion();
  const isOnPrimary = variant === "onPrimary";

  if (isOnPrimary) {
    return (
      <div className="rounded-xl border border-white/10 bg-black p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-primary-on-dark">
            <Clock className="h-6 w-6" aria-hidden />
          </div>
          <div className="min-w-0">
          <h3 className="text-lg font-semibold text-primary-on-dark">Wann hat San Sushi geöffnet?</h3>
            <p className="mt-0.5 text-white/90">{SITE.openingHours.weekdays}</p>
            <p className="text-white/90">{SITE.openingHours.sunday}</p>
          </div>
        </div>
      </div>
    );
  }

  const inner = (
    <div className="flex items-center gap-3">
      <motion.div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-on-dark ring-1 ring-primary/20"
        whileHover={lite ? {} : { scale: 1.06 }}
        transition={spring}
      >
        <Clock className="h-6 w-6" aria-hidden />
      </motion.div>
      <div className="min-w-0">
      <h3 className="text-base font-semibold text-foreground">Wann ist San Sushi geöffnet?</h3>
        <p className="mt-0.5 text-sm text-muted">{SITE.openingHours.weekdays}</p>
        <p className="text-sm text-muted">{SITE.openingHours.sunday}</p>
      </div>
    </div>
  );

  if (embedded) {
    return inner;
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">{inner}</div>
  );
}
