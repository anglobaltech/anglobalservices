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
              TRADEMARK REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/trademark-registration (1).png"
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
                TRADEMARK REGISTRATION SERVICES
              </h2>
              <div className="w-100 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                A trademark is a recognizable tag, symbol, word or emblem that
                denotes a particular product or service and legally separates it
                from all other products. A Trademark often refers to the
                ownership of a particular registered trademark.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                The trademark is generally designated by the following symbols:
              </h2>
              <div className="w-160 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                1. â„¢(stand for an unregistered trademark): it should be held
                with a trademark during the registration process.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify mt-2">
                2. Â®(stand for a registered trademark): it should be held with
                a trademark after the registration process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 p-8 md:pb-12 space-y-20">
        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Trademark Registration Services
          </h2>
          <div className="w-80 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            An individual or organization must submit an application to the
            Office of the Controller General for Patents, Designs and Trade
            Marks, properly accompanied by the necessary documents. AN Global
            Services provides support to those individuals / companies who want
            to register their trademarks / products. We are a group of qualified
            and experienced professionals who provide extensive registration
            services in India.
          </p>
        </div>
      </section>
    </main>
  );
}
