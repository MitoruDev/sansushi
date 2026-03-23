import { ImageResponse } from "next/og";

export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 20,
        }}
      >
        <span style={{ fontSize: 56, color: "#ffffff", fontFamily: "system-ui", fontWeight: 700 }}>
          寿
        </span>
      </div>
    ),
    { ...size },
  );
}
