import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Clock, Phone, FileText } from "lucide-react";
import { SITE, DEV_CREDIT } from "@/lib/constants";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerInView, StaggerItem } from "@/components/motion/StaggerInView";
import { FooterSushiMicro } from "@/components/FooterSushiMicro";

export function Footer() {
  const socialLinks = [
    {
      label: "Facebook",
      href: SITE.socialProfiles.facebook,
      Icon: Facebook,
    },
    {
      label: "Instagram",
      href: SITE.socialProfiles.instagram,
      Icon: Instagram,
    },
  ];

  return (
    <footer className="border-t-2 border-primary/30 bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <StaggerInView className="grid gap-8 sm:grid-cols-4" staggerDelay={0.08}>
          <StaggerItem>
          <div>
            <Link
              href="/"
              prefetch={false}
              className="focus-ring group inline-flex items-center gap-2.5 font-display text-lg font-semibold text-white hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-footer rounded"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-transform group-hover:scale-105"
                aria-hidden
              >
                <Image src="/favicon.svg" alt="" width={28} height={28} className="h-6 w-6 object-contain" />
              </span>
              {SITE.name}
            </Link>
            <p className="mt-0.5 text-sm text-white/85">{SITE.tagline}</p>
            <p className="mt-2 text-xs text-white/70">
              Inhaberin: <span className="text-white/95">{SITE.owner.name}</span>
            </p>
            <Link
              href="/#about"
              prefetch={false}
              className="group/ftr-about focus-ring mt-3 inline-flex items-center gap-1 text-xs text-primary-on-dark transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-footer rounded"
            >
              Über das Restaurant
              <span className="inline-block transition-transform duration-200 group-hover/ftr-about:translate-x-1">→</span>
            </Link>
          </div>
          </StaggerItem>
          <StaggerItem>
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-on-dark">
              <MapPin className="h-4 w-4" aria-hidden />
              Kontakt
            </p>
            <p className="mt-2 text-sm text-white/95">{SITE.address.street}</p>
            <p className="text-sm text-white/95">{SITE.address.city}</p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/maps focus-ring mt-1 inline-flex items-center gap-1 text-sm font-medium text-primary-on-dark hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              title="San Sushi auf Google Maps aufrufen"
            >
              Anfahrt
              <span className="inline-block transition-transform duration-200 ease-out group-hover/maps:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/95">
              <Phone className="h-4 w-4 shrink-0 text-primary-on-dark" aria-hidden />
              <span>
                <a
                  href={`tel:${SITE.phone.main}`}
                  className="focus-ring text-white hover:text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                  title="Hauptnummer von San Sushi anrufen"
                >
                  {SITE.phone.displayMain}
                </a>
                {" · "}
                <a
                  href={`tel:${SITE.phone.mobile}`}
                  className="focus-ring text-white hover:text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                  title="Handynummer von San Sushi anrufen"
                >
                  {SITE.phone.displayMobile}
                </a>
              </span>
            </p>
          </div>
          </StaggerItem>
          <StaggerItem>
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-on-dark">
              <Clock className="h-4 w-4" aria-hidden />
              Öffnungszeiten
            </p>
            <p className="mt-2 text-sm text-white/95">{SITE.openingHours.weekdays}</p>
            <p className="text-sm text-white/95">{SITE.openingHours.sunday}</p>
          </div>
          </StaggerItem>
          <StaggerItem>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-on-dark">
              Social
            </p>
            <ul className="mt-2 flex flex-wrap gap-4 text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-primary-on-dark hover:text-primary-on-dark"
                    title={`${link.label} aufrufen`}
                    aria-label={link.label}
                  >
                    <link.Icon className="h-4 w-4" aria-hidden />
                    <span className="sr-only">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </StaggerItem>
        </StaggerInView>
        <FadeInView
          delay={0.1}
          className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/80 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4"
        >
          <span className="text-center md:text-left">
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <FooterSushiMicro />
          <span className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
            <Link
              href="/impressum"
              prefetch={false}
              className="group/ftr focus-ring flex items-center gap-1.5 transition-colors hover:text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              <FileText
                className="h-3.5 w-3.5 text-primary-on-dark/90 transition-transform duration-200 ease-out group-hover/ftr:translate-x-0.5"
                aria-hidden
              />
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              prefetch={false}
              className="group/ftr2 focus-ring flex items-center gap-1.5 transition-colors hover:text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              <FileText
                className="h-3.5 w-3.5 text-primary-on-dark/90 transition-transform duration-200 ease-out group-hover/ftr2:translate-x-0.5"
                aria-hidden
              />
              Datenschutz
            </Link>
          </span>
        </FadeInView>

        {DEV_CREDIT.show && DEV_CREDIT.url && (
          <p className="mt-8 border-t border-white/10 pt-5 text-center text-[10px] leading-relaxed tracking-wide text-white/40 sm:text-left">
            <a
              href={DEV_CREDIT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded text-white/55 underline-offset-2 transition-colors hover:text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-footer"
            >
              {DEV_CREDIT.linkText}
            </a>
            <span className="mx-2 text-white/25" aria-hidden>
              ·
            </span>
            <span className="text-white/35">{DEV_CREDIT.name}</span>
          </p>
        )}
      </div>
    </footer>
  );
}
