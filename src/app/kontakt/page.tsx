import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { OpeningHours } from "@/components/OpeningHours";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerInView, StaggerItem } from "@/components/motion/StaggerInView";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt – San Sushi Restaurant Hagen",
  description:
    "Kontakt & Anfahrt zu San Sushi in Hagen: Adresse Bergstraße 128-130 (Elb-Center), Telefon, Öffnungszeiten. Jetzt anrufen oder Anfahrt in Google Maps planen.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <FadeInView>
        <div className="relative mb-10 aspect-[21/4] overflow-hidden rounded-xl border border-border sm:aspect-[21/5]">
          <Image
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=1200&q=80"
            alt="Restaurant San Sushi – Ambiente"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </FadeInView>
      <FadeInView y={20} duration={0.5}>
        <header className="mb-14">
          <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Kontakt
          </h1>
          <p className="mt-3 text-muted">
            Wir freuen uns auf Sie – im Elb-Center oder am Telefon für Ihre Bestellung.
          </p>
        </header>
      </FadeInView>

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <StaggerInView className="space-y-8 lg:col-span-2" staggerDelay={0.1}>
          <StaggerItem>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-on-dark">
                <MapPin className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Adresse</h2>
                <p className="mt-0.5 text-sm text-muted">{SITE.address.street}</p>
                <p className="text-sm text-muted">{SITE.address.city}</p>
              </div>
            </div>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              Anfahrt bei Google Maps <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          </StaggerItem>

          <StaggerItem>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-on-dark">
                <Phone className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Telefon</h2>
                <p className="mt-0.5 text-sm text-muted">
                  <a href={`tel:${SITE.phone.main}`} className="focus-ring text-foreground hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
                    {SITE.phone.displayMain}
                  </a>
                </p>
                <p className="text-sm text-muted">
                  <a href={`tel:${SITE.phone.mobile}`} className="focus-ring text-foreground hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
                    {SITE.phone.displayMobile}
                  </a>
                </p>
              </div>
            </div>
            <a
              href={`tel:${SITE.phone.main}`}
              className="focus-ring mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Phone className="h-4 w-4" /> Jetzt anrufen
            </a>
          </div>
          </StaggerItem>

          <StaggerItem>
          <OpeningHours />
          </StaggerItem>
        </StaggerInView>

        <FadeInView delay={0.2} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border bg-background lg:col-span-3">
        <div className="absolute inset-0 min-h-[320px]">
          <iframe
            title="Standort San Sushi auf der Karte"
            src="https://www.google.com/maps?q=San+Sushi+Bergstra%C3%9Fe+128-130+58095+Hagen&output=embed"
            width="100%"
            height="100%"
            className="absolute inset-0 min-h-[320px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        </FadeInView>
      </div>
    </article>
  );
}
