/**
 * ═══════════════════════════════════════════════════
 * Testimonials Data — Patient Success Stories
 * ═══════════════════════════════════════════════════
 * Curated patient reviews for trust and social proof.
 */

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  treatment: string
  text: string
  featured: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-m",
    name: "Sarah M.",
    location: "Abu Dhabi",
    rating: 5,
    treatment: "Abhyangam & Spine Care",
    text: "I experienced remarkable relief from chronic lower back pain that had persisted for years. Dr. Sajitha designed a personalized 7-day Abhyangam and herbal oil therapy that transformed my mobility. The therapists were incredibly professional, and every visit felt like stepping into a sanctuary of healing.",
    featured: true,
  },
  {
    id: "rajesh-k",
    name: "Rajesh K.",
    location: "Khalidiya",
    rating: 5,
    treatment: "Panchakarma Detoxification",
    text: "The 14-day Panchakarma detox program here was life-changing. From the initial consultation to the final day, every step was meticulously planned. I felt lighter, my digestion improved dramatically, and my energy levels surged. The authentic Ayurvedic medicines and the clinical precision set this center apart.",
    featured: false,
  },
  {
    id: "fatima-a",
    name: "Fatima A.",
    location: "Al Reem Island",
    rating: 5,
    treatment: "Shirodhara Therapy",
    text: "The Shirodhara treatment was the most profoundly calming experience of my life. After just three sessions, my chronic insomnia and anxiety had reduced noticeably. I now sleep deeply and wake refreshed. I wholeheartedly recommend Kottakkal Arya Vaidyasala to anyone seeking genuine stress relief.",
    featured: false,
  },
  {
    id: "ahmed-b",
    name: "Ahmed B.",
    location: "Al Mushrif",
    rating: 5,
    treatment: "Joint Pain Management",
    text: "After struggling with knee pain for over five years and being advised surgery by multiple orthopedists, Dr. Vineeth's herbal protocol and targeted Elakizhi therapy restored my mobility completely. I can now walk and exercise without pain. Traditional Ayurveda truly works when practiced by experts.",
    featured: false,
  },
]

/** The primary featured testimonial for hero-style quote display */
export const featuredTestimonial = testimonials.find((t) => t.featured)!

/** Supporting testimonials (non-featured) */
export const supportingTestimonials = testimonials.filter((t) => !t.featured)
