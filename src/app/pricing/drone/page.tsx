import type { Metadata } from "next";
import DronePricingPageClient from "./DronePricingPageClient";

export const metadata: Metadata = {
  title: "Drone Pricing | ShootYourListing",
  description:
    "Drone photography and videography packages for real estate — Aerial Stills, Aerial Video, and Full Aerial Coverage.",
  openGraph: {
    title: "Drone Pricing | ShootYourListing",
    description:
      "Drone photography and videography packages for real estate — Aerial Stills, Aerial Video, and Full Aerial Coverage.",
    url: "https://www.shootyourlisting.com/pricing/drone",
    type: "website",
    images: [
      {
        url: "/images/713023554_17914921353393261_4736652705655431245_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Drone Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone Pricing | ShootYourListing",
    description:
      "Drone photography and videography packages for real estate — Aerial Stills, Aerial Video, and Full Aerial Coverage.",
    images: ["/images/713023554_17914921353393261_4736652705655431245_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/pricing/drone",
  },
};

export default function DronePricingPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Drone Photography & Videography Packages",
    description: "DGAC-certified drone photography and videography packages for real estate in Morocco.",
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
          name: "Essential Drone",
          description: "15 aerial photos, FAA/DGAC compliant pilot, basic editing, 48h delivery",
          offers: { "@type": "Offer", price: "1200", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          name: "Premium Drone",
          description: "25 aerial photos + 2-min video, cinematic shots, twilight/golden hour, advanced editing",
          offers: { "@type": "Offer", price: "1800", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          name: "Luxury Drone",
          description: "40+ photos + 5-min cinematic video, full property showcase, 3D mapping, same-day delivery",
          offers: { "@type": "Offer", price: "3000", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Product",
          name: "Portfolio Drone",
          description: "Unlimited shots + 10-min video, multi-angle coverage, full post-production, premium editing",
          offers: { "@type": "Offer", price: "5000", priceCurrency: "MAD", availability: "https://schema.org/InStock" },
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
      <DronePricingPageClient />
    </>
  );
}
