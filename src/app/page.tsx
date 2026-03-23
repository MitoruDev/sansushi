import dynamic from "next/dynamic";
import { WaveDivider } from "@/components/WaveDivider";
import { HomeHero } from "@/components/HomeHero";

const HomeInfoStrip = dynamic(
  () => import("@/components/HomeInfoStrip").then((mod) => mod.HomeInfoStrip),
  { loading: () => null },
);
const HomeQuoteBand = dynamic(
  () => import("@/components/HomeQuoteBand").then((mod) => mod.HomeQuoteBand),
  { loading: () => null },
);
const HomeGalleryBand = dynamic(
  () => import("@/components/HomeGalleryBand").then((mod) => mod.HomeGalleryBand),
  { loading: () => null },
);
const HomeAboutSection = dynamic(
  () => import("@/components/HomeAboutSection").then((mod) => mod.HomeAboutSection),
  { loading: () => null },
);
const HomeFaqSection = dynamic(
  () => import("@/components/HomeFaqSection").then((mod) => mod.HomeFaqSection),
  { loading: () => null },
);
const HomeFaqJsonLd = dynamic(
  () => import("@/components/HomeFaqJsonLd").then((mod) => mod.HomeFaqJsonLd),
  { loading: () => null },
);

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

      <HomeFaqJsonLd />
      <HomeFaqSection />
    </>
  );
}
