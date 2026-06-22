const fs = require('fs');

const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /Discover Holistic Healing\{" "\}\s*<span className="text-brand-gold">\s*with Ayurveda\s*<\/span>/m;

if (content.match(regex)) {
  content = content.replace(regex, `Heal naturally.{" "}\n              <span className="text-brand-gold">\n                Live fully.\n              </span>`);
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success");
} else {
  console.log("Regex not found. Let's try finding the block exactly.");
  // Alternative replace
  content = content.replace('Discover Holistic Healing{" "}', 'Heal naturally.{" "}');
  content = content.replace('with Ayurveda', 'Live fully.');
  fs.writeFileSync(file, content, 'utf8');
  console.log("Success with alternative");
}
