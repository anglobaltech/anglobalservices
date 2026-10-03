const fs = require('fs');
const filePath = '/Users/rishabh/anglobalservices/app/it-services-and-solutions/layout.js';
let content = fs.readFileSync(filePath, 'utf8');

const newMetadata = `export const metadata = {
  title: "Custom Enterprise CRM & Website Development Services | AN Global",
  description:
    "Top-rated B2B Web Development & Custom CRM Software Agency. We build high-performance, SEO-optimized web applications, scalable cloud architecture, and sales automation systems tailored for growth.",
  keywords: [
    "Custom CRM Software Solutions",
    "Enterprise CRM Development",
    "B2B Web Development Agency",
    "Custom Website Design Services",
    "Scalable Cloud Architecture",
    "Sales Pipeline Automation Software",
    "React Next.js Web Development",
    "Lead Management Software Development",
    "API Integrations and ERP Solutions",
    "SEO Optimized Web Applications",
    "IT Services and Solutions India",
    "Custom Web & CRM Solutions"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "AN Global Services" }],
  alternates: {
    canonical: "https://www.anglobalservices.com/it-services-and-solutions",
  },
  openGraph: {
    title: "Custom Enterprise CRM & Website Development Services | AN Global",
    description:
      "Top-rated B2B Web Development & Custom CRM Software Agency. We build high-performance, SEO-optimized web applications, and scalable digital products for exponential business growth.",
    url: "https://www.anglobalservices.com/it-services-and-solutions",
    siteName: "AN Global Services",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.anglobalservices.com/it-services-and-solutions/it-services-solutions-1.png",
        width: 1200,
        height: 630,
        alt: "AN Global Services - Custom CRM & Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Enterprise CRM & Website Development Services | AN Global",
    description:
      "Top-rated B2B Web Development & Custom CRM Software Agency. We build high-performance web applications and scalable CRM software.",
    images: ["https://www.anglobalservices.com/it-services-and-solutions/it-services-solutions-1.png"],
  },
};`;

content = content.replace(/export const metadata = \{[\s\S]*?^\};\n?/m, newMetadata + '\n');
fs.writeFileSync(filePath, content);
console.log("Layout metadata updated.");
