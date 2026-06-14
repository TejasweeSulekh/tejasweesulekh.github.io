const fs = require('fs');
const html = fs.readFileSync('loox.html', 'utf8');
const links = html.match(/(https?:\/\/[^\s"'<>]+\.(?:png|webp|svg|jpg))/gi);
if (links) {
  console.log([...new Set(links)]);
} else {
  console.log("No images found.");
}
