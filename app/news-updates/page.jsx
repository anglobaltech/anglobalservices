import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400

export const metadata = {
  title: "Latest News & Industry Updates | AN Global Services",
  description:
    "Read the latest news, industry insights, regulatory developments, and certification-related updates from AN Global Services across testing, BIS, NABL, WPC, and compliance sectors.",
};


const newsUpdates = [
  {
    title:
      "Government Issues New Draft QCO for Electrical Appliances",
    description:
      "The Ministry of Commerce and Industry has released a draft Quality Control Order (QCO) proposing mandatory BIS certification for additional categories of electrical appliances. Stakeholders are invited to submit comments and suggestions within the stipulated time period.",
    date: "08 January 2026",
    type: "News",
  },
  {
    title:
      "BIS Adds New Products Under Mandatory Certification Scheme",
    description:
      "The Bureau of Indian Standards (BIS) has notified the inclusion of new products under its mandatory certification regime. Manufacturers and importers are advised to initiate BIS compliance processes to avoid disruptions in market access.",
    date: "06 January 2026",
    type: "Update",
  },
  {
    title:
      "Amendment Issued in QCO for Aluminium and Aluminium Alloy Products",
    description:
      "An amendment has been issued to the existing Quality Control Order for Aluminium and Aluminium Alloy Products. The amendment revises implementation timelines and clarifies conformity assessment requirements.",
    date: "04 January 2026",
    type: "Update",
  },
  {
    title:
      "EPR Compliance Rules Strengthened for Plastic and E-Waste",
    description:
      "The Government of India has strengthened Extended Producer Responsibility (EPR) compliance rules for plastic waste and electronic waste. Producers and brand owners must ensure timely registration and filing of compliance returns.",
    date: "02 January 2026",
    type: "News",
  },
  {
    title:
      "Mandatory BIS Certification Announced for Solar PV Modules",
    description:
      "The Ministry of New and Renewable Energy (MNRE) has reiterated mandatory BIS certification requirements for Solar PV Modules and Panels. Only BIS certified products will be permitted for installation under government and private projects.",
    date: "31 December 2025",
    type: "Update",
  },
  {
    title:
      "TEC Issues Revised Guidelines for Telecom Equipment Certification",
    description:
      "Telecommunication Engineering Centre (TEC) has issued revised guidelines for certification of telecom equipment. Manufacturers must comply with updated testing and documentation requirements.",
    date: "29 December 2025",
    type: "News",
  },
  {
    title:
      "NABL Updates Accreditation Criteria for Testing Laboratories",
    description:
      "NABL has issued updated accreditation criteria for testing and calibration laboratories. The revised guidelines focus on enhanced quality systems, audit procedures and proficiency testing.",
    date: "27 December 2025",
    type: "Update",
  },
];

export default function NewsUpdatesPage() {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-60">
             <Image
               src="/service/isi/about.jpg"
               alt="Latest Notifications"
               fill
               className="object-cover"
             />
             <div className="absolute inset-0 bg-black/40 flex items-center">
               <div className="max-w-7xl mx-auto px-6">
                 <h1 className="text-white text-4xl font-bold">
                    NEWS & REGULATORY UPDATE
                 </h1>
               </div>
             </div>
           </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {newsUpdates.map((item, index) => (
          <div key={index} className="mb-20">
            <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-[#0072b1] border border-[#0072b1]">
              {item.type}
            </span>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {item.title}
            </h2>

            <div className="relative mt-3 mb-6">
              <div className="h-0.5 w-full bg-gray-200"></div>
              <div className="absolute top-0 left-0 h-0.5 w-[60%] bg-[#0072b1]"></div>
            </div>

            <p className="text-gray-500 leading-relaxed text-base">
              {item.description}
            </p>

            <div className="mt-6">
              <Link
                href="#"
                className="inline-block bg-[#0072b1] text-white px-7 py-3 text-sm font-semibold hover:opacity-90 transition"
              >
                Read More
              </Link>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-gray-900">
                Published Date
              </p>
              <p className="text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
