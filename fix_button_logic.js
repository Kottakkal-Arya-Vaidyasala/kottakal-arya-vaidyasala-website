const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the button section directly
const badButtonRegex = /\{servicesData\.length > \d+ && \([\s\S]*?<div className="mt-12 flex justify-center relative z-10">[\s\S]*?<PrimaryButton[\s\S]*?onClick=\{[\s\S]*?\}[\s\S]*?className="px-8 py-4"[\s\S]*?>[\s\S]*?<\/PrimaryButton>[\s\S]*?<\/div>[\s\S]*?\)\}/;

const newButton = `{servicesData.length > stepSize && (
            <div className="mt-12 flex justify-center relative z-10">
              <PrimaryButton
                onClick={() => {
                  if (visibleCount >= servicesData.length) {
                    setVisibleCount(stepSize);
                  } else {
                    setVisibleCount(prev => prev + stepSize);
                  }
                }}
                className="px-8 py-4"
              >
                {visibleCount >= servicesData.length ? "Show Less Offerings" : "Show More Offerings"}
              </PrimaryButton>
            </div>
          )}`;

if (content.match(badButtonRegex)) {
  content = content.replace(badButtonRegex, newButton);
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success");
} else {
  console.log("Regex not found");
}
