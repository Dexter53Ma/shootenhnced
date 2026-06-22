import type { Metadata } from "next";
import PhotographyAndVideographyPageClient from "./PhotographyAndVideographyPageClient";

export const metadata: Metadata = {
  title: "Photography & Videography | ShootYourListing",
  description:
    "Professional real estate photography and videography services — interior, exterior, twilight, and cinematic property videos in Morocco.",
  openGraph: {
    title: "Photography & Videography | ShootYourListing",
    description:
      "Professional real estate photography and videography services — interior, exterior, twilight, and cinematic property videos in Morocco.",
    url: "https://www.shootyourlisting.com/services/photography-and-videography",
    type: "website",
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/services/photography-and-videography",
  },
};

export default function PhotographyAndVideographyPage() {
  return <PhotographyAndVideographyPageClient />;
}
