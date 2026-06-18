/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const replacements = [
  // Hero.tsx
  {
    file: 'src/sections/Hero.tsx',
    replacements: [
      { from: 'Authentic Kerala Ayurveda', to: 'Premium Ayurveda Medical Center' },
      { from: 'Ancient Wisdom Reimagined for Modern Abu Dhabi Living.', to: 'Premium Ayurveda Medical Center in Abu Dhabi.' }
    ]
  },
  // doctors.ts
  {
    file: 'src/data/doctors.ts',
    replacements: [
      { from: 'authentic Kerala Ayurvedic medicine', to: 'authentic Ayurvedic medicine' },
      { from: 'traditional village clinics in Kerala to', to: 'traditional ancestral clinics to' }
    ]
  },
  // testimonials.ts
  {
    file: 'src/data/testimonials.ts',
    replacements: [
      { from: 'authentic Kerala medicines', to: 'authentic Ayurvedic medicines' }
    ]
  },
  // site.ts
  {
    file: 'src/data/site.ts',
    replacements: [
      { from: 'Authentic Kerala Ayurveda in Abu Dhabi', to: 'Authentic Ayurveda in Abu Dhabi' }
    ]
  },
  // treatments.ts
  {
    file: 'src/data/treatments.ts',
    replacements: [
      { from: 'unique Kerala therapy', to: 'unique traditional therapy' },
      { from: 'uniquely Kerala specialty', to: 'uniquely authentic specialty' },
      { from: 'royal families of Kerala', to: 'royal families of ancient India' }
    ]
  },
  // FeaturedTreatments.tsx
  {
    file: 'src/sections/FeaturedTreatments.tsx',
    replacements: [
      { from: 'authentic Kerala herbal formulations', to: 'authentic traditional herbal formulations' }
    ]
  },
  // about-us/page.tsx
  {
    file: 'src/app/about-us/page.tsx',
    replacements: [
      { from: 'authentic Kerala Ayurveda', to: 'authentic Ayurveda' },
      { from: 'Kerala Ayurveda Heritage', to: 'Ayurveda Heritage' },
      { from: 'therapists from Kerala', to: 'expert therapists' },
      { from: 'traditional Kerala makers', to: 'traditional master herbalists' }
    ]
  },
  // LuxuryExperience.tsx
  {
    file: 'src/sections/LuxuryExperience.tsx',
    replacements: [
      { from: 'title: "Kerala Heritage"', to: 'title: "Ayurvedic Heritage"' },
      { from: 'Kerala Ayurvedic heritage', to: 'Ayurvedic heritage' },
      { from: 'traditional Kerala aesthetics', to: 'traditional Ayurvedic aesthetics' }
    ]
  },
  // WhyChooseUs.tsx
  {
    file: 'src/sections/WhyChooseUs.tsx',
    replacements: [
      { from: 'Authentic Kerala Heritage', to: 'Authentic Heritage' },
      { from: 'heart of Kerala, India', to: 'ancient origins of Ayurveda' },
      { from: 'authentic Kerala Ayurveda', to: 'authentic Ayurveda' }
    ]
  },
  // AboutPreview.tsx
  {
    file: 'src/sections/AboutPreview.tsx',
    replacements: [
      { from: 'Traditional Kerala Ayurveda', to: 'Traditional Ayurveda' },
      { from: 'healing heritage of Kerala', to: 'healing heritage of Ayurveda' }
    ]
  }
];

replacements.forEach(({ file, replacements: fileReplacements }) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    fileReplacements.forEach(({ from, to }) => {
      content = content.replace(new RegExp(from, 'g'), to);
    });

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
