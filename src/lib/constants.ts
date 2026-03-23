export const SITE = {
  name: "San Sushi",
  tagline: "Japanische & Koreanische Küche in Hagen",
  description:
    "Restaurant San Sushi in Hagen – frisches Sushi, Bibimbap und japanische sowie koreanische Spezialitäten. Vor Ort oder zum Mitnehmen.",
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
  /** Offizielle Social-Profile zur externen Verlinkung / sameAs im JSON-LD. */
  socialProfiles: {
    facebook: "https://www.facebook.com/sansushihagen/",
    instagram: "https://www.instagram.com/explore/locations/8044538/sansushi/",
  },
} as const;

export const META_KEYWORDS = [
  "San Sushi",
  "Sushi Hagen",
  "Koreanische Küche Hagen",
  "Japanische Küche Hagen",
  "Bibimbap Hagen",
  "Sushi Restaurant",
  "Imbiss Hagen",
  "Abendessen Hagen",
  "Reservieren Hagen"
];

/** localStorage: Reis-Konfetti nur einmal nach erstem „Alle akzeptieren“. */
export const RICE_CONFETTI_STORAGE_KEY = "sansushi_rice_confetti_once";

/**
 * Dezenter Entwickler-Hinweis im Footer (für Anfragen anderer Restaurants).
 * `show: false` → Zeile wird nicht gerendert.
 */
export const DEV_CREDIT = {
  show: true,
  name: "Caner Elmas",
  /** Portfolio / Kontakt für Gastronomie-Anfragen */
  url: "https://mitoru.de",
  linkText: "Website für Ihr Lokal?",
} as const;
