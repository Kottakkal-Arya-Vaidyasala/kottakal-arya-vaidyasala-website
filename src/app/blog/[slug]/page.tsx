import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Container from "@/components/common/Container"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { blogPosts } from "@/data/blog"

/**
 * ═══════════════════════════════════════════════════
 * Dynamic Blog Post Page
 * ═══════════════════════════════════════════════════
 */

// Generate static params for build time optimization
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col bg-brand-cream overflow-hidden">
      
      {/* ── Hero Image ────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src={post.imagePath}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-dark/40" />
      </section>

      {/* ── Article Content ─────────────────────── */}
      <section className="py-16 -mt-32 relative z-10">
        <Container className="max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl">
            
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-primary transition-colors text-sm font-bold tracking-widest uppercase mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-semibold uppercase tracking-wider text-xs">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-8">
              <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-heading font-bold text-xl">
                {post.author.charAt(4)} {/* Get first letter of author name assuming "Dr. X" */}
              </div>
              <div>
                <p className="font-bold text-brand-dark">{post.author}</p>
                <p className="text-sm text-gray-500">Ayurvedic Physician</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-600 font-light italic mb-8 border-l-4 border-brand-gold pl-6">
                {post.excerpt}
              </p>
              
              {/* Splitting content by paragraphs for better formatting */}
              {post.content.split(/\d\./).map((paragraph, idx) => {
                if (!paragraph.trim()) return null
                return (
                  <p key={idx} className="mb-6">
                    {idx > 0 && <strong className="text-brand-primary mr-2">{idx}.</strong>}
                    {paragraph.trim()}
                  </p>
                )
              })}
            </div>

          </div>
        </Container>
      </section>

    </main>
  )
}
