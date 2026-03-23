"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getConsent, setConsent, type ConsentStatus } from "@/lib/cookie-consent";
import { RICE_CONFETTI_STORAGE_KEY } from "@/lib/constants";
import { useLiteMotion } from "@/hooks/useLiteMotion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const rejectButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const lite = useLiteMotion();
  const tap = lite ? {} : { scale: 0.98 };
  const primaryHover = lite ? {} : { scale: 1.02, boxShadow: "0 8px 28px -6px rgba(220,38,38,0.45)" };
  const spring = lite ? { duration: 0.15 } : { type: "spring" as const, stiffness: 480, damping: 26 };

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const timeout = window.setTimeout(() => {
      rejectButtonRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleChoice("necessary");
        return;
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLButtonElement>(".cookie-banner-action"),
        ).filter((btn) => btn.offsetParent !== null);
        if (!focusable.length) return;
        const idx = focusable.indexOf(document.activeElement as HTMLButtonElement);
        if (event.shiftKey) {
          if (idx <= 0) {
            event.preventDefault();
            focusable[focusable.length - 1]?.focus();
          }
        } else if (idx >= focusable.length - 1) {
          event.preventDefault();
          focusable[0]?.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("keydown", onKeyDown);
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [visible]);

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
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Hinweis"
      className="print:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] md:left-4 md:right-4 md:bottom-4 md:max-w-lg md:rounded-xl md:border"
    >
      <p className="text-sm text-foreground">
        Wir nutzen Cookies, um die Nutzung der Website zu erfassen (sofern Sie zustimmen).
        Mehr in unserer{" "}
        <Link
          href="/datenschutz"
          prefetch={false}
          title="Zur Datenschutzerklärung für Cookie-Hinweise"
          className="text-primary underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <motion.button
          type="button"
          ref={rejectButtonRef}
          className="cookie-banner-action focus-ring rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => handleChoice("necessary")}
          whileTap={tap}
          transition={spring}
        >
          Ablehnen
        </motion.button>
        <motion.button
          type="button"
          className="cookie-banner-action cookie-banner-action-accept focus-ring rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => handleChoice("all")}
          whileTap={tap}
          whileHover={primaryHover}
          transition={spring}
        >
          Alle akzeptieren
        </motion.button>
      </div>
    </div>
  );
}
