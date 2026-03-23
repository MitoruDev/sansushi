export const SITE = {
  name: "San Sushi",
  tagline: "Japanische & Koreanische Küche in Hagen",
  description:
    "Restaurant San Sushi in Hagen (Elb-Center, Bergstraße 128–130): frisches Sushi, Bibimbap und japanische sowie koreanische Spezialitäten. Mo–Sa 12:00–22:00 Uhr, Sonntag Ruhetag.",
  url: "https://sansushi.de",
  address: {
    street: "Bergstraße 128-130 (Elb-Center)",
    city: "58095 Hagen",
    full: "Bergstraße 128-130 (Elb-Center), 58095 Hagen",
  },
  owner: {
    name: "Frau Qian Wang",
    role: "Inhaberin",
    image: "/owner-avatar.svg",
    description: "Inhaberin von San Sushi in Hagen und verantwortliche Ansprechpartnerin für Küche, Betrieb und Gästeservice.",
    disambiguatingDescription:
      "Verantwortlich für das Restaurant San Sushi im Elb-Center Hagen mit Schwerpunkt auf japanisch-koreanischer Küche.",
    biography:
      "Frau Qian Wang führt das Restaurant San Sushi im Elb-Center in Hagen und steht für handwerklich frisch zubereitete Sushi- und koreanische Gerichte.",
  },
  // Datum der letzten inhaltlichen Überarbeitung (für strukturierte Daten / Aktualitäts-Signale).
  // Bitte bei inhaltlichen Updates der Seite aktualisieren.
  contentLastUpdated: "2026-03-23",
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
  "Sushi Restaurant Hagen",
  "Sushi im Elb-Center",
  "Bibimbap Hagen",
  "Sushi Restaurant",
  "Restaurant Bergstraße 128",
  "Abendessen Hagen",
  "Reservieren in Hagen",
  "Frisches Sushi in Hagen",
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
