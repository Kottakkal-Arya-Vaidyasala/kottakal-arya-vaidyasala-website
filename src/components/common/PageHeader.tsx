import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: React.ReactNode | string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
}

/**
 * Premium Page Header for subpages.
 * Full-bleed hero matching h-[60vh] min-h-[500px] — same size as
 * the About Us, Services, and Treatments page heroes.
 */
export default function PageHeader({
  title,
  subtitle,
  breadcrumbs = [],
  bgImage,
}: PageHeaderProps) {
  return (
    <section className="bg-brand-dark relative flex h-[50vh] min-h-[400px] w-full items-center justify-center overflow-hidden pt-16 text-white md:h-[60vh] md:min-h-[500px] md:pt-20">
      {/* Background image */}
      {bgImage && (
        <Image
          src={bgImage}
          alt={
            typeof title === "string"
              ? `${title} - Kottakkal Arya Vaidyasala Dubai`
              : "Kottakkal Arya Vaidyasala Ayurvedic Center Dubai"
          }
          fill
          className="scale-105 object-cover object-center"
          priority
        />
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Glow accents */}
      <div className="bg-brand-primary/20 pointer-events-none absolute top-1/2 left-0 h-64 w-64 -translate-y-1/2 rounded-full blur-3xl filter" />
      <div className="bg-brand-gold/10 pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full blur-3xl filter" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1
            style={{ textShadow: "0px 4px 12px rgba(0,0,0,0.9)" }}
            className="font-heading mb-2 px-2 text-center text-xl leading-tight font-bold tracking-wide sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
              className="mx-auto mb-8 text-[10px] font-light tracking-[0.15em] text-gray-200 uppercase drop-shadow-md sm:text-xs md:text-sm lg:text-base"
            >
              {subtitle}
            </p>
          )}

          {/* Breadcrumbs Navigation */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
              <Link
                href="/"
                className="hover:text-brand-gold transition-colors duration-200"
              >
                Home
              </Link>
              {breadcrumbs.map((item, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-brand-gold transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-brand-gold font-medium">
                      {item.label}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </Container>
    </section>
  );
}
