import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const alt = "San Sushi – Japanische & Koreanische Küche in Hagen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const stats = [
    "Sushi · Bibimbap · Ramen",
    "Montag–Samstag 12:00–22:00 Uhr",
    `Jetzt reservieren: ${SITE.phone.displayMain}`,
  ];

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
          background: "#090909",
          color: "#fafafa",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(150deg, #111111 0%, #0a0a0a 44%, #16110d 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "-20%",
            background:
              "radial-gradient(circle at 18% 12%, rgba(253,230,138,0.24), transparent 40%), radial-gradient(circle at 78% 22%, rgba(245,158,11,0.15), transparent 38%), radial-gradient(circle at 52% 84%, rgba(220,38,38,0.14), transparent 38%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05) 1px, transparent 1px, transparent 28px)",
            opacity: 0.2,
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 18,
            right: 28,
            fontSize: 64,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "2px",
          }}
          aria-hidden
        >
          手作り
        </span>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 48,
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 56,
              marginBottom: 10,
              color: "#f59e0b",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            寿
          </span>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.025em",
              margin: 0,
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            San Sushi
          </h1>
          <p
            style={{
              fontSize: 30,
              color: "#d4d4d4",
              margin: 0,
              fontStyle: "italic",
              letterSpacing: "0.015em",
              textAlign: "center",
            }}
          >
            Japanische & Koreanische Küche in Hagen
          </p>
          <p
            style={{
              fontSize: 22,
              color: "#9ca3af",
              marginTop: 8,
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            {SITE.address.full}
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            {stats.map((line) => (
              <span
                key={line}
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(250, 204, 21, 0.4)",
                  background: "rgba(220, 38, 38, 0.14)",
                  color: "#fde68a",
                  fontSize: 20,
                }}
              >
                {line}
              </span>
            ))}
          </div>
          <p
            style={{
              fontSize: 22,
              color: "#fca5a5",
              margin: 0,
              fontWeight: 700,
            }}
          >
            Wir freuen uns auf Ihren Besuch
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
