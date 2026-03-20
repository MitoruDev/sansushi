"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getConsent, setConsent, type ConsentStatus } from "@/lib/cookie-consent";
import { RICE_CONFETTI_STORAGE_KEY } from "@/lib/constants";
import { useLiteMotion } from "@/hooks/useLiteMotion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const lite = useLiteMotion();
  const tap = lite ? {} : { scale: 0.98 };
  const primaryHover = lite ? {} : { scale: 1.02, boxShadow: "0 8px 28px -6px rgba(220,38,38,0.45)" };
  const spring = lite ? { duration: 0.15 } : { type: "spring" as const, stiffness: 480, damping: 26 };

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
  }, []);

  const handleChoice = (status: ConsentStatus) => {
    if (status === "all" && typeof window !== "undefined") {
      try {
        const hasSeen = (() => {
          try {
            return Boolean(localStorage.getItem(RICE_CONFETTI_STORAGE_KEY));
          } catch {
            return false;
          }
        })();
        if (!hasSeen) {
          localStorage.setItem(RICE_CONFETTI_STORAGE_KEY, "1");
          window.dispatchEvent(new Event("sansushi-rice-confetti"));
        }
      } catch {
        /* private mode */
      }
    }
    setConsent(status);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Hinweis"
      className="print:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] md:left-4 md:right-4 md:bottom-4 md:max-w-lg md:rounded-xl md:border"
    >
      <p className="text-sm text-foreground">
        Wir nutzen Cookies, um die Nutzung der Website zu erfassen (sofern Sie zustimmen).
        Mehr in unserer{" "}
        <Link
          href="/datenschutz"
          className="text-primary underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <motion.button
          type="button"
          onClick={() => handleChoice("necessary")}
          whileTap={tap}
          transition={spring}
          className="focus-ring rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Ablehnen
        </motion.button>
        <motion.button
          type="button"
          onClick={() => handleChoice("all")}
          whileTap={tap}
          whileHover={primaryHover}
          transition={spring}
          className="focus-ring rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Alle akzeptieren
        </motion.button>
      </div>
    </div>
  );
}
