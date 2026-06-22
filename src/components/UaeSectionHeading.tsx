"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UaeSectionHeading() {
  return (
    <section
      className="relative w-full overflow-hidden px-5 md:px-[72px] lg:px-[96px] py-16 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, #f8f9fa 0%, #ffffff 40%, #f0f4f3 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23222a2c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex-1">
            <span className="font-manrope mb-4 inline-block rounded-full bg-[var(--dark-teal)]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2.5px] text-[var(--dark-teal)]">
              Portfolio Showcase
            </span>

            <div className="mb-6 mt-4 h-[3px] w-[80px] rounded-full bg-[var(--dark-teal)]" />
            <h2
              className="font-the-seasons font-light text-[#222a2c] md:text-[50.4px] md:leading-[65.52px]"
              style={{
                fontSize: "clamp(32px, 5vw, 50.4px)",
                lineHeight: "clamp(42px, 6.5vw, 65.52px)",
              }}
            >
              Our Portfolio
            </h2>
          </div>

          <div className="hidden md:block shrink-0">
            <motion.div
              className="relative h-[140px] w-[140px] overflow-hidden rounded-3xl shadow-lg lg:h-[180px] lg:w-[180px]"
              style={{
                boxShadow:
                  "0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/722562578_17917290660393261_2104221187982964139_n.jpg"
                alt="Portfolio preview"
                width={180}
                height={180}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <p
            className="font-manrope mt-5 max-w-[560px] font-light leading-[1.7] text-[#222a2c]/80"
            style={{ fontSize: "14.4px" }}
          >
            Browse our latest real estate photography and videography projects.
            Every shoot is crafted to highlight the unique character of each
            property, helping agents and developers stand out in a competitive
            market.
          </p>
          <a
            href="#properties"
            className="font-manrope group mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--dark-teal)] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[var(--dark-teal)]/90 hover:shadow-lg hover:shadow-[var(--dark-teal)]/20"
          >
            View All Projects
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
