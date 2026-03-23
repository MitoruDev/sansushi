"use client";

import Image from "next/image";
import { CtaCreativeSolid } from "@/components/CtaCreative";
import { ArrowRight } from "lucide-react";
import { SlideInView } from "@/components/motion/SlideInView";
import { Sushi3DVisual } from "@/components/Sushi3DVisual";
import { motion } from "framer-motion";
import { useLiteMotion } from "@/hooks/useLiteMotion";
import { SITE } from "@/lib/constants";

export function HomeAboutSection() {
  const lite = useLiteMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_30%,rgba(220,38,38,0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SlideInView direction="left">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="font-display text-3xl leading-none text-primary-on-dark/90"
                  aria-hidden
                >
                  店
                </span>
                <div className="h-px w-12 shrink-0 bg-gradient-to-r from-primary to-transparent md:w-20" />
                <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-muted">
                  DAS RESTAURANT
                </span>
              </div>
              <h2
                id="about-heading"
                className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"
              >
                Was zeichnet unsere Küche in Hagen aus?
              </h2>
              <p className="mt-4 max-w-lg text-muted leading-relaxed">
                Frische Zutaten, ehrliche Küche – vor Ort oder zum Mitnehmen.
                Wir freuen uns auf Sie im Elb-Center.
              </p>
              <p className="mt-4 max-w-lg text-sm text-muted leading-relaxed">
                San Sushi ist ein modernes Restaurant für japanische und koreanische Küche im
                Elb-Center.
              </p>
              <p className="mt-4 max-w-lg text-sm text-muted leading-relaxed">
                {SITE.owner.biography}
              </p>
              <div className="mt-6">
                <CtaCreativeSolid
                  href="/kontakt"
                  title="Kontakt- und Anfahrtsinformationen"
                  className="focus-ring rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-hover hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Kontakt &amp; Anfahrt{" "}
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 ${lite ? "" : "transition-transform duration-300 ease-out group-hover/ctas:translate-x-2 group-hover/ctas:-translate-y-px"}`}
                    aria-hidden
                  />
                </CtaCreativeSolid>
              </div>

              <motion.div
                className="relative mt-10"
                initial={lite ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 28,
                  delay: lite ? 0 : 0.1,
                }}
              >
                <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/8 via-transparent to-accent/5 p-[3px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]">
                  <div className="relative aspect-[16/6] overflow-hidden rounded-[1.35rem] border border-white/5 sm:aspect-[16/5]">
                    <Image
                      src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&h=337&q=55"
                      alt="Restaurant-Innenraum"
                      fill
                      loading="lazy"
                      quality={55}
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-transparent"
                      aria-hidden
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </SlideInView>
          <SlideInView direction="right" delay={0.06}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -inset-4 rounded-3xl bg-primary/[0.04] blur-2xl md:-inset-8" aria-hidden />
              <Sushi3DVisual />
            </div>
          </SlideInView>
        </div>
      </div>
    </section>
  );
}

