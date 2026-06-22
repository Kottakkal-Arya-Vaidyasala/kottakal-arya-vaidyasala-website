const fs = require('fs');

const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Extract the section
const sectionRegex = /\s*\{\/\* ── Who Needs Our Therapies\? \(Advantages\) ───────────── \*\/\}\n\s*<section className="pt-12 pb-24 bg-brand-cream relative">[\s\S]*?<\/section>/;

const match = content.match(sectionRegex);
if (match) {
  let section = match[0];
  
  // We only want to change the text-brand-gold inside the cards, not the heading
  // The heading has: <span className="font-serif text-brand-gold">Right For You?</span>
  // So we will split the section, or just replace the specific strings.
  
  section = section.replace(/text-brand-gold mb-4/g, 'text-brand-primary mb-4');
  section = section.replace(/tracking-wider text-brand-gold/g, 'tracking-wider text-brand-primary');
  
  content = content.replace(sectionRegex, section);
  
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success");
} else {
  console.log("Could not find section");
}
