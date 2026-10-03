const fs = require('fs');
let content = fs.readFileSync('/Users/rishabh/anglobalservices/app/vertical-autoclave-economy/page.jsx', 'utf8');

// Replace URLs and slugs
content = content.replace(/vertical-autoclave-deluxe/g, 'vertical-autoclave-economy');

// Replace Titles & Text
content = content.replace(/Vertical Autoclave Deluxe/g, 'Vertical Autoclave Economy');
content = content.replace(/vertical autoclaves deluxe/gi, 'vertical autoclaves economy');
content = content.replace(/vertical autoclave deluxe/gi, 'vertical autoclave economy');
content = content.replace(/Deluxe Sterilizer/gi, 'Economy Sterilizer');

// Update description text for better SEO specific to Economy models
content = content.replace(/premium steam sterilizer equipped with an advanced radial locking system, precise temperature control, and a foot-pedal lifting mechanism for effortless operation/g, 'cost-effective, high-performance steam sterilizer featuring a robust radial locking mechanism, digital temperature controller, and a durable square-body design for hospitals and research labs');
content = content.replace(/high-grade stainless steel construction, ensuring exceptional durability, rapid heating, and superior safety for clinical and laboratory environments/g, 'sturdy stainless steel inner chamber with a powder-coated outer body, providing reliable sterilization, thermal efficiency, and essential safety features at an economical price point');

fs.writeFileSync('/Users/rishabh/anglobalservices/app/vertical-autoclave-economy/page.jsx', content);
console.log("Updated economy page.jsx successfully.");
