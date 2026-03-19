import { SITE } from "@/lib/constants";

/**
 * Basis-URL in Client-Komponenten (z. B. Breadcrumb-JSON-LD).
 * Setze `NEXT_PUBLIC_SITE_URL` auf Vercel, damit sie zur ausgelieferten Domain passt.
 */
export function getClientSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  return SITE.url;
}
