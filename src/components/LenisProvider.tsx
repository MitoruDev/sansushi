"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const LenisContext = createContext<Lenis | null>(null);

function getLenisOptions(): ConstructorParameters<typeof Lenis>[0] {
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
  return {
    autoRaf: true,
    duration: prefersReducedMotion ? 0 : 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
    smoothWheel: !prefersReducedMotion,
    infinite: false,
    anchors: true,
    syncTouch: false,
  };
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const instance = new Lenis(getLenisOptions());
    setLenis(instance);
    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, []);

  // Bei Seitenwechsel mit Next.js wieder nach oben scrollen
  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true, force: true });
  }, [lenis, pathname]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis(): Lenis | null {
  return useContext(LenisContext);
}
