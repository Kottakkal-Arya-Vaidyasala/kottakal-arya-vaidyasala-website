"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/common/Container";
import AnimatedReveal, {
  StaggerItem,
} from "@/components/common/AnimatedReveal";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Leaf,
  Heart,
  Shield,
  Sparkles,
  Award,
  Layers,
  Target,
  Eye,
} from "lucide-react";
import AboutFAQ from "@/sections/AboutFAQ";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * ═══════════════════════════════════════════════════
 * About Us Page — Premium Brand Story with GSAP Scroll
 * ═══════════════════════════════════════════════════
 */
export default function AboutUsPage() {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Hero Image Parallax
      gsap.to(".hero-parallax-img", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // About Image Parallax
      gsap.fromTo(
        ".about-parallax-img",
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: mainRef }
  );

  return (
    <main ref={mainRef} className="flex min-h-screen flex-col overflow-hidden">
      {/* ── 1. Hero Section ────────────────────────── */}
      <section className="hero-section relative flex h-[60vh] min-h-[500px] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -top-[15%] h-[130%] w-full">
          <Image
            src="/images/hero/home-carousel3.webp"
            alt="Authentic Ayurvedic Abhyangam Massage Treatment in Dubai"
            fill
            sizes="100vw"
            className="hero-parallax-img scale-105 object-cover"
            priority
          />
        </div>
        {/* Subtle dark gradient overlay for text readability without tinting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="grain-overlay absolute inset-0 opacity-30" />

        <Container className="relative z-10 text-center">
          <AnimatedReveal direction="up" delay={100}>
            <h1
              style={{ textShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}
              className="font-heading mb-3 text-2xl font-bold tracking-wide text-white sm:text-3xl sm:whitespace-nowrap md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            >
              Our <span className="text-brand-gold">Healing</span> Heritage
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={200}>
            <p
              style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
              className="mx-auto text-[10px] font-light tracking-[0.15em] text-gray-200 uppercase sm:text-xs md:text-sm lg:text-base"
            >
              Authentic Ayurveda & Homeopathy In Abu Dhabi
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── 2. Who We Are ──────── */}
      <section className="about-section relative bg-white pt-12 pb-12 lg:py-24">
        <div className="bg-brand-cream/50 absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full blur-[150px] filter" />
        <Container>
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-16">
            <AnimatedReveal
              direction="fade"
              className="relative order-2 flex h-full items-center lg:order-1"
            >
              <div className="relative mx-auto w-full max-w-[400px] md:max-w-[450px] md:max-w-none lg:pr-8 lg:pb-8">
                {/* Elegant Gold Offset Frame */}
                <div className="border-brand-gold/40 absolute top-4 left-4 -z-10 h-full w-full rounded-tl-[8rem] rounded-tr-3xl rounded-br-[8rem] rounded-bl-3xl border-[3px] transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2 lg:top-8 lg:left-8" />

                {/* Main Image Container (Leaf Shape) */}
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-tl-[8rem] rounded-tr-3xl rounded-br-[8rem] rounded-bl-3xl shadow-2xl">
                  <div className="absolute inset-0 -top-[10%] h-[120%] w-full">
                    <Image
                      src="/images/hero/home-carousel1.webp"
                      alt="Traditional Kerala Ayurveda Heritage in Dubai"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="about-parallax-img object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  {/* Subtle glass overlay for a premium finish */}
                  <div className="from-brand-primary/20 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal
              direction="left"
              className="order-1 px-4 md:px-8 lg:order-2 lg:px-0 lg:pl-12"
            >
              <SectionHeading
                subtitle="Who We Are"
                title={
                  <>
                    Ancient Healing, <br />
                    <span className="text-brand-gold">Modern Care.</span>
                  </>
                }
                align="left"
              />
              <div className="prose prose-lg mt-6 space-y-5 text-gray-800">
                <p>
                  At <strong>Kottakkal Arya Vaidyasala</strong>, we bring the
                  ancient healing wisdom of Ayurveda and Homeopathy to the heart
                  of Abu Dhabi. Guided by a legacy of authentic Ayurvedic and
                  Homeopathic practice, our center is devoted to nurturing
                  holistic health and well-being through natural, personalized
                  treatments.
                </p>
                <p>
                  Our expert team of highly qualified doctors and traditionally
                  trained therapists carefully evaluate your unique physical and
                  mental constitution (Prakriti). We then design bespoke
                  treatment plans that target the root cause of illnesses rather
                  than merely suppressing symptoms.
                </p>
                <p>
                  Whether you are seeking relief from chronic ailments, looking
                  to deeply cleanse through comprehensive{" "}
                  <strong>Homeopathic</strong> therapies, or simply wishing to
                  rejuvenate your body and mind from daily stress, we provide a
                  dedicated sanctuary of healing.
                </p>
                <p>
                  Rooted in absolute authenticity, we strive to create a
                  harmonious space where traditional, time-tested care and
                  modern comforts meet—helping you rediscover your natural
                  balance, vitality, and inner peace.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* ── 3. Mission & Vision ────────────────────── */}
      <section className="bg-brand-sage/20 relative py-12 lg:py-24">
        <Container>
          <div className="mb-12 text-center">
            <AnimatedReveal direction="up">
              <SectionHeading
                title="Our Guiding Principles"
                subtitle="Mission & Vision"
                description="Committed to bringing the purest form of Ayurveda to the world, restoring health and harmony to every life we touch."
                align="center"
              />
            </AnimatedReveal>
          </div>

          <AnimatedReveal
            direction="up"
            stagger={true}
            className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12"
          >
            {/* Mission Card */}
            <StaggerItem>
              <div className="border-brand-gold/20 hover:border-brand-gold/60 group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-colors duration-500 md:p-8">
                <div className="pointer-events-none absolute top-0 right-0 p-6 opacity-5 transition-opacity duration-500 group-hover:opacity-10">
                  <Target className="text-brand-gold h-24 w-24" />
                </div>

                <div className="bg-brand-gold/10 border-brand-gold/20 mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
                  <Target className="text-brand-gold h-6 w-6" />
                </div>

                <h3 className="font-heading text-brand-primary mb-3 text-xl font-bold md:text-2xl">
                  Our Mission
                </h3>

                <p className="flex-grow leading-relaxed font-normal text-gray-800">
                  To provide authentic, highly personalized Ayurvedic care that
                  addresses the root cause of illness. We are dedicated to
                  offering holistic healing environments, utilizing the purest
                  traditional herbal formulations, and empowering our patients
                  to achieve lasting physical, mental, and spiritual well-being.
                </p>
              </div>
            </StaggerItem>

            {/* Vision Card */}
            <StaggerItem>
              <div className="bg-brand-primary border-brand-primary hover:border-brand-gold/40 group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-lg transition-colors duration-500 md:p-8">
                <div className="pointer-events-none absolute top-0 right-0 p-6 opacity-5 transition-opacity duration-500 group-hover:opacity-10">
                  <Eye className="text-brand-gold h-24 w-24" />
                </div>

                <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                  <Eye className="text-brand-gold h-6 w-6" />
                </div>

                <h3 className="font-heading mb-3 text-xl font-bold text-white md:text-2xl">
                  Our Vision
                </h3>

                <p className="flex-grow leading-relaxed font-light text-gray-100">
                  To be the most trusted global sanctuary for traditional
                  Ayurveda, recognized for our uncompromising commitment to
                  ancient healing sciences. We envision a world where the
                  timeless wisdom of Ayurveda seamlessly integrates into modern
                  lifestyles, naturally fostering a healthier and more balanced
                  society.
                </p>
              </div>
            </StaggerItem>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── 4. Healing Philosophy & Care ───────── */}
      <section className="bg-brand-primary relative py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Our Healing Philosophy */}
            <div className="flex h-full flex-col">
              <AnimatedReveal direction="up">
                <div className="mb-8 flex items-center gap-4">
                  <div className="bg-brand-gold h-0.5 w-12"></div>
                  <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                    Our Healing{" "}
                    <span className="text-brand-gold">Philosophy</span>
                  </h2>
                </div>
                <p className="mb-8 text-lg font-light text-gray-200">
                  At Kottakkal Arya Vaidyasala, we believe:
                </p>
              </AnimatedReveal>

              <AnimatedReveal
                direction="up"
                stagger={true}
                staggerDelay={0.15}
                className="flex-grow space-y-6"
              >
                {[
                  "True healing begins by treating the root cause.",
                  "Every body has a unique constitution (Prakriti).",
                  "Nature provides the best medicine.",
                  "Prevention is as important as cure.",
                ].map((belief, idx) => (
                  <StaggerItem key={idx}>
                    <div className="group flex items-start">
                      <div className="border-brand-gold/30 group-hover:bg-brand-gold/20 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors">
                        <span className="text-brand-gold font-bold">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="pt-1 text-lg leading-relaxed font-light text-white md:text-xl">
                        {belief}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={400}>
                <div className="border-brand-gold mt-10 rounded-r-2xl border-l-2 bg-white/5 p-6">
                  <p className="leading-relaxed font-light text-gray-200 italic">
                    Our treatments are designed not only to heal illnesses but
                    also to rejuvenate, detoxify, and strengthen overall
                    well-being.
                  </p>
                </div>
              </AnimatedReveal>
            </div>

            {/* Authenticity & Care */}
            <div className="flex h-full flex-col">
              <AnimatedReveal direction="up" delay={100}>
                <div className="mb-8 flex items-center gap-4">
                  <div className="bg-brand-gold h-0.5 w-12"></div>
                  <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                    Authenticity <span className="text-brand-gold">& Care</span>
                  </h2>
                </div>
                <p className="mb-8 text-lg font-light text-gray-200">
                  We follow classical Ayurvedic principles using:
                </p>
              </AnimatedReveal>

              <AnimatedReveal
                direction="up"
                stagger={true}
                staggerDelay={0.15}
                className="flex-grow space-y-6"
              >
                {[
                  "Authentic Homeopathic therapies.",
                  "Pure herbal oils and medicines.",
                  "Personalized treatment plans.",
                  "Experienced Ayurvedic doctors & expert therapists.",
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="group flex items-center">
                      <div className="bg-brand-gold/10 group-hover:bg-brand-gold/30 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors">
                        <Leaf className="text-brand-gold h-5 w-5" />
                      </div>
                      <p className="text-lg leading-relaxed font-light text-white md:text-xl">
                        {item}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={500}>
                <div className="border-brand-gold mt-10 rounded-r-2xl border-l-2 bg-white/5 p-6">
                  <p className="leading-relaxed font-light text-gray-200 italic">
                    Every therapy at Kottakkal Arya Vaidyasala is performed with
                    precision, hygiene, and heartfelt care — restoring your
                    vitality naturally.
                  </p>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. FAQ Section ───────────────────────────── */}
      <AboutFAQ />
    </main>
  );
}
