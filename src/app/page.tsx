import { WaveDivider } from "@/components/WaveDivider";
import { HomeHero } from "@/components/HomeHero";
import { HomeSeoContent } from "@/components/HomeSeoContent";
import { HomeInfoStrip } from "@/components/HomeInfoStrip";
import { HomeQuoteBand } from "@/components/HomeQuoteBand";
import { HomeGalleryBand } from "@/components/HomeGalleryBand";
import { HomeAboutSection } from "@/components/HomeAboutSection";
import { HomeFaqSection } from "@/components/HomeFaqSection";
import { HomeFaqJsonLd } from "@/components/HomeFaqJsonLd";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <WaveDivider />

      <HomeInfoStrip />

      <HomeSeoContent />

      <HomeQuoteBand />

      <HomeGalleryBand />

      <WaveDivider />

      <HomeAboutSection />

      <HomeFaqJsonLd />
      <HomeFaqSection />
    </>
  );
}
