"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Interior Photography",
    description:
      "High-resolution interior shots with professional lighting, staging guidance, and color-accurate post-production.",
    image: "/images/706483388_17913740655393261_8362131622452443406_n.jpg",
  },
  {
    title: "Exterior & Facade",
    description:
      "Golden hour and daylight exterior photography that showcases curb appeal, landscaping, and architectural details.",
    image: "/images/711329678_17914469814393261_5632974814547833169_n.jpg",
  },
  {
    title: "Lifestyle & Details",
    description:
      "Close-up and lifestyle shots that capture the feeling of a property — from textures to twilight ambience.",
    image: "/images/720675578_17916356172393261_7436296106074224862_n.jpg",
  },
  {
    title: "Full Property Packages",
    description:
      "Complete visual packages combining interior, exterior, and detail shots — ready for MLS, portals, and social media.",
    image: "/images/724484901_17917284822393261_3224487934737261169_n.jpg",
  },
];

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your brand, target buyer, and property highlights to plan the perfect shoot.",
  },
  {
    number: "02",
    title: "The Shoot",
    description:
      "Our photographers arrive equipped with professional gear, lighting, and creative direction.",
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "Receive edited, color-corrected images within 48 hours — optimized for every platform.",
  },
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

export default function PhotographyAndVideographyPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useScrollAnimation(0.15);
  const featuresRef = useScrollAnimation(0.1);
  const processRef = useScrollAnimation(0.1);
  const ctaRef = useScrollAnimation(0.15);

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
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/722562578_17917290660393261_2104221187982964139_n.jpg)",
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
            Photography & Videography
          </h1>
          <p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
          >
            Professional visual content that makes properties stand out in a
            crowded market. From interior shoots to cinematic walkthroughs, we
            capture every angle that matters.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-16 px-6 py-[100px] md:flex-row md:items-center md:gap-16 md:px-[72px]">
          <div ref={section1Ref} className="flex-1 opacity-0">
            <h2
              className="font-the-seasons font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
                marginBottom: 32,
              }}
            >
              Visual Content That Sells Properties
            </h2>
            <p
              className="font-manrope font-light text-[var(--dark-light-teal)]"
              style={{
                fontSize: 14.4,
                lineHeight: "24px",
              }}
            >
              High-quality photography and videography are the backbone of every
              successful real estate listing. At ShootYourListing, we combine
              technical precision with creative vision to produce images and
              videos that stop the scroll, drive inquiries, and help properties
              sell faster.
            </p>
          </div>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-2xl" style={{ height: 400 }}>
              <Image
                src="/images/711329678_17914469814393261_5632974814547833169_n.jpg"
                alt="Real estate photography showcase"
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
          <div ref={featuresRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              What&apos;s Included
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl"
                  style={{ height: 320 }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h3 className="font-the-seasons text-xl font-light text-white">
                      {feature.title}
                    </h3>
                    <p className="font-manrope mt-3 text-[13px] font-light leading-[20px] text-white/80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full" style={{ backgroundColor: "var(--light-grey)" }}>
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={processRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              Our Process
            </h2>

            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col">
                  <span
                    className="font-the-seasons font-light text-[var(--dark-teal)]"
                    style={{ fontSize: 48, lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-the-seasons mt-4 font-light text-[var(--dark-teal)]"
                    style={{ fontSize: 20, lineHeight: "28px" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-manrope mt-4 font-light text-[var(--dark-light-teal)]"
                    style={{ fontSize: 14.4, lineHeight: "24px" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={ctaRef} className="flex flex-col items-center text-center opacity-0">
            <h2
              className="font-the-seasons font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
                marginBottom: 40,
              }}
            >
              Ready to Elevate Your Listings?
            </h2>
            <a
              href="/contact-us"
              className="inline-block rounded-full px-10 py-4 font-manrope text-sm font-medium transition-colors duration-300 hover:opacity-90"
              style={{
                backgroundColor: "var(--dark-teal)",
                color: "var(--light-grey)",
              }}
            >
              Book a Shoot
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
