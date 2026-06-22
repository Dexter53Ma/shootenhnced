import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog | ShootYourListing",
  description:
    "Tips, insights, and guides for real estate photography, videography, and property marketing.",
  openGraph: {
    title: "Blog | ShootYourListing",
    description:
      "Tips, insights, and guides for real estate photography, videography, and property marketing.",
    url: "https://www.shootyourlisting.com/blog",
    type: "website",
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | ShootYourListing",
    description:
      "Tips, insights, and guides for real estate photography, videography, and property marketing.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
