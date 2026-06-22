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
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/pricing/videography",
  },
};

export default function VideographyPricingPage() {
  return <VideographyPricingPageClient />;
}
