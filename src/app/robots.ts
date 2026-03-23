import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/studio"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/studio"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/studio"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
