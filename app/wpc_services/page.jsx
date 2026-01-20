import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ISI Certification Services | AN Global Services",
  description:
    "Get complete ISI Certification services for domestic and industrial products. AN Global Services provides end-to-end ISI certification support.",
};

export default function ISIPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="BIS ISI Certification Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              WPC CERTIFICATE SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/wpc-services.png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                WPC: ETA & Import License, Equipment Type Approval & DPL
              </h2>
              <div className="w-150 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                The Wireless Planning & Coordination (WPC) Wing of the Ministry
                of Communication & Information Technology, created in 1952, is
                the national radio regulatory nodal agency of the Government of
                India and is responsible for planning, regulating, and managing
                the limited resources of Radio Frequency (RF) spectrum and
                associated satellite orbits, including geo-stationary satellite
                orbit as well as licensing of wireless stations in the country
                under the Indian Telegraph Act 1885 (ITA 1885) and the Indian
                Wireless Telegraphy Act 1933 (IWTA 1933), as statutory
                requirement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Who can Apply?
              </h2>
              <div className="w-40 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                Manufacturers/Importers of products with Bluetooth and Wifi
                features are required to get the WPC approval and Import license
                Certificate prior to be sold into India Market.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Process Time (ETA)
              </h2>
              <div className="w-50 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                Total time for Equipment Type Approval will be approx. 7 days
                from the date of submission of Application documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 space-y-20">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Products under WPC Approval
          </h2>
          <div className="w-90 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Wireless Bluetooth watches, Bluetooth Speakers, Bluetooth
            Headphones, Wireless music players, Wireless Water Heaters, Wireless
            Home Appliances, Wireless Car Radio, Radio Frequency Identification
            (RFID) Tags and Readers, Wireless Medical products used for patient
            profiling Laptops, Mobile Phones, Wireless Mouse and Keypads, Remote
            key for entry, Wireless remotes, and any other radio frequency
            modules.
          </p>
        </div>
      </section>
    </main>
  );
}
