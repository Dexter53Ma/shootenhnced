"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, MenuIcon, CloseIcon } from "@/components/icons";
import { motion, AnimatePresence } from "framer-motion";

const BookingForm = dynamic(() => import("@/components/BookingForm"), {
  ssr: false,
  loading: () => null,
});

interface DropdownItem {
  label: string;
  href: string;
  thumbnail?: string;
}

interface MegaMenuConfig {
  heading: string;
  description: string;
  items: DropdownItem[];
}

const aboutMegaMenu: MegaMenuConfig = {
  heading: "About Us",
  description:
    "Premium real estate photography, videography, and drone services — making your listings stand out.",
  items: [
    { label: "Our Story", href: "/about", thumbnail: "/images/722296424_17916515901393261_2147057843375880472_n.jpg" },
    { label: "Our Work", href: "/portfolio", thumbnail: "/images/723256853_17917386006393261_1045073267955173653_n.jpg" },
  ],
};

const servicesMegaMenu: MegaMenuConfig = {
  heading: "Services",
  description:
    "End-to-end visual content creation for real estate agents, developers, and property brands.",
  items: [
    { label: "Photography & Videography", href: "/services/photography-and-videography", thumbnail: "/images/720675578_17916356172393261_7436296106074224862_n.jpg" },
    { label: "Drone Footage", href: "/services/drone-footage", thumbnail: "/images/720751353_17916439026393261_8552304128591804906_n.jpg" },
    { label: "Virtual Tours & 3D", href: "/services/virtual-tours", thumbnail: "/images/721463161_17916508992393261_2613060612724587922_n.jpg" },
  ],
};

const pricingMegaMenu: MegaMenuConfig = {
  heading: "Pricing",
  description:
    "Simple, transparent packages designed to fit every listing — from single properties to entire portfolios.",
  items: [
    { label: "Photography Packages", href: "/pricing/photography", thumbnail: "/images/709844383_17914470924393261_6940116219085748849_n.jpg" },
    { label: "Videography Packages", href: "/pricing/videography", thumbnail: "/images/710537681_17914922214393261_8912327613566277981_n.jpg" },
    { label: "Drone Packages", href: "/pricing/drone", thumbnail: "/images/713023554_17914921353393261_4736652705655431245_n.jpg" },
    { label: "Custom Quote", href: "/pricing/custom", thumbnail: "/images/713143876_17914923222393261_4703759715342749711_n.jpg" },
  ],
};

function MegaMenu({
  label,
  config,
  isOpen,
  scrolled,
  onToggle,
  onMouseEnter,
  onMouseLeave,
}: {
  label: string;
  config: MegaMenuConfig;
  isOpen: boolean;
  scrolled: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        onClick={onToggle}
        className={cn(
          "group relative flex items-center gap-1.5 py-2 text-[14px] font-normal font-manrope transition-colors duration-300",
          isOpen
            ? scrolled ? "text-[var(--dark-teal)]" : "text-white"
            : scrolled
              ? "text-[#333] hover:text-[var(--dark-teal)]"
              : "text-white/90 hover:text-white"
        )}
      >
        {label}
        <ChevronDownIcon
          size={12}
          className={cn("transition-transform duration-300", isOpen && "rotate-180")}
        />
        {/* Underline effect */}
        <span
          className={cn(
            "absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-300",
            scrolled ? "bg-[var(--dark-teal)]" : "bg-white",
            isOpen ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
      </button>

      {/* Mega Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-[calc(100%+8px)] z-50 -translate-x-1/2"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              className="w-[min(880px,90vw)] overflow-hidden rounded-2xl"
              style={{
                background: "rgba(8,20,27,0.95)",
                backdropFilter: "blur(32px)",
                WebkitBackdropFilter: "blur(32px)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 32px 80px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
              }}
            >
              <div className="flex w-full">
                {/* Left: Featured Image */}
                <div className="relative hidden w-[260px] shrink-0 overflow-hidden lg:block">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${config.items[0]?.thumbnail || "/images/722296424_17916515901393261_2147057843375880472_n.jpg"})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,20,27,0.98)] via-[rgba(8,20,27,0.7)] to-[rgba(8,20,27,0.3)]" />
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <div className="mb-3 h-[2px] w-8 rounded-full bg-[var(--teal)]" />
                    <h3 className="mb-2 font-the-seasons text-[22px] font-light leading-tight text-white">
                      {config.heading}
                    </h3>
                    <p className="text-[11px] leading-[17px] text-white/50 font-manrope">
                      {config.description}
                    </p>
                    <Link
                      href={config.items[0]?.href?.split("/")[1] ? `/${config.items[0].href.split("/")[1]}` : "/"}
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-medium text-white/80 transition-all duration-300 hover:bg-white hover:text-[#0a1921] font-manrope"
                    >
                      Explore All
                      <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                        <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right: Links */}
                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  {/* Mobile header */}
                  <div className="mb-4 border-b border-white/8 pb-4 lg:hidden">
                    <h3 className="font-the-seasons text-[18px] font-light text-white">{config.heading}</h3>
                    <p className="mt-1 text-[11px] text-white/40 font-manrope">{config.description}</p>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    {config.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/item flex items-center gap-3.5 rounded-xl p-3 transition-all duration-300 hover:bg-white/[0.06]"
                      >
                        <div className="relative h-[52px] w-[74px] shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={item.thumbnail || "/images/722296424_17916515901393261_2147057843375880472_n.jpg"}
                            alt={item.label}
                            fill
                            sizes="74px"
                            className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                          />
                        </div>
                        <div className="flex flex-1 items-center justify-between">
                          <span className="text-[13px] font-medium text-white/80 font-manrope group-hover/item:text-white transition-colors duration-300">
                            {item.label}
                          </span>
                          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/8 bg-white/5 opacity-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:bg-white/10">
                            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="text-white/60">
                              <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDropdown({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-[16px] font-normal font-manrope text-[#222]"
      >
        {label}
        <ChevronDownIcon
          size={16}
          className={cn("transition-transform duration-300 text-gray-400", isOpen && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-2 border-l-2 border-[var(--teal)]/20 pl-4 pb-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 py-2.5 text-[14px] font-normal font-manrope text-[#555] transition-colors duration-200 hover:text-[var(--dark-teal)]"
                >
                  <div className="relative h-[44px] w-[64px] shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.thumbnail || "/images/722296424_17916515901393261_2147057843375880472_n.jpg"}
                      alt={item.label}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDropdownEnter = (key: string) => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
    setOpenDropdown(key);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const toggleMobileDropdown = (key: string) => {
    setMobileOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500 ease-out",
          scrolled
            ? "bg-white/[0.92] backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_24px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        )}
      >
        {/* Top accent line when scrolled */}
        <div
          className={cn(
            "absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[var(--teal)] via-[var(--dark-teal)] to-[var(--teal)] transition-all duration-500",
            scrolled ? "opacity-100" : "opacity-0"
          )}
        />

        <div className="mx-auto flex w-full max-w-[1296px] items-center justify-between px-5 py-[16px] md:px-[72px]">
          {/* Logo */}
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src={scrolled ? "/images/logodark.png" : "/images/logo2.png"}
              alt="ShootYourListing"
              width={280}
              height={60}
              className={cn(
                "h-auto w-[160px] transition-all duration-500 md:w-[220px]",
                scrolled && "brightness-0"
              )}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 xl:flex">
            <MegaMenu
              label="About Us"
              config={aboutMegaMenu}
              isOpen={openDropdown === "about"}
              scrolled={scrolled}
              onToggle={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
              onMouseEnter={() => handleDropdownEnter("about")}
              onMouseLeave={handleDropdownLeave}
            />
            <MegaMenu
              label="Services"
              config={servicesMegaMenu}
              isOpen={openDropdown === "services"}
              scrolled={scrolled}
              onToggle={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            />
            <MegaMenu
              label="Pricing"
              config={pricingMegaMenu}
              isOpen={openDropdown === "pricing"}
              scrolled={scrolled}
              onToggle={() => setOpenDropdown(openDropdown === "pricing" ? null : "pricing")}
              onMouseEnter={() => handleDropdownEnter("pricing")}
              onMouseLeave={handleDropdownLeave}
            />
            {[
              { label: "Portfolio", href: "/portfolio" },
              { label: "Blogs", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-2 text-[14px] font-normal font-manrope transition-colors duration-300",
                  scrolled
                    ? "text-[#333] hover:text-[var(--dark-teal)]"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[1.5px] rounded-full transition-all duration-300",
                    scrolled ? "bg-[var(--dark-teal)]" : "bg-white",
                    "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* CTA Buttons */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <button
                onClick={() => setBookingOpen(true)}
                className={cn(
                  "inline-flex h-[38px] items-center rounded-full px-5 text-[12px] font-semibold font-manrope tracking-wide uppercase transition-all duration-300",
                  scrolled
                    ? "border border-[var(--dark-teal)]/20 text-[var(--dark-teal)] hover:bg-[var(--dark-teal)] hover:text-white hover:shadow-lg hover:shadow-[var(--dark-teal)]/20"
                    : "border border-white/30 text-white/90 backdrop-blur-sm hover:bg-white hover:text-[var(--dark-teal)] hover:border-white"
                )}
              >
                Book a Shoot
              </button>
              <Link
                href="/contact-us"
                className={cn(
                  "inline-flex h-[38px] items-center rounded-full px-5 text-[12px] font-semibold font-manrope tracking-wide uppercase transition-all duration-300",
                  scrolled
                    ? "bg-[var(--dark-teal)] text-white hover:bg-[var(--teal)] hover:shadow-lg hover:shadow-[var(--teal)]/20"
                    : "bg-white text-[var(--dark-teal)] hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                )}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors xl:hidden"
              style={{
                backgroundColor: mobileOpen ? "transparent" : scrolled ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.1)",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <CloseIcon size={20} className="text-[var(--dark-teal)]" />
              ) : (
                <MenuIcon
                  size={20}
                  className={cn("transition-colors duration-300", scrolled ? "text-[#333]" : "text-white")}
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white xl:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto px-6 pt-24 pb-10">
              <MobileDropdown
                label="About Us"
                items={aboutMegaMenu.items}
                isOpen={!!mobileOpenDropdowns["about"]}
                onToggle={() => toggleMobileDropdown("about")}
              />
              <MobileDropdown
                label="Services"
                items={servicesMegaMenu.items}
                isOpen={!!mobileOpenDropdowns["services"]}
                onToggle={() => toggleMobileDropdown("services")}
              />
              <MobileDropdown
                label="Pricing"
                items={pricingMegaMenu.items}
                isOpen={!!mobileOpenDropdowns["pricing"]}
                onToggle={() => toggleMobileDropdown("pricing")}
              />
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "Blogs", href: "/blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-gray-100 py-4 text-[16px] font-normal font-manrope text-[#222]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTAs */}
              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileOpen(false); setBookingOpen(true); }}
                  className="inline-flex h-[46px] items-center justify-center rounded-full bg-[var(--dark-teal)] px-6 text-[13px] font-semibold font-manrope tracking-wide uppercase text-white transition-all duration-300 hover:bg-[var(--teal)]"
                >
                  Book a Shoot
                </button>
                <Link
                  href="/contact-us"
                  className="inline-flex h-[46px] items-center justify-center rounded-full border-2 border-[var(--dark-teal)] px-6 text-[13px] font-semibold font-manrope tracking-wide uppercase text-[var(--dark-teal)] transition-all duration-300 hover:bg-[var(--dark-teal)] hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {bookingOpen && <BookingForm onClose={() => setBookingOpen(false)} />}
    </>
  );
}
