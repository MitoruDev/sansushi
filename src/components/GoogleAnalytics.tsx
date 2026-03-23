"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_ANALYTICS_EVENT, hasConsentForAnalytics } from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-BPN3EGEL41";

const deniedConsent = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

const grantedConsent = {
  analytics_storage: "granted",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};
let gaInitialized = false;
let lastTrackedPage = "";

function setAnalyticsConsent(state: "granted" | "denied"): void {
  if (typeof window === "undefined") return;
  window.gtag?.("consent", "update", state === "granted" ? grantedConsent : deniedConsent);
}

function sendPageViewMeasurement() {
  if (typeof window === "undefined" || !window.gtag) return;
  const pageLocation = window.location.href;
  if (lastTrackedPage === pageLocation) return;

  lastTrackedPage = pageLocation;
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: pageLocation,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Initialisiere GA4 (Consent Mode) und tracke LCP-freundliche Page-Views.
 */
function initGoogleAnalytics(): void {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  const hasConsent = hasConsentForAnalytics();

  const gaScriptHost = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_HOST ?? "https://www.googletagmanager.com";
  if (!window.gtag) {
    window.dataLayer = window.dataLayer ?? [];
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag;
  }
  if (!gaInitialized) {
    window.gtag("consent", "default", deniedConsent);
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
    gaInitialized = true;
  }

  const hasExistingTag = Boolean(
    document.querySelector(`script[data-sansushi-ga="${GA_MEASUREMENT_ID}"]`),
  );
  if (!hasExistingTag) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `${gaScriptHost}/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.setAttribute("data-sansushi-ga", GA_MEASUREMENT_ID);
    document.head.appendChild(script);
  }

  setAnalyticsConsent(hasConsent ? "granted" : "denied");
  if (hasConsent) {
    sendPageViewMeasurement();
  }
}

function trackIfAllowed() {
  sendPageViewMeasurement();
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  useEffect(() => {
    initGoogleAnalytics();
    const onConsent = () => {
      initGoogleAnalytics();
    };
    window.addEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
  }, []);

  useEffect(() => {
    trackIfAllowed();
  }, [pathname]);

  return null;
}
