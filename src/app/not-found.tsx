import Link from "next/link";
import { Home, UtensilsCrossed } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16">
      <div className="flex flex-col items-center text-center">
        <span
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-4xl text-primary-on-dark ring-1 ring-primary/20"
          aria-hidden
        >
          寿
        </span>
        <p className="font-display text-6xl font-semibold tabular-nums text-foreground sm:text-7xl">
          404
        </p>
        <h1 className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Home className="h-4 w-4" aria-hidden />
          Zur Startseite
        </Link>
        <Link
          href="/speisekarte"
          className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary-on-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          <UtensilsCrossed className="h-4 w-4" aria-hidden />
          Zur Speisekarte
        </Link>
      </div>
    </div>
  );
}
