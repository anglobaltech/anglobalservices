import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Trademark Registration Services | AN Global Services",
  description:
    "Get complete Trademark registration services for domestic and industrial products. AN Global Services provides end-to-end trademark registration support.",
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
              MSME REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/msme-nsic-registration (1).png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-3">
            <div className="pt-8">
              <h2 className="text-xl font-bold text-gray-900">
                MSME NSIC REGISTRATION SERVICES
              </h2>
              <div className="w-97 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                MSME stands for Micro, Small and Medium Enterprise. MSME or SSI
                enterprises are the foundation of any economy and act as a key
                engine of economic growth, promoting inclusive development. MSME
                registration or SSI registration online helps businesses avail
                multiple government subsidies and benefits under the MSMED Act
                and MSME schemes. Registered MSMEs gain easier access to bank
                loans, lower interest rates, tax benefits, and various
                government support programs, helping businesses grow sustainably
                and remain competitive in the market.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                Micro, Small and Medium sized enterprises in both the
                manufacturing and service sector can obtain MSME Registration or
                SSI/Small Scale Industry Registration under the MSMED act, MSME
                gov. Although getting MSME online registration is not mandatory
                but it is always suggested to small and medium enterprises to
                get it done it provides a variety of benefits. Benefits such as
                rate of interest charged would be very less, tax subsidies,
                capital investment subsidies and much other support from the
                government sector. We can help your business obtain MSME
                Registration online to avail a host of benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 p-8 md:pb-12 space-y-20">
        <div>
          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            You just need to fill our simple msme regisstration form which would
            ask about your basic information. In case of ssi registration, a ssi
            registration form will be filled. This would be required while
            filing your application with the department. According to the
            details provided to us, we will draft your documentation accordingly
            Going further, we will file your application along with the required
            documents to MSME registrar. Before submission, our expert will
            verify your documents properly. Processing Time: 2 Working Days
          </p>
        </div>
      </section>
    </main>
  );
}
