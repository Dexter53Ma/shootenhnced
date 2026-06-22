"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const properties = [
  {
    name: "The Residences at Bluewaters",
    description:
      "A complete interior and exterior shoot for this premium waterfront development, capturing luxury living at its finest.",
    link: "/portfolio",
    image: "/images/722562578_17917290660393261_2104221187982964139_n.jpg",
    logoBg: "#1a3a4a",
    logoInitial: "I",
    category: "Interior",
  },
  {
    name: "Palm Jumeirah Villas",
    description: "Aerial and ground-level photography for a collection of exclusive beachfront villas.",
    link: "/portfolio",
    image: "/images/706483388_17913740655393261_8362131622452443406_n.jpg",
    logoBg: "#2a4a3a",
    logoInitial: "V",
    category: "Aerial",
  },
  {
    name: "Downtown Casablanca Penthouse",
    description: "Cinematic video tour of a luxury penthouse with skyline views.",
    link: "/portfolio",
    image: "/images/711329678_17914469814393261_5632974814547833169_n.jpg",
    logoBg: "#3a3a2a",
    logoInitial: "R",
    category: "Video",
  },
  {
    name: "Marina Gate Apartments",
    description: "Full visual package — photography, drone, and virtual tour for modern urban living.",
    link: "/portfolio",
    image: "/images/645772234_17900176197393261_5522100353769301722_n.jpg",
    logoBg: "#2a2a4a",
    logoInitial: "H",
    category: "Aerial",
  },
  {
    name: "JBR Beach Resort",
    description: "Resort marketing shoot capturing amenities, rooms, and stunning beachfront views.",
    link: "/portfolio",
    image: "/images/645831461_17900176023393261_9175279617198108912_n.jpg",
    logoBg: "#1a4a4a",
    logoInitial: "C",
    category: "Interior",
  },
  {
    name: "Emirates Hills Estate",
    description: "Twilight and daylight photography for ultra-luxury private residences.",
    link: "/portfolio",
    image: "/images/645873783_17900171343393261_5221404496053826012_n.jpg",
    logoBg: "#4a3a2a",
    logoInitial: "L",
    category: "Video",
  },
];

export default function UaePropertiesCarousel() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollOffsets, setScrollOffsets] = useState<number[]>(() =>
    properties.map(() => 0)
  );

  const handleSetActive = useCallback((idx: number) => {
    setActive(idx);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (idx !== -1) handleSetActive(idx);
          }
        }
      },
      { threshold: 0.6 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [handleSetActive]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = cardRefs.current.map((el) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = rect.top + rect.height / 2;
        const offset = ((center - vh / 2) / vh) * 16;
        return Math.max(-16, Math.min(16, offset));
      });
      setScrollOffsets(offsets);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = properties[active];

  return (
    <section className="w-full bg-white px-5 md:px-[72px] lg:px-[96px]">
      <div className="flex flex-col md:flex-row justify-center">
        <div
          className="md:sticky md:top-0 md:h-screen md:w-1/2 lg:w-[55%] flex flex-col justify-center py-12 md:py-14 md:pl-10 md:pr-14"
          style={{ borderLeft: "2px solid rgba(26,58,74,0.3)" }}
        >
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span
              className="font-manrope font-medium uppercase tracking-[0.18em] text-[var(--dark-teal)]"
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                marginBottom: "18px",
                display: "block",
                opacity: 0.55,
              }}
            >
              Featured Project
            </span>

            <h2
              className="font-the-seasons font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 4vw, 43.2px)",
                lineHeight: "clamp(34px, 4.5vw, 52px)",
                marginBottom: "20px",
              }}
            >
              {current.name}
            </h2>

            <p
              className="font-manrope font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "14.4px",
                lineHeight: "21.6px",
                marginBottom: "40px",
                maxWidth: "420px",
              }}
            >
              {current.description}
            </p>

            <Link href={current.link}>
              <button className="font-the-seasons inline-flex items-center gap-3 bg-[var(--dark-teal)] px-10 py-4 text-white transition-all duration-500 hover:bg-transparent hover:text-[var(--dark-teal)] hover:shadow-[0_0_0_2px_var(--dark-teal)]" style={{ borderRadius: 1440, fontSize: "15px", letterSpacing: "0.04em" }}>
                Explore Project
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </Link>

            <div className="mt-10 flex items-center gap-4">
              <span
                className="font-manrope font-light text-[var(--dark-teal)]"
                style={{ fontSize: "12px", letterSpacing: "0.05em", opacity: 0.45 }}
              >
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(properties.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                {properties.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSetActive(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className="transition-all duration-400"
                    style={{
                      width: active === i ? "24px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      backgroundColor:
                        active === i
                          ? "var(--dark-teal)"
                          : "rgba(26,58,74,0.18)",
                      transition: "all 0.4s ease-in-out",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex w-full flex-col gap-5 md:w-1/2 lg:w-[45%] md:gap-5 md:py-10 md:pl-5">
          {properties.map((prop, i) => (
            <motion.div
              key={prop.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="w-full overflow-hidden relative cursor-pointer group"
              style={{
                height: "clamp(280px, 35vw, 450px)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${prop.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: `scale(1.08) translateY(${scrollOffsets[i] || 0}px)`,
                  transition: "transform 0.15s ease-out",
                }}
              />
              <div
                className="absolute inset-0 z-[1]"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.28))",
                }}
              />
              <div
                className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(transparent 40%, rgba(0,0,0,0.55) 100%)",
                }}
              />
              <div
                className="absolute top-4 right-4 z-10 font-manrope font-medium uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.16)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  padding: "5px 12px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {prop.category}
              </div>
              <div
                className="absolute top-5 left-5 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-white/30 md:h-[60px] md:w-[60px] z-10"
                style={{
                  backgroundColor: prop.logoBg,
                  fontSize: "20px",
                  fontWeight: 300,
                  fontFamily: "the-seasons, serif",
                  color: "#f5f4f2",
                }}
              >
                {prop.logoInitial}
              </div>
              <div className="absolute bottom-5 left-5 z-10">
                <span
                  className="font-manrope font-light text-white"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                  }}
                >
                  {prop.name}
                </span>
              </div>
              <div
                className="absolute bottom-5 right-5 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400"
                style={{
                  color: "white",
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                <span
                  className="font-manrope font-medium uppercase"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                  }}
                >
                  View Project
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
