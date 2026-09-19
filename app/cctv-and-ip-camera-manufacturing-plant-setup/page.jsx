import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CCTV & IP Camera Manufacturing Plant Setup in India | AN Global Services",
  description: "End-to-end turnkey solutions for CCTV and IP Camera Manufacturing Plant Setup. SMT Line, Active Alignment, Cleanrooms, and BIS Compliance support in India.",
  keywords: [
    "CCTV camera manufacturing plant setup",
    "IP camera assembly line",
    "SMT line setup India",
    "Active Alignment camera sensor",
    "BIS CRS compliance for cameras",
    "Camera manufacturing consultants",
    "Electronic manufacturing setup India"
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function CameraManufacturingPlantSetup() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/pages-of-services-dash-1.webp"
          alt="CCTV & IP Camera Manufacturing Plant Setup"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold text-center tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              CCTV & IP Camera Manufacturing Plant Setup
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction 50/50 Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-start">
          <div className="w-full max-w-[550px] mx-auto xl:max-w-none xl:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
              {/* Placeholder Image until graphic designer creates the real one */}
              <Image
                src="/service/cctv-and-ip-camera-manufacturing-plant-setup-1.webp" 
                alt="Camera Manufacturing Setup"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 uppercase">Introduction to Turnkey Plant Setup</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-3">
                <span className="absolute left-0 top-0 h-0.5 w-60 md:w-80 bg-[#0072b1]"></span>
              </div>
              
              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                Setting up a successful CCTV and IP camera manufacturing plant requires technical precision, clean environments, and highly reliable automated machinery. At <strong className="text-[#0072b1]">AN Global Services</strong>, we provide complete, easy-to-manage turnkey solutions for establishing your camera manufacturing facility, designed to seamlessly support high-volume daily production.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                From choosing the right Surface Mount Technology (SMT) machinery to setting up high-grade cleanrooms for optical sensor alignment, we expertly guide you through every critical step. We ensure your facility meets top global manufacturing standards, preventing common issues like sensor fogging and component oxidation through advanced, industry-proven processes.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                Beyond the physical machinery, our expert consultants help you navigate the essential regulatory landscape. This includes securing your mandatory BIS CRS certification, Pollution Control Board NOCs, and exploring valuable government subsidies under various schemes to help significantly reduce your overall setup costs.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                Whether you are planning to launch a smart home camera brand or an industrial-grade security network, our dedicated team ensures your production line is perfectly calibrated, financially optimized, and fully compliant with all manufacturing regulations right from day one.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-2">
                We also specialize in setting up complete, in-house testing laboratories within your facility. This includes installing automated aging racks, waterproof testing chambers, and image quality calibration stations to ensure every product meets high industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width text below the grid */}
        <div className="mt-8 xl:mt-10">
          <p className="text-gray-600 text-[15px] leading-6 text-justify">
            By building rigorous quality control mechanisms directly into your assembly line, we empower your brand to manufacture and deliver reliable, high-performance surveillance cameras that can easily compete in both the growing domestic and international markets.
          </p>
        </div>
      </section>

      {/* Gray Section: Manufacturing Process & Infrastructure */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">End-to-End Manufacturing Process</h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-72 md:w-96 bg-[#0072b1]"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0072b1] rounded-full"></span>
                1. SMT PCB Assembly
              </h3>
              <p className="text-gray-600 text-[14px] leading-6 text-justify">
                The foundation of any security camera is its mainboard. The process begins with automatic solder paste printing, followed by high-speed Pick & Place machines that accurately mount microcontrollers and image sensors. The board then passes through an advanced reflow oven setup to ensure perfect, long-lasting solder joints without any oxidation issues.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0072b1] rounded-full"></span>
                2. Active Alignment & Sensor Bonding
              </h3>
              <p className="text-gray-600 text-[14px] leading-6 text-justify">
                This vital step takes place inside a specialized, dust-free cleanroom environment. Advanced robotic machines perform live-powered focusing and optical centering of the camera lens. The image sensor is then precisely mounted to the circuit board and locked into perfect optical alignment using industrial-grade adhesives.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0072b1] rounded-full"></span>
                3. Housing & Testing
              </h3>
              <p className="text-gray-600 text-[14px] leading-6 text-justify">
                The motherboard, internal lenses, and power units are carefully assembled into weather-proof casings. After assembly, the finished units undergo rigorous testing in specialized dark box stations to thoroughly calibrate resolution, color accuracy, night-vision features, and waterproof pressure checks.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-[#0072b1] rounded-full"></span>
                4. Plant & Space Requirements
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[14px]">
                <li><strong>Floor Area:</strong> Requires a spacious layout tailored to your specific production volume, typically starting with an expansive industrial floor space.</li>
                <li><strong>Cleanroom:</strong> A dedicated, high-grade ISO cleanroom area is strictly required for optical sensor mounting to completely prevent dust contamination.</li>
                <li><strong>Power:</strong> Requires a robust commercial three-phase power load with reliable UPS backup systems for uninterrupted production lines.</li>
                <li><strong>Environment:</strong> Requires anti-static (ESD) safe flooring alongside strict humidity and temperature controls to protect sensitive components.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Essential Machinery & Equipment */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="text-xl font-bold text-gray-900 uppercase">Essential Machinery & SMT Line Specifications</h2>
        <div className="w-full h-0.5 bg-gray-200 relative mb-8">
          <span className="absolute left-0 top-0 h-0.5 w-72 md:w-[400px] bg-[#0072b1]"></span>
        </div>
        <p className="text-gray-600 text-[15px] leading-7 text-justify pb-6">
          Setting up a successful camera plant requires precision machinery capable of safely handling delicate sensors and micro-components. We help you procure, install, and calibrate the exact assembly line setup you need—ranging from highly efficient semi-automatic lines to ultra-high-speed industrial setups—using top, globally recognized machinery brands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 bg-white rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-[#0a3d62] mb-2">1. Solder Printing</h3>
            <p className="text-gray-600 text-[14px]">Automated inline printing systems integrated with advanced inspection technology to guarantee flawless component placement on every board.</p>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-[#0a3d62] mb-2">2. High-Speed Pick & Place</h3>
            <p className="text-gray-600 text-[14px]">Highly accurate placement machines capable of smoothly handling the smallest electronic micro-components and complex camera sensors with extreme precision.</p>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-[#0a3d62] mb-2">3. Reflow Soldering</h3>
            <p className="text-gray-600 text-[14px]">Multi-zone industrial heating ovens equipped with specialized gas purging systems to ensure long-lasting durability and prevent component oxidation.</p>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-[#0a3d62] mb-2">4. Automated Inspection</h3>
            <p className="text-gray-600 text-[14px]">Advanced Automated Optical Inspection (AOI) systems designed to verify flawless connections and exact component placement before final assembly.</p>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-[#0a3d62] mb-2">5. Optical Alignment</h3>
            <p className="text-gray-600 text-[14px]">Advanced alignment machines for robotic lens mounting and precise optical centering to ensure crystal-clear video quality.</p>
          </div>
          <div className="border border-gray-200 bg-white rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-[#0a3d62] mb-2">6. Testing & Calibration</h3>
            <p className="text-gray-600 text-[14px]">Automated test benches, flashers, and comprehensive leak testers for rigorous and reliable quality control checks.</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Bill of Materials & Supply Chain */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase">Bill of Materials (BOM) & Supply Chain Setup</h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-72 md:w-[350px] bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-7 text-justify pb-6">
            A reliable supply chain is critical for maintaining uninterrupted production. We assist in establishing robust vendor networks for all critical components of a Smart IP/CCTV Camera, ensuring you secure high-quality raw materials efficiently. Key components include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px]">
              <li><strong>Image Sensors:</strong> High-definition sensors designed for incredibly clear and sharp video capturing.</li>
              <li><strong>Lens Modules:</strong> Precision optics including internal filters for seamless day and night switching.</li>
              <li><strong>Main Chipsets (MCU):</strong> The core processor that handles smart analytics and robust image signal processing.</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px]">
              <li><strong>PCB Components:</strong> High-quality bare boards, microcontrollers, power chips, and essential passive electronic components.</li>
              <li><strong>Housing & Casings:</strong> Weatherproof metallic or highly durable plastic outer shells to protect the camera internals.</li>
              <li><strong>Cables & Accessories:</strong> Reliable power connectors, networking modules, strong mounting brackets, and customized packaging materials.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* White Section: Machinery & Subsidies */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 uppercase">Government Incentives & Subsidies</h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-60 md:w-80 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-7 text-justify pb-4">
            The Indian Government aggressively promotes domestic electronics manufacturing. By setting up a CCTV camera plant, you can significantly offset a major portion of your initial machinery investment through various highly beneficial government schemes:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-green-800 mb-2">Central Subsidies & Schemes</h3>
              <p className="text-gray-700 text-[14px]">
                Offers lucrative capital subsidies on eligible plant, machinery, equipment, cleanroom infrastructure, and utilities. This acts as a reliable capital-linked reimbursement disbursed after official physical verification.
              </p>
            </div>
            
            <div className="border border-blue-200 bg-blue-50 rounded-lg p-5 shadow-sm">
              <h3 className="font-bold text-blue-800 mb-2">Production Linked Incentive (PLI)</h3>
              <p className="text-gray-700 text-[14px]">
                Offers valuable financial incentives based on incremental sales over a base year. This applies to smart IP cameras and requires maintaining a standard level of Domestic Value Addition (DVA) through local manufacturing processes.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 uppercase">Regulatory Compliance Checklist</h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-60 md:w-80 bg-[#0072b1]"></span>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-[#0072b1] font-bold">1</div>
              <div>
                <h4 className="font-semibold text-gray-900">BIS CRS Certification (IS 13252)</h4>
                <p className="text-gray-600 text-[14px]">Mandatory product safety certification required before selling any CCTV/IP Camera in the Indian market.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-[#0072b1] font-bold">2</div>
              <div>
                <h4 className="font-semibold text-gray-900">State Pollution Control Board NOC</h4>
                <p className="text-gray-600 text-[14px]">Consent to Establish (CTE) and Consent to Operate (CTO) are strictly required due to SMT reflow and soldering operations.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-[#0072b1] font-bold">3</div>
              <div>
                <h4 className="font-semibold text-gray-900">Factory & Fire Safety Licenses</h4>
                <p className="text-gray-600 text-[14px]">Required prior to the official operational sign-off of the cleanroom and HVAC systems.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* NEW SECTION: Policy Application Roadmap */}
        <div className="mb-12 mt-12">
          <h2 className="text-xl font-bold text-gray-900 uppercase">Subsidy & Policy Application Roadmap</h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-72 md:w-[400px] bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-7 text-justify pb-6">
            Navigating government portals can be overwhelming. We manage the entire end-to-end subsidy application process to ensure you actually receive the funds you are entitled to:
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 border-l-4 border-[#0072b1] p-4 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-gray-900">Step 1: Udyam & Portal Registration</h4>
              <p className="text-gray-600 text-[14px]">Registering as an MSME to qualify for capital subsidy relaxations and lower threshold requirements.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#0072b1] p-4 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-gray-900">Step 2: Land & Infrastructure Allotment</h4>
              <p className="text-gray-600 text-[14px]">Applying for plot/shed allotment in authorized Electronic Manufacturing Clusters (EMC 2.0) to claim stamp duty and land subsidies.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#0072b1] p-4 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-gray-900">Step 3: DPR & ECMS Application</h4>
              <p className="text-gray-600 text-[14px]">Submitting the Detailed Project Report (DPR), machinery quotations, and line layouts to the MeitY portal before financial closure.</p>
            </div>
            <div className="bg-gray-50 border-l-4 border-[#0072b1] p-4 rounded-r-lg shadow-sm">
              <h4 className="font-bold text-gray-900">Step 4: Physical Verification & Claim</h4>
              <p className="text-gray-600 text-[14px]">Coordinating post-installation on-site machinery audits by MeitY/STPI officers to authorize and release the capex reimbursement.</p>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Vendor RFP & Risk Management */}
        <div className="mb-12 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase">Turnkey Vendor RFP Management</h2>
            <div className="w-full h-0.5 bg-gray-200 relative mb-6">
              <span className="absolute left-0 top-0 h-0.5 w-60 md:w-80 bg-[#0072b1]"></span>
            </div>
            <p className="text-gray-600 text-[14px] leading-6 text-justify pb-4">
              Procuring an SMT line involves massive capital. We run a strict RFP (Request for Proposal) process to evaluate vendors based on a 100-Point Weighted Scoring system:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[14px]">
              <li><strong>Technical Capability (35%):</strong> Verified accuracy for CMOS sensors (±0.015mm), line balancing, and IPC-9850 CPH verification.</li>
              <li><strong>Total Cost of Ownership (25%):</strong> Capital expenditure, spare parts kit costs, and post-warranty AMC rates.</li>
              <li><strong>After-Sales Support (20%):</strong> Local service SLAs (under 4 hours response) and local spare parts warehousing.</li>
              <li><strong>Industry 4.0 Readiness (10%):</strong> IPC-CFX/SECS-GEM compatibility for ERP integration.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 uppercase">Financial Risks & Mitigation</h2>
            <div className="w-full h-0.5 bg-gray-200 relative mb-6">
              <span className="absolute left-0 top-0 h-0.5 w-60 md:w-72 bg-[#0072b1]"></span>
            </div>
            <p className="text-gray-600 text-[14px] leading-6 text-justify pb-4">
              Manufacturing hardware carries inherent financial risks. Our consultancy implements robust mitigation strategies:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[14px]">
              <li><strong>Foreign Exchange Fluctuation:</strong> Importing sensors exposes you to USD/INR risks. We help set up 60-day forward contracts and establish local vendor partnerships.</li>
              <li><strong>Component Rejection Rates:</strong> High scrap during Active Alignment erodes margins. We mitigate this through strict Class 10k cleanroom protocols and 3D SPI/AOI implementation.</li>
              <li><strong>Price Erosion:</strong> Consumer camera prices drop annually. We help you introduce value-added features (AI motion tracking, solar cameras) to maintain Average Selling Prices (ASPs).</li>
            </ul>
          </div>
        </div>
        
        {/* Call to Action Box */}
        <div className="bg-gradient-to-r from-[#0a3d62] to-[#0072b1] rounded-xl p-8 text-center shadow-lg mt-8">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Setup Your Camera Manufacturing Plant?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get a comprehensive Detailed Project Report (DPR), exact machinery costings, layout diagrams, and compliance roadmaps customized for your production goals.
          </p>
          <Link href="/contact-us">
            <button className="bg-white text-[#0a3d62] font-bold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition duration-300 cursor-pointer">
              Contact Us for a Custom Quote
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
