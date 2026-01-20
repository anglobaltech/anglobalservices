import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "EPR Registration Services | AN Global Services",
  description:
    "Get complete EPR Registration services for domestic and industrial products. AN Global Services provides end-to-end ERP registration support.",
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
              EPR REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/epr-registration.png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-5">
            <div className="pt-5">
              <h2 className="text-xl font-bold text-gray-900">
                EPR CERTIFICATION
              </h2>
              <div className="w-50 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                EPR stands for Extended Producer Responsibility. It is a
                registration for the Indian manufacturer / importer of E-waste
                management material. EPR Authorization is provided by the
                Central Pollution Control Board ( CPCB) under MoEFCC, Government
                of India. The manufacturer / importer of electronic and
                electrical goods has been given the responsibility, with the
                authorisation of the EPR, to control the E-waste of the items at
                the end of their lifetime.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                How to get EPR Authorization?
              </h2>
              <div className="w-75 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                The manufacturer / importer of electronic and electrical goods
                must provide documentary evidence of an E-waste management
                program and arrangement with the Recycling Agency. AN Global
                Services provides full support for handling the paperwork and
                the formalities for securing the approval of the EPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 p-8 md:pb-12 space-y-20">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Products Under EPR Registration
          </h2>
          <div className="w-95 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            EPR (Extended Producer Responsibility) Registration is mandatory for
            manufacturers, importers, and brand owners dealing with electronic
            and electrical equipment. The registration applies to a wide range
            of products, including but not limited to: Wireless Bluetooth
            watches, Bluetooth speakers, Bluetooth headphones, wireless music
            players, wireless water heaters, wireless home appliances, wireless
            car radios, radio frequency identification (RFID) tags and readers,
            wireless medical devices used for patient profiling, laptops, mobile
            phones, wireless mouse and keypads, remote keys for vehicle entry,
            wireless remotes, and all other products containing radio frequency
            or electronic modules.
          </p>
        </div>
      </section>
    </main>
  );
}
