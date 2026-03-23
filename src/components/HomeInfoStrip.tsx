"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

const cards = [
  {
    jp: "住所",
    en: "Adresse",
    question: "Wo finden Sie uns?",
    icon: MapPin,
    body: (
      <>
        <p className="text-sm text-muted">{SITE.address.street}</p>
        <p className="text-sm text-muted">{SITE.address.city}</p>
        <a
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-on-dark transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          title="Standort auf Google Maps anzeigen"
        >
          Anfahrt planen <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </>
    ),
  },
  {
    jp: "営業時間",
    en: "Öffnungszeiten",
    question: "Wann haben wir geöffnet?",
    icon: Clock,
    body: (
      <>
        <p className="text-sm text-muted">{SITE.openingHours.weekdays}</p>
        <p className="text-sm text-muted">{SITE.openingHours.sunday}</p>
      </>
    ),
  },
  {
    jp: "お電話",
    en: "Telefon",
    question: "Wie erreichen Sie uns?",
    icon: Phone,
    body: (
      <>
        <p className="text-sm text-muted">
          <a
            href={`tel:${SITE.phone.main}`}
            className="focus-ring text-lg font-semibold text-foreground transition-colors hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
            title="Hauptnummer anrufen"
          >
            {SITE.phone.displayMain}
          </a>
        </p>
        <a
          href={`tel:${SITE.phone.main}`}
          className="group/telstrip focus-ring mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
          title="Jetzt direkt anrufen"
        >
          Jetzt anrufen{" "}
          <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 ease-out group-hover/telstrip:translate-x-1" />
        </a>
        <Link
          href="/kontakt"
          className="group/kontlink focus-ring mt-2 inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card rounded"
          title="Kontaktseite mit Telefonnummern und Anschrift"
        >
          Weitere Nummer & Kontakt
          <span className="inline-block transition-transform duration-200 group-hover/kontlink:translate-x-0.5">
            →
          </span>
        </Link>
      </>
    ),
  },
];

export function HomeInfoStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-card py-12"
      aria-label="Kontakt und Öffnungszeiten"
    >
      <div className="pointer-events-none absolute inset-0 bg-sushi-fresh" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={card.en}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-32px" }}
                transition={{
                  delay: reduceMotion ? 0 : 0.06 + i * 0.07,
                  type: "spring",
                  stiffness: 380,
                  damping: 28,
                }}
                whileHover={
                  reduceMotion
                    ? {}
                    : { y: -5, transition: { type: "spring", stiffness: 400, damping: 22 } }
                }
                className="group relative flex flex-col rounded-2xl border border-primary/12 bg-card/90 p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-primary/25 hover:shadow-[0_12px_40px_-12px_rgba(220,38,38,0.12)]"
              >
                <span
                  className="pointer-events-none absolute right-4 top-4 font-display text-4xl tabular-nums text-primary/[0.07] transition-colors group-hover:text-primary/15"
                  aria-hidden
                >
                  {num}
                </span>
                <div className="mb-4 flex items-center gap-3">
                  <motion.div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary-on-dark ring-1 ring-primary/25"
                    whileHover={reduceMotion ? {} : { scale: 1.06, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </motion.div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-primary-on-dark/75">
                      {card.jp}
                    </p>
                    <h2 className="font-display text-lg font-semibold text-foreground">
                  {card.en}
                    </h2>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-primary-on-dark/70">
                  {card.question}
                </p>
                  </div>
                </div>
                <div className="relative z-[1] flex flex-1 flex-col">{card.body}</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
