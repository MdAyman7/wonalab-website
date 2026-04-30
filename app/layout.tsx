import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://wonalab.com";
const TITLE = "Wonalab. AI, fintech, and SaaS engineering";
const DESCRIPTION =
  "AI agents, fintech tools, and SaaS web & mobile apps, engineered by a small, senior team.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Wonalab",
  },
  description: DESCRIPTION,
  applicationName: "Wonalab",
  keywords: [
    "AI agent development",
    "AI chatbot development",
    "fintech engineering services",
    "payments and ledger engineering",
    "SaaS web application development",
    "SaaS mobile application development",
    "Telegram bot development",
    "Discord bot development",
    "automation and workflow engineering",
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
  themeColor: "#160B1E",
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
    "AI agents and copilots",
    "AI-powered chatbots",
    "Fintech engineering",
    "Payments, ledgers, and KYC",
    "SaaS web applications",
    "SaaS mobile applications",
    "Telegram and Discord bots",
    "Automation and workflow engineering",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wonalab services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI agents, chatbots & copilots",
          description: "Voice, chat, and copilot agents wired to your data. Multi-LLM, model-agnostic, production-ready.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fintech engineering",
          description: "Payments, ledgers, KYC, and core-banking integrations, from sandbox to production.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS web & mobile apps",
          description: "End-to-end SaaS products: web dashboards, native and cross-platform mobile apps, APIs, and infra.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bots & automation",
          description: "Telegram, Discord, and Slack bots, plus internal workflow automation built where your users live.",
        },
      },
    ],
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@wonalab.com",
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
      <body>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wjvhrcq5ua");`}
        </Script>
        {children}
      </body>
    </html>
  );
}
