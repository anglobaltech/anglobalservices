import { db } from "@/src/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { defaultJobs } from "@/data/defaultJobs";
import CareersClient from "./CareersClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Careers & Job Openings in Delhi NCR | Join AN Global Services",
  description:
    "Explore high-growth career opportunities at AN Global Services. Join our premier regulatory compliance, BIS certification, FMCS, and turnkey laboratory machinery consulting firm in Delhi NCR.",
  keywords:
    "careers at an global services, bis certification jobs delhi, regulatory compliance jobs india, nabl laboratory calibration engineer jobs, fmcs consultant careers, industrial equipment sales manager, job openings delhi ncr",
  alternates: {
    canonical: "https://www.anglobalservices.com/careers",
  },
  openGraph: {
    title: "Careers & Job Openings | AN Global Services",
    description:
      "Join India's leading regulatory compliance, BIS certification, and turnkey laboratory machinery consultancy. Discover open positions across engineering, trade, and compliance in Delhi NCR.",
    url: "https://www.anglobalservices.com/careers",
    siteName: "AN Global Services",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Job Openings | AN Global Services",
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
