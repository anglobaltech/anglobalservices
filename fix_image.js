const fs = require('fs');
let content = fs.readFileSync('/Users/rishabh/anglobalservices/app/vertical-autoclave-triple-walled/page.jsx', 'utf8');

content = content.replace(/src="\/equipment\/vertical-autoclave-triple-walled\.webp"/g, 'src="/equipment/autoclave/vertical-autoclave-triple-walled.webp"');

fs.writeFileSync('/Users/rishabh/anglobalservices/app/vertical-autoclave-triple-walled/page.jsx', content);
console.log("Updated image path successfully.");
