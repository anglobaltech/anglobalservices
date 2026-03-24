import Image from "next/image";
import Link from "next/link";
export const revalidate = 86400;

export const metadata = {
  title:
    "Gold Testing Services | Purity Analysis, XRF Testing & BIS Hallmark Verification | AN Global Services",

  description:
    "Get professional gold testing services including purity analysis, XRF testing, fire assay, karat verification, and BIS hallmark (HUID) verification. Accurate and reliable gold testing for jewellery, coins, and bullion.",

  keywords: [
    "Gold Testing Services India",
    "Gold Purity Testing",
    "XRF Gold Testing",
    "Fire Assay Gold Testing",
    "Gold Karat Testing 24K 22K 18K",
    "BIS Hallmark Verification Gold",
    "HUID Gold Verification India",
    "Gold Testing Laboratory Services",
    "Jewellery Gold Testing Services",
    "Gold Purity Check Near Me",
    "Gold Testing Equipment XRF Spectrometer",
    "AN Global Services Gold Testing",
  ],

  openGraph: {
    title:
      "Gold Testing Services | XRF, Fire Assay & BIS Hallmark Verification",
    description:
      "Expert gold testing services for jewellery and bullion including XRF analysis, fire assay testing, karat verification, and BIS hallmark (HUID) validation.",
    url: "https://www.anglobalservices.com/gold-testing",
    siteName: "AN Global Services",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.anglobalservices.com/gold-testing",
  },
};
export default function BISGoldTesting() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="Gold Testing Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              GOLD TESTING SERVICES
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <Image
              src="/service/bis-gold-testing.png"
              alt="BIS Gold Testing Process"
              width={420}
              height={520}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-0">
            <h2 className="text-xl font-bold text-gray-900 uppercase">
              Gold Testing & Purity Analysis
            </h2>
            <div className="w-88 h-0.5 bg-[#0072b1]" />

            <p className="text-gray-600 text-[15px] leading-7 text-justify py-4">
              Gold testing is the process of determining the purity,
              composition, and authenticity of gold articles such as jewellery,
              coins, bullion, and other gold-based products. It plays a crucial
              role in ensuring that the gold meets declared standards of
              fineness and quality. Accurate testing helps protect buyers,
              sellers, manufacturers, and investors from fraud, adulteration,
              and misrepresentation in the gold market. Since gold is often
              alloyed with other metals like copper, silver, or zinc to improve
              strength and durability, testing becomes essential to identify the
              exact proportion of pure gold present in the item.
            </p>

            <p className="text-gray-600 text-[15px] leading-7 text-justify">
              In India, gold jewellery is regulated under the BIS (Bureau of
              Indian Standards) hallmarking system, which certifies purity
              levels such as 24K (999), 23K (958), 22K (916), 20K (833), 18K
              (750), 14K (585) and 9K (375). BIS hallmarking is a government
              recognized certification that assures consumers about the quality
              and authenticity of gold products. Each hallmarked item carries a
              unique Hallmark Unique Identification (HUID) number, which
              provides traceability and allows consumers to verify the product
              details through official platforms like the BIS Care App. This
              system enhances transparency and builds trust in the gold
              jewellery market.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 space-y-8">
        {/* INTRO */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Gold Testing Services – Complete Guide to Purity Analysis &
            Verification
          </h2>
          <div className="w-65 md:w-205 h-0.5 bg-[#0072b1] mb-6" />

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-4">
            Gold testing is a scientific and standardized process used to
            determine the purity, composition, and authenticity of gold in
            various forms such as jewellery, coins, bullion, and industrial
            products. In today’s market, where gold is one of the most valuable
            and widely traded precious metals, accurate testing is essential to
            ensure transparency, trust, and compliance with regulatory
            standards.
          </p>

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-4">
            Whether you are a manufacturer, jeweller, importer, exporter, or
            consumer, gold testing plays a critical role in verifying the exact
            karat value and detecting any impurities or alloy mixtures present
            in the metal. Professional gold testing services use advanced
            instruments and globally accepted testing methods to deliver precise
            and reliable results.
          </p>

          <p className="text-gray-600 text-[15px] leading-7 text-justify">
            In India, gold purity is regulated through BIS hallmarking
            standards, which ensure that jewellery meets defined fineness levels
            such as 24K (999), 22K (916), 18K (750), and 14K (585). Gold testing
            is an essential step in hallmark certification and quality assurance
            processes.
          </p>
        </div>

        {/* IMPORTANCE */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Importance of Gold Testing
          </h2>
          <div className="w-80 h-0.5 bg-[#0072b1] mb-6" />

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-4">
            Gold testing is not just about determining purity—it is a critical
            safeguard against fraud, misrepresentation, and financial loss. With
            the increasing circulation of adulterated or fake gold products,
            accurate testing ensures that buyers and sellers operate in a
            transparent and trustworthy environment.
          </p>

          <ul className="space-y-3 text-gray-600 text-[15px] leading-7">
            <li>• Ensures accurate karat and fineness verification</li>
            <li>• Protects consumers from counterfeit or low-purity gold</li>
            <li>• Helps jewellers maintain quality standards</li>
            <li>• Required for BIS hallmark certification</li>
            <li>• Essential for resale, valuation, and insurance purposes</li>
            <li>• Supports international trade compliance</li>
          </ul>
        </div>

        {/* METHODS */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase">
            Detailed Gold Testing Methods
          </h2>
          <div className="w-90 h-0.5 bg-[#0072b1] mb-6" />

          <p className="text-gray-600 text-[15px] leading-7 text-justify mb-6">
            Various methods are used for gold testing depending on the required
            accuracy, application, and whether the testing needs to be
            destructive or non-destructive. Below are the most widely used
            techniques:
          </p>

          <div className="space-y-5 text-gray-600 text-[15px] leading-7">
            <p>
              <strong>1. X-Ray Fluorescence (XRF) Testing:</strong> XRF is one
              of the most advanced and widely used non-destructive testing
              methods. It uses high-energy X-rays to analyze the elemental
              composition of gold. The process is quick, accurate, and does not
              damage the jewellery, making it ideal for commercial and retail
              applications.
            </p>

            <p>
              <strong>2. Fire Assay Method:</strong> Known as the most accurate
              gold testing method globally, fire assay involves melting the
              sample at high temperatures and separating gold from other metals.
              This method provides highly precise results and is commonly used
              in laboratories and refineries.
            </p>

            <p>
              <strong>3. Acid Testing:</strong> A traditional method where
              nitric acid is applied to the metal surface. The reaction helps
              determine approximate purity levels. While cost-effective, it is
              less accurate compared to modern techniques.
            </p>

            <p>
              <strong>4. Touchstone Testing:</strong> In this method, gold is
              rubbed against a touchstone and tested using acid solutions. It is
              a quick and simple method used in local markets but does not
              provide precise results.
            </p>

            <p>
              <strong>5. Electronic Gold Testing:</strong> This method measures
              electrical conductivity to estimate gold purity. It is portable
              and convenient but should be used for preliminary analysis only.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 ">
              Equipment Used in Gold Testing
            </h2>

            <div className="w-76 h-0.5 bg-[#0072b1] mb-5 rounded-full" />

            <p className="text-gray-600 text-[15px] leading-7 mb-6">
              Professional gold testing laboratories and hallmarking centers use
              advanced instruments to ensure high accuracy and reliability.
            </p>

            <ul className="space-y-3 text-gray-700 text-[15px]">
              {[
                "XRF Spectrometer – non-destructive purity analysis",
                "Fire Assay Furnace – high-temperature separation",
                "Cupellation Equipment – refining process",
                "Digital Gold Testers – quick conductivity testing",
                "Precision Weighing Balance – accurate measurement",
                "Acid Testing Kits – traditional testing",
                "Touchstone – manual verification",
                "Ultrasonic Cleaner – sample preparation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#0072b1] text-lg">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 ">
              BIS Hallmarking & HUID System
            </h2>

            <div className="w-76 h-0.5 bg-[#0072b1] mb-5 rounded-full" />

            <p className="text-gray-600 text-[15px] leading-7 mb-4">
              BIS hallmarking ensures the purity of gold jewellery in India. It
              is a government certification system that protects consumers from
              fraud.
            </p>

            <p className="text-gray-600 text-[15px] leading-7 mb-6">
              Each jewellery piece carries a unique HUID number, enabling
              traceability and verification through official platforms like the
              BIS Care App.
            </p>

            <ul className="space-y-3 text-gray-700 text-[15px]">
              {[
                "BIS Logo – official certification mark",
                "Purity Mark – e.g., 916 (22K), 750 (18K)",
                "HUID Number – unique alphanumeric code",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#0072b1] text-lg">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl  font-bold text-gray-900">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-3">
          {[
            {
              q: "What is gold testing?",
              a: "Gold testing is the process of determining the purity, composition, and authenticity of gold items such as jewellery, coins, and bullion. It helps ensure that the gold meets declared standards and protects buyers from fraud.",
            },
            {
              q: "Which is the most accurate method for gold testing?",
              a: "The most accurate method is the fire assay technique, which provides precise purity analysis. However, XRF (X-Ray Fluorescence) testing is widely used for quick and non-destructive analysis.",
            },
            {
              q: "What is XRF gold testing?",
              a: "XRF (X-Ray Fluorescence) testing is a modern, non-destructive method that uses X-rays to analyze the elemental composition of gold. It provides instant and accurate results without damaging the jewellery.",
            },
            {
              q: "What is BIS hallmarking in gold?",
              a: "BIS hallmarking is a certification system in India that ensures the purity of gold jewellery. It includes a BIS logo, purity mark (like 916 for 22K), and a unique HUID number for verification.",
            },
            {
              q: "What is HUID in gold jewellery?",
              a: "HUID (Hallmark Unique Identification) is a six-digit alphanumeric code assigned to each hallmarked jewellery item. It allows consumers to verify the authenticity of gold through the BIS Care App.",
            },
            {
              q: "Can gold testing be done without damaging jewellery?",
              a: "Yes, modern methods like XRF testing allow non-destructive testing, meaning the jewellery remains completely intact during the process.",
            },
            {
              q: "Why is gold testing important?",
              a: "Gold testing ensures accurate purity, prevents fraud, helps in proper valuation, and is essential for BIS certification and resale purposes.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 cursor-pointer"
            >
              <summary className="flex justify-between items-center font-medium text-gray-900 text-[16px]">
                {item.q}
                <span className="text-[#0072b1] text-xl group-open:rotate-45 transition">
                  +
                </span>
              </summary>

              <p className="mt-3 text-gray-600 text-[15px] leading-7">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
