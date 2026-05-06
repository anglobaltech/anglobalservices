// app/isi-products/[slug]/page.jsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { db } from "@/src/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

// 👉 Forces Next.js to ALWAYS fetch live data from the database
export const dynamic = "force-dynamic";

// --- SMART TEXT PARSER FUNCTION ---
// Converts **text** to bold and [text](url) to blue hoverable links as HTML strings
// --- SMART TEXT PARSER FUNCTION ---
const parseSmartTextToHTML = (text) => {
  if (!text || typeof text !== "string") return "";
  
  // 1. Convert Links: [text](url) -> Blue, no underline, underline on hover, OPENS IN SAME TAB
  let htmlText = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g, 
    '<a href="$2" class="text-[#0072b1] font-semibold no-underline hover:underline hover:text-[#005f96] transition-all cursor-pointer">$1</a>'
  );
  
  // 2. Convert Bold: **text** -> Bold
  htmlText = htmlText.replace(
    /\*\*([^*]+)\*\*/g, 
    '<strong class="font-bold text-gray-900">$1</strong>'
  );
  
  return htmlText;
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  const productsRef = collection(db, "isi_products");
  const q = query(productsRef, where("slug", "==", currentSlug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return { title: "Product Not Found" };

  const product = querySnapshot.docs[0].data();
  const baseUrl = "https://www.anglobalservices.com";

  return {
    title: product.seo?.title || `${product.title} | AN Global Services`,
    description: product.seo?.description || `Get fast and reliable BIS ISI Certification for ${product.title}. Expert consulting and hassle-free compliance.`,
    alternates: {
      canonical: `${baseUrl}/isi-products/${currentSlug}`,
    },
    openGraph: {
      title: product.seo?.title || product.title,
      description: product.seo?.description || `Get BIS ISI Certification for ${product.title}.`,
      url: `${baseUrl}/isi-products/${currentSlug}`,
      images: [
        {
          url: product.hero?.imageUrl || `${baseUrl}/home-about.jpg`, 
          width: 1200,
          height: 630,
          alt: product.seo?.mainImageAlt || product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo?.title || product.title,
      description: product.seo?.description,
      images: [product.hero?.imageUrl || `${baseUrl}/home-about.jpg`], 
    }
  };
}

export default async function DynamicProductPage({ params }) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  const productsRef = collection(db, "isi_products");
  const q = query(productsRef, where("slug", "==", currentSlug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return notFound();
  }

  const product = querySnapshot.docs[0].data();

  const safeHeroImage = (typeof product.hero?.imageUrl === "string" && product.hero.imageUrl.trim() !== "") 
    ? product.hero.imageUrl 
    : "/home-about.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": product.title,
    "description": product.seo?.description || `Consulting and certification services for ${product.title}`, 
    "provider": {
      "@type": "Organization",
      "name": "AN Global Services",
      "url": "https://www.anglobalservices.com"
    },
    "areaServed": "IN",
    "serviceType": "BIS ISI Certification Consulting"
  };

  let faqSchema = null;
  const faqSection = product.sections?.find(sec => sec.type === "faq");
  
  if (faqSection && faqSection.qas?.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqSection.qas.map(qa => ({
        "@type": "Question",
        "name": qa.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": qa.a
        }
      }))
    };
  }

  return (
    <main className="w-full bg-white">
      
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} type="application/ld+json" />
      {faqSchema && (
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} type="application/ld+json" />
      )}

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 items-start">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">
            <Image
              src={safeHeroImage}
              alt={product.seo?.mainImageAlt || product.title || "Product Image"}
              width={420}
              height={320}
              className="w-full h-auto object-cover"
              priority
              unoptimized 
            />
          </div>

          <div>
            <h1 className="inline-block bg-[#0072b1] text-white text-lg md:text-xl uppercase font-semibold px-6 py-2 rounded-md shadow-md mb-4">
              {product.title}
            </h1>
            
            {product.hero?.description?.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-gray-600 text-[15px] leading-6 text-justify pb-4"
                dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(paragraph) }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- DYNAMIC SECTIONS LOOP --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-12 space-y-8">
        {product.sections?.map((section, index) => {
          
          // 1. STANDARD TEXT SECTION 
          if (section.type === "text") {
            return (
              <div key={index}>
                <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
                  {section.heading}
                </h2>
                
                {section.paragraphs?.map((para, i) => (
                  <p 
                    key={`p-${i}`} 
                    className="mt-5 text-gray-600 text-[15px] leading-6 text-justify"
                    dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(para) }} 
                  />
                ))}

                {section.highlightBox && (
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mt-6">
                    <p className="text-gray-800 text-[15px] leading-6" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(section.highlightBox) }} />
                  </div>
                )}

                {section.stepBlocks?.length > 0 && (
                  <div className="mt-8 space-y-6">
                    {section.stepBlocks.map((block, bIdx) => (
                      <div key={bIdx} className="bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm">
                        {block.stepHeading && (
                          <h3 className="text-[16px] md:text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                            {block.stepHeading}
                          </h3>
                        )}
                        <div className="space-y-4">
                          {block.stepItems?.map((item, i) => (
                            <div key={i} className="flex text-[15px] text-gray-600 leading-6 text-justify">
                              <span className="font-bold mr-2 text-gray-900">{i + 1}.</span>
                              <span dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(item) }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          // 2. BULLET LIST SECTION
          if (section.type === "bullet") {
            return (
              <div key={index}>
                <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
                  {section.heading}
                </h2>
                
                {section.bulletGroups?.map((group, gIdx) => (
                  <div key={gIdx} className="mt-6">
                    {group.intro && (
                      <p className="text-gray-600 text-[15px] leading-6 text-justify font-semibold mb-3" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(group.intro) }} />
                    )}
                    <ul className="space-y-2 text-[15px] text-gray-700">
                      {group.items?.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start">
                          <span className="text-[#0072b1] mr-2 text-lg leading-none">•</span>
                          <span dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(item) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          }

          // 3. CARDS SECTION
          if (section.type === "cards") {
            return (
              <div key={index}>
                <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
                  {section.heading}
                </h2>
                {section.intro && (
                  <p className="mt-6 text-gray-600 text-[15px] leading-6 text-justify mb-8" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(section.intro) }} />
                )}
                <div className="space-y-3 mt-6">
                  {section.cards?.map((card, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                      <p className="text-gray-600 text-[15px] leading-6 text-justify" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(card.text) }} />
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // 4. FAQ SECTION
          // FAQ SECTION
          if (section.type === "faq") {
            return (
              <div key={index} className="pt-4">
                {section.heading && (
                  <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md mb-6 inline-block w-full">
                    {section.heading}
                  </h2>
                )}
                
                {/* Render Multiple Intro Paragraphs */}
                {section.intros && section.intros.length > 0 && (
                  <div className="space-y-4 mb-6">
                    {section.intros.map((intro, i) => (
                      <p key={`intro-${i}`} className="text-gray-600 text-[15px] leading-6 text-justify" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(intro) }} />
                    ))}
                  </div>
                )}

                {/* Render the Q&As */}
                <div className="space-y-4">
                  {section.qas?.map((qa, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{i + 1}. {qa.q}</h3>
                      <p className="text-gray-600 text-[15px] leading-6 text-justify" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(qa.a) }} />
                    </div>
                  ))}
                </div>

                {/* Render Multiple Outro Paragraphs */}
                {section.outros && section.outros.length > 0 && (
                  <div className="space-y-4 mt-6">
                    {section.outros.map((outro, i) => (
                      <p key={`outro-${i}`} className="text-gray-600 text-[15px] leading-6 text-justify" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(outro) }} />
                    ))}
                  </div>
                )}
              </div>
            );
          }

          // 5. PRICING TABLE SECTION 
          if (section.type === "table") {
            return (
              <div key={index}>
                <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
                  {section.heading}
                </h2>
                
                {section.intro && (
                  <p className="mt-6 text-gray-600 text-[15px] leading-6 text-justify mb-4" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(section.intro) }} />
                )}

                <div className="overflow-x-auto mt-6 mb-4">
                  <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
                    <thead className="bg-gray-100 border-b-2 border-gray-300">
                      <tr className="text-gray-900 text-[15px]">
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold w-16">S.No</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold">Particular</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold w-32">Amount (INR)</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-bold">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="text-[15px] text-gray-700">
                      {section.rows?.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="border border-gray-300 px-4 py-3 text-center">{row.sno}</td>
                          <td className="border border-gray-300 px-4 py-3 font-medium" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(row.particular) }} />
                          <td className="border border-gray-300 px-4 py-3 whitespace-nowrap">{row.amount}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-600" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(row.remarks) }} />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {section.note && (
                  <p className="text-sm font-semibold text-gray-700 italic bg-gray-50 border-l-4 border-[#0072b1] p-3 rounded-r-md">
                    Note: <span className="font-normal" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(section.note) }} />
                  </p>
                )}
              </div>
            );
          }

          // 6. POINTS LIST SECTION
          if (section.type === "points_list") {
            return (
              <div key={index}>
                <h2 className="bg-[#0072b1] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-md shadow-md">
                  {section.heading}
                </h2>
                
                <div className="mt-5 space-y-2 text-[15px] text-gray-700 font-medium">
                  {section.points?.map((point, i) => (
                    <p key={i} className="leading-6" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(point) }} />
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}
      </section>

    </main>
  );
}