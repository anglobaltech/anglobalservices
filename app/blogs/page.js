import Image from "next/image";
import Link from "next/link";
import { db } from "@/src/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore"; // Added query and orderBy
import { blogs as staticBlogs } from "./blogData";

// Forces Next.js to fetch the live database so new blogs appear instantly!
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blogs | AN Global Services",
  description:
    "Latest blogs on BIS Certification, ISI Mark, Calibration Certificates, QCO Orders and compliance updates in India.",
};

export default async function BlogsPage() {
  // 1. Fetch new blogs from Firestore, ordered by newest first!
  const blogsRef = collection(db, "blogs");
  const q = query(blogsRef, orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  // 2. Format the Firebase data
  const firebaseBlogs = querySnapshot.docs
    .map((doc) => {
      const data = doc.data();

      // STRICT CHECK: If the blog doesn't have a title or slug, skip it! 
      if (!data.title || !data.slug) return null;

      // Clean HTML tags from the intro to create a short text excerpt
      const cleanIntro = data.intro
        ? data.intro.replace(/<[^>]+>/g, "").substring(0, 130) + "..."
        : "Read more about this compliance topic in our detailed guide.";

      let formattedDate = "Recent";
      if (data.createdAt) {
        const dateObj = data.createdAt.toDate ? data.createdAt.toDate() : new Date(data.createdAt);
        formattedDate = dateObj.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      }

      // --- NEW FIX: FETCH NEW LISTING DETAILS WITH FALLBACKS ---
      const finalTitle = data.listingHeading || data.title;
      
      const finalExcerpt = data.listingDescription
        ? data.listingDescription.replace(/<[^>]+>/g, "") // Clean description text
        : (data.seo?.description || cleanIntro);

      const finalImage = data.listingImage || data.heroImage || "/home-about.jpg";

      return {
        id: doc.id,
        slug: data.slug?.replace(/^\//, ""), 
        title: finalTitle, // Uses Listing Heading if filled, otherwise falls back to Title
        excerpt: finalExcerpt, // Uses Listing Description if filled, otherwise falls back to SEO/Intro
        image: finalImage, // Uses Listing Thumbnail if uploaded, otherwise falls back to Hero Image
        date: formattedDate,
        category: data.category || "Updates",
      };
    })
    .filter(Boolean); // Removes skipped/empty blogs

  // 3. Format the old static blogs
  const formattedStaticBlogs = staticBlogs.map(blog => ({
    ...blog,
    id: blog.slug,
    slug: blog.slug.replace(/^\//, "")
  }));

  // 4. Combine both! CHANGED: New Firebase blogs show first, followed by older static blogs.
  const allBlogs = [...firebaseBlogs, ...formattedStaticBlogs];

  return (
    <main className="w-full bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Blogs
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Simplifying BIS & ISI Certification for Indian Manufacturers
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <div className="relative h-60 w-full shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  unoptimized // Crucial for Firebase images
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm text-blue-700 font-semibold uppercase tracking-wide">
                  {blog.category}
                </span>

                <h2 className="mt-2 text-xl font-bold text-gray-900 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600 text-sm line-clamp-3 flex-grow">
                  {blog.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">{blog.date}</span>

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-blue-700 font-semibold text-sm hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}