import Image from "next/image";
export const metadata = {
  title: "BIS ISI Mark for FMCS – Foreign Manufacturers Certification Scheme | AN Global Services",
  description:
    "AN Global Services provides expert consultancy for BIS ISI Mark under the Foreign Manufacturers Certification Scheme (FMCS). We assist foreign manufacturers with BIS licensing, documentation, factory inspection, testing, and compliance as per BIS Act 2016 and Conformity Assessment Regulations.",
};

export default function GoldHallmarkingPage() {


  return (
    <main className="w-full bg-white">
      <section
        className="relative w-full h-55 md:h-65 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/70" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4 leading-snug">
          BIS ISI MARK FOR FMCS
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/bis-fmcs-certificate.png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 pt-8">
                BIS ISI MARK FOR FOREIGN MANUFACTURER CERTIFICATION SCHMES
                (FMCS)
              </h1>
              <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                FMCS stands for Foreign Manufacturers Certification Scheme, is a
                Scheme regulated by the BIS (Bureau of Indian Standards) under
                Scheme-I of Schedule-II, Conformity (Assessment) Regulations,
                2018, and BIS Act, 2016 for Foreign Manufacturers. Under Foreign
                Manufacturers Certification Scheme, License is granted to a
                Foreign Manufacturer for the use of a Standard Mark (ISI Mark)
                on a product that conforms to an Indian Standard. The Scheme is
                applicable for the grant of License for all products excluding
                Electronics and IT Goods notified by Deity.
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                The resins would be compounded with appropriate plasticizers and
                stabilizers. The surface must be free of blemishes and flaws.
                The purchaser and supplier must agree on the size and thickness
                of the soles and heels. The hardness of PVC soles and heels must
                be between 65 and 75 IRHD. The material shall conform to the
                physical requirements specified in the standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-12">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            What is BIS Standard Mark?
          </h2>

          <div className="w-85 h-0.5 bg-[#0072b1] mt-3 mb-6" />

          <p className="text-gray-500 text-[15px] md:text-[15px] leading-7 text-justify max-w-5xl">
            BIS Standard Mark is also commonly known as ISI Mark. This mark is
            specified by the Bureau of Indian Standards (BIS) and allows
            manufacturers to use the Standard Mark (ISI Mark) on their products.
            The ISI Mark ensures that the product complies with Indian Standards
            laid down by BIS. The Bureau of Indian Standards is authorized to
            grant the ISI Mark after proper evaluation, testing, documentation,
            and verification. This process confirms that the manufacturer
            follows all standards and guidelines prescribed by BIS.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Significance of FMCS BIS Certification in India
          </h2>

          <div className="w-140 h-0.5 bg-[#0072b1] mt-3 mb-6" />

          <p className="text-gray-500 text-[15px] md:text-[15px] leading-7 text-justify max-w-5xl">
            FMCS BIS Certification is mandatory for certain products to be sold
            in the Indian market. Without this certification, foreign
            manufacturers are not legally permitted to market their products in
            India. Obtaining FMCS BIS Certification enables manufacturers to
            access the Indian market smoothly, avail legal benefits, and build
            consumer trust. Although the certification process is complex and
            time-consuming, our experienced professionals make it simple by
            coordinating directly with BIS officials for inspections,
            documentation, follow-ups, and approvals.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-14 md:pb-18 space-y-12">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Requirements For FMCS BIS Certification
          </h2>

          <div className="mt-3 h-0.5 w-125 bg-[#0072b1]" />

          <p className="mt-6 text-gray-500 text-[15px] md:text-[15px] leading-7 max-w-5xl">
            Foreign manufacturers intending to export products to India must
            fulfil the following requirements in order to obtain FMCS BIS
            Certification:
          </p>

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-500 text-[15px] md:text-[15px] leading-4 max-w-5xl">
            <li>The manufacturing unit must be located outside India.</li>
            <li>
              The foreign manufacturer or company must accept all terms and
              conditions of the BIS license.
            </li>
            <li>
              In-house laboratory facilities and qualified quality control
              personnel must be available to test products as per applicable
              Indian Standards (ISS).
            </li>
            <li>
              Products must conform to relevant Indian Standard Specifications.
            </li>
            <li>
              The manufacturer must accept the Scheme of Inspection and Testing
              (SIT) along with the annual marking fee.
            </li>
            <li>
              All necessary manufacturing machinery and testing facilities must
              be available at the factory premises.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Documents Required For FMCS BIS Certification
          </h2>

          <div className="mt-3 h-0.5 w-145 bg-[#0072b1]" />

          <ol className="mt-6 list-decimal pl-6 space-y-4 text-gray-500 text-[15px] md:text-[15px] leading-4 max-w-5xl">
            <li>Factory or company registration documents.</li>
            <li>Flow chart of the manufacturing process.</li>
            <li>
              Details of in-house manufacturing capabilities and outsourcing
              agreements, if applicable.
            </li>
            <li>Adequate product testing facilities.</li>
            <li>Quality control parameters along with relevant records.</li>
            <li>
              Acceptance of the Scheme of Testing & Inspection, annual marking
              fee, laboratory test reports, and other information as prescribed
              by BIS. The complete list of documents can be obtained from BIS
              authorities.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
