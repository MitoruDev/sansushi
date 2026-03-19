"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { getClientSiteUrl } from "@/lib/site-url-client";
import { useLiteMotion } from "@/hooks/useLiteMotion";

const MotionLink = motion.create(Link);

const PATH_LABELS: Record<string, string> = {
  "/speisekarte": "Speisekarte",
  "/kontakt": "Kontakt",
  "/impressum": "Impressum",
  "/datenschutz": "Datenschutz",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const lite = useLiteMotion();

  if (pathname === "/" || pathname === "") return null;

  const label = PATH_LABELS[pathname];
  if (!label) return null;

  const items = [
    { href: "/", name: "Startseite" },
    { href: pathname, name: label },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${getClientSiteUrl()}${item.href}`,
    })),
  };

  const crumbSpring = lite
    ? { duration: 0.15 }
    : { type: "spring" as const, stiffness: 400, damping: 28 };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="group/crumbs border-b border-border bg-background/50 py-3"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li
                  key={item.href}
                  className="flex items-center gap-x-2"
                >
                  {i > 0 && (
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 text-muted/60 transition-opacity duration-200 ${lite ? "" : "group-hover/crumbs:opacity-90"}`}
                      aria-hidden
                    />
                  )}
                  {isLast ? (
                    <span className="font-medium text-foreground" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <MotionLink
                      href={item.href}
                      whileHover={lite ? {} : { x: 2 }}
                      whileTap={lite ? {} : { scale: 0.98 }}
                      transition={crumbSpring}
                      className="focus-ring rounded text-muted hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {item.name}
                    </MotionLink>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
