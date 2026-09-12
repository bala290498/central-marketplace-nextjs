import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Central Marketplace (Central Market Place) · Chennai Local Listing Desk",
    template: "%s | Central Marketplace (Central Market Place) Chennai",
  },
  description:
    "Central Marketplace (Central Market Place) is Chennai's direct local listing desk. Find PG rooms, house rentals, home-cooked food tiffins, local wholesalers, electrician & plumber repairs, and trusted professionals across Chennai.",
  keywords: [
    "Central Marketplace",
    "Central Market Place",
    "CentralMarketplace",
    "Central Market Place Chennai",
    "Central Marketplace Chennai",
    "Central Marketplace Desk",
    "Central Market Place Desk",
    "CMP Chennai",
    "Central Market Place Tamil Nadu",
    "Chennai local listing desk",
    "Chennai house rental direct contact",
    "PG in Chennai no broker",
    "Home food tiffin service Chennai",
    "Local wholesalers dealers Chennai",
    "Home repair services Chennai",
    "Electrician plumber contact Chennai",
    "Direct contact Chennai marketplace",
    "No broker rental Chennai",
    "Velachery rentals",
    "T Nagar wholesalers",
    "Anna Nagar home food",
    "Adyar PG rooms",
    "OMR Chennai rentals",
    "Mylapore tiffin service",
    "Tambaram house rent",
  ],
  authors: [{ name: "Central Marketplace (Central Market Place) Chennai Desk" }],
  creator: "Central Marketplace",
  publisher: "Central Marketplace Desk",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL("https://centralmarketplace.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Central Marketplace (Central Market Place) · Chennai Local Desk",
    description:
      "Connect directly with property owners, PG providers, home food chefs, local wholesalers & home services in Chennai on Central Marketplace (Central Market Place).",
    url: "https://centralmarketplace.in",
    siteName: "Central Marketplace (Central Market Place)",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Central Marketplace (Central Market Place) · Chennai Local Desk",
    description:
      "Direct introductions for properties, home meals, local sellers & services across Chennai.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#eb4203",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://centralmarketplace.in/#website",
        "url": "https://centralmarketplace.in",
        "name": "Central Marketplace",
        "alternateName": [
          "Central Market Place",
          "CentralMarketplace",
          "Central Market Place Chennai",
          "Central Marketplace Chennai",
          "Central Marketplace Desk",
          "Central Market Place Desk",
          "CMP",
          "CMP Chennai"
        ],
        "description": "Chennai local listing and introduction desk for properties, food, wholesalers and services.",
      },
      {
        "@type": "Organization",
        "@id": "https://centralmarketplace.in/#organization",
        "name": "Central Marketplace",
        "alternateName": [
          "Central Market Place",
          "CentralMarketplace",
          "Central Market Place Chennai",
          "Central Marketplace Desk",
          "CMP"
        ],
        "url": "https://centralmarketplace.in",
        "email": "contact@centralmarketplace.in",
        "telephone": "+91 96776 91237",
        "description":
          "Chennai's listing and introduction desk for properties, home-cooked food, wholesalers, and local services.",
        "areaServed": {
          "@type": "City",
          "name": "Chennai",
          "containedInPlace": {
            "@type": "State",
            "name": "Tamil Nadu",
          },
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://centralmarketplace.in/#localbusiness",
        "name": "Central Marketplace Chennai Desk",
        "alternateName": [
          "Central Market Place Chennai Desk",
          "Central Market Place",
          "CentralMarketplace",
          "CMP Desk Chennai"
        ],
        "image": "https://centralmarketplace.in/og-image.png",
        "telephone": "+91 96776 91237",
        "email": "contact@centralmarketplace.in",
        "priceRange": "₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN",
        },
        "url": "https://centralmarketplace.in",
      },
    ],
  };

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f9f5f0] text-[#2b1f1d] antialiased">
        {children}
      </body>
    </html>
  );
}
