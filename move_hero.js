const fs = require('fs');

let content = fs.readFileSync('/Users/rishabh/anglobalservices/components/Hero.jsx', 'utf8');

// 1. Find the Trusted by Businesses section
const trustedStartStr = "      {/* Trusted by Businesses Section */}";
const trustedStartIdx = content.indexOf(trustedStartStr);

const servicesStartStrRegex = /<section className="bg-white">\n\s*<div className="max-w-7xl mx-auto px-6 py-16">\n\s*<h2 className="text-4xl font-extrabold text-center text-black mb-14">\n\s*OUR SERVICES/;
const servicesMatch = content.match(servicesStartStrRegex);

if (trustedStartIdx === -1 || !servicesMatch) {
    console.log("Could not find trusted section or our services section");
    process.exit(1);
}

const servicesStartIdx = servicesMatch.index;
const trustedSection = content.substring(trustedStartIdx, servicesStartIdx);

// Remove it from its current position
content = content.substring(0, trustedStartIdx) + content.substring(servicesStartIdx);

// 2. Insert Trusted by Businesses BETWEEN Our Clients and Testimonials
const testimonialsStartRegex = /<section className="relative w-full py-14 px-4 md:px-10 bg-\[#0a1120\] overflow-hidden">/;
const testimonialsMatch = content.match(testimonialsStartRegex);

if (!testimonialsMatch) {
    console.log("Could not find testimonials section");
    process.exit(1);
}

const insertIndex = testimonialsMatch.index;
content = content.substring(0, insertIndex) + trustedSection + content.substring(insertIndex);

fs.writeFileSync('/Users/rishabh/anglobalservices/components/Hero.jsx', content);
console.log("Successfully moved section in Hero.jsx");
