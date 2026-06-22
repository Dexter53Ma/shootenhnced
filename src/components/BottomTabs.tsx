"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "photography",
    label: "Photography",
    subtitle: "Professional Property Photography",
    heading: "Stunning Photography That Sells Properties",
    description:
      "High-quality interior and exterior photography is the cornerstone of every successful listing. We capture properties in their best light — from golden hour exteriors to carefully styled interiors — creating images that stop the scroll and drive inquiries.",
    image: "/images/luxuryVillasImg.webp",
  },
  {
    id: "drone",
    label: "Drone & Aerial",
    subtitle: "Aerial Visual Content",
    heading: "Aerial Perspectives That Command Attention",
    description:
      "Drone photography and videography give properties a competitive edge. Showcase location, proximity to landmarks, and the full scale of developments with cinematic aerial content that traditional photography simply can't match.",
    image: "/images/islandHeightsImg.webp",
  },
  {
    id: "virtual-tours",
    label: "Virtual Tours",
    subtitle: "Immersive Property Experiences",
    heading: "Immersive Experiences That Sell",
    description:
      "Our 360° virtual tours and 3D Matterport scans let buyers explore properties from anywhere in the world. Increase engagement, reduce wasted viewings, and help serious buyers make faster decisions.",
    image: "/images/costaMareImg.webp",
  },
] as const;

export default function BottomTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="flex w-full flex-col bg-[var(--light-blue)] px-5 py-16 md:px-[72px] lg:px-[96px] xl:px-[120px] md:py-24"
      style={{ minHeight: 500 }}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 h-[3px] bg-[var(--dark-teal)] md:mb-10"
      />

      <div className="relative mb-8 flex gap-3 flex-wrap md:mb-10">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
            onClick={() => setActiveTab(index)}
            className="font-the-seasons relative h-12 border border-[var(--dark-teal)] px-8 text-[14.4px] transition-all duration-300"
            style={{
              fontWeight: 400,
              color: activeTab === index ? "#ffffff" : "#222a2c",
              backgroundColor:
                activeTab === index ? "#222a2c" : "transparent",
              borderRadius: 1440,
              cursor: "pointer",
              boxShadow:
                activeTab === index
                  ? "0 4px 20px rgba(34,42,44,0.18)"
                  : "none",
            }}
          >
            {tab.label}
            {activeTab === index && (
              <motion.span
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-4 h-[2px] w-[calc(100%-32px)] bg-white"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="relative min-h-[280px]">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab, index) =>
              activeTab === index && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
                    <div className="flex max-w-[700px] flex-col">
                      <p className="mb-5 font-manrope text-[14px] font-normal uppercase tracking-[2px] text-[var(--dark-light-teal)]">
                        {tab.subtitle}
                      </p>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 0.2, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-the-seasons mb-2 leading-none text-[var(--dark-teal)]"
                        style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
                      >
                        &ldquo;
                      </motion.span>
                      <h2
                        className="font-the-seasons mb-6 font-light text-[var(--dark-teal)]"
                        style={{
                          fontSize: "clamp(24px, 4vw, 36px)",
                          lineHeight: 1.2,
                        }}
                      >
                        {tab.heading}
                      </h2>
                      <p
                        className="font-manrope mb-8 font-light text-[#5a6b6e]"
                        style={{
                          fontSize: "14.4px",
                          lineHeight: "21.6px",
                          maxWidth: 560,
                        }}
                      >
                        {tab.description}
                      </p>
                      <a
                        href={
                          tab.id === "photography"
                            ? "/services/photography-and-videography"
                            : tab.id === "drone"
                              ? "/services/drone-footage"
                              : "/services/virtual-tours"
                        }
                        className="font-manrope inline-flex w-fit items-center gap-3 rounded-full border border-[var(--dark-teal)] bg-[var(--dark-teal)] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[1.5px] text-white transition-all duration-300 hover:bg-transparent hover:text-[var(--dark-teal)]"
                      >
                        Learn More
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                    <div className="relative hidden md:block">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="overflow-hidden rounded-2xl lg:w-[360px] lg:h-[260px]"
                        style={{
                          width: 360,
                          height: 260,
                          boxShadow:
                            "0 16px 48px rgba(34,42,44,0.10), 0 2px 12px rgba(34,42,44,0.06)",
                        }}
                      >
                        <Image
                          src={tab.image}
                          alt={tab.label}
                          width={360}
                          height={260}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </motion.div>
                      <div
                        className="absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl bg-[var(--dark-teal)] opacity-[0.06]"
                        style={{ zIndex: -1 }}
                      />
                      <div
                        className="absolute -top-3 -left-3 h-14 w-14 rounded-full border-2 border-[var(--dark-teal)] opacity-[0.08]"
                        style={{ zIndex: -1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
