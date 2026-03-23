"use client";

import { useEffect } from "react";
import { CONSENT_ANALYTICS_EVENT, hasConsentForAnalytics } from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-BPN3EGEL41";

function grantAnalyticsConsent(): void {
  window.gtag?.("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

/**
 * Datenerfassung erfolgt erst nach „Alle akzeptieren“ (analytics_storage).
 */
function initGoogleAnalytics(): void {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  const hasConsent = hasConsentForAnalytics();
  const hasExistingTag = Boolean(
    document.querySelector(`script[data-sansushi-ga="${GA_MEASUREMENT_ID}"]`),
  );
  if (hasExistingTag) {
    if (hasConsentForAnalytics()) grantAnalyticsConsent();
    return;
  }

  if (!hasConsent) return;

  window.dataLayer = window.dataLayer ?? [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;

  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });

  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.setAttribute("data-sansushi-ga", GA_MEASUREMENT_ID);
  document.head.appendChild(script);
}

export function GoogleAnalytics() {
  useEffect(() => {
    initGoogleAnalytics();
    const onConsent = () => {
      initGoogleAnalytics();
      grantAnalyticsConsent();
    };
    window.addEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
  }, []);

  return null;
}
