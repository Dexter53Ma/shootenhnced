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
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ShootYourListing",
    description:
      "Get in touch with ShootYourListing for real estate photography, drone, and virtual tour bookings in Morocco.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/contact-us",
  },
};

export default function ContactUsPage() {
  return <ContactUsPageClient />;
}
