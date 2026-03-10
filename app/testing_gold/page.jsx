import Image from "next/image";
import Link from "next/link";
export const revalidate = 86400

export const metadata = {
  title: "Gold Testing Services | AN Global Services",
  description:
    "Get complete Gold testing services for domestic and industrial products. AN Global Services provides end-to-end gold testing support.",
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
              GOLD TESTING
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/gold-testing.png"
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
              <h2 className="text-xl font-bold text-gray-900">GOLD TESTING</h2>
              <div className="w-39 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                Starting April 1, 2023, the Indian government will only permit
                the sale of gold jewellery with a Hallmark Unique Identification
                (HUID) number. This new regulation means that all gold jewellery
                sold in India must carry a BIS hallmark and a six-digit
                alphanumeric ID embossed on the piece. HUID was introduced to
                ensure transparency and protect consumers' rights, as it allows
                anyone to get existing jewellery hallmarked and obtain a true
                valuation of the gold. The HUID code also allows buyers to
                verify the claims made by jewellers regarding the purity of the
                gold jewellery. It can be verified on the BIS Care App, and if a
                jeweller has stamped a fake HUID code, buyers have a way to
                verify it and lodge a complaint against the jeweller.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                The government introduced HUID to offer traceability of gold
                jewellery, and the code offers credibility to the hallmarking
                signs on the piece. The BIS has launched the BIS Care App, which
                helps gold jewellery buyers verify the authenticity of the HUID
                code. If there is a mismatch between the information provided on
                the app and the information provided by the jeweller, buyers can
                file a complaint. The HUID system is secure and poses no risk to
                data privacy or security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 p-8 md:pb-12 space-y-20">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What are the hallmarking signs on gold jewellery?
          </h2>
          <div className="w-145 h-0.5 bg-[#0072b1] mb-6" />
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            The government has already made BIS hallmark mandatory for the sale
            of gold jewellery and artefacts from June 16, 2021. Further, the
            government has revised the BIS hallmark signs on gold jewellery from
            July 1, 2021. The revised signs on BIS hallmarked gold jewellery are
            as follows: BIS logo Purity/Fineness grade 6-digit HUID code Why
            HUID was introduced by the government? According to the Department
            of Consumer Affairs, each piece of gold jewellery stamped with a
            HUID code offers a distinct identity to it. This offers traceability
            of that gold jewellery.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            The HUID code offers credibility to the hallmarking signs on the
            gold jewellery. The BIS has launched an app called BIS Care App.
            This app helps gold jewellery buyers to verify the authenticity of
            the HUID code. If there is a mismatch between the information
            provided on the BIS Care App and the information provided by the
            jeweller, then a buyer can file a complaint as well. The Department
            of Consumer Affairs stated, "HUID based Hallmarking, registration of
            jewellers is automatic with no human interference. It is aimed at
            ensuring the purity of Hallmarked jewellery and check any
            malpractice. HUID is a secure system and poses no risk to data
            privacy or security." What is HUID? Hallmark Unique Identification
            (HUID) number is a six-digit alphanumeric code consisting of numbers
            and letters. Every unit of jewellery will be given a HUID number
            during the hallmarking process, and it will be unique to that piece.
            The number is stamped on the jewellery piece manually at the
            Assaying & Hallmarking Centre (AHC). The Union Government has
            mandated that all gold jewellery and artefacts sold after 31st March
            will have to carry a Hallmark Unique Identification Number (HUID).
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            To tide over teething problems for businesses in complying with the
            order, the government will give an 80 percent concession in marking
            fee for micro units across different products and an additional 10
            percent concession to all units in the North East. The move is aimed
            at promoting a quality culture in micro-scale units. Food and
            Consumer Affairs Minister, Piyush Goyal, presided over a review
            meeting of the Bureau of India Standards (BIS) and directed to
            enhance the testing infrastructure in the country. These measures
            shall encourage micro small units, lead to scaling up of the testing
            facilities and develop a culture of quality consciousness among
            citizens, he added. Gold hallmarking, which was voluntary in nature
            until June 16, 2021, is a quality certification for gold in the
            country.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            The certification practice was made compulsory in a phased manner,
            under which in the first phase 256 districts were covered, and 32
            more districts were included in the second phase taking the overall
            districts following the hallmarking practice to 288. 51 more
            districts are being added. "After March 31, 2023, jewellery having a
            four-digit Hallmark Unique Identification Number (HUID) as a
            hallmark cannot be sold. Instead, jewellery having a six-digit
            alphanumeric number as a hallmark can be sold," said the Department
            of Consumer Affairs on gold hallmarking.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            What it means for consumers? From April 1, 2023, if you visit your
            local jewellery store to buy gold jewellery, then ensure that apart
            from the BIS hallmark, there is a 6-digit alphanumeric ID embossed
            in the gold jewellery. For every piece of gold jewellery which is
            hallmarked by the Bureau of Indian Standards (BIS), a unique HUID
            code is given to it. The HUID allows buyers to verify the claims
            made by jewellers regarding the purity of the gold jewellery piece.
            The HUID code stamped on the gold jewellery can be used to track the
            entire journey of the jewellery piece from the manufacturer to the
            retailer. This provides consumers with greater transparency and
            ensures that they are getting what they pay for. Additionally, the
            HUID code also helps in identifying counterfeit jewellery, which is
            a major problem in India. With the introduction of the HUID code,
            consumers can be confident that they are buying genuine and
            authentic gold jewellery. Overall, the implementation of the HUID
            code is a positive development for consumers as it provides them
            with greater transparency and ensures that they are getting genuine
            gold jewellery.
          </p>
        </div>
      </section>
    </main>
  );
}
