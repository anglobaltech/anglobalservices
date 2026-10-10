import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Bench Top Low Speed Centrifuge | Clinical Lab Centrifuge",
  description:
    "Buy a reliable Bench Top Low Speed Centrifuge. Perfect for PRP, blood separation, and routine clinical processing. Engineered by AN Global Services for daily lab use.",
  keywords: [
    "Bench Top Low Speed Centrifuge",
    "Low Speed Centrifuge",
    "Clinical Centrifuge",
    "Benchtop Centrifuge",
    "PRP Centrifuge",
    "Blood Separation Centrifuge",
    "Routine Lab Centrifuge",
    "AN Global Services laboratory equipment",
  ],
  alternates: {
    canonical: "https://www.anglobalservices.com/bench-top-low-speed-centrifuge",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BenchTopLowSpeedCentrifugePage() {
  return (
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Schema Markup */}
      <Script id="low-speed-centrifuge-schema" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "name": "Bench Top Low Speed Centrifuge",
              "alternateName": ["Low Speed Centrifuge", "Clinical Centrifuge", "PRP Centrifuge", "Benchtop Centrifuge"],
              "description": "A high-durability, low speed bench top centrifuge optimized for routine clinical analysis, blood component separation, PRP preparation, and urine processing.",
              "image": "https://www.anglobalservices.com/equipment/centrifuge/bench-top-low-speed-centrifuge.webp",
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
                "name": "What is considered 'low speed' for a centrifuge?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Low speed centrifuges typically operate in the range of 300 RPM to 6,000 RPM. This speed is perfectly calibrated to separate heavier cellular components like red blood cells from plasma without rupturing delicate cell walls."
                }
              },{
                "@type": "Question",
                "name": "Can this be used for PRP (Platelet-Rich Plasma) therapy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, absolutely. Its precise lower RPM settings and smooth deceleration profiles make it the standard choice for aesthetic clinics, orthopedic surgeons, and dermatologists preparing high-quality PRP."
                }
              },{
                "@type": "Question",
                "name": "Does it heat up during operation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. By operating at lower speeds, the aerodynamic friction is minimal. Additionally, our machines feature a flow-through ventilation design that keeps the internal chamber at ambient room temperature, protecting heat-sensitive clinical samples."
                }
              },{
                "@type": "Question",
                "name": "What type of tubes can I spin in this machine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It features versatile rotor options that can accept standard 10ml to 15ml vacuum blood collection tubes, conical urine tubes, and specialized PRP kits, making it highly adaptable for clinical work."
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
          alt="Bench Top Low Speed Centrifuge Laboratory Equipment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a3d62]/40 flex items-center justify-center text-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] uppercase">
              BENCH TOP LOW SPEED CENTRIFUGE
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
                  src="/equipment/centrifuge/bench-top-low-speed-centrifuge.webp"
                  alt="Bench Top Low Speed Centrifuge Equipment"
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
                  The <strong className="text-[#0075B6]">Bench Top Low Speed Centrifuge</strong> (commonly known as a <strong className="font-semibold text-gray-900">clinical centrifuge</strong>) is specifically designed for procedures where delicate cellular separation is required without subjecting samples to extreme G-forces.
                </p>
                <p>
                  This highly dependable workhorse is a staple in medical labs, hospitals, and aesthetic clinics. Operating at optimized lower RPMs, it perfectly stratifies whole blood into plasma, buffy coat, and red blood cells, ensuring high yields for diagnostic testing and regenerative medicine (PRP) applications.
                </p>
                <div className="bg-blue-50/80 border-l-4 border-[#0075B6] p-5 rounded-r-lg mt-6 shadow-sm">
                  <h3 className="text-[#0a192f] font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Complete Setup by AN Global Services
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    Clinical accuracy demands precision setup. We deliver and calibrate your low speed centrifuge directly at your facility, ensuring the RPM/RCF conversion is exact, and training your team to store their most used clinical protocols in the digital memory.
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
              <h2 className="text-3xl font-black text-[#0a192f] mb-4">Precision Clinical Processing</h2>
              <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                When spinning biological samples, the goal isn't just speed—it's careful, clear stratification. Our low speed units achieve this beautifully:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gentle Acceleration</h3>
                    <p className="text-gray-600 leading-relaxed">The motor smoothly ramps up to the target speed, preventing turbulence inside the tube that could cause hemolysis (rupturing of red blood cells).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Controlled Braking</h3>
                    <p className="text-gray-600 leading-relaxed">Fast, abrupt stops can resuspend the newly separated cell layers. Programmable braking profiles ensure a soft stop to preserve the distinct plasma/cell lines.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#0075B6] font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Universal Rotor Compatibility</h3>
                    <p className="text-gray-600 leading-relaxed">Whether you are using swing-out rotors for flat cell pellets or fixed-angle rotors for rapid processing, the machine easily adapts to clinical vacuum tubes.</p>
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
                    <strong className="block text-lg text-gray-900">Diagnostic Medical Labs</strong>
                    <span className="text-gray-600">The daily standard for separating serum and plasma for routine chemistry, hematology, and immunology tests.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Aesthetic & Orthopedic Clinics</strong>
                    <span className="text-gray-600">The primary machine utilized for isolating high-quality Platelet-Rich Plasma (PRP) for cosmetic and regenerative therapies.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-[#0075B6] flex-shrink-0"></div>
                  <div>
                    <strong className="block text-lg text-gray-900">Urology Departments</strong>
                    <span className="text-gray-600">Ideal for gently spinning down urine samples to examine sediment under a microscope.</span>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Designed for intuitive everyday use, maximum sample integrity, and long motor life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 text-[#0075B6] rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm font-black">
                  01
                </div>
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Dependable Drive System</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Brushless DC Motor:</strong> Delivers quiet, maintenance-free, and consistent torque even at lower RPM settings.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Ambient Cooling:</strong> Airflow design dissipates any minimal motor heat, ensuring samples remain at room temperature.</li>
                  <li className="flex items-start gap-2"><span className="text-[#0075B6] mt-0.5">✔</span> <strong>Stable Footing:</strong> Heavy base and specialized rubber suction feet prevent "walking" or vibration on the bench.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Clinical Dashboard</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Membrane Keypad:</strong> Wipe-clean surface protects internal electronics from spilled blood or chemical reagents.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>Digital LCD/LED:</strong> Clear readouts of Speed (RPM) and Force (RCF) simultaneously.</li>
                  <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✔</span> <strong>One-Touch Memory:</strong> Program standard clinical spins (e.g., "Urine 5 min", "PRP 10 min") for instant recall.</li>
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
                <h3 className="text-xl font-extrabold text-[#0a192f] mb-3">Operator Safety</h3>
                <ul className="space-y-3 text-gray-600 font-medium text-sm">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Electronic Lid Lock:</strong> Interlock system ensures the lid cannot be popped open while the rotor is in motion.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Imbalance Detector:</strong> If a tube breaks or is loaded incorrectly, the machine halts instantly.</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">✔</span> <strong>Emergency Release:</strong> Manual override available in case the clinic loses electrical power.</li>
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
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Operating Speed</div>
                    <div className="text-white font-semibold">300 - 6,000 RPM</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Standard Capacity</div>
                    <div className="text-white font-semibold">Up to 4x100ml / 24x15ml</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Motor Type</div>
                    <div className="text-white font-semibold">Brushless DC Drive</div>
                  </div>
                  <div>
                    <div className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Rotor Options</div>
                    <div className="text-white font-semibold">Swing-out & Fixed Angle</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comprehensive Maintenance & Calibration Guide */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-[#0a192f] mb-4">Comprehensive Maintenance & Calibration Guide</h2>
            <div className="w-16 h-1.5 bg-[#0075B6] rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Clinical settings require strict adherence to hygiene and functional checks. Maintain the longevity of your low speed centrifuge with these best practices from AN Global Services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0075B6] pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Decontamination</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Because these handle bio-hazardous fluids (blood, urine), thoroughly wipe down the inner bowl daily with a 10% bleach solution or standard lab disinfectant.</li>
                <li>Remove rotor buckets weekly and soak them in a non-corrosive disinfectant.</li>
                <li>Dry all parts completely to prevent pitting of the metal surfaces.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Rotor Integrity</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Inspect tube cushions/adapters inside the buckets to ensure they are not degraded or missing, which can cause tubes to crack under force.</li>
                <li>If using a swing-out rotor, apply a specialized rotor grease to the pivot pins every month so the buckets swing freely without grinding.</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">Professional Calibration</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Annual optical tachometer tests to verify that the RPM reading on the screen matches the physical rotation speed exactly.</li>
                <li>Checking the motor's carbon brushes (if applicable to the model) or verifying the brushless drive electronics.</li>
                <li>Testing the lid lock mechanism for safety compliance.</li>
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
            <p className="text-gray-500 text-lg">Learn more about our low speed clinical centrifuges.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What is considered 'low speed' for a centrifuge?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Low speed centrifuges typically operate in the range of 300 RPM to 6,000 RPM. This speed is perfectly calibrated to separate heavier cellular components like red blood cells from plasma without rupturing delicate cell walls.
              </div>
            </details>
            
            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Can this be used for PRP (Platelet-Rich Plasma) therapy?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                Yes, absolutely. Its precise lower RPM settings and smooth deceleration profiles make it the standard choice for aesthetic clinics, orthopedic surgeons, and dermatologists preparing high-quality PRP.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                Does it heat up during operation?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                No. By operating at lower speeds, the aerodynamic friction is minimal. Additionally, our machines feature a flow-through ventilation design that keeps the internal chamber at ambient room temperature, protecting heat-sensitive clinical samples.
              </div>
            </details>

            <details className="group bg-gray-50/50 rounded-xl border border-gray-200 overflow-hidden cursor-pointer open:bg-white open:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between p-5 font-semibold text-gray-900 group-open:text-[#0075B6]">
                What type of tubes can I spin in this machine?
                <span className="transition duration-300 group-open:rotate-90 text-gray-400 group-open:text-[#0075B6]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 pt-2 border-t border-gray-100">
                It features versatile rotor options that can accept standard 10ml to 15ml vacuum blood collection tubes, conical urine tubes, and specialized PRP kits, making it highly adaptable for clinical work.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
