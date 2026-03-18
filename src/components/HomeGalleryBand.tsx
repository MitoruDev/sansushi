"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLiteMotion } from "@/hooks/useLiteMotion";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80",
    alt: "Japanisches Restaurant Ambiente",
  },
  {
    src: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80",
    alt: "Koreanische Küche",
  },
  {
    src: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80",
    alt: "Frische Sushi-Zutaten",
  },
  {
    src: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80",
    alt: "Ramen",
  },
] as const;

export function HomeGalleryBand() {
  const lite = useLiteMotion();

  return (
    <section className="relative overflow-hidden py-10 md:py-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      {!lite && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[min(100%,48rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      )}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {shots.map(({ src, alt }, i) => {
            const skew = i % 2 === 0 ? -2.5 : 2.5;
            return (
              <motion.div
                key={src}
                initial={
                  lite
                    ? { opacity: 0, y: 14 }
                    : {
                        opacity: 0,
                        y: 28,
                        scale: 0.96,
                        skewY: skew * 0.35,
                      }
                }
                whileInView={
                  lite
                    ? { opacity: 1, y: 0 }
                    : {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        skewY: 0,
                      }
                }
                viewport={{ once: true, margin: "-36px" }}
                transition={
                  lite
                    ? { duration: 0.35, delay: i * 0.05, ease: "easeOut" }
                    : {
                        type: "spring",
                        stiffness: 320,
                        damping: 26,
                        delay: 0.04 + i * 0.08,
                      }
                }
                whileHover={
                  lite
                    ? {}
                    : {
                        y: -10,
                        transition: {
                          type: "spring",
                          stiffness: 420,
                          damping: 22,
                        },
                      }
                }
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)] transition-[box-shadow,border-color] duration-300 hover:border-primary/40 hover:shadow-[0_24px_48px_-16px_rgba(220,38,38,0.18)]"
              >
                <motion.div
                  className="absolute inset-0"
                  whileHover={
                    lite ? {} : { scale: 1.09 }
                  }
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_1px_rgba(220,38,38,0.22),0_0_28px_-6px_rgba(220,38,38,0.15)]"
                  aria-hidden
                />

                <div
                  className="pointer-events-none absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-primary/0 transition-colors duration-300 group-hover:border-primary/50"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-primary/0 transition-colors duration-300 group-hover:border-primary/50"
                  aria-hidden
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
