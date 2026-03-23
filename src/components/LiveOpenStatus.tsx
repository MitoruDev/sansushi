"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { SITE } from "@/lib/constants";
import type { Abwesenheit } from "@/lib/sanity";

import "react-pulse-dot/dist/index.css";

const PulseDot = dynamic(() => import("react-pulse-dot").then((m) => m.default), {
  ssr: false,
  loading: () => <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden />,
});

const TIMEZONE = "Europe/Berlin";

type OpenState = {
  isOpen: boolean;
  message: string;
  nextChange?: string;
};

function parseTimeHHmm(s: string): number {
  const [h, m] = s.split(":").map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

function getNowInBerlin(): { minutesSinceMidnight: number; dayOfWeek: number; dateKey: string } {
  const now = new Date();
  const timeParts = new Intl.DateTimeFormat("de-DE", {
    timeZone: TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);
  const hour = Number(timeParts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(timeParts.find((p) => p.type === "minute")?.value ?? 0);
  const minutesSinceMidnight = hour * 60 + minute;

  const weekdayParts = new Intl.DateTimeFormat("de-DE", {
    timeZone: TIMEZONE,
    weekday: "short",
  }).formatToParts(now);
  const weekdayShort = weekdayParts.find((p) => p.type === "weekday")?.value ?? "So";
  const dayMap: Record<string, number> = { So: 0, Mo: 1, Di: 2, Mi: 3, Do: 4, Fr: 5, Sa: 6 };
  const dayOfWeek = dayMap[weekdayShort] ?? 0;

  const dateParts = new Intl.DateTimeFormat("fr-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const y = dateParts.find((p) => p.type === "year")?.value ?? "";
  const mo = dateParts.find((p) => p.type === "month")?.value ?? "";
  const d = dateParts.find((p) => p.type === "day")?.value ?? "";
  const dateKey = `${y}-${mo}-${d}`;

  return { minutesSinceMidnight, dayOfWeek, dateKey };
}

function isInAbsencePeriod(dateKey: string, absences: Abwesenheit[]): Abwesenheit | null {
  for (const a of absences) {
    if (dateKey >= a.startDate && dateKey <= a.endDate) return a;
  }
  return null;
}

function computeOpenState(activeAbsences: Abwesenheit[]): OpenState {
  const { weekdays, sundayClosed } = SITE.openingHoursStructured;
  const { minutesSinceMidnight, dayOfWeek, dateKey } = getNowInBerlin();

  const currentAbsence = isInAbsencePeriod(dateKey, activeAbsences);
  if (currentAbsence) {
    const hint =
      currentAbsence.customText?.slice(0, 80) ?? "Öffnet wieder nach der Abwesenheit.";
    return {
      isOpen: false,
      message: "Geschlossen",
      nextChange: hint.length > 80 ? `${hint}…` : hint,
    };
  }

  if (sundayClosed && dayOfWeek === 0) {
    return {
      isOpen: false,
      message: "Geschlossen",
      nextChange: "Öffnet morgen 12:00",
    };
  }

  const openMins = parseTimeHHmm(weekdays.open);
  const closeMins = parseTimeHHmm(weekdays.close);
  const isOpen = minutesSinceMidnight >= openMins && minutesSinceMidnight < closeMins;

  if (isOpen) {
    const minsUntilClose = closeMins - minutesSinceMidnight;
    const hours = Math.floor(minsUntilClose / 60);
    const mins = minsUntilClose % 60;
    let nextChange: string;
    if (hours > 0) nextChange = `Schließt in ${hours} ${hours === 1 ? "Std." : "Std."}`;
    else if (mins > 0) nextChange = `Schließt in ${mins} Min.`;
    else nextChange = "Schließt gleich";
    return { isOpen: true, message: "Geöffnet", nextChange };
  }

  if (minutesSinceMidnight < openMins) {
    const minsUntilOpen = openMins - minutesSinceMidnight;
    const hours = Math.floor(minsUntilOpen / 60);
    if (hours >= 24) return { isOpen: false, message: "Geschlossen", nextChange: "Öffnet morgen 12:00" };
    if (hours > 0) return { isOpen: false, message: "Geschlossen", nextChange: `Öffnet in ${hours} ${hours === 1 ? "Std." : "Std."}` };
    return { isOpen: false, message: "Geschlossen", nextChange: `Öffnet in ${minsUntilOpen} Min.` };
  }

  return { isOpen: false, message: "Geschlossen", nextChange: "Öffnet morgen 12:00" };
}

type LiveOpenStatusProps = {
  variant?: "compact" | "card" | "cardOnPrimary";
  /** Abwesenheiten aus Sanity (heute aktiv). Wenn leer, keine Sonder-Schließung. */
  activeAbsences?: Abwesenheit[];
};

export function LiveOpenStatus({
  variant = "compact",
  activeAbsences = [],
}: LiveOpenStatusProps) {
  const [state, setState] = useState<OpenState>(() =>
    computeOpenState(activeAbsences)
  );

  useEffect(() => {
    const tick = () => setState(computeOpenState(activeAbsences));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [activeAbsences]);

  const isCard = variant === "card" || variant === "cardOnPrimary";
  const onPrimary = variant === "cardOnPrimary";

  if (isCard) {
    return (
      <div
        className={
          onPrimary
            ? "rounded-xl border border-white/10 bg-black p-4 text-white"
            : "rounded-xl border border-border bg-card p-4"
        }
        aria-live="polite"
        aria-label={`Restaurant ${state.message.toLowerCase()}. ${state.nextChange ?? ""}`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`h-3 w-3 shrink-0 rounded-full ${
              state.isOpen
                ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse-moderate"
                : "bg-white/30"
            }`}
            aria-hidden
          />
          <p className={onPrimary ? "font-semibold text-primary-on-dark" : "font-semibold text-foreground"}>
            {state.message}
          </p>
        </div>
        <p className={`mt-2 text-xs ${onPrimary ? "text-white/70" : "text-muted"}`}>
          {SITE.openingHours.weekdays} · {SITE.openingHours.sunday}
        </p>
      </div>
    );
  }

  return (
    <span
      className="flex items-center gap-2 text-sm text-muted"
      aria-live="polite"
      aria-label={`Restaurant ${state.message.toLowerCase()}`}
      title={state.nextChange}
    >
      {state.isOpen ? (
        <span
          className="inline-flex shrink-0 origin-left text-[10px]"
          aria-hidden
        >
          <PulseDot color="#10b981" />
        </span>
      ) : (
        <span className="h-2 w-2 shrink-0 rounded-full bg-muted" aria-hidden />
      )}
      <span>{state.message}</span>
    </span>
  );
}
