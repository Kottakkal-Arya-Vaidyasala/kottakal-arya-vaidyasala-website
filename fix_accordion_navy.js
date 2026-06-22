const fs = require('fs');

const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div\s*key=\{idx\}\s*className=\{`border-b[^>]*>\s*<button[\s\S]*?<\/div>\s*\);\s*\}\)\}/;

const newMapping = `<div 
                  key={idx} 
                  className={\`border-b border-gray-100 last:border-b-0 transition-all duration-300 group \${isActive ? 'bg-[#F4F6F9]' : 'hover:bg-[#F8F9FB]'}\`}
                >
                  <button
                    onClick={() => setActiveTab(isActive ? -1 : idx)}
                    className="w-full text-left px-6 py-6 md:px-10 md:py-8 flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <div className={\`p-3 rounded-full transition-all duration-500 group-hover:scale-110 \${isActive ? 'bg-brand-primary text-white shadow-md' : 'bg-brand-cream text-brand-primary'}\`}>
                        {item.icon}
                      </div>
                      <h3 className={\`text-xl md:text-2xl font-heading font-bold transition-all duration-300 group-hover:translate-x-2 \${isActive ? 'text-brand-primary' : 'text-brand-primary/80'}\`}>
                        {item.title}
                      </h3>
                    </div>
                    <div className={\`flex-shrink-0 transition-transform duration-500 \${isActive ? 'rotate-45 text-brand-primary' : 'text-brand-primary/40 group-hover:text-brand-primary/70'}\`}>
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
                              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary block opacity-80">Target Audience</span>
                              <p className="text-[#1F2A44]/80 text-sm leading-relaxed">{item.forWhom}</p>
                            </div>
                            <div className="space-y-2">
                              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary block opacity-80">Key Advantages</span>
                              <p className="text-[#1F2A44]/80 text-sm leading-relaxed">{item.advantages}</p>
                            </div>
                          </div>
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary block mb-2 opacity-80">Recommended Therapies</span>
                            <p className="text-brand-primary font-bold text-sm">{item.therapies}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}`;

if (content.match(regex)) {
  content = content.replace(regex, newMapping);
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success");
} else {
  console.log("Could not find accordion mapping logic");
}
