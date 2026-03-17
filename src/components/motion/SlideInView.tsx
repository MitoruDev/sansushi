"use client";

import { motion, useReducedMotion } from "framer-motion";

type SlideInViewProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
};

export function SlideInView({
  children,
  className,
  direction = "left",
  delay = 0,
  duration = 0.5,
  once = true,
}: SlideInViewProps) {
  const reduceMotion = useReducedMotion();
  const x = direction === "left" ? -24 : 24;
  const initial = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x };
  const animate = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
