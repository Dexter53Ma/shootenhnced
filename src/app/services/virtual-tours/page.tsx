import type { Metadata } from "next";
import VirtualToursPageClient from "./VirtualToursPageClient";

export const metadata: Metadata = {
  title: "Virtual Tours & 3D | ShootYourListing",
  description:
    "Immersive 360° virtual tours and Matterport 3D scans that let buyers explore properties from anywhere in the world.",
  openGraph: {
    title: "Virtual Tours & 3D | ShootYourListing",
    description:
      "Immersive 360° virtual tours and Matterport 3D scans that let buyers explore properties from anywhere in the world.",
    url: "https://www.shootyourlisting.com/services/virtual-tours",
    type: "website",
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Virtual Tours & 3D Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Tours & 3D | ShootYourListing",
    description:
      "Immersive 360° virtual tours and Matterport 3D scans that let buyers explore properties from anywhere in the world.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/services/virtual-tours",
  },
};

export default function VirtualToursPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "360° Virtual Tours & Matterport 3D Scans",
    description: "Immersive 360° virtual tours and Matterport 3D scans that let buyers explore properties from anywhere in the world.",
    provider: {
      "@type": "Organization",
      name: "ShootYourListing",
      url: "https://www.shootyourlisting.com",
    },
    areaServed: ["Morocco", "UAE", "Caribbean"],
    serviceType: ["Virtual Tours", "3D Scanning", "Matterport", "360° Photography"],
    offers: {
      "@type": "Offer",
      price: "1200",
      priceCurrency: "MAD",
      description: "360° Matterport virtual tour",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <VirtualToursPageClient />
    </>
  );
}
