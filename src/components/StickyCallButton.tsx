"use client";

import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export function StickyCallButton() {
  return (
    <a
      href={`tel:${SITE.phone.main}`}
      className="focus-ring fixed bottom-6 left-4 z-40 flex min-h-[48px] min-w-[48px] items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-hover hover:shadow-primary/40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
      aria-label="Jetzt anrufen"
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden />
      <span>Jetzt anrufen</span>
    </a>
  );
}
