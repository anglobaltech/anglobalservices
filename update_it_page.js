const fs = require('fs');
const filePath = '/Users/rishabh/anglobalservices/app/it-services-and-solutions/page.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update H1
content = content.replace(
    /High-Performance <br className="hidden sm:block" \/>IT Services & Solutions/,
    'Custom Website Design & <br className="hidden sm:block" />Enterprise CRM Development Services'
);

// 2. Update Hero paragraph
content = content.replace(
    /Stop losing customers to slow websites and disconnected tools. We build blazing-fast, SEO-optimized websites and custom CRM systems that turn visitors into paying customers and chaos into streamlined operations. As a leading IT solutions company in India, we deliver scalable digital products tailored to your exact business needs. Leverage top-tier technology to automate workflows, capture high-quality leads, and accelerate your overall growth./,
    'Stop losing revenue to slow loading times and disconnected legacy tools. We architect blazing-fast, SEO-optimized responsive web applications and scalable cloud-based custom CRM systems. As a top-tier B2B web development agency, we deliver full-stack enterprise solutions tailored for growth. Leverage our expertise in sales pipeline automation, robust API integrations, and advanced lead management software to capture high-quality leads and exponentially scale your operations.'
);

// 3. Update Schema Name and description
content = content.replace(
    /"name": "AN Global Services — IT Services and Solutions"/,
    '"name": "Custom Enterprise CRM & Website Development Services — AN Global Services"'
);
content = content.replace(
    /"description": "Professional website development and custom CRM development services by AN Global Services. We build responsive, SEO-optimized websites and scalable CRM solutions that drive business growth."/,
    '"description": "Top-rated B2B Web Development & Custom CRM Software Agency. We build high-performance, SEO-optimized web applications, scalable cloud architecture, and sales automation systems tailored for growth."'
);
content = content.replace(
    /"name": "IT Services"/,
    '"name": "Custom Web & CRM Solutions"'
);

// 4. Update section titles for LSI (in arrays)
content = content.replace(
    /title: "Website Development",\n    desc: "We build fast, secure, and responsive websites/m,
    'title: "Custom Website & Web App Development",\n    desc: "We build fast, secure, and highly responsive web applications'
);
content = content.replace(
    /title: "CRM Development",\n    desc: "Custom CRM solutions tailored to your unique business workflows./m,
    'title: "Enterprise CRM Software Solutions",\n    desc: "Scalable custom CRM software tailored to your complex enterprise workflows.'
);
content = content.replace(
    /title: "E-Commerce Solutions",\n    desc: "Secure online stores with payment gateways,/m,
    'title: "E-Commerce & B2B Portals",\n    desc: "Secure, high-conversion online stores with advanced API payment gateways,'
);

// 5. Update FAQ answers/questions for better LSI targeting
content = content.replace(
    /question: "How much does a custom website or CRM cost\?"/,
    'question: "How much does a custom enterprise CRM or web application cost?"'
);
content = content.replace(
    /question: "How long does it take to develop a custom CRM\?"/,
    'question: "How long does it take to develop a custom CRM software solution?"'
);

fs.writeFileSync(filePath, content);
console.log("Page SEO content updated.");
