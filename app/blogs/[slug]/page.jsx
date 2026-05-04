import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/src/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

// Forces Next.js to fetch the live database so new blogs appear instantly!
export const dynamic = "force-dynamic";

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
      <section className="bg-gradient-to-r from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          {blog.category && (
            <span className="text-md font-semibold flex justify-center text-blue-700 uppercase tracking-wide text-center">
              {blog.category}
            </span>
          )}

          <h1 className="mt-3 text-3xl flex justify-center font-bold text-gray-900 leading-tight text-center">
            {blog.title}
          </h1>

          {/* CHANGED: Added dynamic styling for <b> and <a> tags typed by admins */}
          {blog.intro && (
            <p 
              className="mt-4 text-gray-700 text-center max-w-4xl mx-auto [&_b]:font-bold [&_strong]:font-bold [&_a]:text-blue-600 [&_a:hover]:text-blue-800 [&_a]:underline [&_i]:italic transition-colors"
              dangerouslySetInnerHTML={{ __html: blog.intro }}
            />
          )}
        </div>
      </section>

      {/* --- HERO IMAGE SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
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
        {/* CHANGED: Added dynamic styling so ANY block inside the article handles <b> and <a> perfectly */}
        <article className="space-y-10 [&_b]:font-bold [&_strong]:font-bold [&_a]:text-blue-600 [&_a:hover]:text-blue-800 [&_a]:underline [&_i]:italic transition-colors">
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
                        dangerouslySetInnerHTML={{ __html: para }} 
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
                        <p key={i} className="text-gray-600 leading-8" dangerouslySetInnerHTML={{ __html: intro }} />
                      ))}
                    </div>
                  )}

                  {/* The List itself */}
                  {section.type === "bullet" ? (
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-8 mb-4">
                      {section.items?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                    </ul>
                  ) : (
                    <ol className="list-decimal pl-6 space-y-2 text-gray-600 leading-8 mb-4">
                      {section.items?.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
                    </ol>
                  )}

                  {/* Outros after list */}
                  {section.outros && section.outros.length > 0 && (
                    <div className="space-y-4 mt-4">
                      {section.outros.map((outro, i) => (
                        <p key={i} className="text-gray-600 leading-8" dangerouslySetInnerHTML={{ __html: outro }} />
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
                        <p className="mt-1" dangerouslySetInnerHTML={{ __html: qa.a }} />
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
                  {/* The CTA description can also contain links and bold text now! */}
                  {section.description && <p className="mt-3 text-gray-600" dangerouslySetInnerHTML={{ __html: section.description }} />}
                  
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