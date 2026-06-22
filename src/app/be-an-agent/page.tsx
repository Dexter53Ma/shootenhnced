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
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/be-an-agent",
  },
};

export default function BeAnAgentPage() {
  return <BeAnAgentPageClient />;
}
