const fs = require('fs');
let content = fs.readFileSync('/Users/rishabh/anglobalservices/app/vertical-autoclave-deluxe/page.jsx', 'utf8');

// Replace URLs and slugs
content = content.replace(/vertical-autoclave-triple-walled/g, 'vertical-autoclave-deluxe');

// Replace Titles & Text
content = content.replace(/Vertical Triple Walled Autoclaves/g, 'Vertical Autoclave Deluxe');
content = content.replace(/Vertical Autoclave Triple Walled/g, 'Vertical Autoclave Deluxe');
content = content.replace(/vertical triple walled autoclaves/gi, 'vertical autoclaves deluxe');
content = content.replace(/vertical triple walled autoclave/gi, 'vertical autoclave deluxe');
content = content.replace(/Triple Walled Sterilizer/gi, 'Deluxe Sterilizer');

// Replace description text for better SEO specific to Deluxe models
content = content.replace(/heavy-duty steam sterilizer with a radial locking mechanism and three-chamber design/g, 'premium steam sterilizer equipped with an advanced radial locking system, precise temperature control, and a foot-pedal lifting mechanism for effortless operation');
content = content.replace(/triple-walled construction ensuring maximum thermal efficiency and safety/g, 'high-grade stainless steel construction, ensuring exceptional durability, rapid heating, and superior safety for clinical and laboratory environments');

fs.writeFileSync('/Users/rishabh/anglobalservices/app/vertical-autoclave-deluxe/page.jsx', content);
console.log("Updated deluxe page.jsx successfully.");
