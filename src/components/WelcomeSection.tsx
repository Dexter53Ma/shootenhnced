"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="w-full bg-[#f9f8f6]">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-24 md:px-[72px] md:py-[140px] lg:py-[160px]">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative md:w-1/2"
          >
            <div className="absolute -left-2 -top-8 select-none font-the-seasons text-[180px] leading-none text-[var(--dark-teal)] opacity-[0.04] md:-left-6 md:-top-14 md:text-[260px] xl:text-[320px]">
              &ldquo;
            </div>
            <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-[var(--dark-teal)]" />
            <div className="relative pl-6">
              <h2
                className="mb-8 font-the-seasons font-light text-[var(--dark-teal)]"
                style={{
                  fontSize: "clamp(26px, 4vw, 50.4px)",
                  lineHeight: "clamp(34px, 5vw, 65.52px)",
                  maxWidth: 662,
                }}
              >
                Elevating Properties Through Visual Storytelling
              </h2>
              <motion.div
                className="overflow-hidden rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/722909988_17917290198393261_3129732607416797432_n.jpg"
                  alt="ShootYourListing showcase"
                  width={320}
                  height={240}
                  className="h-[140px] w-[200px] object-cover md:h-[200px] md:w-[280px] lg:h-[240px] lg:w-[320px]"
                />
              </motion.div>
            </div>
          </motion.div>

          <div className="flex flex-col md:w-1/2 md:pt-1">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mb-10 flex max-w-[504px] flex-col"
            >
              <p className="font-manrope mb-6 text-[14px] font-normal uppercase tracking-[2px] text-[var(--dark-light-teal)] before:mr-3 before:inline-block before:h-[1px] before:w-[24px] before:bg-[var(--dark-light-teal)] before:align-middle">
                Welcome to ShootYourListing
              </p>
              <div className="mb-8 h-[1px] w-full bg-gradient-to-r from-[var(--dark-teal)]/20 to-transparent" />
              <p className="font-manrope text-[13px] font-light leading-[28px] tracking-[0.288px] text-[var(--dark-teal)] sm:text-[14.4px]">
                ShootYourListing is a premium real estate photography and
                videography agency, delivering stunning visual content for
                agents, developers, and property brands. From high-end interior
                shoots to cinematic drone footage and immersive virtual tours, we
                help your listings capture attention and close deals faster.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-wrap gap-3"
            >
              {[
                "500+ Properties Shot",
                "100% Client Satisfaction",
                "48h Delivery",
              ].map((stat, i) => (
                <motion.span
                  key={stat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border border-[var(--dark-teal)]/10 bg-[var(--dark-teal)]/[0.04] px-5 py-2 font-manrope text-[12px] font-medium tracking-[0.5px] text-[var(--dark-teal)] md:text-[13px] md:px-6 md:py-2.5"
                >
                  {stat}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
