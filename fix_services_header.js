const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white whitespace-nowrap tracking-wide mb-3"',
  'className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white whitespace-normal sm:whitespace-nowrap tracking-wide mb-3 px-4 leading-tight"'
);

content = content.replace(
  'className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 font-light tracking-[0.15em] uppercase whitespace-nowrap"',
  'className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 font-light tracking-[0.15em] uppercase whitespace-normal sm:whitespace-nowrap px-4 leading-relaxed"'
);

fs.writeFileSync(file, content, 'utf8');
console.log("Success");
