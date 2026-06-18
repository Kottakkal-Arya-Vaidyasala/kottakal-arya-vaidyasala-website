"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import AnimatedReveal from "@/components/common/AnimatedReveal";
import SectionHeading from "@/components/common/SectionHeading";
import { Leaf, Heart, Shield, Sparkles } from "lucide-react";

/**
 * ═══════════════════════════════════════════════════
 * About Us Page — Premium Brand Story
 * ═══════════════════════════════════════════════════
 */
export default function AboutUsPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      {/* ── 1. Hero Section ────────────────────────── */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/clinic/interior.png"
          alt="Ayurveda Clinic Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-primary" />
        <div className="absolute inset-0 grain-overlay opacity-50" />

        <Container className="relative z-10 text-center">
          <AnimatedReveal direction="up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-brand-gold text-xs font-bold tracking-widest uppercase mb-6">
              Our Story
            </span>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Renew Yourself with <br />
              <span className="italic font-serif text-brand-gold">
                Ayurveda
              </span>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              Begin your journey toward harmony of body, mind, and spirit with
              authentic Ayurveda in Abu Dhabi.
            </p>
          </AnimatedReveal>
        </Container>
      </section>

      {/* ── 2. Ancient Healing, Modern Care ──────── */}
      <section className="py-24 bg-white relative">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-brand-cream/50 rounded-full filter blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedReveal direction="right" className="relative">
              <div className="relative aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl gold-border-reveal">
                <Image
                  src="/images/gallery/kerala-heritage.png"
                  alt="Ayurveda Heritage"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 bg-brand-dark text-white p-8 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white"
              >
                <span className="text-4xl font-heading font-bold text-brand-gold mb-1">
                  100+
                </span>
                <span className="text-xs tracking-wider uppercase font-semibold text-gray-300">
                  Years of
                  <br />
                  Heritage
                </span>
              </motion.div>
            </AnimatedReveal>

            <AnimatedReveal direction="left" className="lg:pl-8">
              <SectionHeading
                subtitle="Who We Are"
                title={
                  <>
                    Ancient Healing, <br />
                    <span className="italic font-serif text-brand-gold">
                      Modern Care.
                    </span>
                  </>
                }
                align="left"
              />
              <div className="prose prose-lg text-gray-600 mt-8 space-y-6">
                <p>
                  Kottakkal Arya Vaidyasala is a premier Ayurveda medical center
                  in Abu Dhabi, dedicated to delivering authentic Ayurvedic
                  healthcare rooted in traditional wisdom and supported by
                  modern clinical standards. We provide natural wellness
                  solutions for individuals seeking safe, holistic, and
                  long-term healing.
                </p>
                <p>
                  Guided by experienced Ayurvedic doctors and supported by
                  professionally trained expert therapists, our approach
                  focuses on holistic care that nurtures the body, mind, and
                  spirit. Every treatment is designed after careful assessment,
                  ensuring personalized attention and ethical Ayurvedic
                  practice.
                </p>
                <p className="font-semibold text-brand-primary">
                  We combine time-tested therapies with a strong commitment to
                  quality, safety, and patient education—helping individuals
                  maintain lasting health, balance, and harmony.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* ── 3. Mission & Vision ────────────────────── */}
      <section className="py-24 bg-brand-dark text-white relative grain-overlay">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Mission */}
            <AnimatedReveal direction="up" delay={0}>
              <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-brand-gold/20 h-full flex flex-col relative overflow-hidden group hover:border-brand-gold/50 transition-colors duration-500">

                <h3 className="text-3xl font-heading font-bold text-brand-gold mb-6 relative z-10">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg relative z-10 flex-grow">
                  To promote holistic health and well-being by delivering
                  authentic Ayurvedic treatments, personalized care, and natural
                  therapies. We are dedicated to restoring balance in body,
                  mind, and spirit while guiding individuals toward a healthier
                  and more harmonious lifestyle.
                </p>
              </div>
            </AnimatedReveal>

            {/* Vision */}
            <AnimatedReveal direction="up" delay={100}>
              <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-brand-gold/20 h-full flex flex-col relative overflow-hidden group hover:border-brand-gold/50 transition-colors duration-500">

                <h3 className="text-3xl font-heading font-bold text-brand-gold mb-6 relative z-10">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg relative z-10 flex-grow">
                  To be a globally trusted destination for Ayurvedic healing and
                  wellness—spreading the timeless wisdom of Ayurveda across
                  communities and empowering people of all ages to embrace
                  natural living, preventive care, and long-lasting vitality.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* ── 4. Why Choose Us (Value Props) ───────── */}
      <section className="py-24 bg-brand-cream relative">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedReveal direction="up">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
                Nature&apos;s Secret for Your <br />
                <span className="italic font-serif text-brand-gold">
                  True Health
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                As a trusted Ayurvedic clinic in Abu Dhabi, we offer authentic
                care focused on restoring balance, vitality, and long-term
                wellness.
              </p>
            </AnimatedReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-brand-gold" />,
                title: "Personalized Care",
                desc: "Skilled doctors provide treatments tailored to your unique dosha and specific health needs.",
              },
              {
                icon: <Leaf className="w-8 h-8 text-brand-gold" />,
                title: "Pure & Authentic",
                desc: "Pure herbal remedies and safe therapies sourced directly from traditional master herbalists.",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-brand-gold" />,
                title: "Holistic Approach",
                desc: "Ayurveda, yoga, and diet combined for complete balance. We teach you how to stay healthy.",
              },
            ].map((feature, idx) => (
              <AnimatedReveal
                key={feature.title}
                direction="up"
                delay={idx * 100}
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
