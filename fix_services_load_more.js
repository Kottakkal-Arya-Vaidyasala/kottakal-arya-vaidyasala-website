const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace state
content = content.replace(
  'const [showAll, setShowAll] = useState(false);',
  'const [visibleCount, setVisibleCount] = useState(4);'
);
// In case the state has already been modified or isn't exactly that
if (!content.includes('const [visibleCount, setVisibleCount] = useState(4);')) {
  content = content.replace(/const \[showAll,\s*setShowAll\]\s*=\s*useState\(false\);/, 'const [visibleCount, setVisibleCount] = useState(4);');
}

// Replace the slice logic
content = content.replace(
  /\(showAll \? servicesData : servicesData\.slice\(0, 6\)\)\.map\(/,
  'servicesData.slice(0, visibleCount).map('
);

// Replace the button logic
const buttonRegex = /\{servicesData\.length > 6 && \([\s\S]*?<PrimaryButton[\s\S]*?onClick=\{.*?\}[\s\S]*?className="px-8 py-4"[\s\S]*?>[\s\S]*?\{.*?\}[\s\S]*?<\/PrimaryButton>[\s\S]*?<\/div>[\s\S]*?\)\}/;

const newButton = `{servicesData.length > 4 && (
            <div className="mt-12 flex justify-center relative z-10">
              <PrimaryButton
                onClick={() => {
                  if (visibleCount >= servicesData.length) {
                    setVisibleCount(4);
                  } else {
                    setVisibleCount(prev => prev + 4);
                  }
                }}
                className="px-8 py-4"
              >
                {visibleCount >= servicesData.length ? "Show Less Offerings" : "Show More Offerings"}
              </PrimaryButton>
            </div>
          )}`;

if (content.match(buttonRegex)) {
  content = content.replace(buttonRegex, newButton);
} else {
  // alternative regex if formatting is different
  const altRegex = /\{servicesData\.length > \d+ && \(\s*<div className="mt-12 flex justify-center relative z-10">\s*<PrimaryButton[^>]*onClick=\{.*?\}[\s\S]*?<\/PrimaryButton>\s*<\/div>\s*\)\}/;
  if (content.match(altRegex)) {
    content = content.replace(altRegex, newButton);
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log("Success");
