"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Home, UtensilsCrossed } from "lucide-react";
import { CtaCreativeSolid } from "@/components/CtaCreative";
import { useLiteMotion } from "@/hooks/useLiteMotion";

export function NotFoundContent() {
  const lite = useLiteMotion();
  const reduceMotion = useReducedMotion();
  const simple = lite || reduceMotion;

  const fadeUp = simple
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring" as const, stiffness: 380, damping: 32 },
        },
      };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: simple ? 0.04 : 0.08,
        delayChildren: simple ? 0 : 0.06,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.span
        variants={fadeUp}
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-4xl text-primary-on-dark ring-1 ring-primary/20"
        aria-hidden
      >
        寿
      </motion.span>
      <motion.p
        variants={fadeUp}
        className="font-display text-6xl font-semibold tabular-nums text-foreground sm:text-7xl"
      >
        404
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl"
      >
        Seite nicht gefunden
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-2 max-w-sm text-sm text-muted">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8">
        <CtaCreativeSolid
          href="/"
          className="focus-ring rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Home
            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/ctas:scale-110"
            aria-hidden
          />
          Zur Startseite
        </CtaCreativeSolid>
      </motion.div>
      <motion.div variants={fadeUp} className="mt-4">
        <Link
          href="/speisekarte"
          className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          <UtensilsCrossed className="h-4 w-4" aria-hidden />
          Zur Speisekarte
        </Link>
      </motion.div>
    </motion.div>
  );
}
