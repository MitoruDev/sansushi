/**
 * Cookie-Einwilligung: Speicherung und Abfrage.
 * Vor dem Laden von Google Analytics prüfen: hasConsentForAnalytics()
 */

const STORAGE_KEY = "cookie-consent";

export type ConsentStatus = "all" | "necessary";

export function getConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === "all" || raw === "necessary") return raw;
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
  localStorage.setItem(STORAGE_KEY, status);
  // Cookie für evtl. Server/Consent-Mode (1 Jahr)
  document.cookie = `cookie_consent=${status}; path=/; max-age=31536000; SameSite=Lax`;
  if (status === "all") {
    window.dispatchEvent(new CustomEvent(CONSENT_ANALYTICS_EVENT));
  }
}
