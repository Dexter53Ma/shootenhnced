"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Aerial Stills",
    price: "MAD 1,200",
    features: [
      "15-20 edited aerial photos",
      "Altitude up to 120m",
      "Property + surroundings",
      "High-res deliverables",
      "48-hour delivery",
      "DGAC-compliant operations",
    ],
    button: "Get Started",
    highlighted: false,
  },
  {
    name: "Aerial + Video",
    price: "MAD 3,000",
    features: [
      "20 aerial photos + 1-min video",
      "Cinematic flyover sequence",
      "Location context shots",
      "Daylight + twilight options",
      "24-hour delivery",
      "Social media cuts included",
    ],
    button: "Choose Plan",
    highlighted: true,
  },
  {
    name: "Full Aerial Production",
    price: "MAD 5,500",
    features: [
      "Unlimited aerial photos",
      "3-5 minute cinematic video",
      "360° panoramic views",
      "Construction progress tracking",
      "Same-day rush available",
      "Multi-property discounts",
      "Custom flight paths",
    ],
    button: "Contact Us",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Are your drone pilots certified?",
    answer: "Yes. All our drone pilots hold valid DGAC (Moroccan Civil Aviation Authority) certifications. We handle all permits and flight approvals so you don't have to worry about regulatory compliance.",
  },
  {
    question: "How high can you fly the drone?",
    answer: "We fly up to 120 meters (400 feet) AGL, which is the maximum allowed under Moroccan regulations. This altitude provides excellent aerial perspectives while remaining fully compliant with aviation laws.",
  },
  {
    question: "Can you fly near airports or restricted zones?",
    answer: "We assess each location for airspace restrictions before the shoot. If your property is near a restricted zone, we coordinate with DGAC for special permits when possible. Some areas may have limitations we'll discuss upfront.",
  },
  {
    question: "What weather conditions affect drone shoots?",
    answer: "Drone operations are affected by high winds (above 35 km/h), heavy rain, fog, or sandstorms. We monitor weather closely and will reschedule at no extra cost if conditions aren't safe for flight.",
  },
];

const marqueeText =
  "drone photography \u00b7 aerial video \u00b7 cinematic footage \u00b7 property marketing \u00b7 Morocco compliant \u00b7 shoot your listing";

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

export default function DronePricingPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const section1Ref = useScrollAnimation(0.15);
  const cardsRef = useScrollAnimation(0.1);
  const complianceRef = useScrollAnimation(0.1);
  const marqueeRef = useScrollAnimation(0.1);
  const faqRef = useScrollAnimation(0.1);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shootyourlisting.com" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.shootyourlisting.com/pricing/drone" },
      { "@type": "ListItem", position: 3, name: "Drone", item: "https://www.shootyourlisting.com/pricing/drone" },
    ],
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/713023554_17914921353393261_4736652705655431245_n.jpg)",
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
            Drone Packages
          </h1>
          <p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
          >
            Elevate your property marketing with stunning aerial photography and
            cinematic drone video. Our licensed pilots capture perspectives that
            ground-level shots simply cannot match.
          </p>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-16 px-6 py-[100px] md:flex-row md:items-start md:gap-16 md:px-[72px]">
          <div ref={section1Ref} className="flex-1 opacity-0">
            <h2
              className="font-the-seasons font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
                marginBottom: 32,
              }}
            >
              See Properties From a New Angle
            </h2>
            <p
              className="font-manrope font-light text-[var(--dark-light-teal)]"
              style={{
                fontSize: 14.4,
                lineHeight: "24px",
              }}
            >
              Our licensed drone pilots capture stunning aerial perspectives
              that showcase properties, their surroundings, and proximity to key
              landmarks — all in full compliance with Moroccan aviation regulations.
            </p>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl" style={{ height: 320 }}>
                <Image
                  src="/images/723987950_17917253319393261_212804384762993207_n.jpg"
                  alt="Aerial property view"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: 320 }}>
                <Image
                  src="/images/724247210_17917395186393261_3098682853720674154_n.jpg"
                  alt="Drone aerial shot"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Cards Section */}
      <section
        className="w-full"
        style={{ backgroundColor: "var(--light-grey)" }}
      >
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={cardsRef} className="opacity-0">
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="relative flex flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: plan.highlighted
                      ? "var(--dark-navy)"
                      : "var(--white)",
                    border: plan.highlighted
                      ? "none"
                      : "1px solid var(--light-grey-2)",
                  }}
                >
                  {plan.highlighted && (
                    <div
                      className="absolute -top-3 left-8 rounded-full px-4 py-1"
                      style={{ backgroundColor: "var(--teal)" }}
                    >
                      <span className="font-manrope text-[11px] font-medium uppercase tracking-[1px] text-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3
                    className="font-the-seasons font-light"
                    style={{
                      fontSize: 24,
                      lineHeight: "32px",
                      color: plan.highlighted
                        ? "var(--light-grey)"
                        : "var(--dark-teal)",
                    }}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className="font-the-seasons mt-4 font-light"
                    style={{
                      fontSize: "clamp(32px, 3vw, 48px)",
                      lineHeight: 1.1,
                      color: plan.highlighted
                        ? "var(--light-grey)"
                        : "var(--dark-teal)",
                    }}
                  >
                    {plan.price}
                  </p>

                  <div className="mt-8 flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3"
                          style={{
                            color: plan.highlighted
                              ? "rgba(245,244,242,0.85)"
                              : "var(--dark-light-teal)",
                          }}
                        >
                          <svg
                            className="mt-0.5 shrink-0"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3 8L6.5 11.5L13 4.5"
                              stroke={
                                plan.highlighted ? "var(--teal)" : "var(--teal)"
                              }
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span
                            className="font-manrope font-light"
                            style={{ fontSize: 14, lineHeight: "22px" }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="mt-8 w-full rounded-xl py-3 font-manrope text-[13px] font-medium transition-all duration-300 hover:opacity-90"
                    style={{
                      backgroundColor: plan.highlighted
                        ? "var(--teal)"
                        : "var(--dark-navy)",
                      color: "var(--light-grey)",
                    }}
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    {plan.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Compliance Note */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[80px] md:px-[72px]">
          <div
            ref={complianceRef}
            className="flex items-start gap-6 rounded-2xl p-8 opacity-0 md:p-12"
            style={{ backgroundColor: "var(--light-blue)" }}
          >
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "var(--teal)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3
                className="font-the-seasons font-light text-[var(--dark-teal)]"
                style={{ fontSize: 20, lineHeight: "28px" }}
              >
                Fully Regulated & Compliant
              </h3>
              <p
                className="font-manrope mt-3 font-light text-[var(--dark-light-teal)]"
                style={{ fontSize: 14.4, lineHeight: "24px" }}
              >
                All drone operations comply with Moroccan aviation regulations (DGAC). We handle
                all permits and flight approvals so you don&apos;t have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Marquee */}
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

      {/* 6. FAQ Section */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <h2
            ref={faqRef}
            className="font-the-seasons mb-16 font-light text-[var(--dark-teal)] opacity-0"
            style={{
              fontSize: "clamp(28px, 3.5vw, 50.4px)",
              lineHeight: "clamp(36px, 4vw, 65.52px)",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: "var(--light-blue)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                }}
              >
                <h3
                  className="font-the-seasons font-light text-[var(--dark-teal)]"
                  style={{ fontSize: 20, lineHeight: "28px" }}
                >
                  {faq.question}
                </h3>
                <p
                  className="font-manrope mt-4 font-light text-[var(--dark-light-teal)]"
                  style={{ fontSize: 14.4, lineHeight: "24px" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
