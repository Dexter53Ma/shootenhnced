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
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/pricing/drone",
  },
};

export default function DronePricingPage() {
  return <DronePricingPageClient />;
}
