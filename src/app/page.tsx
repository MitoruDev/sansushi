import { WaveDivider } from "@/components/WaveDivider";
import { HomeHero } from "@/components/HomeHero";
import { HomeInfoStrip } from "@/components/HomeInfoStrip";
import { HomeQuoteBand } from "@/components/HomeQuoteBand";
import { HomeGalleryBand } from "@/components/HomeGalleryBand";
import { HomeAboutSection } from "@/components/HomeAboutSection";
import { HomeFaqSection } from "@/components/HomeFaqSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <WaveDivider />

      <HomeInfoStrip />

      <HomeQuoteBand />

      <HomeGalleryBand />

      <WaveDivider />

      <HomeAboutSection />

      <HomeFaqSection />
    </>
  );
}
