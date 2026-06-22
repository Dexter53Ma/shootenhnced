import type { Metadata } from "next";
import VirtualToursPageClient from "./VirtualToursPageClient";

export const metadata: Metadata = {
  title: "Virtual Tours & 3D | ShootYourListing",
  description:
    "Immersive 360° virtual tours and Matterport 3D scans that let buyers explore properties from anywhere in the world.",
  openGraph: {
    title: "Virtual Tours & 3D | ShootYourListing",
    description:
      "Immersive 360° virtual tours and Matterport 3D scans that let buyers explore properties from anywhere in the world.",
    url: "https://www.shootyourlisting.com/services/virtual-tours",
    type: "website",
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/services/virtual-tours",
  },
};

export default function VirtualToursPage() {
  return <VirtualToursPageClient />;
}
