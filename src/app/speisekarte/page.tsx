"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Fish,
  CircleDot,
  LayoutGrid,
  Flame,
  Salad,
  Soup,
  UtensilsCrossed,
  Leaf,
  Cookie,
  Wine,
  FileDown,
  type LucideIcon,
} from "lucide-react";
import type { MenuCategory, MenuItem } from "@/data/menu";
import { menuCategories } from "@/data/menu";
import { FadeInView } from "@/components/motion/FadeInView";

const categoryIcons: Record<string, LucideIcon> = {
  "nigiri-sashimi": Fish,
  maki: CircleDot,
  "sushi-sets": LayoutGrid,
  koreanisch: Flame,
  vorspeisen: Salad,
  suppen: Soup,
  hauptgerichte: UtensilsCrossed,
  "salate-beilagen": Leaf,
  desserts: Cookie,
  getraenke: Wine,
};

const categoryImages: Record<string, string> = {
  "nigiri-sashimi": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
  maki: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80",
  "sushi-sets": "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&q=80",
  koreanisch: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80",
  vorspeisen: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
  suppen: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&q=80",
  hauptgerichte: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80",
  "salate-beilagen": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80",
  desserts: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&q=80",
  getraenke: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
};

export default function SpeisekartePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const activeCategoryData = activeCategory
    ? menuCategories.find((c) => c.id === activeCategory)
    : null;

  return (
    <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Hero mit Bild + Text */}
      <section className="relative -mx-4 mb-10 aspect-[21/9] overflow-hidden rounded-none sm:mx-0 sm:rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=1200&q=80"
          alt="Speisekarte San Sushi – Sushi, Sashimi und asiatische Gerichte"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <FadeInView className="absolute bottom-0 left-0 right-0 p-4 sm:p-6" duration={0.5} y={20}>
          <h1 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Speisekarte
          </h1>
          <p className="mt-1 max-w-xl text-sm text-white/90 sm:text-base">
            Frisch zubereitet, mit Sorgfalt – für Sie.
          </p>
          <a
            href="/speisekarte.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-3 inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <FileDown className="h-4 w-4" /> PDF herunterladen
          </a>
        </FadeInView>
      </section>

      {/* Kategorie-Filter + Aktuell-Anzeige */}
      <div className="sticky top-[72px] z-10 -mx-4 mb-8 bg-background/95 backdrop-blur sm:top-20 sm:mx-0">
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
          className="flex gap-2 overflow-x-auto border-b border-border px-4 py-3 sm:px-0"
          aria-label="Kategorien"
        >
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`focus-ring whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              activeCategory === null
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-card text-muted hover:bg-border hover:text-foreground"
            }`}
          >
            Alle
          </button>
          {menuCategories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() =>
                  setActiveCategory(isActive ? null : cat.id)
                }
                className={`focus-ring flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-card text-muted hover:bg-border hover:text-foreground"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" aria-hidden />}
                {cat.name}
              </button>
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
  const reduceMotion = useReducedMotion();
  const container = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0, delayChildren: 0 } } }
    : listContainer;
  const item = reduceMotion
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
          className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-background/50 px-4 py-3 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5"
        >
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-foreground">{itemData.name}</h3>
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
}: {
  category: MenuCategory;
  icon?: LucideIcon;
  image?: string;
  isExpanded: boolean;
  isActiveCategory: boolean;
}) {
  if (!isExpanded) return null;

  return (
    <FadeInView y={24} duration={0.45}>
    <section
      id={category.id}
      className={`scroll-mt-36 rounded-2xl transition-all ${
        isActiveCategory
          ? "ring-2 ring-primary/50 ring-offset-2 ring-offset-background"
          : ""
      }`}
      aria-labelledby={`category-${category.id}`}
    >
      {/* Kategorie-Bild */}
      {image && (
        <div className="relative mb-0 aspect-[3/1] overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={`Gerichte der Kategorie ${category.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-4">
            {Icon && (
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
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

      {/* Gerichte-Liste */}
      <div className="rounded-b-2xl border border-t-0 border-border bg-card p-4 sm:p-6">
        {!image && (
          <h2
            id={`category-${category.id}`}
            className="mb-4 flex items-center gap-3 border-b border-primary/30 pb-3 font-display text-xl font-semibold text-foreground"
          >
            {Icon && (
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
            )}
            {category.name}
          </h2>
        )}
        <DishList items={category.items} />
      </div>
    </section>
    </FadeInView>
  );
}
