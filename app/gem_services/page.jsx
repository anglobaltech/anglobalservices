import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "GEM Services | AN Global Services",
  description:
    "Get complete GEM Services for domestic and industrial products. AN Global Services provides end-to-end GEM registration support.",
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
              GEM SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/gem-registration.png"
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
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-45 h-0.5 bg-[#0072b1] mt-2 mb-4 " />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                Government-e-Marketplace (GeM) is a one-stop portal designed to
                facilitate online procurement of goods and services for common
                use provided by various government departments / organizations /
                PSUs. GeM aims to improve transparency, performance and pace in
                public procurement. It offers tools for e-purchase, reverse
                e-purchase and demand aggregation to make it easier for
                government users to get the best value for their money.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                GeM Advantages For Sellers
              </h2>
              <div className="w-70 h-0.5 bg-[#0072b1] mt-2 mb-4" />
              <ul className="list-disc list-inside text-gray-500 text-[15px] leading-6">
                <li>Direct access to all branches of state..</li>
                <li>A one-stop advertising center with minimal effort..</li>
                <li>
                  A one-stop shop for bids / reverse auction of goods /
                  services..
                </li>
                <li>New Product Suggestion Services are open for Sellers.</li>
                <li>
                  Dynamic pricing: prices can be adjusted on the basis of market
                  conditions.
                </li>
                <li>
                  Seller friendly dashboard to sell and track materials and
                  payments.
                </li>
                <li>Effective and effective procurement processes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-6 space-y-10">
        <div>
          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Purchases by Government users via GeM have been approved and made
            mandatory by the Ministry of Finance by adding a new Rule No. 149 to
            the General Financial Regulations, 2017.
          </p>
        </div>
      </section>
    </main>
  );
}
