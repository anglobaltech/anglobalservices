import Image from "next/image";

export const metadata = {
  title: "Footwear Testing Equipment for BIS Compliance | AN Global Services",
  description:
    "Comprehensive footwear testing equipment for BIS compliance covering physical, mechanical, chemical, and performance testing as per IS standards.",
};

export default function FootwearTestingEquipmentPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-64 md:h-72">
        <Image
          src="/service/isi/about.jpg"
          alt="Footwear Testing Laboratory"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              FOOTWEAR TESTING EQUIPMENT (BIS COMPLIANCE)
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/service/footwear-testing (1).png"
              alt="Footwear Testing Equipment Laboratory"
              width={420}
              height={520}
              className="object-cover w-full"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              BIS Testing of Footwear Products
            </h2>
            <div className="w-80 h-0.5 bg-[#0072b1] mb-5" />

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              Footwear products sold in the Indian market must comply with
              relevant BIS standards such as IS 15298, IS 17043, IS 6721,
              IS 5677, IS 7667 and other applicable Indian Standards. Testing
              laboratories are required to maintain advanced equipment to
              evaluate the physical, mechanical, chemical and performance
              characteristics of footwear.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify">
              Our footwear testing equipment solutions are designed to support
              manufacturers and NABL-accredited laboratories in meeting BIS
              compliance requirements with accuracy, repeatability and safety.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Physical & Upper Material Testing Equipment
            </h2>
            <div className="w-120 h-0.5 bg-[#0072b1] mb-6" />

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              Physical and dimensional testing equipment is used to verify size,
              thickness, mass and conditioning requirements of footwear
              components. Upper and lining material tests assess tensile
              strength, tear resistance, flexing endurance and colour fastness
              of leather and textile materials.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify">
              Common equipment includes universal testing machines (UTM),
              flexing endurance testers, tear strength testers, thickness
              gauges, weighing balances and standard conditioning chambers.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/footwear-testing/footwear-testing.jpg"
              alt="Upper and lining material testing equipment for footwear"
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
              src="/equipment/footwear-testing/sole-testing.jpg"
              alt="Footwear sole abrasion and flex testing equipment"
              width={320}
              height={420}
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 pb-3">
              Sole Material & Adhesion Testing Systems
            </h2>
            <div className="w-118 h-0.5 bg-[#0072b1] mb-6" />

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              Sole material testing evaluates abrasion resistance, hardness,
              density, compression set and flex resistance of rubber, PU, PVC
              and EVA soles. Adhesion testing ensures proper bonding between
              upper and sole materials.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify">
              Equipment such as DIN abrasion testers, Shore hardness testers,
              Ross flex testers, compression set apparatus and sole adhesion
              testers are essential for BIS footwear compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 pb-3">
              Safety, Performance & Chemical Testing Equipment
            </h2>
            <div className="w-105 h-0.5 bg-[#0072b1] mb-6" />

            <p className="text-gray-500 text-[15px] leading-7 text-justify mb-4">
              For safety footwear, testing equipment is required to evaluate toe
              cap impact resistance, compression resistance, penetration
              resistance and electrical insulation properties. Performance
              testing includes slip resistance, heel fatigue and whole shoe
              flexing tests.
            </p>

            <p className="text-gray-500 text-[15px] leading-7 text-justify">
              Chemical testing equipment such as pH meters, Chromium VI testing
              systems, azo dye testing setups and formaldehyde analysis
              apparatus are mandatory for BIS compliance and consumer safety.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/equipment/footwear-testing/footwear-heat-tester.jpg"
              alt="Safety footwear testing equipment for impact and penetration resistance"
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
