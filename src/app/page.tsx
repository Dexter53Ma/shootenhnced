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
