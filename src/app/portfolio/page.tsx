import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

export const metadata: Metadata = {
  title: "Portfolio | ShootYourListing",
  description:
    "Browse our real estate photography and videography portfolio — luxury villas, commercial properties, and aerial projects.",
  openGraph: {
    title: "Portfolio | ShootYourListing",
    description:
      "Browse our real estate photography and videography portfolio — luxury villas, commercial properties, and aerial projects.",
    url: "https://www.shootyourlisting.com/portfolio",
    type: "website",
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | ShootYourListing",
    description:
      "Browse our real estate photography and videography portfolio — luxury villas, commercial properties, and aerial projects.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
