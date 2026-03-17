"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "@/components/LenisProvider";

export const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      const onScroll = () => setVisible(lenis.scroll > SCROLL_THRESHOLD);
      onScroll();
      const unsub = lenis.on("scroll", () => setVisible(lenis.scroll > SCROLL_THRESHOLD));
      return unsub;
    }
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1, force: true });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const initial = reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 };
  const animate = reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 };
  const exit = reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{ duration: 0.2 }}
          className="focus-ring fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-hover hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp className="h-5 w-5" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
