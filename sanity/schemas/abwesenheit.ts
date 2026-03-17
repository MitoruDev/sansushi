import { defineField, defineType } from "sanity";

export const abwesenheitType = defineType({
  name: "abwesenheit",
  title: "Abwesenheit",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel (intern)",
      type: "string",
      description: "Kurzer Titel zur Orientierung im CMS (z. B. „Betriebsferien 2025“).",
    }),
    defineField({
      name: "startDate",
      title: "Von (Datum)",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "Bis (Datum)",
      type: "date",
      validation: (Rule) => Rule.required().min(Rule.valueOfField("startDate")),
    }),
    defineField({
      name: "customText",
      title: "Hinweistext",
      type: "text",
      rows: 3,
      description:
        "Freitext für Banner und ggf. Öffnungsstatus (z. B. „Betriebsferien: Unser Restaurant bleibt vom 27.10.–27.11.2025 geschlossen.“).",
    }),
  ],
  preview: {
    select: { title: "title", startDate: "startDate", endDate: "endDate" },
    prepare({ title, startDate, endDate }) {
      const label = title || "Abwesenheit";
      const format = (s: string) =>
        new Date(s + "T12:00:00").toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      const range = [startDate, endDate]
        .filter(Boolean)
        .map(format)
        .join(" – ");
      return {
        title: label,
        subtitle: range || undefined,
      };
    },
  },
});
