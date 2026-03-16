import Image from "next/image";

export const metadata = {
  title: "BIS Certified Toys Testing & Safety Compliance Services | AN Global Services",
  description:
    "Get expert assistance for BIS Certified Toys Testing. AN Global Services supports toy manufacturers and importers with safety, chemical, electrical, flammability, torque, and tension testing to meet regulatory requirements in India and global markets.",
};

export default function TestingToysPage() {
  return (
    <main className="w-full bg-white">
      <section
        className="relative w-full h-60 md:h-65 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/70" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4 leading-snug">
          TESTING OF TOYS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/toys-testing (1).png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="pt-5">
              <h2 className="text-xl font-bold text-gray-900">TOYS TESTING</h2>
              <div className="w-38 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
                Toy testing plays a crucial role in ensuring the safety,
                quality, and compliance of toys before they reach children.
                Since toys are used by infants and young children, they are
                subject to strict national and international safety regulations
                to prevent hazards such as choking, chemical exposure, sharp
                edges, or mechanical failure.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
                Manufacturers, importers, and sellers are responsible for
                ensuring that toys comply with the applicable safety standards
                of the target market. Whether toys are being sold in India, the
                European Union, the United States, the Middle East, or other
                regions, proper testing and certification are mandatory.
                Non-compliance may lead to shipment rejection, product recalls,
                penalties, or even a complete ban on sales.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                At AN Global Services, we assist toy manufacturers and importers
                in meeting regulatory requirements through comprehensive toy
                testing and certification support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-10">
        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            Regulations Governing Toys Testing
          </h2>
          <div className="w-87 h-0.5 bg-[#0072b1]  mb-6 " />
          <ul className="list-disc list-inside  space-y-1 text-gray-500 text-[15px] leading-6">
            <li> Mechanical and physical safety</li>
            <li>Chemical safety (restricted substances)</li>
            <li>Electrical safety (battery-operated or electronic toys)</li>
            <li>Labelling, warnings, and age grading (workwear)</li>
            <li>Flammability</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Toys Testing Methods
          </h2>
          <div className="w-52 h-0.5 bg-[#0072b1] mt-2 mb-4 " />

          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            Below are some of the key tests performed to ensure toy safety and
            quality:
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            1. Mechanical and Physical Testing
          </h2>
          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            Mechanical and physical testing evaluates the structural integrity
            and physical safety of toys. This testing focuses on identifying
            hazards such as sharp edges, sharp points, rough surfaces, and weak
            components that may break during use. Toys are subjected to impact,
            drop, compression, and stress tests to simulate real-life play
            conditions. The objective is to ensure that the toy does not cause
            cuts, punctures, or other injuries, especially for toys designed for
            children under three years of age.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            2. Small Parts Testing
          </h2>
          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            Small parts testing is conducted to assess whether detachable
            components of a toy pose a choking risk. Toys and their parts are
            examined using a standardized small parts cylinder to determine if
            any components can fit inside it. This testing is particularly
            critical for toys intended for young children, as small parts may be
            swallowed or inhaled. The test helps ensure that toys remain safe
            even after wear, breakage, or rough handling.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            3. Chemical Testing
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            This test verifies that toys do not contain harmful substances such
            as heavy metals, phthalates, or other restricted chemicals. It
            ensures compliance with chemical safety limits set by regulatory
            authorities.Chemical testing ensures that toys do not contain
            hazardous substances that could harm children. This includes testing
            for heavy metals, plasticizers, and other restricted chemicals that
            may be present in paints, coatings, plastics, textiles, or other
            materials. The purpose of chemical testing is to confirm that
            material compositions comply with prescribed safety limits and do
            not pose health risks through skin contact, ingestion, or prolonged
            exposure.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            4. Flammability Testing
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Flammability testing measures how quickly toy materials ignite and
            how flames spread when exposed to a heat source. This testing is
            particularly important for soft toys, stuffed toys, costumes, and
            textile-based products. The test evaluates whether materials burn
            rapidly or sustain flames, helping to reduce the risk of
            fire-related injuries during use or accidental exposure to heat
            sources.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            5. Electrical Safety Testing
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Electrical safety testing applies to toys that operate using
            batteries, electrical circuits, or electronic components. These
            tests assess insulation quality, resistance to overheating, battery
            compartment safety, and protection against electrical shocks. The
            objective is to ensure that electrical toys function safely under
            normal and abnormal conditions, without causing burns, short
            circuits, or other electrical hazards.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            6. Torque and Tension Testing
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Torque and tension testing evaluates the strength of toy components
            when subjected to twisting and pulling forces. Parts such as wheels,
            buttons, screws, and decorative elements are tested to ensure they
            do not loosen or detach during normal play or misuse. This testing
            helps prevent small parts from breaking off and becoming choking
            hazards.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            7. Age Grading and Labelling Review
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Age grading and labelling review ensures that toys are appropriately
            classified according to the child’s age group and developmental
            capabilities. Labels, warnings, instructions, and safety markings
            are carefully examined to confirm that they are clear, accurate, and
            compliant with regulatory requirements. Proper labelling helps
            caregivers make informed purchasing decisions and ensures toys are
            used as intended.
          </p>
        </div>
      </section>
    </main>
  );
}
