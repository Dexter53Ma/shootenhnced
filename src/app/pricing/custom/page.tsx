import type { Metadata } from "next";
import CustomPricingPageClient from "./CustomPricingPageClient";

export const metadata: Metadata = {
  title: "Custom Quote | ShootYourListing",
  description:
    "Get a custom quote for your real estate visual content needs — tailored packages for agents and developers.",
  openGraph: {
    title: "Custom Quote | ShootYourListing",
    description:
      "Get a custom quote for your real estate visual content needs — tailored packages for agents and developers.",
    url: "https://www.shootyourlisting.com/pricing/custom",
    type: "website",
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Custom Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Quote | ShootYourListing",
    description:
      "Get a custom quote for your real estate visual content needs — tailored packages for agents and developers.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/pricing/custom",
  },
};

export default function CustomQuotePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Real Estate Visual Content",
    description: "Get a custom quote for your real estate visual content needs — tailored packages for agents and developers.",
    provider: {
      "@type": "Organization",
      name: "ShootYourListing",
      url: "https://www.shootyourlisting.com",
    },
    areaServed: ["Morocco", "UAE", "Caribbean"],
    serviceType: ["Photography", "Videography", "Drone", "Virtual Tours"],
    offers: {
      "@type": "Offer",
      priceCurrency: "MAD",
      description: "Custom quote based on your specific requirements",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <CustomPricingPageClient />
    </>
  );
}
