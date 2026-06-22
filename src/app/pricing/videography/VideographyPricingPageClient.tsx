"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Standard Walkthrough",
    price: "MAD 2,500",
    features: [
      "2-3 minute edited video",
      "Smooth gimbal walkthrough",
      "Licensed music overlay",
      "Color graded & polished",
      "72-hour delivery",
      "MP4 + social formats",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    name: "Cinematic Property Film",
    price: "MAD 5,000",
    features: [
      "3-5 minute cinematic film",
      "Interior + exterior sequences",
      "Drone footage included",
      "Professional narration option",
      "48-hour delivery",
      "YouTube & social optimized",
      "Custom branding intro",
    ],
    buttonText: "Choose Plan",
    highlighted: true,
  },
  {
    name: "Full Production",
    price: "MAD 8,500",
    features: [
      "5-8 minute feature film",
      "Full creative direction",
      "Drone + ground coverage",
      "Professional voiceover",
      "24-hour rush available",
      "Multiple format delivery",
      "Revisions included",
    ],
    buttonText: "Contact Us",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "How long does it take to receive the final video?",
    answer: "Standard Walkthrough videos are delivered within 72 hours. Cinematic Property Films take 48 hours. Full Production projects are delivered within 5-7 business days. Rush delivery is available for an additional fee.",
  },
  {
    question: "Do you provide music for the video?",
    answer: "Yes. All packages include licensed music overlays. We select tracks that match your property's style and target audience. If you have specific music preferences, we can accommodate that too.",
  },
  {
    question: "Can you add narration or voiceover?",
    answer: "Professional narration is available as an add-on for Standard Walkthrough and included in Cinematic and Full Production packages. We work with native speakers in Arabic, French, and English.",
  },
  {
    question: "What formats do you deliver the video in?",
    answer: "We deliver in MP4 format optimized for web, social media (Instagram Reels, TikTok, YouTube), and broadcast. You'll receive multiple format versions ready for any platform.",
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

export default function VideographyPricingPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useScrollAnimation(0.15);
  const cardsRef = useScrollAnimation(0.1);
  const testimonialRef = useScrollAnimation(0.1);
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
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.shootyourlisting.com/pricing/videography" },
      { "@type": "ListItem", position: 3, name: "Videography", item: "https://www.shootyourlisting.com/pricing/videography" },
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

      {/* Hero Section */}
      <section
        className="relative flex w-full items-end overflow-hidden"
        style={{ minHeight: 500, height: "100vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/710537681_17914922214393261_8912327613566277981_n.jpg)",
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
            Videography Packages
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={contentRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-4 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              Video Content That Converts
            </h2>
            <p
              className="font-manrope max-w-[700px] font-light text-[var(--dark-light-teal)]"
              style={{ fontSize: 14.4, lineHeight: "24px" }}
            >
              Properties with video receive 403% more inquiries than those without. Our videography services produce cinematic content that showcases properties in motion — from smooth walkthroughs to dramatic aerial sequences.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 pb-[100px] md:px-[72px]">
          <div ref={cardsRef} className="opacity-0">
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col rounded-2xl p-8"
                  style={{
                    backgroundColor: plan.highlighted
                      ? "var(--dark-teal)"
                      : "var(--light-blue)",
                    border: plan.highlighted
                      ? "none"
                      : "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <h3
                    className="font-the-seasons font-light"
                    style={{
                      fontSize: 22,
                      lineHeight: "30px",
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
                      fontSize: "clamp(32px, 3.5vw, 44px)",
                      lineHeight: "clamp(40px, 4vw, 52px)",
                      color: plan.highlighted
                        ? "var(--light-grey)"
                        : "var(--dark-teal)",
                    }}
                  >
                    {plan.price}
                  </p>

                  <div className="mt-8 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{
                            backgroundColor: plan.highlighted
                              ? "var(--teal)"
                              : "var(--dark-teal)",
                          }}
                        />
                        <span
                          className="font-manrope font-light"
                          style={{
                            fontSize: 14,
                            lineHeight: "22px",
                            color: plan.highlighted
                              ? "rgba(245,244,242,0.85)"
                              : "var(--dark-light-teal)",
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="font-manrope mt-8 w-full cursor-pointer rounded-xl py-3 text-[14px] font-medium transition-colors duration-300"
                    style={{
                      backgroundColor: plan.highlighted
                        ? "var(--light-grey)"
                        : "var(--dark-teal)",
                      color: plan.highlighted
                        ? "var(--dark-teal)"
                        : "var(--light-grey)",
                    }}
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 pb-[100px] md:px-[72px]">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl" style={{ height: 480 }}>
              <Image
                src="/images/720776357_17916439680393261_5483504347130892500_n.jpg"
                alt="Videography showcase 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl" style={{ height: 480 }}>
              <Image
                src="/images/723110740_17916724977393261_3992475651805233790_n.jpg"
                alt="Videography showcase 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section
        className="w-full"
        style={{ backgroundColor: "var(--dark-navy)" }}
      >
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={testimonialRef} className="mx-auto max-w-[800px] text-center opacity-0">
            <p
              className="font-the-seasons font-light text-white"
              style={{
                fontSize: "clamp(20px, 2.5vw, 32px)",
                lineHeight: "clamp(30px, 3.5vw, 44px)",
              }}
            >
              &ldquo;The video ShootYourListing produced for our penthouse listing generated more inquiries in one week than three months of static photos.&rdquo;
            </p>
            <p className="font-manrope mt-8 text-[14px] font-light uppercase tracking-[1px] text-[var(--teal)]">
              Real Estate Developer, Casablanca
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
