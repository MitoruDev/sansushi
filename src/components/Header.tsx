"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, LayoutGroup } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Abwesenheit } from "@/lib/sanity";
import { LiveOpenStatus } from "@/components/LiveOpenStatus";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/speisekarte", label: "Speisekarte" },
  { href: "/kontakt", label: "Kontakt" },
];

type HeaderProps = {
  activeAbsences?: Abwesenheit[];
};

export function Header({ activeAbsences = [] }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-card/98 backdrop-blur-md"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-medium text-white shadow-sm shadow-primary/20 transition-transform group-hover:scale-105"
            aria-hidden
          >
            寿
          </span>
          <span>{SITE.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Hauptnavigation"
        >
          <LayoutGroup>
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`focus-ring relative rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:bg-primary/5"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-primary"
                      aria-hidden
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 30 }
                      }
                    />
                  )}
                </Link>
              );
            })}
          </LayoutGroup>
          <LiveOpenStatus variant="compact" activeAbsences={activeAbsences} />
          <a
            href={`tel:${SITE.phone.main}`}
            className="focus-ring ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-primary/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Anrufen
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="focus-ring flex min-h-11 min-w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary/10 hover:text-primary-on-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Menü öffnen oder schließen"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-primary/20 bg-card px-4 py-4 md:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="mb-3 flex items-center justify-center border-b border-border pb-3">
            <LiveOpenStatus variant="compact" activeAbsences={activeAbsences} />
          </div>
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`focus-ring flex min-h-[44px] items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive
                        ? "bg-primary/10 text-primary-on-dark"
                        : "text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2 pt-2 border-t border-border">
              <a
                href={`tel:${SITE.phone.main}`}
                className="focus-ring flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-medium text-white shadow-md shadow-primary/20 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Anrufen
              </a>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
