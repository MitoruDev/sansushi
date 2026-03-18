export const SITE = {
  name: "San Sushi",
  tagline: "Japanische & Koreanische Küche in Hagen",
  description:
    "Restaurant San Sushi in Hagen – frisches Sushi, Bibimbap und japanische sowie koreanische Spezialitäten. Vor Ort genießen oder zum Mitnehmen.",
  url: "https://sansushi.de",
  address: {
    street: "Bergstraße 128-130 (Elb-Center)",
    city: "58095 Hagen",
    full: "Bergstraße 128-130 (Elb-Center), 58095 Hagen",
  },
  phone: {
    main: "023312044568",
    mobile: "015906367523",
    displayMain: "02331 2044568",
    displayMobile: "01590 6367523",
  },
  openingHours: {
    weekdays: "Montag–Samstag 12:00–22:00 Uhr (durchgehend)",
    sunday: "Sonntag Ruhetag",
  },
  /** Maschinenlesbare Öffnungszeiten für Live-Status (Mo–Sa 12:00–22:00, Sonntag geschlossen). Abwesenheiten kommen aus Sanity (CMS). */
  openingHoursStructured: {
    weekdays: { open: "12:00", close: "22:00" },
    sundayClosed: true,
  },
  coordinates: {
    lat: 51.3594,
    lng: 7.4632,
  },
  /** Direkter Link zu San Sushi auf Google Maps. */
  mapsUrl: "https://maps.app.goo.gl/gVKuy8JQMMNQYiLp6",
  /** Google (Maps) – dort finden Gäste auch Bewertungen. */
  googleReviewsUrl: "https://maps.app.goo.gl/gVKuy8JQMMNQYiLp6",
} as const;
