/**
 * ═══════════════════════════════════════════════════
 * Blog Data — Insights on Ayurveda & Wellness
 * ═══════════════════════════════════════════════════
 */

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  imagePath: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "healing-power-herbal-oils",
    title: "The Healing Power of Herbal Oils in Ayurveda",
    excerpt: "Discover how traditional Ayurvedic medicated oils nourish the skin, calm the nervous system, and restore balance to the body.",
    content: "In Ayurveda, oil is not just a moisturizer; it is a powerful vehicle for delivering the healing properties of herbs deep into the body's tissues. Warm medicated oils, known as 'Thailam', are used extensively in therapies like Abhyangam and Pizhichil. The base oil, often sesame or coconut, is cooked with specific herbs over several days. When applied to the skin, these oils lubricate the joints, draw out toxins, and pacify the Vata dosha, bringing profound relaxation and physical rejuvenation.",
    date: "July 12, 2026",
    author: "Dr. Ananya Nair",
    category: "Wellness",
    imagePath: "/images/treatments/pizhichil-v2.png",
    readTime: "5 min read",
  },
  {
    id: "2",
    slug: "shirodhara-stress-relief",
    title: "Why Shirodhara is the Ultimate Stress Relief Therapy",
    excerpt: "In our fast-paced modern world, the ancient therapy of Shirodhara offers unparalleled relaxation for the nervous system.",
    content: "Shirodhara, from the Sanskrit words 'Shiro' (head) and 'Dhara' (flow), involves the gentle, continuous pouring of warm medicated oil over the forehead (the 'third eye'). This rhythmic process induces a state of profound mental calmness, akin to deep meditation. It works by regulating the nervous system, reducing cortisol levels, and pacifying the Vata dosha, making it highly effective for chronic stress, insomnia, and anxiety disorders.",
    date: "June 05, 2026",
    author: "Dr. Rajesh Kumar",
    category: "Treatments",
    imagePath: "/images/blog/shirodhara-stress.png",
    readTime: "4 min read",
  },
  {
    id: "3",
    slug: "ayurvedic-digestion-habits",
    title: "7 Ayurvedic Habits for a Healthy Digestive System",
    excerpt: "Ayurveda considers digestion (Agni) the cornerstone of health. Learn simple, daily habits to optimize your digestion and boost immunity.",
    content: "According to Ayurveda, a strong digestive fire (Agni) is essential for health, while a weak Agni leads to the accumulation of toxins (Ama). Simple habits can profoundly impact your digestion: 1. Drink warm water upon waking. 2. Eat your largest meal at noon when the sun (and Pitta) is highest. 3. Avoid ice-cold drinks during meals. 4. Incorporate digestive spices like ginger, cumin, and fennel. 5. Eat only when genuinely hungry. 6. Leave a quarter of your stomach empty after meals. 7. Take a short walk after eating.",
    date: "May 28, 2026",
    author: "Dr. Priya Sharma",
    category: "Lifestyle",
    imagePath: "/images/blog/ayurvedic-digestion.png",
    readTime: "6 min read",
  },
  {
    id: "4",
    slug: "panchakarma-detox",
    title: "Panchakarma: The Ultimate Ayurvedic Detoxification",
    excerpt: "Cleanse your body of deep-rooted toxins and restore your natural state of health with the profound Panchakarma therapy.",
    content: "Panchakarma, meaning 'five actions', is the most potent detoxification process in Ayurveda. It is designed to safely and effectively clear toxins (Ama) from the deep tissues of the body. The process begins with preparation (Purvakarma) involving oil massage and sweating therapies. This is followed by the main cleansing procedures, tailored to individual doshic imbalances. Regular Panchakarma not only prevents disease but actively reverses the aging process, boosts immunity, and brings unparalleled mental clarity.",
    date: "May 15, 2026",
    author: "Dr. Ananya Nair",
    category: "Treatments",
    imagePath: "/images/blog/panchakarma-detox.png",
    readTime: "8 min read",
  }
]
