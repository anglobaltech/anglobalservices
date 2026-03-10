import Image from "next/image";
import Link from "next/link";
import { blogs } from "./blogData";

export const revalidate = 86400

export const metadata = {
  title: "Blogs | AN Global Services",
  description:
    "Latest blogs on BIS Certification, ISI Mark, Calibration Certificates, QCO Orders and compliance updates in India.",
};

export default function BlogsPage() {
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
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-sm text-blue-700 font-semibold">
                  {blog.category}
                </span>

                <h2 className="mt-2 text-xl font-bold text-gray-900">
                  {blog.title}
                </h2>

                <p className="mt-3 text-gray-600 text-sm">{blog.excerpt}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{blog.date}</span>

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
