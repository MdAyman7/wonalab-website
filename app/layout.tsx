import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://wonalab.com";
const TITLE = "Wonalab — Fintech, Web3 & AI product studio";
const DESCRIPTION =
  "Senior-only pods shipping fintech, web3, AI agents, and web & mobile apps for regulated markets across India and the GCC.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Wonalab",
  },
  description: DESCRIPTION,
  applicationName: "Wonalab",
  keywords: [
    "fintech product studio",
    "web3 development agency",
    "AI agents development",
    "regulated software India",
    "GCC fintech engineering",
    "Bengaluru product studio",
    "Dubai software agency",
    "Riyadh fintech developers",
    "RBI sandbox engineering",
    "SAMA compliance software",
    "cross-border payments platform",
    "KYC and onboarding platform",
    "Solidity Solana developers",
    "Next.js iOS Android studio",
  ],
  authors: [{ name: "Wonalab", url: SITE_URL }],
  creator: "Wonalab",
  publisher: "Wonalab Pvt. Ltd.",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-AE": "/",
      "en-SA": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_AE", "en_SA", "en_GB", "en_US"],
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
  address: [
    { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
    { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Bahrain" },
    { "@type": "Country", name: "Oman" },
    { "@type": "Country", name: "Kuwait" },
  ],
  knowsAbout: [
    "Fintech engineering",
    "Payments and ledgers",
    "Web3 and on-chain product",
    "AI agents and copilots",
    "Regulated software",
    "iOS and Android development",
    "Next.js web applications",
    "RBI sandbox",
    "SAMA compliance",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wonalab services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fintech engineering",
          description: "Payments, ledgers, and cards. Regulated-grade backends, real-time settlement, RBI sandboxes to GCC licenses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web3 product development",
          description: "Wallets, marketplaces, and protocol UX. Solidity, Solana, and L2 integrations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI agents",
          description: "Customer and back-office voice, chat, and copilots in English, Hindi, and Arabic.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web and mobile applications",
          description: "Design-led iOS, Android, and Next.js apps from 0→1 and 1→100.",
        },
      },
    ],
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@wonalab.com",
      areaServed: ["IN", "AE", "SA", "QA", "BH", "OM", "KW"],
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
