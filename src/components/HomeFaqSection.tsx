"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLiteMotion } from "@/hooks/useLiteMotion";
import { SITE } from "@/lib/constants";
import { homeFaqItems as faqItems } from "@/data/faq";

const h2Words = ["Fragen", "&", "Antworten"];

export function HomeFaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);
  const lite = useLiteMotion();
  const spring = lite
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 420, damping: 28 };
  const springSoft = lite
    ? { duration: 0.35 }
    : { type: "spring" as const, stiffness: 280, damping: 26 };
  const springBounce = lite
    ? { duration: 0.25 }
    : { type: "spring" as const, stiffness: 380, damping: 18 };

  /** FAQ-Kopf: schneller / knackiger */
  const headerSpring = lite
    ? { duration: 0.14 }
    : { type: "spring" as const, stiffness: 580, damping: 30 };
  const headerSpringBounce = lite
    ? { duration: 0.16 }
    : { type: "spring" as const, stiffness: 540, damping: 24 };

  const headerContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: lite ? 0 : 0.04,
        delayChildren: lite ? 0 : 0.02,
      },
    },
  };

  const lineDraw: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: lite
        ? { duration: 0.15 }
        : { delay: 0.04, duration: 0.28, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const labelPop: Variants = {
    hidden: { opacity: 0, x: 16, letterSpacing: "0.6em" },
    show: {
      opacity: 1,
      x: 0,
      letterSpacing: "0.4em",
      transition: headerSpring,
    },
  };

  const subtitleReveal: Variants = {
    hidden: { opacity: 0, y: 10, skewX: -4 },
    show: { opacity: 1, y: 0, skewX: 0, transition: headerSpring },
  };

  const wordStagger: Variants = {
    hidden: { opacity: 0, y: 22, rotateX: -35 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: headerSpringBounce,
    },
  };

  const ctaReveal: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.94 },
    show: { opacity: 1, y: 0, scale: 1, transition: headerSpringBounce },
  };

  const footerContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: lite ? 0 : 0.12,
        delayChildren: lite ? 0 : 0.05,
      },
    },
  };

  const footerLine: Variants = {
    hidden: {
      opacity: 0,
      y: lite ? 6 : 14,
      filter: lite ? "none" : "blur(6px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: lite ? "none" : "blur(0px)",
      transition: springSoft,
    },
  };

  return (
    <section
      className="relative overflow-hidden border-t border-primary/20 py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      {/* Ambient + schwebende Lichtflecken */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(220,38,38,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_50%,rgba(220,38,38,0.06),transparent_50%),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(245,158,11,0.04),transparent_45%)]"
        aria-hidden
      />
      {!lite && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-primary/[0.07] blur-3xl"
            animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute -right-16 bottom-1/3 h-56 w-56 rounded-full bg-amber-500/[0.06] blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            aria-hidden
          />
        </>
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)",
          backgroundSize: "48px 100%",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          className="mb-12 flex flex-col items-start text-left md:mb-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={headerContainer}
        >
          <div className="mb-3 flex items-center gap-3">
            <motion.span
              className="font-display text-3xl leading-none text-primary-on-dark/90 md:text-4xl"
              aria-hidden
              variants={{
                hidden: { opacity: 0, rotate: -14, scale: 0.75 },
                show: {
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                  transition: headerSpringBounce,
                },
              }}
            >
              問
            </motion.span>
            <motion.div
              className="h-px w-14 origin-left bg-gradient-to-r from-primary to-transparent md:w-20"
              variants={lineDraw}
              aria-hidden
            />
            <motion.span
              className="text-[10px] font-medium uppercase text-muted"
              variants={labelPop}
            >
              FAQ
            </motion.span>
          </div>
          <motion.p
            className="text-xs tracking-widest text-primary-on-dark/80"
            variants={subtitleReveal}
          >
            よくある質問
          </motion.p>
          <motion.h2
            id="faq-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl [perspective:800px]"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: lite ? 0 : 0.035,
                  delayChildren: lite ? 0 : 0.02,
                },
              },
            }}
          >
            {h2Words.map((word) => (
              <motion.span
                key={word}
                className="mr-[0.2em] inline-block last:mr-0"
                variants={wordStagger}
                style={{ transformStyle: "preserve-3d" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border-2 border-primary/50 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary-on-dark shadow-[0_0_24px_-4px_rgba(220,38,38,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            variants={ctaReveal}
            whileHover={
              lite
                ? {}
                : {
                    scale: 1.04,
                    y: -3,
                    boxShadow: "0 0 36px -4px rgba(220,38,38,0.5)",
                  }
            }
            whileTap={lite ? {} : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            <motion.span
              className="inline-flex"
              whileHover={lite ? {} : { rotate: [0, -12, 12, 0] }}
              transition={{ duration: 0.45 }}
            >
              <Star
                className="h-4 w-4 fill-amber-400/90 text-amber-500"
                aria-hidden
              />
            </motion.span>
            Bewertungen lesen
          </motion.a>
        </motion.div>

        <ul className="space-y-3 md:space-y-4" role="list">
          {faqItems.map((item, i) => {
            const isOpen = openId === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.li
                key={item.q}
                initial={
                  lite
                    ? false
                    : { opacity: 0, x: -36, skewX: -3, filter: "blur(4px)" }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  skewX: 0,
                  filter: "blur(0px)",
                }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  ...springSoft,
                  delay: lite ? 0 : 0.06 + i * 0.09,
                }}
              >
                <motion.div
                  layout={!lite}
                  className={`overflow-hidden rounded-2xl border ${
                    isOpen
                      ? "border-primary/40 bg-card shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04),0_0_0_1px_rgba(220,38,38,0.08)]"
                      : "border-border/80 bg-card/60 hover:border-primary/25 hover:bg-card"
                  }`}
                  whileHover={
                    lite
                      ? {}
                      : {
                          y: -4,
                          transition: {
                            type: "spring",
                            stiffness: 450,
                            damping: 22,
                          },
                        }
                  }
                  animate={
                    isOpen && !lite
                      ? {
                          boxShadow: [
                            "0 8px 32px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                            "0 12px 40px -6px rgba(220,38,38,0.12), inset 0 1px 0 rgba(255,255,255,0.05)",
                            "0 8px 32px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                          ],
                        }
                      : {}
                  }
                  transition={
                    isOpen && !lite
                      ? { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                      : undefined
                  }
                >
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenId(isOpen ? null : i)}
                    className="focus-ring flex w-full items-start gap-3 px-4 py-4 text-left md:gap-4 md:px-5 md:py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                  >
                    <motion.span
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 font-display text-sm font-semibold tabular-nums text-primary-on-dark ring-1 ring-primary/25"
                      aria-hidden
                      animate={
                        isOpen && !lite
                          ? {
                              scale: [1, 1.12, 1.05],
                              boxShadow: [
                                "0 0 0 0 rgba(220,38,38,0)",
                                "0 0 0 6px rgba(220,38,38,0.15)",
                                "0 0 0 0 rgba(220,38,38,0)",
                              ],
                            }
                          : { scale: 1 }
                      }
                      transition={
                        isOpen && !lite
                          ? { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
                          : spring
                      }
                    >
                      {num}
                    </motion.span>
                    <span className="min-w-0 flex-1 pt-1 text-sm font-medium leading-snug text-foreground md:text-base">
                      {item.q}
                    </span>
                    <motion.span
                      className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background/50 text-primary-on-dark"
                      aria-hidden
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={spring}
                      style={{
                        backgroundColor: isOpen
                          ? "rgba(220, 38, 38, 0.1)"
                          : undefined,
                        borderColor: isOpen
                          ? "rgba(220, 38, 38, 0.35)"
                          : undefined,
                      }}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={
                          lite
                            ? { height: "auto", opacity: 1 }
                            : { height: 0, opacity: 0.6 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          lite
                            ? { height: 0, opacity: 0 }
                            : { height: 0, opacity: 0.5 }
                        }
                        transition={{
                          height: spring,
                          opacity: { duration: lite ? 0.15 : 0.22 },
                        }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="border-t border-border/60 bg-black/20 px-4 py-4 pl-[4.25rem] pr-14 text-sm leading-relaxed text-muted md:px-5 md:pl-[4.5rem] md:pr-16"
                          initial={
                            lite
                              ? false
                              : { opacity: 0, y: 14, skewY: 1 }
                          }
                          animate={{ opacity: 1, y: 0, skewY: 0 }}
                          exit={
                            lite
                              ? {}
                              : { opacity: 0, y: 8, transition: { duration: 0.12 } }
                          }
                          transition={{
                            ...spring,
                            delay: lite ? 0 : 0.04,
                          }}
                        >
                          <p>{item.a}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30px" }}
          variants={footerContainer}
        >
          <motion.p
            className="font-display text-sm italic text-muted/90"
            variants={footerLine}
          >
            ご来店お待ちしております
          </motion.p>
          <motion.p className="mt-1 text-xs text-muted" variants={footerLine}>
            Wir freuen uns auf Ihren Besuch.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
