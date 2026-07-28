export const metadata = {
  title: "IT Services & Solutions | #1 Website & Custom CRM Development Company",
  description:
    "Top-rated IT services and solutions company in India. We specialize in custom website development, enterprise CRM software, e-commerce platforms, and SEO optimization. Get a free consultation today!",
  keywords: [
    "IT services and solutions",
    "website development company in India",
    "custom CRM development services",
    "custom CRM software company",
    "website development services",
    "web design agency India",
    "custom web development company",
    "enterprise CRM solutions for business",
    "IT consulting services India",
    "responsive website design company",
    "e-commerce website development",
    "CRM software development company",
    "SEO optimized website development",
    "web application development services",
    "AN Global Services IT solutions",
    "best website design and CRM company",
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
    title: "IT Services & Solutions | Website & Custom CRM Development Company",
    description:
      "Top-rated IT services and solutions company in India. We build high-performance websites, custom CRM software, and scalable digital products for business growth.",
    url: "https://www.anglobalservices.com/it-services-and-solutions",
    siteName: "AN Global Services",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.anglobalservices.com/it-services-and-solutions/it-services-solutions-1.png",
        width: 1200,
        height: 630,
        alt: "AN Global Services - IT Services & Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services & Solutions | Website & Custom CRM Development Company",
    description:
      "Top-rated IT services and solutions company in India. We build high-performance websites, custom CRM software, and scalable digital products for business growth.",
    images: ["https://www.anglobalservices.com/it-services-and-solutions/it-services-solutions-1.png"],
  },
};

export default function ITServicesLayout({ children }) {
  return children;
}
