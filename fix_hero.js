const fs = require('fs');

let content = fs.readFileSync('/Users/rishabh/anglobalservices/components/Hero.jsx', 'utf8');

// 1. Find and Extract Trusted by Businesses section
const trustedStartStr = "      {/* Trusted by Businesses Section */}";
const trustedStartIdx = content.indexOf(trustedStartStr);
const servicesStartStr = "      <section className=\"bg-white\">\n        <div className=\"max-w-7xl mx-auto px-6 py-16\">\n          <h2 className=\"text-4xl font-extrabold text-center text-black mb-14\">\n            OUR SERVICES";
const servicesStartIdx = content.indexOf(servicesStartStr);

if (trustedStartIdx === -1 || servicesStartIdx === -1) {
    console.log("Could not find trusted section or services section");
    process.exit(1);
}

const trustedSection = content.substring(trustedStartIdx, servicesStartIdx);
content = content.substring(0, trustedStartIdx) + content.substring(servicesStartIdx);

// 2. Modify Testimonials Background
content = content.replace(
    /<section className="relative w-full py-14 px-4 md:px-10 bg-\[#0a1120\] overflow-hidden">/,
    '<section className="relative w-full py-14 px-4 md:px-10 bg-[#f8fbff] overflow-hidden">'
);
content = content.replace(
    /<h2 className="text-white text-4xl uppercase font-extrabold mb-4">/,
    '<h2 className="text-[#0a1b35] text-4xl uppercase font-extrabold mb-4">'
);
content = content.replace(
    /border-\[#0a1120\]/g,
    'border-[#f8fbff]'
);

// 3. Insert Trusted by Businesses AFTER Testimonials
const testimonialsEndRegex = /<\/div>\n      <\/section>\n\n      <section className="w-full relative py-8 lg:py-12 overflow-hidden bg-white">/;
const match = content.match(testimonialsEndRegex);

if (!match) {
    console.log("Could not find end of testimonials section");
    process.exit(1);
}

const insertIndex = match.index + "</div>\n      </section>\n\n".length;
content = content.substring(0, insertIndex) + trustedSection + content.substring(insertIndex);

fs.writeFileSync('/Users/rishabh/anglobalservices/components/Hero.jsx', content);
console.log("Successfully updated Hero.jsx");
