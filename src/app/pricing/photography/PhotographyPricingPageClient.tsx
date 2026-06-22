"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Appartement",
    subtitle: "Best for: apartments & studio spaces",
    price: "1,000",
    currency: "MAD",
    features: [
      "20 high-resolution photos",
      "Interior shots of all rooms",
      "Natural lighting",
      "Basic photo editing",
      "24-hour delivery",
      "Online gallery access",
      "Commercial usage rights",
      "Social media ready formats",
    ],
    button: "Get Started",
    highlighted: false,
    icon: "🏢",
    color: "#0a6c74",
  },
  {
    name: "Riads",
    subtitle: "Best for: traditional Moroccan riads",
    price: "1,500",
    currency: "MAD",
    features: [
      "30 high-resolution photos",
      "Traditional architecture focus",
      "Courtyard & interior shots",
      "Decorative detail shots",
      "Golden hour lighting session",
      "Advanced photo editing",
      "12-hour express delivery",
      "Online gallery & download links",
      "Commercial usage rights",
    ],
    button: "Choose Plan",
    highlighted: true,
    icon: "🏡",
    badge: "Most Popular",
    color: "#c8963e",
  },
  {
    name: "Villa",
    subtitle: "Best for: luxury villas",
    price: "2,000",
    currency: "MAD",
    features: [
      "40 high-resolution photos",
      "Professional video tour (3–5 min)",
      "Interior, exterior & garden shots",
      "Pool & outdoor coverage",
      "Drone shots (weather permitting)",
      "Premium editing & color grading",
      "Same-day delivery available",
      "Multiple format delivery",
      "Virtual staging consultation",
      "Commercial usage rights",
      "3 months free storage",
    ],
    button: "Choose Plan",
    highlighted: false,
    icon: "🏠",
    color: "#0a6c74",
  },
  {
    name: "Events",
    subtitle: "Best for: events & celebrations",
    price: "3,000 – 5,000",
    currency: "MAD",
    features: [
      "Full event coverage (4–8 hours)",
      "Multiple photographers available",
      "Candid & posed photography",
      "Venue & decoration shots",
      "Guest interaction coverage",
      "Professional video highlights",
      "Drone footage for outdoor events",
      "Same-day preview delivery",
      "Full edited gallery within 48h",
      "USB with all photos",
      "Commercial usage rights",
      "6 months free storage",
    ],
    button: "Contact Us",
    highlighted: false,
    icon: "🎉",
    color: "#0a6c74",
  },
];

const addons = [
  { name: "Additional photos (per 10)", price: "300 MAD" },
  { name: "Extra video content (per minute)", price: "400 MAD" },
  { name: "Same-day rush delivery", price: "500 MAD" },
  { name: "Virtual staging (per room)", price: "200 MAD" },
  { name: "360° virtual tour", price: "1,200 MAD" },
  { name: "Social media content package", price: "600 MAD" },
];

const faqs = [
  {
    question: "How quickly can I book a shoot?",
    answer:
      "We typically schedule shoots within 2-3 business days. For urgent requests, our Professional and Premium plans include priority scheduling. Contact us and we'll find the earliest available slot that works with your timeline.",
  },
  {
    question: "Do you provide staging advice?",
    answer:
      "Yes. Our Villa plan includes full creative direction and staging consultation. For Appartement and Riad plans, we provide a complimentary pre-shoot checklist with staging tips to ensure your property looks its best before we arrive.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover all of Morocco, including Casablanca, Marrakech, Tangier, Rabat, and Agadir. For projects in other cities or international locations, please contact us for a custom quote.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
  hover: {
    y: -12,
    scale: 1.02,
    boxShadow: "0 20px 60px rgba(10,108,116,0.15)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.03, duration: 0.3 },
  }),
};

const addonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 30px rgba(10,108,116,0.12)",
    transition: { duration: 0.2 },
  },
};

export default function PhotographyPricingPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"plans" | "addons">("plans");

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

  const pricingOffersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ShootYourListing Photography Packages",
    itemListElement: plans.map((plan, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${plan.name} Photography Package`,
        description: plan.features.join(", "),
        brand: { "@type": "Brand", name: "ShootYourListing" },
        offers: {
          "@type": "Offer",
          price: plan.price.replace(/[^0-9]/g, ""),
          priceCurrency: "MAD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.shootyourlisting.com" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.shootyourlisting.com/pricing/photography" },
      { "@type": "ListItem", position: 3, name: "Photography", item: "https://www.shootyourlisting.com/pricing/photography" },
    ],
  };

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingOffersSchema) }}
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
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/709844383_17914470924393261_6940116219085748849_n.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          ref={heroRef}
          className="relative z-10 w-full max-w-[1296px] px-6 pb-[120px] opacity-0 md:px-[72px]"
        >
          <motion.h1
            className="font-the-seasons font-light text-[var(--light-grey)]"
            style={{
              fontSize: "clamp(36px, 5vw, 64.8px)",
              lineHeight: "clamp(44px, 5.4vw, 77.76px)",
              maxWidth: 800,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Photography Packages
          </motion.h1>
          <motion.p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional real estate photography tailored to showcase your
            properties at their absolute best.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-[1296px] flex-col gap-16 px-6 py-[100px] md:flex-row md:items-center md:gap-16 md:px-[72px]">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-the-seasons font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
                marginBottom: 32,
              }}
            >
              Simple, Transparent Pricing
            </h2>
            <p
              className="font-manrope font-light text-[var(--dark-light-teal)]"
              style={{
                fontSize: 14.4,
                lineHeight: "24px",
              }}
            >
              No hidden fees. No surprises. Choose the package that fits your
              listing and scale as your portfolio grows.
            </p>
          </motion.div>

          <div className="flex flex-1 gap-4">
            <motion.div
              className="relative h-[280px] w-full overflow-hidden rounded-2xl md:h-[340px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Image
                src="/images/722296424_17916515901393261_2147057843375880472_n.jpg"
                alt="Photography sample"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              className="relative h-[280px] w-full overflow-hidden rounded-2xl md:h-[340px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Image
                src="/images/724045427_17917395714393261_3276041089295120952_n.jpg"
                alt="Photography sample"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Toggle */}
      <section className="w-full" style={{ backgroundColor: "var(--light-blue)" }}>
        <div className="mx-auto w-full max-w-[1296px] px-6 pt-[80px] md:px-[72px]">
          <motion.div
            className="mx-auto flex w-fit overflow-hidden rounded-full border"
            style={{ borderColor: "var(--dark-teal)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setActiveTab("plans")}
              className="px-8 py-3 font-manrope text-[13px] font-semibold uppercase tracking-[1px] transition-all duration-300"
              style={{
                backgroundColor:
                  activeTab === "plans" ? "var(--dark-teal)" : "transparent",
                color:
                  activeTab === "plans"
                    ? "white"
                    : "var(--dark-teal)",
              }}
            >
              Pricing Plans
            </button>
            <button
              onClick={() => setActiveTab("addons")}
              className="px-8 py-3 font-manrope text-[13px] font-semibold uppercase tracking-[1px] transition-all duration-300"
              style={{
                backgroundColor:
                  activeTab === "addons" ? "var(--dark-teal)" : "transparent",
                color:
                  activeTab === "addons"
                    ? "white"
                    : "var(--dark-teal)",
              }}
            >
              Add-on Services
            </button>
          </motion.div>
        </div>

        {/* Plans Grid */}
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[60px] md:px-[72px]">
          <AnimatePresence mode="wait">
            {activeTab === "plans" ? (
              <motion.div
                key="plans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              >
                {plans.map((plan, i) => (
                  <motion.div
                    key={plan.name}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover="hover"
                    className="relative flex flex-col rounded-2xl border bg-white p-6"
                    style={{
                      borderColor: plan.highlighted
                        ? "var(--teal)"
                        : "rgba(0,0,0,0.08)",
                      boxShadow: plan.highlighted
                        ? "0 8px 32px rgba(10,108,116,0.1)"
                        : "0 2px 12px rgba(0,0,0,0.04)",
                    }}
                  >
                    {plan.badge && (
                      <motion.span
                        className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--teal)] px-4 py-1 font-manrope text-[11px] font-semibold uppercase tracking-[1px] text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                      >
                        {plan.badge}
                      </motion.span>
                    )}

                    {/* Icon & Name */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-3xl">{plan.icon}</span>
                      <div>
                        <h3 className="font-the-seasons font-light text-[var(--dark-teal)]" style={{ fontSize: 20 }}>
                          {plan.name}
                        </h3>
                        <p className="font-manrope text-[11px] font-light text-[var(--dark-light-teal)]">
                          {plan.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span
                          className="font-the-seasons font-light text-[var(--dark-teal)]"
                          style={{
                            fontSize: "clamp(28px, 2.5vw, 36px)",
                            lineHeight: 1,
                          }}
                        >
                          {plan.price}
                        </span>
                        <span className="font-manrope text-[12px] font-normal text-[var(--dark-light-teal)]">
                          {plan.currency}
                        </span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className="mb-6 w-full"
                      style={{
                        height: 1,
                        background: plan.highlighted
                          ? "linear-gradient(90deg, transparent, var(--teal), transparent)"
                          : "var(--light-grey)",
                      }}
                    />

                    {/* Features */}
                    <ul className="flex flex-1 flex-col gap-3">
                      {plan.features.map((feature, fi) => (
                        <motion.li
                          key={feature}
                          custom={fi}
                          variants={featureVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="flex items-start gap-2.5 font-manrope text-[13px] font-light text-[var(--dark-teal)]"
                        >
                          <svg
                            className="mt-0.5 shrink-0"
                            width="14"
                            height="14"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M3 8.5L6.5 12L13 4"
                              stroke="var(--teal)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/contact-us"
                      className="mt-8 flex items-center justify-center rounded-xl py-3 font-manrope text-[12px] font-semibold uppercase tracking-[1px] transition-all duration-300 hover:opacity-90"
                      style={{
                        backgroundColor: plan.highlighted
                          ? "var(--teal)"
                          : "transparent",
                        color: plan.highlighted
                          ? "white"
                          : "var(--dark-teal)",
                        border: plan.highlighted
                          ? "none"
                          : "1.5px solid var(--dark-teal)",
                      }}
                    >
                      {plan.button}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="addons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {addons.map((addon, i) => (
                    <motion.div
                      key={addon.name}
                      custom={i}
                      variants={addonVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover="hover"
                      className="flex items-center justify-between rounded-xl border bg-white p-5"
                      style={{
                        borderColor: "rgba(0,0,0,0.06)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-full"
                          style={{ backgroundColor: "var(--light-blue)" }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8 3V13M3 8H13"
                              stroke="var(--teal)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <span className="font-manrope text-[13px] font-medium text-[var(--dark-teal)]">
                          {addon.name}
                        </span>
                      </div>
                      <span className="font-manrope text-[14px] font-semibold text-[var(--teal)]">
                        {addon.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <motion.h2
            className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
            style={{
              fontSize: "clamp(28px, 3.5vw, 50.4px)",
              lineHeight: "clamp(36px, 4vw, 65.52px)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.01 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
