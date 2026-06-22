import type { Metadata } from "next";
import PhotographyPricingPageClient from "./PhotographyPricingPageClient";

export const metadata: Metadata = {
  title: "Photography Pricing | ShootYourListing",
  description:
    "Transparent photography packages for real estate — Starter, Professional, and Premium plans to fit every listing.",
  openGraph: {
    title: "Photography Pricing | ShootYourListing",
    description:
      "Transparent photography packages for real estate — Starter, Professional, and Premium plans to fit every listing.",
    url: "https://www.shootyourlisting.com/pricing/photography",
    type: "website",
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Photography Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Pricing | ShootYourListing",
    description:
      "Transparent photography packages for real estate — Starter, Professional, and Premium plans to fit every listing.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/pricing/photography",
  },
};

export default function PhotographyPricingPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Real Estate Photography Packages",
    description: "Professional photography packages for real estate properties in Morocco.",
    provider: {
      "@type": "Organization",
      name: "ShootYourListing",
      url: "https://www.shootyourlisting.com",
    },
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          name: "Appartement Photography",
          description: "20 high-res photos, interior shots, natural lighting, basic editing, 24h delivery",
          offers: { "@type": "Offer", price: "1000", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Riads Photography",
          description: "30 high-res photos, traditional architecture focus, courtyard and interior shots, golden hour session",
          offers: { "@type": "Offer", price: "1500", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Villa Photography",
          description: "40 high-res photos, professional video tour, interior/exterior/garden, pool and outdoor, drone shots",
          offers: { "@type": "Offer", price: "2000", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Product",
          name: "Events Photography",
          description: "Full coverage (4-8 hours), multiple photographers, candid and posed, video highlights, drone footage",
          offers: { "@type": "Offer", price: "3000", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <PhotographyPricingPageClient />
    </>
  );
}
