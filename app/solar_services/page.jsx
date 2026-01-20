import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SOLAR SERVICES | AN Global Services",
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
              SOLAR PANEL BIS REGISTRATION
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/solar-panel-plant-setup.png"
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
                <div className="w-full h-0.5 bg-gray-200 relative mb-6">
                  <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
                </div>

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                Solar panels are devices used to absorb the sun's rays and
                convert them into electricity or heat. A solar (photovoltaic)
                panel is a collection of solar cells that can be used to
                generate electricity by the photovoltaic effect. These cells are
                managed in a grid-like pattern on the floor of solar panels.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                The Ministry of New & Renewable Energy (MNRE) announced a
                Compulsory Registration Scheme (CRS) for solar module
                manufacturers under the approved List of Modules & Manufacturers
                (ALMM), to reduce India's dependence on solar-related product
                imports & marking India as self-reliant. On August 30, 2017, the
                Ministry of New and Renewable Energy (MNRE) issued an order
                implementing certification for solar photovoltaic devices.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                MNRE also directed financial institutes to favour BIS-certified
                solar power devices over other devices in the market. BIS
                certification is a intended choice of manufacturers.
              </p>
              <p className="font-semibold text-gray-800 mb-4">
                CRS certification offers various benefits, not only to customers
                but also to manufacturers/ sellers too :-
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 space-y-10">
        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 ">
            Is It Compulsory to Obtain BIS Certification For Solar Panels?
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-150 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            BIS operates the CRS Compulsory Registration Scheme under the Scheme
            II of Schedule II of BIS (Conformity Assessment) Regulations, 2018.
            Further, under this, several guidelines have also been formed. The
            BIS is the national standard body that manifests the quality of the
            product, either of a manufacturer or brand. Further, it verifies
            that the product is reliable and secure for customers depending on
            the standards laid by BIS. BIS Certification Scheme is voluntary in
            nature. However, for several products, compliance with Indian
            Standards is made compulsory by the Central Government of India.
            Solar Panels are one of them. In 2019, MNRE made it compulsory for
            the manufacturers to obtain BIS certification for solar panels,
            modules & inverters. Though, there are some exceptions.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Documents Required for BIS Certification for Solar Panels In India
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-160 bg-[#0072b1]"></span>
          </div>

          <p className="font-semibold text-gray-800 mb-4">
            The following are some vital documents required to obtain BIS
            Certification for Solar Panels in India:
          </p>

          <ul className="list-disc pl-6 space-y-0 text-[15px] text-gray-500 leading-7">
            <li>Copy of Certificate of Incorporation</li>
            <li>Copy of BIS Registration or Certificate, as applicable</li>
            <li>
              Authorised Letter for authorising the authorised signatory to sign
              the application
            </li>
            <li>
              Copy of Certificates declaring Standards through Authorised labs
              of BIS
            </li>
            <li>
              Affidavit & Indemnity Bond in the prescribed format signed through
              Authorized Signatory & attested from Judicial Magistrate or Notary
              Public.
            </li>
            <li>Other Documents</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Procedure To Obtain BIS Certification for Solar Panels
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-130 bg-[#0072b1]"></span>
          </div>
          <p className="font-semibold text-gray-800 mb-4">
            Following are the Steps required to get BIS Certification for Solar
            Panels:
          </p>

          <ul className="list-disc pl-6 space-y-1 text-[15px] text-gray-500 leading-7">
            <li>
              <span className="font-medium text-gray-800">Step 1:</span> First,
              there would be testing & examination to ensure that your product
              conforms to the Indian standards.
            </li>

            <li>
              <span className="font-medium text-gray-800">Step 2:</span> There
              would be documentation to verify that the applicant has all the
              required documents to fill out the application form.
            </li>

            <li>
              <span className="font-medium text-gray-800">Step 3:</span> After
              proper documentation, the application form will be submitted along
              with the registration fee.
            </li>

            <li>
              <span className="font-medium text-gray-800">Step 4:</span> At
              last, if the applicant's product confirms the Indian Standards,
              then they can obtain the BIS certificate.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16 space-y-10">
        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 ">
            Consequences Of Not Obtaining BIS CRS Certificate
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-130 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            As per the order, if any product or item doesn't conform to the
            Indian Standard will not be allowed to store, manufacture for
            selling, distributing, or importing products. Hence, you must obtain
            BIS CRS Certification to sell, import and manufacture products in
            the Indian Market. Consequently, you need to complete the
            registration, documentation, examination & testing of the product by
            the BIS-certified laboratory.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900 ">
            Conclusion
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-30 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-3">
            According to statistics, by November 30, 2021, India was using
            48.556 GW of solar capacity, but the goal was to reach 20 GW by
            2022. As a result, India met its goal four years earlier than
            planned. Consider it this way: as solar energy is consumed more,
            more solar panels are used, and more solar panels are required to
            get a BIS certification. Before understanding the advantages of BIS
            certification for solar panels, let's look at which certificates are
            suitable for solar panels.
          </p>
        </div>
      </section>
    </main>
  );
}
