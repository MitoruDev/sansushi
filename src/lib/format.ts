/**
 * Formatiert ein Datum im Format YYYY-MM-DD (z. B. von Sanity) lesbar auf Deutsch.
 * Beispiel: "2025-10-27" → "27.10.2025"
 */
export function formatDateDE(dateString: string): string {
  const [y, m, d] = dateString.split("-").map(Number);
  if (!y || !m || !d) return dateString;
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
