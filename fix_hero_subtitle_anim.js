const fs = require('fs');
const file = 'src/sections/Hero.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<motion\.p\s+key=\{currentImage\}[\s\S]*?transition=\{\{\s*duration:\s*0\.4\s*\}\}/;

const newAnim = `<motion.p
              key={currentImage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}`;

if (content.match(regex)) {
  content = content.replace(regex, newAnim);
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success");
} else {
  console.log("Regex not found");
}
