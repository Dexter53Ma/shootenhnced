import type { Metadata } from "next";
import BeAnAgentPageClient from "./BeAnAgentPageClient";

export const metadata: Metadata = {
  title: "Become an Agent | ShootYourListing",
  description:
    "Join ShootYourListing's agent network. Earn commissions and offer premium visual content to your clients.",
  openGraph: {
    title: "Become an Agent | ShootYourListing",
    description:
      "Join ShootYourListing's agent network. Earn commissions and offer premium visual content to your clients.",
    url: "https://www.shootyourlisting.com/be-an-agent",
    type: "website",
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Become an Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Become an Agent | ShootYourListing",
    description:
      "Join ShootYourListing's agent network. Earn commissions and offer premium visual content to your clients.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/be-an-agent",
  },
};

export default function BeAnAgentPage() {
  return <BeAnAgentPageClient />;
}
