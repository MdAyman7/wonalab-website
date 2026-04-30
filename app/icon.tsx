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
          background: "linear-gradient(135deg, #FFAE82, #E8784A)",
          color: "#160B1E",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          borderRadius: 9,
        }}
      >
        W
      </div>
    ),
    { ...size },
  );
}
