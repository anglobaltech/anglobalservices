import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BIS Hallmarking SetUp Services | AN Global Services",
  description:
    "End-to-end BIS consultancy for Assaying & Hallmarking Centre (AHC) setup and Jeweller Registration as per latest HUID norms.",
};

export default function GoldHallmarkingPage() {
  return (
    <main className="w-full">
      <section className="relative w-full h-65 md:h-68">
        <Image
          src="/service/isi/about.jpg"
          alt="Gold Hallmarking BIS"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-3xl md:text-3xl font-bold">
              BIS HALLMARKING HUID (GOLD & SILVER) SETUP & REGISTRATION SERVICES
            </h1>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/bis-hallmarking-huid-setup.png"
                alt="Gold Hallmarking Services"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">INTRODUCTION</h2>
              <div className="w-full h-0.5 bg-gray-200 relative mb-6">
                <span className="absolute left-0 top-0 h-0.5 w-40 bg-[#0072b1]"></span>
              </div>
              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-5">
                BIS Hallmarking is a crucial requirement for ensuring purity,
                quality, and transparency in gold and silver jewellery. With the
                introduction of the mandatory 6-digit HUID (Hallmark Unique
                Identification), jewellers must strictly follow BIS norms to
                operate legally and build customer trust.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-5">
                With the mandatory implementation of the 6-digit HUID (Hallmark
                Unique Identification) system, adherence to BIS hallmarking
                requirements has become essential for jewellers. BIS hallmarking
                reflects authenticity, quality assurance, and consumer
                confidence in precious metal jewellery.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify pb-5">
                AN Global Services offer comprehensive support for the
                establishment of Silver Hallmarking HUID Centre as well as BIS
                Jeweller Registration, ensuring compliance with the latest
                standards and guidelines issued by the Bureau of Indian
                Standards.
              </p>

              <p className="text-gray-600 text-[15px] leading-6 text-justify">
                Our services cover the complete process, including facility
                planning, technical setup, documentation, coordination for
                inspections, and licensing assistance, helping your jewellery
                business remain compliant, transparent, and operationally
                efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

       <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div className="text-center p-10">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">
            Gold Hallmarking HUID Centre Setup
          </h2>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            GOLD HALLMARKING HUID PROCESS
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-95 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            In 2026, gold hallmarking in India continues with the mandatory HUID
            (Hallmark Unique Identification) system, providing a digital
            identity for every piece of gold jewelry. The HUID ensures
            transparency, traceability, and consumer protection by linking each
            hallmarked article to a central BIS database.
          </p>

          <h3 className="text-md font-semibold text-gray-900 mt-8 mb-4">
            THE GOLD HALLMARKING HUID MARKS:
          </h3>
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-4">
            A hallmarked gold article consists of exactly three marks
            laser-engraved on the item:
          </p>
          <div className="space-y-3 mb-6">
            <p className="text-gray-600 text-[15px] leading-6">
              <strong>BIS Logo:</strong> The standard triangular mark of the
              Bureau of Indian Standards.
            </p>
            <p className="text-gray-600 text-[15px] leading-6">
              <strong>Purity Grade:</strong> Indicates the gold fineness (e.g.,
              916 for 22 Karat).
            </p>
            <p className="text-gray-600 text-[15px] leading-6">
              <strong>HUID Code:</strong> A unique 6-digit alphanumeric code
              (e.g., AB1234).
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
            The HUID Process (Step-by-Step)
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                1. Registration
              </h4>
              <p className="text-gray-600 text-[15px] leading-6">
                The jeweler must be registered with BIS and possess a valid BIS
                license.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                2. Submission
              </h4>
              <p className="text-gray-600 text-[15px] leading-6">
                The jeweler submits gold articles to a BIS-recognized Assaying
                and Hallmarking Centre (AHC).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                3. Sampling & Testing
              </h4>
              <p className="text-gray-600 text-[15px] leading-6">
                The AHC takes a sample from the jewelry to test purity using
                X-ray Fluorescence (XRF) or Fire Assay methods.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                4. HUID Generation
              </h4>
              <p className="text-gray-600 text-[15px] leading-6">
                Once purity is confirmed, the AHC logs into the BIS portal and
                the system generates a unique 6-digit HUID for each piece.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                5. Laser Engraving
              </h4>
              <p className="text-gray-600 text-[15px] leading-6">
                The BIS logo, purity grade, and unique HUID are laser-marked on
                the article.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                6. Digital Record
              </h4>
              <p className="text-gray-600 text-[15px] leading-6">
                All details (jeweler name, purity, weight, date) are stored in
                the central BIS database.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purity Grades Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10 ">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            PURITY GRADES FOR GOLD
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-70 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            Under current BIS standards, gold is hallmarked in the following
            specific grades:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">999</p>
              <p className="text-gray-600 text-sm">
                24 Karat (99.9% Pure Gold)
              </p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">995</p>
              <p className="text-gray-600 text-sm">23.88 Karat</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">916</p>
              <p className="text-gray-600 text-sm">
                22 Karat (Most common for jewelry)
              </p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">875</p>
              <p className="text-gray-600 text-sm">21 Karat</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">750</p>
              <p className="text-gray-600 text-sm">18 Karat</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">585</p>
              <p className="text-gray-600 text-sm">14 Karat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Requirements – Gold Hallmarking */}
      <section className="bg-gray-50 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Mandatory Equipment for Gold Hallmarking HUID Centre Setup
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-190 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            A Gold Hallmarking HUID Centre must be equipped with BIS-compliant
            testing, marking, and assaying infrastructure. While BIS does not
            mandate specific brands, all equipment must meet the prescribed
            technical accuracy, performance, and safety requirements as per
            applicable Indian Standards.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full border-collapse text-[15px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Equipment
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Critical Technical Specifications (BIS 2026)
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    XRF Gold Testing System
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Must be equipped with a Silicon Drift Detector (SDD).
                    Capable of detecting Cadmium (Cd), Lead (Pb), Iridium (Ir),
                    and Ruthenium (Ru). Accuracy requirement: ±0.01% for
                    non-destructive purity analysis and fraud detection.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Fiber Laser Marking Machine
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Laser power range: 20W–50W; wavelength: 1064 nm; marking
                    speed: 7000–8000 mm/s. Must support automated engraving of
                    the 6-digit HUID, BIS logo, and gold purity mark.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Cupellation Furnace
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Uniform heating capability up to 1150°C. Must include
                    controlled air inlet and outlet systems to support lead
                    oxidation during the fire assay process.
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Annealing Furnace
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Uniform heating capability up to 750°C, used for softening
                    gold samples prior to rolling and further chemical analysis.
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Micro / Semi-Micro Balances
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    5-decimal (semi-micro) or 6-decimal (micro) analytical
                    balances with a minimum capacity of 500 g, used for
                    high-precision weighing of gold samples before and after
                    assaying.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Compliance Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Compliance Note:</strong> All equipment must be regularly
              calibrated and supported by valid calibration certificates
              traceable to recognized standards. Documentation must be available
              during BIS audits, surveillance inspections, and proficiency
              testing.
            </p>
          </div>
        </div>
      </section>

      {/* Billing & Revenue Model Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10 ">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            CHARGES FOR THE GOLD HALLMARKING
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-103 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            Gold hallmarking charges for Assaying and Hallmarking Centres (AHCs)
            are standardized to ensure uniformity and transparency across all
            recognized centres. Charges are applied on a per-article basis, with
            applicable minimum batch and testing fees, and all billing must be
            supported by a GST invoice with corresponding HUID details for
            traceability.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-[15px] bg-white shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Service
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Charge (per article)
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Hallmarking Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ₹45.00 + GST
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Standard rate for per piece gold items
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Minimum Batch Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ₹200.00 + GST
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Applicable when the consignment includes 1 to 4 items.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Testing Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ₹200.00
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    If a consumer (not a jeweler) wants to test their personal
                    gold
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">
              Important Billing Rule
            </h3>
            <p className="text-gray-600 text-[15px] leading-6">
              You must issue a GST Invoice for every batch. The HUIDs generated
              in that batch must be mentioned or attached to the invoice for the
              jeweler's records.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits for Jewellers Section */}
      <section className="bg-white pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Benefits of Gold Hallmarking for Jewellers
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-6">
            <span className="absolute left-0 top-0 h-0.5 w-138 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            Gold hallmarking under the HUID system provides multiple operational
            and commercial advantages to registered jewellers. It ensures
            compliance with mandatory BIS norms while strengthening customer
            trust, business credibility, and long-term sustainability in the
            regulated jewellery market.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Legal & Regulatory Compliance
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                Hallmarking ensures full compliance with BIS regulations,
                protecting jewellers from penalties, license suspension, and
                enforcement actions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Increased Customer Trust
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                BIS hallmark and HUID provide transparency in purity and
                authenticity, building confidence among customers and repeat
                buyers.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Protection Against Disputes
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                Digital HUID records act as verified proof of purity, helping
                jewellers resolve customer complaints and disputes efficiently.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Market Credibility
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                Hallmarked jewellery enhances brand reputation and allows
                jewellers to compete confidently in organized and premium
                markets.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Digital Traceability
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                Each gold article is digitally traceable through the HUID
                system, improving inventory tracking and record management.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">
                Long-Term Business Growth
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                Compliance-driven operations increase customer confidence,
                reduce legal risks, and support sustainable business expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AHC Setup Requirements Section */}
      <section className="bg-gray-50 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900">
            KEY REQUIREMENTS FOR A GOLD HALLMARKING HUID CENTRE
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-160 bg-[#0072b1]"></span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Infrastructure & Space Requirements
          </h3>
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-4">
            You need a dedicated facility, usually in a commercial or industrial
            area. Minimum 450–1,000 sq. ft. is recommended to accommodate
            different sections.
          </p>

          <h4 className="font-semibold text-gray-900 mb-3 mt-6">
            Mandatory Sections:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">
                Reception/Sample Receiving
              </h5>
              <p className="text-gray-600 text-sm">
                Secure area for accepting gold from jewelers
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">XRF Room</h5>
              <p className="text-gray-600 text-sm">
                For X-ray Fluorescence testing (preliminary purity check)
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">
                Sampling & Homogenization
              </h5>
              <p className="text-gray-600 text-sm">
                Area for drilling or scraping samples
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Assay Lab</h5>
              <p className="text-gray-600 text-sm">
                Fire assay setup including muffle furnace and chemical testing
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">
                Laser Marking Room
              </h5>
              <p className="text-gray-600 text-sm">
                Where the 6-digit HUID and BIS logo are engraved
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">
              Investment Range
            </h4>
            <p className="text-gray-600 text-[15px] leading-6">
              The initial investment typically ranges from{" "}
              <strong>₹45 Lakhs to ₹70 Lakhs</strong>, depending on the quality
              of equipment and infrastructure requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Document Checklist Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-6 ">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            MANDATORY DOCUMENT CHECKLIST
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-92 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            You will need to upload these in PDF format on the Manakonline
            portal:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Proof of Establishment
              </h3>
              <div className="space-y-2 pl-4">
                <p className="text-gray-600 text-[15px]">
                  • Proprietorship: CA Certificate/GST Registration
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Partnership: Registered Partnership Deed
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Company: Certificate of Incorporation & MoA/AoA
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Premises Ownership
              </h3>
              <p className="text-gray-600 text-[15px] pl-4">
                Registered Lease Deed or Sale Deed (must show the area is at
                least 45–1000 sq. ft.)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Identity Proof
              </h3>
              <p className="text-gray-600 text-[15px] pl-4">
                Aadhaar/PAN of the authorized signatory
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Technical Documents
              </h3>
              <div className="space-y-2 pl-4">
                <p className="text-gray-600 text-[15px]">
                  • Quality Manual: Based on the BIS Generic Manual
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Staff Competency: Degree certificates of the Assay-in-Charge
                  (Chemistry/Metallurgy) and training certificates
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Equipment List: Calibration certificates for the Analytical
                  Balance (0.01mg) and XRF machine
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Environmental/Safety
              </h3>
              <div className="space-y-2 pl-4">
                <p className="text-gray-600 text-[15px]">
                  • State Pollution Control Board (SPCB) "Consent to Operate"
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Fire Safety NOC and Local Trade License
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silver HUID Process Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
         <div className="text-center p-10">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide">
            Silver Hallmarking HUID Centre Setup
          </h2>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Silver Hallmarking HUID Process
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-5">
            <span className="absolute left-0 top-0 h-0.5 w-100 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-5">
            In 2026, silver hallmarking in India follows the same structured
            framework as gold hallmarking. The Hallmark Unique Identification
            (HUID) provides a secure digital identity for every hallmarked
            silver article. From September 1, 2025, HUID is mandatory for all
            silver articles covered under IS 2112:2025.
          </p>

          {/* Visible Marks */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">
              THE SILVER HALLMARKING HUID MARKS:
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border p-4 rounded-md">
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  BIS Logo
                </p>
                <p className="text-gray-600 text-sm">
                  Official triangular certification mark
                </p>
              </div>

              <div className="bg-white border p-4 rounded-md">
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  Purity Grade
                </p>
                <p className="text-gray-600 text-sm">
                  Indicates fineness such as 925 or 999
                </p>
              </div>

              <div className="bg-white border p-4 rounded-md">
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  HUID Code
                </p>
                <p className="text-gray-600 text-sm">
                  Unique 6-digit alphanumeric ID
                </p>
              </div>
            </div>
          </div>

          {/* Step Process */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">
              Step-by-Step HUID Workflow
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ["1. Registration", "Jeweller must be registered with BIS"],
                ["2. Submission", "Articles submitted to a recognized AHC"],
                [
                  "3. Sampling & Testing",
                  "Purity verified using XRF or Fire Assay",
                ],
                ["4. HUID Generation", "Unique HUID generated via BIS portal"],
                ["5. Laser Marking", "BIS logo, purity & HUID engraved"],
                ["6. Digital Record", "Details stored in BIS central database"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-white border border-gray-200 p-4 rounded-lg"
                >
                  <p className="font-semibold text-gray-900 text-sm mb-1">
                    {title}
                  </p>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
          Purity Grades for Silver
        </h2>
        <div className="w-full h-0.5 bg-gray-200 relative mb-5">
          <span className="absolute left-0 top-0 h-0.5 w-75 bg-[#0072b1]" />
        </div>

        <p className="text-gray-600 text-[16px] mb-5">
          Silver is hallmarked in the following officially notified purity
          grades:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["999", "Fine Silver"],
            ["990", ""],
            ["970", ""],
            ["958", "New Grade"],
            ["925", "Sterling Silver"],
            ["835", ""],
            ["800", "Utensils & Heavy Articles"],
          ].map(([grade, note]) => (
            <div
              key={grade}
              className="border border-gray-200 rounded-lg p-4 bg-white"
            >
              <p className="font-semibold text-gray-900">{grade}</p>
              {note && <p className="text-gray-500 text-sm">{note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Requirements Section */}
      <section className="bg-gray-50 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
            Mandatory Equipment for Silver Hallmarking HUID Centre Setup
          </h2>

          <div className="w-full h-0.5 bg-gray-200 relative mb-5">
            <span className="absolute left-0 top-0 h-0.5 w-195 bg-[#0072b1]" />
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            BIS does not mandate the use of any specific brand or manufacturer.
            However, all equipment installed in an Assaying and Hallmarking
            Centre (AHC) must meet the prescribed technical specifications and
            performance requirements defined under applicable Indian Standards.
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Equipment
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Minimum Technical Requirement
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    XRF Testing System
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Capable of non-destructive elemental analysis of silver and
                    common alloying metals for preliminary purity assessment
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Analytical Balance
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Minimum readability of 0.01 mg with valid calibration and
                    traceable standards
                  </td>
                </tr>

                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Laser Marking Machine
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Compatible with BIS HUID system for engraving logo, purity
                    grade, and unique identification code
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Furnace & Assay Lab Setup
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    High-temperature furnace suitable for fire assay processes
                    along with chemical testing infrastructure and ventilation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Compliance Note */}
          <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-gray-600 text-[14px] leading-6">
              <strong>Compliance Note:</strong> All equipment must be properly
              calibrated, maintained, and documented. Calibration certificates
              must be available during BIS audits and surveillance inspections.
            </p>
          </div>
        </div>
      </section>

      {/* Billing & Revenue Model Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10 ">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            CHARGES FOR THE SILVER HALLMARKING
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-110 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-8">
            Silver hallmarking charges are standardized to ensure transparency
            and uniformity across all recognized hallmarking centres. As per the
            applicable norms, charges are levied on a per-article basis, with
            additional minimum batch or testing fees applicable where required,
            and all transactions are subject to GST with mandatory invoicing and
            HUID reference.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white text-[15px] shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Service
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Charge (per article)
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Hallmarking Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ₹35.00 + GST
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Standard rate for per piece silver items
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Minimum Batch Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ₹150.00 + GST
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    Applicable when the consignment includes 1 to 4 items.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-900">
                    Testing Fee
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    ₹150.00
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-600">
                    If a consumer (not a jeweler) wants to test their personal
                    silver
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-3">
              Important Billing Rule
            </h3>
            <p className="text-gray-600 text-[15px] leading-6">
              You must issue a GST Invoice for every batch. The HUIDs generated
              in that batch must be mentioned or attached to the invoice for the
              jeweler's records.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits for Jewellers Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            BENEFITS OF SILVER HALLMARKING FOR JEWELLERS
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-135 bg-[#0072b1]"></span>
          </div>

          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-10">
            Silver hallmarking is not just a regulatory requirement but a strong
            business advantage for jewellers. A hallmarked silver product builds
            consumer confidence, ensures legal compliance, and improves market
            acceptance across retail, wholesale, and institutional channels.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Enhanced Customer Trust
              </h3>
              <p className="text-gray-600 text-[14px] leading-6">
                BIS hallmarking assures buyers of genuine silver purity,
                reducing doubts and increasing repeat purchases through verified
                quality.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Legal & Regulatory Compliance
              </h3>
              <p className="text-gray-600 text-[14px] leading-6">
                Hallmarked silver ensures compliance with BIS norms, protecting
                jewellers from penalties, seizures, and regulatory action.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Higher Market Acceptance
              </h3>
              <p className="text-gray-600 text-[14px] leading-6">
                Retail chains, corporate buyers, and institutional clients
                prefer hallmarked silver due to traceability and
                standardization.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Reduced Disputes & Returns
              </h3>
              <p className="text-gray-600 text-[14px] leading-6">
                The HUID system provides verifiable proof of purity, minimizing
                customer complaints, returns, and post-sale disputes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Improved Brand Reputation
              </h3>
              <p className="text-gray-600 text-[14px] leading-6">
                Offering hallmarked silver positions jewellers as ethical and
                quality-focused businesses, strengthening brand credibility.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Access to Wider Sales Channels
              </h3>
              <p className="text-gray-600 text-[14px] leading-6">
                Hallmarking enables participation in exhibitions, exports,
                online marketplaces, and bulk institutional orders requiring
                certified silver.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 text-[15px] leading-6 text-justify">
              By adopting BIS silver hallmarking and the HUID system, jewellers
              not only meet statutory obligations but also gain a competitive
              edge in a market increasingly driven by transparency and consumer
              awareness.
            </p>
          </div>
        </div>
      </section>

      {/* AHC Setup Requirements Section */}
      <section className="bg-gray-50 pb-16 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold text-gray-900">
            KEY REQUIREMENTS FOR A SILVER HALLMARKING HUID CENTRE
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-163 bg-[#0072b1]"></span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Infrastructure & Space Requirements
          </h3>
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-4">
            You need a dedicated facility, usually in a commercial or industrial
            area. Minimum 450–1,000 sq. ft. is recommended to accommodate
            different sections.
          </p>

          <h4 className="font-semibold text-gray-900 mb-3 mt-6">
            Mandatory Sections:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">
                Reception/Sample Receiving
              </h5>
              <p className="text-gray-600 text-sm">
                Secure area for accepting silver from jewelers
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">XRF Room</h5>
              <p className="text-gray-600 text-sm">
                For X-ray Fluorescence testing (preliminary purity check)
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">
                Sampling & Homogenization
              </h5>
              <p className="text-gray-600 text-sm">
                Area for drilling or scraping samples
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Assay Lab</h5>
              <p className="text-gray-600 text-sm">
                Fire assay setup including muffle furnace and chemical testing
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">
                Laser Marking Room
              </h5>
              <p className="text-gray-600 text-sm">
                Where the 6-digit HUID and BIS logo are engraved
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">
              Investment Range
            </h4>
            <p className="text-gray-600 text-[15px] leading-6">
              The initial investment typically ranges from{" "}
              <strong>₹35 Lakhs to ₹45 Lakhs</strong>, depending on the quality
              of equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Document Checklist Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            MANDATORY DOCUMENT CHECKLIST
          </h2>
          <div className="w-full h-0.5 bg-gray-200 relative mb-8">
            <span className="absolute left-0 top-0 h-0.5 w-95 bg-[#0072b1]"></span>
          </div>
          <p className="text-gray-600 text-[15px] leading-6 text-justify mb-6">
            You will need to upload these in PDF format on the Manakonline
            portal:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Proof of Establishment
              </h3>
              <div className="space-y-2 pl-4">
                <p className="text-gray-600 text-[15px]">
                  • Proprietorship: CA Certificate/GST Registration
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Partnership: Registered Partnership Deed
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Company: Certificate of Incorporation & MoA/AoA
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Premises Ownership
              </h3>
              <p className="text-gray-600 text-[15px] pl-4">
                Registered Lease Deed or Sale Deed (must show the area is at
                least 450–1000 sq. ft.)
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Identity Proof
              </h3>
              <p className="text-gray-600 text-[15px] pl-4">
                Aadhaar/PAN of the authorized signatory
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Technical Documents
              </h3>
              <div className="space-y-2 pl-4">
                <p className="text-gray-600 text-[15px]">
                  • Quality Manual: Based on the BIS Generic Manual
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Staff Competency: Degree certificates of the Assay-in-Charge
                  (Chemistry/Metallurgy) and training certificates
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Equipment List: Calibration certificates for the Analytical
                  Balance (0.01mg) and XRF machine
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Environmental/Safety
              </h3>
              <div className="space-y-2 pl-4">
                <p className="text-gray-600 text-[15px]">
                  • State Pollution Control Board (SPCB) "Consent to Operate"
                </p>
                <p className="text-gray-600 text-[15px]">
                  • Fire Safety NOC and Local Trade License
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIS Hallmarking CTA Section */}
      <section className="relative w-full py-20 bg-gradient-to-r from-[#0b1220] via-[#0f172a] to-[#0b1220]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-3xl font-bold text-white mb-4">
            To Get Your BIS Hallmarking HUID Setup for Gold & Silver?
          </h2>

          <p className="text-gray-300 text-[15px] md:text-[15px] max-w-3xl mx-auto mb-8 leading-6">
            Get expert assistance for BIS registration, HUID compliance, AHC
            setup, documentation, and end-to-end support for gold and silver
            hallmarking. Navigate the BIS hallmarking process with confidence,
            accuracy, and speed.
          </p>

          <div className="flex justify-center">
            <a
              href="/contact-us"
              className="relative inline-flex items-center justify-center rounded-xl 
              bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#1d4ed8]
              px-9 py-3 text-white font-semibold text-[15px]
              shadow-md shadow-blue-900/30
              transition-all duration-300
              hover:scale-[1.03]
             
              hover:from-[#1e40af] hover:via-[#2563eb] hover:to-[#1e3a8a]
              "
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
