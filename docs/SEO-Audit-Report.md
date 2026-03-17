# SEO-Audit-Bericht – San Sushi (sansushi.de)

**Stand:** März 2025  
**Typ:** Lokales Unternehmen (Restaurant)  
**Framework:** SEO Audit Skill (Crawlability → Technical → On-Page → Content)

---

## Executive Summary

Die Website ist technisch und on-page solide aufgestellt: klare Indexierung, sinnvolle URLs, einzigartige Meta-Daten, eine Sitemap und strukturierte Daten (Restaurant + WebSite). Für ein lokales Restaurant sind die wichtigsten SEO-Basics erfüllt.

**Stärken:** Saubere Technik, Canonicals, Schema, Mobile/Viewport, interne Verlinkung, keine Orphan Pages.

**Umsetzung (Stand nach Verbesserungen):** Subpage-Titel erweitert (Speisekarte, Kontakt). Meta-Descriptions auf 150–160 Zeichen mit CTA angepasst. Schema um `menu`-URL ergänzt. Impressum/Datenschutz mit vollständigen Descriptions.

---

## 1. Technical SEO – Crawlability & Indexation

### Robots.txt
- **Status:** Vorhanden (`/robots.txt`).
- **Inhalt:** `Allow: /`, Sitemap-URL gesetzt (`https://sansushi.de/sitemap.xml`).
- **Bewertung:** Keine ungewollten Blocks, Sitemap-Referenz korrekt.

### XML Sitemap
- **Status:** Vorhanden (`/sitemap.xml`).
- **URLs:** 5 (/, /speisekarte, /kontakt, /impressum, /datenschutz).
- **Details:** Nur indexierbare Seiten, `lastModified`, `changeFrequency` und `priority` gesetzt.
- **Empfehlung:** Sitemap in der Google Search Console hinterlegen (wenn noch nicht geschehen).

### Site Architecture & Internal Linking
- **Tiefe:** Alle wichtigen Seiten maximal 1 Klick von der Startseite (Header + Footer).
- **Interne Links:** Startseite verlinkt Speisekarte + Kontakt; Header: Startseite, Speisekarte, Kontakt; Footer: Impressum, Datenschutz, Startseite.
- **Orphan Pages:** Keine; alle Seiten sind verlinkt.

### Indexation & Canonicalization
- **Canonicals:** Pro Seite gesetzt (Root: `/`, Unterseiten: z. B. `/kontakt`, `/speisekarte`, `/impressum`, `/datenschutz`).
- **metadataBase:** `https://sansushi.de` (HTTPS, einheitliche Basis).
- **robots:** `index, follow` im Layout.
- **Hinweis:** Schema (JSON-LD) wird serverseitig eingebunden; zur Kontrolle Rich Results Test oder Browser-Inspektion nutzen (nicht nur statischer Abruf).

---

## 2. Technical SEO – Speed, Mobile, Security

- **Viewport:** `width=device-width`, `initial-scale=1`, `themeColor` gesetzt.
- **HTTPS:** Basis-URL ist HTTPS; Konfiguration für Produktion prüfen (Redirect HTTP→HTTPS, ggf. HSTS).
- **Bilder:** Next.js `Image` (Responsive, Lazy Loading); externe Bilder von Unsplash (HTTPS). Optional: WebP/AVIF und feste Abmessungen für bessere LCP/CLS.
- **Core Web Vitals:** Nur vor Ort (PageSpeed Insights / Search Console) prüfbar.

---

## 3. On-Page SEO

### Title Tags
| Seite      | Titel (effektiv) | Länge | Bewertung |
|-----------|-------------------|-------|-----------|
| Startseite | San Sushi – Japanische & Koreanische Küche \| Sushi Hagen | ~52 | ✓ |
| Speisekarte | Speisekarte – Sushi, Sashimi & Koreanisch \| San Sushi Hagen | ~52 | ✓ umgesetzt |
| Kontakt   | Kontakt & Anfahrt – San Sushi Restaurant Hagen | ~43 | ✓ umgesetzt |
| Impressum | Impressum \| San Sushi Hagen | ~26 | ✓ |
| Datenschutz | Datenschutz \| San Sushi Hagen | ~28 | ✓ |

### Meta Descriptions
- **Startseite:** Vorhanden, mit CTA („Speisekarte ansehen oder jetzt anrufen“), ~160 Zeichen.
- **Speisekarte/Kontakt:** Auf ~150–160 Zeichen mit klarem Nutzen/CTA angepasst.
- **Impressum/Datenschutz:** Beschreibende Descriptions mit rechtlichem Kontext ergänzt.

### Heading Structure
- **Startseite:** Eine H1 („San Sushi“ in Hero), H2/H3 logisch (z. B. Adresse, Öffnungszeiten, Zitat, About).
- **Speisekarte:** H1 „Speisekarte“, H2 pro Kategorie.
- **Kontakt:** H1 „Kontakt“, H2 für Adresse/Telefon/Öffnungszeiten.
- **Impressum / Datenschutz:** Jeweils eine H1, H2 für Abschnitte.
- **Bewertung:** Eine H1 pro Seite, sinnvolle Hierarchie, keine Sprünge.

### Image Optimization
- **Alt-Texte:** Vorhanden und beschreibend (Hero, Speisekarte, Kategorien, Kontakt, Galerie).
- **Next.js Image:** `sizes` und `priority` für Above-the-fold genutzt.
- **Optional:** Eigene Bilder als WebP/AVIF; bei vielen Bildern Lazy Loading und feste Aspect-Ratio für stabile Layouts prüfen.

### URL Structure
- **Format:** Lesbar, kleingeschrieben, mit Bindestrich: `/`, `/speisekarte`, `/kontakt`, `/impressum`, `/datenschutz`.
- **Bewertung:** Keywords in URL wo sinnvoll, einheitlich, keine unnötigen Parameter.

---

## 4. Schema Markup (Structured Data)

- **Vorhanden (im Code):**
  - **Restaurant:** name, description, url, image, telephone, address, geo, openingHoursSpecification, priceRange, servesCuisine.
  - **WebSite:** name, description, url, publisher, inLanguage.
- **Hinweis:** Erkennung nur zuverlässig per Browser (`document.querySelectorAll('script[type="application/ld+json"]')`) oder [Rich Results Test](https://search.google.com/test/rich-results). Statische Abrufe (z. B. curl) können JSON-LD nicht zuverlässig prüfen.
- **Umsetzung:** `menu`-URL auf `/speisekarte` im Restaurant-Schema ergänzt. Optional: `sameAs` (Social) bei Vorhandensein von Profilen.

---

## 5. Content & Local SEO

- **Hauptkeywords:** Sushi Hagen, San Sushi, Koreanisch Hagen, Restaurant etc. in Meta und Inhalt vertreten.
- **Lokale Signale:** Adresse, Telefon, Öffnungszeiten, Karte, Schema mit Geo und Adresse.
- **E-E-A-T:** Impressum (Inhaber, Adresse), Datenschutz, Kontakt vorhanden; Vertrauen und Transparenz gestärkt.
- **Optional:** Eigene Seite „Restaurant in Hagen“ oder „Sushi in Hagen“ mit kurzem Text (z. B. Stadt, Lage, Öffnungszeiten) für stärkere lokale Relevanz.

---

## 6. Prioritized Action Plan

### Erledigt
1. ~~Subpage-Titel erweitern~~ (Speisekarte, Kontakt) – umgesetzt.
2. ~~Meta-Descriptions~~ auf ~150–160 Zeichen mit CTA angepasst.
3. **Schema:** `menu`-URL im Restaurant-Schema ergänzt.

### Noch zu tun
4. **Sitemap** in der Google Search Console einreichen (falls noch nicht).

### Mittlere Priorität
5. **Core Web Vitals** in Search Console und mit PageSpeed Insights prüfen; bei Bedarf Bilder (Formate, Größen, Lazy Loading) optimieren.
6. **Schema prüfen:** Rich Results Test ausführen; optional `sameAs` bei Social-Profilen ergänzen.
7. **Google Business Profile:** Eintrag prüfen, NAP mit Website/Impressum abgleichen, Öffnungszeiten aktuell halten.

### Langfristig / Optional
8. **Lokale Landing-Page:** Kurze Seite „San Sushi in Hagen“ mit Standort, Anfahrt, Öffnungszeiten für Suchanfragen wie „Sushi Hagen“, „Restaurant Hagen“.
9. **Bilder:** Wo möglich eigene Fotos (Restaurant, Gerichte) und optimierte Formate (WebP/AVIF) für bessere Ladezeit und Nutzererlebnis.

---

## 7. References

- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results) (Schema-Validierung)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Business Profile](https://business.google.com/)
