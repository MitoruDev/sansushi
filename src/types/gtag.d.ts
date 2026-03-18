/** Google Analytics gtag (nur nach Cookie-Zustimmung geladen) */
interface Window {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
