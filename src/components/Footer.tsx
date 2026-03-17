import Link from "next/link";
import { MapPin, Clock, Phone, FileText } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeInView } from "@/components/motion/FadeInView";
import { StaggerInView, StaggerItem } from "@/components/motion/StaggerInView";

export function Footer() {
  return (
    <footer className="border-t-2 border-primary/30 bg-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <StaggerInView className="grid gap-8 sm:grid-cols-3" staggerDelay={0.08}>
          <StaggerItem>
          <div>
            <Link
              href="/"
              className="focus-ring font-display text-lg font-semibold text-white hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-footer rounded"
            >
              {SITE.name}
            </Link>
            <p className="mt-0.5 text-sm text-white/85">{SITE.tagline}</p>
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
              className="focus-ring mt-1 inline-block text-sm font-medium text-primary-on-dark hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              Anfahrt →
            </a>
            <p className="mt-3 flex items-center gap-2 text-sm text-white/95">
              <Phone className="h-4 w-4 shrink-0 text-primary-on-dark" aria-hidden />
              <span>
                <a href={`tel:${SITE.phone.main}`} className="focus-ring text-white hover:text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
                  {SITE.phone.displayMain}
                </a>
                {" · "}
                <a href={`tel:${SITE.phone.mobile}`} className="focus-ring text-white hover:text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
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
        </StaggerInView>
        <FadeInView delay={0.1} className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-t border-white/15 pt-6 text-sm text-white/80">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span className="flex justify-center text-primary-on-dark" aria-hidden>
            <svg
              viewBox="0 0 122.88 64.41"
              className="h-6 w-auto"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.39,29.39l-0.18,0.09c0.04,0.09,0.07,0.18,0.09,0.28c3.62,15.97,11.21,17.62,24.21,20.43 c1.75,0.38,3.6,0.78,5.63,1.26l35.57,8.34c5.4,1.05,10.62,1.23,15.42,0.32c3.25-0.62,6.32-1.73,9.12-3.4 c-9.26,0.05-15.94-2.2-25.03-5.99c-14.65-6.1-24.81-14.26-36.81-19.42C29.55,27.49,20.37,25.76,10.39,29.39L10.39,29.39z M6.74,30.84c-3.83,1.18-6.44,0.59-6.73-3.31c-0.23-4.28,1.99-8.43,6.6-12.44c28.07-24.45,75.2-18.11,97.38,11.34 c6.8,9.04,11.16,17.03,18.89,26.42c-3.07,1.6-6.18,2.69-9.36,3.15c-0.83,0.12-4.01,0.32-7.39,0.5c-0.08,0.42-0.3,0.82-0.66,1.1 c-4.04,3.23-8.66,5.23-13.65,6.17c-5.28,1-10.97,0.82-16.82-0.32L39.3,55.06c-1.89-0.44-3.78-0.85-5.58-1.24 C19.34,50.71,10.91,48.87,6.74,30.84L6.74,30.84z M43,11.26c6.66-2.53,13.44-3.92,18.59-3.22c-3.75,2.4-7.81,4.56-12.6,6.46 c0.01,4.83-0.58,10.76-1.66,15.53C46.43,23.74,45.14,16.48,43,11.26L43,11.26z M82.69,29.94c6.86-1.92,13.74-2.69,18.81-1.53 c-3.95,2.06-8.19,3.83-13.13,5.29c-0.43,4.81-1.55,10.66-3.06,15.32C84.98,42.68,84.35,35.34,82.69,29.94L82.69,29.94z M63.91,18.89c6.86-1.92,13.74-2.69,18.81-1.53c-3.95,2.06-8.19,3.83-13.13,5.29c-0.43,4.81-1.55,10.66-3.06,15.32 C66.19,31.63,65.56,24.29,63.91,18.89L63.91,18.89z"
              />
            </svg>
          </span>
          <span className="flex items-center justify-end gap-6">
            <Link href="/impressum" className="focus-ring flex items-center gap-1.5 hover:text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
              <FileText className="h-3.5 w-3.5 text-primary-on-dark/90" aria-hidden />
              Impressum
            </Link>
            <Link href="/datenschutz" className="focus-ring flex items-center gap-1.5 hover:text-primary-on-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded">
              <FileText className="h-3.5 w-3.5 text-primary-on-dark/90" aria-hidden />
              Datenschutz
            </Link>
          </span>
        </FadeInView>
      </div>
    </footer>
  );
}
