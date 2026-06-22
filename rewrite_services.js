const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Find start and end of servicesData
const startIdx = content.indexOf('const servicesData = [');
const endIdx = content.indexOf('export default function ServicesPage() {');

if (startIdx === -1 || endIdx === -1) {
    console.error("Could not find start or end index.");
    process.exit(1);
}

const beforeServicesData = content.slice(0, startIdx);
const afterServicesData = content.slice(endIdx);

const newServicesDataStr = `const servicesData = [
  // Body Scrubs & Wraps
  { id: "scrub-mud", category: "Body Scrubs & Wraps", title: "Aromatic moisturizing mud wrap", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Deeply hydrate and nourish your skin with our aromatic mud wrap." },
  { id: "scrub-herbal", category: "Body Scrubs & Wraps", title: "Herbal Scrub with aromatic massage", duration: "60 min", image: "/images/treatments/panchakarma1.png", description: "Exfoliate and refresh your body with a traditional herbal scrub." },

  // Our Facials - Shine Bright
  { id: "facial-herbal", category: "Our Facials - Shine Bright", title: "Herbal Facial", duration: "60 min", image: "/images/treatments/shirodhara.png", description: "Restore your natural glow with our signature herbal facial." },
  { id: "facial-navara", category: "Our Facials - Shine Bright", title: "Navara Facial", duration: "60 min", image: "/images/treatments/njavarakizhi.png", description: "A deeply nourishing facial using traditional Navara rice." },

  // Ease Your Mind
  { id: "mind-vamasabhyangam", category: "Ease Your Mind", title: "Vamasabhyangam (back massage)", duration: "30 min", image: "/images/treatments/pizhichil.png", description: "Relieve tension and stiffness in your back with targeted massage therapy." },
  { id: "mind-padabhyangam", category: "Ease Your Mind", title: "Padabhyangam (foot reflexology)", duration: "55 min", image: "/images/treatments/elakizhi.png", description: "Relax and restore balance throughout your body." },
  { id: "mind-shirobhyangam", category: "Ease Your Mind", title: "Shirobhyangam (Indian head massage)", duration: "30 min", image: "/images/treatments/abhyangam.png", description: "A deeply calming head massage that relieves stress and improves sleep." },
  { id: "mind-mukhabhyangam", category: "Ease Your Mind", title: "Mukhabhyangam (Face care)", duration: "30 min", image: "/images/treatments/panchakarma1.png", description: "Gentle facial care and massage to relieve facial tension." },

  // Our Programs
  { id: "prog-panchakarma", category: "Our Programs", title: "Panchakarma", duration: "Custom", image: "/images/treatments/shirodhara.png", description: "The ultimate Ayurvedic detoxification and purification therapy." },
  { id: "prog-skin", category: "Our Programs", title: "Skin Care", duration: "Custom", image: "/images/treatments/njavarakizhi.png", description: "Specialized programs for chronic skin conditions." },
  { id: "prog-detox", category: "Our Programs", title: "Detox", duration: "Custom", image: "/images/treatments/elakizhi.png", description: "Programs designed to eliminate accumulated toxins." },
  { id: "prog-stress", category: "Our Programs", title: "Stress Management", duration: "Custom", image: "/images/treatments/pizhichil.png", description: "Holistic approaches to calm the nervous system." },
  { id: "prog-rejuvenation", category: "Our Programs", title: "Rejuvenation", duration: "Custom", image: "/images/treatments/abhyangam.png", description: "Rasayana therapies to slow aging and boost immunity." },
  { id: "prog-prenatal-mother", category: "Our Programs", title: "Prenatal & Post natal are for Mother", duration: "Custom", image: "/images/treatments/panchakarma1.png", description: "Specialized nurturing care supporting mothers." },
  { id: "prog-neonatal", category: "Our Programs", title: "Neonatal Care for Babies", duration: "Custom", image: "/images/treatments/shirodhara.png", description: "Gentle, traditional Ayurvedic care to support infant development." },
  { id: "prog-slimming", category: "Our Programs", title: "Body Slimming", duration: "Custom", image: "/images/treatments/njavarakizhi.png", description: "Natural, sustainable Ayurvedic weight management." },

  // Ayurveda Therapies
  { id: "ayr-abhyangam", category: "Ayurveda Therapies", title: "Abhyangam", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Deeply nourishing whole-body warm oil massage." },
  { id: "ayr-marma", category: "Ayurveda Therapies", title: "Marma abhyangam", duration: "60 min", image: "/images/treatments/panchakarma1.png", description: "Specialized massage targeting vital energy points." },
  { id: "ayr-podi", category: "Ayurveda Therapies", title: "Podi Kizhi", duration: "60 min", image: "/images/treatments/elakizhi.png", description: "Warm herbal powder poultice massage for joint and muscle pain." },
  { id: "ayr-avi", category: "Ayurveda Therapies", title: "Avi kizhi (Aromatic herbal pouch)", duration: "60 min", image: "/images/treatments/njavarakizhi.png", description: "Aromatic herbal pouch therapy for deep relaxation." },
  { id: "ayr-navara", category: "Ayurveda Therapies", title: "Navara Kizhi (Rice pouch therapy)", duration: "60 min", image: "/images/treatments/pizhichil.png", description: "Nourishing rice pouch therapy to strengthen muscles." },
  { id: "ayr-udvarthnam", category: "Ayurveda Therapies", title: "Udvarthnam (Herbal powder massage)", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Invigorating dry herbal powder massage for weight management." },
  { id: "ayr-shirodhara", category: "Ayurveda Therapies", title: "Shirodhara", duration: "60 min", image: "/images/treatments/shirodhara.png", description: "Continuous stream of warm medicated oil on the forehead." },
  { id: "ayr-ksheeradhara", category: "Ayurveda Therapies", title: "Ksheeradhara", duration: "60 min", image: "/images/treatments/panchakarma1.png", description: "Continuous stream of medicated milk over the body." },
  { id: "ayr-kashayadhara", category: "Ayurveda Therapies", title: "Kashayadhara", duration: "60 min", image: "/images/treatments/elakizhi.png", description: "Continuous stream of herbal decoctions over the body." },
  { id: "ayr-pizhichil", category: "Ayurveda Therapies", title: "Pizhichil", duration: "60 min", image: "/images/treatments/pizhichil.png", description: "Luxurious warm oil bath combined with gentle massage." },
  { id: "ayr-prishta", category: "Ayurveda Therapies", title: "Prishta vasti", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Specialized oil pooling therapy for the entire back." },
  { id: "ayr-kati", category: "Ayurveda Therapies", title: "Kati vasti", duration: "30 min", image: "/images/treatments/njavarakizhi.png", description: "Targeted oil pooling therapy for lower back pain." },
  { id: "ayr-janu", category: "Ayurveda Therapies", title: "Janu vasti", duration: "30 min", image: "/images/treatments/shirodhara.png", description: "Targeted oil pooling therapy for knee joint health." },
  { id: "ayr-greeva", category: "Ayurveda Therapies", title: "Greeva vasti", duration: "30 min", image: "/images/treatments/panchakarma1.png", description: "Targeted oil pooling therapy for neck and cervical spine." },
  { id: "ayr-tharpanam", category: "Ayurveda Therapies", title: "Tharpanam", duration: "45 min", image: "/images/treatments/elakizhi.png", description: "Rejuvenating therapy for the eyes using medicated ghee." },
  { id: "ayr-akshi", category: "Ayurveda Therapies", title: "Akshi dhara", duration: "30 min", image: "/images/treatments/pizhichil.png", description: "Cleansing and cooling continuous pouring of liquids over eyes." },
  { id: "ayr-thalapothichil", category: "Ayurveda Therapies", title: "Thalapothichil", duration: "60 min", image: "/images/treatments/abhyangam.png", description: "Cooling herbal paste applied to the head for stress relief." },
  { id: "ayr-nasya", category: "Ayurveda Therapies", title: "Nasya shodhana", duration: "30 min", image: "/images/treatments/njavarakizhi.png", description: "Nasal administration of medicated oils for sinus health." },
  { id: "ayr-lepam", category: "Ayurveda Therapies", title: "Lepam", duration: "30 min", image: "/images/treatments/shirodhara.png", description: "Application of medicinal herbal paste for localized pain." },
  { id: "ayr-sneha", category: "Ayurveda Therapies", title: "Snehavasthy", duration: "30 min", image: "/images/treatments/panchakarma1.png", description: "Therapeutic oil enema for detoxification and Vata balance." },
  { id: "ayr-shirovasti", category: "Ayurveda Therapies", title: "Shirovasti", duration: "60 min", image: "/images/treatments/elakizhi.png", description: "Warm medicated oil retained on the head using a cap." },

  // Our Wellness Treatments
  { id: "well-deep", category: "Our Wellness Treatments", title: "Deep Tissue Massage", duration: "60 min", image: "/images/treatments/pizhichil.png", description: "Intensive massage therapy targeting deep muscle layers." },
  { id: "well-prenatal", category: "Our Wellness Treatments", title: "Prenatal and Postnatal Care", duration: "Custom", image: "/images/treatments/abhyangam.png", description: "Soothing sessions dedicated to maternal well-being." },
  { id: "well-chakra", category: "Our Wellness Treatments", title: "Chakra balancing Hotstone massage", duration: "90 min", image: "/images/treatments/shirodhara.png", description: "Energy alignment using heated stones to melt away stress." },
  { id: "well-lymphatic", category: "Our Wellness Treatments", title: "Manual lymphatic drainage", duration: "60 min", image: "/images/treatments/njavarakizhi.png", description: "Gentle techniques to encourage lymph system drainage." }
];

`;

let finalContent = beforeServicesData + newServicesDataStr + afterServicesData;

// Now, insert the Exclusive section UI just before the grid starts.
// Find the grid: `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12 max-w-7xl mx-auto">`
const gridStartStr = '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12 max-w-7xl mx-auto">';

const exclusiveSectionUI = `
          {/* Our Exclusive Packages Section */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="bg-brand-cream/30 rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-gold/20 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center justify-between">
                
                <div className="w-full lg:w-1/2">
                  <span className="text-sm font-semibold tracking-widest uppercase text-brand-gold mb-3 block">Our Signature Care</span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-6">Experience our Exclusive Holistic Packages</h3>
                  
                  <ul className="space-y-4">
                    {["Doctors consultation", "Ayurveda therapies", "Dietary Plans", "Lifestyle modification advices"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                  {[
                    { title: "Bronze", duration: "7 Days", color: "from-[#CD7F32]/10 to-[#CD7F32]/5", border: "border-[#CD7F32]/30", text: "text-[#B87333]" },
                    { title: "Silver", duration: "14 Days", color: "from-[#E8E8E8]/50 to-transparent", border: "border-[#C0C0C0]/50", text: "text-[#808080]" },
                    { title: "Gold", duration: "21 Days", color: "from-[#FFD700]/10 to-[#FFD700]/5", border: "border-[#FFD700]/30", text: "text-[#D4AF37]" },
                    { title: "Platinum", duration: "28 Days", color: "from-[#E5E4E2]/20 to-[#E5E4E2]/5", border: "border-[#E5E4E2]/50", text: "text-[#7B7C7D]" }
                  ].map((pkg, i) => (
                    <div key={i} className={\`bg-gradient-to-br \${pkg.color} \${pkg.border} border rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 shadow-sm\`}>
                      <span className={\`text-sm font-semibold tracking-wider uppercase mb-1 \${pkg.text}\`}>{pkg.title}</span>
                      <span className="text-xl font-heading font-bold text-gray-900">{pkg.duration}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          `;

if (finalContent.includes(gridStartStr)) {
  finalContent = finalContent.replace(gridStartStr, exclusiveSectionUI + gridStartStr);
} else {
  console.log("Could not find grid string to inject exclusive UI");
}

fs.writeFileSync(file, finalContent, 'utf8');
console.log("Success");
