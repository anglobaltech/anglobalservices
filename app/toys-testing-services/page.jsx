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
        style={{ backgroundImage: "url('/service/pages-of-services-dash-1.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/40" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-extrabold text-center px-4 leading-snug tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
          TESTING OF TOYS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-start">
          <div className="w-full max-w-[550px] mx-auto xl:max-w-none xl:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
              <Image
                src="/testings/toys-testing-services-1.webp"
                alt="Toys Testing Services"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <div className="inline-block">
                <h2 className="text-xl font-bold text-gray-900 uppercase">TOYS TESTING</h2>
                <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-4" />
              </div>

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

              <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
                At AN Global Services, we assist toy manufacturers and importers
                in meeting regulatory requirements through comprehensive toy
                testing and certification support. Our NABL-accredited laboratory 
                ensures strict adherence to IS 9873 and IS 15644 standards for 
                BIS certification, guaranteeing your products achieve the highest 
                levels of safety and market readiness without unnecessary delays.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                By partnering with <span className="text-[#0072b1] font-semibold">AN Global Services</span>, brands can confidently navigate complex compliance landscapes, 
                mitigate safety risks, and build unwavering consumer trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-12">
        {/* LAWS AND LEGISLATION */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Regulations Governing Toys Testing
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>
          
          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-4">
            Toys must comply with extremely stringent safety directives before they can be placed on the market. In India, 
            BIS certification is mandatory under IS 9873 and IS 15644. Globally, frameworks like EN71 (Europe), 
            ASTM F963 (USA), and ISO 8124 govern the manufacturing and import of children's products to prevent 
            hazardous exposure.
          </p>

          <ul className="space-y-3 text-gray-600 text-[15px] leading-7">
            <li>• <strong>Mechanical & Physical Safety:</strong> Ensuring toys don't break into sharp edges or choking hazards.</li>
            <li>• <strong>Chemical Safety (Restricted Substances):</strong> Limiting exposure to toxic metals and plasticizers.</li>
            <li>• <strong>Electrical Safety:</strong> Regulating battery-operated or electronic toys to prevent burns or shocks.</li>
            <li>• <strong>Flammability:</strong> Strict burn rate limits for stuffed toys, textiles, and costumes.</li>
            <li>• <strong>Labelling & Age Grading:</strong> Accurate hazard warnings and age-appropriateness labeling.</li>
          </ul>
        </div>

        {/* METHODS */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Detailed Toys Testing Methods
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-6">
            To guarantee safety and durability, every toy undergoes rigorous laboratory evaluation simulating 
            real-world play, wear-and-tear, and foreseeable misuse by children. Here are the core testing methods:
          </p>

          <div className="space-y-8 text-gray-600 text-[15px] leading-7">
            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">1. Mechanical and Physical Testing</h3>
              <p className="text-justify">
                Mechanical and physical testing evaluates the structural integrity and physical safety of toys. We focus on identifying hazards such as sharp edges, sharp points, rough surfaces, and weak components that may break during use. Toys are subjected to high-impact drop tests, compression, and stress tests to simulate real-life play conditions and ensure the toy does not cause cuts, punctures, or other injuries.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">2. Small Parts Testing</h3>
              <p className="text-justify">
                Small parts testing is critical for assessing whether detachable components of a toy pose a choking risk, especially for children under three. Toys and their parts are examined using a standardized "small parts cylinder". This ensures that even after wear, breakage, or rough handling, no hazardous small parts are generated that could be swallowed or inhaled.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">3. Chemical & Heavy Metal Testing</h3>
              <p className="text-justify">
                Chemical testing verifies that toys do not contain harmful substances that could harm children through skin contact, ingestion, or prolonged exposure. We test for heavy metals (lead, cadmium, barium), phthalates (plasticizers in PVC), and other restricted chemicals present in paints, surface coatings, plastics, and textiles to ensure compliance with global toxicity limits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">4. Flammability Testing</h3>
              <p className="text-justify">
                Flammability testing measures how quickly toy materials ignite and how flames spread when exposed to a direct heat source. This is absolutely critical for soft plush toys, stuffed animals, children's costumes, and textile-based products. The test evaluates whether materials sustain flames or self-extinguish rapidly, preventing severe fire-related injuries.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">5. Electrical Safety Testing</h3>
              <p className="text-justify">
                Electrical safety testing applies to toys that operate using batteries, electrical circuits, or electronic components. These tests assess internal insulation quality, resistance to overheating, battery compartment security, and protection against electrical shocks. We ensure toys function safely under abnormal conditions without causing burns or short circuits.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">6. Torque and Tension Testing</h3>
              <p className="text-justify">
                Torque and tension testing evaluates the strength of toy components when subjected to twisting and pulling forces by a child. Parts such as wheels, buttons, sewn-on eyes, and decorative elements are tested to ensure they do not loosen or detach during normal play or foreseeable misuse, thereby preventing choking hazards.
              </p>
            </div>
          </div>
        </div>

        {/* TYPES OF TOYS WE TEST */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Comprehensive List of Toys We Test
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-6">
            Our NABL-accredited laboratories are fully equipped to evaluate a massive spectrum of children's products. We ensure that no matter how complex or innovative your product is, it meets all global compliance metrics:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 text-[15px] leading-7">
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Plush & Soft Stuffed Toys
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Battery-Operated & Electronic Toys
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Educational & STEM Kits
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Ride-on Toys & Tricycles
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Wooden & Board Games
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Art Materials & Play Dough
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Construction & Building Blocks
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Bath Toys & Inflatables
            </li>
          </ul>
        </div>

        {/* WHY CHOOSE US / BRAND IMPORTANCE */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Why Toy Safety Certification is Critical
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-4">
            Skipping or failing toy safety protocols isn't just a legal issue—it's a massive financial and ethical risk. Here is why prioritizing comprehensive testing with <strong>AN Global Services</strong> protects your business:
          </p>

          <ul className="space-y-3 text-gray-600 text-[15px] leading-7">
            <li>• <strong>Avoid Product Recalls:</strong> Recalling unsafe toys destroys profit margins and permanently damages consumer trust. Testing catches design flaws before mass production.</li>
            <li>• <strong>Seamless Customs Clearance:</strong> Exporting or importing toys without verified BIS, EN71, or ASTM certificates will result in shipments being seized or destroyed at the border.</li>
            <li>• <strong>Protect Brand Reputation:</strong> Parents are highly vigilant about the products they buy for their children. A certified safe toy is a major marketing advantage.</li>
            <li>• <strong>Avoid Legal Liability:</strong> If a child is injured by a non-compliant toy, the manufacturer and importer are held entirely legally responsible. Testing provides a verified shield of compliance.</li>
          </ul>
        </div>

        {/* FAQS */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Is BIS Certification mandatory for toys in India?",
                a: "Yes, under the Toys (Quality Control) Order issued by the Government of India, all toys manufactured or imported for children under 14 years of age must bear the ISI mark and comply with IS 9873 and IS 15644 standards.",
              },
              {
                q: "What age groups require small parts testing?",
                a: "Small parts testing is strictly mandated and highly scrutinized for toys intended for children under 3 years (36 months) of age, as this age group is at the highest risk for choking hazards.",
              },
              {
                q: "Why do soft toys require flammability testing?",
                a: "Soft and stuffed toys are often made of highly flammable synthetic fibers. Flammability testing ensures that if a child is near a heat source (like a candle or heater), the toy will not rapidly engulf in flames, giving the child time to drop it safely.",
              },
              {
                q: "Do electronic toys require chemical testing?",
                a: "Yes. In addition to electrical safety, the plastic casings, buttons, and paints used on electronic toys must undergo chemical testing to ensure they do not contain toxic heavy metals or banned phthalates.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 cursor-pointer"
              >
                <summary className="flex justify-between items-center font-medium text-gray-900 text-[16px]">
                  {item.q}
                  <span className="text-[#0072b1] text-xl group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-[15px] leading-7">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
