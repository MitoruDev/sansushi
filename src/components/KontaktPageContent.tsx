"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLiteMotion } from "@/hooks/useLiteMotion";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { OpeningHours } from "@/components/OpeningHours";
import { CtaCreativeSolid } from "@/components/CtaCreative";

const spring = { type: "spring" as const, stiffness: 360, damping: 28 };
const springBounce = { type: "spring" as const, stiffness: 320, damping: 24 };

export function KontaktPageContent() {
  const lite = useLiteMotion();

  const heroSequence: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: lite ? 0 : 0.1,
        delayChildren: lite ? 0 : 0.15,
      },
    },
  };

  const blurUp: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: lite ? "none" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: lite ? "none" : "blur(0px)",
      transition: spring,
    },
  };

  const cardReveal: Variants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: lite ? "none" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: lite ? "none" : "blur(0px)",
      transition: springBounce,
    },
  };

  const mapReveal: Variants = {
    hidden: { opacity: 0, scale: 0.98, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: spring,
    },
  };

  return (
    <article className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(220,38,38,0.06),transparent_50%)]"
        aria-hidden
      />

      {/* Hero image */}
      <motion.div
        className="relative mb-10 aspect-[21/4] overflow-hidden rounded-xl border border-border sm:aspect-[21/5]"
        initial={lite ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&h=267&q=70"
          alt="Restaurant San Sushi – Ambiente"
          fill
          className="object-cover"
          quality={70}
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          aria-hidden
        />
      </motion.div>

      {/* Header */}
      <motion.header
        className="mb-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={heroSequence}
      >
        <motion.div
          className="transform-origin-left mb-4 h-px w-20 max-w-full rounded-full bg-gradient-to-r from-primary to-primary/30"
          variants={blurUp}
          aria-hidden
        />
        <motion.h1
          className="font-display text-3xl font-semibold text-foreground sm:text-4xl"
          variants={blurUp}
        >
          Kontakt
        </motion.h1>
        <motion.p className="mt-3 text-muted" variants={blurUp}>
          Wir freuen uns auf Sie – im Elb-Center oder telefonisch für Ihre
          Reservierung.
        </motion.p>
      </motion.header>

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <motion.div
          className="space-y-8 lg:col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: lite ? 0 : 0.09,
                delayChildren: lite ? 0 : 0.05,
              },
            },
          }}
        >
          <motion.div
            variants={cardReveal}
            whileHover={
              lite ? {} : { y: -4, transition: { type: "spring", stiffness: 400, damping: 22 } }
            }
            className="rounded-2xl border border-primary/15 bg-card p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.03)] transition-shadow hover:border-primary/25 hover:shadow-[0_12px_40px_-12px_rgba(220,38,38,0.1)]"
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary-on-dark ring-1 ring-primary/20"
                whileHover={lite ? {} : { scale: 1.06 }}
                transition={spring}
              >
                <MapPin className="h-6 w-6" aria-hidden />
              </motion.div>
              <div>
                <h2 className="font-semibold text-foreground">Wie finde ich San Sushi?</h2>
                <p className="mt-0.5 text-sm text-muted">{SITE.address.street}</p>
                <p className="text-sm text-muted">{SITE.address.city}</p>
              </div>
            </div>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-on-dark transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              Anfahrt bei Google Maps <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={cardReveal}
            whileHover={
              lite ? {} : { y: -4, transition: { type: "spring", stiffness: 400, damping: 22 } }
            }
            className="rounded-2xl border border-primary/15 bg-card p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.03)] transition-shadow hover:border-primary/25 hover:shadow-[0_12px_40px_-12px_rgba(220,38,38,0.1)]"
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary-on-dark ring-1 ring-primary/20"
                whileHover={lite ? {} : { scale: 1.06 }}
                transition={spring}
              >
                <Phone className="h-6 w-6" aria-hidden />
              </motion.div>
              <div>
                <h2 className="font-semibold text-foreground">Wie erreiche ich das Restaurant?</h2>
                <p className="mt-0.5 text-sm text-muted">
                  <a
                    href={`tel:${SITE.phone.main}`}
                    className="focus-ring text-foreground transition-colors hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                  >
                    {SITE.phone.displayMain}
                  </a>
                </p>
                <p className="text-sm text-muted">
                  <a
                    href={`tel:${SITE.phone.mobile}`}
                    className="focus-ring text-foreground transition-colors hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                  >
                    {SITE.phone.displayMobile}
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <CtaCreativeSolid
                href={`tel:${SITE.phone.main}`}
                className="focus-ring rounded-full bg-primary px-5 py-2.5 font-medium text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Phone
                  className={`h-4 w-4 shrink-0 ${lite ? "" : "transition-transform group-hover/ctas:-rotate-[10deg]"}`}
                  aria-hidden
                />{" "}
                Jetzt anrufen
              </CtaCreativeSolid>
            </div>
          </motion.div>

          <motion.div
            variants={cardReveal}
            whileHover={
              lite ? {} : { y: -4, transition: { type: "spring", stiffness: 400, damping: 22 } }
            }
            className="rounded-2xl border border-primary/15 bg-card p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.03)] transition-shadow hover:border-primary/25 hover:shadow-[0_12px_40px_-12px_rgba(220,38,38,0.1)]"
          >
            <OpeningHours embedded />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border bg-background lg:col-span-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          variants={mapReveal}
        >
          <div className="absolute inset-0 min-h-[320px]">
            <iframe
              title="Standort San Sushi auf der Karte"
              src="https://www.google.com/maps?q=San+Sushi+Bergstra%C3%9Fe+128-130+58095+Hagen&output=embed"
              width="100%"
              height="100%"
              className="absolute inset-0 min-h-[320px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5"
            aria-hidden
          />
        </motion.div>
      </div>
    </article>
  );
}
