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
        },
      );
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef} className="flex min-h-screen flex-col overflow-hidden">
      {/* ── 1. Hero Section ────────────────────────── */}
      <section className="hero-section relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-[130%] -top-[15%]">
          <Image
            src="/images/hero/home-carousel3.png"
            alt="Ayurvedic Abhyangam Massage"
            fill
            sizes="100vw"
            className="object-cover hero-parallax-img scale-105"
            priority
          />
        </div>
        {/* Subtle dark gradient overlay for text readability without tinting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 grain-overlay opacity-30" />

        <Container className="relative z-10 text-center">
          <AnimatedReveal direction="up" delay={100}>
            <h1
              style={{ textShadow: "0px 4px 12px rgba(0, 0, 0, 0.9)" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold text-white sm:whitespace-nowrap tracking-wide mb-3"
            >
              Our <span className="text-brand-gold">Healing</span> Heritage
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={200}>
            <p
              style={{ textShadow: "0px 2px 8px rgba(0, 0, 0, 0.9)" }}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 font-light tracking-[0.15em] uppercase mx-auto"
            >
              Authentic Ayurveda In Abu Dhabi
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── 2. Who We Are ──────── */}
      <section className="about-section pt-12 pb-12 lg:py-24 bg-white relative">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-brand-cream/50 rounded-full filter blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            <AnimatedReveal
              direction="fade"
              className="relative h-full flex items-center order-2 lg:order-1"
            >
              <div className="relative w-full max-w-[400px] md:max-w-[450px] mx-auto md:max-w-none lg:pr-8 lg:pb-8">
                {/* Elegant Gold Offset Frame */}
                <div className="absolute top-4 left-4 lg:top-8 lg:left-8 w-full h-full border-[3px] border-brand-gold/40 rounded-tl-[8rem] rounded-br-[8rem] rounded-tr-3xl rounded-bl-3xl -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
                
                {/* Main Image Container (Leaf Shape) */}
                <div className="relative w-full aspect-[4/5] rounded-tl-[8rem] rounded-br-[8rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <Image
                      src="/images/hero/home-carousel1.png"
                      alt="Ayurveda Heritage"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover about-parallax-img group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  {/* Subtle glass overlay for a premium finish */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal
              direction="left"
              className="px-4 md:px-8 lg:px-0 lg:pl-12 order-1 lg:order-2"
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
              <div className="prose prose-lg text-gray-800 mt-6 space-y-5">
                <p>
                  At <strong>Kottakkal Arya Vaidyasala</strong>, we bring the
                  ancient healing wisdom of Ayurveda to the heart of Abu Dhabi.
                  Guided by a legacy of authentic Ayurvedic practice, our center
                  is devoted to nurturing holistic health and well-being through
                  natural, personalized treatments.
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
                  <strong>Panchakarma</strong> therapies, or simply wishing to
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
      <section className="py-12 lg:py-24 bg-brand-sage/20 relative">
        <Container>
          <div className="text-center mb-12">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            {/* Mission Card */}
            <StaggerItem>
              <div className="h-full bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-brand-gold/20 hover:border-brand-gold/60 transition-colors duration-500 group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  <Target className="w-24 h-24 text-brand-gold" />
                </div>

                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-5 border border-brand-gold/20 shrink-0">
                  <Target className="w-6 h-6 text-brand-gold" />
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-primary mb-3">
                  Our Mission
                </h3>

                <p className="text-gray-800 leading-relaxed font-normal flex-grow">
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
              <div className="h-full bg-brand-primary p-6 md:p-8 rounded-2xl shadow-lg border border-brand-primary hover:border-brand-gold/40 transition-colors duration-500 group relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  <Eye className="w-24 h-24 text-brand-gold" />
                </div>

                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5 border border-white/10 shrink-0">
                  <Eye className="w-6 h-6 text-brand-gold" />
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
                  Our Vision
                </h3>

                <p className="text-gray-100 leading-relaxed font-light flex-grow">
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
      <section className="py-24 bg-brand-primary relative">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Our Healing Philosophy */}
            <div className="flex flex-col h-full">
              <AnimatedReveal direction="up">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-0.5 bg-brand-gold"></div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                    Our Healing{" "}
                    <span className="text-brand-gold">Philosophy</span>
                  </h2>
                </div>
                <p className="text-gray-200 text-lg mb-8 font-light">
                  At Kottakkal Arya Vaidyasala, we believe:
                </p>
              </AnimatedReveal>

              <AnimatedReveal
                direction="up"
                stagger={true}
                staggerDelay={0.15}
                className="space-y-6 flex-grow"
              >
                {[
                  "True healing begins by treating the root cause.",
                  "Every body has a unique constitution (Prakriti).",
                  "Nature provides the best medicine.",
                  "Prevention is as important as cure.",
                ].map((belief, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex items-start group">
                      <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/20 transition-colors mr-4">
                        <span className="text-brand-gold font-bold">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="text-white text-lg md:text-xl font-light leading-relaxed pt-1">
                        {belief}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={400}>
                <div className="mt-10 p-6 border-l-2 border-brand-gold bg-white/5 rounded-r-2xl">
                  <p className="text-gray-200 italic font-light leading-relaxed">
                    Our treatments are designed not only to heal illnesses but
                    also to rejuvenate, detoxify, and strengthen overall
                    well-being.
                  </p>
                </div>
              </AnimatedReveal>
            </div>

            {/* Authenticity & Care */}
            <div className="flex flex-col h-full">
              <AnimatedReveal direction="up" delay={100}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-0.5 bg-brand-gold"></div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                    Authenticity <span className="text-brand-gold">& Care</span>
                  </h2>
                </div>
                <p className="text-gray-200 text-lg mb-8 font-light">
                  We follow classical Ayurvedic principles using:
                </p>
              </AnimatedReveal>

              <AnimatedReveal
                direction="up"
                stagger={true}
                staggerDelay={0.15}
                className="space-y-6 flex-grow"
              >
                {[
                  "Traditional Kerala Panchakarma therapies.",
                  "Pure herbal oils and medicines.",
                  "Personalized treatment plans.",
                  "Experienced Ayurvedic doctors & expert therapists.",
                ].map((item, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex items-center group">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/30 transition-colors mr-4">
                        <Leaf className="w-5 h-5 text-brand-gold" />
                      </div>
                      <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </AnimatedReveal>

              <AnimatedReveal direction="up" delay={500}>
                <div className="mt-10 p-6 border-l-2 border-brand-gold bg-white/5 rounded-r-2xl">
                  <p className="text-gray-200 italic font-light leading-relaxed">
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
