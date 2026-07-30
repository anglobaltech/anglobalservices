"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, updateDoc, doc, serverTimestamp, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/src/lib/firebase"; 
import { useRouter, useSearchParams } from "next/navigation";

export default function CreateBlog() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editingId = searchParams.get("id"); 

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  // Blog Specific Fields
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [intro, setIntro] = useState("");
  
  // SEO Fields
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState(""); 
  const [mainImageAlt, setMainImageAlt] = useState("");
  
  // Hero Image
  const [heroImageFile, setHeroImageFile] = useState(null);
  const [heroImageUrlInput, setHeroImageUrlInput] = useState(""); 
  const [existingHeroImage, setExistingHeroImage] = useState(""); 

  // --- NEW: Listing Page Preview Fields ---
  const [listingHeading, setListingHeading] = useState("");
  const [listingDescription, setListingDescription] = useState("");
  const [listingImageFile, setListingImageFile] = useState(null);
  const [listingImageUrlInput, setListingImageUrlInput] = useState("");
  const [existingListingImage, setExistingListingImage] = useState("");
  
  // Dynamic Content Blocks
  const [sections, setSections] = useState([]);

  useEffect(() => {
    if (editingId) {
      const fetchBlog = async () => {
        try {
          const docRef = doc(db, "blogs", editingId);
          const snap = await getDoc(docRef);
          if (snap.exists()) {
            const blog = { id: snap.id, ...snap.data() };
            setTitle(blog.title || "");
            setSlug(blog.slug || "");
            setCategory(blog.category || "");
            setIntro(blog.intro || "");
            
            setSeoTitle(blog.seo?.title || "");
            setSeoDescription(blog.seo?.description || "");
            setSeoKeywords(blog.seo?.keywords ? blog.seo.keywords.join(", ") : "");
            setMainImageAlt(blog.seo?.mainImageAlt || "");
            setExistingHeroImage(blog.heroImage || "");

            // Fetch Listing Details
            setListingHeading(blog.listingHeading || "");
            setListingDescription(blog.listingDescription || "");
            setExistingListingImage(blog.listingImage || "");
            
            // Migrate older data formats to the new robust arrays
            let loadedSections = blog.sections || [];
            loadedSections = loadedSections.map(sec => {
              if (sec.type === "bullet" || sec.type === "numbered") {
                return {
                  ...sec,
                  intros: sec.intros || (sec.intro ? [sec.intro] : [""]),
                  outros: sec.outros || [],
                  // Migrating to new group array structure automatically
                  bulletGroups: sec.bulletGroups || [{ subheading: "", items: sec.items || [""] }]
                };
              }
              return sec;
            });

            // If an old blog had the hardcoded CTA, migrate it into a block
            if (blog.cta && blog.cta.title) {
              loadedSections.push({
                type: "cta",
                heading: "",
                title: blog.cta.title,
                description: blog.cta.description || "",
                primaryText: blog.cta.primaryText || "",
                primaryLink: blog.cta.primaryLink || "",
                secondaryText: blog.cta.secondaryText || "",
                secondaryLink: blog.cta.secondaryLink || ""
              });
            }

            setSections(loadedSections);
          }
        } catch (err) {
          console.error("Failed to fetch blog", err);
          setErrorMsg("Failed to load blog data.");
        }
      };
      fetchBlog();
    }
  }, [editingId]);

  const generateSlug = () => {
    const generated = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    setSlug(generated);
  };

  const addSection = (type) => {
    const newSection = { type, heading: "" };
    if (type === "text") { newSection.paragraphs = [""]; } 
    if (type === "bullet" || type === "numbered") { 
      newSection.intros = [""]; 
      newSection.bulletGroups = [{ subheading: "", items: [""] }]; 
      newSection.outros = []; 
    }
    if (type === "faq") { newSection.heading = "Frequently Asked Questions"; newSection.qas = [{ q: "", a: "" }]; }
    if (type === "cta") {
      newSection.title = ""; newSection.description = ""; 
      newSection.primaryText = ""; newSection.primaryLink = ""; 
      newSection.secondaryText = ""; newSection.secondaryLink = "";
    }
    
    setSections([...sections, newSection]);
  };

  const updateSection = (index, field, value) => {
    const updated = [...sections];
    updated[index][field] = value;
    setSections(updated);
  };

  const updateNestedArray = (sectionIndex, arrayName, itemIndex, field, value) => {
    const updated = [...sections];
    if (field) updated[sectionIndex][arrayName][itemIndex][field] = value;
    else updated[sectionIndex][arrayName][itemIndex] = value;
    setSections(updated);
  };

  const removeNestedItem = (sectionIndex, arrayName, itemIndex) => {
    const updated = [...sections];
    updated[sectionIndex][arrayName].splice(itemIndex, 1);
    setSections(updated);
  };

  const addNestedItem = (sectionIndex, arrayName, defaultObj) => {
    const updated = [...sections];
    if (!updated[sectionIndex][arrayName]) updated[sectionIndex][arrayName] = [];
    updated[sectionIndex][arrayName].push(defaultObj);
    setSections(updated);
  };

  const removeSection = (index) => {
    const updated = [...sections];
    updated.splice(index, 1);
    setSections(updated);
  };

  // List Group Modifiers
  const updateBulletGroup = (sIdx, gIdx, field, value) => {
    const updated = [...sections];
    updated[sIdx].bulletGroups[gIdx][field] = value;
    setSections(updated);
  };

  const removeBulletGroup = (sIdx, gIdx) => {
    const updated = [...sections];
    updated[sIdx].bulletGroups.splice(gIdx, 1);
    setSections(updated);
  };

  const addBulletGroup = (sIdx) => {
    const updated = [...sections];
    if (!updated[sIdx].bulletGroups) updated[sIdx].bulletGroups = [];
    updated[sIdx].bulletGroups.push({ subheading: "", items: [] });
    setSections(updated);
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      // 1. Process Hero Image (Native Firebase Upload)
      let finalImageUrl = existingHeroImage;
      if (heroImageFile) {
        const imageRef = ref(storage, `blogs_images/hero_${Date.now()}_${heroImageFile.name}`);
        const snapshot = await uploadBytes(imageRef, heroImageFile);
        finalImageUrl = await getDownloadURL(snapshot.ref);
      } else if (heroImageUrlInput.trim() !== "") {
        finalImageUrl = heroImageUrlInput.trim();
      }

      // 2. Process Listing Thumbnail Image (Native Firebase Upload)
      let finalListingImageUrl = existingListingImage;
      if (listingImageFile) {
        const listingRef = ref(storage, `blogs_images/listing_${Date.now()}_${listingImageFile.name}`);
        const snapshot = await uploadBytes(listingRef, listingImageFile);
        finalListingImageUrl = await getDownloadURL(snapshot.ref);
      } else if (listingImageUrlInput.trim() !== "") {
        finalListingImageUrl = listingImageUrlInput.trim();
      }

      const keywordArray = seoKeywords ? seoKeywords.split(',').map(k => k.trim()).filter(Boolean) : [];

      const blogData = {
        title, slug, category, intro,
        seo: { title: seoTitle, description: seoDescription, keywords: keywordArray, mainImageAlt },
        heroImage: finalImageUrl,
        listingHeading,
        listingDescription,
        listingImage: finalListingImageUrl,
        sections,
        updatedAt: serverTimestamp(),
      };

      if (editingId) {
        await updateDoc(doc(db, "blogs", editingId), blogData);
        setSuccessMsg("Blog updated successfully!");
      } else {
        blogData.createdAt = serverTimestamp();
        await setDoc(doc(db, "blogs", slug), blogData);
        setSuccessMsg("Blog published successfully!");
      }

      setTimeout(() => router.push("/adminpanel/blogs"), 2000); 
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to publish. Check console for details.");
      setLoading(false); 
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-5 sm:px-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">{editingId ? "Edit Blog" : "Create New Blog"}</h2>
        <p className="text-sm text-gray-500 font-medium mt-1">{editingId ? "Update existing content and publish." : "Write your blog post to boost SEO and engage users."}</p>
      </div>

      {errorMsg && <div className="mb-8 p-4 bg-red-50/90 backdrop-blur-md border-l-4 border-red-500 text-red-700 font-semibold rounded-r-xl shadow-sm flex items-center gap-3"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{errorMsg}</div>}
      {successMsg && <div className="mb-8 p-4 bg-green-50/90 backdrop-blur-md border-l-4 border-green-500 text-green-800 font-semibold rounded-r-xl shadow-sm flex items-center gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{successMsg}</div>}

      <div className="mb-8 p-5 bg-[#0072b1]/5 border border-[#0072b1]/20 rounded-2xl shadow-sm"> 
        <h3 className="text-sm font-extrabold text-[#0072b1] uppercase tracking-wider mb-2 flex items-center gap-2"> 
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg> 
          Smart Text Formatting Guide 
        </h3> 
        <ul className="text-sm text-gray-700 space-y-2 font-medium"> 
          <li> 
            <strong>To make text Bold:</strong> Wrap the text in double asterisks. Example: <code className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[#0072b1]">**this text will be bold**</code>
          </li> 
          <li> 
            <strong>To add a Blue Link:</strong> Use brackets for the text and parentheses for the URL. Example: <code className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[#0072b1]">[Click Here](https://www.abc.com)</code>
          </li> 
        </ul> 
      </div>

      <form onSubmit={handlePublish} className="space-y-8 pb-20">
        
        {/* SECTION 1: IDENTITY SECTION */}
        <div className="bg-white/85 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
          <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">1</span> 
            Blog Core Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Blog Title (H1)</label>
              <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. BIS Registration Guide 2026" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">URL Slug</label>
              <div className="flex gap-2">
                <input type="text" required value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="e.g. bis-registration-guide" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
                <button type="button" onClick={generateSlug} className="cursor-pointer bg-gray-800 hover:bg-gray-900 text-white px-5 rounded-xl text-sm font-bold transition-all shadow-md">Auto-Fill</button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Category / Tag</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g. BIS CRS Registration Guide" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Hero Intro Paragraph <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded ml-2 normal-case border">Tip: Use **text** for bold, [text](url) for links</span></label>
            <textarea rows="3" value={intro} onChange={(e) => setIntro(e.target.value)} placeholder="The opening paragraph shown just below the title..." className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm"></textarea>
          </div>
        </div>

        {/* SECTION 2: LISTING PAGE PREVIEW */}
        <div className="bg-white/85 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
          <h2 className="text-lg font-extrabold text-gray-900 mb-2 flex items-center gap-3">
            <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">2</span> 
            Listing Page Details (For "Our Blogs" Page)
          </h2>
          <p className="text-sm text-gray-500 mb-6 ml-11 font-medium">These details appear only on the main blogs list grid card.</p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Card Heading</label>
              <input type="text" value={listingHeading} onChange={(e) => setListingHeading(e.target.value)} placeholder="e.g. BIS ISI Mark Certification Guide" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Card Preview Description</label>
              <textarea rows="2" value={listingDescription} onChange={(e) => setListingDescription(e.target.value)} placeholder="A short 2-line summary to hook the reader..." className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm"></textarea>
            </div>
            
            <div className="mt-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Card Thumbnail Image {existingListingImage && "(Leave blank to keep existing)"}
              </label>
              <div className="flex flex-col gap-5 p-5 border border-gray-200/80 rounded-2xl bg-white/40 shadow-inner">
                {(listingImageFile || listingImageUrlInput || existingListingImage) && (
                  <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex items-center justify-center mb-2 group">
                    <img src={listingImageFile ? URL.createObjectURL(listingImageFile) : (listingImageUrlInput || existingListingImage)} alt="Listing Preview" className="w-full h-full object-cover" />
                    <button type="button" onClick={() => { setListingImageFile(null); setListingImageUrlInput(""); setExistingListingImage(""); }} className="absolute top-3 right-3 bg-white/90 hover:bg-red-50 text-gray-600 hover:text-red-600 p-2.5 rounded-full shadow-md transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer border border-transparent hover:border-red-200" title="Remove Image">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                  </div>
                )}
                <div>
                  <label className="block text-xs font-extrabold text-gray-700 mb-2">Option 1: Paste Image URL</label>
                  <input type="url" value={listingImageUrlInput} onChange={(e) => { setListingImageUrlInput(e.target.value); setListingImageFile(null); }} placeholder="https://..." className="w-full border border-gray-200/80 bg-white rounded-xl p-3 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 border-t border-gray-200/80"></div>
                  <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">OR</span>
                  <div className="flex-1 border-t border-gray-200/80"></div>
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-gray-700 mb-2">Option 2: Upload File directly</label>
                  <input type="file" accept="image/*" onChange={(e) => { setListingImageFile(e.target.files[0]); setListingImageUrlInput(""); } } className="w-full border border-gray-200/80 bg-white rounded-xl p-2.5 text-sm font-medium text-gray-600 file:cursor-pointer file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-[#0072b1]/10 file:text-[#0072b1] hover:file:bg-[#0072b1]/20 transition-all cursor-pointer shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: HERO IMAGE SECTION */}
        <div className="bg-white/85 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
          <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">3</span> 
            Hero Image (Inside Blog)
          </h2>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
              Hero Image {existingHeroImage && "(Leave blank to keep existing)"}
            </label>
            <div className="flex flex-col gap-5 p-5 border border-gray-200/80 rounded-2xl bg-white/40 shadow-inner">
              {(heroImageFile || heroImageUrlInput || existingHeroImage) && (
                <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex items-center justify-center mb-2 group">
                  <img src={heroImageFile ? URL.createObjectURL(heroImageFile) : (heroImageUrlInput || existingHeroImage)} alt="Hero Preview" className="w-full h-full object-cover" />
                  <button type="button" onClick={() => { setHeroImageFile(null); setHeroImageUrlInput(""); setExistingHeroImage(""); }} className="absolute top-3 right-3 bg-white/90 hover:bg-red-50 text-gray-600 hover:text-red-600 p-2.5 rounded-full shadow-md transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer border border-transparent hover:border-red-200" title="Remove Image">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>
              )}
              <div>
                <label className="block text-xs font-extrabold text-gray-700 mb-2">Option 1: Paste Image URL</label>
                <input type="url" value={heroImageUrlInput} onChange={(e) => { setHeroImageUrlInput(e.target.value); setHeroImageFile(null); }} placeholder="https://..." className="w-full border border-gray-200/80 bg-white rounded-xl p-3 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1 border-t border-gray-200/80"></div>
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">OR</span>
                <div className="flex-1 border-t border-gray-200/80"></div>
              </div>
              <div>
                <label className="block text-xs font-extrabold text-gray-700 mb-2">Option 2: Upload File directly</label>
                <input type="file" accept="image/*" onChange={(e) => { setHeroImageFile(e.target.files[0]); setHeroImageUrlInput(""); } } className="w-full border border-gray-200/80 bg-white rounded-xl p-2.5 text-sm font-medium text-gray-600 file:cursor-pointer file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-[#0072b1]/10 file:text-[#0072b1] hover:file:bg-[#0072b1]/20 transition-all cursor-pointer shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: PAGE BUILDER */}
        <div className="bg-white/85 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
          <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">4</span> 
            Blog Content Builder
          </h2>
          
          <div className="space-y-6">
            {sections.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-gray-200/80 rounded-2xl bg-white/40">
                <p className="text-gray-500 font-bold text-sm">No content blocks yet.</p>
                <p className="text-gray-400 font-medium text-xs mt-1">Add text, lists, FAQs, or a CTA below.</p>
              </div>
            )}

            {sections.map((section, sIdx) => (
              <div key={sIdx} className="p-4 sm:p-6 border border-gray-200/80 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm relative group hover:border-[#0072b1]/40 transition-all duration-300">
                <button type="button" onClick={() => removeSection(sIdx)} className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-100 hover:border-red-100 p-2 rounded-lg text-xs font-bold transition-all shadow-sm z-10">Delete Block</button>
                <div className={`inline-block px-3 py-1.5 border text-xs font-extrabold rounded-lg uppercase tracking-wide mb-5 shadow-sm mt-8 sm:mt-0 ${section.type === 'cta' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-gray-100/80 text-gray-700 border-gray-200/50'}`}>
                  {section.type} Block
                </div>
                
                {section.type !== "cta" && (
                  <input type="text" placeholder="Section Heading (H2)" value={section.heading || ""} onChange={(e) => updateSection(sIdx, "heading", e.target.value)} className="w-full border-b-2 border-gray-200/80 bg-transparent py-2 mb-5 font-extrabold text-xl text-gray-900 focus:outline-none focus:border-[#0072b1] transition-colors placeholder-gray-400" />
                )}

                {/* TEXT BLOCK */}
                {section.type === "text" && (
                  <div className="space-y-4">
                    {section.paragraphs?.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <textarea rows="3" value={p} onChange={(e) => updateNestedArray(sIdx, "paragraphs", pIdx, null, e.target.value)} placeholder="Paragraph text... (Supports **bold** and [links](url))" className="flex-1 w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm"></textarea>
                        <button type="button" onClick={() => removeNestedItem(sIdx, "paragraphs", pIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                      </div>
                    ))}
                    
                    <button type="button" onClick={() => addNestedItem(sIdx, "paragraphs", "")} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Paragraph One by One</button>

                    {/* NEW BULK ADD OPTION FOR TEXT */}
                    <div className="mt-4 p-4 bg-gray-50 border border-dashed border-gray-200 rounded-xl">
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">⚡ Bulk Paste: Add Multiple Paragraphs at Once</label>
                      <textarea 
                        rows="4" 
                        placeholder="Paste your content here. Hit Enter twice to leave space between paragraphs..." 
                        className="w-full border border-gray-200 bg-white rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm font-medium"
                        id={`bulk-text-import-${sIdx}`}
                      />
                      <button 
                        type="button" 
                        onClick={() => {
                          const textareaEl = document.getElementById(`bulk-text-import-${sIdx}`);
                          if (textareaEl && textareaEl.value.trim()) {
                            const parsedLines = textareaEl.value.split(/\n\n+/).filter(x => x.trim() !== "");
                            const updatedSecs = [...sections];
                            updatedSecs[sIdx].paragraphs = [...updatedSecs[sIdx].paragraphs.filter(p => p.trim() !== ""), ...parsedLines];
                            setSections(updatedSecs);
                            textareaEl.value = "";
                          }
                        }}
                        className="mt-3 text-xs font-bold bg-[#0072b1] hover:bg-[#005f96] text-white px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                      >
                        Process & Append Paragraphs
                      </button>
                    </div>
                  </div>
                )}

                {/* BULLET & NUMBERED LIST BLOCKS */}
                {(section.type === "bullet" || section.type === "numbered") && (
                  <div className="space-y-6">
                    {/* Multi-paragraph Intros */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Intro Paragraphs (Before List)</label>
                      {section.intros?.map((introText, iIdx) => (
                        <div key={`intro-${iIdx}`} className="flex items-start gap-3">
                          <textarea rows="2" value={introText} onChange={(e) => updateNestedArray(sIdx, "intros", iIdx, null, e.target.value)} placeholder="Introductory sentence... (Supports **bold** and [links](url))" className="flex-1 w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm"></textarea>
                          <button type="button" onClick={() => removeNestedItem(sIdx, "intros", iIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                        </div>
                      ))}
                      <button type="button" onClick={() => addNestedItem(sIdx, "intros", "")} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Intro Paragraph</button>
                    </div>

                    {/* The List Sub-Groups */}
                    <div className="space-y-6 pl-2 sm:pl-4 border-l-2 border-blue-100">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">List Items & Subheadings</label>
                      
                      {section.bulletGroups?.map((group, gIdx) => (
                        <div key={gIdx} className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm relative">
                           <div className="flex items-start gap-3 mb-4">
                              <input type="text" value={group.subheading || ""} onChange={(e) => updateBulletGroup(sIdx, gIdx, "subheading", e.target.value)} placeholder="Sub-heading (Optional)" className="flex-1 w-full border border-gray-200/80 bg-white rounded-xl p-3.5 text-sm font-extrabold focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm placeholder:font-medium placeholder:text-gray-400" />
                              <button type="button" onClick={() => removeBulletGroup(sIdx, gIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                           </div>

                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                               {/* Option 1: One by One */}
                               <div className="p-4 bg-white/50 border border-gray-200 rounded-2xl shadow-sm">
                                  <span className="block text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-3">Option 1: Add One by One</span>
                                  <div className="space-y-3">
                                    {group.items?.map((item, iIdx) => (
                                      <div key={iIdx} className="flex items-center gap-3">
                                        <span className="text-gray-400 font-bold">{section.type === 'numbered' ? (iIdx + 1) + '.' : '•'}</span>
                                        <input type="text" value={item} onChange={(e) => {
                                            const updated = [...sections];
                                            updated[sIdx].bulletGroups[gIdx].items[iIdx] = e.target.value;
                                            setSections(updated);
                                        }} placeholder="List item" className="flex-1 w-full border border-gray-200/80 bg-white rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm" />
                                        <button type="button" onClick={() => {
                                            const updated = [...sections];
                                            updated[sIdx].bulletGroups[gIdx].items.splice(iIdx, 1);
                                            setSections(updated);
                                        }} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                                      </div>
                                    ))}
                                  </div>
                                  <button type="button" onClick={() => {
                                      const updated = [...sections];
                                      if(!updated[sIdx].bulletGroups[gIdx].items) updated[sIdx].bulletGroups[gIdx].items = [];
                                      updated[sIdx].bulletGroups[gIdx].items.push("");
                                      setSections(updated);
                                  }} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1 mt-3"><span className="text-lg leading-none">+</span> Add Point</button>
                               </div>

                               {/* Option 2: Bulk Add */}
                               <div className="p-4 bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl shadow-sm">
                                  <span className="block text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-3">Option 2: Add All at Once</span>
                                  <textarea 
                                    rows="6" 
                                    value={group.items?.join("\n") || ""} 
                                    onChange={(e) => {
                                        const lines = e.target.value.split("\n");
                                        const updated = [...sections];
                                        updated[sIdx].bulletGroups[gIdx].items = lines;
                                        setSections(updated);
                                    }} 
                                    placeholder="Type or paste points here...&#10;Press Enter to go to the next line." 
                                    className="w-full border border-gray-200/80 bg-white rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm" 
                                  />
                               </div>
                             </div>
                        </div>
                      ))}
                      <button type="button" onClick={() => addBulletGroup(sIdx)} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Another Sub-heading Group</button>
                    </div>

                    {/* Multi-paragraph Outros */}
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Outro Paragraphs (After List)</label>
                      {section.outros?.map((outro, oIdx) => (
                        <div key={`outro-${oIdx}`} className="flex items-start gap-3">
                          <textarea rows="2" value={outro} onChange={(e) => updateNestedArray(sIdx, "outros", oIdx, null, e.target.value)} placeholder="Concluding sentence after list... (Supports **bold** and [links](url))" className="flex-1 w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm"></textarea>
                          <button type="button" onClick={() => removeNestedItem(sIdx, "outros", oIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                        </div>
                      ))}
                      <button type="button" onClick={() => addNestedItem(sIdx, "outros", "")} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Outro Paragraph</button>
                    </div>
                  </div>
                )}

                {/* FAQ BLOCK */}
                {section.type === "faq" && (
                  <div className="space-y-4">
                    {section.qas?.map((qa, qIdx) => (
                      <div key={qIdx} className="flex flex-col sm:flex-row items-start gap-3 p-4 bg-white/60 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-[#0072b1]">
                        <div className="flex-1 w-full space-y-3">
                          <input type="text" value={qa.q} onChange={(e) => updateNestedArray(sIdx, "qas", qIdx, "q", e.target.value)} placeholder="Question" className="w-full border border-gray-200/80 rounded-xl p-3 font-extrabold text-sm bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm" />
                          <textarea value={qa.a} onChange={(e) => updateNestedArray(sIdx, "qas", qIdx, "a", e.target.value)} placeholder="Answer (Supports **bold** and [links](url))" className="w-full border border-gray-200/80 rounded-xl p-3 text-sm font-medium bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm" rows="2"></textarea>
                        </div>
                        <button type="button" onClick={() => removeNestedItem(sIdx, "qas", qIdx)} className="self-end sm:self-start shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => addNestedItem(sIdx, "qas", {q:"", a:""})} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Q&A</button>
                  </div>
                )}

                {/* CTA BLOCK */}
                {section.type === "cta" && (
                  <div className="space-y-5 bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                    <input type="text" value={section.title || ""} onChange={(e) => updateSection(sIdx, "title", e.target.value)} placeholder="CTA Title (e.g. Need Assistance with BIS CRS?)" className="w-full border border-blue-200/80 bg-white/90 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all text-sm font-bold text-gray-900 shadow-sm" />
                    <textarea rows="2" value={section.description || ""} onChange={(e) => updateSection(sIdx, "description", e.target.value)} placeholder="Short description... (Supports **bold** and [links](url))" className="w-full border border-blue-200/80 bg-white/90 rounded-xl p-3.5 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all text-sm font-medium text-gray-900 shadow-sm"></textarea>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white/80 border border-blue-100 rounded-xl space-y-3">
                         <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">Primary Button</label>
                         <input type="text" value={section.primaryText || ""} onChange={(e) => updateSection(sIdx, "primaryText", e.target.value)} placeholder="Button Text (e.g. Talk to Expert)" className="w-full border border-gray-200 rounded-lg p-2.5 text-sm font-medium shadow-sm" />
                         <input type="text" value={section.primaryLink || ""} onChange={(e) => updateSection(sIdx, "primaryLink", e.target.value)} placeholder="Link URL (e.g. /contact-us)" className="w-full border border-gray-200 rounded-lg p-2.5 text-sm font-medium shadow-sm" />
                      </div>
                      <div className="p-4 bg-white/80 border border-blue-100 rounded-xl space-y-3">
                         <label className="text-xs font-bold text-blue-800 uppercase tracking-wider">Secondary Button (Optional)</label>
                         <input type="text" value={section.secondaryText || ""} onChange={(e) => updateSection(sIdx, "secondaryText", e.target.value)} placeholder="Button Text (e.g. View Services)" className="w-full border border-gray-200 rounded-lg p-2.5 text-sm font-medium shadow-sm" />
                         <input type="text" value={section.secondaryLink || ""} onChange={(e) => updateSection(sIdx, "secondaryLink", e.target.value)} placeholder="Link URL (e.g. /services)" className="w-full border border-gray-200 rounded-lg p-2.5 text-sm font-medium shadow-sm" />
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <span className="block text-xs font-extrabold text-gray-400 mb-4 uppercase tracking-widest">Select Block to Add:</span>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => addSection("text")} className="cursor-pointer bg-white border border-gray-200/80 hover:border-[#0072b1]/50 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">+ Text Block</button>
              <button type="button" onClick={() => addSection("bullet")} className="cursor-pointer bg-white border border-gray-200/80 hover:border-[#0072b1]/50 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">+ Bullet List</button>
              <button type="button" onClick={() => addSection("numbered")} className="cursor-pointer bg-white border border-gray-200/80 hover:border-[#0072b1]/50 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">+ Numbered List</button>
              <button type="button" onClick={() => addSection("faq")} className="cursor-pointer bg-white border border-gray-200/80 hover:border-[#0072b1]/50 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">+ FAQ Block</button>
              <button type="button" onClick={() => addSection("cta")} className="cursor-pointer bg-blue-50 border border-blue-200/80 hover:border-blue-400 text-blue-800 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">+ CTA Banner</button>
            </div>
          </div>
        </div>

        {/* SECTION 5: SEO META SECTION */}
        <div className="bg-white/85 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
          <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">5</span> 
            SEO Settings
          </h2>
          <div className="space-y-6">
            <div>
              <label className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1"><span>SEO Title</span><span className={`${seoTitle.length > 60 ? 'text-red-500 font-extrabold' : 'text-gray-400'}`}>{seoTitle.length} / 60</span></label>
              <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
            </div>
            <div>
              <label className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1"><span>SEO Description</span><span className={`${seoDescription.length > 160 ? 'text-red-500 font-extrabold' : 'text-gray-400'}`}>{seoDescription.length} / 160</span></label>
              <textarea rows="2" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm"></textarea>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">SEO Keywords (Comma Separated)</label>
                <input type="text" value={seoKeywords} onChange={(e) => setSeoKeywords(e.target.value)} placeholder="e.g. BIS License, Certification" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Main Image Alt Text</label>
                <input type="text" value={mainImageAlt} onChange={(e) => setMainImageAlt(e.target.value)} className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start pt-4">
          <button type="submit" disabled={loading} className="cursor-pointer bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white font-extrabold text-lg px-8 py-4 sm:px-12 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#005f96]/50 w-full sm:w-auto">
            {loading ? (editingId ? "Updating..." : "Publishing...") : (editingId ? "Update Live Blog" : "Publish Live Blog")}
          </button>
        </div>

      </form>
    </div>
  );
}