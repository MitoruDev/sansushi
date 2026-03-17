"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClosedBanner } from "@/components/ClosedBanner";
import { BackToTop } from "@/components/BackToTop";
import { SkipLink } from "@/components/SkipLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCallButton } from "@/components/StickyCallButton";
import { CookieBanner } from "@/components/CookieBanner";
import { LenisProvider } from "@/components/LenisProvider";
import { RestaurantJsonLd } from "@/components/JsonLd";
import type { Abwesenheit } from "@/lib/sanity";

type SiteOrStudioLayoutProps = {
  children: React.ReactNode;
  activeAbsences: Abwesenheit[];
};

export function SiteOrStudioLayout({ children, activeAbsences }: SiteOrStudioLayoutProps) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return (
      <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col overflow-hidden bg-white">
        {children}
      </div>
    );
  }

  return (
    <>
      <SkipLink />
      <LenisProvider>
        <RestaurantJsonLd />
        <ClosedBanner absences={activeAbsences} />
        <Header activeAbsences={activeAbsences} />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Breadcrumbs />
          {children}
        </main>
        <Footer />
        <StickyCallButton />
        <BackToTop />
        <CookieBanner />
      </LenisProvider>
    </>
  );
}
