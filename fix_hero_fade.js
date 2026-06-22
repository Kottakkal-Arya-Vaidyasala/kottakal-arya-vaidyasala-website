const fs = require('fs');
const file = 'src/sections/Hero.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix heading animation: remove y translation, just fade
content = content.replace(
  /initial=\{\{\s*opacity:\s*0,\s*y:\s*10\s*\}\}\s*animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*exit=\{\{\s*opacity:\s*0,\s*y:\s*-10\s*\}\}\s*transition=\{\{\s*duration:\s*0\.4\s*\}\}/g,
  'initial={{ opacity: 0 }}\n              animate={{ opacity: 1 }}\n              exit={{ opacity: 0 }}\n              transition={{ duration: 0.8, ease: "easeInOut" }}'
);

// Fix subheading animation: remove y translation, just fade
content = content.replace(
  /initial=\{\{\s*opacity:\s*0,\s*y:\s*30\s*\}\}\s*animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s*exit=\{\{\s*opacity:\s*0,\s*y:\s*-20\s*\}\}\s*transition=\{\{\s*duration:\s*1,\s*delay:\s*0\.5,\s*ease:\s*"easeOut"\s*\}\}/g,
  'initial={{ opacity: 0 }}\n              animate={{ opacity: 1 }}\n              exit={{ opacity: 0 }}\n              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}'
);

// In case the heading match fails because of formatting, try regex
const headingRegex = /<motion\.h1[\s\S]*?initial=\{\{\s*opacity:\s*0,\s*y:\s*10\s*\}\}[\s\S]*?transition=\{\{\s*duration:\s*0\.4\s*\}\}/;
const newHeadingAnim = `<motion.h1
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}`;

if (content.match(headingRegex)) {
  content = content.replace(headingRegex, newHeadingAnim);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Success");
