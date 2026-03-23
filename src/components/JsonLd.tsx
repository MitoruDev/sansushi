import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";

export function RestaurantJsonLd() {
  const siteUrl = getSiteUrl();
  const restaurantId = `${siteUrl}/#restaurant`;
  const menuUrl = `${siteUrl}/speisekarte`;
  const serviceId = `${siteUrl}/#service`;
  const productId = `${siteUrl}/#product`;
  const organizationId = `${siteUrl}/#organization`;
  const ownerId = `${siteUrl}/#owner`;
  const breadcrumbId = `${siteUrl}/#breadcrumb`;

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
    founder: { "@id": ownerId },
    acceptsReservations: true,
    openingHours: ["Mo-Sa 12:00-22:00", "Su closed"],
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

  const contentUpdatedAt = new Date().toISOString();

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: SITE.name,
    legalName: SITE.name,
    description: SITE.description,
    url: siteUrl,
    sameAs: [SITE.socialProfiles.facebook, SITE.socialProfiles.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Kundenservice",
      telephone: `+49${SITE.phone.main.replace(/^0/, "")}`,
      areaServed: "DE",
      availableLanguage: ["de"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: "Hagen",
      postalCode: "58095",
      addressCountry: "DE",
    },
    founder: { "@id": ownerId },
    makesOffer: {
      "@type": "Offer",
      name: "Sushi & koreanische Küche in Hagen",
      category: "Restaurant",
      areaServed: "DE",
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: "Sushi & koreanische Küche im Elb-Center",
    description:
      "Frische Sushi-Rollen, Sashimi, Ramen und koreanische Klassiker im Restaurant und als Mitnahme in Hagen.",
    provider: { "@id": organizationId },
    serviceType: "Restaurant",
    areaServed: {
      "@type": "City",
      name: "Hagen",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hagen",
        postalCode: "58095",
        addressCountry: "DE",
      },
    },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceType: "Dine-in",
        serviceUrl: siteUrl,
      },
      {
        "@type": "ServiceChannel",
        serviceType: "Takeaway",
        serviceUrl: menuUrl,
      },
    ],
    offers: {
      "@type": "Offer",
      url: menuUrl,
      availability: "https://schema.org/InStock",
      seller: { "@id": organizationId },
    },
    url: siteUrl,
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": productId,
    name: "Sushi & koreanische Spezialitäten",
    description:
      "Frische Speisen aus Japan und Korea aus dem Hause San Sushi, direkt aus der Küche im Elb-Center.",
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    category: "Speisen & Getränke",
    image: `${siteUrl}/opengraph-image`,
    offers: {
      "@type": "Offer",
      url: menuUrl,
      availability: "https://schema.org/InStock",
      seller: { "@id": organizationId },
    },
    url: menuUrl,
  };

  const owner = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": ownerId,
    name: SITE.owner.name,
    jobTitle: SITE.owner.role,
    description: SITE.owner.description,
    disambiguatingDescription: SITE.owner.disambiguatingDescription,
    biography: SITE.owner.biography,
    image: `${siteUrl}${SITE.owner.image}`,
    photo: `${siteUrl}${SITE.owner.image}`,
    worksFor: { "@id": organizationId },
    hasOccupation: {
      "@type": "Occupation",
      name: "Restaurantinhaberin",
      occupationLocation: {
        "@type": "City",
        name: "Hagen",
      },
    },
    knowsAbout: [
      "Sushi",
      "japanische Küche",
      "koreanische Küche",
      "restaurant service",
    ],
    sameAs: [SITE.socialProfiles.instagram, SITE.socialProfiles.facebook],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: "Hagen",
      postalCode: "58095",
      addressCountry: "DE",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: SITE.name,
    description: SITE.description,
    url: siteUrl,
    publisher: { "@id": organizationId },
    inLanguage: "de-DE",
  };

  const contentUpdateArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteUrl}/#content-update`,
    headline: "San Sushi – aktuelle Restaurantinformationen",
    description:
      "Aktuelle Öffnungszeiten, Speisekarte-Hinweise, Adresse und Kontaktinformationen von San Sushi in Hagen.",
    datePublished: SITE.contentLastUpdated,
    dateModified: contentUpdatedAt,
    dateCreated: SITE.contentLastUpdated,
    temporalCoverage: contentUpdatedAt,
    url: `${siteUrl}/`,
    articleSection: "Lokales Restaurant",
    isAccessibleForFree: true,
    wordCount: 120,
    inLanguage: "de-DE",
    author: {
      "@type": "Person",
      "@id": ownerId,
      name: SITE.owner.name,
      jobTitle: SITE.owner.role,
      description: SITE.owner.description,
      disambiguatingDescription: SITE.owner.disambiguatingDescription,
      biography: SITE.owner.biography,
      image: `${siteUrl}${SITE.owner.image}`,
      photo: `${siteUrl}${SITE.owner.image}`,
      worksFor: { "@id": organizationId },
      hasOccupation: {
        "@type": "Occupation",
        name: "Restaurantinhaberin",
      },
      knowsAbout: ["Sushi", "japanische Küche", "koreanische Küche", "Gastgeberqualität"],
    },
    publisher: {
      "@id": organizationId,
    },
    about: {
      "@id": restaurantId,
    },
    mainEntityOfPage: {
      "@id": `${siteUrl}/`,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurant) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(owner) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentUpdateArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
