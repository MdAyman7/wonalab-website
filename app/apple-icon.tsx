import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background:
            "radial-gradient(120px 120px at 30% 20%, rgba(255,200,166,0.6), transparent 60%), linear-gradient(135deg, #FFAE82, #C25A30)",
          color: "#160B1E",
          fontSize: 110,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          borderRadius: 52,
        }}
      >
        W
      </div>
    ),
    { ...size },
  );
}
