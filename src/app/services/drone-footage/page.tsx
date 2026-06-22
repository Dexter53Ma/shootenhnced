import type { Metadata } from "next";
import DroneFootagePageClient from "./DroneFootagePageClient";

export const metadata: Metadata = {
  title: "Drone & Aerial Services | ShootYourListing",
  description:
    "Stunning drone photography and videography for real estate — aerial perspectives that showcase properties from every angle.",
  openGraph: {
    title: "Drone & Aerial Services | ShootYourListing",
    description:
      "Stunning drone photography and videography for real estate — aerial perspectives that showcase properties from every angle.",
    url: "https://www.shootyourlisting.com/services/drone-footage",
    type: "website",
    images: [
      {
        url: "/images/713023554_17914921353393261_4736652705655431245_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Drone & Aerial Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drone & Aerial Services | ShootYourListing",
    description:
      "Stunning drone photography and videography for real estate — aerial perspectives that showcase properties from every angle.",
    images: ["/images/713023554_17914921353393261_4736652705655431245_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/services/drone-footage",
  },
};

export default function DroneFootagePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drone & Aerial Photography and Videography",
    description: "DGAC-certified drone photography and videography for real estate — aerial perspectives that showcase properties from every angle.",
    provider: {
      "@type": "Organization",
      name: "ShootYourListing",
      url: "https://www.shootyourlisting.com",
    },
    areaServed: ["Morocco", "UAE", "Caribbean"],
    serviceType: ["Drone Photography", "Aerial Videography", "Aerial Mapping"],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "1200",
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
      <DroneFootagePageClient />
    </>
  );
}
