const fs = require('fs');

const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update imports
if (!content.includes('ChevronDown')) {
  content = content.replace('Flower2, Droplets, Waves, Gem', 'Flower2, Droplets, Waves, Gem, ChevronDown, Plus');
}

// Update state
if (!content.includes('const [activeTab, setActiveTab]')) {
  content = content.replace('const [showAll, setShowAll] = useState(false);', 'const [showAll, setShowAll] = useState(false);\n  const [activeTab, setActiveTab] = useState(0);');
}

// Extract the section
const sectionRegex = /\s*\{\/\* ── Who Needs Our Therapies\? \(Advantages\) ───────────── \*\/\}\n\s*<section className="pt-12 pb-24 bg-brand-cream relative">[\s\S]*?<\/section>/;

const match = content.match(sectionRegex);
if (match) {
  let section = match[0];
  
  // Create new section
  const newSection = `
      {/* ── Who Needs Our Therapies? (Advantages) ───────────── */}
      <section className="pt-16 pb-24 bg-brand-cream relative">
        <Container className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-4 block">
              Tailored For You
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-primary mb-6">
              Which Therapy is <span className="font-serif text-brand-gold">Right For You?</span>
            </h2>
            <p className="text-base text-brand-grey max-w-2xl mx-auto font-light leading-relaxed">
              Our Ayurvedic therapies are customized for specific wellness needs. Discover the advantages and find the perfect treatment category for your lifestyle.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {[
              {
                icon: <Flower2 className="w-6 h-6" strokeWidth={1.5} />,
                title: "Stress & Mental Fatigue",
                forWhom: "Busy professionals, students, and anyone experiencing chronic stress or sleep issues.",
                advantages: "Calms the nervous system, restores mental clarity, and deeply relaxes the mind.",
                therapies: "Ease Your Mind, Stress Management",
              },
              {
                icon: <Droplets className="w-6 h-6" strokeWidth={1.5} />,
                title: "Detoxification & Healing",
                forWhom: "Individuals feeling sluggish, recovering from illness, or seeking systemic balance.",
                advantages: "Flushes out deep-seated toxins (Ama), boosts immunity, and balances Doshas.",
                therapies: "Panchakarma, Detox, Exclusive Packages",
              },
              {
                icon: <Waves className="w-6 h-6" strokeWidth={1.5} />,
                title: "Physical Tension & Pain",
                forWhom: "Athletes, office workers with posture issues, or those with chronic body aches.",
                advantages: "Releases muscle tension, improves circulation, and clears energetic blockages.",
                therapies: "Deep Tissue, Hotstone, Wellness Treatments",
              },
              {
                icon: <Gem className="w-6 h-6" strokeWidth={1.5} />,
                title: "Beauty & Anti-Aging",
                forWhom: "Anyone looking to restore their natural glow, combat aging, or address skin issues.",
                advantages: "Deeply nourishes skin, reduces signs of aging, and rejuvenates on a cellular level.",
                therapies: "Our Facials, Skin Care, Body Scrubs",
              },
            ].map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <div 
                  key={idx} 
                  className={\`border-b border-gray-100 last:border-b-0 transition-colors duration-300 \${isActive ? 'bg-[#FAFAFA]' : 'hover:bg-gray-50'}\`}
                >
                  <button
                    onClick={() => setActiveTab(isActive ? -1 : idx)}
                    className="w-full text-left px-6 py-6 md:px-10 md:py-8 flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <div className={\`p-3 rounded-full transition-colors duration-500 \${isActive ? 'bg-brand-gold text-white shadow-md' : 'bg-brand-cream text-brand-gold'}\`}>
                        {item.icon}
                      </div>
                      <h3 className={\`text-xl md:text-2xl font-heading font-bold transition-colors duration-300 \${isActive ? 'text-brand-gold' : 'text-brand-primary'}\`}>
                        {item.title}
                      </h3>
                    </div>
                    <div className={\`flex-shrink-0 transition-transform duration-500 \${isActive ? 'rotate-45 text-brand-gold' : 'text-gray-400'}\`}>
                      <Plus className="w-6 h-6" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 md:px-10 md:pb-10 pt-0 ml-[4.5rem] md:ml-20">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold block">Target Audience</span>
                              <p className="text-brand-grey text-sm leading-relaxed">{item.forWhom}</p>
                            </div>
                            <div className="space-y-2">
                              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold block">Key Advantages</span>
                              <p className="text-brand-grey text-sm leading-relaxed">{item.advantages}</p>
                            </div>
                          </div>
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-2">Recommended Therapies</span>
                            <p className="text-brand-primary font-medium text-sm">{item.therapies}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </section>`;

  content = content.replace(sectionRegex, newSection);
  
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success");
} else {
  console.log("Could not find section");
}
