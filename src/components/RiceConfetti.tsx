"use client";

import { useEffect, useState, useCallback, type CSSProperties } from "react";

/** Einmalig beim ersten „Alle akzeptieren“ – Reis-Korn-Konfetti (nur CSS). */
export function RiceConfetti() {
  const [grains, setGrains] = useState<
    {
      id: number;
      left: number;
      delay: number;
      duration: number;
      w: number;
      h: number;
      drift: number;
    }[]
  >([]);
  const [visible, setVisible] = useState(false);

  const spawn = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const next = Array.from({ length: 52 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.35,
      duration: 2.2 + Math.random() * 1.4,
      w: 2 + Math.random() * 2.5,
      h: 6 + Math.random() * 10,
      drift: (Math.random() - 0.5) * 110,
    }));
    setGrains(next);
    setVisible(true);
    window.setTimeout(() => setVisible(false), 4200);
  }, []);

  useEffect(() => {
    const handler = () => spawn();
    window.addEventListener("sansushi-rice-confetti", handler);
    return () => window.removeEventListener("sansushi-rice-confetti", handler);
  }, [spawn]);

  if (!visible || grains.length === 0) return null;

  return (
    <div
      className="rice-confetti-root pointer-events-none fixed inset-0 z-[200] overflow-hidden"
      aria-hidden
    >
      {grains.map((g) => (
        <span
          key={g.id}
          className="rice-grain absolute top-0 rounded-full"
          style={
            {
              left: `${g.left}%`,
              width: g.w,
              height: g.h,
              animationDelay: `${g.delay}s`,
              animationDuration: `${g.duration}s`,
              "--rice-drift": `${g.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
