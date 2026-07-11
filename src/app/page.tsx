import Hero from "@/sections/Hero";
import TreatmentsMarquee from "@/sections/TreatmentsMarquee";
import WhyChooseUs from "@/sections/WhyChooseUs";
import MissionVision from "@/sections/MissionVision";
import InsuranceMarquee from "@/sections/InsuranceMarquee";
import FeaturedTreatments from "@/sections/FeaturedTreatments";
import TestimonialsPreview from "@/sections/TestimonialsPreview";
import ContactCTA from "@/sections/ContactCTA";
import Newsletter from "@/sections/Newsletter";
/**
 * ═══════════════════════════════════════════════════
 * Kottakkal Arya Vaidyasala — Homepage
 * ═══════════════════════════════════════════════════
 * Premium luxury Ayurvedic Medical Center homepage.
 * 11 sections, each with a unique editorial layout.
 */
export default function Home() {
  return (
    <>
      {/* 1. Cinematic Hero — Full viewport with editorial typography */}
      <Hero />

      {/* 2. Treatments Marquee — Infinite scrolling list with Sparkles */}
      <TreatmentsMarquee />

      {/* 5. Featured Treatments — Magazine editorial alternating rows */}
      <FeaturedTreatments />

      {/* 3. Why Choose Us — Asymmetric editorial layout */}
      <WhyChooseUs />

      {/* 4. Mission and Vision */}
      <MissionVision />

      {/* 5. Insurance Marquee */}
      <InsuranceMarquee />

      {/* 7. Testimonials — Overlapping editorial cards */}
      <TestimonialsPreview />

      {/* 8. Newsletter Subscription */}
      <Newsletter />

      {/* 9. Contact Call to Action */}
      <ContactCTA />
    </>
  );
}
