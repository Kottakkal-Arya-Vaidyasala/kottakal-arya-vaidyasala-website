const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      
      // Remove italic font-serif or font-serif from classNames
      content = content.replace(/italic font-serif /g, '');
      content = content.replace(/font-serif /g, '');
      // Edge cases where they are at the end of className strings
      content = content.replace(/ italic font-serif"/g, '"');
      content = content.replace(/ font-serif"/g, '"');
      // What if it's the only class? `className="font-serif"`
      content = content.replace(/className="font-serif"/g, 'className=""');
      content = content.replace(/className="italic font-serif"/g, 'className=""');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir('src');
console.log("Done");
