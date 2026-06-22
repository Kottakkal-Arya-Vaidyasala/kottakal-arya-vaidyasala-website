const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import React, { useState, useEffect }')) {
  content = content.replace('import React, { useState } from "react";', 'import React, { useState, useEffect } from "react";');
}

const componentStartRegex = /export default function ServicesPage\(\) \{\s*const \{ openWhatsApp \} = useWhatsApp\(\);\s*const \[visibleCount, setVisibleCount\] = useState\(\d+\);\s*const \[activeTab, setActiveTab\] = useState\(0\);/;

const newComponentStart = `export default function ServicesPage() {
  const { openWhatsApp } = useWhatsApp();

  const [visibleCount, setVisibleCount] = useState(6); // Default to 6 for SSR matching desktop
  const [stepSize, setStepSize] = useState(6);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const updateLayout = () => {
      // lg breakpoint is 1024px. Below that we use 4 items. Above we use 6.
      const isMobile = window.innerWidth < 1024;
      const step = isMobile ? 4 : 6;
      setStepSize(step);
      
      // If the visible count is still at the initial default, snap it to the device's step size
      // This prevents someone on mobile from suddenly seeing 6 initially if they refresh.
      setVisibleCount((prev) => {
        if (prev <= 6) return step;
        return prev;
      });
    };
    
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);`;

if (content.match(componentStartRegex)) {
  content = content.replace(componentStartRegex, newComponentStart);
}

const buttonRegex = /\{servicesData\.length > 4 && \([\s\S]*?<PrimaryButton[\s\S]*?onClick=\{.*?\}[\s\S]*?className="px-8 py-4"[\s\S]*?>[\s\S]*?\{.*?\}[\s\S]*?<\/PrimaryButton>[\s\S]*?<\/div>[\s\S]*?\)\}/;

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

if (content.match(buttonRegex)) {
  content = content.replace(buttonRegex, newButton);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Success");
