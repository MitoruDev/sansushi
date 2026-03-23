/**
 * Cookie-Einwilligung: Speicherung und Abfrage.
 * Vor dem Laden von Google Analytics prüfen: hasConsentForAnalytics()
 */

const STORAGE_KEY = "cookie-consent";
const COOKIE_KEY = "cookie-consent";

export type ConsentStatus = "all" | "necessary";

export function getConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "all" || raw === "necessary") return raw;
  } catch {
    // Private Browsing / blocked storage: als Fallback auf Cookie lesen.
    try {
      const match = document.cookie
        .split("; ")
        .find((item) => item.startsWith(`${STORAGE_KEY}=`))
        ?.split("=");
      const cookieValue = match?.[1];
      if (cookieValue === "all" || cookieValue === "necessary") return cookieValue;
    } catch {
      return null;
    }
  }
  return null;
}

/** true = Nutzer hat „Alle akzeptieren“ gewählt → Analytics erlauben */
export function hasConsentForAnalytics(): boolean {
  return getConsent() === "all";
}

/** Wird nach „Alle akzeptieren“ ausgelöst → z. B. Google Analytics nachladen */
export const CONSENT_ANALYTICS_EVENT = "sansushi-consent-analytics";

export function setConsent(status: ConsentStatus): void {
  if (typeof window === "undefined") return;

  const writeCookie = () => {
    if (typeof document === "undefined") return;
    try {
      document.cookie = `${COOKIE_KEY}=${status}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Cookie write blocked – proceed without persistence in that storage.
    }
  };

  try {
    localStorage.setItem(STORAGE_KEY, status);
  } catch {
    writeCookie();
  }
  writeCookie();

  if (status === "all") {
    window.dispatchEvent(new CustomEvent(CONSENT_ANALYTICS_EVENT));
  }
}
