"use client";

import { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy } from "firebase/firestore"; 
import { db } from "@/src/lib/firebase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalAdmins, setTotalAdmins] = useState(0);
  // CHANGED: Added state for total blogs
  const [totalBlogs, setTotalBlogs] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const pQuery = query(collection(db, "isi_products"), orderBy("createdAt", "desc"));
        const pSnap = await getDocs(pQuery);
        setTotalProducts(pSnap.size);

        // CHANGED: Fetch total blogs dynamically
        const bQuery = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const bSnap = await getDocs(bQuery);
        setTotalBlogs(bSnap.size);

        const aSnap = await getDocs(collection(db, "admins"));
        setTotalAdmins(aSnap.size);
      } catch (err) {
        console.error("Failed to fetch dashboard stats", err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-8 animate-fade-in">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Overview Dashboard</h2>
        <p className="text-gray-500 font-medium mt-2 text-lg">Welcome back. Here is what is happening across your platform today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        
        {/* Total Products Stat */}
        <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-blue-50 text-[#0072b1] rounded-2xl flex items-center justify-center border border-blue-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Live</span>
          </div>
          <div>
            <p className="text-sm font-extrabold text-gray-400 uppercase tracking-wider mb-1">Total Products</p>
            <h3 className="text-4xl font-black text-gray-900">{totalProducts}</h3>
          </div>
        </div>

        {/* CHANGED: New Total Blogs Stat */}
        <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center border border-orange-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"></path></svg>
            </div>
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">Live</span>
          </div>
          <div>
            <p className="text-sm font-extrabold text-gray-400 uppercase tracking-wider mb-1">Total Blogs</p>
            <h3 className="text-4xl font-black text-gray-900">{totalBlogs}</h3>
          </div>
        </div>

        {/* Active Admins Stat */}
        <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center border border-purple-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">Secure</span>
          </div>
          <div>
            <p className="text-sm font-extrabold text-gray-400 uppercase tracking-wider mb-1">Active Admins</p>
            <h3 className="text-4xl font-black text-gray-900">{totalAdmins}</h3>
          </div>
        </div>

        {/* Create New Product Action */}
        <div onClick={() => router.push("/adminpanel/createproductpage")} className="cursor-pointer group bg-gradient-to-br from-[#0072b1] to-[#005f96] p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,114,177,0.2)] border border-[#005f96]/50 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-white/20 text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Create New Product</h3>
          <p className="text-blue-100 text-sm font-medium">Launch a new certification page instantly.</p>
        </div>

        {/* CHANGED: New Create Blog Action Card */}
        <div onClick={() => router.push("/adminpanel/createblog")} className="cursor-pointer group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-gray-700 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-300">
          <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Create New Blog</h3>
          <p className="text-gray-400 text-sm font-medium">Write and publish an engaging blog post.</p>
        </div>

      </div>
    </div>
  );
}