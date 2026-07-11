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
    <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-dark pt-16 md:pt-20 text-white">
      {/* Background image */}
      {bgImage && (
        <Image
          src={bgImage}
          alt={typeof title === "string" ? `${title} - Kottakkal Arya Vaidyasala Dubai` : "Kottakkal Arya Vaidyasala Ayurvedic Center Dubai"}
          fill
          className="object-cover object-center scale-105"
          priority
        />
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Glow accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-primary/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full filter blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1
            style={{ textShadow: "0px 4px 12px rgba(0,0,0,0.9)" }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-heading mb-2 tracking-wide leading-tight px-2 text-center"
          >
            {title}
          </h1>

          {subtitle && (
            <p
              style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 font-light tracking-[0.15em] uppercase mx-auto drop-shadow-md mb-8"
            >
              {subtitle}
            </p>
          )}

          {/* Breadcrumbs Navigation */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-gray-300 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <Link
                href="/"
                className="hover:text-brand-gold transition-colors duration-200"
              >
                Home
              </Link>
              {breadcrumbs.map((item, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
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
