import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple Touch Icon (180×180) – verlinkt automatisch über Metadata-API. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#dc2626",
          borderRadius: 36,
        }}
      >
        <span
          style={{
            fontSize: 96,
            color: "#ffffff",
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontWeight: 700,
          }}
        >
          寿
        </span>
      </div>
    ),
    { ...size },
  );
}
