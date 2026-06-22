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
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | ShootYourListing",
    description:
      "Learn about ShootYourListing — Morocco's premier real estate photography and videography agency delivering stunning visual content.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
