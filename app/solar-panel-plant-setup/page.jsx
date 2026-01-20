import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Solar Plant Setup Services  | AN Global Services",
  description:
    "End-to-end Solar Plant Setup &  services including engineering, procurement, installation, testing, commissioning, and grid interconnection.",
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

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
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

          <div className="flex flex-col gap-8 mt-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-6">
                <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
              </div>

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                Our Solar Panel Plant Setup Services offer a complete end-to-end
                solution covering engineering, procurement, construction,
                testing, and commissioning of solar power plants. We ensure
                precise system design, quality component selection, and
                efficient installation to deliver high-yield, durable, and
                future-ready solar installations for both rooftop and
                ground-mounted plants.
              </p>

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                From detailed site assessment and feasibility studies to
                mechanical mounting, DC/AC cabling, earthing, inverter
                installation, and SCADA integration, we manage every stage of
                the project with strict adherence to safety standards and
                industry best practices, ensuring seamless execution and grid
                readiness.
              </p>

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                Post-installation, we conduct comprehensive testing and
                commissioning activities including insulation resistance
                testing, polarity and continuity checks, IV curve analysis,
                thermal imaging, and performance verification. This structured
                testing process ensures safe grid synchronization, optimal
                energy generation, and long-term operational reliability of the
                solar plant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Solar Plant Setup Services 
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
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
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Testing & Commissioning
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-65 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-4">
            We conduct rigorous testing and commissioning procedures to ensure
            that the solar plant meets international safety and performance
            standards, including IEC 62446.
          </p>

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
            <li>Open circuit voltage & short circuit current verification</li>
            <li>Thermal imaging using infrared thermography</li>
            <li>Electroluminescence (EL) testing for internal defects</li>
          </ul>

          <p className="font-semibold text-gray-800 mt-6 mb-2">
            C. Operational Verification
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[15px] text-gray-500 leading-7">
            <li>Inverter efficiency testing</li>
            <li>Performance Ratio (PR) analysis</li>
            <li>SCADA system calibration and validation</li>
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
        <h2 className="text-xl font-semibold text-gray-900">Conclusion</h2>
        <div className="w-full h-0.5 bg-gray-200 relative mb-6">
          <span className="absolute left-0 top-0 h-0.5 w-30 bg-[#0072b1]"></span>
        </div>

        <p className="text-gray-500 text-[15px] leading-7 text-justify">
          With our comprehensive Solar services, we ensure seamless project
          execution, regulatory compliance, and optimal energy generation. Our
          structured approach guarantees long-term performance, safety, and
          maximum return on investment for your solar power plant.
        </p>
      </section>
    </main>
  );
}
