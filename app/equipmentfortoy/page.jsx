import Image from "next/image";

export const metadata = {
  title: "TOYS TESTING & INSPECTION EQUIPMENT | AN GLOBAL SERVICES",
  description:
    "Complete toys testing and inspection equipment for BIS certification as per IS 9873 and IS 15644. Mechanical, flammability, chemical, electrical and sound testing systems.",
};

const equipmentSections = [
  {
    title: "Flammability Tests (IS 9873 Part 2)",
    description:
      "Flammability testing evaluates the fire resistance of toy materials to prevent rapid ignition and flame spread.",
    details:
      "Automated flame testing systems ensure accurate results with built-in safety interlocks for operator protection.",
    image: "/equipment/toys-testing/flamming-tester-machine.jpg",
    equipment: [
      "Flammability Test Chamber",
      "Flame Propagation Tester",
      "Burning Rate Test Apparatus",
      "Stop Watch",
    ],
  },
  {
    title: "Chemical & Toxicity Tests (IS 9873 Part 3)",
    description:
      "Chemical testing measures harmful substances and heavy metal migration to ensure toys are safe for children.",
    details:
      "Advanced analytical instruments detect trace elements with high precision following BIS-approved procedures.",
    image: "/equipment/toys-testing/icp-oes-testing-machine.jpg",
    equipment: [
      "ICP-OES / ICP-MS",
      "UV-Visible Spectrophotometer",
      "Atomic Absorption Spectrophotometer (AAS)",
      "pH Meter",
      "Fume Hood",
      "Hot Plate",
      "Magnetic Stirrer",
    ],
  },
  {
    title: "Mechanical & Physical Tests (IS 9873 Part 1)",
    description:
      "Mechanical testing ensures toys meet structural integrity and safety standards. These tests evaluate strength, durability, and physical hazards to prevent injuries.",
    details:
      "All systems are customizable and designed to comply with IS 9873 standards. Ergonomic designs and advanced safety features ensure reliable and efficient testing.",
    image: "/equipment/toys-testing/universal-testing-machine.jpg",
    equipment: [
      "Universal Testing Machine (UTM)",
      "Torque Tester",
      "Tension Tester",
      "Compression Tester",
      "Impact Tester",
      "Drop Test Apparatus",
      "Sharp Edge Tester",
      "Sharp Point Tester",
      "Small Parts Cylinder",
      "Flexure Tester",
      "Stability Test Platform",
      "Seam Strength Tester",
    ],
  },
  {
    title: "Migration of Elements – Sample Preparation",
    description:
      "Specialized systems for preparing toy samples for heavy metal migration analysis.",
    details:
      "Accurate digestion and extraction systems are critical for IS 9873 Part 3 compliance.",
    image: "/equipment/toys-testing/microwave-testing-machine.jpg",
    equipment: [
      "Microwave Digestion System",
      "Acid Digestion Apparatus",
      "Analytical Balance",
      "Glassware Set",
    ],
  },
  {
    title: "Material Identification & General Tests",
    description:
      "Precision tools for identifying materials, dimensions, and physical properties of toy components.",
    details:
      "Ensures compliance with dimensional tolerances and material specifications as per BIS norms.",
    image: "/equipment/toys-testing/ftir-spectrometer-machine.jpg",
    equipment: [
      "FTIR Spectrophotometer",
      "Thickness Gauge",
      "Vernier Caliper",
      "Micrometer",
      "Conditioning Chamber",
    ],
  },
];

export default function ToysTestingEquipment() {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="bg-linear-to-r from-gray-700 to-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-6 h-64 md:h-72 flex items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            TOYS TESTING & INSPECTION EQUIPMENT
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/toys-testing/toys-testing-lab.jpg"
              alt="Toys Testing Laboratory"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-[#0072b1] inline-block pb-2">
              Verify Toys Safety & Compliance
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              With increasing focus on child safety, reliable testing has become
              essential. Our advanced toys testing equipment helps manufacturers
              verify safety, durability, and regulatory compliance.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              All systems are designed to comply with IS 9873 and IS 15644,
              featuring advanced safety mechanisms and ergonomic operation.
            </p>
          </div>
        </div>
      </section>

      {/* EQUIPMENT SECTIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-20 space-y-20">
        {equipmentSections.map((section, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-start ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-contain p-4"
              />
            </div>

            {/* CONTENT */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-[#0072b1] inline-block pb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                {section.description}
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                {section.details}
              </p>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Equipment Included
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-[15px] text-gray-600">
                  {section.equipment.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#0072b1] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* IMPORTANT NOTES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-8 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Important Notes
          </h2>
          <ul className="space-y-3 text-gray-700 text-[15px]">
            <li>
              ⚠ IS 9873 Part 3 (Heavy Metal Migration) is mandatory for BIS
              certification.
            </li>
            <li>⚠ Electrical toys must comply with IS 15644.</li>
            <li>⚠ NABL accreditation and proper calibration are compulsory.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
