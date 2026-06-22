"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const taglines = [
  "Showcase Every Detail",
  "Luxury Listings, Captured Perfectly",
  "Drone Views That Sell Dreams",
  "From Sky to Interior — We Capture It All",
  "Make Your Properties Unforgettable",
  "Professional Real Estate Visuals",
  "Aerial Photography That Commands Attention",
  "Virtual Tours That Drive Inquiries",
  "Your Listings Deserve the Best Lens",
  "Book Your Shoot Today",
];

const INTERVAL = 5000;
const VIDEO_ID = "h64HW1hbyyk";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % taglines.length);
    }, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "min(600px, 100vh)", height: "100vh" }}
    >
      {/* YouTube iframe — z-index:0, pointer-events blocked */}
      <iframe
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&disablekb=1&iv_load_policy=3&fs=0`}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "177.78vh",
          minWidth: "100vw",
          minHeight: "56.25vw",
          height: "100vh",
          border: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
        title=""
      />

      {/* Solid overlay — physically covers the iframe so mouse never reaches it */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(148deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 61%, rgba(8,44,56,0.85) 93%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-20 left-5 md:bottom-36 md:left-[72px]"
        style={{ zIndex: 2 }}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-sm text-base font-light md:max-w-lg md:text-lg"
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "#f5f4f2",
            }}
          >
            {taglines[current]}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2"
        style={{ zIndex: 2 }}
      >
        {taglines.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-[3px] rounded-sm transition-all duration-300"
            style={{
              width: i === current ? 30 : 12,
              background: i === current ? "#fff" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
