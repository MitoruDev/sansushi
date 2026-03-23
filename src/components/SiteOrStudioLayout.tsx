"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClosedBanner } from "@/components/ClosedBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LenisProvider } from "@/components/LenisProvider";
import type { Abwesenheit } from "@/lib/sanity";

const BackToTop = dynamic(() => import("@/components/BackToTop").then((mod) => mod.BackToTop), {
  loading: () => null,
  ssr: false,
});
const StickyCallButton = dynamic(() => import("@/components/StickyCallButton").then((mod) => mod.StickyCallButton), {
  loading: () => null,
  ssr: false,
});
const CookieBanner = dynamic(() => import("@/components/CookieBanner").then((mod) => mod.CookieBanner), {
  loading: () => null,
  ssr: false,
});
const RiceConfetti = dynamic(() => import("@/components/RiceConfetti").then((mod) => mod.RiceConfetti), {
  loading: () => null,
  ssr: false,
});
const SkipLink = dynamic(() => import("@/components/SkipLink").then((mod) => mod.SkipLink), {
  loading: () => null,
  ssr: false,
});

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
        <RiceConfetti />
      </LenisProvider>
    </>
  );
}
