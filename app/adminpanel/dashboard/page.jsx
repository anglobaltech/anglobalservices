"use client";

import { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy } from "firebase/firestore"; 
import { db } from "@/src/lib/firebase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalAdmins, setTotalAdmins] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const pQuery = query(collection(db, "isi_products"), orderBy("createdAt", "desc"));
        const pSnap = await getDocs(pQuery);
        setTotalProducts(pSnap.size);

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
    <div className="max-w-7xl mx-auto py-10 px-5 sm:px-8 animate-fade-in selection:bg-blue-100">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Overview</h2>
        <p className="text-gray-500 font-medium mt-2 text-sm sm:text-base">Welcome back to your workspace. Here is your platform's current status.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        
        {/* --- STAT CARD: TOTAL PRODUCTS --- */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-gray-200/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#0072b1]/30 transition-all duration-300 flex flex-col group relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h3 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider group-hover:text-gray-700 transition-colors">Total Products</h3>
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-50 to-blue-100/50 text-[#0072b1] rounded-xl flex items-center justify-center border border-blue-200/50 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
          </div>
          <div className="flex items-end gap-3 relative z-10">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">{totalProducts}</h2>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100/50 uppercase tracking-widest mb-1.5 shadow-sm">Live</span>
          </div>
        </div>

        {/* --- STAT CARD: TOTAL BLOGS --- */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-gray-200/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-orange-500/30 transition-all duration-300 flex flex-col group relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h3 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider group-hover:text-gray-700 transition-colors">Total Blogs</h3>
            <div className="w-10 h-10 bg-gradient-to-tr from-orange-50 to-orange-100/50 text-orange-500 rounded-xl flex items-center justify-center border border-orange-200/50 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"></path></svg>
            </div>
          </div>
          <div className="flex items-end gap-3 relative z-10">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">{totalBlogs}</h2>
            <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md border border-orange-100/50 uppercase tracking-widest mb-1.5 shadow-sm">Live</span>
          </div>
        </div>

        {/* --- STAT CARD: ACTIVE ADMINS --- */}
        <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-sm border border-gray-200/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-purple-500/30 transition-all duration-300 flex flex-col group relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h3 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider group-hover:text-gray-700 transition-colors">Active Admins</h3>
            <div className="w-10 h-10 bg-gradient-to-tr from-purple-50 to-purple-100/50 text-purple-600 rounded-xl flex items-center justify-center border border-purple-200/50 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
          </div>
          <div className="flex items-end gap-3 relative z-10">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">{totalAdmins}</h2>
            <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md border border-purple-100/50 uppercase tracking-widest mb-1.5 shadow-sm">Secure</span>
          </div>
        </div>

        {/* --- ACTION CARD: CREATE PRODUCT --- */}
        <div onClick={() => router.push("/adminpanel/createproductpage")} className="cursor-pointer group bg-gradient-to-br from-[#0072b1] to-[#004a7a] p-6 rounded-2xl shadow-md hover:shadow-[0_12px_40px_rgba(0,114,177,0.3)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between border border-[#005f96]">
          <div className="absolute top-[-30%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-8">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-md text-white rounded-xl flex items-center justify-center border border-white/20 shadow-inner group-hover:bg-white group-hover:text-[#0072b1] transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-lg font-extrabold text-white mb-1 tracking-tight">Create Product</h3>
            <p className="text-blue-100/80 text-xs font-medium leading-relaxed">Design and launch a new certification page instantly.</p>
          </div>
        </div>

        {/* --- ACTION CARD: CREATE BLOG --- */}
        <div onClick={() => router.push("/adminpanel/createblog")} className="cursor-pointer group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between border border-gray-700">
          <div className="absolute top-[-30%] right-[-10%] w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500 pointer-events-none"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-8">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-md text-white rounded-xl flex items-center justify-center border border-white/10 shadow-inner group-hover:bg-white group-hover:text-gray-900 transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-lg font-extrabold text-white mb-1 tracking-tight">Create Blog</h3>
            <p className="text-gray-400 text-xs font-medium leading-relaxed">Write, format, and publish an engaging SEO blog post.</p>
          </div>
        </div>

      </div>
    </div>
  );
}