const fs = require('fs');

let content = fs.readFileSync('/Users/rishabh/anglobalservices/components/Hero.jsx', 'utf8');

// 1. Find the Trusted by Businesses section
const trustedStartStr = "      {/* Trusted by Businesses Section */}";
const trustedStartIdx = content.indexOf(trustedStartStr);

// It ends where the CTA section begins:
const ctaStartStr = "      <section className=\"w-full relative py-8 lg:py-12 overflow-hidden bg-white\">\n        {/* Background Decorative Elements */}";
const ctaStartIdx = content.indexOf(ctaStartStr);

if (trustedStartIdx === -1 || ctaStartIdx === -1) {
    console.log("Could not find trusted section or CTA section");
    process.exit(1);
}

const trustedSection = content.substring(trustedStartIdx, ctaStartIdx);

// Remove it from its current position
content = content.substring(0, trustedStartIdx) + content.substring(ctaStartIdx);

// 2. Modify Testimonials Background back to dark
content = content.replace(
    /<section className="relative w-full py-14 px-4 md:px-10 bg-\[#f8fbff\] overflow-hidden">/,
    '<section className="relative w-full py-14 px-4 md:px-10 bg-[#0a1120] overflow-hidden">'
);
content = content.replace(
    /<h2 className="text-\[#0a1b35\] text-4xl uppercase font-extrabold mb-4">/,
    '<h2 className="text-white text-4xl uppercase font-extrabold mb-4">'
);
content = content.replace(
    /border-\[#f8fbff\]/g,
    'border-[#0a1120]'
);

// 3. Insert Trusted by Businesses back BEFORE OUR SERVICES
// Our Services starts with:
const servicesStartStrRegex = /<section className="bg-white">\n\s*<div className="max-w-7xl mx-auto px-6 py-16">\n\s*<h2 className="text-4xl font-extrabold text-center text-black mb-14">\n\s*OUR SERVICES/;

const match = content.match(servicesStartStrRegex);
if (!match) {
    console.log("Could not find our services section");
    process.exit(1);
}

const insertIndex = match.index;
content = content.substring(0, insertIndex) + trustedSection + content.substring(insertIndex);

fs.writeFileSync('/Users/rishabh/anglobalservices/components/Hero.jsx', content);
console.log("Successfully reverted Hero.jsx");
