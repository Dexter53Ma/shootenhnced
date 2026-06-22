"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Interior Photography", href: "/services/photography-and-videography" },
  { label: "Exterior Photography", href: "/services/photography-and-videography" },
  { label: "Drone & Aerial", href: "/services/drone-footage" },
  { label: "Virtual Tours & 3D", href: "/services/virtual-tours" },
  { label: "Video Walkthroughs", href: "/services/photography-and-videography" },
  { label: " twilight Shoots", href: "/services/photography-and-videography" },
];

const pricing = [
  { label: "Starter Package", href: "/pricing/photography" },
  { label: "Professional Package", href: "/pricing/photography" },
  { label: "Premium Package", href: "/pricing/videography" },
  { label: "Drone Add-On", href: "/pricing/drone" },
  { label: "Virtual Tour Add-On", href: "/services/virtual-tours" },
  { label: "Custom Quote", href: "/pricing/custom" },
];

export default function Footer() {
  return (
    <footer className="footer-wrapper relative w-full overflow-hidden" style={{ height: "100vh", minHeight: 900 }}>
      {/* Background Image */}
      <div
        className="footer-image absolute inset-0"
        style={{
          backgroundImage: "url(/images/footer-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div
        className="footer-overlay absolute inset-0"
        style={{
          background: "repeating-linear-gradient(0deg, rgb(9, 44, 56), rgba(9, 44, 56, 0.7) 55%, rgba(0, 0, 0, 0))",
        }}
      />

      {/* Footer Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-10 pt-20 md:px-[72px] md:pb-[43px]">
        {/* Logo + Copyright */}
        <div className="mb-12 flex flex-col gap-3 md:mb-0">
          <Image
            src="/images/logo2.png"
            alt="ShootYourListing"
            width={280}
            height={80}
            className="h-auto w-[200px] md:w-[260px]"
          />
          <p className="font-manrope text-[12px] leading-[1.5] text-[#f5f4f2]/80">
            © 2026 ShootYourListing. All Rights Reserved.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Services */}
          <div>
            <h4 className="mb-3 font-manrope text-[14px] font-semibold uppercase tracking-[1px] text-[#f5f4f2]">
              Services
            </h4>
            <ul className="m-0 list-none p-0">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="mb-1 block font-manrope text-[14.4px] font-light leading-[21.6px] text-[#f5f4f2]/80 no-underline transition-opacity duration-300 hover:text-[#f5f4f2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Caribbean Properties */}
          <div>
            <h4 className="mb-3 font-manrope text-[14px] font-semibold uppercase tracking-[1px] text-[#f5f4f2]">
              Pricing
            </h4>
            <ul className="m-0 list-none p-0">
              {pricing.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="mb-1 block font-manrope text-[14.4px] font-light leading-[21.6px] text-[#f5f4f2]/80 no-underline transition-opacity duration-300 hover:text-[#f5f4f2]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Head Office */}
          <div>
            <h4 className="mb-3 font-manrope text-[14px] font-semibold uppercase tracking-[1px] text-[#f5f4f2]">
              Contact
            </h4>
            <p className="mb-3 font-manrope text-[12px] uppercase tracking-[1px] text-[#f5f4f2]/70">
              Studio
            </p>
            <p className="mb-1 font-manrope text-[14.4px] font-light leading-[21.6px] text-[#f5f4f2]/80">
              Office 1204, Media Hub Tower
            </p>
            <p className="mb-4 font-manrope text-[14.4px] font-light leading-[21.6px] text-[#f5f4f2]/80">
              Casablanca, Morocco
            </p>

            <p className="mb-3 font-manrope text-[12px] uppercase tracking-[1px] text-[#f5f4f2]/70">
              General Enquiries
            </p>
            <a
              href="mailto:info@shootyourlisting.com"
              className="mb-1 block font-manrope text-[14.4px] font-light leading-[21.6px] text-[#f5f4f2]/80 no-underline transition-opacity duration-300 hover:text-[#f5f4f2]"
            >
              info@shootyourlisting.com
            </a>
          </div>

          {/* Contact - CBI + Phone */}
          <div>
            <p className="mb-3 font-manrope text-[12px] uppercase tracking-[1px] text-[#f5f4f2]/70">
              Bookings
            </p>
            <a
              href="mailto:bookings@shootyourlisting.com"
              className="mb-1 block font-manrope text-[14.4px] font-light leading-[21.6px] text-[#f5f4f2]/80 no-underline transition-opacity duration-300 hover:text-[#f5f4f2]"
            >
              bookings@shootyourlisting.com
            </a>

            <p className="mb-3 mt-4 font-manrope text-[12px] uppercase tracking-[1px] text-[#f5f4f2]/70">
              Phone
            </p>
            <a
              href="tel:+212621189496"
              className="mb-1 block font-manrope text-[14.4px] font-light leading-[21.6px] text-[#f5f4f2]/80 no-underline transition-opacity duration-300 hover:text-[#f5f4f2]"
            >
              +212 6 21 18 94 96
            </a>

            <p className="mb-3 mt-4 font-manrope text-[12px] uppercase tracking-[1px] text-[#f5f4f2]/70">
              WhatsApp
            </p>
            <a
              href="https://wa.me/212621189496"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-1 block font-manrope text-[14.4px] font-light leading-[21.6px] text-[#f5f4f2]/80 no-underline transition-opacity duration-300 hover:text-[#f5f4f2]"
            >
              +212 6 21 18 94 96
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
