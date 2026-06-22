import type { Metadata } from "next";
import PhotographyAndVideographyPageClient from "./PhotographyAndVideographyPageClient";

export const metadata: Metadata = {
  title: "Photography & Videography | ShootYourListing",
  description:
    "Professional real estate photography and videography services — interior, exterior, twilight, and cinematic property videos in Morocco.",
  openGraph: {
    title: "Photography & Videography | ShootYourListing",
    description:
      "Professional real estate photography and videography services — interior, exterior, twilight, and cinematic property videos in Morocco.",
    url: "https://www.shootyourlisting.com/services/photography-and-videography",
    type: "website",
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Photography & Videography Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography & Videography | ShootYourListing",
    description:
      "Professional real estate photography and videography services — interior, exterior, twilight, and cinematic property videos in Morocco.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/services/photography-and-videography",
  },
};

export default function PhotographyAndVideographyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Real Estate Photography & Videography",
    description: "Professional real estate photography and videography services — interior, exterior, twilight, and cinematic property videos in Morocco.",
    provider: {
      "@type": "Organization",
      name: "ShootYourListing",
      url: "https://www.shootyourlisting.com",
    },
    areaServed: ["Morocco", "UAE", "Caribbean"],
    serviceType: ["Real Estate Photography", "Property Videography", "Interior Photography", "Exterior Photography"],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "1000",
      highPrice: "5000",
      priceCurrency: "MAD",
      offerCount: "4",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PhotographyAndVideographyPageClient />
    </>
  );
}
