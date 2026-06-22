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
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/pricing/custom",
  },
};

export default function CustomQuotePage() {
  return <CustomPricingPageClient />;
}
