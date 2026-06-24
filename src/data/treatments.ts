/**
 * ═══════════════════════════════════════════════════
 * Treatments Data — Signature Ayurvedic Therapies
 * ═══════════════════════════════════════════════════
 * Structured data for featured treatments on the homepage
 * and the full treatments page.
 */

export interface Treatment {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  benefits: string[]
  duration: string
  imagePath: string
  iconName: string
  featured: boolean
}

export const treatments: Treatment[] = [
  {
    id: "abhyangam",
    title: "Abhyangam",
    subtitle: "Warm Herbal Oil Massage",
    description: "A full-body therapeutic massage using individually selected warm medicated oils. Highly beneficial for joint health, muscle stiffness, sleep improvement, and blood circulation.",
    longDescription: "Abhyangam is far more than a massage — it is a deeply nourishing therapy where warm medicated oils penetrate the seven tissue layers (Dhatus) of the body. Our therapists use rhythmic strokes calibrated to your body type, promoting lymphatic drainage and releasing accumulated tension.",
    benefits: [
      "Relieves chronic body aches",
      "Nourishes all seven tissue layers",
      "Improves sleep quality",
      "Enhances blood circulation",
      "Reduces stress hormones"
    ],
    duration: "60 – 90 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Activity",
    featured: true
  },
  {
    id: "shirodhara",
    title: "Shirodhara",
    subtitle: "Continuous Oil Stream Therapy",
    description: "A deeply relaxing therapy where a continuous, rhythmic stream of warm herbal oil is poured onto the forehead, targeting the nervous system and inducing profound mental calm.",
    longDescription: "Shirodhara is the jewel of Ayurvedic mind therapies. A steady stream of warm, herb-infused oil flows onto the Ajna Marma (third eye point) on the forehead, creating a profoundly calming effect on the central nervous system. This ancient practice is especially effective for anxiety, insomnia, and neurological conditions.",
    benefits: [
      "Reduces anxiety & chronic stress",
      "Treats insomnia & sleep disorders",
      "Relieves migraines & headaches",
      "Calms the nervous system",
      "Improves concentration & focus"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/shirodhara-v2.png",
    iconName: "Flame",
    featured: true
  },
  {
    id: "nasyam",
    title: "Nasyam",
    subtitle: "Nasal Administration Therapy",
    description: "An essential Panchakarma therapy involving the administration of medicated oils or powders through the nasal passages to cleanse the head and neck region.",
    longDescription: "Nasyam is a powerful Ayurvedic therapy focused on the head and neck. By administering medicated oils, juices, or powders through the nasal passages, it clears blockages, relieves sinus congestion, and calms the mind. It is highly effective for migraines, sinusitis, and hormonal imbalances.",
    benefits: [
      "Clears sinus congestion",
      "Relieves chronic migraines",
      "Balances hormones",
      "Improves memory & vision",
      "Strengthens the neck and shoulders"
    ],
    duration: "30 – 45 Minutes",
    imagePath: "/images/treatments/nasyam-v2.png",
    iconName: "Wind",
    featured: true
  },
  {
    id: "facial-herbal",
    title: "Herbal Facial",
    subtitle: "Ayurvedic Skin Rejuvenation",
    description: "Restore your natural glow with our signature herbal facial using traditional Ayurvedic ingredients.",
    longDescription: "Our Herbal Facial is a completely natural, chemical-free skin treatment that uses a bespoke blend of Ayurvedic herbs, fresh fruit extracts, and healing muds. It deeply cleanses, exfoliates, and nourishes the skin, leaving a radiant, youthful glow.",
    benefits: [
      "Restores natural skin glow",
      "Removes dead skin cells",
      "Deeply hydrates and nourishes",
      "Reduces blemishes and pigmentation",
      "100% chemical-free ingredients"
    ],
    duration: "60 Minutes",
    imagePath: "/images/treatments/herbal-facial-v2.png",
    iconName: "Sparkles",
    featured: true
  },
  {
    id: "pizhichil",
    title: "Pizhichil",
    subtitle: "Royal Oil Bath Therapy",
    description: "Known as the 'King of Therapies,' Pizhichil combines warm medicated oil pouring with gentle massage strokes — historically reserved for Kerala royalty for ultimate rejuvenation.",
    longDescription: "Pizhichil is among the most luxurious of Ayurvedic therapies, historically reserved for the royal families of ancient India. Warm streams of medicated oil are continuously poured across the body while therapists perform synchronized massage strokes. This dual-action therapy provides unparalleled rejuvenation for degenerative conditions and overall vitality.",
    benefits: [
      "Complete body rejuvenation",
      "Treats paralysis & nerve disorders",
      "Improves muscle tone & vitality",
      "Nourishes the entire body deeply",
      "Anti-aging & longevity benefits"
    ],
    duration: "60 – 90 Minutes",
    imagePath: "/images/treatments/pizhichil-v2.png",
    iconName: "Sparkles",
    featured: true
  },
  {
    id: "elakizhi",
    title: "Elakizhi",
    subtitle: "Herbal Leaf Bolus Therapy",
    description: "Anti-inflammatory boluses of fresh medicinal leaves and herbs, heated and applied to affected areas to reduce pain, swelling, and stiffness in joints and muscles.",
    longDescription: "Elakizhi employs boluses packed with freshly gathered anti-inflammatory herbs and medicinal leaves, heated in warm medicated oils and applied methodically across the body. This therapy excels at targeting localized inflammation, arthritis, sports injuries, and frozen shoulder conditions.",
    benefits: [
      "Powerful anti-inflammatory action",
      "Reduces joint swelling & stiffness",
      "Improves mobility & flexibility",
      "Effective for sports injuries",
      "Alleviates arthritis symptoms"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/elakizhi-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "njavarakizhi",
    title: "Njavara Kizhi",
    subtitle: "Medicated Rice Bolus Therapy",
    description: "A unique traditional therapy using boluses of cooked Njavara rice dipped in warm medicated milk, applied to the body to nourish muscles, relieve pain, and rejuvenate the skin.",
    longDescription: "Njavarakizhi is a uniquely authentic specialty where boluses of specially prepared Njavara rice are dipped in warm herbal milk decoction and applied across the body in systematic strokes. This dual-action therapy simultaneously nourishes and detoxifies, making it invaluable for musculoskeletal and neurological conditions.",
    benefits: [
      "Nourishes muscles & joints",
      "Relieves chronic pain",
      "Rejuvenates skin texture",
      "Strengthens nervous system",
      "Promotes tissue regeneration"
    ],
    duration: "60 – 90 Minutes",
    imagePath: "/images/treatments/njavarakizhi-v2.png",
    iconName: "HeartPulse",
    featured: true
  },
  {
    id: "marma-abhyangam",
    title: "Marma Abhyangam",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Marma Abhyangam, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Marma Abhyangam is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "podi-kizhi",
    title: "Podi Kizhi",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Podi Kizhi, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Podi Kizhi is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "aavi-kizhi-aromatic-herbal-pouch",
    title: "Aavi Kizhi (Aromatic Herbal Pouch)",
    subtitle: "Rejuvenating & Restorative Ayurvedic Care",
    description: "Experience the profound healing benefits of Aavi Kizhi (Aromatic Herbal Pouch), traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Aavi Kizhi (Aromatic Herbal Pouch) is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Promotes deep physical and mental relaxation",
      "Restores natural balance and vitality",
      "Tailored specifically to your unique dosha profile",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "naranga-kizhi",
    title: "Naranga Kizhi",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Naranga Kizhi, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Naranga Kizhi is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "udvarthanam-herbal-powder-massage",
    title: "Udvarthanam (Herbal Powder Massage)",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Udvarthanam (Herbal Powder Massage), traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Udvarthanam (Herbal Powder Massage) is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "utsadanam",
    title: "Utsadanam",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Utsadanam, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Utsadanam is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "ksheeradhara",
    title: "Ksheeradhara",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Ksheeradhara, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Ksheeradhara is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "kashayadhara",
    title: "Kashayadhara",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Kashayadhara, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Kashayadhara is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "pichu",
    title: "Pichu",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Pichu, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Pichu is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "prishta-vasti",
    title: "Prishta Vasti",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Prishta Vasti, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Prishta Vasti is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "kati-vasti",
    title: "Kati Vasti",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Kati Vasti, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Kati Vasti is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "janu-vasti",
    title: "Janu Vasti",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Janu Vasti, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Janu Vasti is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "greeva-vasti",
    title: "Greeva Vasti",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Greeva Vasti, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Greeva Vasti is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "tharpanam",
    title: "Tharpanam",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Tharpanam, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Tharpanam is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "akshi-dhara",
    title: "Akshi dhara",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Akshi dhara, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Akshi dhara is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "thalapothichil",
    title: "Thalapothichil",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Thalapothichil, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Thalapothichil is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "nasya-shodhana",
    title: "Nasya shodhana",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Nasya shodhana, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Nasya shodhana is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "karnapoornam",
    title: "Karnapoornam",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Karnapoornam, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Karnapoornam is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "lepam",
    title: "Lepam",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Lepam, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Lepam is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "snehavasthy",
    title: "Snehavasthy",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Snehavasthy, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Snehavasthy is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  },
  {
    id: "shirovasti",
    title: "Shirovasti",
    subtitle: "Authentic Ayurvedic Therapy",
    description: "Experience the profound healing benefits of Shirovasti, traditionally formulated to restore balance and harmony to the body and mind.",
    longDescription: "Shirovasti is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.",
    benefits: [
      "Restores physical and mental balance",
      "Promotes deep relaxation",
      "Enhances natural immunity",
      "Improves circulation and vitality",
      "Relieves accumulated stress"
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/abhyangam-v2.png",
    iconName: "Leaf",
    featured: true
  }
];

/** Only featured treatments for homepage display */
export const featuredTreatments = treatments.filter((t) => t.featured);
