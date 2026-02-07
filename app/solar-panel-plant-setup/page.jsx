import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Solar Plant Setup & Testing Services | AN Global Services",
  description:
    "End-to-end Solar Plant Setup and Testing Services including engineering, procurement, installation, commissioning, performance testing, and grid interconnection for rooftop and ground-mounted solar power plants across India.",
  keywords: [
    "solar plant setup services",
    "solar EPC services",
    "solar plant installation India",
    "solar testing and commissioning",
    "solar power plant EPC",
    "rooftop solar installation",
    "ground mounted solar plant",
    "solar grid synchronization",
    "IEC 62446 solar testing",
    "AN Global Services solar",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function SolarPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="Solar Plant Setup Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              SOLAR PLANT SETUP & TESTING SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/solar-panel-plant-setup.png"
                alt="Solar Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 uppercase">
                Introduction to Solar Panel Plant Setup Services
              </h2>

              <div className="w-full h-0.5 bg-gray-200 relative mb-6">
                <span className="absolute left-0 top-0 h-0.5 w-40 md:w-147 bg-[#0072b1]" />
              </div>

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                Our Solar Panel Plant Setup Services provide a complete
                end-to-end solution covering engineering, procurement,
                construction, testing, and commissioning of solar power plants.
                We ensure accurate system design, high-quality component
                selection, and efficient installation to deliver high-yield,
                durable, and future-ready solar installations for both rooftop
                and ground-mounted projects.
              </p>

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                From detailed site assessment and feasibility studies to module
                mounting, DC and AC cabling, earthing, inverter installation,
                and SCADA integration, we manage every stage of the project in
                compliance with safety standards and industry best practices,
                ensuring smooth execution and grid readiness.
              </p>

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                Post-installation, we carry out comprehensive testing and
                commissioning activities including insulation resistance
                testing, polarity and continuity checks, IV curve analysis,
                thermal imaging, and performance verification. This structured
                approach ensures safe grid synchronization, optimal energy
                generation, and long-term operational reliability of the solar
                plant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            Solar Plant Setup Services
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-3">
            <span className="absolute left-0 top-0 h-0.5 w-80 bg-[#0072b1]"></span>
          </div>

          <ul className="list-disc pl-6 space-y-2 text-[15px] text-gray-500 leading-7">
            <li>
              <strong className="text-gray-800">
                Site Assessment & Feasibility:
              </strong>{" "}
              Topographical and soil testing for ground-mounted plants, shadow
              analysis, and 3D solar irradiance modeling. Structural integrity
              audits for rooftop installations.
            </li>

            <li>
              <strong className="text-gray-800">
                Custom Engineering & Design:
              </strong>{" "}
              Detailed electrical schematics, string layouts, system sizing, and
              selection of Tier-1 solar modules, high-efficiency inverters, and
              robust mounting structures.
            </li>

            <li>
              <strong className="text-gray-800">
                Professional Installation:
              </strong>{" "}
              Foundation work (piling/ballasting), mechanical mounting, DC/AC
              cabling, trenching, earthing systems, and integration of
              inverters, transformers, and SCADA monitoring systems.
            </li>

            <li>
              <strong className="text-gray-800">Grid Interconnection:</strong>{" "}
              End-to-end support for statutory approvals, net-metering
              applications, and DISCOM synchronization.
            </li>
            <li>
              <strong className="text-gray-800">
                Quality Assurance & Safety Compliance:
              </strong>{" "}
              Implementation of quality control checklists, method statements,
              work permits, and adherence to electrical safety norms, fire
              safety guidelines, and project-specific HSE requirements during
              execution.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            Testing & Commissioning
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-70 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-6">
            We conduct rigorous testing and commissioning procedures to ensure
            that the solar plant meets international safety and performance
            standards, including IEC 62446.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-semibold text-gray-800 mb-2">
                A. Pre-Commissioning Tests (Cold Commissioning)
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[15px] text-gray-500 leading-7">
                <li>
                  Visual inspection for micro-cracks, alignment, and bolt torque
                </li>
                <li>Continuity & polarity testing of all strings</li>
                <li>Insulation resistance (Megger test)</li>
                <li>Earthing continuity verification</li>
              </ul>

              <p className="font-semibold text-gray-800 mt-6 mb-2">
                B. Performance & Diagnostic Testing (Hot Commissioning)
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[15px] text-gray-500 leading-7">
                <li>IV curve tracing to identify underperformance</li>
                <li>
                  Open circuit voltage & short circuit current verification
                </li>
                <li>Thermal imaging using infrared thermography</li>
                <li>Electroluminescence (EL) testing for internal defects</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-2">
                C. Operational Verification
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[15px] text-gray-500 leading-7">
                <li>Inverter efficiency testing</li>
                <li>Performance Ratio (PR) analysis</li>
                <li>SCADA system calibration and validation</li>
              </ul>

              <p className="font-semibold text-gray-800 mt-6 mb-2">
                D. Final Documentation & Handover
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[15px] text-gray-500 leading-7">
                <li>As-built drawings and single-line diagrams (SLDs)</li>
                <li>Test reports and commissioning certificates</li>
                <li>Operation & Maintenance (O&M) manuals</li>
                <li>Warranty documents for modules, inverters, and BOS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 ">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            Documents Required for Solar Panel Plant Setup
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-50 md:w-143 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify mb-8">
            To ensure smooth execution, statutory compliance, and timely grid
            connectivity, certain technical, commercial, and regulatory
            documents are required before and during the solar plant setup
            process. The exact requirements may vary depending on project size,
            location, and DISCOM norms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. Client & Site-Related Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-1 leading-7">
                <li>
                  Client KYC documents (PAN, Aadhaar / Company Incorporation)
                </li>
                <li>Ownership proof or lease agreement of installation site</li>
                <li>Latest electricity bill of the premises</li>
                <li>
                  Site layout plan and roof structural drawings (if rooftop)
                </li>
                <li>Latitude–longitude and site photographs</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. Technical & Engineering Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-1 leading-7">
                <li>Solar plant capacity details (kW / MW)</li>
                <li>Single Line Diagram (SLD)</li>
                <li>Detailed system design and layout drawings</li>
                <li>Module mounting structure design & calculations</li>
                <li>Inverter, transformer, and BOS specifications</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. Statutory & DISCOM Approval Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-1 leading-7">
                <li>Net-metering or grid connectivity application</li>
                <li>DISCOM technical feasibility approval</li>
                <li>Electrical safety undertaking and indemnity bond</li>
                <li>CEIG / Electrical Inspector approval (if applicable)</li>
                <li>Local authority or fire safety NOC (if required)</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                4. Testing, Commissioning & Handover Documents
              </h3>
              <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-1 leading-7">
                <li>Pre-commissioning and commissioning test reports</li>
                <li>As-built drawings and final SLDs</li>
                <li>Inverter, module, and BOS warranty certificates</li>
                <li>Operation & Maintenance (O&M) manuals</li>
                <li>Commissioning certificate and COD declaration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 ">
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            Benefits of Solar Plant Setup & Testing Services
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-50 md:w-143 bg-[#0072b1]" />
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify mb-8">
            A professionally designed and commissioned solar power plant
            delivers long-term financial savings, energy reliability, and
            regulatory compliance. Our end-to-end solar plant setup services are
            designed to maximize performance while minimizing operational risks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Higher Energy Generation & Performance
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Optimized system design, accurate string configuration, and
                comprehensive testing ensure maximum power output, improved
                performance ratio (PR), and reduced generation losses.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Faster Commissioning & Grid Readiness
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Structured execution, statutory coordination, and pre-validated
                testing processes help achieve faster grid synchronization and
                quicker commercial operation dates (COD).
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Compliance with International Standards
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                All installation, testing, and commissioning activities are
                carried out in line with IEC, IS, and DISCOM guidelines,
                ensuring regulatory compliance and audit readiness.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Long-Term Reliability & Asset Protection
              </h3>
              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Detailed diagnostics such as thermal imaging, IV curve analysis,
                and insulation testing help detect early defects, extending
                system life and reducing maintenance costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 uppercase">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-40 md:w-100 bg-[#0072b1]" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              1. What types of solar plants do you install?
            </h3>
            <p className="text-gray-600 text-[15px] leading-6 text-justify mt-2">
              We provide end-to-end solar plant setup services for rooftop,
              ground-mounted, and open-access solar power projects. Our services
              cover residential, commercial, industrial, and utility-scale solar
              installations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              2. Do you provide complete EPC services for solar projects?
            </h3>
            <p className="text-gray-600 text-[15px] leading-6 text-justify mt-2">
              Yes, we offer complete EPC (Engineering, Procurement, and
              Construction) services including system design, procurement of
              Tier-1 components, installation, testing, commissioning, and grid
              interconnection support.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              3. How long does a solar plant installation take?
            </h3>
            <p className="text-gray-600 text-[15px] leading-6 text-justify mt-2">
              Installation timelines depend on project size and site conditions.
              Typically, small rooftop projects take 2–4 weeks, while large
              commercial or ground-mounted plants may take 2–4 months including
              approvals and commissioning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              4. Is testing and commissioning mandatory for solar plants?
            </h3>
            <p className="text-gray-600 text-[15px] leading-6 text-justify mt-2">
              Yes, testing and commissioning are mandatory to ensure electrical
              safety, system performance, and DISCOM grid compliance. We conduct
              all tests as per IEC 62446 and applicable Indian standards.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              5. Do you assist with DISCOM approvals and net-metering?
            </h3>
            <p className="text-gray-600 text-[15px] leading-6 text-justify mt-2">
              Yes, we provide end-to-end support for DISCOM approvals,
              net-metering applications, electrical inspector approvals, and
              final grid synchronization.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              6. What warranties are provided for solar plant components?
            </h3>
            <p className="text-gray-600 text-[15px] leading-6 text-justify mt-2">
              Solar modules typically come with 25-year performance warranties,
              inverters carry 5–10 years warranty (extendable), and mounting
              structures are covered for structural integrity as per
              manufacturer terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-[16px]">
              7. Do you provide Operation & Maintenance (O&M) services?
            </h3>
            <p className="text-gray-600 text-[15px] leading-6 text-justify mt-2">
              Yes, we offer post-commissioning Operation & Maintenance services
              including periodic inspections, performance monitoring, preventive
              maintenance, and troubleshooting to ensure long-term plant
              efficiency.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
