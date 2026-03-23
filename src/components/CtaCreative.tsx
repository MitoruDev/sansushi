"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);
import { useLiteMotion } from "@/hooks/useLiteMotion";
import type { ReactNode } from "react";

const spring = { type: "spring" as const, stiffness: 420, damping: 26 };

/**
 * Primär-CTA: Licht-Schimmer beim Hover, goldener Rand-Glow, Tap-Feedback.
 */
export function CtaCreativeSolid({
  href,
  className,
  children,
  onClick,
  title,
}: {
  href: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
  title?: string;
}) {
  const lite = useLiteMotion();
  const isExternal = href.startsWith("tel:") || href.startsWith("http") || href.startsWith("mailto:");
  const tap = lite ? {} : { scale: 0.97 };
  const hover = lite ? {} : { y: -3, scale: 1.035 };

  const inner = (
    <>
      {!lite && (
        <>
          <span
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
            aria-hidden
          >
            <span className="absolute inset-y-0 left-0 w-[55%] -translate-x-full -skew-x-[18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-[650ms] ease-out group-hover/ctas:translate-x-[240%] group-hover/ctas:opacity-100" />
          </span>
          <span
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 shadow-[0_0_28px_-6px_rgba(252,211,77,0.45)] transition-opacity duration-300 group-hover/ctas:opacity-100"
            aria-hidden
          />
        </>
      )}
      <span className="relative z-[1] inline-flex items-center justify-center gap-2">{children}</span>
    </>
  );

  const shell = `group/ctas relative inline-flex overflow-hidden ${className}`;

  if (isExternal) {
    return (
      <motion.a
        href={href}
        className={shell}
        title={title}
        whileHover={hover}
        whileTap={tap}
        transition={spring}
        onClick={onClick}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <MotionLink
      href={href}
      className={shell}
      title={title}
      whileHover={hover}
      whileTap={tap}
      transition={spring}
      onClick={onClick}
    >
      {inner}
    </MotionLink>
  );
}

/**
 * Glass/outline CTA (z. B. Hero Telefon): weicher Amber-Rand, Innenglow, Tap.
 */
export function CtaCreativeGlass({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const lite = useLiteMotion();

  return (
    <motion.a
      href={href}
      className={`group/ctag relative inline-flex overflow-hidden ${className}`}
      whileHover={
        lite
          ? {}
          : {
              scale: 1.04,
              y: -2,
              boxShadow:
                "0 0 32px -8px rgba(252,211,77,0.25), inset 0 0 24px rgba(255,255,255,0.06)",
            }
      }
      whileTap={lite ? {} : { scale: 0.98 }}
      transition={spring}
    >
      {!lite && (
        <span
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-amber-200/15 via-transparent to-amber-400/10 opacity-0 transition-opacity duration-500 group-hover/ctag:opacity-100"
          aria-hidden
        />
      )}
      {!lite && (
        <span
          className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-r from-amber-200/30 via-white/20 to-amber-200/30 opacity-0 blur-[1px] transition-opacity duration-300 group-hover/ctag:opacity-70"
          aria-hidden
        />
      )}
      <span className="relative z-[1] inline-flex items-center justify-center gap-2">{children}</span>
    </motion.a>
  );
}
