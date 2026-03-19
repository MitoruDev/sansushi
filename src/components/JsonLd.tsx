import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";

export function RestaurantJsonLd() {
  const siteUrl = getSiteUrl();
  const restaurantId = `${siteUrl}/#restaurant`;

  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": restaurantId,
    name: SITE.name,
    description: SITE.description,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: `+49${SITE.phone.main.replace(/^0/, "")}`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: "Hagen",
      postalCode: "58095",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coordinates.lat,
      longitude: SITE.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "12:00",
        closes: "22:00",
      },
    ],
    servesCuisine: ["Japanese", "Korean"],
    menu: `${siteUrl}/speisekarte`,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: SITE.name,
    description: SITE.description,
    url: siteUrl,
    publisher: { "@id": restaurantId },
    inLanguage: "de-DE",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurant) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
