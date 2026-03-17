import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClosedBanner } from "@/components/ClosedBanner";
import { RestaurantJsonLd } from "@/components/JsonLd";
import { BackToTop } from "@/components/BackToTop";
import { LenisProvider } from "@/components/LenisProvider";
import { SkipLink } from "@/components/SkipLink";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyCallButton } from "@/components/StickyCallButton";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sansushi.de"),
  title: {
    default: "San Sushi – Japanische & Koreanische Küche | Sushi Hagen",
    template: "%s | San Sushi Hagen",
  },
  description:
    "Restaurant San Sushi in Hagen: frisches Sushi, Bibimbap und japanische sowie koreanische Küche. Bergstraße 128-130, Elb-Center. Vor Ort oder zum Mitnehmen. Speisekarte ansehen oder jetzt anrufen.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "San Sushi",
    title: "San Sushi – Japanische & Koreanische Küche | Sushi Hagen",
    description:
      "Restaurant San Sushi in Hagen: frisches Sushi, Bibimbap und japanische sowie koreanische Küche. Bergstraße 128-130, Elb-Center. Vor Ort oder zum Mitnehmen. Speisekarte ansehen oder jetzt anrufen.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "San Sushi – Japanische & Koreanische Küche in Hagen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "San Sushi – Japanische & Koreanische Küche | Sushi Hagen",
    description:
      "Restaurant San Sushi in Hagen: frisches Sushi, Bibimbap und japanische sowie koreanische Küche. Bergstraße 128-130, Elb-Center. Vor Ort oder zum Mitnehmen. Speisekarte ansehen oder jetzt anrufen.",
    images: ["/opengraph-image"],
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0c0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${plusJakarta.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <SkipLink />
        <LenisProvider>
          <RestaurantJsonLd />
          <ClosedBanner />
          <Header />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            <Breadcrumbs />
            {children}
          </main>
          <Footer />
          <StickyCallButton />
          <BackToTop />
          <CookieBanner />
        </LenisProvider>
      </body>
    </html>
  );
}
