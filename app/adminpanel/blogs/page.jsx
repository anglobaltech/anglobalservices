"use client";

import { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { useRouter } from "next/navigation";

export default function BlogsList() {
  const [publishedBlogs, setPublishedBlogs] = useState([]);
  const [deleteModal, setDeleteModal] = useState({ show: false, id: null, title: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPublishedBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      }
    };
    fetchBlogs();
  }, []);

  const executeDeleteBlog = async () => {
    if (!deleteModal.id) return;
    try {
      await deleteDoc(doc(db, "blogs", deleteModal.id));
      setPublishedBlogs(publishedBlogs.filter(blog => blog.id !== deleteModal.id));
      setDeleteModal({ show: false, id: null, title: "" });
    } catch (err) {
      console.error("Failed to delete blog:", err);
      alert("An error occurred while deleting the blog.");
    }
  };

  return (
    <>
      {deleteModal.show && (
        <div className="fixed inset-0 z-[100000] bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center transform transition-all border border-white/60">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-red-100 shadow-inner">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">Delete Blog?</h3>
            <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">
              Are you sure you want to permanently delete <strong className="text-gray-800">{deleteModal.title}</strong>? This action will immediately remove it from the live website.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteModal({ show: false, id: null, title: "" })} className="cursor-pointer flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors shadow-sm">
                Cancel
              </button>
              <button onClick={executeDeleteBlog} className="cursor-pointer flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-red-700">
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto py-12 px-5 sm:px-8 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Blog Pages</h2>
            <p className="text-sm text-gray-500 font-medium mt-1">Manage, edit, or delete your existing published blogs.</p>
          </div>
          <button onClick={() => router.push("/adminpanel/createblog")} className="cursor-pointer bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white font-bold px-6 py-3 rounded-xl shadow-md transform hover:-translate-y-0.5 transition-all text-sm w-full sm:w-auto text-center">
            + Create New Blog
          </button>
        </div>

        {publishedBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white/60 backdrop-blur-md rounded-3xl border border-white/60 shadow-sm">
             <p className="text-gray-500 font-bold text-lg">No blogs published yet.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {publishedBlogs.map((blog) => (
              <div key={blog.id} className="bg-white/85 backdrop-blur-2xl p-6 rounded-2xl shadow-sm border border-white/60 hover:border-[#0072b1]/30 hover:shadow-md transition-all flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 group">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {blog.category && <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded uppercase tracking-wider">{blog.category}</span>}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{blog.title}</h3>
                  <p className="text-xs font-semibold text-[#0072b1] mt-1 bg-[#0072b1]/10 inline-block px-2 py-0.5 rounded break-all">/{blog.slug}</p>
                </div>
                <div className="flex items-center gap-3 transition-all self-start sm:self-auto">
                  <button onClick={() => router.push(`/adminpanel/createblog?id=${blog.id}`)} className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors shadow-sm">
                    Edit Blog
                  </button>
                  <button onClick={() => setDeleteModal({ show: true, id: blog.id, title: blog.title })} className="cursor-pointer bg-white hover:bg-red-500 text-red-500 hover:text-white font-bold p-2.5 rounded-xl transition-all border border-red-100 hover:border-red-500 shadow-sm flex items-center justify-center" title="Delete Blog">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}