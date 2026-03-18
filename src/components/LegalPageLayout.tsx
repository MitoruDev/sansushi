"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type LegalPageLayoutProps = {
  title: string;
  subtitle: string;
  /** Kleines japanisches Akzentzeichen (z. B. 法 / 秘) */
  jpAccent?: string;
  children: React.ReactNode;
};

export function LegalPageLayout({
  title,
  subtitle,
  jpAccent = "法",
  children,
}: LegalPageLayoutProps) {
  const reduceMotion = useReducedMotion();
  const spring = reduceMotion
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 380, damping: 30 };

  const headerGroup: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 16,
      filter: reduceMotion ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: spring,
    },
  };

  const panel: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0.25 }
        : { ...spring, delay: 0.12 },
    },
  };

  return (
    <article className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_85%_45%_at_50%_-15%,rgba(220,38,38,0.07),transparent_50%),radial-gradient(ellipse_50%_35%_at_100%_80%,rgba(245,158,11,0.04),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />

      <motion.header
        className="mb-10"
        initial="hidden"
        animate="visible"
        variants={headerGroup}
      >
        <motion.div
          className="mb-4 flex items-center gap-3"
          variants={item}
        >
          <span
            className="font-display text-2xl leading-none text-primary-on-dark/85 sm:text-3xl"
            aria-hidden
          >
            {jpAccent}
          </span>
          <div className="h-px w-10 shrink-0 bg-gradient-to-r from-primary to-transparent sm:w-14" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
            San Sushi
          </span>
        </motion.div>
        <motion.div
          className="mb-4 h-px w-16 rounded-full bg-gradient-to-r from-primary/80 to-primary/20 shadow-[0_0_16px_rgba(220,38,38,0.25)]"
          variants={item}
          aria-hidden
        />
        <motion.h1
          className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          variants={item}
        >
          {title}
        </motion.h1>
        <motion.p className="mt-3 text-sm text-muted" variants={item}>
          {subtitle}
        </motion.p>
      </motion.header>

      <motion.div
        className="rounded-2xl border border-primary/12 bg-card/90 p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm sm:p-8 md:p-10"
        initial="hidden"
        animate="visible"
        variants={panel}
      >
        {children}
      </motion.div>
    </article>
  );
}
