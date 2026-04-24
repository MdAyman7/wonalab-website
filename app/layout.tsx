import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://wonalab.com";
const TITLE = "Wonalab — Web3-native engineering for AI, on-chain & fintech";
const DESCRIPTION =
  "DEXes, on-chain platforms, AI agents, OpenClaw integrations, and Telegram & Discord bots — engineered by a web3-native team for regulated markets.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Wonalab",
  },
  description: DESCRIPTION,
  applicationName: "Wonalab",
  keywords: [
    "DEX development company",
    "on-chain platform development",
    "smart contract engineering",
    "AMM and order-book exchange development",
    "EVM and Solana development",
    "Telegram bot development",
    "Discord bot development",
    "AI agent development services",
    "AI chatbot development",
    "OpenClaw integration partner",
    "fintech development services",
    "web3-native engineering team",
    "smart contract audits and engineering",
    "self-custody wallet development",
    "AI-powered products",
  ],
  authors: [{ name: "Wonalab", url: SITE_URL }],
  creator: "Wonalab",
  publisher: "Wonalab Pvt. Ltd.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: SITE_URL,
    siteName: "Wonalab",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: "@wonalab",
    creator: "@wonalab",
    title: TITLE,
    description: DESCRIPTION,
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#06090F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Wonalab",
  legalName: "Wonalab Pvt. Ltd.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/apple-icon`,
    width: 180,
    height: 180,
  },
  image: `${SITE_URL}/opengraph-image`,
  slogan: "Digital, crafted.",
  description: DESCRIPTION,
  foundingDate: "2017",
  priceRange: "$$$",
  knowsAbout: [
    "Decentralized exchanges (DEX, AMM, order-book)",
    "On-chain platforms and protocols",
    "EVM and Solana engineering",
    "Token launchpads, staking, and vaults",
    "AI agents and copilots",
    "AI-powered chatbots",
    "Telegram and Discord bots",
    "OpenClaw integrations",
    "Fintech engineering",
    "Self-custody wallet development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wonalab services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "DEXes & on-chain platforms",
          description: "Concentrated-liquidity DEXes, AMMs, order-book exchanges, launchpads, staking vaults, and bridges across EVM chains and Solana.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI agents, chatbots & OpenClaw integrations",
          description: "Voice, chat, and copilot agents wired to your data — including OpenClaw integrations across messaging apps. Multi-LLM, model-agnostic, production-ready.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Telegram & Discord bots",
          description: "Trading bots, community ops, NFT verification, and automation flows — built where your users actually are.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fintech engineering",
          description: "Payments, ledgers, KYC, and core-banking integrations — sandbox to license-grade production.",
        },
      },
    ],
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@wonalab.com",
      availableLanguage: ["English", "Hindi", "Arabic"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/wonalab",
    "https://github.com/wonalab",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Wonalab",
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
