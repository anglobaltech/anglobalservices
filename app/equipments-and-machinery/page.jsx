import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings, CheckCircle2 } from "lucide-react";
import EquipmentList from "./EquipmentList";

export const metadata = {
  title: "Premium Industrial Equipments & Machinery | AN Global Services",
  description: "Explore our world-class industrial equipments, autoclaves, centrifuges, and lab machinery. High-precision, durable, and globally certified equipment for your manufacturing and testing needs.",
  keywords: "industrial equipments, laboratory machinery, autoclaves, centrifuges, industrial balances, AN Global Services equipments"
};

const equipments = [
  {
    title: "Bench Top High Speed Centrifuge",
    slug: "bench-top-high-speed-centrifuge",
    category: "Centrifuge",
    image: "/equipment/centrifuge/bench-top-high-speed-centrifuge.webp",
    excerpt: "High-performance benchtop centrifuge for precise separation in laboratory and industrial applications."
  },
  {
    title: "Bench Top High Speed Micro Centrifuge",
    slug: "bench-top-high-speed-micro-centrifuge",
    category: "Centrifuge",
    image: "/equipment/centrifuge/bench-top-high-speed-micro-centrifuge.webp",
    excerpt: "Compact and powerful micro centrifuge designed for quick spin-downs and micro-volume protocols."
  },
  {
    title: "Bench Top Large Capacity Centrifuge",
    slug: "bench-top-large-capacity-centrifuge",
    category: "Centrifuge",
    image: "/equipment/centrifuge/bench-top-large-capacity-centrifuge.webp",
    excerpt: "Handle high-volume samples efficiently with our large capacity benchtop centrifuge."
  },
  {
    title: "Programmable High Speed Refrigerated Centrifuge",
    slug: "programmable-high-speed-refrigerated-centrifuge",
    category: "Centrifuge",
    image: "/equipment/centrifuge/programmable-high-speed-refrigerated-centrifuge.webp",
    excerpt: "Advanced programmable features with precise temperature control for sensitive biological samples."
  },
  {
    title: "Programmable Large Capacity Refrigerated Centrifuge",
    slug: "programmable-large-capacity-refrigerated-centrifuge",
    category: "Centrifuge",
    image: "/equipment/centrifuge/programmable-large-capacity-refrigerated-centrifuge.webp",
    excerpt: "Large capacity refrigerated centrifuge ideal for high-throughput blood and biological processing."
  },
  {
    title: "Table Top Dairy Test Centrifuge",
    slug: "table-top-dairy-test-centrifuge",
    category: "Centrifuge",
    image: "/equipment/centrifuge/table-top-dairy-test-centrifuge.webp",
    excerpt: "Specialized centrifuge for accurate dairy product testing and fat analysis."
  },
  {
    title: "Biomedical Waste Pulsation Vacuum Sterilizer",
    slug: "biomedical-waste-pulsation-vacuum-sterilizer",
    category: "Autoclave & Sterilizer",
    image: "/equipment/autoclave/biomedical-waste-pulsation-vacuum-sterilizer.webp",
    excerpt: "State-of-the-art sterilization technology for safe and efficient biomedical waste management."
  },
  {
    title: "Horizontal Rectangular Autoclave",
    slug: "horizontal-rectangular-autoclave",
    category: "Autoclave & Sterilizer",
    image: "/equipment/autoclave/horizontal-rectangular-autoclave.webp",
    excerpt: "Heavy-duty rectangular autoclave designed for bulk sterilization in hospitals and labs."
  },
  {
    title: "Vertical Autoclave Triple Walled",
    slug: "vertical-autoclave-triple-walled",
    category: "Autoclave & Sterilizer",
    image: "/equipment/autoclave/vertical-autoclave-triple-walled.webp",
    excerpt: "Triple-walled construction for superior heat retention and maximum sterilization efficiency."
  },
  {
    title: "Cement Autoclave",
    slug: "cement-autoclave",
    category: "Autoclave & Sterilizer",
    image: "/equipment/autoclave/cement-autoclave.webp",
    excerpt: "Specifically engineered for testing the soundness of cement in construction material labs."
  },
  {
    title: "Electronic Platform Balance",
    slug: "electronic-platform-balance",
    category: "Industrial Balance",
    image: "/equipment/lab-balances/electronic-platform-balance.webp",
    excerpt: "High-capacity electronic weighing platform for robust industrial material measurement."
  },
  {
    title: "Infrared Moisture Balance",
    slug: "infrared-moisture-balance",
    category: "Industrial Balance",
    image: "/equipment/lab-balances/infrared-moisture-balance.webp",
    excerpt: "Rapid and precise moisture determination using advanced infrared heating technology."
  },
  {
    title: "Electronic Top Loading Balance",
    slug: "electronic-top-loading-balance",
    category: "Industrial Balance",
    image: "/equipment/lab-balances/electronic-top-loading-balance.webp",
    excerpt: "Accurate and reliable top-loading balance for everyday laboratory and industrial weighing."
  },
  {
    title: "Bench Top Low Capacity Centrifuge",
    slug: "bench-top-low-capacity-centrifuge",
    category: "Centrifuge",
    image: "/equipment/centrifuge/bench-top-low-capacity-centrifuge.webp",
    excerpt: "Ideal for routine low-volume separation tasks with precise control and compact design."
  },
  {
    title: "Bench Top Low Speed Centrifuge",
    slug: "bench-top-low-speed-centrifuge",
    category: "Centrifuge",
    image: "/equipment/centrifuge/bench-top-low-speed-centrifuge.webp",
    excerpt: "Reliable low-speed centrifuge designed for clinical diagnostics and basic cellular separation."
  },
  {
    title: "Table Top Oil Test Centrifuge",
    slug: "table-top-oil-test-centrifuge",
    category: "Centrifuge",
    image: "/equipment/centrifuge/table-top-oil-test-centrifuge.webp",
    excerpt: "Specialized for petroleum and oil testing applications, meeting stringent industry standards."
  },
  {
    title: "Portable Autoclave",
    slug: "portable-autoclave",
    category: "Autoclave & Sterilizer",
    image: "/equipment/autoclave/portable-autoclave.webp",
    excerpt: "Compact and easy-to-use portable sterilization unit for small clinics and mobile testing."
  },
  {
    title: "Horizontal Autoclave Cylindrical",
    slug: "horizontal-autoclave-cylindrical",
    category: "Autoclave & Sterilizer",
    image: "/equipment/autoclave/horizontal-autoclave-cylindrical.webp",
    excerpt: "Durable cylindrical horizontal autoclave designed for consistent, high-pressure sterilization."
  },
  {
    title: "Vertical Autoclave Deluxe",
    slug: "vertical-autoclave-deluxe",
    category: "Autoclave & Sterilizer",
    image: "/equipment/autoclave/vertical-autoclave-deluxe.webp",
    excerpt: "Premium vertical autoclave featuring advanced digital controls and enhanced safety mechanisms."
  },
  {
    title: "Vertical Autoclave Economy",
    slug: "vertical-autoclave-economy",
    category: "Autoclave & Sterilizer",
    image: "/equipment/autoclave/vertical-autoclave-economy.webp",
    excerpt: "Cost-effective vertical sterilization solution without compromising on safety or performance."
  },
  {
    title: "Physical Balance",
    slug: "physical-balance",
    category: "Industrial Balance",
    image: "/equipment/lab-balances/physical-balance.webp",
    excerpt: "Traditional, highly sensitive physical balance for precise analytical and academic weighing."
  },
  {
    title: "Chemical Balance",
    slug: "chemical-balance",
    category: "Industrial Balance",
    image: "/equipment/lab-balances/chemical-balance.webp",
    excerpt: "Precision chemical balance engineered for exact formulations in pharmaceutical and chemical labs."
  },
  {
    title: "Toys Testing & Inspection Equipment",
    slug: "equipmentfortoy",
    category: "Testing Equipment",
    image: "/equipment/toys-testing/toys-testing-lab.jpg",
    excerpt: "Comprehensive testing equipment to ensure toy safety and compliance with IS 9873 standards."
  },
  {
    title: "Gold Testing Equipment for BIS Hallmarking",
    slug: "equipmentforgold",
    category: "Testing Equipment",
    image: "/equipment/gold-testing/xrf-testing-machine.jpg",
    excerpt: "High-precision gold testing and assaying equipment for authentic BIS hallmarking centers."
  },
  {
    title: "Footwear Testing Equipment",
    slug: "equipmentforfootwear",
    category: "Testing Equipment",
    image: "/equipment/footwear-testing/footwear-testing.jpg",
    excerpt: "Advanced testing machinery for verifying footwear durability, heat resistance, and BIS compliance."
  },
  {
    title: "Laser Soldering Machine",
    slug: "eqipmentsforleaser",
    category: "Manufacturing Equipment",
    image: "/equipment/soldering-machine/jewellery-laser-soldering-machine.jpg",
    excerpt: "High-precision laser soldering solutions for jewellery, electronics, and medical device manufacturing."
  },
  {
    title: "Solar Panel Testing & Inspection Equipment",
    slug: "eqipmentforsolar",
    category: "Testing Equipment",
    image: "/equipment/solar-testing/solar-panel-testing.png",
    excerpt: "Essential testing machinery for solar panels to guarantee performance and regulatory compliance."
  }
];

export default function EquipmentsAndMachinery() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full bg-[#051c35] overflow-hidden">
        <div className="flex w-full">
          <div className="w-full shrink-0 relative">
            <div className="grid grid-cols-1 grid-rows-1 w-full max-w-[2000px] mx-auto">

              {/* IMAGE LAYER */}
              <div className="col-start-1 row-start-1 w-full relative flex items-start">
                <img
                  src="/equipments-and-machinery-dash-image.webp"
                  alt="Premium Industrial Equipments & Machinery"
                  className="w-full h-full object-cover object-left sm:h-auto sm:object-contain block min-h-[450px] sm:min-h-0"
                />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>

              {/* TEXT CONTENT LAYER */}
              <div className="col-start-1 row-start-1 relative z-10 w-full flex items-center">
                <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 py-8 sm:py-1 md:px-4 md:py-1 xl:py-6 lg:px-8 2xl:px-12">
                  <div className="w-full sm:w-[50%] md:w-[33%] lg:w-[31%] lg:-ml-4 lg:-mt-8 xl:-mt-8 2xl:mt-0 xl:w-[34%] xl:-ml-8 2xl:w-[30%] 2xl:-ml-0 xl:max-w-[650px] 2xl:max-w-[750px]">
                    <h1 className="text-[26px] leading-tight sm:text-[14px] md:text-[18px] lg:text-[24px] xl:text-[36px] 2xl:text-[42px] font-black text-[#0a192f] md:leading-tight mb-3 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-4 2xl:mb-6 tracking-tight">
                      <span className="whitespace-normal sm:whitespace-nowrap">Premium Industrial</span> <br className="hidden sm:block" />
                      <span className="text-[#0075B6] drop-shadow-sm bg-white/95 px-2 md:px-2 xl:px-3 2xl:px-4 py-1 md:py-1 xl:py-1.5 2xl:py-2 rounded md:rounded-lg inline-block mt-2 sm:mt-0.5 md:mt-1 lg:mt-1 xl:mt-2 2xl:mt-3 text-[14px] sm:text-[9px] md:text-[11px] lg:text-[16px] xl:text-[24px] 2xl:text-[30px] whitespace-normal sm:whitespace-nowrap border border-[#0075B6]/10">
                        Equipments & Machinery
                      </span>
                    </h1>

                    <p className="text-[#112340] font-bold text-[13px] sm:text-[7.5px] md:text-[10px] lg:text-[13px] xl:text-[15px] 2xl:text-[18px] mb-5 sm:mb-1.5 md:mb-3 lg:mb-3 xl:mb-6 2xl:mb-10 leading-relaxed sm:leading-tight md:leading-snug lg:leading-relaxed bg-white/70 border border-white/50 p-3 sm:p-1.5 md:p-2 lg:p-2 xl:px-4 xl:py-3 2xl:px-6 2xl:py-5 rounded-xl md:rounded-lg backdrop-blur-md shadow-sm inline-block w-full">
                      Empower your production facility with our comprehensive range of state-of-the-art industrial machinery. We supply top-tier, globally certified testing and manufacturing equipment engineered for rigorous compliance, exceptional accuracy, uncompromised safety, and maximum operational efficiency across all major industrial sectors.
                    </p>

                    <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 mb-4 sm:mb-1.5 md:mb-3 lg:mb-3 xl:mb-6 2xl:mb-10 overflow-visible">
                      <Link
                        href="/contact-us"
                        className="bg-[#0a192f] hover:bg-[#112340] text-white flex items-center justify-center flex-1 sm:flex-none px-4 py-2 sm:px-1 sm:py-0.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 xl:px-6 xl:py-3 2xl:px-8 2xl:py-4 rounded md:rounded-md font-bold transition-colors shadow-lg text-[13px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] whitespace-nowrap"
                        style={{ minWidth: "120px" }}
                      >
                        Contact Us
                      </Link>
                      <Link
                        href="#equipment-list"
                        className="bg-white text-[#0075B6] border-2 border-[#0075B6] hover:bg-[#0075B6] hover:text-white flex items-center justify-center flex-1 sm:flex-none px-4 py-1.5 sm:px-1 sm:py-0 md:px-3 md:py-1 lg:px-4 lg:py-2 xl:px-6 xl:py-2.5 2xl:px-8 2xl:py-3.5 rounded md:rounded-md font-bold transition-all shadow-lg text-[13px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] cursor-pointer whitespace-nowrap"
                        style={{ minWidth: "120px" }}
                      >
                        Explore Equipment
                      </Link>
                    </div>

                    <div className="flex flex-col gap-2 md:gap-1 lg:gap-2 xl:gap-3 2xl:gap-4">
                      <div className="flex flex-wrap gap-2 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-4 2xl:gap-5 text-[10px] sm:text-[7px] md:text-[8.5px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#0a192f] font-extrabold">
                        <span className="flex items-center gap-0.5"><span className="text-[#0075B6] text-sm md:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] leading-none mt-[-1px]">✔</span> High Precision</span>
                        <span className="flex items-center gap-0.5"><span className="text-[#0075B6] text-sm md:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] leading-none mt-[-1px]">✔</span> Globally Certified</span>
                        <span className="flex items-center gap-0.5"><span className="text-[#0075B6] text-sm md:text-[10px] lg:text-[14px] xl:text-[18px] 2xl:text-[20px] leading-none mt-[-1px]">✔</span> Uncompromised Safety</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Listings Section (Blog Design Style) - Temporarily disabled for deployment */}
      {/* 
      <section id="equipment-list" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Explore Our Machinery Catalog</h2>
            <div className="w-24 h-1 bg-[#0075B6] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Browse our comprehensive range of high-performance industrial and laboratory equipment engineered for excellence.</p>
          </div>

          <EquipmentList equipments={equipments} />
        </div>
      </section>
      */}
      
      {/* SEO Content Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-6">Why Choose Our Industrial Equipment & Machinery?</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  At <strong>AN Global Services</strong>, we pride ourselves on being the leading supplier of high-precision industrial machinery and laboratory equipment in India. Whether you are setting up a state-of-the-art testing facility or upgrading your manufacturing plant, our premium range of <Link href="/bench-top-high-speed-centrifuge" className="text-[#0075B6] hover:underline font-semibold">high-speed centrifuges</Link>, industrial-grade <Link href="/cement-autoclave" className="text-[#0075B6] hover:underline font-semibold">autoclaves</Link>, and digital balances guarantee uncompromised accuracy and longevity.
                </p>
                <p>
                  Our equipment strictly complies with international regulatory standards, ensuring seamless integration into ISO and BIS-certified environments. We don’t just supply machinery; we deliver complete operational confidence.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "100% Certified & Compliant Machinery",
                  "Heavy-Duty Construction for Industrial Use",
                  "Advanced Programmable Testing Features",
                  "Comprehensive After-Sales Support & Calibration",
                  "End-to-End Installation & Setup Services"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium text-sm md:text-base">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
