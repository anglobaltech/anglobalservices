const fs = require('fs');

let content = fs.readFileSync('/Users/rishabh/anglobalservices/components/Hero.jsx', 'utf8');

// Update Testimonials Section
content = content.replace(
    /<section className="relative w-full py-14 px-4 md:px-10 bg-\[#0a1120\] overflow-hidden">/,
    '<section className="relative w-full py-20 px-4 md:px-10 bg-gradient-to-b from-white to-slate-50 overflow-hidden">'
);
content = content.replace(
    /<h2 className="text-white text-4xl uppercase font-extrabold mb-4">/,
    '<h2 className="text-[#0a1b35] text-4xl uppercase font-extrabold mb-4">'
);
content = content.replace(
    /border-\[#0a1120\]/g,
    'border-white'
);

fs.writeFileSync('/Users/rishabh/anglobalservices/components/Hero.jsx', content);
console.log("Successfully updated testimonials background to light.");
