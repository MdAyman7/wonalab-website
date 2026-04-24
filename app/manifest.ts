import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wonalab — Fintech, Web3 & AI product studio",
    short_name: "Wonalab",
    description:
      "Senior-only pods shipping fintech, web3, AI agents, and web & mobile apps for regulated markets across India and the GCC.",
    start_url: "/",
    display: "standalone",
    background_color: "#06090F",
    theme_color: "#06090F",
    lang: "en",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
