"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useLiteMotion } from "@/hooks/useLiteMotion";
import { ChevronDown, Phone, UtensilsCrossed } from "lucide-react";
import { SITE } from "@/lib/constants";
import { CtaCreativeGlass, CtaCreativeSolid } from "@/components/CtaCreative";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80";

const [heroWord1, heroWord2] = SITE.name.includes(" ")
  ? SITE.name.split(" ", 2)
  : [SITE.name, ""];

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const lite = useLiteMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    lite ? ["0%", "0%"] : ["0%", "18%"],
  );
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    lite ? [1, 1] : [1, 1.08],
  );

  const springSnappy = lite
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 380, damping: 28 };
  const springBounce = lite
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 320, damping: 22 };

  const root: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: lite ? 0 : 0.085,
        delayChildren: lite ? 0 : 0.2,
      },
    },
  };

  const lineTop: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: lite
        ? { duration: 0.2 }
        : { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const blurUp: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: lite ? "none" : "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: springSnappy,
    },
  };

  const wordHero: Variants = {
    hidden: {
      opacity: 0,
      y: 36,
      rotateX: lite ? 0 : -28,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: springBounce,
    },
  };

  const kanjiHero: Variants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -18 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: springBounce,
    },
  };

  const ctaRow: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: lite ? 0 : 0.1,
        delayChildren: lite ? 0 : 0.05,
      },
    },
  };

  const ctaItem: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1, transition: springSnappy },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[min(100dvh,56rem)] items-center justify-center overflow-hidden bg-black"
      aria-label="Startseite Hero"
    >
      {/* Bild + Parallax */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-[-12%] h-[124%] w-[124%] min-h-full min-w-full"
          style={{ y: imageY, scale: imageScale }}
        >
          <motion.div
            className="relative h-full w-full"
            initial={lite ? false : { scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{
              duration: lite ? 0.4 : 2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Image
              src={HERO_IMAGE}
              alt="San Sushi Restaurant – Sushi und japanische Küche in Hagen"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </motion.div>
        </motion.div>

        {/* Overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/80"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_100%,rgba(220,38,38,0.18),transparent_55%),radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(245,158,11,0.08),transparent_50%),radial-gradient(ellipse_55%_35%_at_15%_92%,rgba(109,143,114,0.14),transparent_55%)]"
          aria-hidden
        />
        {/* Warme Laternen – sichtbare Amber/Gold-Glows oben links & rechts */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-[min(18rem,36vw)] w-[min(14rem,30vw)] rounded-[50%] bg-[radial-gradient(ellipse_70%_60%_at_30%_25%,rgba(253,230,138,0.65),rgba(251,191,36,0.35)_45%,rgba(245,158,11,0.12)_65%,transparent_75%)] blur-xl sm:left-[4%]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-[min(16rem,34vw)] w-[min(12rem,26vw)] rounded-[50%] bg-[radial-gradient(ellipse_65%_55%_at_70%_28%,rgba(254,243,199,0.6),rgba(252,211,77,0.32)_42%,rgba(245,158,11,0.1)_62%,transparent_72%)] blur-xl sm:right-[2%]"
          aria-hidden
        />
        {!lite && (
          <>
            <motion.div
              className="pointer-events-none absolute left-[8%] top-[10%] h-32 w-24 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(253,230,138,0.5),rgba(251,191,36,0.2)_50%,transparent_75%)] blur-lg"
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.08, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            <motion.div
              className="pointer-events-none absolute right-[10%] top-[14%] h-28 w-20 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(254,243,199,0.45),rgba(252,211,77,0.18)_55%,transparent_78%)] blur-lg"
              animate={{ opacity: [0.65, 0.95, 0.65], scale: [1, 1.06, 1] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              aria-hidden
            />
          </>
        )}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]"
          aria-hidden
        />
        {!lite && (
          <>
            <motion.div
              className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/15 blur-[100px]"
              animate={{ opacity: [0.35, 0.55, 0.35], x: [0, 20, 0] }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            />
            <motion.div
              className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-[90px]"
              animate={{ opacity: [0.25, 0.45, 0.25], x: [0, -16, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              aria-hidden
            />
          </>
        )}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
      </div>

      {/* Japanische Dekor-Schrift – lesbar, aber dezent */}
      <div
        className="font-jp-dekor pointer-events-none absolute left-2 top-[26%] hidden select-none text-6xl font-light leading-none tracking-tighter text-white/30 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)] sm:left-4 sm:block md:left-8 md:text-8xl"
        aria-hidden
      >
        鮨
      </div>
      <div
        className="font-jp-dekor pointer-events-none absolute right-2 top-[30%] hidden select-none text-4xl font-light text-white/28 drop-shadow-[0_0_16px_rgba(0,0,0,0.5)] sm:right-4 sm:block md:right-10 md:text-6xl"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden
      >
        新鮮
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-24 text-center text-white md:-translate-y-8 md:py-28"
        initial="hidden"
        animate="visible"
        variants={root}
        style={
          lite ? undefined : { perspective: "1000px" }
        }
      >
        <motion.div
          className="relative mb-2 w-full max-w-md px-4"
          variants={lineTop}
          style={{ originX: 0.5 }}
          aria-hidden
        >
          <div className="absolute inset-x-6 top-1/2 h-6 -translate-y-1/2 rounded-full bg-primary/30 blur-2xl" />
          <div className="relative mx-auto h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_24px_rgba(255,255,255,0.25)]" />
        </motion.div>

        <motion.p
          className="mt-6 font-display text-xs uppercase tracking-[0.42em] text-white/75 sm:text-sm"
          variants={blurUp}
        >
          Japan &amp; Korea · Im Herzen von Hagen
        </motion.p>

        <motion.h1
          className="mt-5 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[1.05] tracking-tight drop-shadow-[0_4px_32px_rgba(0,0,0,0.45)]"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: lite ? 0 : 0.07,
                delayChildren: lite ? 0 : 0.02,
              },
            },
          }}
        >
          <motion.span
            className="inline-block [transform-style:preserve-3d]"
            variants={wordHero}
          >
            {heroWord1}
            {heroWord2 ? " " : ""}
          </motion.span>
          {heroWord2 ? (
            <motion.span
              className="inline-block bg-gradient-to-br from-white via-amber-50 to-white/90 bg-clip-text text-transparent [transform-style:preserve-3d]"
              variants={wordHero}
            >
              {heroWord2}
            </motion.span>
          ) : null}
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg"
          variants={blurUp}
        >
          Frisch. Von Hand. Für Sie. Jede Rolle mit Hingabe zubereitet – ob Sushi
          oder Bibimbap, bei uns erleben Sie echte japanische und koreanische Küche.
        </motion.p>

        <motion.div className="relative mt-6" variants={kanjiHero} aria-hidden>
          <motion.span
            className="inline-block font-display text-3xl text-white/55 sm:text-4xl"
            animate={
              lite
                ? {}
                : {
                    textShadow: [
                      "0 0 20px rgba(220,38,38,0.2)",
                      "0 0 36px rgba(220,38,38,0.45)",
                      "0 0 20px rgba(220,38,38,0.2)",
                    ],
                  }
            }
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            寿司
          </motion.span>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          variants={ctaRow}
        >
          <motion.div variants={ctaItem}>
            <CtaCreativeSolid
              href="/speisekarte"
              className="focus-ring rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(220,38,38,0.65),0_8px_24px_-6px_rgba(0,0,0,0.4)] transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <UtensilsCrossed
                className={`h-5 w-5 shrink-0 ${lite ? "" : "transition-transform duration-300 ease-out group-hover/ctas:rotate-[20deg] group-hover/ctas:scale-110"}`}
                aria-hidden
              />
              Zur Speisekarte
            </CtaCreativeSolid>
          </motion.div>
          <motion.div variants={ctaItem}>
            <CtaCreativeGlass
              href={`tel:${SITE.phone.main}`}
              className="focus-ring rounded-full border border-white/40 bg-white/5 px-7 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Phone
                className={`h-5 w-5 shrink-0 ${lite ? "" : "transition-transform duration-300 ease-out group-hover/ctag:-rotate-[12deg] group-hover/ctag:scale-110"}`}
                aria-hidden
              />
              Anrufen &amp; reservieren
            </CtaCreativeGlass>
          </motion.div>
        </motion.div>
      </motion.div>

      {!lite && (
        <motion.div
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/40"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          aria-hidden
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.4em]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
