import { db } from "@/src/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { defaultJobs } from "@/data/defaultJobs";
import CareersClient from "./CareersClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Careers & Job Openings in Delhi NCR | Regulatory & BIS Compliance Jobs | AN Global Services",
  description:
    "Explore high-growth career opportunities at AN Global Services. Join India's premier regulatory compliance, BIS certification, FMCS, and turnkey laboratory machinery consulting firm in Delhi NCR. Apply online today!",
  keywords:
    "careers at an global services, bis certification jobs delhi, regulatory compliance jobs india, nabl laboratory calibration engineer jobs, fmcs consultant careers, industrial equipment sales manager, job openings delhi ncr, legal metrology consultants hiring, testing laboratory engineer jobs delhi, bis isi mark jobs",
  alternates: {
    canonical: "https://www.anglobalservices.com/careers",
  },
  openGraph: {
    title: "Careers & Job Openings in Delhi NCR | Regulatory & BIS Compliance Jobs | AN Global Services",
    description:
      "Join India's leading regulatory compliance, BIS certification, and turnkey laboratory machinery consultancy. Discover open positions across engineering, trade, and compliance in Delhi NCR.",
    url: "https://www.anglobalservices.com/careers",
    siteName: "AN Global Services",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Job Openings in Delhi NCR | AN Global Services",
    description:
      "Join India's leading regulatory compliance, BIS certification, and turnkey laboratory machinery consultancy. Explore openings in Delhi NCR.",
  },
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
};

export default async function CareersPage() {
  let liveJobs = [];
  try {
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    liveJobs = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate().toISOString() : null,
        updatedAt: data.updatedAt?.toDate ? data.updatedAt.toDate().toISOString() : null,
      };
    });
  } catch (err) {
    console.warn("Notice: Real-time jobs fetch for SSR will load via client:", err?.message || err);
  }

  if (liveJobs.length === 0 && defaultJobs.length > 0) {
    liveJobs = [...defaultJobs];
  }

  // Filter only active jobs for SEO schemas
  const activeJobs = liveJobs.filter((j) => j.status === "Active" || !j.status);

  // Generate JobPosting structured data for Google Jobs indexing ONLY for actual active jobs
  const jobPostingSchemas = activeJobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `<h3>Role Overview</h3><p>${job.summary || ""}</p><h3>Responsibilities</h3><p>${(job.responsibilities || "").replace(/\n/g, "<br/>")}</p><h3>Requirements</h3><p>${(job.requirements || "").replace(/\n/g, "<br/>")}</p>`,
    identifier: {
      "@type": "PropertyValue",
      name: "AN Global Services",
      value: job.id || job.slug || "",
    },
    datePosted: job.datePosted || new Date().toISOString().split("T")[0],
    validThrough: job.validThrough || "2026-12-31",
    employmentType: job.jobType === "Full Time" ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "AN Global Services",
      sameAs: "https://www.anglobalservices.com",
      logo: "https://www.anglobalservices.com/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 4, Local Shopping Centre, Pushp Vihar, Sector 6, M.B. Road, Saket",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110017",
        addressCountry: "IN",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        value: 600000,
        unitText: "YEAR",
      },
    },
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.anglobalservices.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Careers & Job Openings",
        item: "https://www.anglobalservices.com/careers",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AN Global Services",
    url: "https://www.anglobalservices.com",
    logo: "https://www.anglobalservices.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/an-global-services",
      "https://www.facebook.com/anglobalservices",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7782069184",
      contactType: "Human Resources & Careers Liaison",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 4, Local Shopping Centre, Pushp Vihar, Sector 6, M.B. Road, Saket",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110017",
      addressCountry: "IN",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does AN Global Services charge any fees during the recruitment or interview process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, absolutely not. AN Global Services strictly follows a 100% free, transparent, and merit-based hiring policy. We never ask for any money, registration fees, security deposits, document verification charges, or laptop costs at any stage.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical hiring process at AN Global Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our recruitment timeline typically concludes within 7 to 14 business days. Stages include: 1) Application screening by our HR team within 48 hours, 2) Technical/Domain assessment, 3) Cultural and leadership alignment interview, and 4) Final offer rollout and onboarding.",
        },
      },
      {
        "@type": "Question",
        name: "Does AN Global Services hire fresh graduates or interns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We actively hire emerging talent in engineering, applied chemistry, commerce, and international business with structured mentorship under veteran BIS and ISO lead assessors.",
        },
      },
      {
        "@type": "Question",
        name: "Where is AN Global Services headquartered, and do you offer hybrid work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our corporate headquarters and primary calibration laboratory facilities are situated in Delhi NCR (Saket / Pushp Vihar, New Delhi). Selected engineering roles operate on-site, while documentation, IT, and international trade roles enjoy hybrid flexibility.",
        },
      },
      {
        "@type": "Question",
        name: "Do your consultants get opportunities for international travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. In our FMCS and turnkey industrial setup divisions, senior specialists and lead auditors travel abroad to conduct pre-audit factory inspections across Asia, Europe, and North America.",
        },
      },
      {
        "@type": "Question",
        name: "How will I know the status of my job application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upon submission through this portal, you immediately receive a unique Application Tracking Reference ID. Our talent acquisition team reviews every profile within 48 business hours and contacts shortlisted candidates directly via phone and email.",
        },
      },
    ],
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers & Job Openings at AN Global Services",
    url: "https://www.anglobalservices.com/careers",
    description:
      "Explore rewarding career opportunities at AN Global Services in Delhi NCR across regulatory compliance, laboratory testing, industrial machinery, and international trade.",
    isPartOf: {
      "@type": "WebSite",
      name: "AN Global Services",
      url: "https://www.anglobalservices.com",
    },
  };

  return (
    <>
      {/* Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Programmatic Google JobPosting Schemas for Top Rank Indexing */}
      {jobPostingSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Client Application & Live Job Board */}
      <CareersClient initialJobs={liveJobs} />
    </>
  );
}
