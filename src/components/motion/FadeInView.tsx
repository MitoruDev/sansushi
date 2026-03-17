"use client";

import { motion, useReducedMotion } from "framer-motion";

type FadeInViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  /** Optional scale for subtle zoom (e.g. 0.98) */
  scale?: number;
};

export function FadeInView({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 16,
  once = true,
  scale,
}: FadeInViewProps) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y, ...(scale != null && { scale }) };
  const animate = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, ...(scale != null && { scale: 1 }) };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-40px" }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
