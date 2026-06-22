"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const regions = [
  {
    title: "PHOTOGRAPHY",
    translations: ["PHOTOGRAPHIE", "FOTOGRAFÍA", "ФОТОГРАФИЯ"],
    description: "Professional real estate imagery that sells properties faster",
    href: "/services/photography-and-videography",
    image: "/images/720675578_17916356172393261_7436296106074224862_n.jpg",
  },
  {
    title: "DRONE & AERIAL",
    translations: ["DRONE", "DRON", "ДРОН"],
    description: "Breathtaking aerial views that showcase every angle",
    href: "/services/drone-footage",
    image: "/images/719490942_17915921343393261_8167824527571734183_n.jpg",
  },
] as const;

export default function RegionSelector() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="flex w-full flex-col md:flex-row">
      {regions.map((region, index) => (
        <motion.div
          key={region.href}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="w-full md:w-1/2"
        >
          <Link
            href={region.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex flex-col items-center justify-center relative overflow-hidden cursor-pointer group"
            style={{
              height: "clamp(300px, 45vw, 1000px)",
              transition: "transform 0.3s ease",
              transform: hoveredIndex === index ? "scale(1.02)" : "scale(1)",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${region.image})`,
                transition: "transform 0.6s ease",
                transform:
                  hoveredIndex === index ? "scale(1.05)" : "scale(1)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  hoveredIndex === index
                    ? "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.6) 100%)"
                    : "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.65) 100%)",
                transition: "background 0.4s ease",
              }}
            />

            {index === 1 && (
              <div
                className="hidden md:block absolute left-0 top-0 h-full z-20"
                style={{
                  width: "1px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
              />
            )}

            <div className="relative z-10 flex flex-col items-center px-6 text-center">
              <span
                className="uppercase"
                style={{
                  fontSize: "clamp(28px, 5vw, 60px)",
                  fontWeight: 300,
                  fontFamily: '"the-seasons", serif',
                  color: "#ffffff",
                  letterSpacing: "clamp(3px, 0.5vw, 8px)",
                  transition: "transform 0.3s ease",
                  transform:
                    hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                {region.title}
              </span>

              <div
                style={{
                  width: hoveredIndex === index ? "60px" : "0px",
                  height: "1.5px",
                  backgroundColor: "#ffffff",
                  marginTop: "16px",
                  transition: "width 0.4s ease",
                }}
              />

              <div className="mt-5 flex flex-col items-center gap-[6px] md:mt-7">
                {region.translations.map((translation) => (
                  <span
                    key={translation}
                    className="text-center"
                    style={{
                      fontSize: "clamp(11px, 1.2vw, 14px)",
                      fontFamily: '"Manrope", sans-serif',
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {translation}
                  </span>
                ))}
              </div>

              <span
                className="mt-4 md:mt-6 max-w-[260px]"
                style={{
                  fontSize: "clamp(12px, 1.1vw, 14px)",
                  fontFamily: '"Manrope", sans-serif',
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: "1.6",
                  letterSpacing: "0.3px",
                }}
              >
                {region.description}
              </span>

              <span
                className="mt-6 md:mt-8"
                style={{
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontFamily: '"Manrope", sans-serif',
                  color: "#ffffff",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transform:
                    hoveredIndex === index
                      ? "translateY(0)"
                      : "translateY(6px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                →
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
