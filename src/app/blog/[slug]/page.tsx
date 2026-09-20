import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";

/**
 * ═══════════════════════════════════════════════════
 * Dynamic Blog Post Page
 * ═══════════════════════════════════════════════════
 */

// Generate static params for build time optimization
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-brand-cream flex min-h-screen flex-col overflow-hidden">
      {/* ── Hero Image ────────────────────────────── */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={post.imagePath}
          alt={`${post.title} - Ayurvedic Wellness Blog Kottakkal Dubai`}
          fill
          className="object-cover"
          priority
        />
        <div className="bg-brand-dark/40 absolute inset-0" />
      </section>

      {/* ── Article Content ─────────────────────── */}
      <section className="relative z-10 -mt-32 py-16">
        <Container className="max-w-4xl">
          <div className="rounded-3xl bg-white p-5 shadow-2xl sm:p-8 md:p-16">
            <Link
              href="/blog"
              className="text-brand-gold hover:text-brand-primary mb-8 inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="bg-brand-primary/10 text-brand-primary rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="font-heading text-brand-dark mb-8 text-3xl leading-tight font-bold md:text-5xl">
              {post.title}
            </h1>

            <div className="mb-12 flex items-center gap-4 border-b border-gray-100 pb-8">
              <div className="bg-brand-primary/20 text-brand-primary font-heading flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold">
                {post.author.charAt(4)}{" "}
                {/* Get first letter of author name assuming "Dr. X" */}
              </div>
              <div>
                <p className="text-brand-dark font-bold">{post.author}</p>
                <p className="text-sm text-gray-500">Ayurvedic Physician</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none leading-relaxed text-gray-700">
              <p className="border-brand-gold mb-8 border-l-4 pl-6 text-xl font-light text-gray-600 italic">
                {post.excerpt}
              </p>

              {/* Splitting content by paragraphs for better formatting */}
              {post.content.split(/\d\./).map((paragraph, idx) => {
                if (!paragraph.trim()) return null;
                return (
                  <p key={idx} className="mb-6">
                    {idx > 0 && (
                      <strong className="text-brand-primary mr-2">
                        {idx}.
                      </strong>
                    )}
                    {paragraph.trim()}
                  </p>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
