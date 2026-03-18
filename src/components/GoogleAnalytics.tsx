"use client";

import { useEffect } from "react";
import { CONSENT_ANALYTICS_EVENT, hasConsentForAnalytics } from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-BPN3EGEL41";

function loadGoogleAnalytics(): void {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  if (!hasConsentForAnalytics()) return;
  if (document.querySelector(`script[data-sansushi-ga="${GA_MEASUREMENT_ID}"]`)) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.setAttribute("data-sansushi-ga", GA_MEASUREMENT_ID);
  document.head.appendChild(script);
}

/**
 * Lädt GA4 nur, wenn der Nutzer „Alle akzeptieren“ gewählt hat
 * (beim ersten Besuch mit bestehender Zustimmung oder nach Klick im Cookie-Banner).
 */
export function GoogleAnalytics() {
  useEffect(() => {
    loadGoogleAnalytics();
    const onConsent = () => loadGoogleAnalytics();
    window.addEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
  }, []);

  return null;
}
