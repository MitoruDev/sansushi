import type { Metadata } from "next";
import { metadata as sanityStudioMetadata, viewport } from "next-sanity/studio";
import { StudioWrapper } from "./StudioWrapper";

/** next-sanity setzt nur `noindex`; wir ergänzen `nofollow` für das CMS. */
export const metadata: Metadata = {
  ...sanityStudioMetadata,
  robots: { index: false, follow: false },
};

export { viewport };

export default function StudioPage() {
  return <StudioWrapper />;
}
