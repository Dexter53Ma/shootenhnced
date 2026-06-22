import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | ShootYourListing",
  description:
    "Learn about ShootYourListing — Morocco's premier real estate photography and videography agency delivering stunning visual content.",
  openGraph: {
    title: "About Us | ShootYourListing",
    description:
      "Learn about ShootYourListing — Morocco's premier real estate photography and videography agency delivering stunning visual content.",
    url: "https://www.shootyourlisting.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
