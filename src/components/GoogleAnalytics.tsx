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
 * Analytics-Script laden und Tracking erst nach Zustimmung aktivieren.
 */
function initGoogleAnalytics(): void {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
  const hasConsent = hasConsentForAnalytics();
  const sendPageView = () => {
    if (!window.gtag) return;
    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      send_to: GA_MEASUREMENT_ID,
    });
  };
  const hasExistingTag = Boolean(
    document.querySelector(`script[data-sansushi-ga="${GA_MEASUREMENT_ID}"]`),
  );
  if (!hasExistingTag) {
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

    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.setAttribute("data-sansushi-ga", GA_MEASUREMENT_ID);
    document.head.appendChild(script);
  }

  if (hasConsent) {
    grantAnalyticsConsent();
    sendPageView();
  } else {
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }
}

export function GoogleAnalytics() {
  useEffect(() => {
    initGoogleAnalytics();
    const onConsent = () => {
      initGoogleAnalytics();
    };
    window.addEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_ANALYTICS_EVENT, onConsent);
  }, []);

  return null;
}
