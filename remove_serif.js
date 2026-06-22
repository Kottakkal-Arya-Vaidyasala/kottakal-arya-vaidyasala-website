const fs = require('fs');

const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace all occurrences of `font-serif ` or ` font-serif` to remove the font-serif class
content = content.replace(/italic font-serif /g, '');
content = content.replace(/font-serif /g, '');

fs.writeFileSync(file, content, 'utf8');
console.log("Success");
