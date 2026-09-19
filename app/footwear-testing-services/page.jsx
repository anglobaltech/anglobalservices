import Image from "next/image";
export const revalidate = 86400

export const metadata = {
  title: "Footwear Testing Services under BIS Certification | AN Global Services",
  description:
    "AN Global Services provides professional Footwear Testing services under BIS Certification. We assist with safety, quality, and compliance testing for footwear products, including PPE footwear, as per applicable Indian and ISO standards for domestic and international markets.",
};

export default function TestingFootwearPage() {
  return (
    <main className="w-full bg-white">
      <section
        className="relative w-full h-60 md:h-65 flex items-center justify-center"
        style={{ backgroundImage: "url('/service/pages-of-services-dash-1.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/40" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-extrabold text-center px-4 leading-snug tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
          TESTING OF FOOTWEAR PRODUCTS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-start">
          <div className="w-full max-w-[550px] mx-auto xl:max-w-none xl:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
              <Image
                src="/testings/footwear-testing-services-1.webp"
                alt="Footwear Testing Services"
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
                <h2 className="text-xl font-bold text-gray-900 uppercase">
                  FOOTWEAR TESTING 
                </h2>
                <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-4" />
              </div>

              <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
                A myriad of strict regulations governs the import and sale of
                footwear in the world's developed nations to protect consumers,
                clothing brands and the environment. The European Union and most
                other countries with healthy consumer markets enforce similar
                trade laws and legislation concerning footwear testing methods
                and quality control.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
                Footwear manufacturers, suppliers, and retailers are responsible
                for ensuring their products meet the requirements of commerce
                departments and health authorities in the countries where they
                choose to sell them.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
                Whether the market for your footwear is in the EU, the United
                Arab Emirates, Asia, the United States, Australia, Japan, or
                other countries, you'll have to prove that testing has been
                carried out on your products to ensure they meet the legal
                requirements of your destination market. Failing to do that may
                result in your shipment being rejected, while you may face fines
                on top of the cost of your product recall.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                By leveraging <span className="text-[#0072b1] font-semibold">AN Global Services</span>'s comprehensive footwear testing solutions, 
                you can confidently navigate complex international compliance landscapes. Our rigorous 
                physical and chemical assessments ensure your footwear products meet stringent global 
                safety standards, mitigating risk and protecting your brand's reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 space-y-12">
        
        {/* LAWS AND LEGISLATION */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Footwear Related Laws and Legislation
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>
          
          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-4">
            Navigating the global footwear market requires strict adherence to regional and international 
            safety legislation. Non-compliance can result in severe financial penalties, product recalls, 
            and permanent damage to your brand's reputation.
          </p>

          <ul className="space-y-3 text-gray-600 text-[15px] leading-7">
            <li>• <strong>BIS Certification (India):</strong> Mandatory quality control orders for footwear sold in India.</li>
            <li>• <strong>Consumer Health & Safety:</strong> Strict restrictions on hazardous chemicals (e.g., REACH compliance in the EU).</li>
            <li>• <strong>Product Labelling:</strong> Accurate material composition and origin labelling requirements.</li>
            <li>• <strong>Personal Protective Equipment (PPE):</strong> Rigorous safety standards for occupational and industrial workwear.</li>
            <li>• <strong>Environmental Protection:</strong> Guidelines for sustainable manufacturing and waste disposal.</li>
          </ul>
        </div>

        {/* METHODS */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Detailed Footwear Testing Methods
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-6">
            To ensure ultimate safety, durability, and compliance with ISO and BIS standards, footwear 
            undergoes a battery of intensive physical and chemical tests. Here are the core testing 
            methods we employ:
          </p>

          <div className="space-y-8 text-gray-600 text-[15px] leading-7">
            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">1. Compression Resistance</h3>
              <p className="text-justify">
                This critical safety test evaluates the structural integrity of the footwear's toe cap under extreme, sustained pressure. By simulating a heavy static load crushing the front of the shoe, we measure the remaining clearance inside the toe box to ensure the wearer's toes are protected from catastrophic injury in industrial environments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">2. Impact Resistance</h3>
              <p className="text-justify">
                Designed to simulate falling objects, this test determines the strength of the footwear's toe cap against sudden, high-velocity impacts. A specified heavy steel striker is dropped from a set height onto the toe area. The remaining clearance space inside the cap is precisely measured to ensure it meets protective safety standards.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">3. Metatarsal Protection</h3>
              <p className="text-justify">
                The metatarsal bones sit just above the toes and are highly vulnerable to crushing injuries. Testing this area involves placing a customized wax form inside the shoe and dropping a heavy weight directly onto the metatarsal guard (whether internal or external). The resulting deformation in the wax form is measured to evaluate impact absorption.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">4. Puncture Resistance</h3>
              <p className="text-justify">
                This test evaluates the strength of the puncture-resistant mid-sole (often steel or Kevlar) designed to prevent sharp objects like nails or glass from piercing the bottom of the foot. A sharp steel pin is driven into the outsole at a specific force and speed, measuring the exact force required to penetrate the protective layer.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">5. Electric Shock Resistance (EH)</h3>
              <p className="text-justify">
                Essential for electricians and construction workers, this test ensures the footwear provides secondary protection against accidental contact with live electrical circuits. The shoe is filled with metal spheres and placed on a metal electrode. A high-voltage current is applied, and any electrical leakage or resistance is measured to guarantee safety.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-[16px] mb-2">6. Slip Resistance</h3>
              <p className="text-justify">
                Slips and falls are the most common workplace accidents. Slip resistance testing involves sliding the footwear's sole across various lubricated surfaces (like wet tiles or oily steel floors) while applying downward force. The dynamic coefficient of friction is calculated to ensure the tread provides adequate grip in hazardous conditions.
              </p>
            </div>
          </div>
        </div>

        {/* CHEMICAL TESTING */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Chemical Testing & Restricted Substances Analysis
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-6">
            Beyond physical durability, footwear must be safe for continuous skin contact and environmentally compliant. 
            Regulatory frameworks like REACH (in the EU) and CPSIA (in the US) strictly monitor the chemical composition 
            of leathers, textiles, and synthetic rubbers used in shoe manufacturing. Our advanced chemical testing laboratories screen for:
          </p>

          <ul className="space-y-3 text-gray-600 text-[15px] leading-7">
            <li>• <strong>Azo Dyes & Colorants:</strong> Testing for banned carcinogenic dyes often found in textiles and leathers.</li>
            <li>• <strong>Chromium VI (Cr6+):</strong> A highly toxic, skin-sensitizing compound that can form during the leather tanning process.</li>
            <li>• <strong>Formaldehyde:</strong> Commonly used in adhesives and finishing resins; regulated strictly due to skin irritation and respiratory hazards.</li>
            <li>• <strong>Heavy Metals & Phthalates:</strong> Testing PVC, synthetic rubbers, and plastic components for toxic plasticizers and metals like lead and cadmium.</li>
            <li>• <strong>Dimethyl Fumarate (DMF):</strong> Used as an anti-fungal agent in sachets during shipping, DMF is banned in many countries due to severe allergic reactions.</li>
          </ul>
        </div>

        {/* PRODUCTS TESTED */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Key Footwear Products We Test
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-6">
            Our state-of-the-art testing facility is fully equipped to evaluate a massive spectrum of footwear categories, ensuring that every specific sub-type meets its unique regulatory obligations:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 text-[15px] leading-7">
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Industrial & Safety Shoes (PPE)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Specialized Leather Footwear
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Athletic & Sports Shoes
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> High-Heel & Fashion Footwear
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Rubber & Polymeric Boots (Wellingtons)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0072b1] text-lg font-bold">✔</span> Children's & Infant Footwear
            </li>
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
                q: "Is BIS Certification mandatory for selling footwear in India?",
                a: "Yes, the Government of India has issued Quality Control Orders (QCOs) making BIS certification mandatory for various categories of footwear, including leather shoes, PPE footwear, and rubber/polymeric footwear. Selling non-certified footwear is illegal.",
              },
              {
                q: "What is the difference between normal footwear testing and PPE footwear testing?",
                a: "Normal footwear testing focuses on comfort, basic durability, and chemical safety (like restricted substances). PPE (Personal Protective Equipment) footwear testing involves rigorous, high-impact safety tests like toe-cap compression, puncture resistance, and electrical insulation to ensure workplace safety.",
              },
              {
                q: "How long does the footwear testing process take?",
                a: "The timeline depends on the specific tests required by your target market's regulations. Basic physical testing can take 5-7 days, while comprehensive chemical analysis for REACH or BIS compliance may take 2-3 weeks.",
              },
              {
                q: "Can testing detect harmful chemicals in footwear materials?",
                a: "Absolutely. Advanced chemical testing methods can detect restricted substances like Azo dyes, Chromium VI, formaldehyde, and heavy metals that can cause skin irritation or violate international environmental laws.",
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
