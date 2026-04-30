import { ImageResponse } from "next/og";

export const alt = "Wonalab. Digital products that ship, scale, endure.";
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
            "radial-gradient(1200px 600px at 80% 0%, rgba(255,153,102,0.20), transparent 60%), radial-gradient(900px 500px at 0% 100%, rgba(255,153,102,0.12), transparent 55%), #160B1E",
          color: "#FAE9D3",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #FF9966, #E8784A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#160B1E",
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
              color: "#FAE9D3",
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
              color: "#FAE9D3",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Digital products that&nbsp;</span>
            <span style={{ color: "#FF9966", fontWeight: 600 }}>
              ship.
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#C4A89A",
              maxWidth: 900,
            }}
          >
            AI agents, fintech tools, and SaaS web &amp; mobile apps,
            engineered by a small, senior team.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#7E6B65",
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div>AI · Fintech · SaaS</div>
          <div>wonalab.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
