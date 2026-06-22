const fs = require('fs');

const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace imports
content = content.replace(
  'import { ArrowRight, Clock, Brain, Leaf, Sparkles, Activity } from "lucide-react";',
  'import { ArrowRight, Clock, Flower2, Droplets, Waves, Gem } from "lucide-react";'
);

// Extract the section
const sectionRegex = /\s*\{\/\* ── Who Needs Our Therapies\? \(Advantages\) ───────────── \*\/\}\n\s*<section className="pt-24 pb-12 bg-brand-cream relative">[\s\S]*?<\/section>/;

const match = content.match(sectionRegex);
if (match) {
  let section = match[0];
  // Remove the section from its current location
  content = content.replace(sectionRegex, '');
  
  // Modify the section contents:
  // 1. Change icons
  section = section.replace(/<Brain className="w-8 h-8 text-brand-gold mb-4" \/>/g, '<Flower2 className="w-8 h-8 text-brand-gold mb-4" strokeWidth={1.5} />');
  section = section.replace(/<Leaf className="w-8 h-8 text-brand-gold mb-4" \/>/g, '<Droplets className="w-8 h-8 text-brand-gold mb-4" strokeWidth={1.5} />');
  section = section.replace(/<Activity className="w-8 h-8 text-brand-gold mb-4" \/>/g, '<Waves className="w-8 h-8 text-brand-gold mb-4" strokeWidth={1.5} />');
  section = section.replace(/<Sparkles className="w-8 h-8 text-brand-gold mb-4" \/>/g, '<Gem className="w-8 h-8 text-brand-gold mb-4" strokeWidth={1.5} />');
  
  // 2. Remove italic
  section = section.replace('className="italic font-serif text-brand-gold"', 'className="font-serif text-brand-gold"');
  
  // 3. Change padding to pt-12 pb-24
  section = section.replace('className="pt-24 pb-12 bg-brand-cream relative"', 'className="pt-12 pb-24 bg-brand-cream relative"');

  // Insert it before </main>
  content = content.replace('    </main>', section + '\n    </main>');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success");
} else {
  console.log("Could not find section");
}
