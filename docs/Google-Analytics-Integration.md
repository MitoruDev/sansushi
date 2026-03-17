# Google Analytics später einbinden

Die Cookie-Einwilligung ist vorbereitet. So bindest du Google Analytics (GA4) ein:

## 1. Nur bei Einwilligung laden

Analytics **erst nach** „Alle akzeptieren“ laden. Beispiel in einer Client-Komponente oder in `layout.tsx` per dynamischem Script:

```ts
// z. B. in einer Komponente oder in app/layout (Client-Komponente)
"use client";

import { useEffect } from "react";
import { hasConsentForAnalytics } from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Deine GA4-ID

export function GoogleAnalytics() {
  useEffect(() => {
    if (!hasConsentForAnalytics()) return;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }, []);

  return null;
}
```

Oder mit `next/script` (Strategy `afterInteractive`), aber erst prüfen, ob Consent da ist – z. B. Consent in State, dann Script rendern.

## 2. Consent prüfen

- **`hasConsentForAnalytics()`** aus `@/lib/cookie-consent` liefert `true`, wenn der Nutzer „Alle akzeptieren“ gewählt hat.
- **`getConsent()`** liefert `"all"` | `"necessary"` | `null`.

## 3. Datenschutz ergänzen

Sobald GA aktiv ist, in der Datenschutz-Seite einen Abschnitt „Google Analytics“ ergänzen (Anbieter, Zweck, Opt-Out, Link zu Google-Richtlinien).

## 4. Optional: Consent Mode v2

Für Google Consent Mode v2 (für Werbung) die Einwilligung an die gtag-API übergeben. Doku: [Google Consent Mode](https://developers.google.com/tag-platform/security/guides/consent).
