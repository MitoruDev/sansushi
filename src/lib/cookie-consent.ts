/**
 * Cookie-Einwilligung: Speicherung und Abfrage.
 * Vor dem Laden von Google Analytics prüfen: hasConsentForAnalytics()
 */

const STORAGE_KEY = "cookie-consent";
const COOKIE_KEY = "cookie-consent";
const CONSENT_VERSION = "v3";
const CONSENT_DELIMITER = ":";

export type ConsentStatus = "all" | "necessary";

function normalize(raw: string | null): ConsentStatus | null {
  if (raw === null) return null;
  const value = raw.includes(CONSENT_DELIMITER)
    ? raw.split(CONSENT_DELIMITER, 2)[1]
    : raw;
  if (value === "all" || value === "necessary") return value;
  return null;
}

function isCurrentVersion(raw: string | null): boolean {
  return typeof raw === "string" && raw.startsWith(`${CONSENT_VERSION}${CONSENT_DELIMITER}`);
}

function writeStorage(storage: Storage | undefined, value: string) {
  if (!storage) return;
  try {
    storage.setItem(STORAGE_KEY, value);
  } catch {
    // Keep silent.
  }
}

function writeCookie(value: string) {
  try {
    document.cookie = `${COOKIE_KEY}=${value}; path=/; max-age=31536000; SameSite=Lax`;
  } catch {
    // Cookie write blocked – proceed without persistence in that storage.
  }
}

function readCookie(): string | null {
  try {
    const match = document.cookie.split("; ").find((item) => item.startsWith(`${COOKIE_KEY}=`))?.split("=");
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}

function clearStoredConsent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
  try {
    writeCookie("");
    document.cookie = `${COOKIE_KEY}=; path=/; max-age=0; SameSite=Lax`;
  } catch {}
}

export function getConsent(): ConsentStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const localRaw = localStorage.getItem(STORAGE_KEY);
    const cookieRaw = readCookie();
    const localRawValue = normalize(localRaw);
    const cookieRawValue = normalize(cookieRaw);

    if (localRawValue && isCurrentVersion(localRaw)) return localRawValue;
    if (cookieRawValue && isCurrentVersion(cookieRaw)) return cookieRawValue;

    const localRawLegacy = localRawValue && !isCurrentVersion(localRaw);
    const cookieRawLegacy = cookieRawValue && !isCurrentVersion(cookieRaw);
    if (localRawLegacy || cookieRawLegacy) {
      clearStoredConsent();
      return null;
    }

    return localRawValue ?? cookieRawValue;
  } catch {
    return normalize(readCookie());
  }
}

/** true = Nutzer hat „Alle akzeptieren“ gewählt → Analytics erlauben */
export function hasConsentForAnalytics(): boolean {
  return getConsent() === "all";
}

/** Wird nach „Alle akzeptieren“ ausgelöst → z. B. Google Analytics nachladen */
export const CONSENT_ANALYTICS_EVENT = "sansushi-consent-analytics";

export function setConsent(status: ConsentStatus): void {
  if (typeof window === "undefined") return;

  const consentValue = `${CONSENT_VERSION}${CONSENT_DELIMITER}${status}`;
  try {
    writeStorage(localStorage, consentValue);
  } catch {
    writeCookie(consentValue);
  }
  writeCookie(consentValue);

  if (status === "all") {
    window.dispatchEvent(new CustomEvent(CONSENT_ANALYTICS_EVENT));
  }
}
