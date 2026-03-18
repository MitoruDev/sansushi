"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const SUSHI_3D_SRC = "/salmon%20maki.png";

export function Sushi3DVisual() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative hidden min-h-[min(380px,55vh)] w-full items-center justify-center overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/8 via-card to-background p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:flex md:min-h-[440px] md:p-10">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
      <motion.div
        className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]"
        initial={
          reduceMotion ? false : { opacity: 0, x: 140, scale: 0.92 }
        }
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        transition={{
          duration: 0.95,
          ease: [0.22, 0.61, 0.36, 1],
        }}
      >
        <motion.div
          className="relative aspect-square w-full"
          animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }
        >
          <Image
            src={SUSHI_3D_SRC}
            alt="Dekoratives 3D-Sushi (Lachs-Maki)"
            fill
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            sizes="(max-width: 768px) 90vw, 360px"
            priority={false}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
