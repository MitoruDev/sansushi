"use client";

import { motion, type Variants } from "framer-motion";
import { useLiteMotion } from "@/hooks/useLiteMotion";

const QUOTE_L1 = "„Bei uns wird jede Rolle mit Ruhe und Respekt vor dem Handwerk";
const QUOTE_L2 = "zubereitet.“";

export function HomeQuoteBand() {
  const lite = useLiteMotion();

  const spring = lite
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 420, damping: 30 };
  const springBounce = lite
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 340, damping: 22 };

  const mainSequence: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: lite ? 0 : 0.09,
        delayChildren: lite ? 0 : 0.06,
      },
    },
  };

  const quoteLine: Variants = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: lite ? "none" : "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: lite ? "none" : "blur(0px)",
      transition: spring,
    },
  };

  const kanjiReveal: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.72,
      rotate: -12,
      filter: lite ? "none" : "blur(6px)",
    },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: lite ? "none" : "blur(0px)",
      transition: springBounce,
    },
  };

  const kokoroLabel: Variants = {
    hidden: { opacity: 0, y: 10, letterSpacing: "0.55em" },
    show: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.35em",
      transition: spring,
    },
  };

  const bottomLine: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: lite
        ? { duration: 0.18 }
        : { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      className="relative overflow-hidden py-10 md:py-14"
      aria-label="Zitat"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(220,38,38,0.1),transparent_55%),radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(245,158,11,0.06),transparent_50%),radial-gradient(ellipse_45%_40%_at_0%_30%,rgba(109,143,114,0.09),transparent_55%)]"
        aria-hidden
      />
      <span
        className="font-jp-dekor pointer-events-none absolute bottom-8 right-6 select-none text-2xl font-light text-white/25 md:right-12 md:text-3xl"
        aria-hidden
      >
        手作り
      </span>
      <div className="pointer-events-none absolute inset-0 bg-warm-glow" aria-hidden />

      {!lite && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl"
            animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute -right-20 top-1/3 h-56 w-56 rounded-full bg-amber-500/[0.05] blur-3xl"
            animate={{ x: [0, -14, 0], y: [0, 16, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            aria-hidden
          />
        </>
      )}
      {lite && (
        <>
          <div
            className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 top-1/3 h-56 w-56 rounded-full bg-amber-500/[0.05] blur-3xl"
            aria-hidden
          />
        </>
      )}

      <div
        className="quote-band-pattern pointer-events-none absolute inset-0 opacity-[0.055]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          className="relative mx-auto w-full max-w-2xl transform-origin-center"
          initial={lite ? false : { opacity: 0, scaleX: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{
            type: lite ? "tween" : "spring",
            stiffness: 320,
            damping: 28,
            duration: lite ? 0.15 : undefined,
          }}
          aria-hidden
        >
          <div className="relative py-1">
            <motion.div
              className="absolute inset-x-4 top-1/2 h-5 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl"
              initial={false}
              animate={
                lite
                  ? {}
                  : {
                      opacity: [0.5, 0.85, 0.5],
                      scale: [1, 1.08, 1],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative mx-auto h-[3px] w-full rounded-full bg-gradient-to-r from-primary/15 via-primary to-primary/15 shadow-[0_0_32px_rgba(220,38,38,0.4),0_0_14px_rgba(220,38,38,0.3)]" />
          </div>
        </motion.div>

        <motion.div
          className="mx-auto mt-6 flex max-w-2xl flex-col items-center text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={mainSequence}
        >
          <motion.p
            className="font-display text-xl font-medium italic leading-relaxed text-foreground md:text-2xl"
            variants={quoteLine}
          >
            {QUOTE_L1}
          </motion.p>
          <motion.p
            className="mt-1 font-display text-xl font-medium italic leading-relaxed text-foreground md:text-2xl"
            variants={quoteLine}
          >
            {QUOTE_L2}
          </motion.p>

          <motion.div
            className="mt-6"
            variants={kanjiReveal}
            aria-hidden
            title="Kokoro – Herz, Geist"
          >
            <motion.span
              className="inline-block font-display text-4xl text-primary-on-dark drop-shadow-[0_0_28px_rgba(220,38,38,0.35),0_0_60px_rgba(220,38,38,0.12)] md:text-5xl"
              animate={
                lite ? {} : { scale: [1, 1.06, 1], opacity: [1, 0.92, 1] }
              }
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              心
            </motion.span>
          </motion.div>
          <motion.p className="mt-1 text-xs uppercase text-muted" variants={kokoroLabel}>
            Kokoro
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-6 flex w-full max-w-xs flex-col items-center gap-1.5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: lite ? 0 : 0.1,
                delayChildren: lite ? 0 : 0.2,
              },
            },
          }}
          aria-hidden
        >
          <motion.div
            className="transform-origin-center h-px w-20 rounded-full bg-gradient-to-r from-transparent via-accent/70 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.25)]"
            variants={bottomLine}
          />
          <motion.div className="transform-origin-center relative" variants={bottomLine}>
            <div className="absolute inset-0 scale-150 rounded-full bg-primary/20 blur-md" />
            <div className="relative h-1 w-28 rounded-full bg-gradient-to-r from-primary/40 via-primary-on-dark to-primary/40 shadow-[0_0_20px_rgba(220,38,38,0.35)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
