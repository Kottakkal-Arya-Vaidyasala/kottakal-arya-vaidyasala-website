const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add openCategory state
const stateInsert = `  const [activeTab, setActiveTab] = useState(0);`;
if (!content.includes('const [openCategory, setOpenCategory]')) {
  content = content.replace(stateInsert, `  const [activeTab, setActiveTab] = useState(0);\n  const [openCategory, setOpenCategory] = useState<string | null>("Ayurveda Therapies");`);
}

// 2. Find the start of the grid
const gridStartRegex = /<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12 max-w-7xl mx-auto">/;
const gridStartIndex = content.search(gridStartRegex);

if (gridStartIndex === -1) {
  console.log("Could not find grid start");
  process.exit(1);
}

// Find the end of the container section that wraps the grid and button.
// It ends right before `</Container>\n      </section>\n      {/* ── Who Needs Our Therapies? (Advantages) ───────────── */}`
// Actually, let's just replace from gridStart to the end of the button section.
const buttonEndRegex = /<\/PrimaryButton>\s*<\/div>\s*\)\}/;
const buttonEndMatch = content.match(buttonEndRegex);

if (!buttonEndMatch) {
  console.log("Could not find button end");
  process.exit(1);
}

const buttonEndIndex = buttonEndMatch.index + buttonEndMatch[0].length;

const beforeGrid = content.slice(0, gridStartIndex);
const afterButton = content.slice(buttonEndIndex);

const newUI = `
          {/* Featured Treatments (Most Wanted) */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-8 text-center">Featured Treatments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
              {servicesData.filter(s => ["ayr-abhyangam", "ayr-shirodhara", "prog-panchakarma", "ayr-navara", "well-deep", "facial-herbal"].includes(s.id)).map(
                (service, idx) => {
                  const isNavy = idx % 2 === 0;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                      <div
                        id={\`service-\${service.id}\`}
                        className={\`flex flex-col h-full rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group scroll-mt-32 \${
                          isNavy
                            ? "bg-[#1F2A44]"
                            : "bg-white border border-gray-100"
                        }\`}
                      >
                        <div className="relative h-48 w-full overflow-hidden shrink-0">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 glass rounded-full px-3 py-1 flex items-center gap-1.5 border border-white/20">
                            <Clock className="w-3.5 h-3.5 text-brand-gold" />
                            <span className="text-xs font-semibold text-white tracking-wider">
                              {service.duration}
                            </span>
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-2 block">
                            {service.category}
                          </span>
                          <h3
                            className={\`font-heading text-xl font-bold mb-2 leading-tight \${isNavy ? "text-white" : "text-[#1F2A44]"}\`}
                          >
                            {service.title}
                          </h3>
                          <p
                            className={\`text-sm leading-relaxed mb-6 line-clamp-3 mt-1 \${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}\`}
                          >
                            {service.description}
                          </p>
                          <div className="mt-auto pt-4 border-t border-brand-gold/20">
                            <PrimaryButton
                              onClick={() => openWhatsApp({ treatment: service.title })}
                              icon={<ArrowRight className="w-4 h-4" />}
                              className={\`w-full py-3 text-sm \${
                                isNavy
                                  ? "bg-white text-brand-primary hover:bg-white/90 border-transparent shadow-none"
                                  : "shadow-none"
                              }\`}
                            >
                              Book Now
                            </PrimaryButton>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>

          {/* Comprehensive Treatments List (Accordion Style) */}
          <div className="max-w-4xl mx-auto mt-20">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-8 text-center">Explore All Offerings</h3>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {Array.from(new Set(servicesData.map(s => s.category))).filter(c => c !== "Exclusive Packages").map((category, idx) => {
                const categoryServices = servicesData.filter(s => s.category === category && !["ayr-abhyangam", "ayr-shirodhara", "prog-panchakarma", "ayr-navara", "well-deep", "facial-herbal"].includes(s.id));
                
                if (categoryServices.length === 0) return null;

                const isOpen = openCategory === category;

                return (
                  <div key={idx} className="border-b border-gray-100 last:border-b-0">
                    <button
                      onClick={() => setOpenCategory(isOpen ? null : category)}
                      className={\`w-full text-left px-6 py-5 flex items-center justify-between transition-colors duration-300 \${isOpen ? 'bg-[#F4F6F9]' : 'hover:bg-[#F8F9FB]'}\`}
                    >
                      <h4 className={\`font-heading font-bold text-lg md:text-xl \${isOpen ? 'text-brand-primary' : 'text-gray-700'}\`}>
                        {category} <span className="text-sm font-normal text-gray-400 ml-2">({categoryServices.length})</span>
                      </h4>
                      <ChevronDown className={\`w-5 h-5 text-brand-primary transition-transform duration-300 \${isOpen ? 'rotate-180' : ''}\`} />
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-white"
                        >
                          <div className="px-6 pb-6 pt-2 divide-y divide-gray-50">
                            {categoryServices.map((service, sIdx) => (
                              <div key={sIdx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-1">
                                    <h5 className="font-bold text-[#1F2A44] text-base group-hover:text-brand-gold transition-colors">{service.title}</h5>
                                    <span className="text-[10px] font-semibold tracking-wider uppercase text-brand-primary bg-brand-primary/5 px-2 py-0.5 rounded-full flex items-center gap-1">
                                      <Clock className="w-3 h-3" /> {service.duration}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{service.description}</p>
                                </div>
                                <button 
                                  onClick={() => openWhatsApp({ treatment: service.title })}
                                  className="text-xs font-semibold text-brand-primary border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-colors px-4 py-2 rounded-full whitespace-nowrap self-start sm:self-center"
                                >
                                  Book Session
                                </button>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
`;

let finalContent = beforeGrid + newUI + afterButton;

fs.writeFileSync(file, finalContent, 'utf8');
console.log("Success");
