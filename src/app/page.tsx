import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { OpeningHours } from "@/components/OpeningHours";
import { WaveDivider } from "@/components/WaveDivider";
import { HeroStagger } from "@/components/motion/HeroStagger";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerInView, StaggerItem } from "@/components/motion/StaggerInView";
import { SlideInView } from "@/components/motion/SlideInView";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-warm-glow">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920&q=80"
            alt="San Sushi Restaurant – Sushi und japanische Küche in Hagen"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/75" />
        </div>
        <HeroStagger />
      </section>

      <WaveDivider />

      {/* Info strip */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <StaggerInView className="grid gap-10 sm:grid-cols-3 sm:grid-rows-1 sm:items-stretch text-center" staggerDelay={0.1}>
            <StaggerItem className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl p-6 transition-colors hover:bg-background/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-on-dark ring-1 ring-primary/20">
                <MapPin className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-semibold text-foreground">Adresse</h3>
              <p className="text-sm text-muted">{SITE.address.street}</p>
              <p className="text-sm text-muted">{SITE.address.city}</p>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-1 inline-block text-sm font-medium text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Anfahrt planen →
              </a>
            </StaggerItem>
            <StaggerItem className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl p-6 transition-colors hover:bg-background/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-on-dark ring-1 ring-primary/20">
                <Clock className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-semibold text-foreground">Öffnungszeiten</h3>
              <p className="text-sm text-muted">{SITE.openingHours.weekdays}</p>
              <p className="text-sm text-muted">{SITE.openingHours.sunday}</p>
            </StaggerItem>
            <StaggerItem className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl p-6 transition-colors hover:bg-background/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-on-dark ring-1 ring-primary/20">
                <Phone className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-semibold text-foreground">Telefon</h3>
              <p className="text-sm text-muted">
                <a href={`tel:${SITE.phone.main}`} className="focus-ring text-foreground hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
                  {SITE.phone.displayMain}
                </a>
              </p>
              <p className="text-sm text-muted">
                <a href={`tel:${SITE.phone.mobile}`} className="focus-ring text-foreground hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
                  {SITE.phone.displayMobile}
                </a>
              </p>
              <a
                href={`tel:${SITE.phone.main}`}
                className="focus-ring mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              >
                Jetzt anrufen <ArrowRight className="h-4 w-4" />
              </a>
            </StaggerItem>
          </StaggerInView>
        </div>
      </section>

      {/* Zitat – Japan Vibes */}
      <section className="relative overflow-hidden py-10 md:py-14">
        <div className="absolute inset-0 bg-warm-glow pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "24px 24px" }} aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <div className="h-1 bg-primary rounded-full" aria-hidden />
          <FadeInView className="mx-auto mt-6 max-w-2xl" duration={0.6} scale={0.98}>
            <div className="flex flex-col items-center text-center">
              <p className="font-display text-xl font-medium italic leading-relaxed text-foreground md:text-2xl">
                „Bei uns wird jede Rolle mit Ruhe und Respekt vor dem Handwerk zubereitet.“
              </p>
              <p className="mt-6 font-display text-4xl text-primary-on-dark/80 md:text-5xl" aria-hidden title="Kokoro – Herz, Geist">
                心
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.35em] text-muted">Kokoro</p>
            </div>
          </FadeInView>
          <div className="mx-auto mt-6 h-1 w-24 bg-primary rounded-full" aria-hidden />
        </div>
      </section>

      {/* Bilder */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <StaggerInView className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" staggerDelay={0.08}>
            {[
              { src: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80", alt: "Japanisches Restaurant Ambiente" },
              { src: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80", alt: "Koreanische Küche" },
              { src: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=600&q=80", alt: "Frische Sushi-Zutaten" },
              { src: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80", alt: "Ramen" },
            ].map(({ src, alt }, i) => (
              <StaggerItem key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </StaggerItem>
            ))}
          </StaggerInView>
        </div>
      </section>

      <WaveDivider />

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <SlideInView direction="left">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Eine andere Welt im Herzen von Hagen
                </h2>
                <p className="mt-3 text-muted leading-relaxed">
                  Frische Zutaten, ehrliche Küche – vor Ort oder zum Mitnehmen. Wir freuen uns auf Sie.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Kontakt & Anfahrt <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="relative mt-8 aspect-[16/6] overflow-hidden rounded-2xl border border-border sm:aspect-[16/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80"
                    alt="Restaurant-Innenraum"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </SlideInView>
            <SlideInView direction="right">
            <div className="rounded-2xl border border-primary/30 bg-primary p-6 text-white shadow-lg lg:p-8">
              <OpeningHours variant="onPrimary" />
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-black p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-primary-on-dark">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-primary-on-dark">So finden Sie uns</h3>
                  <p className="mt-1 text-white/90">{SITE.address.street}</p>
                  <p className="text-white/90">{SITE.address.city}</p>
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-3 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/90 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                  >
                    In Google Maps öffnen
                  </a>
                </div>
              </div>
            </div>
            </SlideInView>
          </div>
        </div>
      </section>
    </>
  );
}
