"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const formFields = [
  {
    label: "Property Type",
    options: "Apartment, Villa, Commercial, Development",
  },
  {
    label: "Number of Properties",
    options: "1, 2-5, 6-20, 20+",
  },
  {
    label: "Services Needed",
    options: "Photography, Videography, Drone, Virtual Tours, All of the above",
  },
  {
    label: "Timeline",
    options: "ASAP, This week, This month, Flexible",
  },
];

const inclusions = [
  "Dedicated project manager",
  "Creative brief & shot list",
  "Brand-consistent editing",
  "Multi-platform delivery",
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

export default function CustomPricingPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useScrollAnimation(0.15);
  const section2Ref = useScrollAnimation(0.1);
  const section3Ref = useScrollAnimation(0.1);

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
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/713143876_17914923222393261_4703759715342749711_n.jpg)",
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
            Custom Quote
          </h1>
          <p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
          >
            Let us build the perfect package for your property marketing needs.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-16 px-6 py-[100px] md:flex-row md:items-center md:gap-24 md:px-[72px]">
          <div ref={section1Ref} className="flex-1 opacity-0">
            <h2
              className="font-the-seasons font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
                marginBottom: 32,
              }}
            >
              Tailored to Your Needs
            </h2>
            <p
              className="font-manrope font-light text-[var(--dark-light-teal)]"
              style={{
                fontSize: 14.4,
                lineHeight: "24px",
              }}
            >
              Every project is unique. Whether you&apos;re marketing a single
              luxury villa or an entire development, we&apos;ll craft a bespoke
              package that matches your vision, timeline, and budget.
            </p>
          </div>

          <div className="flex-1">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ height: 400 }}
            >
              <Image
                src="/images/713143876_17914923222393261_4703759715342749711_n.jpg"
                alt="Custom Quote"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ backgroundColor: "var(--dark-navy)" }}
      >
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={section2Ref} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-white"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              Tell Us About Your Project
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {formFields.map((field) => (
                <div key={field.label} className="flex flex-col">
                  <label className="font-manrope mb-2 text-[12px] font-normal uppercase tracking-[1px] text-white/60">
                    {field.label}
                  </label>
                  <div
                    className="rounded-xl px-6 py-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  >
                    <p className="font-manrope font-light text-white/40">
                      {field.options}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact-us"
                className="inline-block rounded-full px-10 py-4 font-manrope text-[13px] font-medium uppercase tracking-[1.5px] text-white transition-opacity hover:opacity-80"
                style={{ backgroundColor: "var(--teal)" }}
              >
                Submit Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={section3Ref} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              What Every Custom Package Includes
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {inclusions.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "var(--teal)" }}
                  >
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L4.5 8.5L11 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="font-manrope font-light text-[var(--dark-teal)]"
                    style={{ fontSize: 16, lineHeight: "28px" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
