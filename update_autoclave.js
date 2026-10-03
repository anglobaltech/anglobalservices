const fs = require('fs');
let content = fs.readFileSync('/Users/rishabh/anglobalservices/app/vertical-autoclave-triple-walled/page.jsx', 'utf8');

// Replace URLs
content = content.replace(/portable-autoclave/g, 'vertical-autoclave-triple-walled');
// Replace Titles & Text
content = content.replace(/Portable Autoclaves/g, 'Vertical Triple Walled Autoclaves');
content = content.replace(/Portable Autoclave/g, 'Vertical Autoclave Triple Walled');
content = content.replace(/portable autoclaves/gi, 'vertical triple walled autoclaves');
content = content.replace(/portable autoclave/gi, 'vertical triple walled autoclave');
content = content.replace(/Portable Sterilizer/gi, 'Triple Walled Sterilizer');

// Update image src specifically based on the typical Next.js Image tag format
content = content.replace(/src="[^"]*vertical-autoclave-triple-walled[^"]*"/g, 'src="/equipment/vertical-autoclave-triple-walled.webp"');
content = content.replace(/src="[^"]*portable[^"]*"/gi, 'src="/equipment/vertical-autoclave-triple-walled.webp"');

// Update specific content to make it relevant to Triple Walled
content = content.replace(/compact steam sterilizer/g, 'heavy-duty steam sterilizer with a radial locking mechanism and three-chamber design');
content = content.replace(/designed for mobility and convenience/g, 'designed for high-pressure sterilization in research labs, pharmaceuticals, and hospitals');
content = content.replace(/takes up very little floor space/g, 'features a triple-walled construction ensuring maximum thermal efficiency and safety');

fs.writeFileSync('/Users/rishabh/anglobalservices/app/vertical-autoclave-triple-walled/page.jsx', content);
console.log("Updated page.jsx successfully.");
