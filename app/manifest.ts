import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wonalab. AI, fintech, and SaaS engineering",
    short_name: "Wonalab",
    description:
      "AI agents, fintech tools, and SaaS web & mobile apps, engineered by a small, senior team.",
    start_url: "/",
    display: "standalone",
    background_color: "#160B1E",
    theme_color: "#160B1E",
    lang: "en",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
