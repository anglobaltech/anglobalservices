import Image from "next/image";

export const metadata = {
  title: "Gold Testing Equipment for BIS Hallmarking | AN Global Services",
  description:
    "Complete range of gold testing equipment for BIS hallmarking centres, jewellery testing laboratories and refineries including XRF, fire assay, chemical and sample preparation systems.",
};

export default function GoldTestingEquipmentPage() {
  return (
    <main className="bg-white">
      <section className="relative w-full h-64 md:h-72">
        <Image
          src="/service/isi/about.jpg"
          alt="Gold Testing Laboratory Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55 flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              GOLD TESTING EQUIPMENT FOR BIS HALLMARKING LABS
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/service/gold-testing-equipment.png"
              alt="Gold Testing Equipment Laboratory"
              width={420}
              height={520}
              className="object-cover w-full"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              BIS Hallmarking & Gold Purity Testing
            </h2>
            <div className="w-32 h-0.5 bg-[#0072b1] mb-5" />

            <p className="text-gray-600 text-[15px] leading-7 mb-4 text-justify">
              Gold jewellery and bullion sold in India must comply with BIS
              Hallmarking requirements. Hallmarking centres, jewellery testing
              laboratories and refineries rely on high-precision analytical
              equipment to verify purity, fineness and elemental composition.
            </p>

            <p className="text-gray-600 text-[15px] leading-7 text-justify">
              Our gold testing solutions support both non-destructive and
              destructive testing methods, ensuring accuracy, traceability and
              compliance with national and international assay standards.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Primary Gold Testing Equipment
            </h2>
            <div className="w-40 h-0.5 bg-[#0072b1] mb-6" />

            <p className="text-gray-600 text-[15px] leading-7 mb-4 text-justify">
              Primary testing instruments determine gold purity, alloy
              composition and assay value. XRF spectrometers offer rapid,
              non-destructive analysis, while fire assay remains the reference
              method for maximum accuracy.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px]">
              <li>X-Ray Fluorescence Spectrometer (XRF)</li>
              <li>Fire Assay Furnace</li>
              <li>Cupellation Furnace</li>
              <li>Muffle Furnace</li>
              <li>High-Precision Assay Balance</li>
            </ul>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/gold-testing/xrf-testing-machine.jpg"
              alt="XRF gold testing equipment"
              width={420}
              height={520}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/gold-testing/fire-assay-laboratory-equipment.jpg"
              alt="Fire assay gold testing laboratory"
              width={420}
              height={520}
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Fire Assay Accessories & Furnaces
            </h2>
            <div className="w-48 h-0.5 bg-[#0072b1] mb-6" />

            <p className="text-gray-600 text-[15px] leading-7 mb-4 text-justify">
              Fire assay is the most accurate method for gold and precious metal
              determination. Reliable results depend on controlled furnaces and
              high-quality consumables designed for assay laboratories.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px]">
              <li>Cupels and Crucibles</li>
              <li>Assay Lead and Fluxes</li>
              <li>Parting Flasks and Beakers</li>
              <li>Test Tubes and Laboratory Tongs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Chemical Testing & Sample Preparation
            </h2>
            <div className="w-56 h-0.5 bg-[#0072b1] mb-6" />

            <p className="text-gray-600 text-[15px] leading-7 mb-4 text-justify">
              Chemical testing and sample preparation are essential for accurate
              gold analysis. Proper cutting, polishing and annealing ensure
              consistency across XRF and fire assay methods.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px]">
              <li>Gold Acid Test Kits</li>
              <li>Fume Hood, Hot Plate & Magnetic Stirrer</li>
              <li>Rolling Mill & Annealing Furnace</li>
              <li>Sample Cutting & Polishing Machines</li>
              <li>Analytical Balance, Micrometer & Vernier Caliper</li>
            </ul>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/gold-testing/chemical-testing-equipment.jpg"
              alt="Gold sample preparation and chemical testing equipment"
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
