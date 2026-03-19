/**
 * Canonical Basis-URL für Metadata, Sitemap, robots und JSON-LD.
 *
 * Auf Vercel: In Produktion `NEXT_PUBLIC_SITE_URL=https://sansushi.de` setzen,
 * damit Canonical & Schema zur Hauptdomain passen. Previews nutzen sonst `VERCEL_URL`.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return "https://sansushi.de";
}
