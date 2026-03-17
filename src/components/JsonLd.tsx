import { SITE } from "@/lib/constants";

const RESTAURANT_ID = `${SITE.url}/#restaurant`;

export function RestaurantJsonLd() {
  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": RESTAURANT_ID,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
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
    menu: `${SITE.url}/speisekarte`,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    publisher: { "@id": RESTAURANT_ID },
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
