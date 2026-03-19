import Link from "next/link";
import { SITE } from "@/lib/constants";

/**
 * Servergerenderter, keyword-natürlicher Fließtext für Onpage-SEO (Wortanzahl, Überschriftenhierarchie).
 * Ergänzt die animierten Client-Bereiche ohne doppelte H1.
 */
export function HomeSeoContent() {
  return (
    <section
      className="border-b border-border bg-muted/20 py-14 md:py-16"
      aria-labelledby="welcome-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2
          id="welcome-heading"
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Japanisches und koreanisches Restaurant in Hagen
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            <strong className="font-medium text-foreground">{SITE.name}</strong> ist Ihr
            Sushi-Restaurant und Treffpunkt für{" "}
            <strong className="font-medium text-foreground">japanische und koreanische Küche</strong>{" "}
            im Herzen von Hagen. Im{" "}
            <strong className="font-medium text-foreground">Elb-Center</strong> an der{" "}
            <strong className="font-medium text-foreground">Bergstraße 128–130</strong> bereiten wir
            täglich frische Gerichte zu – von klassischen{" "}
            <Link
              href="/speisekarte"
              className="font-medium text-primary-on-dark underline-offset-2 hover:underline"
            >
              Maki- und Nigiri-Rollen
            </Link>{" "}
            bis zu warmen Speisen wie{" "}
            <strong className="font-medium text-foreground">Bibimbap</strong> und weiteren
            Spezialitäten. Ob Sie vorbeikommen,{" "}
            <Link
              href="/kontakt"
              className="font-medium text-primary-on-dark underline-offset-2 hover:underline"
            >
              einen Tisch reservieren
            </Link>{" "}
            oder{" "}
            <strong className="font-medium text-foreground">zum Mitnehmen</strong> bestellen möchten:
            bei uns stehen Qualität der Zutaten und sorgfältige Zubereitung im Vordergrund.
          </p>
          <p>
            Unsere{" "}
            <Link
              href="/speisekarte"
              className="font-medium text-primary-on-dark underline-offset-2 hover:underline"
            >
              digitale Speisekarte
            </Link>{" "}
            gibt einen Überblick über Sushi, Sashimi, vegetarische Optionen und warme Gerichte.
            Für{" "}
            <Link
              href="/kontakt"
              className="font-medium text-primary-on-dark underline-offset-2 hover:underline"
            >
              Rückfragen, Reservierungen und die Anfahrt
            </Link>{" "}
            erreichen Sie uns telefonisch unter{" "}
            <a
              href={`tel:${SITE.phone.main}`}
              className="font-medium text-primary-on-dark underline-offset-2 hover:underline"
            >
              {SITE.phone.displayMain}
            </a>
            . {SITE.openingHours.weekdays} – {SITE.openingHours.sunday}. Wir freuen uns darauf, Sie
            bei <span className="font-medium text-foreground">{SITE.name}</span> begrüßen zu dürfen
            – authentische Aromen, freundlicher Service und ein stimmungsvolles Ambiente im{" "}
            <span className="font-medium text-foreground">Südwestfalen</span>-Alltag.
          </p>
          <p>
            Ob Sie sich auf ein schnelles Mittagessen, ein entspanntes Abendessen mit Freunden oder
            eine Auszeit vom Einkauf im Center freuen: Unser Team berät Sie gern zu Portionsgrößen,
            Schärfe und Empfehlungen aus Küche und Theke. So wird Ihr Besuch bei{" "}
            <span className="font-medium text-foreground">{SITE.name}</span> zu einem kleinen
            kulinarischen Ausflug – nah, unkompliziert und mit dem Anspruch, den Sie von einem
            spezialisierten Sushi-Laden erwarten.
          </p>
          <h3 className="pt-2 font-display text-lg font-semibold text-foreground sm:text-xl">
            Frische Zutaten und abwechslungsreiche Karte
          </h3>
          <p>
            Regelmäßig wechselnde Angebote und saisonale Zutaten ergänzen unsere Standardsortiment –
            ideal, wenn Sie Neues probieren oder bewährte Klassiker in bester Qualität genießen
            möchten. In der Nähe von Volmarstein, Hohenlimburg und dem Hagener Zentrum ist{" "}
            <span className="font-medium text-foreground">{SITE.name}</span> schnell erreichbar;
            viele Gäste kombinieren den Besuch mit einem Einkauf oder einem Spaziergang durch die
            Innenstadt. Schauen Sie vorbei – wir kochen für Sie mit Leidenschaft für asiatische
            Geschmacksrichtungen.
          </p>
        </div>
      </div>
    </section>
  );
}
