import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/BackToTop";
import AiSupportAgentLazy from "@/components/AiSupportAgentLazy";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "ShootYourListing | Premium Real Estate Photography & Drone Services",
  description:
    "ShootYourListing provides premium real estate photography, drone footage, virtual tours, and video walkthroughs for agents, developers, and property brands in Morocco and beyond.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/appleTouchIcon.png",
  },
  metadataBase: new URL("https://www.shootyourlisting.com"),
  openGraph: {
    title: "ShootYourListing | Premium Real Estate Photography & Drone Services",
    description:
      "Premium real estate photography, drone footage, virtual tours, and video walkthroughs for agents, developers, and property brands in Morocco and beyond.",
    url: "https://www.shootyourlisting.com",
    siteName: "ShootYourListing",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/722296424_17916515901393261_2147057843375880472_n.jpg",
        width: 1200,
        height: 630,
        alt: "ShootYourListing - Premium Real Estate Photography in Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShootYourListing | Premium Real Estate Photography & Drone Services",
    description:
      "Premium real estate photography, drone footage, virtual tours, and video walkthroughs for agents, developers, and property brands in Morocco and beyond.",
    images: ["/images/722296424_17916515901393261_2147057843375880472_n.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:bg-[var(--dark-teal)] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:m-4 focus:text-sm"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ShootYourListing",
              description: "Premium real estate photography, drone footage, virtual tours, and video walkthroughs for agents, developers, and property brands.",
              url: "https://www.shootyourlisting.com",
              telephone: "+212621189496",
              email: "hello@shootyourlisting.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Office 1204, Media Hub Tower",
                addressLocality: "Casablanca",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.5731,
                longitude: -7.5898,
              },
              areaServed: ["Morocco", "UAE", "Caribbean"],
              serviceType: ["Real Estate Photography", "Drone Photography", "Virtual Tours", "Real Estate Videography"],
              image: "https://www.shootyourlisting.com/images/722296424_17916515901393261_2147057843375880472_n.jpg",
              logo: "https://www.shootyourlisting.com/images/logodark.png",
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "08:00",
                closes: "20:00",
              },
              sameAs: [
                "https://www.instagram.com/shootyourlisting",
                "https://www.linkedin.com/company/shootyourlisting",
                "https://www.facebook.com/shootyourlisting",
                "https://www.youtube.com/@shootyourlisting",
                "https://wa.me/212621189496",
              ],
            }),
          }}
        />
        {children}
        <BackToTop />
        <AiSupportAgentLazy />
      </body>
    </html>
  );
}
