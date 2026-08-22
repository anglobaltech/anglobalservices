"use client";

import { useState, useEffect } from "react";
import { collection, addDoc, updateDoc, doc, serverTimestamp, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/src/lib/firebase";
import { useRouter, useSearchParams } from "next/navigation";

export default function Editor() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editingId = searchParams.get("id");

  const [showExitWarning, setShowExitWarning] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);

    const handlePopState = (e) => {
      window.history.pushState(null, null, window.location.pathname);
      setTargetUrl("back");
      setShowExitWarning(true);
    };

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.href && !target.hasAttribute("target")) {
        try {
          const targetPath = new URL(target.href).pathname;
          if (targetPath !== window.location.pathname) {
            e.preventDefault();
            setTargetUrl(target.href);
            setShowExitWarning(true);
          }
        } catch (err) { }
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("click", handleClick, true);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  const confirmExit = () => {
    setShowExitWarning(false);
    if (targetUrl === "back") {
      window.history.go(-2);
    } else if (targetUrl) {
      window.location.href = targetUrl;
    }
  };

  const cancelExit = () => {
    setShowExitWarning(false);
  };

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");
  const [mainImageAlt, setMainImageAlt] = useState("");

  const [heroImageFile, setHeroImageFile] = useState(null);
  const [heroImageUrlInput, setHeroImageUrlInput] = useState("");
  const [existingHeroImage, setExistingHeroImage] = useState("");

  const [heroParagraphs, setHeroParagraphs] = useState([""]);
  const [sections, setSections] = useState([]);

  const [dataTableProductName, setDataTableProductName] = useState("");
  const [dataTableIsNumber, setDataTableIsNumber] = useState("");

  const [openCardBulkImportIdx, setOpenCardBulkImportIdx] = useState(null);
  const [openCardSingleImportIdx, setOpenCardSingleImportIdx] = useState(null);

  const [openFaqBulkImportIdx, setOpenFaqBulkImportIdx] = useState(null);
  const [openFaqSingleImportIdx, setOpenFaqSingleImportIdx] = useState(null);

  useEffect(() => {
    if (editingId) {
      const fetchProduct = async () => {
        try {
          const docRef = doc(db, "isi_products", editingId);
          const snap = await getDoc(docRef);
          if (snap.exists()) {
            const product = { id: snap.id, ...snap.data() };
            setTitle(product.title || "");
            setSlug(product.slug || "");

            setDataTableProductName(product.dataTableProductName || "");
            setDataTableIsNumber(product.dataTableIsNumber || "");

            setSeoTitle(product.seo?.title || "");
            setSeoDescription(product.seo?.description || "");
            setSeoKeywords(product.seo?.keywords ? product.seo.keywords.join(", ") : "");
            setMainImageAlt(product.seo?.mainImageAlt || "");
            setExistingHeroImage(product.hero?.imageUrl || "");
            setHeroParagraphs(product.hero?.description?.length ? product.hero.description : [""]);

            const loadedSections = product.sections || [];
            const migratedSections = loadedSections.map(sec => {
              if (sec.type === "bullet") {
                return { ...sec, bulletGroups: sec.bulletGroups || [{ intro: sec.intro || "", items: sec.items || [""] }] };
              }
              if (sec.type === "text") {
                return { ...sec, stepBlocks: sec.stepBlocks || [] };
              }
              if (sec.type === "faq") {
                return { ...sec, intros: sec.intros || [], outros: sec.outros || [] };
              }
              return sec;
            });
            setSections(migratedSections);
          }
        } catch (err) {
          console.error("Failed to fetch product", err);
          setErrorMsg("Failed to load product data.");
        }
      };
      fetchProduct();
    }
  }, [editingId]);

  const generateSlug = () => {
    const generated = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    setSlug(generated);
  };

  const handleHeroParagraphChange = (index, value) => {
    const newParagraphs = [...heroParagraphs];
    newParagraphs[index] = value;
    setHeroParagraphs(newParagraphs);
  };

  const removeHeroParagraph = (index) => {
    const newParagraphs = [...heroParagraphs];
    newParagraphs.splice(index, 1);
    setHeroParagraphs(newParagraphs);
  };

  const addSection = (type) => {
    const newSection = { type, heading: "" };
    if (type === "text") { newSection.paragraphs = [""]; newSection.highlightBox = ""; newSection.stepBlocks = []; }
    if (type === "bullet") { newSection.bulletGroups = [{ intro: "", items: [""] }]; }
    if (type === "cards") { newSection.intro = ""; newSection.cards = [{ title: "", text: "" }]; }
    if (type === "faq") {
      newSection.heading = "Frequently Asked Questions";
      newSection.intros = [""];
      newSection.qas = [{ q: "", a: "" }];
      newSection.outros = [];
    }
    if (type === "table") { newSection.intro = ""; newSection.note = ""; newSection.rows = [{ sno: "1", particular: "", amount: "", remarks: "" }]; }
    if (type === "points_list") { newSection.points = [""]; }

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

  const addTextStepBlock = (sIdx) => {
    const updated = [...sections];
    if (!updated[sIdx].stepBlocks) updated[sIdx].stepBlocks = [];
    updated[sIdx].stepBlocks.push({ stepHeading: "", stepItems: [""] });
    setSections(updated);
  };
  const removeTextStepBlock = (sIdx, bIdx) => {
    const updated = [...sections];
    updated[sIdx].stepBlocks.splice(bIdx, 1);
    setSections(updated);
  };
  const updateTextStepBlockHeading = (sIdx, bIdx, value) => {
    const updated = [...sections];
    updated[sIdx].stepBlocks[bIdx].stepHeading = value;
    setSections(updated);
  };
  const addTextStepItem = (sIdx, bIdx) => {
    const updated = [...sections];
    updated[sIdx].stepBlocks[bIdx].stepItems.push("");
    setSections(updated);
  };
  const removeTextStepItem = (sIdx, bIdx, iIdx) => {
    const updated = [...sections];
    updated[sIdx].stepBlocks[bIdx].stepItems.splice(iIdx, 1);
    setSections(updated);
  };
  const updateTextStepItem = (sIdx, bIdx, iIdx, value) => {
    const updated = [...sections];
    updated[sIdx].stepBlocks[bIdx].stepItems[iIdx] = value;
    setSections(updated);
  };

  const updateBulletGroup = (sIdx, gIdx, field, value) => {
    const updated = [...sections];
    updated[sIdx].bulletGroups[gIdx][field] = value;
    setSections(updated);
  };
  const updateBulletItem = (sIdx, gIdx, iIdx, value) => {
    const updated = [...sections];
    updated[sIdx].bulletGroups[gIdx].items[iIdx] = value;
    setSections(updated);
  };
  const addBulletItem = (sIdx, gIdx) => {
    const updated = [...sections];
    updated[sIdx].bulletGroups[gIdx].items.push("");
    setSections(updated);
  };
  const removeBulletItem = (sIdx, gIdx, iIdx) => {
    const updated = [...sections];
    updated[sIdx].bulletGroups[gIdx].items.splice(iIdx, 1);
    setSections(updated);
  };
  const addBulletGroup = (sIdx) => {
    const updated = [...sections];
    if (!updated[sIdx].bulletGroups) updated[sIdx].bulletGroups = [];
    updated[sIdx].bulletGroups.push({ intro: "", items: [""] });
    setSections(updated);
  };
  const removeBulletGroup = (sIdx, gIdx) => {
    const updated = [...sections];
    updated[sIdx].bulletGroups.splice(gIdx, 1);
    setSections(updated);
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      let finalImageUrl = existingHeroImage;

      if (heroImageFile) {
        const imageRef = ref(storage, `isi_products_images/${Date.now()}_${heroImageFile.name}`);
        const snapshot = await uploadBytes(imageRef, heroImageFile);
        finalImageUrl = await getDownloadURL(snapshot.ref);
      } else if (heroImageUrlInput.trim() !== "") {
        finalImageUrl = heroImageUrlInput.trim();
      }

      const keywordArray = seoKeywords ? seoKeywords.split(',').map(k => k.trim()).filter(Boolean) : [];

      // Smart Auto-Numbering for Benefit Cards
      // Automatically add "1.", "2.", etc. to cards ONLY if they don't already start with a number.
      const processedSections = sections.map((section) => {
        if (section.type === "cards" && Array.isArray(section.cards)) {
          return {
            ...section,
            cards: section.cards.map((card, idx) => {
              // Regex matches any digit(s) followed by optional space and a period (e.g., "1.", "1. ", "01.")
              const alreadyNumbered = /^\d+\s*\./.test(card.title.trim());
              return {
                ...card,
                title: alreadyNumbered ? card.title : `${idx + 1}. ${card.title}`
              };
            })
          };
        }
        return section;
      });

      const productData = {
        title, slug,
        dataTableProductName,
        dataTableIsNumber,
        seo: { title: seoTitle, description: seoDescription, keywords: keywordArray, mainImageAlt },
        hero: { imageUrl: finalImageUrl, description: heroParagraphs.filter((p) => p.trim() !== "") },
        sections: processedSections,
        updatedAt: serverTimestamp(),
      };

      if (editingId) {
        await updateDoc(doc(db, "isi_products", editingId), productData);
        setSuccessMsg("Product updated successfully!");
      } else {
        productData.createdAt = serverTimestamp();
        await setDoc(doc(db, "isi_products", slug), productData);
        setSuccessMsg("Product published successfully to live website!");
      }

      setTimeout(() => router.push("/adminpanel/products"), 2000);
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to publish. Check console for details.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-8 animate-fade-in">
      {showExitWarning && (
        <div className="fixed inset-0 z-[100000] bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center border border-white/60">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Unsaved Changes!</h3>
            <p className="text-gray-600 mb-6 font-medium text-sm">
              You are about to leave this page. All your unsaved progress will be permanently lost. Are you sure you want to go back?
            </p>
            <div className="flex gap-3">
              <button onClick={cancelExit} className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold transition-colors">
                Cancel
              </button>
              <button onClick={confirmExit} className="flex-1 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-colors shadow-lg shadow-red-500/30">
                Yes, Leave
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">{editingId ? "Edit Product" : "Create New Product"}</h2>
        <p className="text-sm text-gray-500 font-medium mt-1">{editingId ? "Update existing sections and publish." : "Fill out the content blocks below to generate a new page."}</p>
      </div>

      {errorMsg && <div className="mb-8 p-4 bg-red-50/90 backdrop-blur-md border-l-4 border-red-500 text-red-700 font-semibold rounded-r-xl shadow-sm flex items-center gap-3"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{errorMsg}</div>}
      {successMsg && <div className="mb-8 p-4 bg-green-50/90 backdrop-blur-md border-l-4 border-green-500 text-green-800 font-semibold rounded-r-xl shadow-sm flex items-center gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{successMsg}</div>}

      <div className="mb-8 p-5 bg-[#0072b1]/5 border border-[#0072b1]/20 rounded-2xl">
        <h3 className="text-sm font-extrabold text-[#0072b1] uppercase tracking-wider mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Smart Text Formatting Guide
        </h3>
        <ul className="text-sm text-gray-700 space-y-2 font-medium">
          <li>• <strong>To make text Bold:</strong> Wrap the text in double asterisks. Example: <code className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[#0072b1]">**this text will be bold**</code></li>
          <li>• <strong>To add a Blue Link:</strong> Use brackets for the text and parentheses for the URL. Example: <code className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-[#0072b1]">[Click Here](https://google.com)</code></li>
        </ul>
      </div>

      <form onSubmit={handlePublish} className="space-y-8 pb-20">

        <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
          <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">1</span>
            Core Product Identity
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-100">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Data Table: Product Name</label>
              <input type="text" value={dataTableProductName} onChange={(e) => setDataTableProductName(e.target.value)} placeholder="e.g., Domestic Electric Food Mixers" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
              <p className="text-[10px] text-gray-400 mt-1 ml-1 font-medium">This exact name will be displayed in the live Products Table.</p>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Data Table: IS Number</label>
              <input type="text" value={dataTableIsNumber} onChange={(e) => setDataTableIsNumber(e.target.value)} placeholder="e.g., IS 4250" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
              <p className="text-[10px] text-gray-400 mt-1 ml-1 font-medium">This exact IS number will be displayed in the live Products Table.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Product Title (H1)</label>
              <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., BIS ISI Certification for Mixers" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">URL Slug</label>
              <div className="flex gap-2">
                <input type="text" required value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="e.g., isi-certificate-mixers" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
                <button type="button" onClick={generateSlug} className="cursor-pointer bg-gray-800 hover:bg-gray-900 text-white px-5 rounded-xl text-sm font-bold transition-all shadow-md transform hover:-translate-y-0.5 whitespace-nowrap">Auto-Fill</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
          <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">2</span>
            Enterprise SEO Settings
          </h2>
          <div className="space-y-6">
            <div>
              <label className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                <span>SEO Title</span>
                <span className={`${seoTitle.length > 60 ? 'text-red-500 font-extrabold' : 'text-gray-400'}`}>{seoTitle.length} / 60</span>
              </label>
              <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
            </div>
            <div>
              <label className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                <span>SEO Description</span>
                <span className={`${seoDescription.length > 160 ? 'text-red-500 font-extrabold' : 'text-gray-400'}`}>{seoDescription.length} / 160</span>
              </label>
              <textarea rows="2" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm"></textarea>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">SEO Keywords (Comma Separated)</label>
              <input type="text" value={seoKeywords} onChange={(e) => setSeoKeywords(e.target.value)} placeholder="e.g. BIS License, Lamp Holder Certification, ISI Mark" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Main Image Alt Text</label>
              <input type="text" value={mainImageAlt} onChange={(e) => setMainImageAlt(e.target.value)} className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
            </div>
          </div>
        </div>

        <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
          <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">3</span>
            Hero Section
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Hero Image {existingHeroImage && "(Leave blank to keep existing)"}
              </label>
              <div className="flex flex-col gap-5 p-5 border border-gray-200/80 rounded-2xl bg-white/40 shadow-inner">

                {(heroImageFile || heroImageUrlInput || existingHeroImage) && (
                  <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex items-center justify-center mb-2 group">
                    <img
                      src={heroImageFile ? URL.createObjectURL(heroImageFile) : (heroImageUrlInput || existingHeroImage)}
                      alt="Hero Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setHeroImageFile(null);
                        setHeroImageUrlInput("");
                        setExistingHeroImage("");
                      }}
                      className="absolute top-3 right-3 bg-white/90 hover:bg-red-50 text-gray-600 hover:text-red-600 p-2.5 rounded-full shadow-md transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer border border-transparent hover:border-red-200"
                      title="Remove Image"
                    >
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
                  <label className="block text-xs font-extrabold text-gray-700 mb-2">Option 2: Upload File directly (Auto-Uploads to Firebase)</label>
                  <input type="file" accept="image/*" onChange={(e) => { setHeroImageFile(e.target.files[0]); setHeroImageUrlInput(""); }} className="w-full border border-gray-200/80 bg-white rounded-xl p-2.5 text-sm font-medium text-gray-600 file:cursor-pointer file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-[#0072b1]/10 file:text-[#0072b1] hover:file:bg-[#0072b1]/20 transition-all cursor-pointer shadow-sm" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
                Hero Description Paragraphs
                <span className="text-[10px] font-bold bg-gray-100 text-[#0072b1] px-2 py-0.5 rounded ml-2 normal-case border border-blue-200/50">Tip: Press Enter twice between paragraphs to space them out</span>
              </label>
              <div className="space-y-3 mb-3">
                <textarea
                  rows="6"
                  value={heroParagraphs.join("\n\n")}
                  onChange={(e) => {
                    const values = e.target.value.split(/\n\n+/);
                    setHeroParagraphs(values);
                  }}
                  placeholder="Paste or write all paragraphs together here...&#10;&#10;Leave a blank space lines between them by hitting Enter twice."
                  className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
          <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">4</span>
            Page Content Builder
          </h2>

          <div className="space-y-6">
            {sections.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-gray-200/80 rounded-2xl bg-white/40">
                <p className="text-gray-500 font-bold text-sm">No content blocks yet.</p>
                <p className="text-gray-400 font-medium text-xs mt-1">Select a block type below to build your page.</p>
              </div>
            )}

            {sections.map((section, sIdx) => (
              <div key={sIdx} className="p-6 border border-gray-200/80 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm relative group hover:border-[#0072b1]/40 hover:shadow-md transition-all duration-300">
                <button type="button" onClick={() => removeSection(sIdx)} className="cursor-pointer absolute top-5 right-5 text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-100 hover:border-red-100 p-2 rounded-lg text-xs font-bold transition-all shadow-sm">Delete Block</button>
                <div className="inline-block px-3 py-1.5 bg-gray-100/80 border border-gray-200/50 text-gray-700 text-xs font-extrabold rounded-lg uppercase tracking-wide mb-5 shadow-sm">
                  {section.type === 'points_list' ? 'Points List' : section.type} Block
                </div>

                <input type="text" placeholder="Section Heading (H2)" value={section.heading} onChange={(e) => updateSection(sIdx, "heading", e.target.value)} className="w-full border-b-2 border-gray-200/80 bg-transparent py-2 mb-5 font-extrabold text-xl text-gray-900 focus:outline-none focus:border-[#0072b1] transition-colors placeholder-gray-400" />

                {/* 1. TEXT BLOCK WITH EMBEDDED STEPS */}
                {section.type === "text" && (
                  <div className="space-y-4">
                    {section.paragraphs.map((p, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <textarea
                          rows="2"
                          value={p}
                          onChange={(e) => updateNestedArray(sIdx, "paragraphs", pIdx, null, e.target.value)}
                          placeholder="Paragraph text (Use **bold** and [link](url))"
                          className="flex-1 w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-gray-900 shadow-sm"
                        ></textarea>
                        <button
                          type="button"
                          onClick={() => removeNestedItem(sIdx, "paragraphs", pIdx)}
                          className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm"
                          title="Remove Paragraph"
                        >&times;</button>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => addNestedItem(sIdx, "paragraphs", "")}
                      className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"
                    >
                      <span className="text-lg leading-none">+</span> Add Paragraph
                    </button>

                    {/* NEW: BULK PASTE CONTAINER */}
                    <div className="mt-4 p-4 bg-gray-50 border border-dashed border-gray-200 rounded-xl">
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">⚡ Bulk Paste: Add Multiple Paragraphs at Once</label>
                      <textarea
                        rows="4"
                        placeholder="Paste your content here. Hit Enter twice (leave an empty line) to separate paragraphs..."
                        className="w-full border border-gray-200 bg-white rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm font-medium"
                        id={`bulk-text-import-${sIdx}`}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const textareaEl = document.getElementById(`bulk-text-import-${sIdx}`);
                          if (textareaEl && textareaEl.value.trim()) {
                            // Splits by two or more newlines to identify distinct paragraphs
                            const parsedParagraphs = textareaEl.value.split(/\n\n+/).filter(x => x.trim() !== "");
                            const updatedSecs = [...sections];
                            // Merges new paragraphs with the existing array
                            updatedSecs[sIdx].paragraphs = [...updatedSecs[sIdx].paragraphs.filter(p => p.trim() !== ""), ...parsedParagraphs];
                            setSections(updatedSecs);
                            textareaEl.value = "";
                          }
                        }}
                        className="mt-3 text-xs font-bold bg-[#0072b1] hover:bg-[#005f96] text-white px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                      >
                        Process & Append Paragraphs
                      </button>
                    </div>

                    <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 mt-6 shadow-sm">
                      <label className="block text-xs font-bold text-blue-800 mb-2 uppercase tracking-wider">Optional Highlighted Alert Box</label>
                      <textarea
                        value={section.highlightBox || ""}
                        onChange={(e) => updateSection(sIdx, "highlightBox", e.target.value)}
                        placeholder="e.g. Estimated Timeline: The BIS process takes 30-45 days..."
                        className="w-full border border-blue-200 bg-white/90 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all text-gray-900 shadow-sm"
                        rows="2"
                      ></textarea>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200/50">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Step Blocks (Rendered as numbered steps)</label>

                      {section.stepBlocks?.map((block, bIdx) => (
                        <div key={bIdx} className="p-5 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm mb-4">
                          <div className="flex items-start gap-3 mb-4">
                            <input
                              type="text"
                              value={block.stepHeading}
                              onChange={(e) => updateTextStepBlockHeading(sIdx, bIdx, e.target.value)}
                              placeholder="Step Block Sub-Heading"
                              className="flex-1 w-full border border-gray-200/80 rounded-xl p-3.5 font-extrabold text-sm bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm"
                            />
                            <button
                              type="button"
                              onClick={() => removeTextStepBlock(sIdx, bIdx)}
                              className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm"
                            >&times;</button>
                          </div>

                          <div className="space-y-3 pl-4 border-l-2 border-gray-200">
                            {block.stepItems.map((item, iIdx) => (
                              <div key={iIdx} className="flex items-start gap-3">
                                <span className="text-gray-400 font-bold mt-2">{iIdx + 1}.</span>
                                <textarea
                                  value={item}
                                  onChange={(e) => updateTextStepItem(sIdx, bIdx, iIdx, e.target.value)}
                                  placeholder="Step description..."
                                  className="flex-1 w-full border border-gray-200/80 rounded-xl p-3 text-sm font-medium bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm"
                                  rows="2"
                                ></textarea>
                                <button
                                  type="button"
                                  onClick={() => removeTextStepItem(sIdx, bIdx, iIdx)}
                                  className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm"
                                >&times;</button>
                              </div>
                            ))}

                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={() => addTextStepItem(sIdx, bIdx)}
                                className="cursor-pointer text-xs font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"
                              >
                                <span className="leading-none">+</span> Add Step to block
                              </button>
                            </div>

                            {/* Step Bulk Import */}
                            <div className="mt-4 p-4 bg-white border border-dashed border-gray-200 rounded-xl shadow-sm">
                              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">⚡ Paste Multiple Steps</label>
                              <textarea
                                rows="3"
                                placeholder="Paste steps here (one per line)..."
                                className="w-full border border-gray-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 bg-gray-50/30"
                                id={`bulk-step-import-${sIdx}-${bIdx}`}
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const textareaEl = document.getElementById(`bulk-step-import-${sIdx}-${bIdx}`);
                                  if (textareaEl && textareaEl.value.trim()) {
                                    const lines = textareaEl.value.split("\n").map(l => l.trim()).filter(Boolean);
                                    if (lines.length > 0) {
                                      const updated = [...sections];
                                      const currentItems = updated[sIdx].stepBlocks[bIdx].stepItems.filter(item => item.trim() !== "");
                                      updated[sIdx].stepBlocks[bIdx].stepItems = [...currentItems, ...lines];
                                      setSections(updated);
                                      textareaEl.value = "";
                                    }
                                  }
                                }}
                                className="mt-2 text-xs font-bold bg-[#0072b1] hover:bg-[#005f96] text-white px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                              >
                                Parse & Append
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => addTextStepBlock(sIdx)}
                        className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"
                      >
                        <span className="text-lg leading-none">+</span> Add Step Block
                      </button>
                    </div>
                  </div>
                )}

                {/* 2. BULLET BLOCK WITH NESTED SUBGROUPS */}
                {section.type === "bullet" && (
                  <div className="space-y-6">
                    {section.bulletGroups?.map((group, gIdx) => (
                      <div key={gIdx} className="p-5 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm relative">
                        <div className="flex items-start gap-3 mb-4">
                          <input type="text" value={group.intro} onChange={(e) => updateBulletGroup(sIdx, gIdx, "intro", e.target.value)} placeholder="Sub-heading / Group Intro Text" className="flex-1 w-full border border-gray-200/80 bg-white rounded-xl p-3.5 text-sm font-extrabold focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm placeholder:font-medium placeholder:text-gray-400" />
                          <button type="button" onClick={() => removeBulletGroup(sIdx, gIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Upload All Bullet Points At Once (One Point Per Line)</label>
                          <textarea
                            rows="5"
                            value={group.items?.join("\n") || ""}
                            onChange={(e) => {
                              const lines = e.target.value.split("\n");
                              const updatedSecs = [...sections];
                              updatedSecs[sIdx].bulletGroups[gIdx].items = lines;
                              setSections(updatedSecs);
                            }}
                            placeholder="Bullet Point 1&#10;Bullet Point 2&#10;Bullet Point 3"
                            className="w-full border border-gray-200 bg-white rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm"
                          />
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={() => addBulletGroup(sIdx)} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Another Sub-heading Group</button>
                  </div>
                )}

                {/* 3. CARDS BLOCK */}
                {section.type === "cards" && (
                  <div className="space-y-5">
                    <textarea value={section.intro} onChange={(e) => updateSection(sIdx, "intro", e.target.value)} placeholder="Optional intro text before cards" className="w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-gray-900 shadow-sm" rows="2"></textarea>
                    <div className="space-y-4">
                      {section.cards.map((card, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-3 p-4 bg-white/60 rounded-2xl border border-gray-100 shadow-sm">
                          <div className="flex-1 flex flex-col md:flex-row gap-3">
                            <input
                              type="text"
                              value={card.title}
                              onChange={(e) => updateNestedArray(sIdx, "cards", cIdx, "title", e.target.value)}
                              onPaste={(e) => {
                                const pastedData = e.clipboardData.getData('text');
                                if (!pastedData || !pastedData.includes('\n')) return;

                                e.preventDefault();
                                const blocks = pastedData.split(/\n\s*\n/).filter(b => b.trim());
                                const updatedSecs = [...sections];

                                // Process the first block into the current card
                                const firstLines = blocks[0].split('\n').map(l => l.trim()).filter(Boolean);
                                updatedSecs[sIdx].cards[cIdx].title = firstLines[0] || "";
                                updatedSecs[sIdx].cards[cIdx].text = firstLines.slice(1).join('\n') || "";

                                // If there are multiple blocks, generate new cards automatically
                                if (blocks.length > 1) {
                                  const newCards = blocks.slice(1).map(block => {
                                    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
                                    return {
                                      title: lines[0] || "",
                                      text: lines.slice(1).join('\n') || ""
                                    };
                                  }).filter(c => c.title || c.text);
                                  updatedSecs[sIdx].cards.splice(cIdx + 1, 0, ...newCards);
                                }
                                setSections(updatedSecs);
                              }}
                              placeholder="Card Title (Paste here to auto-fill description!)"
                              className="w-full md:w-1/3 border border-gray-200/80 rounded-xl p-3 font-extrabold text-sm focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all bg-white text-gray-900 shadow-sm"
                            />
                            <textarea value={card.text} onChange={(e) => updateNestedArray(sIdx, "cards", cIdx, "text", e.target.value)} placeholder="Card Description (Use **bold** and [link](url))" className="w-full md:w-2/3 border border-gray-200/80 rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all bg-white text-gray-900 shadow-sm" rows="2"></textarea>
                          </div>
                          <button type="button" onClick={() => removeNestedItem(sIdx, "cards", cIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 mt-2">
                      <button type="button" onClick={() => addNestedItem(sIdx, "cards", { title: "", text: "" })} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Empty Card</button>
                      <button
                        type="button"
                        onClick={() => {
                          setOpenCardSingleImportIdx(openCardSingleImportIdx === sIdx ? null : sIdx);
                          setOpenCardBulkImportIdx(null);
                        }}
                        className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"
                      >
                        <span className="text-lg leading-none">+</span> Add One Card (Paste)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setOpenCardBulkImportIdx(openCardBulkImportIdx === sIdx ? null : sIdx);
                          setOpenCardSingleImportIdx(null);
                        }}
                        className="cursor-pointer text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                      >
                        ⚡ Bulk Import Cards
                      </button>
                    </div>

                    {openCardSingleImportIdx === sIdx && (
                      <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 mt-4 shadow-inner">
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">+ Paste Single Card (Title on line 1, Description below)</label>
                        <textarea
                          rows="3"
                          placeholder="Example:&#10;My Great Title&#10;This is the description for my great title..."
                          className="w-full border border-gray-200 bg-white rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm font-medium"
                          id={`single-card-import-${sIdx}`}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const textareaEl = document.getElementById(`single-card-import-${sIdx}`);
                            if (textareaEl && textareaEl.value.trim()) {
                              const lines = textareaEl.value.trim().split('\n').map(l => l.trim()).filter(Boolean);
                              if (lines.length > 0) {
                                const newCard = { title: lines[0], text: lines.slice(1).join('\n') };
                                const updatedSecs = [...sections];
                                updatedSecs[sIdx].cards.push(newCard);
                                setSections(updatedSecs);
                                textareaEl.value = "";
                                setOpenCardSingleImportIdx(null);
                              }
                            }
                          }}
                          className="mt-3 text-xs font-bold bg-[#0072b1] hover:bg-[#005f96] text-white px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                        >
                          Process & Append Card
                        </button>
                      </div>
                    )}

                    {openCardBulkImportIdx === sIdx && (
                      <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 mt-4 shadow-inner">
                        <label className="block text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">⚡ Bulk Paste: Add Multiple Cards at Once</label>
                        <textarea
                          rows="6"
                          placeholder="Paste your content here. Hit Enter twice (leave an empty line) to separate cards...&#10;&#10;1. First Title&#10;First description...&#10;&#10;2. Second Title&#10;Second description..."
                          className="w-full border border-blue-200 bg-white rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 text-gray-900 shadow-sm font-medium"
                          id={`bulk-card-import-${sIdx}`}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const textareaEl = document.getElementById(`bulk-card-import-${sIdx}`);
                            if (textareaEl && textareaEl.value.trim()) {
                              const blocks = textareaEl.value.split(/\n\s*\n/).filter(b => b.trim());
                              const newCards = blocks.map(block => {
                                const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
                                return { title: lines[0] || "", text: lines.slice(1).join('\n') || "" };
                              }).filter(c => c.title || c.text);

                              if (newCards.length > 0) {
                                const updatedSecs = [...sections];
                                updatedSecs[sIdx].cards = [...updatedSecs[sIdx].cards, ...newCards];
                                setSections(updatedSecs);
                                textareaEl.value = "";
                                setOpenCardBulkImportIdx(null);
                              }
                            }
                          }}
                          className="mt-3 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                        >
                          Process & Append Cards
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* 4. TABLE BLOCK */}
                {section.type === "table" && (
                  <div className="space-y-5">
                    <textarea value={section.intro} onChange={(e) => updateSection(sIdx, "intro", e.target.value)} placeholder="Intro paragraph before table (optional)" className="w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-gray-900 shadow-sm" rows="2"></textarea>
                    <div className="bg-white/60 p-5 border border-gray-100 shadow-sm rounded-2xl space-y-3">
                      <div className="hidden md:flex gap-2 px-2 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                        <div className="w-16">S.No</div>
                        <div className="w-1/3">Particular</div>
                        <div className="w-1/4">Amount</div>
                        <div className="w-1/3">Remarks</div>
                      </div>
                      {section.rows.map((row, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2">
                          <div className="flex-1 flex flex-col md:flex-row gap-2">
                            <input type="text" value={row.sno} onChange={(e) => updateNestedArray(sIdx, "rows", rIdx, "sno", e.target.value)} placeholder="S.No" className="w-full md:w-16 border border-gray-200/80 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 bg-white shadow-sm" />
                            <input type="text" value={row.particular} onChange={(e) => updateNestedArray(sIdx, "rows", rIdx, "particular", e.target.value)} placeholder="Particular" className="w-full md:w-1/3 border border-gray-200/80 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 bg-white shadow-sm" />
                            <input type="text" value={row.amount} onChange={(e) => updateNestedArray(sIdx, "rows", rIdx, "amount", e.target.value)} placeholder="Amount (e.g. ₹1,000)" className="w-full md:w-1/4 border border-gray-200/80 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 bg-white shadow-sm" />
                            <input type="text" value={row.remarks} onChange={(e) => updateNestedArray(sIdx, "rows", rIdx, "remarks", e.target.value)} placeholder="Remarks" className="w-full md:w-1/3 border border-gray-200/80 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 bg-white shadow-sm" />
                          </div>
                          <button type="button" onClick={() => { const updatedRows = [...section.rows]; updatedRows.splice(rIdx, 1); updateSection(sIdx, "rows", updatedRows); }} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-[42px] w-[42px] rounded-lg flex items-center justify-center font-bold transition-colors shadow-sm" title="Remove Row">&times;</button>
                        </div>
                      ))}
                      <button type="button" onClick={() => addNestedItem(sIdx, "rows", { sno: String(section.rows.length + 1), particular: "", amount: "", remarks: "" })} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] mt-4 block transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Table Row</button>
                    </div>
                    <textarea value={section.note} onChange={(e) => updateSection(sIdx, "note", e.target.value)} placeholder="Important Note at bottom of table (optional)" className="w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-gray-900 shadow-sm" rows="2"></textarea>
                  </div>
                )}

                {/* 5. FAQ BLOCK */}
                {section.type === "faq" && (
                  <div className="space-y-6">
                    <div className="bg-white/50 p-4 rounded-xl border border-gray-200/50 space-y-3">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Intro Paragraphs (Above FAQs)</label>
                      {section.intros?.map((intro, iIdx) => (
                        <div key={`intro-${iIdx}`} className="flex items-start gap-3">
                          <textarea value={intro} onChange={(e) => updateNestedArray(sIdx, "intros", iIdx, null, e.target.value)} placeholder="Intro paragraph before questions" className="flex-1 w-full border border-gray-200/80 rounded-xl p-3 text-sm font-medium bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm" rows="2"></textarea>
                          <button type="button" onClick={() => removeNestedItem(sIdx, "intros", iIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                        </div>
                      ))}
                      <button type="button" onClick={() => addNestedItem(sIdx, "intros", "")} className="cursor-pointer text-xs font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="leading-none">+</span> Add Intro Paragraph</button>
                    </div>

                    <div className="space-y-4 border-l-4 border-l-[#0072b1] pl-4">
                      {section.qas.map((qa, qIdx) => (
                        <div key={qIdx} className="flex items-start gap-3 p-5 bg-white/60 rounded-2xl border border-gray-100 shadow-sm">
                          <div className="flex-1 space-y-3">
                            <input
                              type="text"
                              value={qa.q}
                              onChange={(e) => updateNestedArray(sIdx, "qas", qIdx, "q", e.target.value)}
                              onPaste={(e) => {
                                const pastedData = e.clipboardData.getData('text');
                                if (!pastedData || !pastedData.includes('\n')) return;

                                e.preventDefault();
                                const blocks = pastedData.split(/\n\s*\n/).filter(b => b.trim());
                                const updatedSecs = [...sections];

                                // Process the first block into the current QA
                                const firstLines = blocks[0].split('\n').map(l => l.trim()).filter(Boolean);
                                updatedSecs[sIdx].qas[qIdx].q = firstLines[0] || "";
                                updatedSecs[sIdx].qas[qIdx].a = firstLines.slice(1).join('\n') || "";

                                // Generate new QAs if multiple blocks
                                if (blocks.length > 1) {
                                  const newQas = blocks.slice(1).map(block => {
                                    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
                                    return {
                                      q: lines[0] || "",
                                      a: lines.slice(1).join('\n') || ""
                                    };
                                  }).filter(c => c.q || c.a);
                                  updatedSecs[sIdx].qas.splice(qIdx + 1, 0, ...newQas);
                                }
                                setSections(updatedSecs);
                              }}
                              placeholder="Question (Paste here to auto-fill answer!)"
                              className="w-full border border-gray-200/80 rounded-xl p-3 font-extrabold text-sm bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm"
                            />
                            <textarea value={qa.a} onChange={(e) => updateNestedArray(sIdx, "qas", qIdx, "a", e.target.value)} placeholder="Answer (Use **bold** and [link](url))" className="w-full border border-gray-200/80 rounded-xl p-3 text-sm font-medium bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm" rows="2"></textarea>
                          </div>
                          <button type="button" onClick={() => removeNestedItem(sIdx, "qas", qIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                        </div>
                      ))}

                      <div className="flex items-center gap-6 mt-2">
                        <button type="button" onClick={() => addNestedItem(sIdx, "qas", { q: "", a: "" })} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Empty Q&A</button>
                        <button
                          type="button"
                          onClick={() => {
                            setOpenFaqSingleImportIdx(openFaqSingleImportIdx === sIdx ? null : sIdx);
                            setOpenFaqBulkImportIdx(null);
                          }}
                          className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"
                        >
                          <span className="text-lg leading-none">+</span> Add One FAQ (Paste)
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setOpenFaqBulkImportIdx(openFaqBulkImportIdx === sIdx ? null : sIdx);
                            setOpenFaqSingleImportIdx(null);
                          }}
                          className="cursor-pointer text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
                        >
                          ⚡ Bulk Import FAQs
                        </button>
                      </div>

                      {openFaqSingleImportIdx === sIdx && (
                        <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 mt-4 shadow-inner">
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">+ Paste Single FAQ (Question on line 1, Answer below)</label>
                          <textarea
                            rows="3"
                            placeholder="Example:&#10;What is this product?&#10;This product is exactly what you need for your project."
                            className="w-full border border-gray-200 bg-white rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm font-medium"
                            id={`single-faq-import-${sIdx}`}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const textareaEl = document.getElementById(`single-faq-import-${sIdx}`);
                              if (textareaEl && textareaEl.value.trim()) {
                                const lines = textareaEl.value.trim().split('\n').map(l => l.trim()).filter(Boolean);
                                if (lines.length > 0) {
                                  const newQa = { q: lines[0], a: lines.slice(1).join('\n') };
                                  const updatedSecs = [...sections];
                                  updatedSecs[sIdx].qas.push(newQa);
                                  setSections(updatedSecs);
                                  textareaEl.value = "";
                                  setOpenFaqSingleImportIdx(null);
                                }
                              }
                            }}
                            className="mt-3 text-xs font-bold bg-[#0072b1] hover:bg-[#005f96] text-white px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                          >
                            Process & Append FAQ
                          </button>
                        </div>
                      )}

                      {openFaqBulkImportIdx === sIdx && (
                        <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 mt-4 shadow-inner">
                          <label className="block text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">⚡ Bulk Paste: Add Multiple FAQs at Once</label>
                          <textarea
                            rows="6"
                            placeholder="Paste your content here. Hit Enter twice (leave an empty line) to separate FAQs...&#10;&#10;1. First Question?&#10;First answer here...&#10;&#10;2. Second Question?&#10;Second answer here..."
                            className="w-full border border-blue-200 bg-white rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 text-gray-900 shadow-sm font-medium"
                            id={`bulk-faq-import-${sIdx}`}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const textareaEl = document.getElementById(`bulk-faq-import-${sIdx}`);
                              if (textareaEl && textareaEl.value.trim()) {
                                const blocks = textareaEl.value.split(/\n\s*\n/).filter(b => b.trim());
                                const newQas = blocks.map(block => {
                                  const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
                                  return { q: lines[0] || "", a: lines.slice(1).join('\n') || "" };
                                }).filter(c => c.q || c.a);

                                if (newQas.length > 0) {
                                  const updatedSecs = [...sections];
                                  updatedSecs[sIdx].qas = [...updatedSecs[sIdx].qas, ...newQas];
                                  setSections(updatedSecs);
                                  textareaEl.value = "";
                                  setOpenFaqBulkImportIdx(null);
                                }
                              }
                            }}
                            className="mt-3 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-all cursor-pointer shadow-sm"
                          >
                            Process & Append FAQs
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="bg-white/50 p-4 rounded-xl border border-gray-200/50 space-y-3">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Outro Paragraphs (Below FAQs)</label>
                      {section.outros?.map((outro, oIdx) => (
                        <div key={`outro-${oIdx}`} className="flex items-start gap-3">
                          <textarea value={outro} onChange={(e) => updateNestedArray(sIdx, "outros", oIdx, null, e.target.value)} placeholder="Outro paragraph after questions" className="flex-1 w-full border border-gray-200/80 rounded-xl p-3 text-sm font-medium bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm" rows="2"></textarea>
                          <button type="button" onClick={() => removeNestedItem(sIdx, "outros", oIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                        </div>
                      ))}
                      <button type="button" onClick={() => addNestedItem(sIdx, "outros", "")} className="cursor-pointer text-xs font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="leading-none">+</span> Add Outro Paragraph</button>
                    </div>
                  </div>
                )}

                {/* 6. POINTS LIST BLOCK */}
                {section.type === "points_list" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Option A: One by one */}
                      <div className="p-4 bg-white/50 border border-gray-200 rounded-2xl shadow-sm">
                        <span className="block text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-3">Option 1: Add One by One</span>
                        <div className="space-y-3">
                          {section.points.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-3">
                              <input type="text" value={point} onChange={(e) => updateNestedArray(sIdx, "points", pIdx, null, e.target.value)} placeholder="e.g., (i) Chemical composition of alloy" className="flex-1 w-full border border-gray-200/80 bg-white rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm" />
                              <button type="button" onClick={() => removeNestedItem(sIdx, "points", pIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
                            </div>
                          ))}
                        </div>
                        <button type="button" onClick={() => addNestedItem(sIdx, "points", "")} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1 mt-3"><span className="text-lg leading-none">+</span> Add Point</button>
                      </div>

                      {/* Option B: Add all at once */}
                      <div className="p-4 bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl shadow-sm">
                        <span className="block text-xs font-extrabold text-gray-500 uppercase tracking-wider mb-3">Option 2: Add All at Once (One Point Per Line)</span>
                        <textarea
                          rows="6"
                          value={section.points.join("\n")}
                          onChange={(e) => {
                            const lines = e.target.value.split("\n");
                            const updatedSecs = [...sections];
                            updatedSecs[sIdx].points = lines;
                            setSections(updatedSecs);
                          }}
                          placeholder="Type or paste points here...&#10;Press Enter to go to the next line for a new point."
                          className="w-full border border-gray-200 bg-white rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm"
                        />
                      </div>

                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <span className="block text-xs font-extrabold text-gray-400 mb-4 uppercase tracking-widest">Select Block to Add:</span>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => addSection("text")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Text Section</button>
              <button type="button" onClick={() => addSection("bullet")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Bullet List</button>
              <button type="button" onClick={() => addSection("points_list")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Points List</button>
              <button type="button" onClick={() => addSection("cards")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Benefit Card</button>
              <button type="button" onClick={() => addSection("table")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Pricing Table</button>
              <button type="button" onClick={() => addSection("faq")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ FAQ Section</button>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <button type="submit" disabled={loading} className="cursor-pointer bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white font-extrabold text-lg px-12 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#005f96]/50">
            {loading ? (editingId ? "Updating..." : "Publishing...") : (editingId ? "Update Live Page" : "Publish Live Page")}
          </button>
        </div>

      </form>
    </div>
  );
}