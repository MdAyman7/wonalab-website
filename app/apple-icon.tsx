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
            "radial-gradient(120px 120px at 30% 20%, rgba(250,223,160,0.55), transparent 60%), linear-gradient(135deg, #E5B65C, #9A7528)",
          color: "#06090F",
          fontSize: 110,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        W
      </div>
    ),
    { ...size },
  );
}
