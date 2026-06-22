"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="var(--teal)" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="8" stroke="var(--teal)" strokeWidth="1.5" />
        <path d="M24 4V12M24 36V44M4 24H12M36 24H44" stroke="var(--teal)" strokeWidth="1.5" />
      </svg>
    ),
    title: "360° Virtual Tours",
    description:
      "Fully interactive 360-degree tours that let buyers explore every room at their own pace.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="36" height="24" rx="2" stroke="var(--teal)" strokeWidth="1.5" />
        <path d="M6 18L24 28L42 18" stroke="var(--teal)" strokeWidth="1.5" />
        <path d="M24 28V40" stroke="var(--teal)" strokeWidth="1.5" />
        <path d="M14 40H34" stroke="var(--teal)" strokeWidth="1.5" />
      </svg>
    ),
    title: "3D Matterport Scans",
    description:
      "Photorealistic 3D floor plans and dollhouse views for complete spatial understanding.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="2" stroke="var(--teal)" strokeWidth="1.5" />
        <polygon points="20,16 34,24 20,32" fill="var(--teal)" opacity="0.3" />
        <polygon points="20,16 34,24 20,32" stroke="var(--teal)" strokeWidth="1.5" fill="none" />
      </svg>
    ),
    title: "Video Walkthroughs",
    description:
      "Professionally narrated video tours ideal for social media and email marketing.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="36" height="36" rx="2" stroke="var(--teal)" strokeWidth="1.5" />
        <rect x="10" y="10" width="12" height="12" rx="1" stroke="var(--teal)" strokeWidth="1.5" />
        <rect x="26" y="10" width="12" height="12" rx="1" stroke="var(--teal)" strokeWidth="1.5" />
        <rect x="10" y="26" width="12" height="12" rx="1" stroke="var(--teal)" strokeWidth="1.5" />
        <rect x="26" y="26" width="12" height="12" rx="1" stroke="var(--teal)" strokeWidth="1.5" />
      </svg>
    ),
    title: "Interactive Floor Plans",
    description:
      "Click-through floor plans linking to room photos — perfect for property portals.",
  },
];

const galleryImages = [
  {
    src: "/images/722909988_17917290198393261_3129732607416797432_n.jpg",
    alt: "Virtual tour example 1",
  },
  {
    src: "/images/724239483_17917385031393261_1203274265648523239_n.jpg",
    alt: "Virtual tour example 2",
  },
  {
    src: "/images/721667198_17916578730393261_6059273705413900669_n.jpg",
    alt: "Virtual tour example 3",
  },
  {
    src: "/images/722364187_17917253031393261_9092373057564835825_n.jpg",
    alt: "Virtual tour example 4",
  },
];

const marqueeText =
  "virtual tours \u00b7 3D scans \u00b7 360\u00b0 walkthroughs \u00b7 Matterport \u00b7 interactive floor plans \u00b7 video walkthroughs \u00b7 shoot your listing";

function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default function VirtualToursPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useScrollAnimation(0.1);
  const impactRef = useScrollAnimation(0.1);
  const ctaRef = useScrollAnimation(0.1);
  const marqueeRef = useScrollAnimation(0.1);
  const galleryRef = useScrollAnimation(0.1);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!carouselRef.current) return;
      setIsDragging(true);
      dragStart.current = {
        x: e.pageX,
        scrollLeft: carouselRef.current.scrollLeft,
      };
    },
    []
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !carouselRef.current) return;
      e.preventDefault();
      const dx = e.pageX - dragStart.current.x;
      carouselRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroEl.classList.add("animate-fade-in");
          observer.unobserve(heroEl);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Navigation />

      <section
        className="relative flex w-full items-end overflow-hidden"
        style={{ minHeight: 500, height: "100vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/723256853_17917386006393261_1045073267955173653_n.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          ref={heroRef}
          className="relative z-10 w-full max-w-[1296px] px-6 pb-[120px] opacity-0 md:px-[72px]"
        >
          <h1
            className="font-the-seasons font-light text-[var(--light-grey)]"
            style={{
              fontSize: "clamp(36px, 5vw, 64.8px)",
              lineHeight: "clamp(44px, 5.4vw, 77.76px)",
              maxWidth: 800,
            }}
          >
            Virtual Tours & 3D
          </h1>
          <p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
          >
            Step inside properties without leaving your screen. Our immersive virtual tours and 3D scans give buyers a realistic sense of space, flow, and finish — anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-16 px-6 py-[100px] md:flex-row md:items-start md:gap-16 md:px-[72px]">
          <div ref={servicesRef} className="flex-1 opacity-0">
            <h2
              className="font-the-seasons font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
                marginBottom: 32,
              }}
            >
              Immersive Experiences That Drive Inquiries
            </h2>

            <p
              className="font-manrope font-light text-[var(--dark-teal)]"
              style={{
                fontSize: 14.4,
                lineHeight: "24px",
              }}
            >
              Virtual tours allow potential buyers to explore properties from anywhere in the world, 24/7. Our 3D tours and interactive walkthroughs increase engagement, reduce unnecessary viewings, and help serious buyers make faster decisions.
            </p>
          </div>

          <div className="flex-1">
            <div
              ref={galleryRef}
              className="relative overflow-hidden rounded-2xl opacity-0"
              style={{ height: 400 }}
            >
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 pb-[100px] md:px-[72px]">
          <div ref={impactRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              Our Virtual Solutions
            </h2>

            <div className="grid gap-12 md:grid-cols-2 md:gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl p-8 transition-colors duration-300 hover:bg-[var(--light-blue)]"
                  style={{ backgroundColor: "var(--light-blue)" }}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3
                    className="font-the-seasons font-light text-[var(--dark-teal)]"
                    style={{ fontSize: 20, lineHeight: "28px" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="font-manrope mt-4 font-light text-[var(--dark-light-teal)]"
                    style={{ fontSize: 14.4, lineHeight: "24px" }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 pb-[80px] md:px-[72px]">
          <div className="opacity-0">
            <h2
              className="font-the-seasons mb-12 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              See Our Work
            </h2>

            <div
              ref={carouselRef}
              className="hide-scrollbar flex gap-6 overflow-x-auto pb-4"
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="group relative shrink-0 overflow-hidden rounded-2xl"
                  style={{ width: 400, height: 300 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="400px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ backgroundColor: "var(--dark-navy)" }}
      >
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={ctaRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-4 font-light text-white"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              The Impact of Virtual Tours
            </h2>

            <div
              className="mt-12 rounded-2xl p-8 md:p-12"
              style={{ backgroundColor: "rgba(100,137,146,0.2)" }}
            >
              <p
                className="font-the-seasons font-light text-white"
                style={{
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  lineHeight: "clamp(28px, 3vw, 38px)",
                }}
              >
                &ldquo;Since adding virtual tours to our listings, we&apos;ve seen a 45% increase in qualified inquiries and a 30% reduction in wasted viewings.&rdquo;
              </p>
              <p className="font-manrope mt-6 text-[14px] font-light text-white/60">
                — Casablanca Property Agent
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={marqueeRef} className="opacity-0">
            <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
              <div>
                <h2
                  className="font-the-seasons font-light text-[var(--dark-teal)]"
                  style={{
                    fontSize: "clamp(28px, 3.5vw, 50.4px)",
                    lineHeight: "clamp(36px, 4vw, 65.52px)",
                  }}
                >
                  Bring Your Properties to Life
                </h2>
                <p
                  className="font-manrope mt-4 max-w-[500px] font-light text-[var(--dark-light-teal)]"
                  style={{ fontSize: 14.4, lineHeight: "24px" }}
                >
                  Let us create immersive virtual experiences that captivate buyers and accelerate your sales cycle.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-manrope text-[14px] font-medium text-white transition-all duration-300 hover:gap-5"
                style={{ backgroundColor: "var(--teal)" }}
              >
                Schedule a Tour
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full overflow-hidden py-10"
        style={{ backgroundColor: "var(--light-grey)" }}
      >
        <div className="opacity-0">
          <div
            className="flex items-center"
            style={{
              width: "max-content",
              animation: "scrollHorizontal 25s linear infinite",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="font-the-seasons shrink-0 px-8 text-[clamp(24px,3vw,40px)] font-light text-[var(--dark-teal)]"
                style={{ whiteSpace: "nowrap" }}
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
