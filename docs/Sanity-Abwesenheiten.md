# Abwesenheiten (Sanity CMS)

Abwesenheiten (Betriebsferien, Schließtage) werden im Sanity Studio verwaltet.

## Studio öffnen

- **Lokal:** `npm run dev` → im Browser [http://localhost:3000/studio](http://localhost:3000/studio) aufrufen.
- **Produktion:** `https://sansushi.de/studio`

## Abwesenheit anlegen

1. Im Studio links **„Abwesenheit“** wählen und **„Create“** klicken.
2. **Von (Datum)** und **Bis (Datum)** setzen (z. B. 27.10.2025 – 27.11.2025).
3. **Hinweistext** ausfüllen (wird im roten Banner und im Öffnungsstatus angezeigt), z. B.:
   - *„Betriebsferien: Unser Restaurant bleibt vom 27.10.–27.11.2025 geschlossen.“*
4. **Titel (intern)** optional, z. B. „Betriebsferien 2025“.
5. Speichern (Publish).

## Verhalten auf der Website

- **Banner:** Wenn heute in mindestens einer Abwesenheit liegt, erscheint oben der rote Hinweis mit dem jeweiligen **Hinweistext**.
- **Öffnungsstatus:** In der Navigation zeigt der Live-Status an diesen Tagen „Geschlossen“ und den Hinweistext (gekürzt) als Tooltip.

## Projekt & Dataset

- **Project ID:** `38q0l1x9` (oder `NEXT_PUBLIC_SANITY_PROJECT_ID`)
- **Dataset:** `production` (oder `NEXT_PUBLIC_SANITY_DATASET`)

Über Umgebungsvariablen kannst du andere Projekte/Datasets nutzen (z. B. für Staging).

## Erste Einrichtung (einmalig)

1. [sanity.io](https://www.sanity.io) – Account anlegen / einloggen.
2. Projekt `38q0l1x9` anlegen oder mit dem bestehenden Team verbinden.
3. CORS in Sanity: Unter **Project Settings → API → CORS origins** die Website-URL eintragen (z. B. `https://sansushi.de`, `http://localhost:3000`).
4. Beim ersten Besuch von `/studio` wirst du zur Anmeldung bei Sanity weitergeleitet.
