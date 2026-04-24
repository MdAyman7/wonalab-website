import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "linear-gradient(135deg, #E5B65C, #C69740)",
          color: "#06090F",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          borderRadius: 6,
        }}
      >
        W
      </div>
    ),
    { ...size },
  );
}
