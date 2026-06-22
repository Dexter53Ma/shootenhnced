"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const offerings = [
  {
    title: "Aerial Photography",
    description:
      "High-altitude and low-level aerial stills that capture properties in their geographic context.",
    image: "/images/721463161_17916508992393261_2613060612724587922_n.jpg",
  },
  {
    title: "Cinematic Video",
    description:
      "Smooth, cinematic drone video flythroughs perfect for social media and marketing campaigns.",
    image: "/images/719490942_17915921343393261_8167824527571734183_n.jpg",
  },
  {
    title: "Location Mapping",
    description:
      "Overhead shots showing proximity to beaches, highways, malls, and landmarks.",
    image: "/images/723085066_17917396026393261_2746549352432591255_n.jpg",
  },
  {
    title: "Progress Tracking",
    description:
      "Scheduled aerial shoots to document construction progress for developments.",
    image: "/images/703564895_17913191769393261_7331560962352217871_n.jpg",
  },
];

const stats = [
  { value: "300%", label: "More Engagement" },
  { value: "40%", label: "Faster Sales" },
  { value: "100%", label: "ROI Increase" },
];

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

export default function DroneFootagePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useScrollAnimation(0.15);
  const offeringsRef = useScrollAnimation(0.1);
  const statsRef = useScrollAnimation(0.1);
  const ctaRef = useScrollAnimation(0.1);

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
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/720751353_17916439026393261_8552304128591804906_n.jpg)",
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
            Drone &amp; Aerial Footage
          </h1>
          <p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
          >
            Elevate your property listings with cinematic drone photography and
            videography that captures the full scope and context of every
            property.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-16 px-6 py-[100px] md:flex-row md:items-start md:gap-16 md:px-[72px]">
          <div ref={introRef} className="flex-1 opacity-0">
            <h2
              className="font-the-seasons font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
                marginBottom: 32,
              }}
            >
              Aerial Perspectives That Command Attention
            </h2>
            <p
              className="font-manrope font-light text-[var(--dark-teal)]"
              style={{
                fontSize: 14.4,
                lineHeight: "24px",
              }}
            >
              Drone photography and videography give properties a competitive
              edge that ground-level shots simply can&apos;t match. Showcase
              location, proximity to landmarks, and the full scale of
              developments with cinematic aerial content.
            </p>
          </div>

          <div className="flex-1">
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ height: 400 }}
            >
              <Image
                src="/images/721463161_17916508992393261_2613060612724587922_n.jpg"
                alt="Drone aerial photography"
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
          <div ref={offeringsRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              What We Offer
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {offerings.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl"
                  style={{ height: 340 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="font-the-seasons text-xl font-light text-white">
                      {item.title}
                    </h3>
                    <p className="font-manrope mt-2 text-[13px] font-light leading-[20px] text-white/80">
                      {item.description}
                    </p>
                  </div>
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
          <div ref={statsRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-4 font-light text-white"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              Why Drone Content Works
            </h2>
            <p
              className="font-manrope mb-16 max-w-[600px] font-light text-white/80"
              style={{ fontSize: 14.4, lineHeight: "24px" }}
            >
              Aerial content doesn&apos;t just look impressive — it delivers
              measurable results for agents and developers.
            </p>

            <div className="grid gap-12 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-the-seasons font-light text-white"
                    style={{ fontSize: "clamp(48px, 5vw, 72px)", lineHeight: 1 }}
                  >
                    {stat.value}
                  </span>
                  <p className="font-manrope mt-4 text-[14px] font-normal uppercase tracking-[1px] text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={ctaRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-6 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              See the Difference Aerial Makes
            </h2>
            <p
              className="font-manrope mb-10 max-w-[600px] font-light text-[var(--dark-light-teal)]"
              style={{ fontSize: 14.4, lineHeight: "24px" }}
            >
              Ready to elevate your property marketing? Get in touch and
              let&apos;s create content that stands out from every angle.
            </p>
            <Link
              href="/contact-us"
              className="font-manrope inline-block rounded-full px-10 py-4 text-[14px] font-medium text-white transition-opacity duration-300 hover:opacity-90"
              style={{ backgroundColor: "var(--teal)" }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
