"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const images = [
  "/service/hallmarking/acetic-acid.png",
  "/service/hallmarking/beta-picoline.png",
  "/service/hallmarking/Ferronickel.png",
  "/service/hallmarking/hydrogenated-rice.png",
  "/service/hallmarking/methenol.png",
  "/service/hallmarking/potassium.png",
  "/service/hallmarking/Morpholine.png",
];

export default function GoldHallmarkingPage() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

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
          NABL CERTIFICATION SERVICES
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/nabl/nabl-2.png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <button className="w-full bg-[#0072b1] hover:bg-[#005f94] text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition cursor-pointer">
              ⬇ COMPANY PROFILE
            </button>
          </div>

          <div className="flex flex-col gap-12">
            <div className="space-y-4">
              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                NABL Certification Service is a formal recognition of the
                technical competence of a testing, calibration, or medical
                laboratory for a specific task, in accordance with ISO/IEC
                17025:2005 and ISO 15189:2007 standards. This certification is
                granted based on third-party assessment. The World Trade
                Organization (WTO) recognizes non-acceptance of test results and
                measurement data as a Technical Barrier to Trade (TBT).
                Accreditation is therefore considered the first essential step
                towards removing such technical barriers.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                NABL has further strengthened its global standing by achieving
                the status of an APLAC (Asia Pacific Laboratory Accreditation
                Cooperation) Mutual Recognition Arrangement (MRA) partner and
                becoming a signatory to the ILAC (International Laboratory
                Accreditation Cooperation) Arrangement. This recognition is
                based on peer evaluation by a multidisciplinary team from APLAC.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                This milestone enables mutual acceptance of test results and
                measurement data among 52 accreditation bodies representing 45
                countries. As a result, NABL-accredited laboratories are
                recognized as part of the global network of accredited
                laboratories, enhancing their credibility and international
                acceptance.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                The National Accreditation Board for Testing and Calibration
                Laboratories (NABL) is a self-governing organization operating
                under the Department of Science and Technology, Government of
                India. Its primary objective is to accredit testing and
                calibration laboratories across the country. NABL is the only
                accreditation body authorized by the Indian government to assess
                laboratories for quality systems, technical competence, and
                performance capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              The Following Are Some Of The Advantages Of NABL For The General
              Public:
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-230 bg-[#0072b1]" />
            </div>

            <ul className="mt-6 space-y-2 text-gray-500 text-[15px] leading-7 list-disc pl-6">
              <li>
                With precise calibrated testing, authentic reports are
                guaranteed.
              </li>
              <li>
                Professionals doing tests have confidence in their abilities.
              </li>
              <li>Re-testing is no longer necessary, saving money and time.</li>
              <li>Satisfaction with the solutions that have been delivered.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              NABL Portal Information
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-75 bg-[#0072b1]" />
            </div>

            <p className="mt-6 text-gray-500 text-[15px] leading-7 text-justify">
              As technology changes rapidly and innovative digital platforms
              emerge, NABL is building an online portal to provide end-to-end
              services to its users. This portal enables secure web access to
              technologies that help users obtain a one-stop solution for the
              entire certification program, including web application submission
              and payment of all assessment fees.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              The NABL&apos;s Objective To Establishment
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-120 bg-[#0072b1]" />
            </div>

            <p className="mt-6 text-gray-500 text-[15px] leading-7 text-justify">
              The primary objective of NABL-ISO 17025 is to provide third-party
              analysis of testing and certification facilities to ensure high
              quality and technical competence. This allows governments and
              organizations to simplify and manage a uniform quality
              environment. NABL accredits laboratories that comply with ISO
              17025 and ISO 15189 standards in the primary areas of science and
              engineering.
            </p>

            <p className="mt-4 text-gray-500 text-[15px] leading-7 text-justify">
              Mechanical, chemical, electronics, electronic parts, biochemical,
              liquids, non-destructive, radiographic, thermal, investigative,
              and electro-technical disciplines are among the many fields where
              NABL-ISO 17025 accreditation is applicable. NABL also provides
              certification for quality assurance services and reference
              material manufacturers.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              The Advantages Of NABL-ISO 17025 Certification
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-150 bg-[#0072b1]" />
            </div>

            <p className="mt-6 text-gray-500 text-[15px] leading-7 text-justify">
              NABL-ISO 17025 certification offers both internal and external
              benefits. Most of the practical advantages are reflected in daily
              laboratory operations, such as improved testing proficiency,
              streamlined organization, fewer errors or malfunctions, and more
              reliable results. Over time, NABL-ISO 17025 certification can also
              provide financial benefits and enhance an organization&apos;s
              reputation for accuracy and precision.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 pb-14">
        <div className="max-w-7xl mx-auto px-4">
          <div
            ref={sliderRef}
            onMouseDown={startDrag}
            onMouseLeave={stopDrag}
            onMouseUp={stopDrag}
            onMouseMove={onDrag}
            className={`flex gap-6 overflow-x-scroll select-none cursor-grab ${
              isDragging ? "cursor-grabbing" : ""
            } scrollbar-hide`}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-65 md:min-w-70 bg-white rounded-lg shadow-md overflow-hidden shrink-0"
              >
                <Image
                  src={src}
                  alt={`Hallmarking ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-45 object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
