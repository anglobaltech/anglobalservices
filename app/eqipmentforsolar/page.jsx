import Image from "next/image";

export const metadata = {
  title: "Solar Panel Testing & Inspection Equipment | AN Global Services",
  description:
    "Advanced solar panel testing and inspection equipment for PV module verification including HIPOT testing, mechanical load testing, and hail impact testing.",
};

export default function SolarTestingEquipmentPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-64 md:h-72">
        <Image
          src="/service/isi/about.jpg"
          alt="Solar Panel Testing Laboratory"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              SOLAR PANEL TESTING & INSPECTION EQUIPMENT
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/solar-testing/solar-panel-testing.png"
              alt="Photovoltaic Module Testing"
              width={420}
              height={520}
              className="object-cover w-full"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Verify Photovoltaic (PV) Modules
            </h2>
            <div className="w-80 h-0.5 bg-[#0072b1] mb-5" />

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              As the solar industry continues to expand, the need for reliable,
              accurate, and automated testing of photovoltaic modules has become
              critical. Our solar panel testing and inspection equipment is
              designed to help manufacturers verify safety, durability, and
              electrical performance before modules are deployed in the field.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify">
              All testing systems can be customized to meet specific safety,
              functional, and performance requirements while maintaining
              compliance with international standards such as UL 61730-1 and UL
              61730-2. Each system includes advanced safety features and
              ergonomic design for secure and efficient operation.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Wet or Dry High Potential (HIPOT) Testing System
            </h2>
            <div className="w-120 h-0.5 bg-[#0072b1] mb-6" />

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              The Wet and Dry HIPOT Testing System is used to evaluate the
              electrical insulation integrity of PV modules. This test ensures
              that modules can safely withstand high voltage stress without
              insulation breakdown or leakage.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify">
              The system supports both wet leakage current testing and dry
              voltage testing, enabling complete electrical safety verification.
              Automated controls and built-in safety interlocks ensure accurate
              results while protecting operators during high-voltage testing.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/solar-testing/hipot-testing1.jpeg"
              alt="Solar panel HIPOT testing system for electrical insulation safety"
              width={420}
              height={520}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/solar-testing/mechanical-load-test.jpg"
              alt="Mechanical load test system for photovoltaic module durability"
              width={420}
              height={520}
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 pb-3">
              Mechanical Load Test System (Static & Dynamic)
            </h2>
            <div className="w-118 h-0.5 bg-[#0072b1] mb-6" />

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              The Mechanical Load Test System is designed to measure the
              structural durability and long-term performance of photovoltaic
              panels under real-world stress conditions such as wind pressure,
              snow load, and mechanical fatigue.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              The system uses pneumatically powered cylinders with suction
              mechanisms that securely attach to the module surface. Load
              parameters including force, speed, and duration are precisely
              controlled through a programmable test schedule.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify">
              Zone-based testing allows selective evaluation of specific areas
              of the panel. The system supports module sizes up to 2009 mm ×
              1232 mm and complies with IEC 61215-1-1 requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 pb-3">
              Module Breakage & Hail Impact Test System
            </h2>
            <div className="w-105 h-0.5 bg-[#0072b1] mb-6" />

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              This system evaluates the resistance of photovoltaic modules
              against extreme environmental conditions such as hailstorms and
              sudden impact forces, ensuring long-term safety and operational
              reliability.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              The module breakage test applies controlled mechanical impact to
              assess glass strength and structural integrity in accordance with
              IEC 61730-2 standards.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify">
              The hail impact test uses a pneumatically powered launcher to fire
              pre-formed ice spheres at the module, accurately simulating real
              hailstorm conditions. The system supports module sizes up to 2009
              mm × 1232 mm.
            </p>
          </div>

          <div className="relative  rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/solar-testing/hail-impact-test.jpg"
              alt="Solar panel hail impact and breakage testing system"
              width={420}
              height={520}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
