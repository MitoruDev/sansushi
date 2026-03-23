"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_ANALYTICS_EVENT, hasConsentForAnalytics } from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-BPN3EGEL41";
const GA_SCRIPT_ID = "sansushi-ga-script";

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

function ensureBaseAnalyticsBootstrapped(): void {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;

  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  if (!window.gtag) {
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag;
  }

  if (gaInitialized) return;
  gaInitialized = true;

  window.gtag("consent", "default", deniedConsent);
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  const existingTag = document.querySelector(`#${GA_SCRIPT_ID}`);
  if (existingTag) return;
  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

function sendPageViewMeasurement(pathname: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  if (!hasConsentForAnalytics()) return;

  const pageLocation = `${window.location.origin}${pathname}`;
  if (lastTrackedPage === pageLocation) return;

  lastTrackedPage = pageLocation;
  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: pageLocation,
    page_path: pathname,
    send_to: GA_MEASUREMENT_ID,
  });
}

/**
 * Initialisiere GA4 (Consent Mode) und tracke LCP-freundliche Page-Views.
 */
function initGoogleAnalytics(): void {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  ensureBaseAnalyticsBootstrapped();
  const hasConsent = hasConsentForAnalytics();
  setAnalyticsConsent(hasConsent ? "granted" : "denied");
}

function trackIfAllowed(pathname: string) {
  sendPageViewMeasurement(pathname);
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  useEffect(() => {
    initGoogleAnalytics();
    const onConsent = () => {
      initGoogleAnalytics();
      sendPageViewMeasurement(pathname);
    };
    window.addEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
  }, [pathname]);

  useEffect(() => {
    trackIfAllowed(pathname);
  }, [pathname]);

  return null;
}
