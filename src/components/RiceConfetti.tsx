"use client";

import { useEffect, useState, useCallback } from "react";

/** Einmalig beim ersten „Alle akzeptieren“ – Reis-Korn-Konfetti (nur CSS). */
export function RiceConfetti() {
  const [grains, setGrains] = useState<
    {
      id: number;
      leftClass: string;
      delayClass: string;
      durationClass: string;
      widthClass: string;
      heightClass: string;
      driftClass: string;
    }[]
  >([]);
  const [visible, setVisible] = useState(false);

  const spawn = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const leftClasses = [
      "left-[3%]",
      "left-[8%]",
      "left-[14%]",
      "left-[21%]",
      "left-[29%]",
      "left-[35%]",
      "left-[42%]",
      "left-[48%]",
      "left-[56%]",
      "left-[62%]",
      "left-[70%]",
      "left-[77%]",
      "left-[84%]",
      "left-[90%]",
      "left-[95%]",
    ];
    const widthClasses = [
      "w-[2px]",
      "w-[2.4px]",
      "w-[2.8px]",
      "w-[3.1px]",
      "w-[2.2px]",
      "w-[2.6px]",
    ];
    const heightClasses = [
      "h-[6px]",
      "h-[7px]",
      "h-[8px]",
      "h-[10px]",
      "h-[12px]",
      "h-[14px]",
    ];
    const delayClasses = [
      "[animation-delay:0.01s]",
      "[animation-delay:0.08s]",
      "[animation-delay:0.12s]",
      "[animation-delay:0.18s]",
      "[animation-delay:0.22s]",
      "[animation-delay:0.29s]",
      "[animation-delay:0.33s]",
      "[animation-delay:0.39s]",
      "[animation-delay:0.44s]",
      "[animation-delay:0.51s]",
      "[animation-delay:0.58s]",
    ];
    const durationClasses = [
      "[animation-duration:2.1s]",
      "[animation-duration:2.4s]",
      "[animation-duration:2.7s]",
      "[animation-duration:3.1s]",
      "[animation-duration:3.3s]",
      "[animation-duration:3.5s]",
    ];
    const driftClasses = [
      "[--rice-drift:-52px]",
      "[--rice-drift:-24px]",
      "[--rice-drift:-8px]",
      "[--rice-drift:8px]",
      "[--rice-drift:24px]",
      "[--rice-drift:49px]",
      "[--rice-drift:65px]",
      "[--rice-drift:82px]",
    ];
    const next = Array.from({ length: 52 }, (_, i) => ({
      id: i,
      leftClass: leftClasses[i % leftClasses.length],
      delayClass: delayClasses[i % delayClasses.length],
      durationClass: durationClasses[i % durationClasses.length],
      widthClass: widthClasses[i % widthClasses.length],
      heightClass: heightClasses[i % heightClasses.length],
      driftClass: driftClasses[i % driftClasses.length],
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
          className={`rice-grain absolute top-0 rounded-full ${g.leftClass} ${g.widthClass} ${g.heightClass} ${g.delayClass} ${g.durationClass} ${g.driftClass}`}
        />
      ))}
    </div>
  );
}
