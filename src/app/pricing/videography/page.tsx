import type { Metadata } from "next";
import VideographyPricingPageClient from "./VideographyPricingPageClient";

export const metadata: Metadata = {
  title: "Videography Pricing | ShootYourListing",
  description:
    "Real estate videography packages — Standard Walkthrough, Cinematic, and Premium video solutions.",
  openGraph: {
    title: "Videography Pricing | ShootYourListing",
    description:
      "Real estate videography packages — Standard Walkthrough, Cinematic, and Premium video solutions.",
    url: "https://www.shootyourlisting.com/pricing/videography",
    type: "website",
    images: [
      {
        url: "/images/710537681_17914922214393261_8912327613566277981_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Videography Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Videography Pricing | ShootYourListing",
    description:
      "Real estate videography packages — Standard Walkthrough, Cinematic, and Premium video solutions.",
    images: ["/images/710537681_17914922214393261_8912327613566277981_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/pricing/videography",
  },
};

export default function VideographyPricingPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Real Estate Videography Packages",
    description: "Cinematic video walkthrough and real estate videography packages in Morocco.",
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
          name: "Appartement Videography",
          description: "2-3 min professional video, interior walkthrough, stabilizer/gimbal, licensed music, color grading",
          offers: { "@type": "Offer", price: "2500", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Riads Videography",
          description: "3-5 min cinematic video, interior/exterior coverage, drone included, golden hour shots",
          offers: { "@type": "Offer", price: "3500", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Villa Videography",
          description: "5-7 min premium video, full property tour, pool/garden coverage, twilight shots, drone integration",
          offers: { "@type": "Offer", price: "5000", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Product",
          name: "Events Videography",
          description: "Full event coverage (4-8 hours), multi-camera setup, highlight reel, full documentary",
          offers: { "@type": "Offer", price: "8000", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
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
      <VideographyPricingPageClient />
    </>
  );
}
