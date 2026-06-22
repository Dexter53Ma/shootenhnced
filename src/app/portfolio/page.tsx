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
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
