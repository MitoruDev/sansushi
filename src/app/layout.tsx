import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { SiteOrStudioLayout } from "@/components/SiteOrStudioLayout";
import { RestaurantJsonLd } from "@/components/JsonLd";
import { getActiveAbsences } from "@/lib/sanity";
import { META_DESCRIPTION_HOME } from "@/lib/seo-copy";
import { META_KEYWORDS, SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

/** Google Search Console (HTML-Tag); öffentlich im Quelltext – `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` überschreibt. */
const GOOGLE_SITE_VERIFICATION_DEFAULT =
  "5fWIHKPcTsOsyXzHVdE_fb-C0wZtTAULc1qqFPi58Ms";

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

export function generateMetadata(): Metadata {
  const metadataBase = new URL(getSiteUrl());
  const canonicalUrl = metadataBase.toString().replace(/\/$/, "");
  const socialImageUrl = `${metadataBase.origin}/opengraph-image`;
  const title = "San Sushi – Sushi & koreanische Küche in Hagen | Elb-Center";
  const googleVerification =
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() ||
    process.env.GOOGLE_SITE_VERIFICATION?.trim() ||
    GOOGLE_SITE_VERIFICATION_DEFAULT;
  return {
    metadataBase,
    title: {
      default: title,
      template: "%s | San Sushi Hagen",
    },
    description: META_DESCRIPTION_HOME,
    keywords: META_KEYWORDS,
    authors: [{ name: SITE.owner.name, url: `${getSiteUrl()}/#owner` }],
    creator: SITE.owner.name,
    alternates: {
      canonical: "/",
      languages: {
        de: "/",
        "x-default": "/",
      },
    },
    manifest: "/site.webmanifest",
    verification: { google: googleVerification },
    applicationName: "San Sushi",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "San Sushi",
    },
    icons: {
      icon: [
        { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/icons/icon-180x180.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: "San Sushi",
      url: canonicalUrl,
      title,
      description: META_DESCRIPTION_HOME,
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: "San Sushi – Japanische & Koreanische Küche in Hagen",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: META_DESCRIPTION_HOME,
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: "San Sushi – Japanische & Koreanische Küche in Hagen",
        },
      ],
    },
    robots: "index, follow",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0c0c",
};

/** Abwesenheiten aus Sanity werden so alle 60 Sekunden neu geladen (Banner/Öffnungsstatus). */
export const revalidate = 60;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const activeAbsences = await getActiveAbsences();

  return (
    <html lang="de">
      <body
        className={`${plusJakarta.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <GoogleAnalytics />
        <RestaurantJsonLd />
        <SiteOrStudioLayout activeAbsences={activeAbsences}>
          {children}
        </SiteOrStudioLayout>
      </body>
    </html>
  );
}
