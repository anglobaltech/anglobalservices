import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Makhana",
    category: "Natural Food Ingredient",
    origin: "India",

    badge: "Natural",
    badgeColor: "bg-green-100 text-green-800",

    image: "/food-items/makhana.webp",

    tagline: "Natural. Nutritious. Versatile.",

    intro:
      "Premium quality Makhana sourced from India, suitable for both direct consumption and industrial food processing applications.",

    description:
      "Makhana (fox nuts) is a natural plant-based ingredient widely used in both traditional and modern food processing. Known for its light texture, high nutritional value, and clean-label appeal, it serves as a versatile base for snacks, roasted products, powdered blends, and health-focused formulations. It can be used in raw, roasted, or processed forms depending on application requirements.",

    highlights: [
      "Rich in plant-based protein and minerals",
      "Low fat and low calorie content",
      "Naturally gluten-free and clean-label",
      "Easy to process into roasted or powdered forms",
      "Suitable for both retail and industrial applications",
    ],

    applications:
      "Roasted snacks, flavored makhana products, traditional sweets, health foods, nutritional blends, fasting foods",

    tags: ["Natural Product", "Gluten-Free", "Healthy Snack", "Food Grade"],

    specs: [
      { label: "Form", value: "Whole / Processed (Roasted)" },
      { label: "Origin", value: "India" },
      { label: "Storage", value: "Cool & Dry Place" },
    ],

    trade: [
      { label: "Market", value: "All India" },
      { label: "Packaging", value: "Bulk & Custom Packaging Available" },
      { label: "Minimum Order", value: "100 Kg" },
    ],
  },

  {
    id: 2,
    name: "Whey Protein Concentrate 80 Instant (ENTC)",
    make: "ENTC Dairy Solutions",
    category: "Protein Supplement",
    badge: "Imported",
    badgeColor: "bg-blue-100 text-blue-800",

    image: "/food-items/entc-proteinn.jpeg",

    tagline: "High Purity. Consistent Performance.",

    intro:
      "Whey Protein Concentrate 80 Instant by ENTC is a high-quality protein ingredient imported from Poland, designed for industrial and nutritional applications.",

    description:
      "Whey Protein Concentrate 80% is obtained by removing non-protein components from whey through advanced membrane filtration. The product is instantized for superior solubility and delivers consistent performance across food, nutrition, and industrial applications.",

    highlights: [
      "Protein ≥ 80.18% (Dry Matter)",
      "Fat content approx. 7.38%",
      "Excellent solubility (99.90%)",
      "Instantized powder for easy mixing",
      "Low microbial count & high safety standards",
    ],

    applications:
      "Protein supplements, sports nutrition, bakery products, dairy blends, nutritional formulations",

    tags: ["Food Grade", "Imported", "High Protein"],

    specs: [
      { label: "Form", value: "Powder" },
      { label: "Flavor", value: "Original" },
      { label: "Pack Size", value: "20 Kg Bag" },
      { label: "Packaging", value: "White paper bag with poly liner" },
      { label: "Origin", value: "Poland" },
      { label: "Solubility", value: "99.90%" },
      { label: "Scorched Particles", value: "Disc A" },
      { label: "Age Group", value: "Adults" },
    ],

    trade: [
      { label: "Minimum Order", value: "100 Kg" },
      { label: "Market", value: "All India" },
    ],

    manufacturer: {
      name: "ENTC Dairy Solutions Sp. z o.o.",
    },

    consignee: {
      name: "CHEMSTACK PRIVATE LIMITED",
      address:
        "8th Floor, R City Office Awfis, Lal Bahadur Shastri Marg, Navi Mumbai Municipal Corporation (Thane Zone-2), Maharashtra - 400086, India",
    },
  },

  {
    id: 3,
    name: "Whey Protein Concentrate 80 Instant (Valley Queen)",
    make: "Valley Queen",
    category: "Protein Supplement",
    badge: "USA Import",
    badgeColor: "bg-green-100 text-green-800",

    image: "/food-items/whey-protein.jpeg",

    tagline: "Reliable Quality. Global Standard.",

    intro:
      "Whey Protein Concentrate 80% by Valley Queen is a premium dairy protein imported from the USA, widely used in food and nutritional formulations.",

    description:
      "This WPC 80 Instantized protein is manufactured by Valley Queen, USA. It delivers consistent batch quality, excellent solubility, and meets global microbiological and compositional standards for industrial and nutritional applications.",

    highlights: [
      "Protein ≥ 80%",
      "Instantized for superior solubility",
      "Low microbial count & safe for food use",
      "Moisture ≤ 6.5% and Fat ≤ 8.0%",
      "Imported from USA with consistent quality",
    ],

    applications:
      "Food processing, protein blends, beverages, bakery, nutritional products",

    tags: ["Imported", "USA Origin", "Food Grade"],

    specs: [
      { label: "Form", value: "Powder" },
      { label: "Pack Size", value: "20 Kg Bag" },
      { label: "Origin", value: "USA" },
      { label: "Protein", value: "≥ 80%" },
      { label: "Moisture", value: "≤ 6.5%" },
      { label: "Fat", value: "≤ 8.0%" },
      { label: "Scorched Particles", value: "A / B" },
    ],

    qualityStandards: [
      { label: "Standard Plate Count", value: "≤ 20,000 cfu/g" },
      { label: "Coliform", value: "< 10 cfu/g" },
      { label: "E. coli", value: "< 1 cfu/g" },
      { label: "Yeast & Mold", value: "≤ 50 cfu/g" },
      { label: "Salmonella", value: "Negative / 375g" },
    ],

    manufacturer: {
      name: "Valley Queen Cheese Factory",
    },

    trade: [
      { label: "Market", value: "All India" },
      { label: "Minimum Order", value: "100 Kg" },
    ],
  },

  {
    id: 4,
    name: "Lactose (K-LAC)",
    make: "Ba'emek Advanced Technologies Ltd.",
    category: "Dairy Ingredient",
    badge: "Imported",
    badgeColor: "bg-green-100 text-green-800",

    image: "/food-items/lactose.jpeg",

    tagline: "High Purity. Reliable Performance.",

    intro:
      "K-LAC Lactose by Ba'emek is a high-quality dairy ingredient imported from Israel, widely used in food and pharmaceutical applications for its purity and consistency.",

    description:
      "K-LAC 2040 Lactose (200 Mesh) is a refined milk sugar produced from whey using advanced processing techniques. It offers high purity, uniform particle size, and excellent flowability, making it ideal for food, nutraceutical, and pharmaceutical applications.",

    highlights: [
      "Lactose ≥ 99.3% purity",
      "Fine particle size (200 mesh) for uniform blending",
      "Low moisture content for better stability",
      "Free-flowing powder with consistent bulk density",
      "Suitable for food and pharmaceutical applications",
    ],

    applications:
      "Infant formula, pharmaceutical tablets, bakery products, confectionery, dairy formulations",

    tags: ["Food Grade", "Pharma Grade", "Imported"],

    specs: [
      { label: "Form", value: "Powder" },
      { label: "Pack Size", value: "25 Kg Bag" },
      { label: "Origin", value: "Israel" },
      { label: "Particle Size", value: "200 Mesh" },
      { label: "Bulk Density", value: "0.74 g/ml" },
      { label: "pH (5% Solution)", value: "5.85" },
      { label: "Allergen Info", value: "Contains Milk" },
    ],

    qualityStandards: [
      { label: "Total Plate Count", value: "<10 CFU/g" },
      { label: "Yeast", value: "<10/g" },
      { label: "Mould", value: "<10/g" },
      { label: "Coliform", value: "<10 CFU/g" },
      { label: "E. coli", value: "Negative" },
      { label: "Salmonella", value: "Negative /25g" },
      { label: "Listeria monocytogenes", value: "Negative /25g" },
      { label: "Enterobacteriaceae", value: "Negative" },
    ],

    trade: [
      { label: "Market", value: "All India" },
      { label: "Minimum Order", value: "100 Kg" },
    ],
  },

  {
    id: 5,
    name: "Micellar Casein 85",
    make: "Inleit",
    category: "Slow-Release Protein",
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-800",

    image: "/food-items/macellar-casein.jpeg",

    tagline: "Sustained Release. Superior Nutrition.",

    intro:
      "InLeit MC85 Micellar Casein is a high-quality slow-digesting milk protein imported from Spain, designed for prolonged amino acid release and superior nutritional performance.",

    description:
      "Micellar Casein 85 is produced in Spain using gentle filtration processes that preserve its native protein structure. It offers high protein content, excellent solubility, and low fat levels, making it ideal for sustained protein delivery in nutritional and functional food applications.",
    highlights: [
      "Protein ≥ 86% (Dry Matter)",
      "Slow digestion for sustained amino acid release",
      "Low fat content (≤ 2.5%)",
      "Excellent solubility and dispersibility",
      "High microbiological safety standards",
    ],

    applications:
      "Protein supplements, meal replacements, high-protein snacks, dairy formulations",

    tags: ["Slow Release", "High Protein", "Premium"],

    specs: [
      { label: "Form", value: "Powder" },
      { label: "Pack Size", value: "20 Kg Bag" },
      { label: "Protein (DM)", value: "86.34%" },
      { label: "Protein (As Is)", value: "81.60%" },
      { label: "Lactose", value: "5.43%" },
      { label: "Fat", value: "0.77%" },
      { label: "Moisture", value: "5.46%" },
    ],

    qualityStandards: [
      { label: "Total Plate Count", value: "<10 cfu/g" },
      { label: "Enterobacteriaceae", value: "<10 cfu/g" },
      { label: "Yeast & Mould", value: "<10 cfu/g" },
      { label: "Staphylococcus aureus", value: "<10 cfu/g" },
      { label: "Bacillus cereus", value: "<10 cfu/g" },
      { label: "Clostridium", value: "<1 cfu/g" },
      { label: "Salmonella", value: "Not Detected /25g" },
      { label: "Listeria monocytogenes", value: "Not Detected /25g" },
    ],
    trade: [
      { label: "Market", value: "All India" },
      { label: "Minimum Order", value: "100 Kg" },
    ],
  },

  {
    id: 6,
    name: "Sunpro Instant Protein Concentrate Instant WPC 80",
    make: "Saputo Dairy Australia Pty Ltd",
    category: "Protein Supplement",
    badge: "Imported",
    badgeColor: "bg-blue-100 text-blue-800",

    image: "/food-items/sunpro-whey-protein-concentrate-wpc-80.webp",

    tagline: "Premium Australian Whey Protein.",

    intro:
      "Sunpro Instant Protein Concentrate WPC 80 by Saputo Dairy Australia is a premium dairy protein imported from Australia, available for immediate supply.",

    description:
      "This WPC 80 Instantized protein is manufactured by Saputo Dairy Australia. It delivers consistent batch quality and meets global microbiological and compositional standards for industrial and nutritional applications. Previous batch COA is available for quality reference. The latest batch COA, batch details, and packing photos will be shared before dispatch.",

    highlights: [
      "Protein (Dry Basis) ≥ 80.0%",
      "Fat ≤ 8.0% and Moisture ≤ 6.0%",
      "Imported from Australia with consistent quality",
    ],

    applications:
      "Food processing, protein blends, beverages, bakery, nutritional products",

    tags: ["Imported", "Australia Origin", "Food Grade"],

    specs: [
      { label: "Form", value: "Powder" },
      { label: "Origin", value: "Australia" },
      { label: "Protein (Dry Basis)", value: "≥ 80.0%" },
      { label: "Fat", value: "≤ 8.0%" },
      { label: "Moisture", value: "≤ 6.0%" },
    ],

    manufacturer: {
      name: "Saputo Dairy Australia Pty Ltd",
    },

    trade: [
      { label: "Minimum Order", value: "100 Kg" },
      { label: "Market", value: "All India" },
    ],
  },

  {
    id: 7,
    name: "Mullins Whey Lactose 200 Mesh",
    make: "Mullins Whey Inc.",
    category: "Dairy Ingredient",
    badge: "USA Import",
    badgeColor: "bg-green-100 text-green-800",

    image: "/food-items/mullins-whey-lactose.webp",

    tagline: "High Purity. Reliable Performance.",

    intro:
      "Mullins Whey Lactose 200 Mesh is a high-quality dairy ingredient imported from the USA, widely used in food and pharmaceutical applications.",

    description:
      "This refined milk sugar offers high purity (Lactose ≥ 99.40%), uniform particle size (200 mesh), and excellent flowability, making it ideal for food, nutraceutical, and pharmaceutical applications. Manufactured by Mullins Whey Inc., USA. Previous batch COA is available for quality reference.",

    highlights: [
      "Lactose ≥ 99.40% purity",
      "Fine particle size (200 mesh)",
      "Imported from USA with reliable consistency",
    ],

    applications:
      "Infant formula, pharmaceutical tablets, bakery products, confectionery, dairy formulations",

    tags: ["Food Grade", "Pharma Grade", "Imported"],

    specs: [
      { label: "Form", value: "Powder" },
      { label: "Origin", value: "USA" },
      { label: "Particle Size", value: "200 Mesh" },
      { label: "Lactose", value: "≥ 99.40%" },
      { label: "pH", value: "4.5 - 7.0" },
    ],

    qualityStandards: [
      { label: "Total Moisture", value: "4.5% - 5.5%" },
      { label: "Ash", value: "0.2% max" },
      { label: "Protein Nx6.38 As Is", value: "0.2% max" },
    ],

    manufacturer: {
      name: "Mullins Whey Inc., USA",
    },

    trade: [
      { label: "Minimum Order", value: "100 Kg" },
      { label: "Market", value: "All India" },
    ],
  },

  {
    id: 8,
    name: "L-Carnitine Base",
    make: "Hubei Grand Life Science & Technology Co., Ltd.",
    category: "Nutraceutical Ingredient",
    badge: "Imported",
    badgeColor: "bg-purple-100 text-purple-800",

    image: "/food-items/l-carnitine-base.webp",

    tagline: "Fat Metabolism & Energy Support.",

    intro:
      "L-carnitine base is a bioactive form of L-carnitine widely used in nutraceutical and health supplement formulations for fat metabolism, energy production, and performance support.",

    description:
      "At YNP Ingredients Pvt. Ltd., a trusted B2B supplier and importer of L-carnitine base in India, the product is sourced from certified manufacturers in China to ensure high purity, consistent quality, and reliable supply. It is supplied in bulk with a standard 25 kg pack size. Previous batch COA is available for quality reference.",

    highlights: [
      "Assay: 97.0% ~ 103.0%",
      "Supports fat metabolism and energy production",
      "Enhances exercise performance and recovery",
    ],

    applications:
      "L-carnitine powder supplements, sports nutrition products, fat metabolism blends, nutraceutical formulations",

    tags: ["Nutraceutical", "Sports Nutrition", "Imported"],

    specs: [
      { label: "Form", value: "White Crystalline Powder" },
      { label: "Pack Size", value: "25 Kg Bulk" },
      { label: "Origin", value: "China" },
      { label: "Assay", value: "97.0% ~ 103.0%" },
      { label: "pH", value: "5.5 - 9.5" },
    ],

    qualityStandards: [
      { label: "Water", value: "≤ 4.0%" },
      { label: "Residue on Ignition", value: "≤ 0.5%" },
      { label: "Heavy Metals", value: "≤ 20ppm" },
    ],

    manufacturer: {
      name: "Hubei Grand Life Science & Technology Co., Ltd.",
    },

    trade: [
      { label: "Minimum Order", value: "100 Kg" },
      { label: "Market", value: "All India" },
    ],
  },

  {
    id: 9,
    name: "L-Glutamine",
    make: "Xinjiang Fufeng Biotechnologies Co., Ltd.",
    category: "Amino Acid",
    badge: "Imported",
    badgeColor: "bg-orange-100 text-orange-800",

    image: "/food-items/l-glutamine.webp",

    tagline: "Muscle Recovery & Gut Health.",

    intro:
      "L-glutamine is a conditionally essential amino acid widely used in nutraceutical and sports nutrition formulations for muscle recovery, gut health, and immune support.",

    description:
      "At YNP Ingredients Pvt. Ltd., a trusted B2B supplier and importer of L-glutamine in India, the product is sourced from certified manufacturers in China to ensure high purity, consistent quality, and reliable supply. Supplied in drum packaging with complete FSSAI-compliant documentation.",

    highlights: [
      "Assay: 98.5% - 101.5%",
      "Supports muscle recovery after intense exercise",
      "Aids in gut health and digestive support",
      "Contributes to immune system function",
      "High purity L-glutamine for consistent formulation results",
    ],

    applications:
      "L-glutamine powder supplements, recovery and wellness blends, sports nutrition products, gut health formulations, nutraceutical formulations",

    tags: ["Nutraceutical", "Amino Acid", "Imported"],

    specs: [
      { label: "Form", value: "White Crystals / Crystalline Powder" },
      { label: "Pack Size", value: "25 Kg Bulk" },
      { label: "Origin", value: "China" },
      { label: "Assay", value: "98.5% - 101.5%" },
      { label: "Specific Rotation", value: "+6.3° ~ +7.3°" },
    ],

    qualityStandards: [
      { label: "Loss on Drying", value: "≤ 0.3%" },
      { label: "Residue on Ignition", value: "≤ 0.3%" },
      { label: "Heavy Metals", value: "≤ 15 mg/kg" },
    ],

    manufacturer: {
      name: "Xinjiang Fufeng Biotechnologies Co., Ltd.",
    },

    trade: [
      { label: "Market", value: "All India" },
      { label: "Packaging", value: "Bulk 25 Kg" },
      { label: "Minimum Order", value: "100 Kg" },
    ],
  },
];

export default function FoodIngredientsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-[#e6f0ff] via-[#f5f9ff] to-[#e6f0ff] overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#1a6fa8]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#1a6fa8_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative z-10">
          {/* Tag */}
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#1a6fa8] uppercase tracking-widest bg-white border border-[#1a6fa8]/20 px-5 py-1.5 rounded-full shadow-sm mb-6">
            <span className="w-1 h-1 bg-[#1a6fa8] rounded-full"></span>
            Food Ingredients & Bulk Supply
          </p>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Bulk <span className="text-[#1a6fa8]">Food Ingredients</span> &
            Nutritional Solutions
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-5xl mx-auto text-base md:text-md leading-relaxed mt-3">
            Supplying high-quality dairy proteins, food ingredients, and natural
            products for{" "}
            <span className="text-gray-800 font-medium">
              manufacturers, food processors, and nutrition brands
            </span>
            . Our solutions ensure consistent quality, reliable sourcing, and
            performance for large-scale applications.
          </p>

          {/* trust badges */}
          <div className="flex justify-center gap-6 mt-6 text-xs text-gray-500 flex-wrap">
            <span>✔ Food Grade Certified</span>
            <span>✔ Export Quality Standards</span>
            <span>✔ Trusted Global Sourcing</span>
            <span>✔ Bulk Supply Capability</span>
          </div>
          <div className="mt-5 flex justify-center">
            <span className="text-xs bg-green-50 text-green-800 border border-green-200 px-4 py-1.5 rounded-full font-medium shadow-sm">
              FSSAI License No • 12726999000019
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 space-y-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row">
              {/* LEFT — IMAGE */}
              <div
                className={`md:w-[32%] relative bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                style={{ minHeight: "320px" }}
              >
                {/* glass overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

                <div className="relative w-full h-full flex items-center justify-center z-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={240}
                    height={180}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* RIGHT — DETAILS */}
              <div className="md:w-[68%] p-7 md:p-10 flex flex-col justify-center border-l border-gray-100">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                  {product.category}
                </p>

                <h2 className=" text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-1">
                  {product.name}
                </h2>

                <p className="text-sm font-semibold text-[#1a6fa8] mb-4">
                  {product.tagline}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-2xl">
                  {product.intro}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-4 mt-2">
                  <Link href="/contact-us">
                    <button className="px-6 py-2.5 bg-[#1a6fa8] cursor-pointer hover:bg-[#155d8c] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                      Request Bulk Pricing
                    </button>
                  </Link>

                  {product.make && <span>Make: {product.make}</span>}

                  {product.origin && <span>Origin: {product.origin}</span>}
                </div>
              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="border-t border-gray-100 px-7 md:px-10 py-10 bg-gray-50/40">
              {/* ABOUT */}
              <div className="mb-10">
                <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  About This Product
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-7xl">
                  {product.description}
                </p>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT SIDE */}
                <div className="flex flex-col gap-8">
                  {/* HIGHLIGHTS */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
                      Key Highlights
                    </h3>

                    <ul className="space-y-3">
                      {product.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-700 bg-white rounded-lg px-3 py-2 shadow-sm"
                        >
                          <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#eaf4fb] flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-[#1a6fa8]"
                              fill="none"
                              viewBox="0 0 10 10"
                            >
                              <path
                                d="M2 5l2.5 2.5L8 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SPECIFICATIONS */}
                  {product.specs && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                        Specifications
                      </h3>

                      <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm space-y-2 text-sm">
                        {product.specs.map((item, i) => (
                          <div key={i} className="flex justify-between">
                            <span className="text-gray-500">{item.label}</span>
                            <span className="font-medium text-gray-800">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6">
                  {/* APPLICATIONS */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                      Applications
                    </h3>

                    <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {product.applications}
                      </p>
                    </div>
                  </div>

                  {/* TRADE INFO */}
                  {product.trade && (
                    <div>
                      <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                        Trade Information
                      </h3>

                      <div className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm space-y-2 text-sm">
                        {product.trade.map((item, i) => (
                          <div key={i} className="flex justify-between">
                            <span className="text-gray-500">{item.label}</span>
                            <span className="font-medium text-gray-800">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAGS */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                      Certifications & Grade
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 bg-[#eaf4fb] text-[#1a6fa8] rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
