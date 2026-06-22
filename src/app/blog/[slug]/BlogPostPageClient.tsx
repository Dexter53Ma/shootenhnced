"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

export default function BlogPostPageClient({ slug }: { slug: string }) {
  const post = getBlogPost(slug);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!post) {
    return (
      <div className="relative">
        <Navigation />
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="font-the-seasons text-4xl font-light text-[var(--dark-teal)]">
              Post Not Found
            </h1>
            <p className="font-manrope mt-4 text-[14px] text-[var(--dark-light-teal)]">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="font-manrope mt-6 inline-block text-[14px] text-[var(--teal)] hover:text-[var(--dark-teal)]"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const ctaMap: Record<string, { title: string; description: string; link: string; linkText: string }> = {
    "photography-tips-sell-faster": {
      title: "Ready to Transform Your Listings?",
      description: "Professional photography that makes properties sell faster. Packages starting at 1,000 MAD.",
      link: "/pricing/photography",
      linkText: "View Photography Packages",
    },
    "drone-footage-luxury-listings": {
      title: "Capture Stunning Aerial Views",
      description: "DGAC certified drone footage for luxury properties. Starting at 1,200 MAD.",
      link: "/pricing/drone",
      linkText: "View Drone Packages",
    },
    "virtual-tours-morocco-real-estate": {
      title: "Create Immersive Virtual Tours",
      description: "Matterport 360° virtual tours that let buyers explore properties remotely. 1,200 MAD per tour.",
      link: "/pricing/custom",
      linkText: "View Virtual Tour Pricing",
    },
    "stage-property-visual-impact": {
      title: "Stage Your Property Digitally",
      description: "AI-powered virtual staging that transforms empty rooms. Starting at 200 MAD per room.",
      link: "/pricing/custom",
      linkText: "View Virtual Staging Options",
    },
    "golden-hour-photography-timing": {
      title: "Book Your Golden Hour Session",
      description: "Professional photography timed for the perfect light. Packages from 1,000 MAD.",
      link: "/pricing/photography",
      linkText: "Schedule a Shoot",
    },
    "professional-visuals-listing-to-sold": {
      title: "Get Professional Visuals Today",
      description: "Complete visual solutions for real estate. Photography, drone, video, and virtual tours.",
      link: "/contact-us",
      linkText: "Contact Us Now",
    },
  };

  const cta = ctaMap[post.slug];

  return (
    <div className="relative">
      <Navigation />

      {/* Hero */}
      <section
        className="relative flex w-full items-end overflow-hidden"
        style={{ minHeight: 500, height: "80vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${post.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 w-full max-w-[1296px] px-6 pb-[80px] md:px-[72px]">
          <Link
            href="/blog"
            className="font-manrope mb-6 inline-flex items-center gap-2 text-[13px] text-white/70 transition-colors hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M8.75 10.5L5.25 7L8.75 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Blog
          </Link>

          <span className="font-manrope mb-4 block text-[12px] font-medium uppercase tracking-[0.15em] text-[var(--teal)]">
            {post.category}
          </span>

          <h1
            className="font-the-seasons font-light text-white"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: "clamp(40px, 5vw, 68px)",
              maxWidth: 900,
            }}
          >
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">
            <span className="font-manrope text-[13px] text-white/60">
              {post.date}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="font-manrope text-[13px] text-white/60">
              {post.readTime}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="font-manrope text-[13px] text-white/60">
              By {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[800px] px-6 py-[80px] md:px-6">
          <div ref={contentRef} className="opacity-0">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                const headingText = paragraph.replace(/\*\*/g, "");
                return (
                  <h2
                    key={index}
                    className="font-the-seasons mt-10 mb-4 font-light text-[var(--dark-teal)]"
                    style={{ fontSize: 24, lineHeight: "34px" }}
                  >
                    {headingText}
                  </h2>
                );
              }

              return (
                <p
                  key={index}
                  className="font-manrope mb-5 font-light text-[var(--dark-light-teal)]"
                  style={{ fontSize: 15, lineHeight: "26px" }}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {cta && (
        <section className="w-full bg-[var(--dark-teal)]">
          <div className="mx-auto w-full max-w-[800px] px-6 py-[60px] md:px-6 text-center">
            <h2 className="font-the-seasons mb-4 font-light text-white" style={{ fontSize: 28, lineHeight: "36px" }}>
              {cta.title}
            </h2>
            <p className="font-manrope mb-8 font-light text-white/80" style={{ fontSize: 15, lineHeight: "24px" }}>
              {cta.description}
            </p>
            <Link
              href={cta.link}
              className="inline-block rounded-xl bg-[var(--teal)] px-8 py-3 font-manrope text-[14px] font-medium text-white transition-all duration-300 hover:bg-[var(--dark-teal)] hover:shadow-lg"
            >
              {cta.linkText}
            </Link>
          </div>
        </section>
      )}

      {/* Related Posts */}
      <section className="w-full" style={{ backgroundColor: "var(--light-blue)" }}>
        <div className="mx-auto w-full max-w-[1296px] px-6 py-[80px] md:px-[72px]">
          <h2
            className="font-the-seasons mb-12 font-light text-[var(--dark-teal)]"
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              lineHeight: "clamp(32px, 3.5vw, 44px)",
            }}
          >
            Related Articles
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-manrope text-[12px] font-normal uppercase tracking-[1px] text-[var(--teal)]">
                      {related.category}
                    </span>
                    <h3
                      className="font-the-seasons mt-3 font-light text-[var(--dark-teal)] transition-colors duration-300 group-hover:text-[var(--teal)]"
                      style={{ fontSize: 20, lineHeight: "28px" }}
                    >
                      {related.title}
                    </h3>
                    <p
                      className="font-manrope mt-3 font-light text-[var(--dark-light-teal)]"
                      style={{ fontSize: 14.4, lineHeight: "24px" }}
                    >
                      {related.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-manrope text-[12px] font-light text-[var(--dark-light-teal)]">
                        {related.date}
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
      </section>

      <Footer />
    </div>
  );
}
