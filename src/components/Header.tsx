"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, LayoutGroup } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";
import type { Abwesenheit } from "@/lib/sanity";
import { LiveOpenStatus } from "@/components/LiveOpenStatus";
import { CtaCreativeSolid } from "@/components/CtaCreative";
import { useLiteMotion } from "@/hooks/useLiteMotion";

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
  const lite = useLiteMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const firstMobileNavItemRef = useRef<HTMLAnchorElement>(null);
  const navSpring = lite
    ? { duration: 0.15 }
    : { type: "spring" as const, stiffness: 420, damping: 30 };

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    firstMobileNavItemRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" && mobileMenuRef.current) {
        const focusable = Array.from(
          mobileMenuRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [href]',
          ),
        ).filter((el) => el.offsetParent !== null);
        if (!focusable.length) return;
        const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey) {
          if (currentIndex <= 0) {
            e.preventDefault();
            focusable[focusable.length - 1]?.focus();
          }
        } else if (currentIndex >= focusable.length - 1) {
          e.preventDefault();
          focusable[0]?.focus();
        }
      }
      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  };

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
          title="Zur Startseite"
          prefetch={false}
          className="group flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90"
        >
          <motion.span
            className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-primary/10"
            aria-hidden
            whileHover={lite ? {} : { rotate: [0, -7, 5, 0], scale: 1.06 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Image
              src="/favicon.svg"
              alt=""
              width={28}
              height={28}
              className="h-6 w-6 object-contain"
              priority
            />
          </motion.span>
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
                  prefetch={false}
                  title={`Zur Seite: ${label}`}
                  className={`focus-ring relative rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:bg-primary/5"
                  }`}
                >
                  <motion.span
                    className="inline-block"
                    whileHover={lite || isActive ? {} : { y: -1 }}
                    transition={navSpring}
                  >
                    {label}
                  </motion.span>
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
          <span className="ml-2 inline-flex">
            <CtaCreativeSolid
              href={`tel:${SITE.phone.main}`}
              title="Jetzt anrufen"
              className="focus-ring rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-primary/25 transition-colors hover:bg-primary-hover hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Phone
                className={`h-4 w-4 shrink-0 ${lite ? "" : "transition-transform duration-300 ease-out group-hover/ctas:-rotate-[16deg] group-hover/ctas:scale-110"}`}
                aria-hidden
              />
              Anrufen
            </CtaCreativeSolid>
          </span>
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
          ref={mobileMenuRef}
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
                    prefetch={false}
                    title={`Zur Seite: ${label}`}
                    ref={href === "/" ? firstMobileNavItemRef : null}
                    onClick={closeMobileMenu}
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
            <li className="mt-2 border-t border-border pt-2">
              <CtaCreativeSolid
                href={`tel:${SITE.phone.main}`}
                title="Jetzt anrufen"
                onClick={closeMobileMenu}
                className="focus-ring flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 font-medium text-white shadow-md shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                  <Phone
                    className={`h-4 w-4 ${lite ? "" : "transition-transform group-hover/ctas:rotate-12"}`}
                    aria-hidden
                  />
                  Anrufen
                </CtaCreativeSolid>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
