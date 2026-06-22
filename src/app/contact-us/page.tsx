import type { Metadata } from "next";
import ContactUsPageClient from "./ContactUsPageClient";

export const metadata: Metadata = {
  title: "Contact Us | ShootYourListing",
  description:
    "Get in touch with ShootYourListing for real estate photography, drone, and virtual tour bookings in Morocco.",
  openGraph: {
    title: "Contact Us | ShootYourListing",
    description:
      "Get in touch with ShootYourListing for real estate photography, drone, and virtual tour bookings in Morocco.",
    url: "https://www.shootyourlisting.com/contact-us",
    type: "website",
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsPageClient />;
}
