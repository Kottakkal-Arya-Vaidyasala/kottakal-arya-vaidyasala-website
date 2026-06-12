import Hero from "@/sections/Hero"
import WhyChooseUs from "@/sections/WhyChooseUs"
import AboutPreview from "@/sections/AboutPreview"
import FeaturedTreatments from "@/sections/FeaturedTreatments"
import DoctorsPreview from "@/sections/DoctorsPreview"
import TestimonialsPreview from "@/sections/TestimonialsPreview"
import Newsletter from "@/sections/Newsletter"
import ContactCTA from "@/sections/ContactCTA"

/**
 * Kottakkal Arya Vaidyasala - Home Page.
 * Renders the structural section previews for the Ayurvedic Medical Center.
 */
export default function Home() {
  return (
    <>
      {/* 1. Hero Showcase Section */}
      <Hero />
      
      {/* 2. Key Merits (Why Choose Us) Grid */}
      <WhyChooseUs />
      
      {/* 3. About Clinic Summary and Subpage Link */}
      <AboutPreview />
      
      {/* 4. Signature Treatment Cards Section */}
      <FeaturedTreatments />
      
      {/* 5. Doctor Professional Profile Previews */}
      <DoctorsPreview />
      
      {/* 6. Rating Testimonials Showcase */}
      <TestimonialsPreview />
      
      {/* 7. Newsletter Subscription Box */}
      <Newsletter />
      
      {/* 8. Call to Action Quick Contact Details Panel */}
      <ContactCTA />
    </>
  )
}
