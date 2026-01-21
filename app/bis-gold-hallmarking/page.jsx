import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BIS Gold Hallmarking | AN Global Services",
  description:
    "End-to-end BIS consultancy for Assaying & Hallmarking Centre (AHC) setup and Jeweller Registration as per latest HUID norms.",
};

export default function GoldHallmarkingPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="Gold Hallmarking BIS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              BIS GOLD HALLMARKING SETUP & REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/gold-hallmarking-setup.png"
                alt="Gold Hallmarking Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-6">
                <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
              </div>

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                In an era where 6-digit HUID (Hallmark Unique Identification) is
                mandatory, compliance with BIS gold hallmarking norms is no
                longer optional—it is a mark of trust, transparency, and
                credibility in the jewellery industry.
              </p>

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                AN Global Services provides end-to-end consultancy for setting up
                Assaying & Hallmarking Centres (AHC) and obtaining BIS Jeweller
                Registration, ensuring full compliance with the latest Bureau
                of Indian Standards regulations.
              </p>

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                From infrastructure planning and equipment sourcing to BIS
                audits and licensing, we manage the complete process so that
                your business operates smoothly, legally, and without
                compliance risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Our Core Services
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-45 bg-[#0072b1]"></span>
          </div>

          <ul className="list-disc pl-6 space-y-3 text-[15px] text-gray-500 leading-7">
            <li>
              <strong className="text-gray-800">
                Assaying & Hallmarking Centre (AHC) Setup:
              </strong>{" "}
              Complete support for setting up BIS-compliant AHC as per IS
              15820:2009, including layout planning for reception, sampling,
              fire assay lab, XRF testing, laser marking, and quality control
              sections.
            </li>

            <li>
              <strong className="text-gray-800">Equipment Assistance:</strong>{" "}
              Guidance in sourcing BIS-approved machinery such as XRF machines,
              fire assay furnaces, laser marking machines for HUID engraving,
              and high-precision micro-balances.
            </li>

            <li>
              <strong className="text-gray-800">Staff Training:</strong>{" "}
              Professional training for Assay Masters, Quality Managers, and
              machine operators on BIS procedures, testing methods, and record
              maintenance.
            </li>

            <li>
              <strong className="text-gray-800">
                Quality Manual Preparation:
              </strong>{" "}
              Drafting and implementation of mandatory Quality Management
              System (QMS) documentation required for BIS approval.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            BIS Registration & Licensing
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-70 bg-[#0072b1]"></span>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-500 leading-7">
            <li>
              Jeweller Registration through BIS Manakonline portal with lifetime
              validity for retail showrooms.
            </li>
            <li>
              AHC Recognition including document scrutiny, application filing,
              and coordination during BIS physical audits.
            </li>
            <li>
              Renewal management, compliance reporting, and performance
              submissions to avoid license suspension or penalties.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
        <h2 className="text-xl font-semibold text-gray-900">
          BIS Hallmarking Registration Process
        </h2>
        <div className="w-full h-0.5 bg-gray-200 relative mb-6">
          <span className="absolute left-0 top-0 h-0.5 w-90 bg-[#0072b1]"></span>
        </div>

        <ul className="list-decimal pl-6 space-y-2 text-[15px] text-gray-500 leading-7">
          <li>
            Collection of establishment documents such as GST, MSME,
            partnership deed, identity proofs, and site layout plans.
          </li>
          <li>Profile creation and setup on the BIS Manak portal.</li>
          <li>
            Accurate online application filing with technical and operational
            details.
          </li>
          <li>
            Coordination during BIS physical inspection to verify
            infrastructure, equipment, and staff competency.
          </li>
          <li>
            Grant of BIS Hallmark Certificate and activation of HUID operations.
          </li>
        </ul>
      </section>
    </main>
  );
}
