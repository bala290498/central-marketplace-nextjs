import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Central Marketplace · Chennai Local Listing & Introduction Desk",
    template: "%s | Central Marketplace",
  },
  description:
    "Directly connect with property owners, PG/flat providers, home-cooked food services, local wholesalers, home repair services, and trusted professionals across Chennai. Zero middleman fees.",
  keywords: [
    "Central Marketplace",
    "Chennai local desk",
    "Chennai house rental",
    "PG in Chennai",
    "Home food tiffin Chennai",
    "Wholesalers Chennai",
    "Home repair services Chennai",
    "Direct contact Chennai",
    "No broker Chennai",
    "Velachery",
    "T Nagar",
    "Anna Nagar",
    "Adyar",
    "OMR Chennai",
  ],
  authors: [{ name: "Central Marketplace Chennai Desk" }],
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
  openGraph: {
    title: "Central Marketplace · Chennai Local Listing & Introduction Desk",
    description:
      "Find flats, PGs, home food, local sellers & home services in Chennai. Connect directly on WhatsApp with property owners & service providers.",
    url: "https://centralmarketplace.in",
    siteName: "Central Marketplace",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Central Marketplace · Chennai Local Desk",
    description:
      "Direct introductions for properties, home meals, local sellers & services in Chennai.",
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
        "@type": "Organization",
        "@id": "https://centralmarketplace.in/#organization",
        "name": "Central Marketplace",
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
