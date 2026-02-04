import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Training Services | AN Global Services",
  description:
    "Get complete Training and Certification services for Quality Management Systems. AN Global Services provides end-to-end training and certification support.",
};

export default function TrainingPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="Training Services"
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

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/tranning-program.png"
                alt="Training Program"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 ">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                TRAINING & CERTIFICATION IN QUALITY MANAGEMENT
              </h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-40 md:w-136 bg-[#0072b1]"></span>
              </div>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
                <strong className="text-[#0072b1]">AN Global Services</strong>{" "}
                presents a wide range of professional Training and Certification
                programs in Quality Management for enterprises worldwide. In
                today’s challenging and competitive business environment,
                continuous learning and skill enhancement are essential to
                maintain compliance, improve performance, and achieve
                sustainable growth.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
                We design and deliver effective training solutions that enhance
                workforce skills, drive performance improvements, and align
                organizational processes with national and international
                standards. Our programs focus on real-world workplace
                applications, enabling teams to work more efficiently, improve
                productivity, and develop leadership capabilities.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-4">
                Our key training offerings include{" "}
                <strong className="text-gray-700">
                  Internal Audits on Quality Management Systems as per IS/ISO
                  9001
                </strong>
                ,{" "}
                <strong className="text-gray-700">
                  Training for Quality Control Personnel
                </strong>
                , and{" "}
                <strong className="text-gray-700">
                  Internal Audit on Environmental Management Systems as per
                  IS/ISO 14001
                </strong>
                . These programs help organizations strengthen compliance,
                improve system effectiveness, and achieve continual improvement.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                With a team of qualified and experienced professionals, AN
                Global Services supports organizations in building competence,
                ensuring regulatory compliance, and taking their quality and
                environmental management systems to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-white  rounded-lg ">
            {/* Heading */}
            <h2 className="text-xl font-bold text-gray-900 uppercase ">
              Benefits of Our Training & Certification Programs
            </h2>

            {/* Underline */}
            <div className="w-full h-0.5 bg-gray-200 relative mb-3">
              <span className="absolute left-0 top-0 h-0.5 w-40 md:w-148 bg-[#0072b1]"></span>
            </div>

            {/* Intro */}
            <p className="text-gray-600 text-[15px] leading-7 mb-6">
              Professional training and certification play a vital role in
              building organizational competence, ensuring regulatory
              compliance, and achieving continual improvement. Our training
              programs are designed to deliver measurable value to both
              individuals and organizations.
            </p>

            {/* Benefits List */}
            <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2 leading-7">
              <li>
                Enhances technical skills and practical knowledge of employees
                in real-world workplace scenarios.
              </li>
              <li>
                Ensures compliance with national and international standards
                such as IS/ISO 9001 and IS/ISO 14001.
              </li>
              <li>
                Improves product and process quality, leading to higher customer
                satisfaction and trust.
              </li>
              <li>
                Strengthens internal audit capability and quality management
                systems within the organization.
              </li>
              <li>
                Helps organizations identify risks, gaps, and opportunities for
                continual improvement.
              </li>
              <li>
                Increases operational efficiency and reduces rework, wastage,
                and overall cost.
              </li>
              <li>
                Builds a culture of safety, accountability, and environmental
                responsibility.
              </li>
              <li>
                Enhances employee confidence, leadership skills, and long-term
                professional growth.
              </li>
              <li>
                Improves organizational flexibility, competitiveness, and
                profitability in the market.
              </li>
            </ul>

            {/* Closing */}
            <p className="text-gray-600 text-[15px] leading-7 mt-6">
              By investing in structured training and certification,
              organizations not only meet compliance requirements but also
              create a skilled, motivated, and future-ready workforce that
              supports sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 ">
            OUR CONTRIBUTION
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-4">
            <span className="absolute left-0 top-0 h-0.5 w-53 bg-[#0072b1]"></span>
          </div>

          <p className=" text-gray-700 text-[15px] mb-4">
            We provide training for Assaying (hallmarking) to-assaying master as
            well as deputy assaying master who perform testing of the Gold. Our
            objectives of providing the training are:-
          </p>

          <ul className="list-disc pl-6 space-y-0 text-[15px] text-gray-600 leading-7">
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

          <ul className="list-disc pl-6 space-y-0 text-[15px] text-gray-600 leading-7">
            <li>Testing Personal</li>
            <li>Centre Manager</li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Training for Quality Control Personnel
          </h2>
          <div className="w-full h-0.5 bg-gray-200  mb-4">
            <div className="w-120 h-0.5 bg-[#0072b1]"></div>
          </div>

          <p className="text-gray-600 text-[15px] leading-7 mb-6">
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

          <p className="text-gray-600 text-[15px]  mb-4">
            Quality Control Personnel must be well-qualified and trained. The
            programme objective is as follows:
          </p>

          <ul className="list-disc pl-6 text-gray-600 text-[15px] space-y-1 mb-6">
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

          <h3 className="text-md font-semibold text-gray-900 mb-2">
            WHO SHOULD ATTEND?
          </h3>

          <ul className="list-disc pl-6 text-gray-600 text-[15px]  space-y-2">
            <li>Quality Control Manager</li>
            <li>R&amp;D department</li>
            <li>Quality Engineer</li>
            <li>Workers</li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Internal Audits on Quality Management Systems as per IS/ISO 9001
          </h2>

          <div className="w-full h-0.5 bg-gray-200  mb-4">
            <div className=" w-40 md:w-190 h-0.5 bg-[#0072b1]"></div>
          </div>

          <p className="text-[15px] text-gray-600 leading-7 mb-6">
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

          <p className="text-[15px] text-gray-600 mb-4">
            We give in-depth information on how to perform an internal audit and
            the key factors to consider. This programme will help you in the
            following ways:
          </p>

          <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2 mb-6">
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

          <h3 className="text-md font-semibold text-gray-900 mb-2">
            WHO SHOULD ATTEND?
          </h3>

          <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
            <li>Top Management</li>
            <li>Quality management system manager and officers</li>
            <li>Internal Auditors</li>
            <li>Anyone who is interested in QMS</li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Internal Audit on Quality Management Systems Environmental
            Management Systems as per IS/ISO 14001
          </h2>

          <div className="w-full h-0.5 bg-gray-200  mb-4">
            <div className=" w-40 md:w-295 h-0.5 bg-[#0072b1]"></div>
          </div>

          <p className="text-[15px] text-gray-600 leading-7 mb-5">
            The major aim of every organization must be environmental safety.
            The major aim of this standard IS/ISO 14001 is to make aware the
            employees of the environmental protection and eliminate the negative
            impacts. Everyone should take environmental protection as Testing Personnel
            responsibility and self-commitment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            OBJECTIVE
          </h3>

          <p className="text-[15px] text-gray-600 mb-4">
            We give in-depth information on how to perform an internal audit and
            the key factors to consider. This programme will help you in the
            following ways:
          </p>

          <ul className="list-disc pl-6 text-[15px] text-gray-600 space-y-2">
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
