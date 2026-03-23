 "use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, UtensilsCrossed } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { SITE } from "@/lib/constants";
import { useLiteMotion } from "@/hooks/useLiteMotion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=768&h=432&q=45";

const [heroWord1, heroWord2] = SITE.name.includes(" ")
  ? SITE.name.split(" ", 2)
  : [SITE.name, ""];

export function HomeHero() {
  const lite = useLiteMotion();

  const content: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: lite ? 0 : 0.06,
        delayChildren: lite ? 0 : 0.04,
      },
    },
  };

  const lineTop: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: lite ? { duration: 0.25 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: lite ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: lite ? { duration: 0.25 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const titleWord: Variants = {
    hidden: { opacity: 0, y: 24, rotateX: lite ? 0 : -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: lite ? { duration: 0.25 } : { type: "spring", stiffness: 320, damping: 28 },
    },
  };

  const ctaRow: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: lite ? 0 : 0.08,
        delayChildren: lite ? 0 : 0.02,
      },
    },
  };

  const ctaItem: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: lite ? { duration: 0.25 } : { type: "spring", stiffness: 330, damping: 28 },
    },
  };

  return (
    <section
      className="relative flex min-h-[min(100dvh,56rem)] items-center justify-center overflow-hidden bg-black"
      aria-label="Startseite Hero"
    >
      {/* Bild + statische Überlagerung */}
      <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="San Sushi Restaurant – Sushi und japanische Küche in Hagen"
            fill
            className="object-cover object-center"
            priority
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            sizes="100vw"
            quality={45}
          />

        {/* Overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/80"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(220,38,38,0.18),transparent_55%),radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(245,158,11,0.08),transparent_50%),radial-gradient(ellipse_55%_35%_at_15%_92%,rgba(109,143,114,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-black/20"
          aria-hidden
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-24 text-center text-white md:-translate-y-8 md:py-28"
        initial="hidden"
        animate="visible"
        variants={content}
      >
        <motion.div
          className="transform-origin-center relative mb-2 w-full max-w-md px-4"
          variants={lineTop}
          aria-hidden
        >
          <div className="absolute inset-x-6 top-1/2 h-6 -translate-y-1/2 rounded-full bg-primary/30 blur-2xl" />
          <div className="relative mx-auto h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_24px_rgba(255,255,255,0.25)]" />
        </motion.div>

        <motion.p
          className="mt-6 font-display text-xs uppercase tracking-[0.42em] text-white/75 sm:text-sm"
          variants={fadeUp}
        >
          Sushi, Bibimbap &amp; japanische Küche in Hagen
        </motion.p>

        <motion.h1
          className="mt-5 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[1.05] tracking-tight drop-shadow-[0_4px_32px_rgba(0,0,0,0.45)]"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: lite ? 0 : 0.05,
                delayChildren: lite ? 0 : 0.01,
              },
            },
          }}
        >
          <motion.span
            className="inline-block [transform-style:preserve-3d]"
            variants={titleWord}
          >
            {heroWord1}
            {heroWord2 ? " " : ""}
          </motion.span>
          {heroWord2 ? (
            <motion.span
              className="inline-block bg-gradient-to-br from-white via-amber-50 to-white/90 bg-clip-text text-transparent [transform-style:preserve-3d]"
              variants={titleWord}
            >
              {heroWord2}
            </motion.span>
          ) : null}
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg"
          variants={fadeUp}
        >
          Frisch. Präzise. Direkt aus Hagen: Sushi, Sashimi, Ramen und koreanische Klassiker – für Sie
          im Restaurant oder zum Mitnehmen.
        </motion.p>
        <motion.div
          className="mt-4 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.16em] text-white/75"
          variants={fadeUp}
        >
          <span className="rounded-full border border-white/25 px-3 py-1">Elb-Center, Hagen</span>
          <span className="rounded-full border border-white/25 px-3 py-1">Mo–Sa 12:00–22:00</span>
          <span className="rounded-full border border-white/25 px-3 py-1">Annahme vor Ort + Mitnehmen</span>
        </motion.div>
        <motion.div
          className="mt-3 text-white/55"
          variants={fadeUp}
          aria-hidden
        >
          <span
            className="inline-block font-display text-3xl tracking-wide sm:text-4xl"
          >
            寿司
          </span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          variants={ctaRow}
        >
          <motion.div variants={ctaItem}>
            <Link
              href="/speisekarte"
              prefetch={false}
              title="Zur Speisekarte"
              className="group focus-ring flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white shadow-[0_0_26px_-12px_rgba(220,38,38,0.55)] transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <UtensilsCrossed
                className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out group-hover:rotate-[20deg] group-hover:scale-110"
                aria-hidden
              />
              Zur Speisekarte
            </Link>
          </motion.div>
          <motion.div variants={ctaItem}>
            <a
              href={`tel:${SITE.phone.main}`}
              title="Anrufen & reservieren"
              className="group focus-ring flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-colors hover:border-white/70 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Phone
                className="h-5 w-5 shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-[12deg] group-hover:scale-110"
                aria-hidden
              />
              Anrufen &amp; reservieren
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
