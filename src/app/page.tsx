import Hero from "@/sections/Hero"
import TrustIndicators from "@/sections/TrustIndicators"
import WhyChooseUs from "@/sections/WhyChooseUs"
import AyurvedaPhilosophy from "@/sections/AyurvedaPhilosophy"
import FeaturedTreatments from "@/sections/FeaturedTreatments"
import TestimonialsPreview from "@/sections/TestimonialsPreview"
import LuxuryExperience from "@/sections/LuxuryExperience"
import Newsletter from "@/sections/Newsletter"
import ConsultationCTA from "@/sections/ConsultationCTA"
import ContactCTA from "@/sections/ContactCTA"

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

      {/* 2. Trust Indicators — Animated counter stats strip */}
      <TrustIndicators />

      {/* 3. Why Choose Us — Asymmetric editorial layout */}
      <WhyChooseUs />

      {/* 4. Ayurveda Philosophy — Immersive dark section with Doshas */}
      <AyurvedaPhilosophy />

      {/* 5. Featured Treatments — Magazine editorial alternating rows */}
      <FeaturedTreatments />

      {/* 7. Testimonials — Overlapping editorial cards */}
      <TestimonialsPreview />

      {/* 8. Luxury Experience — Asymmetric image gallery */}
      <LuxuryExperience />

      {/* 9. Newsletter — Split layout with Brevo integration */}
      <Newsletter />

      {/* 10. Consultation CTA — Full-width cinematic banner */}
      <ConsultationCTA />

      {/* 11. Contact — Two-column with EmailJS contact form */}
      <ContactCTA />
    </>
  )
}
