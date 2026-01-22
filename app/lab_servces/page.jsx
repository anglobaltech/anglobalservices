import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Laboratory Equipment & Setup – ISI Mark Certification | AN Global Services",
  description:
    "AN Global Services provides professional support for Laboratory Equipment & Setup under ISI Mark Certification. We assist with BIS laboratory recognition, compliance with BIS Act provisions, and quality testing requirements for well-equipped laboratories.",
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
              LABORATORY EQUIPMENT AND SETUP
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/service/lab-services.png"
              alt="ISI Mark Certification"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          {/* <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            Introduction
          </h2> */}

          <div className="space-y-5 text-gray-500 leading-7 text-[15px]">
            <p>
              We are offering an extensive range of Laboratory Products &
              Laboratory Instruments that are required for setting up a
              well-equipped laboratory. The products that we are making
              available to our clients are sourced from reliable companies who
              are trusted and known for quality.
            </p>

            <p>
              The Laboratory Recognition Scheme is governed by the provisions
              under Section 10 (1) h of The BIS Act 1986 and the BIS Rules, 1987
              [10(2) (a) & (b)]. These statutory provisions confer upon BIS,
              powers to recognize any laboratory in India or in any other
              country for carrying out testing of samples in relation to use of
              the Standard Mark and such other functions as may be necessary.
            </p>

            <p>
              The Rules also provide for de-recognition of a recognized
              laboratory by the Bureau for non-fulfilment of any condition laid
              down at the time of recognition. The guidelines for recognition
              and de-recognition of the laboratories have been laid down by the
              Bureau in this scheme. BIS also maintains a register of such
              laboratories as are recognized by it for testing of samples of
              articles or processes in relation to relevant Indian Standards,
              ensuring transparency, quality assurance, and compliance with
              applicable regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <div className="space-y-6 text-gray-500 text-[15px] leading-7">
            <p>
              ISI Lab Equipment in a Laboratory is compulsory for all the
              manufacturers who intend to set up the processing unit, to obtain
              the ISI mark from Bureau of India Standards. Unless the inspection
              is done by the staff, tests carried out by an independent lab and
              official confirmation and license number are obtained, the unit
              can't commence commercial production such Lab should be equipped
              to carry out all physical, chemical and micro biological tests
              prescribed as per IS: 3025, and has to be conducted by expert
              chemist/micro biologist.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-20 space-y-20">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Product Certification Schemes:
          </h2>
          <div className="w-90 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            The Product Certification Scheme of BIS aims at providing Third
            Party Guarantee of quality, safety and reliability of products to
            the ultimate customer. The presence of ISI certification mark known
            as Standard Mark on a product is an assurance of conformity to the
            specifications. The conformity is ensured by regular surveillance of
            the licensee's performance by surprise inspections and testing of
            samples, drawn both from the market and factory.
          </p>
        </div>
      </section>
    </main>
  );
}
