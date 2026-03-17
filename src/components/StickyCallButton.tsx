"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useLenis } from "@/components/LenisProvider";
import { SCROLL_THRESHOLD } from "@/components/BackToTop";

export function StickyCallButton() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      const onScroll = () => setVisible(lenis.scroll > SCROLL_THRESHOLD);
      onScroll();
      const unsub = lenis.on("scroll", () =>
        setVisible(lenis.scroll > SCROLL_THRESHOLD)
      );
      return unsub;
    }
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lenis]);

  const initial = reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 };
  const animate = reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 };
  const exit = reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 };

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`tel:${SITE.phone.main}`}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{ duration: 0.2 }}
          className="focus-ring fixed bottom-6 left-4 z-40 flex min-h-[48px] min-w-[48px] items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-hover hover:shadow-primary/40 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          aria-label="Jetzt anrufen"
        >
          <Phone className="h-5 w-5 shrink-0" aria-hidden />
          <span>Jetzt anrufen</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
