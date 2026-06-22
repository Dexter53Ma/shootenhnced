"use client";

import React, { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const benefits = [
  {
    title: "Win More Listings",
    description:
      "Properties with professional photography sell 73% faster. Give your clients the visual edge that wins mandates.",
  },
  {
    title: "Boost Your Brand",
    description:
      "Elevate your personal brand with consistent, high-quality visuals that set you apart from the competition.",
  },
  {
    title: "Earn Commissions",
    description:
      "Refer clients to ShootYourListing and earn attractive commissions on every booking.",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description:
      "Register as a ShootYourListing agent in under 2 minutes.",
  },
  {
    number: "02",
    title: "Share Your Listings",
    description:
      "Tell us about your properties and we'll recommend the perfect packages.",
  },
  {
    number: "03",
    title: "Earn & Grow",
    description:
      "Earn commissions on every referral while offering your clients premium visual content.",
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

export default function BeAnAgentPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useScrollAnimation(0.15);
  const stepsRef = useScrollAnimation(0.1);
  const ctaRef = useScrollAnimation(0.1);

  const [agentName, setAgentName] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [agentPhone, setAgentPhone] = useState("");
  const [agencyName, setAgencyName] = useState("");

  const handleJoinNow = () => {
    const msg = `*New Agent Registration*%0A%0A*Name:* ${agentName || "N/A"}%0A*Email:* ${agentEmail || "N/A"}%0A*Phone:* ${agentPhone || "N/A"}%0A*Agency:* ${agencyName || "N/A"}`;
    window.open(`https://wa.me/212621189496?text=${msg}`, "_blank");
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
      <Navigation />

      <section
        className="relative flex w-full items-end overflow-hidden"
        style={{ minHeight: 500, height: "100vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/722858422_17917392711393261_6066147318357516352_n.jpg)",
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
            Become a ShootYourListing Agent
          </h1>
          <p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
          >
            Join our growing network of real estate professionals who use premium
            visual content to win more listings and close more deals.
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={benefitsRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              Why Partner With Us?
            </h2>

            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title}>
                  <h3
                    className="font-the-seasons font-light text-[var(--dark-teal)]"
                    style={{ fontSize: 20, lineHeight: "28px" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="font-manrope mt-4 font-light text-[var(--dark-light-teal)]"
                    style={{ fontSize: 14.4, lineHeight: "24px" }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 pb-[100px] md:px-[72px]">
          <div ref={stepsRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              How It Works
            </h2>

            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {steps.map((step) => (
                <div key={step.number}>
                  <span
                    className="font-the-seasons font-light text-[var(--teal)]"
                    style={{ fontSize: 48, lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-the-seasons mt-4 font-light text-[var(--dark-teal)]"
                    style={{ fontSize: 20, lineHeight: "28px" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-manrope mt-4 font-light text-[var(--dark-light-teal)]"
                    style={{ fontSize: 14.4, lineHeight: "24px" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full"
        style={{ backgroundColor: "var(--dark-navy)" }}
      >
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={ctaRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-4 font-light text-white"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="font-manrope mb-12 max-w-[600px] font-light text-white/80"
              style={{ fontSize: 14.4, lineHeight: "24px" }}
            >
              Fill in your details and our team will reach out to get you set up.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                aria-label="Name"
                className="font-manrope rounded-xl px-6 py-4 font-light outline-none"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  fontSize: 14.4,
                  color: "rgba(255,255,255,0.9)",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={agentEmail}
                onChange={(e) => setAgentEmail(e.target.value)}
                aria-label="Email"
                className="font-manrope rounded-xl px-6 py-4 font-light outline-none"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  fontSize: 14.4,
                  color: "rgba(255,255,255,0.9)",
                }}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={agentPhone}
                onChange={(e) => setAgentPhone(e.target.value)}
                aria-label="Phone"
                className="font-manrope rounded-xl px-6 py-4 font-light outline-none"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  fontSize: 14.4,
                  color: "rgba(255,255,255,0.9)",
                }}
              />
              <input
                type="text"
                placeholder="Agency Name"
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value)}
                aria-label="Agency Name"
                className="font-manrope rounded-xl px-6 py-4 font-light outline-none"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  fontSize: 14.4,
                  color: "rgba(255,255,255,0.9)",
                }}
              />
            </div>

            <div className="mt-8">
              <button
                onClick={handleJoinNow}
                className="inline-block rounded-xl px-10 py-4 font-manrope font-medium text-white transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "var(--teal)",
                  fontSize: 14.4,
                }}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
