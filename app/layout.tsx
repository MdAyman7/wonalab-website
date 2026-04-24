import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://wonalab.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wonalab — Digital products that ship, built for regulated markets.",
    template: "%s · Wonalab",
  },
  description:
    "End-to-end teams for fintech, web3, AI agents, and modern web & mobile — engineered for India and the Middle East. Senior-only pods shipping regulated software in weeks.",
  applicationName: "Wonalab",
  keywords: [
    "fintech product studio",
    "web3 development",
    "AI agents",
    "regulated software India",
    "GCC fintech",
    "Bengaluru digital agency",
    "Dubai software studio",
    "Riyadh product team",
    "RBI sandbox",
    "SAMA compliance",
    "cross-border payments",
    "KYC platform",
  ],
  authors: [{ name: "Wonalab", url: SITE_URL }],
  creator: "Wonalab",
  publisher: "Wonalab Pvt. Ltd.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Wonalab",
    title: "Wonalab — Digital products that ship, built for regulated markets.",
    description:
      "End-to-end teams for fintech, web3, AI agents, and modern web & mobile — engineered for India and the Middle East.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Wonalab — Digital, crafted.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonalab — Digital products that ship.",
    description:
      "Senior-only pods for fintech, web3, AI agents, web & mobile — built for India and the Middle East.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/assets/logo-mark.svg", type: "image/svg+xml" }],
    shortcut: "/assets/logo-mark.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
  "@type": "Organization",
  name: "Wonalab",
  legalName: "Wonalab Pvt. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo-mark.svg`,
  slogan: "Digital, crafted.",
  description:
    "End-to-end product teams for fintech, web3, AI agents, and modern web & mobile — engineered for India and the Middle East.",
  foundingDate: "2017",
  address: [
    { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  ],
  areaServed: ["IN", "AE", "SA", "QA", "BH", "OM", "KW"],
  knowsAbout: [
    "Fintech engineering",
    "Web3 development",
    "AI agents",
    "Regulated software",
    "Mobile application development",
  ],
  sameAs: [
    "https://www.linkedin.com/company/wonalab",
    "https://github.com/wonalab",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wonalab",
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: "Wonalab" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-web"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
