import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Training Services | AN Global Services",
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
              QUALITY MANAGEMENT AND TRAINING PROGRAM
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/tranning-program.png"
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
                TRAINNING FOR ASSAYING AND HALLMARKING
              </h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-6">
                <span className="absolute left-0 top-0 h-0.5 w-120 bg-[#0072b1]"></span>
              </div>

              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                The Government of India has made mandatory the Hallmarking of
                Gold and other precious metals. Hallmarking is the certification
                of gold purity. The BIS Hallmarking Scheme has been aligned with
                international criteria on hallmarking. As per this scheme,
                Registration is granted to the jewellers by BIS under
                Hallmarking Scheme. The BIS certified jewellers can get their
                jewellery hallmarked from any of the BIS recognized Assaying and
                Hallmarking Centres Assaying and Hallmarking centre is the place
                where a jeweller can hallmark their jewellery for further sale.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                Hallmarking Center is a certified and officially recognized
                Center for issuing hallmark on the jewellery.
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify pb-5">
                The recognition of an Assaying and Hallmarking Centre is done by
                BIS after ensuring that the Centre has requisite infrastructure
                and quality management system as per IS 15820: 2009, IS 1417 for
                Gold and IS 2112 for Silver and assaying (test) facilities as
                per IS 1418 for Gold and IS 2113 for Silver and also, trained
                and competent manpower. The list of BIS recognized assaying and
                hallmarking Centres is also hosted on BIS website www.big.org.in
              </p>
              <p className="text-gray-500 text-[15px] leading-6 text-justify">
                AN Global Services provides support to those individuals /
                companies who want to register their trademarks / products. We
                are a group of qualified and experienced professionals who
                provide extensive registration services in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            OUR CONTRIBUTION
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-55 bg-[#0072b1]"></span>
          </div>

          <p className=" text-gray-700 text-[15px] mb-4">
            We provide training for Assaying (hallmarking) to-assaying master as
            well as deputy assaying master who perform testing of the Gold. Our
            objectives of providing the training are:-
          </p>

          <ul className="list-disc pl-6 space-y-0 text-[15px] text-gray-500 leading-7">
            <li>Teach how to do testing safely</li>
            <li>To achieve the standardization</li>
            <li>Maintain the quality of the Gold</li>
            <li>Maximize value creation and customers satisfaction</li>
            <li>
              Maintain a reputation for being completely trustworthy at all
              times
            </li>
          </ul>

          <h4 className=" font-bold text-gray-900 m-2">WHO SHOULD ATTEND?</h4>

          <ul className="list-disc pl-6 space-y-0 text-[15px] text-gray-500 leading-7">
            <li>Testing Personal</li>
            <li>Centre Manager</li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Training for Quality Control Personnel
          </h2>
          <div className="w-full h-0.5 bg-gray-200 mt-2 mb-6">
            <div className="w-120 h-0.5 bg-[#0072b1]"></div>
          </div>

          <p className="text-gray-500 text-[15px] leading-7 mb-10">
            Quality is the most important aspect on which the entire business is
            based; quality depicts the success of any firm. As per the ISO 9000
            standards, quality ensures that its measures are in line with the
            international best practice. The quality control course is intended
            to assist you in monitoring and adjusting processes so that your
            company can focus on continually improving its quality efforts.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            OBJECTIVE
          </h3>

          <p className="text-gray-500 text-[15px]  mb-4">
            Quality Control Personnel must be well-qualified and trained. The
            programme objective is as follows:
          </p>

          <ul className="list-disc pl-6 text-gray-500 text-[15px] space-y-1 mb-10">
            <li>To develop trained and proficient quality control personnel</li>
            <li>
              Provide training in material testing to ensure the quality of
              product
            </li>
            <li>Enhance quality to better meet the needs of customers</li>
            <li>Train about the safety regulations</li>
            <li>
              Bring all of your employees up to a higher level of proficiency
            </li>
            <li>Teach how to control the total cost</li>
            <li>Easily adapt to technological changes</li>
            <li>Help to meet employee needs for continued growth</li>
            <li>
              Enhance the flexibility and profitability of the organization
            </li>
          </ul>

          <h3 className="text-md font-semibold text-gray-900 mb-4">
            WHO SHOULD ATTEND?
          </h3>

          <ul className="list-disc pl-6 text-gray-500 text-[15px]  space-y-2">
            <li>Quality Control Manager</li>
            <li>R&amp;D department</li>
            <li>Quality Engineer</li>
            <li>Workers</li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Internal Audits on Quality Management Systems as per IS/ISO 9001
          </h2>

          <div className="w-full h-0.5 bg-gray-200 mt-2 mb-6">
            <div className="w-190 h-0.5 bg-[#0072b1]"></div>
          </div>

          <p className="text-[15px] text-gray-500 leading-7 mb-10">
            The Quality Management System is an essential department in any
            corporation since it aids and organizes all of the organization's
            operations in order to fulfil customer satisfaction while also
            continuously increasing all department efficiency and effectiveness.
            Internal audits are conducted to ensure that the quality management
            system is operating at peak efficiency and meeting compliance and
            requirements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            OBJECTIVE
          </h3>

          <p className="text-[15px] text-gray-500 mb-4">
            We give in-depth information on how to perform an internal audit and
            the key factors to consider. This programme will help you in the
            following ways:
          </p>

          <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2 mb-10">
            <li>Application of ISO 9001:2015 auditing guidelines</li>
            <li>
              Learn how to evaluate an organization's capacity to manage its QMS
            </li>
            <li>Assist you in determining which areas demand improvement</li>
            <li>Learn how to grab the opportunities and grow</li>
            <li>Ensures whether you are meeting quality standards or not</li>
            <li>Understand an internal auditor's tasks and responsibilities</li>
            <li>Learn about the concepts and practices of external auditing</li>
          </ul>

          <h3 className="text-md font-semibold text-gray-900 mb-4">
            WHO SHOULD ATTEND?
          </h3>

          <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
            <li>Top Management</li>
            <li>Quality management system manager and officers</li>
            <li>Internal Auditors</li>
            <li>Anyone who is interested in QMS</li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white pb-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Internal Audit on Quality Management Systems Environmental
            Management Systems as per IS/ISO 14001
          </h2>

          <div className="w-full h-0.5 bg-gray-200 mt-2 mb-6">
            <div className="w-full h-0.5 bg-[#0072b1]"></div>
          </div>

          <p className="text-[15px] text-gray-500 leading-7 mb-5">
            The major aim of every organization must be environmental safety.
            The major aim of this standard IS/ISO 14001 is to make aware the
            employees of the environmental protection and eliminate the negative
            impacts. Everyone should take environmental protection as personal
            responsibility and self-commitment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            OBJECTIVE
          </h3>

          <p className="text-[15px] text-gray-500 mb-4">
            We give in-depth information on how to perform an internal audit and
            the key factors to consider. This programme will help you in the
            following ways:
          </p>

          <ul className="list-disc pl-6 text-[15px] text-gray-500 space-y-2">
            <li>Improve management system</li>
            <li>
              Improve relation with other organizations, regular bodies etc
            </li>
            <li>Improve organization reputation and image</li>
            <li>
              Provide an approach to determining the EMS&apos;s objectives
            </li>
            <li>Risk assessment and risk–mitigation tools are introduced</li>
            <li>Identifying areas for improvement</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
