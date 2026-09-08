import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Laboratory Equipment & Setup – ISI Mark Certification | AN Global Services",
  description:
    "AN Global Services provides professional support for Laboratory Equipment & Setup under ISI Mark Certification. We assist with BIS laboratory recognition, compliance with BIS Act provisions, and quality testing requirements for well-equipped laboratories.",
};

export default function LaboratoryServices() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="BIS ISI Certification Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              LABORATORY EQUIPMENT AND SETUP
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-[450px_1fr] xl:grid-cols-[550px_1fr] gap-10 lg:gap-14 items-center">
        <div className="w-full">
          <div className="rounded-xl overflow-hidden shadow-md bg-white">
            <Image
              src="/service/laboratory-equipment-and-setup-services-2.webp"
              alt="Laboratory Equipment and Setup Services"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full">
          <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
          </div>
          <div className="space-y-5 text-gray-500 leading-7 text-[15px] text-justify">
            <p>
              We are offering an extensive range of Laboratory Products &
              Laboratory Instruments that are required for setting up a
              well-equipped laboratory. The products that we are making
              available to our clients are sourced from reliable companies who
              are trusted and known for quality.
            </p>

            <p>
              The Laboratory Recognition Scheme is governed by the provisions
              under Section 10 (1) h of The BIS Act 1986 and the BIS Rules, 1987
              [10(2) (a) & (b)]. These statutory provisions confer upon BIS,
              powers to recognize any laboratory in India or in any other
              country for carrying out testing of samples in relation to use of
              the Standard Mark and such other functions as may be necessary.
            </p>

            <p>
              The Rules also provide for de-recognition of a recognized
              laboratory by the Bureau for non-fulfilment of any condition laid
              down at the time of recognition. The guidelines for recognition
              and de-recognition of the laboratories have been laid down by the
              Bureau in this scheme. BIS also maintains a register of such
              laboratories as are recognized by it for testing of samples of
              articles or processes in relation to relevant Indian Standards,
              ensuring transparency, quality assurance, and compliance with
              applicable regulatory requirements.
            </p>

            <p>
              ISI Lab Equipment in a Laboratory is compulsory for all the
              manufacturers who intend to set up the processing unit, to obtain
              the ISI mark from Bureau of India Standards.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-4 pb-12">
        <p className="text-gray-500 text-[15px] leading-7 text-justify">
          Unless the inspection is done by the staff, tests carried out by an independent lab and
          official confirmation and license number are obtained, the unit can't commence commercial
          production such Lab should be equipped to carry out all physical,
          chemical and micro biological tests prescribed as per IS: 3025, and
          has to be conducted by expert chemist/micro biologist.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            The Importance of Laboratory Equipment Setup
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-120 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            In today's highly competitive industrial landscape, quality control and compliance are no longer optional—they are mandatory for business survival and growth. Setting up an in-house laboratory equipped with calibrated and standard-compliant equipment is the foundation of quality assurance. For manufacturers aiming to obtain prestigious certifications such as the ISI Mark (Bureau of Indian Standards) or NABL Accreditation, demonstrating a fully functional, well-equipped testing facility is a fundamental prerequisite.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            A properly configured laboratory not only ensures that products meet the rigorous safety and quality benchmarks mandated by the government but also helps businesses minimize production errors, reduce wastage, and build immense consumer trust. At AN Global Services, we simplify this technically complex and heavily regulated process by offering turnkey laboratory setup consultancy, from equipment procurement to final installation and calibration.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            Types of Laboratory Equipment Categories We Support
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-150 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-6">
            Depending on the specific IS (Indian Standard) code applicable to your product, your manufacturing unit will require specialized testing setups. We assist manufacturers across all major testing domains:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center text-[#0072b1]">
                Physical & Mechanical Testing
              </h3>
              <p className="text-[14px] text-gray-500 leading-6 mb-4 text-justify">
                Essential for evaluating the durability, tensile strength, hardness, and dimensional stability of products. Widely required for steel, cement, building materials, and automotive components.
              </p>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-1">
                <li>Universal Testing Machines (UTM)</li>
                <li>Impact Testers & Hardness Testers</li>
                <li>Gauges & Measuring Instruments</li>
                <li>Environmental Test Chambers</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center text-[#0072b1]">
                Chemical Analysis Setup
              </h3>
              <p className="text-[14px] text-gray-500 leading-6 mb-4 text-justify">
                Required to determine the chemical composition, toxicity, and purity of materials. Crucial for food, chemicals, plastics, textiles, and water purification industries.
              </p>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-1">
                <li>Spectrophotometers & Chromatography</li>
                <li>pH Meters & Titration Equipment</li>
                <li>Analytical Balances</li>
                <li>Fume Hoods & Safety Cabinets</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center text-[#0072b1]">
                Microbiological Testing
              </h3>
              <p className="text-[14px] text-gray-500 leading-6 mb-4 text-justify">
                Mandatory for industries like packaged drinking water, food processing, pharmaceuticals, and cosmetics to ensure products are free from harmful pathogens.
              </p>
              <ul className="list-disc pl-5 text-[14px] text-gray-600 space-y-1">
                <li>Autoclaves & Incubators</li>
                <li>Laminar Air Flow Chambers</li>
                <li>Colony Counters</li>
                <li>Microscopes & Sterilizers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            The Complete Process of Laboratory Setup & Approval
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-140 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">Step 1: Gap Analysis & Equipment Identification.</span> The first crucial step is analyzing your product against its specific IS Standard. We identify the exact list of testing equipment, chemicals, and glassware required to establish compliance without overspending on unnecessary machinery.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">Step 2: Equipment Procurement & Sourcing.</span> We assist you in sourcing ISI-marked, properly calibrated, and highly reliable laboratory equipment from trusted and recognized manufacturers. Proper sourcing ensures that the equipment rarely fails during official inspections.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">Step 3: Calibration & Traceability.</span> Simply having the equipment is not enough. BIS and NABL mandate that all testing equipment must be calibrated by an accredited calibration lab. We manage the calibration process to ensure your lab instruments have valid certificates and National/International traceability.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">Step 4: Layout Design & Installation.</span> A recognized laboratory must adhere to specific environmental conditions (temperature, humidity, vibration control). We guide the architectural layout of your lab and oversee the proper installation of all testing machinery.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            <span className="text-gray-800 font-bold">Step 5: Training of Lab Personnel.</span> The BIS inspector will cross-question your Quality Control (QC) personnel. We provide comprehensive training to your chemists and microbiologists so they can confidently perform the tests during the physical inspection.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 pt-12 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold uppercase text-gray-900">
            Documents & Records Required for Laboratory Approval
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-160 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-6 text-justify mb-8">
            Maintaining impeccable records is central to running a BIS or NABL recognized laboratory. During surveillance audits, the checking authorities heavily scrutinize lab documentation. We assist in preparing the following mandatory documents:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. Calibration & Maintenance Records
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
                <li>Master List of all Laboratory Equipment</li>
                <li>Valid Calibration Certificates from NABL labs</li>
                <li>Preventive Maintenance Schedule & Logs</li>
                <li>Equipment Breakdown & Repair Registers</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Testing & Quality Control Logs
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
                <li>Daily In-House Routine Test Reports</li>
                <li>Raw Material Verification Records</li>
                <li>Sample Rejection & Corrective Action Logs</li>
                <li>Standard Operating Procedures (SOPs) for all tests</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="text-xl font-bold uppercase text-gray-900">
          Why Choose AN Global Services for Lab Setup?
        </h2>
        <div className="w-full h-0.5 bg-gray-200 relative mb-6">
          <span className="absolute left-0 top-0 h-0.5 w-40 md:w-130 bg-[#0072b1]" />
        </div>
        <p className="text-gray-500 text-[15px] leading-7 text-justify pb-4">
          Establishing an in-house laboratory is a massive capital investment. Mistakes in equipment procurement—such as buying non-compliant machines, missing calibration deadlines, or improper environmental setup—can lead to immediate rejection of your ISI or NABL application. 
        </p>
        <p className="text-gray-500 text-[15px] leading-7 text-justify">
          At AN Global Services, our team of technical experts, ex-auditors, and quality assurance engineers hold decades of experience in the regulatory compliance sector. We provide a 100% turnkey solution, ensuring that your laboratory is built to global standards, fully compliant with Indian regulations, and completely ready to pass any stringent government inspection on the very first attempt. Let us handle the technical complexities while you focus on manufacturing exceptional products.
        </p>
      </section>
    </main>
  );
}
