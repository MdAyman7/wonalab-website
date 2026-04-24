import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wonalab — Web3-native engineering for AI, on-chain & fintech",
    short_name: "Wonalab",
    description:
      "DEXes, on-chain platforms, AI agents, OpenClaw integrations, and Telegram & Discord bots — engineered by a web3-native team.",
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
