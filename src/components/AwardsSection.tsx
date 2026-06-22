"use client";

import { motion } from "framer-motion";
import {
  SiAirbnb,
  SiBookingdotcom,
  SiExpedia,
  SiZillow,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Platform {
  name: string;
  Icon: IconType | null;
  color: string;
}

const platforms: Platform[] = [
  { name: "Airbnb", Icon: SiAirbnb, color: "#FF5A5F" },
  { name: "Booking.com", Icon: SiBookingdotcom, color: "#003580" },
  { name: "Expedia", Icon: SiExpedia, color: "#FBCE04" },
  { name: "Property Finder", Icon: null, color: "#2C3E50" },
  { name: "Bayut", Icon: null, color: "#3BB54A" },
  { name: "Zillow", Icon: SiZillow, color: "#006AFF" },
  { name: "Realtor.com", Icon: null, color: "#D92228" },
  { name: "Redfin", Icon: null, color: "#A02021" },
  { name: "Trulia", Icon: null, color: "#54B435" },
  { name: "Rightmove", Icon: null, color: "#00A651" },
  { name: "Morocco Properties", Icon: null, color: "#1A3A4A" },
  { name: "OLX Properties", Icon: null, color: "#002F34" },
];

const scrollingPlatforms = [...platforms, ...platforms];

export default function AwardsSection() {
  return (
    <section className="group w-full bg-[#f5f4f2] py-16 md:py-20">
      <div className="flex w-full flex-col items-center justify-center gap-7 md:gap-[43px]">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="h-px w-[60px] bg-[var(--dark-teal)]/20" />

          <p className="font-manrope text-center text-[14px] font-normal uppercase text-[var(--dark-light-teal)] tracking-[2px]">
            Trusted by top platforms and agents worldwide
          </p>

          <h2
            className="font-the-seasons text-center font-light text-[var(--dark-teal)]"
            style={{
              fontSize: "clamp(28px, 4vw, 50.4px)",
              lineHeight: "clamp(36px, 5vw, 65.52px)",
            }}
          >
            Where Our Content Appears
          </h2>

          <div className="h-px w-[60px] bg-[var(--dark-teal)]/20" />
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <div className="awards-scroll flex items-center">
            {scrollingPlatforms.map((platform, i) => (
              <div
                key={`${platform.name}-${i}`}
                className="mx-2 flex shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white opacity-70 grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0 hover:opacity-100 hover:shadow-lg md:mx-4 h-16 w-[180px] lg:w-[200px] lg:h-[64px]"
              >
                {platform.Icon ? (
                  <div className="flex items-center gap-2.5">
                    <platform.Icon
                      size={22}
                      style={{ color: platform.color }}
                    />
                    <span className="font-manrope text-[12px] font-medium tracking-wide text-[#333]">
                      {platform.name}
                    </span>
                  </div>
                ) : (
                  <span
                    className="font-manrope px-3 text-center text-[13px] font-semibold tracking-wide"
                    style={{ color: platform.color }}
                  >
                    {platform.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .awards-scroll {
          width: max-content;
          animation: scrollHorizontal 40s linear infinite;
        }
        .group:hover .awards-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
