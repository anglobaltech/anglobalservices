// app/blogs/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/src/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

// Forces Next.js to fetch the live database so new blogs appear instantly!
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

  const blogsRef = collection(db, "blogs");
  const q = query(blogsRef, where("slug", "==", currentSlug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return { title: "Blog Not Found" };

  const blog = querySnapshot.docs[0].data();
  const baseUrl = "https://www.anglobalservices.com";

  // Strips HTML tags from intro for fallback description
  const cleanIntro = blog.intro ? blog.intro.replace(/<[^>]+>/g, '').substring(0, 160) : "";

  return {
    title: blog.seo?.title || `${blog.title} | AN Global Services`,
    description: blog.seo?.description || cleanIntro,
    keywords: blog.seo?.keywords || [],
    alternates: {
      canonical: `${baseUrl}/blogs/${currentSlug}`,
    },
    openGraph: {
      title: blog.seo?.title || blog.title,
      description: blog.seo?.description || cleanIntro,
      url: `${baseUrl}/blogs/${currentSlug}`,
      images: [
        {
          url: blog.heroImage || `${baseUrl}/home-about.jpg`,
          width: 1200,
          height: 630,
          alt: blog.seo?.mainImageAlt || blog.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function DynamicBlogPage({ params }) {
  const resolvedParams = await params;
  const currentSlug = resolvedParams.slug;

  const blogsRef = collection(db, "blogs");
  const q = query(blogsRef, where("slug", "==", currentSlug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return notFound();
  }

  const blog = querySnapshot.docs[0].data();
  const safeHeroImage = blog.heroImage || "/home-about.jpg";

  // FAQ Schema Generation (Good for SEO)
  let faqSchema = null;
  const faqSection = blog.sections?.find(sec => sec.type === "faq");
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
    <main className="bg-white">
      {faqSchema && (
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} type="application/ld+json" />
      )}

      {/* --- HERO TEXT SECTION --- */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          {blog.category && (
            <span className="text-md font-semibold flex justify-center text-blue-700 uppercase tracking-wide text-center">
              {blog.category}
            </span>
          )}

          <h1 className="mt-3 text-3xl flex justify-center font-bold text-gray-900 leading-tight text-center">
            {blog.title}
          </h1>

          {/* Intro Section with Smart Parsing */}
          {blog.intro && (
            <p 
              className="mt-4 text-gray-700 text-center max-w-6xl mx-auto"
              dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(blog.intro) }}
            />
          )}
        </div>
      </section>

      {/* --- HERO IMAGE SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="relative w-full h-40 sm:h-64 md:h-80 lg:h-96 xl:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <Image
            src={safeHeroImage}
            alt={blog.seo?.mainImageAlt || blog.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* --- DYNAMIC CONTENT BLOCKS --- */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <article className="space-y-10">
          {blog.sections?.map((section, index) => {
            
            // 1. STANDARD TEXT SECTION
            if (section.type === "text") {
              return (
                <div key={index}>
                  {section.heading && (
                    <h2 className="inline-block w-full bg-[#0072b1] text-white text-lg md:text-xl uppercase font-semibold px-6 py-2 rounded-md shadow mb-6">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs?.map((para, i) => (
                      <p 
                        key={i} 
                        className="text-gray-600 leading-8"
                        dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(para) }} 
                      />
                    ))}
                  </div>
                </div>
              );
            }

            // 2. BULLET & NUMBERED LISTS
            if (section.type === "bullet" || section.type === "numbered") {
              const introArray = section.intros && section.intros.length > 0 ? section.intros : (section.intro ? [section.intro] : []);

              return (
                <div key={index}>
                  {section.heading && (
                    <h2 className="inline-block w-full bg-[#0072b1] text-white text-lg md:text-xl uppercase font-semibold px-6 py-2 rounded-md shadow mb-6">
                      {section.heading}
                    </h2>
                  )}
                  
                  {/* Intros before list */}
                  {introArray.length > 0 && (
                    <div className="space-y-4 mb-4">
                      {introArray.map((intro, i) => (
                        <p key={i} className="text-gray-600 leading-8" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(intro) }} />
                      ))}
                    </div>
                  )}

                  {/* The List itself */}
                  {(() => {
                    const groups = section.bulletGroups && section.bulletGroups.length > 0 
                      ? section.bulletGroups 
                      : [{ subheading: "", items: section.items || [] }];
                    
                    return groups.map((group, gIdx) => (
                      <div key={gIdx} className="mb-4">
                        {group.subheading && (
                          <h3 className="font-semibold text-gray-800 mb-2 mt-2">{group.subheading}</h3>
                        )}
                        {section.type === "bullet" ? (
                          <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-8">
                            {group.items?.filter(item => item && item.trim() !== "").map((item, i) => (
                              <li key={i} dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(item) }} />
                            ))}
                          </ul>
                        ) : (
                          <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-8">
                            {group.items?.filter(item => item && item.trim() !== "").map((item, i) => (
                              <li key={i} dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(item) }} />
                            ))}
                          </ol>
                        )}
                      </div>
                    ));
                  })()}

                  {/* Outros after list */}
                  {section.outros && section.outros.length > 0 && (
                    <div className="space-y-4 mt-4">
                      {section.outros.map((outro, i) => (
                        <p key={i} className="text-gray-600 leading-8" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(outro) }} />
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // 3. FAQ SECTION
            if (section.type === "faq") {
              return (
                <div key={index}>
                  {section.heading && (
                    <h2 className="inline-block w-full bg-[#0072b1] text-white text-lg md:text-xl uppercase font-semibold px-6 py-2 rounded-md shadow mb-8">
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-6 text-gray-600 leading-8">
                    {section.qas?.map((qa, i) => (
                      <div key={i}>
                        <p className="font-semibold text-gray-800">{i + 1}. {qa.q}</p>
                        <p className="mt-1" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(qa.a) }} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // 4. CTA BLOCK SECTION
            if (section.type === "cta") {
              return (
                <div key={index} className="mt-8 p-8 bg-blue-50 rounded-xl border border-blue-100">
                  {section.title && <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>}
                  {section.description && <p className="mt-3 text-gray-600" dangerouslySetInnerHTML={{ __html: parseSmartTextToHTML(section.description) }} />}
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {section.primaryLink && section.primaryText && (
                      <Link href={section.primaryLink} className="w-full sm:w-auto text-center bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-sm">
                        {section.primaryText}
                      </Link>
                    )}
                    {section.secondaryLink && section.secondaryText && (
                      <Link href={section.secondaryLink} className="w-full sm:w-auto text-center bg-white text-blue-700 border border-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-sm">
                        {section.secondaryText}
                      </Link>
                    )}
                  </div>
                </div>
              );
            }

            return null;
          })}
        </article>
      </section>
    </main>
  );
}