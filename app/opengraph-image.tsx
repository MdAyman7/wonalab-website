import { ImageResponse } from "next/og";

export const alt = "Wonalab — Digital products that ship, scale, endure.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1200px 600px at 80% 0%, rgba(229,182,92,0.18), transparent 60%), radial-gradient(900px 500px at 0% 100%, rgba(229,182,92,0.10), transparent 55%), #06090F",
          color: "#F4EEDF",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #E5B65C, #C69740)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#06090F",
              fontWeight: 700,
              fontSize: 30,
            }}
          >
            W
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "#F4EEDF",
            }}
          >
            wonalab
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#F4EEDF",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Digital products that&nbsp;</span>
            <span style={{ color: "#E5B65C", fontStyle: "italic", fontWeight: 500 }}>
              ship.
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#B9B3A3",
              maxWidth: 900,
            }}
          >
            Senior-only pods for fintech, web3, AI agents, and web &amp; mobile —
            built for India &amp; the GCC.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6F6A5D",
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div>Bengaluru · Dubai · Riyadh</div>
          <div>wonalab.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
