import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";

export function RestaurantJsonLd() {
  const siteUrl = getSiteUrl();
  const restaurantId = `${siteUrl}/#restaurant`;
  const menuUrl = `${siteUrl}/speisekarte`;

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
    menu: menuUrl,
    hasMenu: menuUrl,
    acceptsReservations: true,
    openingHours: ["Mo-Sa 12:00-22:00", "So geschlossen"],
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
      /** Sonntag ganztägig geschlossen (Google: bei „closed all day“ opens/closes gleich, z. B. 00:00). */
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
      },
    ],
    servesCuisine: ["Japanese", "Korean"],
    sameAs: [SITE.socialProfiles.facebook, SITE.socialProfiles.instagram, SITE.googleReviewsUrl],
    hasMap: SITE.mapsUrl,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Kundenservice",
      telephone: `+49${SITE.phone.main.replace(/^0/, "")}`,
      areaServed: "DE",
      availableLanguage: ["de"],
    },
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
