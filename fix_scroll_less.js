const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Ensure section has id
if (!content.includes('id="offerings"')) {
  // Find the section className="pt-12 pb-24 bg-white relative"
  // Actually, let's just add id to the section that has the heading "Our Exclusive Offerings"
  content = content.replace(
    '<section className="pt-12 pb-24 bg-white relative">',
    '<section id="offerings" className="pt-12 pb-24 bg-white relative">'
  );
}

// Update the click handler
const oldClickHandler = `onClick={() => {
                  if (visibleCount >= servicesData.length) {
                    setVisibleCount(stepSize);
                  } else {
                    setVisibleCount(prev => prev + stepSize);
                  }
                }}`;

const newClickHandler = `onClick={() => {
                  if (visibleCount >= servicesData.length) {
                    setVisibleCount(stepSize);
                    // Slight timeout to ensure layout shifts before scrolling, or just scroll immediately
                    setTimeout(() => {
                      document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  } else {
                    setVisibleCount(prev => prev + stepSize);
                  }
                }}`;

if (content.includes(oldClickHandler)) {
  content = content.replace(oldClickHandler, newClickHandler);
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success");
} else {
  console.log("Could not find exact click handler, trying regex");
  
  const regexHandler = /onClick=\{\(\) => \{\s*if \(visibleCount >= servicesData\.length\) \{\s*setVisibleCount\(stepSize\);\s*\} else \{\s*setVisibleCount\(prev => prev \+ stepSize\);\s*\}\s*\}\}/;
  if (content.match(regexHandler)) {
    content = content.replace(regexHandler, newClickHandler);
    fs.writeFileSync(file, content, 'utf8');
    console.log("Success with regex");
  } else {
    console.log("Failed to find click handler");
  }
}
