/**
 * ═══════════════════════════════════════════════════
 * Doctors Data — Expert Ayurvedic Physicians
 * ═══════════════════════════════════════════════════
 * Structured data for the medical team presentation.
 */

export interface Doctor {
  id: string
  name: string
  title: string
  credentials: string
  specialties: string[]
  experience: string
  bio: string
  imagePath: string
}

export const doctors: Doctor[] = [
  {
    id: "dr-sajitha-nair",
    name: "Dr. Sajitha Nair",
    title: "Senior Ayurvedic Consultant",
    credentials: "BAMS, MD (Ayurveda)",
    specialties: [
      "Chronic Pain Management",
      "Spine Care & Rheumatology",
      "Women's Health",
      "Autoimmune Disorders",
    ],
    experience: "15+ Years Clinical Experience",
    bio: "Dr. Sajitha Nair brings over 15 years of specialized clinical practice rooted in authentic Kerala Ayurvedic medicine. With advanced training in Kayachikitsa (internal medicine), she has helped thousands of patients overcome chronic pain conditions, spinal disorders, and complex autoimmune diseases through personalized herbal protocols and Panchakarma therapies.",
    imagePath: "/images/doctors/dr-sajitha.jpg",
  },
  {
    id: "dr-vineeth-kumar",
    name: "Dr. Vineeth Kumar",
    title: "Ayurvedic Physician & Panchakarma Expert",
    credentials: "BAMS",
    specialties: [
      "Panchakarma Detoxification",
      "Lifestyle Disorders",
      "Stress & Anxiety Therapy",
      "Digestive Health",
    ],
    experience: "10+ Years Clinical Experience",
    bio: "Dr. Vineeth Kumar is a dedicated Ayurvedic physician specializing in Panchakarma detoxification and lifestyle medicine. His decade-long clinical journey spans traditional village clinics in Kerala to modern integrative practice in Abu Dhabi. Dr. Kumar excels at crafting comprehensive wellness programs that address stress, weight management, digestive issues, and metabolic disorders.",
    imagePath: "/images/doctors/dr-vineeth.jpg",
  },
]
