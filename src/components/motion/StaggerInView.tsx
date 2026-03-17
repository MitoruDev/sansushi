"use client";

import { motion, useReducedMotion } from "framer-motion";

type StaggerInViewProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
};

export function StaggerInView({
  children,
  className,
  staggerDelay = 0.08,
  delayChildren = 0,
  once = true,
}: StaggerInViewProps) {
  const reduceMotion = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: reduceMotion ? 0 : delayChildren,
        staggerChildren: reduceMotion ? 0 : staggerDelay,
      },
    },
  };
  const item = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
    >
      {children}
    </motion.div>
  );
}

/** Use with StaggerInView: wrap each child in this so they get the stagger animation */
export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const item = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
