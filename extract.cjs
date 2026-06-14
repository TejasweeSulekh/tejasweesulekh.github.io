const fs = require('fs');
const html = fs.readFileSync('loox_utf8.html', 'utf8');
const links = html.match(/([\w\-.\/:]+\.(?:png|webp|svg|jpg))/gi);
if (links) {
  console.log([...new Set(links)]);
} else {
  console.log("No images found.");
}
