"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";

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

export default function BlogPageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useScrollAnimation(0.1);

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
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/723613176_17916741981393261_8169243480480807643_n.jpg)",
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
            Blog & Insights
          </h1>
          <p
            className="font-manrope mt-6 max-w-[600px] font-light"
            style={{
              fontSize: 14.4,
              lineHeight: "21.6px",
              color: "rgba(245,244,242,0.85)",
            }}
          >
            Tips, trends, and insights from the world of real estate photography
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[100px] md:px-[72px]">
          <div ref={gridRef} className="opacity-0">
            <h2
              className="font-the-seasons mb-16 font-light text-[var(--dark-teal)]"
              style={{
                fontSize: "clamp(28px, 3.5vw, 50.4px)",
                lineHeight: "clamp(36px, 4vw, 65.52px)",
              }}
            >
              Latest Articles
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                      />
                    </div>
                    <div className="p-6">
                      <span className="font-manrope text-[12px] font-normal uppercase tracking-[1px] text-[var(--teal)]">
                        {post.category}
                      </span>
                      <h3
                        className="font-the-seasons mt-3 font-light text-[var(--dark-teal)] transition-colors duration-300 group-hover:text-[var(--teal)]"
                        style={{ fontSize: 20, lineHeight: "28px" }}
                      >
                        {post.title}
                      </h3>
                      <p
                        className="font-manrope mt-3 font-light text-[var(--dark-light-teal)]"
                        style={{ fontSize: 14.4, lineHeight: "24px" }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="font-manrope text-[12px] font-light text-[var(--dark-light-teal)]">
                          {post.date}
                        </span>
                        <span className="font-manrope text-[13px] font-normal text-[var(--teal)] transition-colors duration-300 group-hover:text-[var(--dark-teal)]">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
