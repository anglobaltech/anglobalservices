import Image from "next/image";
export const revalidate = 86400

export const metadata = {
  title: "Footwear Testing Services under BIS Certification | AN Global Services",
  description:
    "AN Global Services provides professional Footwear Testing services under BIS Certification. We assist with safety, quality, and compliance testing for footwear products, including PPE footwear, as per applicable Indian and ISO standards for domestic and international markets.",
};

export default function Page() {
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
          TESTING OF FOOTWEAR PRODUCTS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/footwear-testing.png"
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
              <h2 className="text-xl font-bold text-gray-900">
                FOOTWEAR TESTING 
              </h2>
              <div className="w-54 h-0.5 bg-[#0072b1] mt-2 mb-4" />

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

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                Whether the market for your footwear is in the EU, the United
                Arab Emirates, Asia, the United States, Australia, Japan, or
                other countries, you'll have to prove that testing has been
                carried out on your products to ensure they meet the legal
                requirements of your destination market. Failing to do that may
                result in your shipment being rejected, while you may face fines
                on top of the cost of your product recall.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-10">
         <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            Footwear Related Laws and Legislation
          </h2>
        <div className="w-95 h-0.5 bg-[#0072b1]  mb-6 " />
          <ul className="list-disc list-inside  space-y-1 text-gray-500 text-[15px] leading-7">
            <li> Protection of intellectual property rights</li>
            <li>Consumer health, environmental protection (restrictions on chemicals in footwear)</li>
            <li>Product composition and labelling requirements</li>
            <li>Personal protective equipment (workwear)</li>
            <li>Product safety and quality</li>
          </ul>

        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            What Are Footwear Testing Methods?
          </h2>
          <div className="w-92 h-0.5 bg-[#0072b1] mt-2 mb-6 " />

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            Here are some of the testing methods used for testing footwear
            according to ISO standards, to ensure safety and quality
            requirements are met. They also pertain to personal protective
            equipment (PPE) used in the workplace.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            1. Compression Resistance
          </h2>
          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            Test your solar panels, you will need to perform a fairly simple
            calculation. Basically, you will need to multiply the volts and
            amps, as this will give you an accurate total wattage:Volts x Amps =
            watts So, to determine the power that your solar panel is
            generating, you will need to first measure the amperage and voltage.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            2. Impact Resistance
          </h2>
          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            This test determines the strength of the footwear's toe cap and its
            resistance to a weight being dropped on it. Testing is carried out
            in stages, and the clearance space remaining in the cap after the
            drop tests is measured. The following standards are part of the
            test:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-gray-500 text-[15px] leading-8">
            <li>Atmospheric conditions</li>
            <li>Shape of the striker</li>
            <li>Amount of weight</li>
            <li>Distance weight is dropped</li>
            <li>Velocity of the drop</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            3. Metatarsal Protection
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Up from the toe area on the top of the foot are the metatarsal
            bones. Protection of this area in safety shoes uses either internal
            or external metatarsal guards. Testing the footwear for metatarsal
            protection is done by fitting a wax form into the footwear, after
            which a weight is dropped onto the protected metatarsal area. The
            height of the wax form is then measured.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            4. Puncture Resistance
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            This test determines the strength of steel or puncture-resistant
            material in the outsole of protective footwear, which is designed to
            prevent sharp objects, such as nails, glass or metal, injuring the
            foot. The test is carried out by forcing a sharp steel pin into the
            footwear, measuring the force and speed of the pin. The test
            includes testing the protective material for flexibility and
            corrosion resistance.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            5. Electric Shock Resistance
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            This is for testing footwear specifically designed for protecting
            the wearer from electric shock. The testing is carried out by
            placing the footwear on a metal platform (electrode) and filling the
            shoe with small metal spheres, among which another electrode is
            placed. A high-voltage current is applied to the footwear for a
            certain period, and resistance or leakage is measured.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            6. Static Dissipation
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Footwear designed to reduce the risk of conducting a charge of
            static electricity from the body to the ground is tested with a
            static dissipation standard. The footwear is either worn by human
            subjects, or metal spheres are placed inside it, after which the
            shoe is put in contact with an electrode plate. Wet and dry
            conditions are tested with a specified voltage applied for a
            specific period of time.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 pb-3">
            7. Conductivity
          </h2>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            This is for testing footwear that's designed to discharge static
            electricity from the wearer's body through shoes into grounded
            floors. This kind of footwear is used in workplaces where the risk
            of igniting volatile chemicals or explosives is dramatically
            reduced. The conductivity test is carried out by placing the
            footwear filled with small metal spheres on an electrode plate. A
            second electrode is placed among the spheres and a voltage is
            applied for a specific time to measure the electrical resistance.
          </p>
        </div>
      </section>
    </main>
  );
}
