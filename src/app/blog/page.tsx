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
  },
  alternates: {
    canonical: "https://www.shootyourlisting.com/blog",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
