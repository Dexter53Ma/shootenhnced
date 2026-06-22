import type { Metadata } from "next";
import DroneFootagePageClient from "./DroneFootagePageClient";

export const metadata: Metadata = {
  title: "Drone & Aerial Services | ShootYourListing",
  description:
    "Stunning drone photography and videography for real estate — aerial perspectives that showcase properties from every angle.",
  openGraph: {
    title: "Drone & Aerial Services | ShootYourListing",
    description:
      "Stunning drone photography and videography for real estate — aerial perspectives that showcase properties from every angle.",
    url: "https://www.shootyourlisting.com/services/drone-footage",
    type: "website",
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/services/drone-footage",
  },
};

export default function DroneFootagePage() {
  return <DroneFootagePageClient />;
}
