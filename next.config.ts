import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "frame-ancestors 'self'",
      "object-src 'none'",
      "form-action 'self'",
      "connect-src 'self' https://*.sanity.io https://sanity.io https://*.sanity-cdn.com https://sanity-cdn.com https://*.api.sanity.io https://*.cdn.sanity.io https://registry.npmjs.org https://api.npmjs.org https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://fonts.gstatic.com https://maps.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://*.sanity-cdn.com",
      "frame-src 'self' https://www.google.com https://www.google.de https://*.sanity-cdn.com",
      "manifest-src 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  { key: "X-Robots-Tag", value: "index, follow" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
  images: {
    qualities: [45, 50, 52, 55, 60, 65],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
