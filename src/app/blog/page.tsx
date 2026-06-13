"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Container from "@/components/common/Container"
import AnimatedReveal from "@/components/common/AnimatedReveal"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts } from "@/data/blog"

/**
 * ═══════════════════════════════════════════════════
 * Blog Page — Editorial Magazine Layout
 * ═══════════════════════════════════════════════════
 */
export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <main className="flex min-h-screen flex-col bg-brand-cream overflow-hidden">
      
      {/* ── Header ────────────────────────────────── */}
      <section className="pt-24 pb-12 relative">
        <Container className="text-center">
          <AnimatedReveal direction="up">
            <span className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Ayurvedic Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
              The Wellness <span className="italic font-serif text-brand-primary">Journal</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our latest articles on Ayurvedic living, holistic health tips, and deep dives into traditional therapies.
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── Featured Post ─────────────────────────── */}
      <section className="py-12 relative">
        <Container>
          <AnimatedReveal direction="up" delay={200}>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto h-full overflow-hidden">
                  <Image
                    src={featuredPost.imagePath}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-primary text-white text-xs font-bold tracking-widest uppercase py-1.5 px-4 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-gold" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-gold" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-brand-primary font-semibold group-hover:gap-4 transition-all duration-300">
                    Read Article <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── Recent Posts Grid ─────────────────────── */}
      <section className="py-12 pb-24 relative">
        <Container>
          <AnimatedReveal direction="up">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8 border-b border-gray-200 pb-4">
              Recent Articles
            </h3>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, idx) => (
              <AnimatedReveal key={post.id} direction="up" delay={idx * 100}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.imagePath}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h4 className="text-xl font-heading font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-brand-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        Read More <ArrowRight className="w-4 h-4" />
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
  )
}
