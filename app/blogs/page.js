import { db } from "@/src/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore"; 
import { blogs as staticBlogs } from "./blogData";
import BlogList from "./BlogList";

// Forces Next.js to fetch the live database so new blogs appear instantly!
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blogs | AN Global Services",
  description:
    "Expert Insights, Compliance Updates, and Industry Guidance on BIS Certification, ISI Mark, and more in India.",
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
    <main className="w-full bg-gray-50 min-h-screen">
      {/* Premium Header */}
      <section className="relative bg-gradient-to-br from-[#0a3d62] to-[#0072b1] py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
            Our Blogs
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Expert Insights, Compliance Updates, and Industry Guidance tailored for modern businesses.
          </p>
        </div>
      </section>

      {/* Blog List Client Component containing Search, Grid & Pagination */}
      <BlogList initialBlogs={allBlogs} />
    </main>
  );
}