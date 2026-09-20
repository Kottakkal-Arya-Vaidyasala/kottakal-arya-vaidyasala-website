"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

/**
 * ═══════════════════════════════════════════════════
 * Blog Page — Editorial Magazine Layout
 * ═══════════════════════════════════════════════════
 */
export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".gsap-heading", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2,
      });
    },
    { scope: headerRef }
  );

  return (
    <main className="bg-brand-cream flex min-h-screen flex-col overflow-hidden">
      {/* ── Header ────────────────────────────────── */}
      <section className="relative flex h-[60vh] min-h-[500px] w-full items-center justify-center overflow-hidden bg-black text-white">
        <Image
          src="/images/blog/blog-page.webp"
          alt="Ayurveda Health Blog and Wellness Journal Dubai"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="bg-brand-gold/10 pointer-events-none absolute top-1/2 left-1/2 z-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] filter" />

        <Container className="relative z-10 pt-16 text-center">
          <div
            ref={headerRef}
            className="mx-auto"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
          >
            <h1 className="gsap-heading font-heading mb-2 text-3xl font-bold text-white drop-shadow-2xl md:text-4xl lg:text-5xl 2xl:text-6xl">
              The Wellness <span className="text-brand-gold">Journal</span>
            </h1>
            <p className="gsap-heading mx-auto max-w-xl text-base font-light text-gray-100 drop-shadow-xl md:text-lg">
              Explore Ayurvedic living and holistic health.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Featured Post ─────────────────────────── */}
      <section className="relative py-12">
        <Container>
          <AnimatedReveal direction="up" delay={200}>
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group mx-auto block max-w-sm md:max-w-none"
            >
              <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] h-full overflow-hidden lg:aspect-auto">
                  <Image
                    src={featuredPost.imagePath}
                    alt={`${featuredPost.title} - Ayurvedic Wellness Blog Kottakkal Dubai`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-primary rounded-full px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 lg:p-12">
                  <div className="mb-4 flex items-center gap-4 text-xs text-gray-500 md:mb-6 md:text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="text-brand-gold h-3.5 w-3.5 md:h-4 md:w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="text-brand-gold h-3.5 w-3.5 md:h-4 md:w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-heading text-brand-dark group-hover:text-brand-primary mb-3 text-2xl font-bold transition-colors md:mb-4 md:text-3xl lg:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600 md:mb-8 md:text-lg">
                    {featuredPost.excerpt}
                  </p>

                  <div className="text-brand-primary flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-4">
                    Read Article <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── Recent Posts Grid ─────────────────────── */}
      <section className="relative py-12 pb-24">
        <Container>
          <AnimatedReveal direction="up">
            <h3 className="font-heading text-brand-dark mb-8 border-b border-gray-200 pb-4 text-2xl font-bold">
              Recent Articles
            </h3>
          </AnimatedReveal>

          <div className="mx-auto grid max-w-sm grid-cols-1 gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-8 2xl:grid-cols-4">
            {recentPosts.map((post, idx) => (
              <AnimatedReveal key={post.id} direction="up" delay={idx * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-xl">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.imagePath}
                        alt={`${post.title} - Ayurvedic Wellness Blog Kottakkal Dubai`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-brand-dark rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-grow flex-col p-5">
                      <div className="mb-3 flex items-center justify-between text-[10px] text-gray-500 md:mb-4 md:text-xs">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h4 className="font-heading text-brand-dark group-hover:text-brand-primary mb-2 text-lg font-bold transition-colors md:mb-3 md:text-xl">
                        {post.title}
                      </h4>
                      <p className="mb-4 flex-grow text-xs leading-relaxed text-gray-600 md:mb-6 md:text-sm">
                        {post.excerpt}
                      </p>

                      <div className="text-brand-primary flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3">
                        Read More <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
