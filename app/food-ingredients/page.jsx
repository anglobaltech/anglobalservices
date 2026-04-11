import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Whey Protein Concentrate 80 Instant (ENTC)",
    make: "ENTC Dairy Solutions",
    category: "Protein Supplement",
    badge: "Imported",
    badgeColor: "bg-blue-100 text-blue-800",

    image: "/food-items/entc-protein.jpeg",

    tagline: "High Purity. Consistent Performance.",

    intro:
      "Whey Protein Concentrate 80 Instant by ENTC is a high-quality protein ingredient imported from Poland, designed for industrial and nutritional applications.",

    description:
      "Whey Protein Concentrate 80% is obtained by removing non-protein components from whey through advanced physical separation techniques such as membrane filtration. The final product contains a minimum of 80% protein and offers excellent functional properties for food and nutrition applications.",

    highlights: [
      "Protein ≥ 80.18%",
      "Fat content approx. 7.38%",
      "Instantized powder form for better solubility",
      "Produced using membrane filtration process",
      "Suitable for industrial and nutritional applications",
    ],

    applications:
      "Protein supplements, sports nutrition, bakery products, dairy blends, nutritional formulations",

    tags: ["Food Grade", "Imported", "High Protein"],

    specs: [
      { label: "Form", value: "Powder" },
      { label: "Flavor", value: "Original" },
      { label: "Pack Size", value: "20 Kg Bag" },
      { label: "Origin", value: "Poland" },
      { label: "Age Group", value: "Adults" },
    ],

    trade: [
      { label: "Minimum Order", value: "100 Kg" },
      { label: "Delivery Time", value: "2 Weeks" },
      { label: "Market", value: "All India" },
    ],

  },

  {
    id: 2,
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
      "This WPC 80 Instantized protein is manufactured by Valley Queen Cheese Factory, USA. It offers consistent quality, excellent solubility, and high protein content, making it ideal for commercial and industrial use.",

    highlights: [
      "Protein ≥ 80%",
      "Instantized for better mixing",
      "Consistent batch quality",
      "Suitable for large-scale applications",
      "Imported from USA",
    ],

    applications:
      "Food processing, protein blends, beverages, bakery, nutritional products",

    tags: ["Imported", "USA Origin", "Food Grade"],

    specs: [
      { label: "Form", value: "Powder" },
      { label: "Pack Size", value: "20 Kg Bag" },
      { label: "Origin", value: "USA" },
    ],

    trade: [{ label: "Market", value: "All India" }],

  },

 {
  id: 3,
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
    "Lactose is a natural milk sugar obtained from whey and widely used across food, pharmaceutical, and nutraceutical industries. K-LAC Lactose is manufactured using advanced processing techniques to ensure high purity, uniform particle size, and excellent functional properties. Its mild sweetness and neutral taste make it an ideal ingredient for formulations requiring consistency and stability.",

  highlights: [
    "High purity lactose suitable for food and pharma applications",
    "Uniform particle size for consistent processing",
    "Neutral taste with mild sweetness",
    "Free-flowing powder for easy handling",
    "Reliable quality with international standards",
  ],

  applications:
    "Infant formula, pharmaceutical tablets, bakery products, confectionery, dairy formulations",

  tags: ["Food Grade", "Pharma Grade", "Imported"],

  specs: [
    { label: "Form", value: "Powder" },
    { label: "Pack Size", value: "25 Kg Bag" },
    { label: "Origin", value: "Israel" },
    { label: "Allergen Info", value: "Contains Milk" },
    { label: "Certification", value: "Chalav Yisrael" },
  ],

  trade: [
    { label: "Market", value: "All India" },
    { label: "Packaging", value: "25 Kg Industrial Bag" },
  ],

},

 {
  id: 4,
  name: "Micellar Casein 85",
  make: "Inleit",
  category: "Slow-Release Protein",
  badge: "Premium",
  badgeColor: "bg-purple-100 text-purple-800",
  image: "/food-items/micellar-casein.jpeg",

  tagline: "Sustained Release. Superior Nutrition.",

  intro:
    "Micellar Casein 85 is a slow-digesting milk protein designed for prolonged amino acid release and improved muscle recovery.",

  description:
    "Micellar Casein is produced through gentle filtration processes that preserve its natural protein structure. It digests slowly, making it ideal for sustained protein delivery in nutritional and functional food products.",

  highlights: [
    "Protein ≥ 85%",
    "Slow digestion for sustained release",
    "Low lactose content",
    "High satiety effect",
    "Ideal for nighttime nutrition",
  ],

  applications:
    "Protein supplements, meal replacements, high-protein snacks, dairy formulations",

  tags: ["Slow Release", "High Protein", "Premium"],

},

 {
  id: 5,
  name: "Makhana (Fox Nuts)",
  category: "Natural Food Ingredient",
  origin: "India",

  badge: "Natural",
  badgeColor: "bg-green-100 text-green-800",

  image: "/food-items/makhana.webp",

  tagline: "Natural. Nutritious. Versatile.",

  intro:
    "Premium quality Makhana (Fox Nuts) sourced from India, known for its light texture, high nutritional value, and wide applicability in both snack and processed food industries.",

  description:
    "Makhana, also known as fox nuts or lotus seeds, is a naturally derived food ingredient valued for its high protein content, low fat levels, and easy digestibility. It is carefully processed to retain its natural purity, crisp texture, and neutral taste. Suitable for both direct consumption and industrial food processing, Makhana is widely used in snacks, traditional sweets, and health-focused food products. Its clean-label profile and gluten-free nature make it highly suitable for modern nutritional applications.",

  highlights: [
    "Rich in plant-based protein",
    "Low fat and low calorie content",
    "Naturally gluten-free",
    "Easy to digest and light on the stomach",
    "Suitable for both retail and industrial applications",
  ],

  applications:
    "Healthy snacking, roasted snacks, packaged food products, traditional Indian sweets, nutritional blends, fasting foods",

  tags: ["Natural Product", "Gluten-Free", "Healthy Snack", "Food Grade"],

  specs: [
    { label: "Form", value: "Whole Seeds" },
    { label: "Origin", value: "India" },
    { label: "Shelf Life", value: "12 Months (approx.)" },
    { label: "Storage", value: "Cool & Dry Place" },
  ],

  trade: [
    { label: "Market", value: "All India" },
    { label: "Packaging", value: "Bulk & Retail Available" },
  ],

},

];
const placeholderIcons = ["🥛", "🍬", "🌾", "💪"];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-br from-[#f8fbff] via-white to-[#eef6fb] border-b border-gray-200 overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#1a6fa8]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#1a6fa8_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative z-10">
          {/* Tag */}
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#1a6fa8] uppercase tracking-widest bg-white border border-[#1a6fa8]/20 px-5 py-1.5 rounded-full shadow-sm mb-6">
            <span className="w-1 h-1 bg-[#1a6fa8] rounded-full"></span>
            Food Grade Product Range
          </p>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Premium <span className="text-[#1a6fa8]">Food Ingredients</span> &
            Natural Products
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-5xl mx-auto text-base md:text-md leading-relaxed">
            High-quality food-grade ingredients and natural products designed
            for{" "}
            <span className="text-gray-800 font-medium">
              industrial, nutritional, and commercial
            </span>{" "}
            applications, ensuring consistency, purity, and reliable
            performance.
          </p>

          {/* trust badges */}
          <div className="flex justify-center gap-6 mt-5 text-xs text-gray-500 flex-wrap">
            <span>✔ Food Grade</span>
            <span>✔ Export Quality</span>
            <span>✔ Trusted Sourcing</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
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
                    width={280}
                    height={220}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* RIGHT — DETAILS */}
              <div className="md:w-[68%] p-7 md:p-10 flex flex-col justify-center border-l border-gray-100">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
                  {product.category}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">
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
