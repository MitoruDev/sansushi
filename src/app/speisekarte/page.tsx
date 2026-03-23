"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLiteMotion } from "@/hooks/useLiteMotion";
import {
  Fish,
  CircleDot,
  LayoutGrid,
  ChefHat,
  Salad,
  Soup,
  UtensilsCrossed,
  Leaf,
  Cookie,
  Wine,
  FileDown,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import type { MenuCategory, MenuItem } from "@/data/menu";
import { menuCategories } from "@/data/menu";
import { useLenis } from "@/components/LenisProvider";

const categoryIcons: Record<string, LucideIcon> = {
  "nigiri-sashimi": Fish,
  maki: CircleDot,
  "sushi-sets": LayoutGrid,
  koreanisch: ChefHat,
  vorspeisen: Salad,
  suppen: Soup,
  hauptgerichte: UtensilsCrossed,
  "salate-beilagen": Leaf,
  desserts: Cookie,
  getraenke: Wine,
};

const categoryImages: Record<string, string> = {
  "nigiri-sashimi":
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=960&h=320&q=65",
  maki: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=960&h=320&q=65",
  "sushi-sets":
    "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=960&h=320&q=65",
  koreanisch:
    "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=960&h=320&q=65",
  vorspeisen:
    "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=960&h=320&q=65",
  suppen:
    "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=960&h=320&q=65",
  hauptgerichte:
    "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=960&h=320&q=65",
  "salate-beilagen":
    "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=960&h=320&q=65",
  desserts:
    "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=960&h=320&q=65",
  getraenke:
    "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=960&h=320&q=65",
};

export default function SpeisekartePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const lenis = useLenis();
  /** Anker im normalen Fluss (nicht sticky): sticky-Filter wirkt sonst „schon sichtbar“ → scrollIntoView scrollt nicht hoch. */
  const filterScrollAnchorRef = useRef<HTMLDivElement>(null);
  /** Nach State-Update: Scroll erst im Layout-Effekt, wenn DOM (ein/ausgeblendete Kategorien) aktualisiert ist. */
  const scrollFiltersAfterCommit = useRef(false);

  /**
   * Lenis steuert das Scrollen auf der Site — window.scrollTo greift oft nicht zuverlässig.
   * Nach Kollabieren der Liste: resize(), sonst ist limit/animatedScroll noch „alte“ lange Seite.
   */
  const scrollPageToFilterAnchor = (immediate: boolean) => {
    const el = filterScrollAnchorRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const inst = reduced || immediate;
    const headerPad = window.matchMedia("(min-width: 640px)").matches ? 96 : 76;

    lenis?.resize();
    if (lenis) {
      lenis.scrollTo(el, {
        offset: -headerPad,
        immediate: inst,
        force: true,
      });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - headerPad;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: inst ? "auto" : "smooth",
      });
    }
  };

  useLayoutEffect(() => {
    if (!scrollFiltersAfterCommit.current) return;
    scrollFiltersAfterCommit.current = false;
    const filterOn = activeCategory !== null;
    // Filter zu: Seite wird kurz → sofort scrollen; ggf. zweiter Frame nach Lenis-Limit
    scrollPageToFilterAnchor(filterOn);
    if (filterOn) {
      requestAnimationFrame(() => {
        lenis?.resize();
        requestAnimationFrame(() => scrollPageToFilterAnchor(true));
      });
    }
  }, [activeCategory, lenis]);

  /** Direkter Scroll (z. B. „Alle“ ist schon aktiv – activeCategory ändert sich nicht). */
  const scrollToFilterSectionNow = () => {
    requestAnimationFrame(() => scrollPageToFilterAnchor(false));
  };

  const activeCategoryData = activeCategory
    ? menuCategories.find((c) => c.id === activeCategory)
    : null;

  const lite = useLiteMotion();
  const spring = lite
    ? { duration: 0.2 }
    : { type: "spring" as const, stiffness: 380, damping: 28 };
  const filterChipHover = lite ? {} : { y: -1 };
  const filterChipTap = lite ? {} : { scale: 0.97 };
  const heroStagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: lite ? 0 : 0.08,
        delayChildren: lite ? 0 : 0.12,
      },
    },
  };
  const heroItem: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: spring,
    },
  };

  return (
    <article className="relative mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,38,38,0.08),transparent_55%)]"
        aria-hidden
      />

      {/* Hero mit Bild + Text */}
      <section
        className="relative -mx-4 mb-10 aspect-[21/9] overflow-hidden rounded-none sm:mx-0 sm:rounded-2xl"
        aria-label="Speisekarte – Kopfbereich"
      >
        <motion.div
          className="absolute inset-0"
          initial={lite ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?auto=format&fit=crop&w=1200&h=525&q=70"
            alt="Speisekarte San Sushi – Sushi, Sashimi und asiatische Gerichte"
            fill
            quality={70}
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(220,38,38,0.15),transparent_60%)]"
          aria-hidden
        />
        {!lite && (
          <div
            className="pointer-events-none absolute bottom-0 left-1/4 h-40 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
            aria-hidden
          />
        )}

        <motion.div
          className="absolute bottom-0 left-0 right-0 flex flex-col p-4 sm:p-6"
          initial="hidden"
          animate="visible"
          variants={heroStagger}
        >
          <motion.div
            className="mb-3 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.2)]"
            variants={heroItem}
            aria-hidden
          />
          <motion.h1
            className="font-display text-2xl font-semibold text-white drop-shadow-lg sm:text-3xl"
            variants={heroItem}
          >
            Speisekarte
          </motion.h1>
          <motion.p
            className="mt-1 max-w-xl text-sm text-white/90 sm:text-base"
            variants={heroItem}
          >
            Frisch zubereitet, mit Sorgfalt – für Sie.
          </motion.p>
          <motion.div className="mt-3" variants={heroItem}>
            <motion.a
              href="/speisekarte.pdf"
              title="Speisekarte als PDF herunterladen"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-4px_rgba(255,255,255,0.15)] transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={lite ? {} : { scale: 1.03, y: -2 }}
              whileTap={lite ? {} : { scale: 0.98 }}
              transition={spring}
            >
              <FileDown className="h-4 w-4" aria-hidden /> PDF herunterladen
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll-Ziel: fester Punkt im Dokument (sticky-Leiste allein würde unten nicht nach oben scrollen) */}
      <div
        ref={filterScrollAnchorRef}
        className="h-0 w-full shrink-0 scroll-mt-[76px] sm:scroll-mt-24"
        aria-hidden
      />

      {/* Kategorie-Filter + Aktuell-Anzeige */}
      <div className="sticky top-[72px] z-10 -mx-4 mb-8 border-b border-border/80 bg-background/95 shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur sm:top-20 sm:mx-0">
        {activeCategoryData && (
          <div className="flex items-center gap-2 border-b border-primary/30 bg-primary/10 px-4 py-3 sm:px-0">
            {(() => {
              const Icon = categoryIcons[activeCategoryData.id];
              return (
                <>
                  {Icon && <Icon className="h-5 w-5 text-primary-on-dark" aria-hidden />}
                  <span className="text-sm font-semibold text-primary-on-dark">
                    Du bist hier: {activeCategoryData.name}
                  </span>
                </>
              );
            })()}
          </div>
        )}
        <nav
          className="scrollbar-primary flex gap-2 overflow-x-auto border-b border-border px-4 py-3 sm:px-0"
          aria-label="Kategorien"
        >
          <motion.button
            type="button"
            onClick={() => {
              if (activeCategory === null) {
                scrollToFilterSectionNow();
                return;
              }
              scrollFiltersAfterCommit.current = true;
              setActiveCategory(null);
            }}
            whileHover={filterChipHover}
            whileTap={filterChipTap}
            transition={spring}
            className={`focus-ring whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-[box-shadow,background-color,color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              activeCategory === null
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-card text-muted hover:bg-border hover:text-foreground"
            }`}
          >
            Alle
          </motion.button>
          {menuCategories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                type="button"
                onClick={() => {
                  scrollFiltersAfterCommit.current = true;
                  setActiveCategory(isActive ? null : cat.id);
                }}
                whileHover={filterChipHover}
                whileTap={filterChipTap}
                transition={spring}
                className={`focus-ring flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-[box-shadow,background-color,color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-card text-muted hover:bg-border hover:text-foreground"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden />}
                {cat.name}
              </motion.button>
            );
          })}
        </nav>
      </div>

      <div className="space-y-12">
        {menuCategories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            icon={categoryIcons[category.id]}
            image={categoryImages[category.id]}
            isExpanded={
              activeCategory === null || activeCategory === category.id
            }
            isActiveCategory={activeCategory === category.id}
            lite={lite}
          />
        ))}
      </div>
    </article>
  );
}

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

function DishList({ items }: { items: MenuItem[] }) {
  const lite = useLiteMotion();
  const container = lite
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0, delayChildren: 0 } } }
    : listContainer;
  const item = lite
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : listItem;

  return (
    <motion.ul
      className="grid gap-2 sm:grid-cols-2"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
    >
      {items.map((itemData) => (
        <motion.li
          key={itemData.id}
          variants={item}
          whileHover={lite ? {} : { y: -2 }}
          whileTap={lite ? {} : { scale: 0.995 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
          className="group flex cursor-default items-start justify-between gap-4 rounded-xl border border-border bg-background/50 px-4 py-3 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5"
        >
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-foreground">{itemData.name}</h3>
              {itemData.tags?.includes("vegetarian") && (
                <span
                  className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full border border-emerald-500/45 bg-emerald-500/12 p-1.5 text-emerald-400 sm:px-2.5 sm:py-0.5 sm:text-xs sm:font-semibold sm:tracking-wide"
                  aria-label="Vegetarisch"
                  title="Vegetarisch"
                >
                  <Sprout className="h-4 w-4 shrink-0 sm:h-3.5 sm:w-3.5" aria-hidden />
                  <span className="hidden sm:inline">Vegetarisch</span>
                </span>
              )}
            </div>
            {itemData.description && (
              <p className="mt-0.5 text-sm text-muted">{itemData.description}</p>
            )}
          </div>
          <span className="shrink-0 font-semibold tabular-nums text-primary-on-dark">
            {itemData.price}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function CategorySection({
  category,
  icon: Icon,
  image,
  isExpanded,
  isActiveCategory,
  lite,
}: {
  category: MenuCategory;
  icon?: LucideIcon;
  image?: string;
  isExpanded: boolean;
  isActiveCategory: boolean;
  lite: boolean;
}) {
  if (!isExpanded) return null;

  const sectionVariants: Variants = lite
    ? {
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.32, ease: "easeOut" },
        },
      }
    : {
        hidden: { opacity: 0, y: 22, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 320, damping: 28 },
        },
      };

  return (
    <motion.section
      id={category.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={sectionVariants}
      className={`scroll-mt-36 rounded-2xl transition-all ${
        isActiveCategory
          ? "ring-2 ring-primary/50 ring-offset-2 ring-offset-background shadow-[0_0_0_1px_rgba(220,38,38,0.1)]"
          : ""
      }`}
      aria-labelledby={`category-${category.id}`}
    >
      {image && (
        <div className="group relative mb-0 aspect-[3/1] overflow-hidden rounded-t-2xl">
          <motion.div
            className="absolute inset-0"
            whileHover={lite ? {} : { scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={image}
              alt={`Gerichte der Kategorie ${category.name}`}
              fill
              quality={65}
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-4">
            {Icon && (
              <motion.span
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-[0_0_24px_-4px_rgba(220,38,38,0.5)]"
                whileHover={lite ? {} : { scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <Icon className="h-6 w-6" aria-hidden />
              </motion.span>
            )}
            <h2
              id={`category-${category.id}`}
              className="font-display text-2xl font-semibold text-white drop-shadow-lg sm:text-3xl"
            >
              {category.name}
            </h2>
          </div>
        </div>
      )}

      <div className="rounded-b-2xl border border-t-0 border-border bg-card p-4 sm:p-6">
        {!image && (
          <div className="mb-4 flex items-center gap-3 border-b border-primary/25 pb-3">
            <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-primary/50 to-transparent" aria-hidden />
            <h2
              id={`category-${category.id}`}
              className="flex items-center gap-3 font-display text-xl font-semibold text-foreground"
            >
              {Icon && (
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary-on-dark ring-1 ring-primary/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              )}
              {category.name}
            </h2>
            <div className="h-px flex-1 max-w-12 bg-gradient-to-l from-primary/50 to-transparent" aria-hidden />
          </div>
        )}
        <DishList items={category.items} />
      </div>
    </motion.section>
  );
}
