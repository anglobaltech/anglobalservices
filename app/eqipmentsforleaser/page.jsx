import Image from "next/image";

export default function LaserSolderingMachine() {
  const applications = [
    {
      title: "Jewellery Industry",
      description:
        "Laser soldering enables high-precision jewellery repair and manufacturing without heat damage.",
      details:
        "Stone-in-place repairs, crack fixing, and micro-part joining while preserving the original finish of precious metals.",
      image: "/equipment/soldering-machine/jewellery-laser-soldering-machine.jpg",
      features: [
        "Repairing gold, silver, platinum jewellery",
        "Joining tiny parts like clasps and prongs",
        "Fixing porosity or cracks",
        "Stone-in-place repairs",
      ],
    },
    {
      title: "Electronics & Electrical Components",
      description:
        "Ideal for micro-electronics where conventional soldering may damage sensitive components.",
      details:
        "Precise heat control ensures reliable solder joints for miniature and high-density electronic assemblies.",
      image: "/equipment/soldering-machine/laser-soldering-machine-electronics.png",
      features: [
        "Soldering micro-components on PCBs",
        "Repairing sensors and connectors",
        "Joining heat-sensitive components",
        "High repeatability",
      ],
    },
    {
      title: "Medical Devices",
      description:
        "Medical manufacturing demands contamination-free and highly accurate joining solutions.",
      details:
        "Laser soldering eliminates oxidation and flux residue, ideal for surgical and implantable devices.",
      image: "/equipment/soldering-machine/laser-soldering-machine-medical-product.jpg",
      features: [
        "Assembling surgical instruments",
        "Joining miniature components",
        "Clean, contamination-free joints",
        "Biocompatible materials",
      ],
    },
    {
      title: "Watch & Precision Instruments",
      description:
        "Watchmaking requires extreme accuracy with minimal thermal impact.",
      details:
        "Ultra-thin components can be joined without affecting nearby mechanisms or finishes.",
      image: "/equipment/soldering-machine/laser-soldering-machine-watches-product.jpg",
      features: [
        "Repairing watch cases and crowns",
        "Joining ultra-thin metal parts",
        "Precision movement work",
        "Preserving finishes",
      ],
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="bg-linear-to-r from-gray-700 to-gray-600 text-white h-64 md:h-72 flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            LASER SOLDERING MACHINE
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-80 rounded-xl bg-gray-50 border border-gray-200 shadow-md p-6 flex items-center justify-center">
            <Image
              src="/equipment/soldering-machine/laser-soldering-machinee.png"
              alt="Laser Soldering Machine"
              width={420}
              height={280}
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              What is Laser Soldering?
            </h2>

            <div className="w-70 h-0.5 bg-[#0072b1] mb-5"></div>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
              A laser soldering machine uses a focused laser beam to melt solder
              and join metal components with extreme accuracy and control.
            </p>

            <p className="text-gray-600 text-[15px] leading-relaxed">
              Only a localized area is heated, resulting in clean joints,
              minimal heat-affected zones and superior precision compared to
              conventional soldering methods.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Industry Applications
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            One laser soldering machine — multiple precision-driven industries.
          </p>

          <div className="space-y-24">
            {applications.map((app, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-14 items-center"
              >
                <div
                  className={`relative h-80 rounded-2xl overflow-hidden shadow-lg ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {app.title}
                  </h3>

                  <p className="text-gray-600 text-[15px] leading-relaxed mb-3">
                    {app.description}
                  </p>

                  <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                    {app.details}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-3">
                    {app.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm flex items-start"
                      >
                        <span className="text-[#0072b1] mr-2">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
