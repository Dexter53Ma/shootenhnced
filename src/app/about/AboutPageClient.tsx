"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const principles = [
  {
    number: "01",
    title: "Quality Without Compromise",
    description:
      "Every image we deliver meets the highest standards of clarity, composition, and color. We obsess over details \u2014 from lighting to post-production \u2014 so your listings always look their absolute best.",
  },
  {
    number: "02",
    title: "Efficiency Meets Excellence",
    description:
      "We understand time is critical in real estate. Our streamlined shoot-to-delivery process ensures you receive polished content quickly, without sacrificing quality \u2014 keeping your listings competitive.",
  },
  {
    number: "03",
    title: "Creative Partnership",
    description:
      "We don\u2019t just shoot properties \u2014 we tell their story. By understanding your brand and target buyer, we create visuals that resonate emotionally and drive real results.",
  },
];

const developments = [
  {
    name: "The Beach House",
    description:
      "A haven where sophisticated beachfront living meets astute investment potential.",
    image: "/images/tbhImg.webp",
  },
  {
    name: "InterContinental Grenada - La Sagesse",
    description:
      "A luxury resort with views over La Sagesse Beach, set beside Six Senses La Sagesse.",
    image: "/images/intercontinentalDominicaImg.avif",
  },
  {
    name: "The La Sagesse Collection Residences",
    description:
      "Uncover a limited selection of 94 premier apartments, offering an elegant opportunity to experience life at the edge of your own private beach paradise.",
    image: "/images/laSagesseCollectionLogo.svg",
  },
  {
    name: "The Island Heights",
    description:
      "Premium residences with panoramic sea views, just moments away from pristine beaches and vibrant island living.",
    image: "/images/islandHeightsImg.webp",
  },
  {
    name: "The Beach Residences",
    description:
      "Offering 420 generously sized contemporary apartments designed for modern living and 11 charming townhouses exuding warmth and style.",
    image: "/images/tbrImg.webp",
  },
  {
    name: "The Beach Vista",
    description:
      "Featuring luxurious studio, 1-bedroom, and 2-bedroom apartments, perfectly positioned to face the iconic Wynn Al Marjan.",
    image: "/images/tbvImg.webp",
  },
  {
    name: "Costa Mare",
    description:
      "Costa Mare offers 1,023 exquisite residences across three signature buildings, blending luxury apartments, penthouses, and amenities.",
    image: "/images/costaMareImg.webp",
  },
];

const team = [
  {
    name: "Ahmed Al-Rashid",
    title: "Founder & Lead Photographer",
    region: "Casablanca, Morocco",
  },
  {
    name: "Sara Mitchell",
    title: "Creative Director",
    region: "Content Strategy",
  },
  {
    name: "Omar Khalil",
    title: "Drone & Aerial Lead",
    region: "Aerial Operations",
  },
];

const testimonials = [
  {
    quote:
      "ShootYourListing transformed how we present our properties online.",
    detail:
      "The quality of their photography and drone work is exceptional. Our listings get more views, more inquiries, and faster sales since we started working with them. They understand what makes a property compelling and deliver consistently.",
  },
  {
    quote:
      "Professional, creative, and always on schedule.",
    detail:
      "We\u2019ve worked with ShootYourListing on over 50 property shoots and the results speak for themselves. Their virtual tours and video walkthroughs have become a key part of our marketing strategy. Highly recommended for any agent serious about their brand.",
  },
];

const marqueeText =
  "real estate photography \u00b7 drone footage \u00b7 virtual tours \u00b7 video walkthroughs \u00b7 property marketing \u00b7 luxury listings \u00b7 shoot your listing";

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

function useCountUp(end: number, duration = 2000): [React.RefObject<HTMLDivElement | null>, number] {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return [ref, count];
}

export default function AboutPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsContentRef = useScrollAnimation(0.15);
  const principlesRef = useScrollAnimation(0.1);
  const developmentsRef = useScrollAnimation(0.1);
  const leadershipRef = useScrollAnimation(0.1);
  const testimonialsRef = useScrollAnimation(0.1);
  const marqueeRef = useScrollAnimation(0.1);

  const [stat25Ref, stat25Count] = useCountUp(25);
  const [stat14Ref, stat14Count] = useCountUp(14);
  const [stat100Ref, stat100Count] = useCountUp(100);

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

      {/* 1. Hero Section */}
      <section
        className="relative flex w-full items-end overflow-hidden"
        style={{ minHeight: 500, height: "100vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/720675578_17916356172393261_7436296106074224862_n.jpg)",
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
            Capturing Properties in Their Best Light
          </h1>
          <p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
          >
            ShootYourListing is a team of passionate photographers, videographers, and drone pilots dedicated to making properties shine. We combine technical expertise with creative vision to deliver visual content that helps agents, developers, and brands stand out.
          </p>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-16 px-6 py-[100px] md:flex-row md:items-start md:gap-16 md:px-[72px]">
          <div ref={statsContentRef} className="flex-1 opacity-0">
            <h2
              className="font-the-seasons font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
                marginBottom: 32,
              }}
            >
               Numbers That Speak for Themselves
            </h2>

            <div className="flex gap-12 md:gap-16">
              <div ref={stat25Ref}>
                <span
                  className="font-the-seasons font-light text-[var(--dark-teal)]"
                  style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
                >
                  {stat25Count}+
                </span>
                <p className="font-manrope mt-1 text-[12px] font-normal uppercase tracking-[1px] text-[var(--dark-light-teal)]">
                  Properties Shot
                </p>
              </div>
              <div ref={stat14Ref}>
                <span
                  className="font-the-seasons font-light text-[var(--dark-teal)]"
                  style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
                >
                  {stat14Count}+
                </span>
                <p className="font-manrope mt-1 text-[12px] font-normal uppercase tracking-[1px] text-[var(--dark-light-teal)]">
                  Years Experience
                </p>
              </div>
              <div ref={stat100Ref}>
                <span
                  className="font-the-seasons font-light text-[var(--dark-teal)]"
                  style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
                >
                  {stat100Count}%
                </span>
                <p className="font-manrope mt-1 text-[12px] font-normal uppercase tracking-[1px] text-[var(--dark-light-teal)]">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <p
              className="font-manrope font-light text-[var(--dark-teal)]"
              style={{
                fontSize: 14.4,
                lineHeight: "24px",
              }}
            >
              ShootYourListing is Morocco&apos;s leading real estate visual content agency. We specialize in high-end property photography, cinematic drone footage, immersive virtual tours, and video walkthroughs. Our work helps properties sell faster and at higher prices by showcasing them in the most compelling way possible. From luxury riads to entire developments, we deliver consistent, brand-ready content across every project.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Principles Section */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 pb-[100px] md:px-[72px]">
          <div ref={principlesRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
               What Drives Every Shot
            </h2>

            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {principles.map((principle) => (
                <div key={principle.number}>
                  <span
                    className="font-the-seasons font-light text-[var(--teal)]"
                    style={{ fontSize: 48, lineHeight: 1 }}
                  >
                    {principle.number}
                  </span>
                  <h3
                    className="font-the-seasons mt-4 font-light text-[var(--dark-teal)]"
                    style={{ fontSize: 20, lineHeight: "28px" }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    className="font-manrope mt-4 font-light text-[var(--dark-light-teal)]"
                    style={{ fontSize: 14.4, lineHeight: "24px" }}
                  >
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latest Developments Section */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 pb-[80px] md:px-[72px]">
          <div ref={developmentsRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-4 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
               Recent Projects
            </h2>
            <p
              className="font-manrope mb-12 max-w-[600px] font-light text-[var(--dark-light-teal)]"
              style={{ fontSize: 14.4, lineHeight: "24px" }}
            >
              Take a look at some of our recent shoots — from luxury apartments to commercial developments, each project tailored to the client&apos;s unique vision.
            </p>

            <div
              ref={carouselRef}
              className="hide-scrollbar flex gap-6 overflow-x-auto pb-4"
              style={{ cursor: isDragging ? "grabbing" : "grab" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {developments.map((dev) => (
                <div
                  key={dev.name}
                  className="group relative shrink-0 overflow-hidden rounded-2xl"
                  style={{ width: 340, height: 420 }}
                >
                  <Image
                    src={dev.image}
                    alt={dev.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="340px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 50%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h3 className="font-the-seasons text-lg font-light text-white">
                      {dev.name}
                    </h3>
                    <p className="font-manrope mt-2 text-[13px] font-light leading-[20px] text-white/80">
                      {dev.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership Section */}
      <section
        className="w-full"
        style={{ backgroundColor: "var(--dark-navy)" }}
      >
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={leadershipRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-4 font-light text-white"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
               Meet the Team
            </h2>
            <p
              className="font-manrope mb-16 max-w-[600px] font-light text-white/80"
              style={{ fontSize: 14.4, lineHeight: "24px" }}
            >
              Our team brings together photographers, drone pilots, editors, and creative directors who share a passion for visual storytelling in real estate.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col">
                  <div
                    className="mb-4 flex items-center justify-center rounded-xl"
                    style={{
                      height: 380,
                      background:
                        "linear-gradient(135deg, rgba(100,137,146,0.3), rgba(100,137,146,0.1))",
                    }}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
                      <span className="font-the-seasons text-3xl font-light text-white/60">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-the-seasons font-light text-white">
                    {member.name}
                  </h3>
                  <p className="font-manrope mt-1 text-[13px] font-light text-white/70">
                    {member.title}
                  </p>
                  <p className="font-manrope mt-1 text-[12px] font-normal uppercase tracking-[1px] text-[var(--teal)]">
                    {member.region}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={testimonialsRef} className="opacity-0">
            <div className="grid gap-12 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-8"
                  style={{ backgroundColor: "var(--light-blue)" }}
                >
                  <p
                    className="font-the-seasons font-light text-[var(--dark-teal)]"
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      lineHeight: "clamp(28px, 3vw, 38px)",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p
                    className="font-manrope mt-6 font-light text-[var(--dark-light-teal)]"
                    style={{ fontSize: 14.4, lineHeight: "24px" }}
                  >
                    {t.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Marquee */}
      <section
        className="w-full overflow-hidden py-10"
        style={{ backgroundColor: "var(--light-grey)" }}
      >
        <div ref={marqueeRef} className="opacity-0">
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
