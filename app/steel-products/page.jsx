"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const metadata = {
  title: "ISI Certification Services | AN Global Services",
  description:
    "Get complete ISI Certification services for domestic and industrial products. AN Global Services provides end-to-end ISI certification support.",
};

const images = [
  "/service/isi/footwear/1.png",
  "/service/isi/footwear/2.png",
  "/service/isi/footwear/3.png",
  "/service/isi/footwear/4.png",
  "/service/isi/footwear/5.png",
  "/service/isi/footwear/6.png",
  "/service/isi/footwear/7.png",
  "/service/isi/footwear/8.png",
  "/service/isi/footwear/9.png",
  "/service/isi/footwear/10.png",
  "/service/isi/footwear/11.png",
];

const products = [
  {
    id: 1,
    name: "Industrial and protective rubber knee and ankle boots",
    standard: "IS 5557: 2004",
  },
  {
    id: 2,
    name: "All rubber gum boots and ankle boots",
    standard: "IS 5557 (Part 2): 2018",
  },
  {
    id: 3,
    name: "Moulded solid rubber soles and heels",
    standard: "IS 5676: 1995",
  },
  {
    id: 4,
    name: "Rubber microcellular sheets for soles and heels",
    standard: "IS 6664: 1992",
  },
  { id: 5, name: "Solid PVC soles and heels", standard: "IS 6719: 1972" },

  { id: 6, name: "PVC sandal", standard: "IS 6721: 1972" },
  { id: 7, name: "Rubber Hawai Chappal", standard: "IS 10702: 2023" },
  { id: 8, name: "Slipper, rubber", standard: "IS 11544: 1986" },
  {
    id: 9,
    name: "Polyvinyl chloride (PVC) industrial boots",
    standard: "IS 12254: 1993",
  },
  { id: 10, name: "Polyurethane sole, semirigid", standard: "IS 13893: 1994" },

  { id: 11, name: "Unlined moulded rubber boots", standard: "IS 13995: 1995" },
  {
    id: 12,
    name: "Moulded plastics footwear (PU boots)",
    standard: "IS 16645: 2018",
  },
  {
    id: 13,
    name: "Footwear for municipal scavenging work",
    standard: "IS 16994: 2018",
  },
  {
    id: 14,
    name: "Leather safety boots and shoes for miners",
    standard: "IS 1989 (Part 1): 1986",
  },
  {
    id: 15,
    name: "Leather safety boots for heavy metal industries",
    standard: "IS 1989 (Part 2): 1986",
  },

  { id: 16, name: "Canvas shoes rubber sole", standard: "IS 3735: 1996" },
  { id: 17, name: "Canvas boots rubber sole", standard: "IS 3736: 1995" },
  {
    id: 18,
    name: "Safety rubber canvas boots for miners",
    standard: "IS 3976: 2018",
  },
  {
    id: 19,
    name: "Leather safety footwear with rubber sole",
    standard: "IS 11226: 1993",
  },
  {
    id: 20,
    name: "Leather safety footwear with PVC sole",
    standard: "IS 14544: 1998",
  },

  { id: 21, name: "Sports footwear", standard: "IS 15844: 2010" },
  { id: 22, name: "High ankle tactical boots", standard: "IS 17012: 2018" },
  { id: 23, name: "Antiriot shoes", standard: "IS 17037: 2018" },
  { id: 24, name: "Derby shoes", standard: "IS 17043: 2018" },
];

const getGroupLink = (id) => {
  if (id <= 5) return "/footwear";
  if (id <= 10) return "/footwear";
  if (id <= 15) return "/footwear";
  if (id <= 20) return "/footwear";
  return "/footwear";
};

export default function ISIPage() {
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
              BIS Certification For Steel Products
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/service/isi-certification-steelproducts.png"
              alt="ISI Mark Certification"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">
            BIS CERTIFICATION FOR STEEL
          </h2>

          <div className="space-y-5 text-gray-500 leading-7 text-[15px]">
            <p>
              BIS (ISI) Certification for Steel Products is a mandatory quality
              certification issued by the Bureau of Indian Standards (BIS). This
              certification ensures that steel products manufactured or imported
              into India conform to the applicable Indian Standards (IS) related
              to quality, safety, strength, and performance.
            </p>

            <p>
              Steel products play a critical role in infrastructure,
              construction, manufacturing, and engineering sectors. Therefore,
              BIS mandates ISI Certification for selected steel products to
              safeguard public safety, improve product reliability, and prevent
              the circulation of sub-standard materials in the Indian market.
              Manufacturers must obtain BIS ISI Certification before selling or
              distributing notified steel products in India.
            </p>

            <p>
              BIS (ISI) Certification for steel products is not only a legal
              requirement but also a mark of quality, safety, and trust. It
              helps manufacturers gain credibility, expand market access, and
              comply with Indian regulatory standards. With proper
              documentation, testing facilities, and expert guidance, the
              certification process can be completed smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="mb-6">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              Documents Required for BIS (ISI) Certification for Steel Products
            </h1>
            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-80 bg-[#1f6ed5]"></span>
            </div>
          </div>

          <p className="text-gray-500 text-[15px] md:text-[16px] leading-8 max-w-5xl mb-8">
            To obtain BIS (ISI) Certification for steel products, manufacturers
            must submit the following documents to demonstrate compliance with
            applicable Indian Standards and quality requirements:
          </p>

          <ol className="list-decimal pl-6 space-y-4 text-gray-500 text-[15px] md:text-[15px] leading-4 max-w-5xl">
            <li>
              <span className="font-medium text-gray-800">
                Company Incorporation Documents:
              </span>{" "}
              Certificate of Incorporation or Business Registration proof.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Factory Address Proof & Layout Plan:
              </span>{" "}
              Details of manufacturing area, testing laboratory, and storage
              facilities.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Manufacturing Process Flow Chart:
              </span>{" "}
              Step-by-step process from raw material procurement to finished
              product.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                List of Manufacturing Machinery & Equipment:
              </span>{" "}
              Details of machines used for steel production and processing.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                In-house Laboratory Details:
              </span>{" "}
              List of testing equipment as prescribed in the relevant Indian
              Standard.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Quality Control Manual & Test Records:
              </span>{" "}
              Procedures followed for routine quality checks and inspections.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Raw Material Test Certificates:
              </span>{" "}
              Chemical and mechanical test reports of raw materials.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Product Test Report:
              </span>{" "}
              Issued by a BIS-recognized or BIS-approved laboratory.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Authorization Letter from Manufacturer:
              </span>{" "}
              Required if the application is filed through a consultant or
              representative.
            </li>

            <li>
              <span className="font-medium text-gray-800">
                Trademark Registration Certificate:
              </span>{" "}
              Or authorization letter to use the brand name, if applicable.
            </li>
          </ol>
        </div>
      </section>

      <section className="w-full bg-[#e6ebef] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Process Of BIS Certification For Steel Products
            </h2>

            <div className="mt-2 h-0.5 w-full bg-gray-200 relative">
              <span className="absolute left-0 top-0 h-0.5 w-80 bg-[#1f6ed5]"></span>
            </div>

            <p className="mt-6 text-gray-500 text-[15px] leading-7">
              As per the Quality Control Orders (QCOs) issued by the Government
              of India and implemented by the Bureau of Indian Standards (BIS),
              several steel products have been brought under mandatory BIS (ISI)
              certification. Manufacturers must first identify the applicable
              Indian Standard (IS) relevant to their specific steel product
              category. Once the applicable Indian Standard is identified, the
              manufacturer must carefully study the standard and ensure that the
              steel product fully complies with the prescribed quality, safety,
              chemical, and mechanical requirements. Additionally, the
              manufacturing unit must be equipped with the required production
              machinery and in-house testing facilities as specified in the
              relevant Indian Standard.
            </p>

            <ul className="mt-6 space-y-1 text-gray-700 text-[15px] list-disc pl-6">
              <li>
                <strong>Step 1:</strong> Preparation of documentation prior to
                submission of the application for BIS (ISI) Certification for
                steel products.
              </li>

              <li>
                <strong>Step 2:</strong> Submission of the BIS application along
                with the requisite documents through the BIS Manakonline portal.
              </li>

              <li>
                <strong>Step 3:</strong> Scrutiny of the application and
                documents by BIS officials for compliance with applicable Indian
                Standards.
              </li>

              <li>
                <strong>Step 4:</strong> Nomination of BIS auditor for
                inspection of the manufacturing unit.
              </li>

              <li>
                <strong>Step 5:</strong> Inspection and audit of the steel
                manufacturing premises, machinery, and in-house testing
                facilities by the BIS auditor.
              </li>

              <li>
                <strong>Step 6:</strong> Drawing of product samples during
                factory inspection for independent testing.
              </li>

              <li>
                <strong>Step 7:</strong> Testing of drawn samples in a
                BIS-recognized or BIS-approved laboratory as per the relevant
                Indian Standard.
              </li>

              <li>
                <strong>Step 8:</strong> Grant of BIS (ISI) Certification
                license to the steel product manufacturer upon successful
                compliance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 p-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            TESTING EQUIPMENTS FOR STEEL:-
          </h2>

          <div className="mt-2 h-0.5 w-full relative pb-5">
            <span className="absolute left-0 top-0 h-0.5 w-80 bg-[#1f6ed5]"></span>
          </div>

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
                  className="w-full h-52.5 object-cover pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
