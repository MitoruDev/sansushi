import { ImageResponse } from "next/og";

export const alt = "San Sushi – Japanische & Koreanische Küche in Hagen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0c0c",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 48,
          }}
        >
          <span
            style={{
              fontSize: 72,
              marginBottom: 24,
              color: "#dc2626",
            }}
          >
            寿
          </span>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            San Sushi
          </h1>
          <p
            style={{
              fontSize: 28,
              color: "#a3a3a3",
              marginTop: 16,
              marginBottom: 0,
            }}
          >
            Japanische & Koreanische Küche in Hagen
          </p>
          <p
            style={{
              fontSize: 22,
              color: "#737373",
              marginTop: 24,
            }}
          >
            Bergstraße 128-130 · Elb-Center
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
