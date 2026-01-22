
import Image from "next/image";

export const metadata = {
  title: "Gold & Silver BIS Hallmarking Certification & Setup Services | AN Global Services",
  description:
    "Get end-to-end assistance for BIS Hallmarking Certification of gold and silver jewellery. AN Global Services supports jeweller registration, hallmarking setup, HUID compliance, documentation, and BIS portal coordination.",
};

const SectionTitle = ({ title, width = "w-48" }) => (
  <>
    <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{title}</h2>
  </>
);

export default function GoldHallmarkingPage() {
  return (
    <main className="w-full bg-white">
      <section
        className="relative w-full h-60 md:h-72 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/70" />
        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4 max-w-4xl">
        BIS HALLMARKING CERTIFICATION SERVICES
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Image
            src="/service/gold-hallmarking-setup.png"
            alt="Gold Hallmarking Setup"
            width={500}
            height={520}
            className="rounded-xl shadow-lg"
            priority
          />

          <div>
            <SectionTitle title="What is Hallmarking?" width="w-56" />
             <div className="w-full h-0.5 bg-gray-200 mt-2 mb-4 relative">
              <div className="absolute left-0 top-0 h-0.5 w-full bg-[#0072b1]"></div>
            </div>

            <p className="text-gray-600 text-[15px] leading-7 text-justify">
              Hallmarking is an official process of certifying the purity and
              fineness of precious metal articles such as gold and silver
              jewellery. In India, this certification is governed by the Bureau
              of Indian Standards (BIS), the national standards body responsible
              for ensuring quality and consumer protection.
            </p>

            <p className="mt-4 text-gray-600 text-[15px] leading-7 text-justify">
              The BIS Hallmark provides a reliable and transparent guarantee
              that the precious metal content in a jewellery article meets the
              declared fineness. It ensures that consumers receive the correct
              purity for the price they pay, thereby preventing adulteration and
              misrepresentation in the jewellery trade.
            </p>

            <p className="mt-4 text-gray-600 text-[15px] leading-7 text-justify">
              Hallmarking is carried out through BIS-recognized Assaying &
              Hallmarking Centres, where jewellery is scientifically tested
              using approved assaying methods. Only after successful
              verification of purity are official hallmarking marks applied on
              the jewellery article.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 pb-10">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <SectionTitle title="Gold Hallmarking Overview" width="w-72" />

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Is Hallmarking Compulsory?</h3>
            <p className="text-gray-600 text-[15px] leading-7 text-justify">
              Yes. From 1 April 2023, hallmarking is compulsory for new gold
              jewellery sold in India. Jewellers must be registered with BIS and
              get jewellery hallmarked from BIS-recognized Assaying &
              Hallmarking Centres.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Benefits to Consumers</h3>
              <p className="text-gray-600 text-[15px] leading-7 text-justify">
                Ensures correct purity, value for money, transparency, and
                third-party assurance of gold or silver quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Benefits to Jewellers</h3>
              <p className="text-gray-600 text-[15px] leading-7 text-justify">
                Builds customer trust, ensures legal compliance, enhances
                credibility, and allows nationwide sale of hallmarked jewellery.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-3">
              Hallmarking Centre & Monitoring
            </h3>
            <p className="text-gray-600 text-[15px] leading-7 text-justify">
              Hallmarking Centres are BIS-recognized facilities with required
              infrastructure, trained manpower, and testing facilities. Regular
              surveillance audits and market sample testing are carried out to
              maintain credibility of the system.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pt-10 space-y-8">
        <SectionTitle title="Silver Hallmarking Overview" width="w-56" />

        {/* What is Silver Hallmarking */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-600 text-[15px] leading-7 text-justify">
            Silver Hallmarking is the process of certifying the purity of silver
            articles by a BIS-recognized Assaying & Hallmarking Centre (A&H
            Centre). It ensures silver articles meet prescribed quality
            standards.
          </p>

          <ul className="list-disc pl-6 mt-4 text-gray-600 text-[15px] space-y-1">
            <li>Silver hallmarking is currently voluntary in India</li>
            <li>Governed by the Bureau of Indian Standards (BIS)</li>
            <li>Purity verified as per IS 2112</li>
          </ul>
        </div>

        {/* Hallmark Components */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Silver Hallmark Components</h3>
          <ul className="list-decimal pl-6 text-gray-600 text-[15px] space-y-1">
            <li>BIS Standard Mark</li>
            <li>
              Purity / Fineness Mark:
              <ul className="list-disc pl-6 mt-1">
                <li>999 (99.9%)</li>
                <li>970</li>
                <li>925 (Sterling Silver – most common)</li>
                <li>900</li>
                <li>800</li>
              </ul>
            </li>
            <li> Mandatory 6-digit HUID (Hallmark Unique Identification Number) </li>
            <li>Assaying & Hallmarking Centre Mark</li>
          </ul>
        </div>

        {/* Procedure */}
       <div className="grid md:grid-cols-2 gap-8 pb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">
            Silver Hallmarking Setup Procedure
          </h3>
          <ol className="list-decimal pl-6 text-gray-600 text-[15px] space-y-2">
            <li>BIS Registration (Jeweller / Manufacturer)</li>
            <li>Infrastructure & readiness (records, traceability, logo)</li>
            <li>Online documentation submission on BIS portal</li>
            <li>BIS verification & scrutiny</li>
            <li>Grant of registration (valid for 3 years)</li>
            <li>Hallmarking through BIS-recognized A&H Centre</li>
          </ol>
        </div>

        {/* Documents */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Documents Required</h3>
          <ul className="list-disc pl-6 text-gray-600 text-[15px] space-y-1">
            <li>GST Registration Certificate</li>
            <li>PAN Card</li>
            <li>Trade License / Shop Establishment</li>
            <li>Business address proof</li>
            <li>Proprietor / Partner Aadhaar, PAN & Photo</li>
          </ul>
        </div>
      </div>
      </section>

      <section className="bg-[#0a3d62] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">
            How AN Global Services Helps
          </h2>
          <p className="text-white/90 leading-7 text-[14px] max-w-4xl mx-auto">
            AN Global Services Private Limited acts as a single-window
            compliance partner for gold and silver hallmarking, providing
            end-to-end BIS registration, documentation, coordination with
            Assaying & Hallmarking Centres, training, audit support, renewals,
            and expansion to gold hallmarking.
          </p>
        </div>
      </section>
    </main>
  );
}
