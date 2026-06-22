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
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/pricing/photography",
  },
};

export default function PhotographyPricingPage() {
  return <PhotographyPricingPageClient />;
}
