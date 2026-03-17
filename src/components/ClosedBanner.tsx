import { CalendarX } from "lucide-react";

const CLOSED_END_DATE = new Date("2025-11-27T23:59:59");

export function ClosedBanner() {
  if (new Date() > CLOSED_END_DATE) return null;

  return (
    <div
      className="closed-banner flex items-center justify-center gap-2 bg-primary px-4 py-3 text-center text-sm font-medium text-white"
      role="alert"
    >
      <CalendarX className="h-5 w-5 shrink-0" aria-hidden />
      <span>
        Betriebsferien: Unser Restaurant bleibt vom{" "}
        <strong className="font-bold">27.10.–27.11.2025</strong>{" "}
        geschlossen.
      </span>
    </div>
  );
}
