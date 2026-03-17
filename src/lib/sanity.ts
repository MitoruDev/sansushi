import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "38q0l1x9";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export type Abwesenheit = {
  _id: string;
  title?: string | null;
  startDate: string;
  endDate: string;
  customText?: string | null;
};

const activeAbsencesQuery = `*[_type == "abwesenheit" && startDate <= $today && endDate >= $today] | order(startDate asc) {
  _id,
  title,
  "startDate": startDate,
  "endDate": endDate,
  customText
}`;

/** Heutiges Datum YYYY-MM-DD in Europe/Berlin (für Abwesenheits-Check). */
function getTodayDateKey(): string {
  return new Date().toLocaleDateString("fr-CA", { timeZone: "Europe/Berlin" });
}

export async function getActiveAbsences(): Promise<Abwesenheit[]> {
  try {
    const today = getTodayDateKey();
    return await sanityClient.fetch<Abwesenheit[]>(activeAbsencesQuery, {
      today,
    });
  } catch {
    return [];
  }
}
