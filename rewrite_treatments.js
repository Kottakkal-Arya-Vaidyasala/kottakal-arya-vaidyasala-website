const fs = require('fs');

let content = fs.readFileSync('src/sections/FeaturedTreatments.tsx', 'utf8');

const newGridContent = `
        {/* ── Responsive Grid Layout ────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {(showAll ? featuredTreatments : featuredTreatments.slice(0, 6)).map((treatment, idx) => {
            const isNavy = idx % 2 === 0;
            return (
              <AnimatedReveal
                key={treatment.id}
                direction="up"
                delay={(idx % 6) * 100}
              >
                <div
                  className={\`flex flex-col h-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group \${
                    isNavy ? "bg-[#1F2A44]" : "bg-white border border-gray-100"
                  }\`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={treatment.imagePath}
                      alt={treatment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 glass rounded-full px-2.5 py-1 flex items-center gap-1.5 border border-white/20">
                      <Clock className="w-3 h-3 text-brand-gold" />
                      <span className="text-[10px] font-semibold text-white tracking-wider">
                        {treatment.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-brand-gold mb-1.5 block">
                      Signature Therapy
                    </span>
                    <h3
                      className={\`font-heading text-lg font-bold mb-1.5 leading-tight \${isNavy ? "text-white" : "text-[#1F2A44]"}\`}
                    >
                      {treatment.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-brand-gold mb-3">
                      {treatment.subtitle}
                    </p>
                    <p
                      className={\`text-xs leading-relaxed mb-5 line-clamp-3 \${isNavy ? "text-gray-300" : "text-[#1F2A44]/80"}\`}
                    >
                      {treatment.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-brand-gold/20">
                      <Link href={\`/our-treatments#treatment-\${treatment.id}\`}>
                        <PrimaryButton
                          icon={<ArrowRight className="w-3.5 h-3.5" />}
                          className={\`w-full py-2.5 text-xs \${
                            isNavy
                              ? "bg-white text-brand-primary hover:bg-white/90 border-transparent shadow-none"
                              : "shadow-none"
                          }\`}
                        >
                          Book Now
                        </PrimaryButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
`;

// Replace from {/* ── Alternating Treatment Rows (Desktop) ────────────── */} down to just before {/* Toggle Button */}
const startMarker = "{/* ── Alternating Treatment Rows (Desktop) ────────────── */}";
const endMarker = "{/* Toggle Button */}";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + newGridContent.trim() + "\n\n        " + content.substring(endIndex);
    fs.writeFileSync('src/sections/FeaturedTreatments.tsx', content);
    console.log("Successfully replaced layout.");
} else {
    console.log("Failed to find markers.");
}
