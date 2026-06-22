"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Saadiyat Island Resort",
    description:
      "A comprehensive photography package capturing this cultural hub — from pristine beaches to world-class art galleries and luxury accommodations.",
    link: "/portfolio",
    image: "/images/720675578_17916356172393261_7436296106074224862_n.jpg",
    tag: "Photography",
  },
  {
    title: "Al Maryah Island Commercial",
    description:
      "Corporate and commercial photography for Casablanca's premier business district, showcasing modern architecture and premium office spaces.",
    link: "/portfolio",
    image: "/images/724484901_17917284822393261_3224487934737261169_n.jpg",
    tag: "Commercial",
  },
  {
    title: "Yas Island Properties",
    description:
      "Full-service visual content creation for entertainment district properties — photography, drone, and twilight shoots.",
    link: "/portfolio",
    image: "/images/719490942_17915921343393261_8167824527571734183_n.jpg",
    tag: "Full Package",
  },
  {
    title: "Reem Island Villas",
    description:
      "Luxury villa photography with emphasis on interior design, landscaping, and waterfront living spaces.",
    link: "/portfolio",
    image: "/images/723085066_17917396026393261_2746549352432591255_n.jpg",
    tag: "Photography",
  },
  {
    title: "Al Raha Beach Homes",
    description:
      "Lifestyle-focused property photography capturing family-friendly luxury living along the waterfront.",
    link: "/portfolio",
    image: "/images/703691869_17913191682393261_5123223341527474306_n.jpg",
    tag: "Drone",
  },
  {
    title: "Corniche Waterfront",
    description:
      "Panoramic drone and ground-level photography for premium waterfront apartments and penthouses.",
    link: "/portfolio",
    image: "/images/703564895_17913191769393261_7331560962352217871_n.jpg",
    tag: "Drone",
  },
];

export default function CaribbeanSection() {
  return (
    <section className="w-full bg-[#f5f4f2]">
      {/* Header */}
      <div className="mx-auto max-w-[1296px] px-6 pt-[100px] pb-[60px] md:px-[72px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="font-manrope text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--dark-light-teal)]">
            Services We Deliver
          </span>
          <div className="mt-3 mb-5 h-[1px] w-10 bg-[var(--dark-teal)]/20" />
          <h2
            className="font-the-seasons font-light text-[var(--dark-teal)]"
            style={{
              fontSize: "clamp(28px, 4vw, 50.4px)",
              lineHeight: "clamp(36px, 4.5vw, 60px)",
            }}
          >
            Real Estate Visual Solutions
          </h2>
          <p className="font-manrope mt-5 max-w-[520px] text-[14.4px] font-light leading-[24px] text-[var(--dark-light-teal)]">
            From luxury villas to commercial towers, we deliver end-to-end
            visual content that helps properties sell faster.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto max-w-[1296px] px-6 pb-[100px] md:px-[72px]">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:row-span-2" : ""
              }`}
              style={{
                height:
                  index === 0
                    ? "clamp(400px, 50vw, 640px)"
                    : "clamp(280px, 25vw, 320px)",
              }}
            >
              <Link href={service.link} className="block h-full w-full">
                {/* Image */}
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(5,18,25,0.85) 0%, rgba(5,18,25,0.4) 40%, rgba(0,0,0,0) 70%)",
                  }}
                />

                {/* Tag */}
                <div className="absolute top-5 right-5">
                  <span className="font-manrope rounded-full bg-white/15 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.08em] text-white backdrop-blur-md">
                    {service.tag}
                  </span>
                </div>

                {/* Number */}
                <div className="absolute top-5 left-5">
                  <span className="font-manrope text-[12px] font-light tracking-[0.1em] text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                  <h3
                    className="font-the-seasons font-light text-white"
                    style={{
                      fontSize:
                        index === 0
                          ? "clamp(22px, 3vw, 32px)"
                          : "clamp(18px, 2.5vw, 24px)",
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="font-manrope mt-3 max-w-[420px] text-[13px] font-light leading-[20px] text-white/70">
                    {service.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[var(--dark-teal)]">
                    View Project
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M5.25 3.5L8.75 7L5.25 10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--dark-teal)]/20 bg-[var(--dark-teal)] px-8 py-3.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-[var(--dark-teal)]/90"
          >
            View All Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5.25 3.5L8.75 7L5.25 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
