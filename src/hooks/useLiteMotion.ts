"use client";

import { useReducedMotion } from "framer-motion";
import { useLayoutEffect, useState } from "react";

const MOBILE_MAX = 767;

/**
 * „Leichte“ Animationen: bei prefers-reduced-motion oder schmalem Viewport
 * (typisch Handy). Blur-Filter, Infinite-Loops und layout-Animationen
 * sind auf Mobile sehr teuer → per Hook weglassen.
 */
export function useLiteMotion(): boolean {
  const systemReduce = useReducedMotion();
  const [narrow, setNarrow] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return Boolean(systemReduce || narrow);
}
