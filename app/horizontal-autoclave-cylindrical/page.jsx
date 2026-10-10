import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Horizontal Autoclave Cylindrical | AN Global Services",
  description:
    "High-capacity horizontal autoclave sterilizer for medical, laboratory, and industrial use. Features robust stainless steel build, front-loading radial door, and advanced safety controls.",
  keywords: [
    "Horizontal Autoclave",
    "Horizontal Steam Sterilizer",
    "Laboratory Autoclave",
    "Medical Sterilizer Equipment",
    "Industrial Autoclave",
    "Front-loading Autoclave",
    "High Pressure Sterilizer",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/horizontal-autoclave-cylindrical",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HorizontalAutoclavePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="horizontal-autoclave-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Horizontal Autoclave Cylindrical",
              "description": "High-grade Horizontal Autoclave designed for high-capacity sterilization in medical, pharmaceutical, and laboratory settings. Features front-loading access and advanced safety locks.",
              "image": "https://www.anglobalservices.com/equipment/autoclave/horizontal-autoclave-cylindrical.webp",
              "brand": {
                "@type": "Brand",
                "name": "AN Global Services"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://www.anglobalservices.com/contact-us",
                "priceCurrency": "INR",
                "price": "0",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "AN Global Services"
                }
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is a Horizontal Autoclave used for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A horizontal autoclave is a high-capacity steam sterilizer used to eliminate microorganisms from surgical instruments, laboratory glassware, pharmaceutical media, and other bulk items. Its horizontal orientation makes it easier to load heavy or bulky materials."
                }
              },{
                "@type": "Question",
                "name": "What are the typical operating temperatures?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard sterilization cycles run between 121°C (for 15-20 minutes) and 134°C (for 3-5 minutes for flash sterilization), depending on the load type and requirements."
                }
              }]
            }
          ]
        }
        `}
      </Script>

      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-72">
        <Image
          src="/service/pages-of-services-dash-1.webp"
          alt="Horizontal Autoclave Cylindrical"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              HORIZONTAL AUTOCLAVE CYLINDRICAL
            </h1>
          </div>
        </div>
      </section>

      {/* Main Product Card Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12" id="product-overview">
        <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row h-full">
            
            {/* Image Side */}
            <div className="lg:w-[40%] relative flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-white border-b lg:border-b-0 lg:border-r border-gray-100 min-h-[400px]">
              <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0075B6 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
              <div className="relative w-full h-full max-w-[400px] aspect-[4/5]">
                <Image
                  src="/equipment/autoclave/horizontal-autoclave-cylindrical.webp"
                  alt="Professional Horizontal Autoclave Equipment"
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-[60%] p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-black text-[#0a192f] mb-4">
                About the Product
              </h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
              
              <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  The <strong className="text-[#0075B6]">Horizontal Autoclave Cylindrical</strong> is a robust, high-capacity sterilization unit built for demanding environments such as hospitals, research laboratories, and pharmaceutical manufacturing plants.
                </p>
                <p>
                  Unlike vertical models, its <strong>horizontal, front-loading design</strong> makes it significantly easier to load and unload heavy, bulky items or large quantities of surgical packs. Using high-pressure saturated steam, it effectively penetrates materials to eliminate all forms of microbial life, including spores, ensuring absolute sterility.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Operating industrial-scale sterilizers requires precision plumbing, electrical integration, and safety checks. Our team provides <strong className="text-[#0a192f]">comprehensive end-to-end solutions</strong>. We install the equipment, integrate it with your facility's utilities, calibrate the control panel, and train your staff on safe operation and cycle management.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="bg-[#0075B6] hover:bg-[#005a8f] text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center flex-1 sm:flex-none"
                >
                  Request a Quote & Setup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Operating Principle Section (How It Works) */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">How Sterilization Works</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Horizontal autoclaves utilize high-pressure saturated steam to achieve sterilization. The process is fully automated and closely monitored by the control panel for maximum safety and efficacy:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Loading & Sealing</h3>
                    <p className="text-gray-600 leading-relaxed">Materials are loaded onto sliding trays or carts. The heavy-duty radial arm door is closed and locked, creating an airtight seal capable of withstanding intense pressure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Steam Penetration</h3>
                    <p className="text-gray-600 leading-relaxed">Saturated steam enters the chamber, forcing cold air out. The temperature and pressure rise rapidly (typically up to 121°C or 134°C). The steam penetrates porous materials and wraps around solid instruments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Holding & Exhaust</h3>
                    <p className="text-gray-600 leading-relaxed">The peak temperature is held for the required sterilization time. Once complete, steam is safely exhausted, and the chamber gradually depressurizes, leaving the load perfectly sterile and ready for use.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-inner">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Users & Facilities</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Hospitals & Clinics</strong>
                    <span className="text-gray-600">Essential for the daily sterilization of surgical instruments, textiles, and bulk medical supplies.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Pharmaceutical Plants</strong>
                    <span className="text-gray-600">Used to sterilize cleanroom garments, manufacturing tools, and biological media batches.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Research Laboratories</strong>
                    <span className="text-gray-600">Crucial for decontaminating biohazardous waste and preparing sterile glassware and agar plates.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications Cards */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">Equipment Features & Specs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Engineered for high capacity, consistent reliability, and uncompromised operator safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Intelligent Control Panel</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>PID Microprocessor:</strong> Automates the entire heating, holding, and cooling cycle precisely.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Dual Gauges:</strong> Analog pressure gauges combined with digital temperature readouts for easy monitoring.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Cycle Indicators:</strong> Visual light indicators show the current stage of sterilization.</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  02
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Radial Safety Locking</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Radial Arm Door:</strong> Multipoint locking arms distribute pressure evenly across the heavy door seal.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Pressure Interlock:</strong> Prevents the door from being opened if any pressure remains inside the chamber.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Low Water Cut-off:</strong> Automatically shuts down heaters to prevent burnout if water levels drop.</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  03
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Industrial Construction</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>SS 304/316 Chamber:</strong> High-grade stainless steel ensures long-lasting resistance to corrosion and high pressure.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Ergonomic Stand:</strong> Mounted on a sturdy tubular stand for an optimal loading height.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Double-Walled:</strong> Improved thermal efficiency and reduced external heat radiation for operator comfort.</li>
                </ul>
              </div>
            </div>

            {/* Card 4 - Full Width Specs */}
            <div className="bg-[#0a192f] rounded-2xl p-8 shadow-lg md:col-span-2 lg:col-span-3 mt-4 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 border-b border-white/20 pb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Sterilizing Temperature</div>
                    <div className="text-white font-semibold">121°C to 134°C</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operating Pressure</div>
                    <div className="text-white font-semibold">15 to 30 PSI (1.2 - 2.2 kg/cm²)</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Construction Material</div>
                    <div className="text-white font-semibold">Stainless Steel 304/316</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Loading Type</div>
                    <div className="text-white font-semibold">Front-loading (Horizontal Cylindrical)</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Maintenance & Compliance Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Maintenance & Operation Guidelines</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Industrial autoclaves require rigorous maintenance protocols to ensure absolute safety and 100% sterilization efficacy. AN Global Services trains your staff on the following operational requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Daily Checks</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Inspect the heavy-duty door gasket for any signs of wear, cracks, or debris before locking.</li>
                <li>Verify water levels in the reservoir prior to starting a cycle.</li>
                <li>Ensure the chamber drain is clear of blockages.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Weekly Maintenance</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Validation:</strong> Run a biological indicator test (like Bacillus stearothermophilus) to confirm sterilization efficacy.</li>
                <li>Clean the interior chamber with mild detergents to prevent scaling.</li>
                <li>Check the mechanical safety relief valves.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Annual Servicing</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Professional calibration of the PID temperature and pressure controllers.</li>
                <li>Replacement of the main door gasket and sealing rings.</li>
                <li>Comprehensive inspection of heating elements and electrical safety interlocks.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-white py-16 border-t border-gray-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-[#0075B6] rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 text-lg">Essential information about our Horizontal Cylindrical Sterilizers.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is a Horizontal Autoclave used for?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                A horizontal autoclave is a high-capacity steam sterilizer used to eliminate microorganisms from surgical instruments, laboratory glassware, pharmaceutical media, and other bulk items. Its horizontal orientation makes it easier to load heavy or bulky materials.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What are the typical operating temperatures?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Standard sterilization cycles run between 121°C (for 15-20 minutes) and 134°C (for 3-5 minutes for flash sterilization), depending on the load type and regulatory requirements.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What makes the cylindrical design unique?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                The cylindrical chamber is structurally stronger under high pressure, allowing for thinner walls without compromising safety. It is a cost-effective design for heavy-duty sterilization compared to rectangular models.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Are these sterilizers fully automatic?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, our units are equipped with advanced PID microprocessor control panels. You simply set the parameters, and the machine automatically controls the heating, holding, and steam exhaust cycles.
              </div>
            </details>
          </div>
        </div>
      </section>
      
    </main>
  );
}
