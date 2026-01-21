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
        className="relative w-full h-60 md:h-65 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/70" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4 leading-snug">
          GOLD & SILVER HALLMARKING SETUP AND REGISTRATION SERVICES
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/gold-hallmarking-setup.png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <button className="w-full bg-[#0072b1] hover:bg-[#005f94] text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition cursor-pointer">
              ⬇ ASSAYING & HALLMARKING PROJECT
            </button>
          </div>

          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                WHAT IS HALLMARKING
              </h2>
              <div className="w-60 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                The BIS hallmark is a hallmarking system for gold as well as
                silver jewelry sold in India certifying the purity of the metal.
                It certifies that the piece of jewelry conforms to a set of
                standards laid by the Bureau of Indian Standards, the national
                standards organization of India.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Objective Of Hallmarking Center
              </h2>
              <div className="w-78 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                Hallmarking is the accurate determination and official recording
                of the proportionate content of precious metal in precious metal
                articles. Hallmarks are thus official marks used in many
                countries as a guarantee of purity or fineness of precious metal
                articles.
              </p>

              <p className="mt-6 text-gray-500 text-[15px] leading-6 text-justify">
                The principle objectives of the Hallmarking Scheme are to
                protect the public against adulteration and to obligate
                manufacturers to maintain legal standards of fineness. In India,
                at present two precious metals namely gold and silver have been
                brought under the purview of Hallmarking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 space-y-20">
        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Is Hallmarking Compulsory?
          </h2>
          <div className="w-70 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Yes, It is compulsory
          </h3>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            From 1/04/2023 Hallmarking is compulsory for new jewelry for selling
            to customers. The BIS Hallmarking Scheme has been aligned with
            International criteria on hallmarking. As per this scheme,
            Registration is granted to the jewelers by BIS under Hallmarking
            Scheme. The BIS certified jewelers can get their jewelry hallmarked
            from any of the BIS recognized Assaying and Hallmarking Centers.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Benefits To Consumer:
          </h2>
          <div className="w-55 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Provide third party assurance and satisfaction that customer gets
            right purity of gold (or silver) for the given price (value for
            money). Hallmark will serve as third party assurance.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Benefit To The Jeweler:
          </h2>
          <div className="w-55 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            It will provide clear indication of his capability, strong evidence
            of commitment to quality and assurance of consistency in purity and
            quality of gold or silver jewelry. Now every jeweler selling jewelry
            needs to register with BIS for license to sell hallmarked jewelry.
          </p>

          <p className="mt-6 text-gray-500 text-[15px] leading-8 text-justify">
            The procedure for obtaining such a license is mentioned along with
            the required document on www.bis.org.in. It is the prime
            responsibility of the licensed jeweler to ensure that the jewelry
            offered for Hallmarking has the declared fineness and homogeneity.
            List of BIS licensed Jewelers is also available on BIS website. Link
            for locating hallmarked jeweler in your city has also been provided
            on BIS website.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            What is a Hallmarking Center?
          </h2>
          <div className="w-72 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Hallmarking Center is a certified and officially recognized Center
            for issuing hallmark on the jewelry. The recognition of an Assaying
            and Hallmarking Centre is done by BIS after ensuring that the Centre
            has requisite infrastructure and quality management system as per IS
            15820 : 2009, IS 1417 for Gold and IS 2112 for Silver and assaying
            (test) facilities as per IS 1418 for Gold and IS 2113 for Silver and
            also, trained and competent manpower.
          </p>

          <p className="mt-6 text-gray-500 text-[15px] leading-8 text-justify">
            The list of BIS recognized assaying and hallmarking Centers is also
            hosted on BIS website www.big.org.in.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Control & Monitoring of System:
          </h2>
          <div className="w-78 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            Regular surveillance audit of Assaying and hallmarking centers and
            testing of random market samples drawn from licensee jewelers is
            carried out. Renewal of recognition of hallmarking centers and
            jewelers is based on performance every three years.
          </p>

          <p className="mt-6 text-gray-500 text-[15px] leading-8 text-justify">
            If any jeweler or assaying and hallmarking center is not found
            conforming to the requirements, action is taken by BIS against
            erring Firm as per laid down procedure so that credibility of scheme
            is maintained.
          </p>
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
