"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { CONSENT_ANALYTICS_EVENT, hasConsentForAnalytics } from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-BPN3EGEL41";

type GtagCommand = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: GtagCommand;
  }
}

function normalizePath(pathname: string | null): string {
  return pathname || "/";
}

function sendPageView(pathname: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: pathname,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const [isClientReady, setIsClientReady] = useState(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(() => hasConsentForAnalytics());
  const [isConfigured, setIsConfigured] = useState(false);
  const lastPath = useRef<string | null>(null);
  const isEnabledRef = useRef(false);

  useEffect(() => {
    setIsClientReady(true);
    const updateConsentState = () => setIsEnabled(hasConsentForAnalytics());
    updateConsentState();
    isEnabledRef.current = hasConsentForAnalytics();

    window.addEventListener(CONSENT_ANALYTICS_EVENT, updateConsentState);
    return () => window.removeEventListener(CONSENT_ANALYTICS_EVENT, updateConsentState);
  }, []);

  useEffect(() => {
    isEnabledRef.current = isEnabled;
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) {
      if (isConfigured) setIsConfigured(false);
      lastPath.current = null;
      return;
    }

    if (!isConfigured || typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("consent", "update", {
      analytics_storage: isEnabled ? "granted" : "denied",
      ad_storage: isEnabled ? "granted" : "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }, [isEnabled, isConfigured]);

  useEffect(() => {
    if (!isEnabled || !isConfigured) {
      return;
    }

    const currentPath = normalizePath(pathname);
    if (lastPath.current === currentPath) {
      return;
    }

    sendPageView(currentPath);
    lastPath.current = currentPath;
  }, [isEnabled, isConfigured, pathname]);

  if (!isClientReady || !isEnabled) {
    return null;
  }

  return (
    <>
      <Script
        id="google-analytics-bootstrap"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag("consent", "default", {
              analytics_storage: "denied",
              ad_storage: "denied",
              ad_user_data: "denied",
              ad_personalization: "denied",
            });
          `,
        }}
      />
      <Script
        id="google-analytics-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          if (!isEnabledRef.current || typeof window === "undefined" || typeof window.gtag !== "function") return;

          window.gtag("consent", "update", {
            analytics_storage: "granted",
            ad_storage: "granted",
            ad_user_data: "denied",
            ad_personalization: "denied",
          });
          window.gtag("js", new Date());
          window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
          setIsConfigured(true);
          sendPageView(normalizePath(window.location.pathname));
          lastPath.current = normalizePath(window.location.pathname);
        }}
      />
    </>
  );
}
