import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "ShootYourListing | Premium Real Estate Photography & Drone Services in Morocco",
  description:
    "Premium real estate photography, drone footage, virtual tours, and video walkthroughs for agents, developers, and property brands in Morocco and beyond.",
  openGraph: {
    title: "ShootYourListing | Premium Real Estate Photography & Drone Services in Morocco",
    description:
      "Premium real estate photography, drone footage, virtual tours, and video walkthroughs for agents, developers, and property brands in Morocco and beyond.",
    url: "https://www.shootyourlisting.com/",
    type: "website",
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Premium Real Estate Photography in Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShootYourListing | Premium Real Estate Photography & Drone Services in Morocco",
    description:
      "Premium real estate photography, drone footage, virtual tours, and video walkthroughs for agents, developers, and property brands in Morocco and beyond.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/",
  },
};

export default function Home() {
  return (
    <div id="main-content">
      <HomePageClient />
    </div>
  );
}
