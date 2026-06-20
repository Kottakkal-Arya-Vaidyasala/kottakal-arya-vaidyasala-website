const fs = require('fs');

const existingTreatments = [
  {
    id: "panchakarma",
    title: "Panchakarma",
    subtitle: "Five-Step Purification Therapy",
    description: "A comprehensive five-step purificatory therapy aimed at removing deep-seated toxins, restoring physiological balance, and strengthening immunity through time-tested detoxification protocols.",
    longDescription: "Panchakarma represents the cornerstone of Ayurvedic rejuvenation — a systematic, five-fold purification process that cleanses the body at the deepest cellular level. Our physicians customize each stage (Vamana, Virechana, Basti, Nasya, and Raktamokshana) based on your unique constitution and current health needs.",
    benefits: [
      "Expels accumulated toxins (Ama)",
      "Restores metabolic balance",
      "Strengthens natural immunity",
      "Slows the aging process",
      "Improves mental clarity",
    ],
    duration: "7 – 21 Days",
    imagePath: "/images/treatments/panchakarma1.png",
    iconName: "Flower",
    featured: true,
  },
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
      "Reduces stress hormones",
    ],
    duration: "60 – 90 Minutes",
    imagePath: "/images/treatments/abhyangam.png",
    iconName: "Activity",
    featured: true,
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
      "Improves concentration & focus",
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/shirodhara.png",
    iconName: "Flame",
    featured: true,
  },
  {
    id: "njavarakizhi",
    title: "Navara Kizhi (Rice Pouch Therapy)", // Merged with existing Njavarakizhi
    subtitle: "Medicated Rice Bolus Therapy",
    description: "A unique traditional therapy using boluses of cooked Njavara rice dipped in warm medicated milk, applied to the body to nourish muscles, relieve pain, and rejuvenate the skin.",
    longDescription: "Njavarakizhi is a uniquely authentic specialty where boluses of specially prepared Njavara rice are dipped in warm herbal milk decoction and applied across the body in systematic strokes. This dual-action therapy simultaneously nourishes and detoxifies, making it invaluable for musculoskeletal and neurological conditions.",
    benefits: [
      "Nourishes muscles & joints",
      "Relieves chronic pain",
      "Rejuvenates skin texture",
      "Strengthens nervous system",
      "Promotes tissue regeneration",
    ],
    duration: "60 – 90 Minutes",
    imagePath: "/images/treatments/njavarakizhi.png",
    iconName: "HeartPulse",
    featured: true,
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
      "Alleviates arthritis symptoms",
    ],
    duration: "45 – 60 Minutes",
    imagePath: "/images/treatments/elakizhi.png",
    iconName: "Leaf",
    featured: true,
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
      "Anti-aging & longevity benefits",
    ],
    duration: "60 – 90 Minutes",
    imagePath: "/images/treatments/pizhichil.png",
    iconName: "Sparkles",
    featured: true,
  },
];

const requestedList = [
  "Abhyangam",
  "Marma Abhyangam",
  "Podi Kizhi",
  "Avizhi Kizhi (Aromatic Herbal Pouch)",
  "Navara Kizhi (Rice Pouch Therapy)",
  "Naranga Kizhi",
  "Udvarthanam (Herbal Powder Massage)",
  "Utsadanam",
  "Shirodhara",
  "Ksheeradhara",
  "Kashayadhara",
  "Pizhichil",
  "Pichu",
  "Prishta Vasti",
  "Kati Vasti",
  "Janu Vasti",
  "Greeva Vasti",
  "Tharpanam",
  "Akshi dhara",
  "Thalapothichil",
  "Nasya shodhana",
  "Karnapoornam",
  "Lepam",
  "Snehavasthy",
  "Shirovasti"
];

const allTreatments = [];

// Add existing ones that aren't exactly duplicates
const existingMap = new Map();
existingTreatments.forEach(t => existingMap.set(t.title, t));

// Some titles might slightly mismatch, e.g., "Navara Kizhi" vs "Njavarakizhi"
existingMap.set("Abhyangam", existingTreatments.find(t => t.id === "abhyangam"));
existingMap.set("Shirodhara", existingTreatments.find(t => t.id === "shirodhara"));
existingMap.set("Navara Kizhi (Rice Pouch Therapy)", existingTreatments.find(t => t.id === "njavarakizhi"));
existingMap.set("Pizhichil", existingTreatments.find(t => t.id === "pizhichil"));

// We should preserve Panchakarma and Elakizhi at the front, if the user still wants them.
// Wait, user said "make our signature therapies as 6 cards... add these to the thrapies".
// I'll add the user's list after the existing ones if not present, but replace the duplicates.

const added = new Set();
existingTreatments.forEach(t => {
    allTreatments.push(t);
    added.add(t.title);
});

requestedList.forEach(name => {
    let t = existingMap.get(name);
    if (!t && !added.has(name)) {
        const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        t = {
            id,
            title: name,
            subtitle: "Authentic Ayurvedic Therapy",
            description: `Experience the profound healing benefits of ${name}, traditionally formulated to restore balance and harmony to the body and mind.`,
            longDescription: `${name} is a deeply therapeutic Ayurvedic treatment designed to address specific imbalances. Our expert practitioners customize this therapy to your unique constitution.`,
            benefits: [
                "Restores physical and mental balance",
                "Promotes deep relaxation",
                "Enhances natural immunity",
                "Improves circulation and vitality",
                "Relieves accumulated stress"
            ],
            duration: "45 – 60 Minutes",
            imagePath: "/images/treatments/abhyangam.png", // fallback image
            iconName: "Leaf",
            featured: true,
        };
        allTreatments.push(t);
        added.add(name);
    }
});

const fileContent = `/**
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

export const treatments: Treatment[] = ${JSON.stringify(allTreatments, null, 2).replace(/"([^"]+)":/g, '$1:')};

/** Only featured treatments for homepage display */
export const featuredTreatments = treatments.filter((t) => t.featured);
`;

fs.writeFileSync('src/data/treatments.ts', fileContent);
