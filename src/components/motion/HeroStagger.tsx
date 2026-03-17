"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { UtensilsCrossed, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const stagger = 0.1;

export function HeroStagger() {
  const reduceMotion = useReducedMotion();
  const item = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.div
      className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center text-white"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : stagger,
            delayChildren: 0.15,
          },
        },
      }}
    >
      <motion.p
        className="font-display text-sm uppercase tracking-[0.35em] text-white/70 sm:text-base"
        variants={item}
      >
        Japan & Korea · Im Herzen von Hagen
      </motion.p>
      <motion.h1
        className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        variants={item}
      >
        {SITE.name}
      </motion.h1>
      <motion.p
        className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/90"
        variants={item}
      >
        Frisch. Von Hand. Für Sie. Jede Rolle mit Hingabe zubereitet – ob Sushi oder
        Bibimbap, bei uns erleben Sie echte japanische und koreanische Küche.
      </motion.p>
      <motion.p
        className="mt-4 font-display text-2xl text-white/60 sm:text-3xl"
        variants={item}
        aria-hidden
      >
        寿司
      </motion.p>
      <motion.div
        className="mt-12 flex flex-wrap items-center justify-center gap-4"
        variants={item}
      >
        <Link
          href="/speisekarte"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-medium text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <UtensilsCrossed className="h-5 w-5" aria-hidden />
          Zur Speisekarte
        </Link>
        <a
          href={`tel:${SITE.phone.main}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10 hover:border-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Phone className="h-5 w-5" aria-hidden />
          Anrufen & bestellen
        </a>
      </motion.div>
    </motion.div>
  );
}
