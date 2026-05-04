// "use client";

// import { useState, useEffect } from "react";
// import { collection, addDoc, updateDoc, doc, serverTimestamp, query, where, getDocs, orderBy, deleteDoc } from "firebase/firestore";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// import { db, storage, auth } from "@/src/lib/firebase"; 

// export default function AdminPanel() {
//   const [user, setUser] = useState(null);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [authLoading, setAuthLoading] = useState(true);
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [loginError, setLoginError] = useState("");

//   const [showAdminModal, setShowAdminModal] = useState(false);
//   const [newAdminEmail, setNewAdminEmail] = useState("");
//   const [newAdminPassword, setNewAdminPassword] = useState(""); 
//   const [adminMsg, setAdminMsg] = useState({ text: "", type: "" });
//   const [adminLoading, setAdminLoading] = useState(false);

//   // CHANGED: Added custom Delete Modal state
//   const [deleteModal, setDeleteModal] = useState({ show: false, id: null, title: "" });

//   const [view, setView] = useState("dashboard"); // Views: "dashboard", "products", "editor"
//   const [publishedProducts, setPublishedProducts] = useState([]);
//   const [totalAdmins, setTotalAdmins] = useState(0); // For Dashboard Stats
//   const [editingId, setEditingId] = useState(null);

//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");
  
//   const [title, setTitle] = useState("");
//   const [slug, setSlug] = useState("");
//   const [seoTitle, setSeoTitle] = useState("");
//   const [seoDescription, setSeoDescription] = useState("");
//   const [seoKeywords, setSeoKeywords] = useState(""); 
//   const [mainImageAlt, setMainImageAlt] = useState("");
  
//   const [heroImageFile, setHeroImageFile] = useState(null);
//   const [heroImageUrlInput, setHeroImageUrlInput] = useState(""); 
//   const [existingHeroImage, setExistingHeroImage] = useState(""); 
  
//   const [heroParagraphs, setHeroParagraphs] = useState([""]);
//   const [sections, setSections] = useState([]);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         const q = query(collection(db, "admins"), where("email", "==", currentUser.email));
//         const querySnapshot = await getDocs(q);
        
//         if (!querySnapshot.empty) {
//           setIsAdmin(true);
//           fetchData(); // Fetch products and admins
//         } else {
//           setIsAdmin(false);
//           await signOut(auth);
//           setLoginError("Access Denied. You are not an authorized admin.");
//         }
//       } else {
//         setUser(null);
//         setIsAdmin(false);
//       }
//       setAuthLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // Fetch Products
//       const pQuery = query(collection(db, "isi_products"), orderBy("createdAt", "desc"));
//       const pSnap = await getDocs(pQuery);
//       const data = pSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setPublishedProducts(data);

//       // Fetch Admins for Dashboard Stat
//       const aQuery = collection(db, "admins");
//       const aSnap = await getDocs(aQuery);
//       setTotalAdmins(aSnap.size);
//     } catch (err) {
//       console.error("Failed to fetch data", err);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setAuthLoading(true);
//     setLoginError("");
//     try {
//       await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
//     } catch (err) {
//       setLoginError("Invalid email or password.");
//       setAuthLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//   };

//   const handleAddAdmin = async (e) => {
//     e.preventDefault();
//     if (!newAdminEmail || !newAdminPassword) return;
//     if (newAdminPassword.length < 6) {
//       setAdminMsg({ text: "Password must be at least 6 characters.", type: "error" });
//       return;
//     }
//     setAdminLoading(true);
//     setAdminMsg({ text: "", type: "" });

//     try {
//       const q = query(collection(db, "admins"), where("email", "==", newAdminEmail.trim().toLowerCase()));
//       const snap = await getDocs(q);
//       if (!snap.empty) {
//         setAdminMsg({ text: "This email is already an admin.", type: "error" });
//         setAdminLoading(false);
//         return;
//       }
//       await addDoc(collection(db, "admins"), {
//         email: newAdminEmail.trim().toLowerCase(),
//         addedBy: user.email,
//         createdAt: serverTimestamp()
//       });
//       await createUserWithEmailAndPassword(auth, newAdminEmail.trim().toLowerCase(), newAdminPassword);
//       setAdminMsg({ text: "Success! Signing out for security...", type: "success" });
//       setTimeout(async () => {
//         await signOut(auth);
//         setShowAdminModal(false);
//         setNewAdminEmail("");
//         setNewAdminPassword("");
//       }, 2000);
//     } catch (err) {
//       setAdminMsg({ text: "Failed to add admin. They might already have an account.", type: "error" });
//       setAdminLoading(false);
//     } 
//   };

//   // CHANGED: Custom, safe delete execution
//   const executeDeleteProduct = async () => {
//     if (!deleteModal.id) return;
//     try {
//       await deleteDoc(doc(db, "isi_products", deleteModal.id));
//       setPublishedProducts(publishedProducts.filter(product => product.id !== deleteModal.id));
//       setDeleteModal({ show: false, id: null, title: "" });
//     } catch (err) {
//       console.error("Failed to delete product:", err);
//       alert("An error occurred while deleting the product.");
//     }
//   };

//   const openCreateNew = () => {
//     setEditingId(null);
//     setTitle(""); setSlug(""); setSeoTitle(""); setSeoDescription(""); setSeoKeywords(""); setMainImageAlt("");
//     setHeroImageFile(null); setHeroImageUrlInput(""); setExistingHeroImage(""); setHeroParagraphs([""]); setSections([]);
//     setSuccessMsg(""); setErrorMsg("");
//     setView("editor");
//   };

//   const openEditor = (product) => {
//     setEditingId(product.id);
//     setTitle(product.title || "");
//     setSlug(product.slug || "");
//     setSeoTitle(product.seo?.title || "");
//     setSeoDescription(product.seo?.description || "");
//     setSeoKeywords(product.seo?.keywords ? product.seo.keywords.join(", ") : "");
//     setMainImageAlt(product.seo?.mainImageAlt || "");
//     setExistingHeroImage(product.hero?.imageUrl || "");
//     setHeroImageFile(null);
//     setHeroImageUrlInput(""); 
//     setHeroParagraphs(product.hero?.description?.length ? product.hero.description : [""]);
    
//     const loadedSections = product.sections || [];
//     const migratedSections = loadedSections.map(sec => {
//       if (sec.type === "bullet") {
//         return { ...sec, bulletGroups: sec.bulletGroups || [{ intro: sec.intro || "", items: sec.items || [""] }] };
//       }
//       if (sec.type === "text") {
//         return { ...sec, stepBlocks: sec.stepBlocks || [] }; 
//       }
//       return sec;
//     });

//     setSections(migratedSections);
//     setSuccessMsg(""); setErrorMsg("");
//     setView("editor");
//   };

//   const generateSlug = () => {
//     const generated = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
//     setSlug(generated);
//   };

//   const handleHeroParagraphChange = (index, value) => {
//     const newParagraphs = [...heroParagraphs];
//     newParagraphs[index] = value;
//     setHeroParagraphs(newParagraphs);
//   };

//   const removeHeroParagraph = (index) => {
//     const newParagraphs = [...heroParagraphs];
//     newParagraphs.splice(index, 1);
//     setHeroParagraphs(newParagraphs);
//   };

//   const addSection = (type) => {
//     const newSection = { type, heading: "" };
//     if (type === "text") { newSection.paragraphs = [""]; newSection.highlightBox = ""; newSection.stepBlocks = []; } 
//     if (type === "bullet") { newSection.bulletGroups = [{ intro: "", items: [""] }]; }
//     if (type === "cards") { newSection.intro = ""; newSection.cards = [{ title: "", text: "" }]; }
//     if (type === "faq") { newSection.heading = "Frequently Asked Questions"; newSection.qas = [{ q: "", a: "" }]; }
//     if (type === "table") { newSection.intro = ""; newSection.note = ""; newSection.rows = [{ sno: "1", particular: "", amount: "", remarks: "" }]; }
//     if (type === "points_list") { newSection.points = [""]; } 
    
//     setSections([...sections, newSection]);
//   };

//   const updateSection = (index, field, value) => {
//     const updated = [...sections];
//     updated[index][field] = value;
//     setSections(updated);
//   };

//   const updateNestedArray = (sectionIndex, arrayName, itemIndex, field, value) => {
//     const updated = [...sections];
//     if (field) updated[sectionIndex][arrayName][itemIndex][field] = value;
//     else updated[sectionIndex][arrayName][itemIndex] = value;
//     setSections(updated);
//   };

//   const removeNestedItem = (sectionIndex, arrayName, itemIndex) => {
//     const updated = [...sections];
//     updated[sectionIndex][arrayName].splice(itemIndex, 1);
//     setSections(updated);
//   };

//   const addNestedItem = (sectionIndex, arrayName, defaultObj) => {
//     const updated = [...sections];
//     updated[sectionIndex][arrayName].push(defaultObj);
//     setSections(updated);
//   };

//   const removeSection = (index) => {
//     const updated = [...sections];
//     updated.splice(index, 1);
//     setSections(updated);
//   };

//   // Text Section Step Blocks
//   const addTextStepBlock = (sIdx) => {
//     const updated = [...sections];
//     if(!updated[sIdx].stepBlocks) updated[sIdx].stepBlocks = [];
//     updated[sIdx].stepBlocks.push({ stepHeading: "", stepItems: [""] });
//     setSections(updated);
//   };
//   const removeTextStepBlock = (sIdx, bIdx) => {
//     const updated = [...sections];
//     updated[sIdx].stepBlocks.splice(bIdx, 1);
//     setSections(updated);
//   };
//   const updateTextStepBlockHeading = (sIdx, bIdx, value) => {
//     const updated = [...sections];
//     updated[sIdx].stepBlocks[bIdx].stepHeading = value;
//     setSections(updated);
//   };
//   const addTextStepItem = (sIdx, bIdx) => {
//     const updated = [...sections];
//     updated[sIdx].stepBlocks[bIdx].stepItems.push("");
//     setSections(updated);
//   };
//   const removeTextStepItem = (sIdx, bIdx, iIdx) => {
//     const updated = [...sections];
//     updated[sIdx].stepBlocks[bIdx].stepItems.splice(iIdx, 1);
//     setSections(updated);
//   };
//   const updateTextStepItem = (sIdx, bIdx, iIdx, value) => {
//     const updated = [...sections];
//     updated[sIdx].stepBlocks[bIdx].stepItems[iIdx] = value;
//     setSections(updated);
//   };

//   // Nested Bullet Groups
//   const updateBulletGroup = (sIdx, gIdx, field, value) => {
//     const updated = [...sections];
//     updated[sIdx].bulletGroups[gIdx][field] = value;
//     setSections(updated);
//   };
//   const updateBulletItem = (sIdx, gIdx, iIdx, value) => {
//     const updated = [...sections];
//     updated[sIdx].bulletGroups[gIdx].items[iIdx] = value;
//     setSections(updated);
//   };
//   const addBulletItem = (sIdx, gIdx) => {
//     const updated = [...sections];
//     updated[sIdx].bulletGroups[gIdx].items.push("");
//     setSections(updated);
//   };
//   const removeBulletItem = (sIdx, gIdx, iIdx) => {
//     const updated = [...sections];
//     updated[sIdx].bulletGroups[gIdx].items.splice(iIdx, 1);
//     setSections(updated);
//   };
//   const addBulletGroup = (sIdx) => {
//     const updated = [...sections];
//     if(!updated[sIdx].bulletGroups) updated[sIdx].bulletGroups = [];
//     updated[sIdx].bulletGroups.push({ intro: "", items: [""] });
//     setSections(updated);
//   };
//   const removeBulletGroup = (sIdx, gIdx) => {
//     const updated = [...sections];
//     updated[sIdx].bulletGroups.splice(gIdx, 1);
//     setSections(updated);
//   };

//   const handlePublish = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMsg("");
//     setSuccessMsg("");

//     try {
//       let finalImageUrl = existingHeroImage;
      
//       // AUTOMATIC CLOUDINARY UPLOAD LOGIC
//       if (heroImageFile) {
//         const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME; 
//         const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

//         if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_UPLOAD_PRESET) {
//           try {
//             const formData = new FormData();
//             formData.append("file", heroImageFile);
//             formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

//             const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
//               method: "POST",
//               body: formData,
//             });
            
//             const data = await res.json();
            
//             if (data.secure_url) {
//               finalImageUrl = data.secure_url; 
//             } else {
//               throw new Error("Cloudinary upload failed. Falling back to Firebase.");
//             }
//           } catch (err) {
//             console.error(err);
//             const imageRef = ref(storage, `isi_products/${Date.now()}_${heroImageFile.name}`);
//             const snapshot = await uploadBytes(imageRef, heroImageFile);
//             finalImageUrl = await getDownloadURL(snapshot.ref);
//           }
//         } else {
//           const imageRef = ref(storage, `isi_products/${Date.now()}_${heroImageFile.name}`);
//           const snapshot = await uploadBytes(imageRef, heroImageFile);
//           finalImageUrl = await getDownloadURL(snapshot.ref);
//         }
//       } else if (heroImageUrlInput.trim() !== "") {
//         finalImageUrl = heroImageUrlInput.trim();
//       }

//       const keywordArray = seoKeywords ? seoKeywords.split(',').map(k => k.trim()).filter(Boolean) : [];

//       const productData = {
//         title, slug,
//         seo: { title: seoTitle, description: seoDescription, keywords: keywordArray, mainImageAlt },
//         hero: { imageUrl: finalImageUrl, description: heroParagraphs.filter((p) => p.trim() !== "") },
//         sections,
//         updatedAt: serverTimestamp(),
//       };

//       if (editingId) {
//         await updateDoc(doc(db, "isi_products", editingId), productData);
//         setSuccessMsg("Product updated successfully!");
//       } else {
//         productData.createdAt = serverTimestamp();
//         await addDoc(collection(db, "isi_products"), productData);
//         setSuccessMsg("Product published successfully to live website!");
//       }
      
//       fetchData();
//       setTimeout(() => setView("products"), 2500); 
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } catch (err) {
//       console.error(err);
//       setErrorMsg("Failed to publish. Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (authLoading) {
//     return (
//       <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#fbfbfd] overflow-hidden">
//         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#0072b1]/15 to-transparent blur-[120px] pointer-events-none"></div>
//         <div className="relative z-10 animate-spin rounded-full h-12 w-12 border-[3px] border-gray-200 border-t-[#0072b1]"></div>
//       </div>
//     );
//   }

//   if (!user || !isAdmin) {
//     return (
//       <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#fbfbfd] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#0072b1] selection:text-white overflow-hidden">
//         <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#0072b1]/15 via-[#005f96]/5 to-transparent blur-[120px] pointer-events-none animate-pulse duration-[7000ms]"></div>
//         <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-[#005f96]/15 via-[#0072b1]/5 to-transparent blur-[120px] pointer-events-none animate-pulse duration-[10000ms]"></div>

//         <div className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-2xl p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60">
//           <div className="text-center mb-10">
//             <div className="w-16 h-16 bg-gradient-to-br from-[#0072b1] to-[#005f96] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#0072b1]/20 transform transition hover:scale-105 duration-300 border border-white/20">
//                <svg className="w-8 h-8 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
//             </div>
//             <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Portal</h2>
//             <p className="mt-3 text-sm text-gray-500 font-medium">Secure access to AN Global Services</p>
//           </div>
//           <form className="space-y-5" onSubmit={handleLogin}>
//             <div>
//               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Email</label>
//               <input type="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-white/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all sm:text-sm font-medium shadow-sm" placeholder="admin@anglobalservices.com" />
//             </div>
//             <div>
//               <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Password</label>
//               <input type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-white/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all sm:text-sm font-medium shadow-sm" placeholder="••••••••" />
//             </div>
//             {loginError && <p className="text-red-500 text-sm font-semibold text-center bg-red-50 py-3 rounded-xl border border-red-100">{loginError}</p>}
//             <button type="submit" className="w-full flex justify-center py-4 px-4 rounded-xl text-white bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] font-bold text-sm shadow-lg shadow-[#0072b1]/20 hover:shadow-[#0072b1]/40 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none border border-[#005f96]/50 cursor-pointer">
//               Sign In to Workspace
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 z-[99999] bg-[#fbfbfd] font-sans selection:bg-[#0072b1]/20 selection:text-gray-900 flex">
      
//       <div className="fixed top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#0072b1]/10 via-[#0072b1]/5 to-transparent blur-[120px] pointer-events-none -z-10 animate-pulse duration-[8000ms]"></div>
//       <div className="fixed bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tl from-[#005f96]/10 via-[#005f96]/5 to-transparent blur-[120px] pointer-events-none -z-10 animate-pulse duration-[12000ms]"></div>

//       {/* CHANGED: Beautiful Custom Delete Confirmation Modal */}
//       {deleteModal.show && (
//         <div className="fixed inset-0 z-[100000] bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
//           <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center transform transition-all border border-white/60">
//             <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-red-100 shadow-inner">
//               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
//             </div>
//             <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">Delete Product?</h3>
//             <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">
//               Are you sure you want to permanently delete <strong className="text-gray-800">{deleteModal.title}</strong>? This action will immediately remove it from the live website.
//             </p>
//             <div className="flex gap-3">
//               <button onClick={() => setDeleteModal({ show: false, id: null, title: "" })} className="cursor-pointer flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors shadow-sm">
//                 Cancel
//               </button>
//               <button onClick={executeDeleteProduct} className="cursor-pointer flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-red-700">
//                 Yes, Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {showAdminModal && (
//         <div className="fixed inset-0 z-[100000] bg-gray-900/30 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300">
//           <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-white/60 transform transition-all">
//             <div className="p-6 border-b border-gray-100/50 flex justify-between items-center bg-white/50">
//               <h3 className="text-xl font-bold text-gray-900 tracking-tight">Authorize Admin</h3>
//               <button onClick={() => {setShowAdminModal(false); setAdminMsg({text:"", type:""});}} className="text-gray-400 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center font-bold transition-colors cursor-pointer">&times;</button>
//             </div>
//             <form onSubmit={handleAddAdmin} className="p-6 space-y-5">
//               <p className="text-sm text-gray-500 font-medium leading-relaxed">
//                 Provide an email and set a temporary password. For security, establishing a new admin will automatically log you out.
//               </p>
//               <div>
//                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Admin Email</label>
//                 <input type="email" required value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} className="w-full border border-gray-200/80 bg-white/50 focus:bg-white rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium shadow-sm" />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Temporary Password</label>
//                 <input type="text" required value={newAdminPassword} onChange={(e) => setNewAdminPassword(e.target.value)} className="w-full border border-gray-200/80 bg-white/50 focus:bg-white rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium shadow-sm" minLength="6" />
//               </div>
//               {adminMsg.text && (
//                 <div className={`p-4 rounded-xl text-sm font-semibold border ${adminMsg.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>{adminMsg.text}</div>
//               )}
//               <button type="submit" disabled={adminLoading} className="w-full bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-2 border border-[#005f96]/50">
//                 {adminLoading ? "Creating Credential..." : "Create Admin Account"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* --- LEFT SIDEBAR --- */}
//       <div className="w-72 bg-white/60 backdrop-blur-3xl border-r border-white/50 h-full flex flex-col shadow-lg relative z-20 flex-shrink-0">
//         <div className="p-6 border-b border-gray-200/50">
//           <div className="w-10 h-10 bg-gradient-to-br from-[#0072b1] to-[#005f96] rounded-xl flex items-center justify-center shadow-md border border-white/20 mb-4">
//             <span className="text-white font-bold text-lg leading-none drop-shadow-sm">AN</span>
//           </div>
//           <h1 className="text-xl font-extrabold text-gray-900 tracking-tight leading-tight">Workspace</h1>
//           <p className="text-[11px] font-bold text-gray-400 mt-1 truncate">{user.email}</p>
//         </div>

//         {/* CHANGED: Enterprise Sidebar Navigation Structure */}
//         <div className="p-4 space-y-2 flex-1">
//           <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-2 mb-3 mt-4">Overview</p>
//           <button onClick={() => setView("dashboard")} className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${view === "dashboard" ? "bg-white shadow-sm border border-gray-200/50 text-[#0072b1]" : "text-gray-600 hover:bg-white/50"}`}>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
//             Dashboard
//           </button>
          
//           <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-2 mb-3 mt-6">Content</p>
//           <button onClick={() => setView("products")} className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${view === "products" ? "bg-white shadow-sm border border-gray-200/50 text-[#0072b1]" : "text-gray-600 hover:bg-white/50"}`}>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
//             Product Pages
//           </button>
//           <button onClick={openCreateNew} className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${view === "editor" && !editingId ? "bg-white shadow-sm border border-gray-200/50 text-[#0072b1]" : "text-gray-600 hover:bg-white/50"}`}>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
//             Create New Product
//           </button>
//         </div>

//         <div className="p-4 space-y-2 border-t border-gray-200/50 bg-gray-50/30">
//           <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-2 mb-3">Settings</p>
//           <button onClick={() => setShowAdminModal(true)} className="cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-white/80 transition-all flex items-center gap-3">
//             <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
//             Manage Admins
//           </button>
//           <button onClick={handleLogout} className="cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 transition-all flex items-center gap-3">
//             <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
//             Logout Securely
//           </button>
//         </div>
//       </div>

//       {/* --- MAIN CONTENT AREA --- */}
//       <div className="flex-1 h-full overflow-y-auto relative z-10 scroll-smooth">
        
//         {/* CHANGED: Premium Dashboard Statistics View */}
//         {view === "dashboard" && (
//           <div className="max-w-6xl mx-auto py-12 px-8 animate-fade-in">
//             <div className="mb-10">
//               <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Overview Dashboard</h2>
//               <p className="text-gray-500 font-medium mt-2 text-lg">Welcome back. Here is what is happening across your platform today.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//               {/* Stat Card 1 */}
//               <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 flex flex-col justify-between hover:shadow-md transition-shadow">
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="w-12 h-12 bg-blue-50 text-[#0072b1] rounded-2xl flex items-center justify-center border border-blue-100">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
//                   </div>
//                   <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">Live</span>
//                 </div>
//                 <div>
//                   <p className="text-sm font-extrabold text-gray-400 uppercase tracking-wider mb-1">Total Products</p>
//                   <h3 className="text-4xl font-black text-gray-900">{publishedProducts.length}</h3>
//                 </div>
//               </div>

//               {/* Stat Card 2 */}
//               <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 flex flex-col justify-between hover:shadow-md transition-shadow">
//                 <div className="flex justify-between items-start mb-6">
//                   <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center border border-purple-100">
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
//                   </div>
//                   <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">Secure</span>
//                 </div>
//                 <div>
//                   <p className="text-sm font-extrabold text-gray-400 uppercase tracking-wider mb-1">Active Admins</p>
//                   <h3 className="text-4xl font-black text-gray-900">{totalAdmins}</h3>
//                 </div>
//               </div>

//               {/* Action Card */}
//               <div onClick={openCreateNew} className="cursor-pointer group bg-gradient-to-br from-[#0072b1] to-[#005f96] p-8 rounded-3xl shadow-[0_8px_30px_rgba(0,114,177,0.2)] border border-[#005f96]/50 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-300">
//                 <div className="w-16 h-16 bg-white/20 text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Create New Product</h3>
//                 <p className="text-blue-100 text-sm font-medium">Launch a new certification page instantly.</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* CHANGED: Product List View (Moved from dashboard) */}
//         {view === "products" && (
//           <div className="max-w-5xl mx-auto py-12 px-8 animate-fade-in">
//             <div className="flex justify-between items-end mb-8">
//               <div>
//                 <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Product Pages</h2>
//                 <p className="text-sm text-gray-500 font-medium mt-1">Manage, edit, or delete your existing live pages.</p>
//               </div>
//               <button onClick={openCreateNew} className="cursor-pointer bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white font-bold px-6 py-3 rounded-xl shadow-md transform hover:-translate-y-0.5 transition-all text-sm">
//                 + Create New Product
//               </button>
//             </div>

//             {publishedProducts.length === 0 ? (
//               <div className="text-center py-20 bg-white/60 backdrop-blur-md rounded-3xl border border-white/60 shadow-sm">
//                  <p className="text-gray-500 font-bold text-lg">No products published yet.</p>
//               </div>
//             ) : (
//               <div className="grid gap-4">
//                 {publishedProducts.map((product) => (
//                   <div key={product.id} className="bg-white/85 backdrop-blur-2xl p-6 rounded-2xl shadow-sm border border-white/60 hover:border-[#0072b1]/30 hover:shadow-md transition-all flex justify-between items-center group">
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
//                       <p className="text-xs font-semibold text-[#0072b1] mt-1 bg-[#0072b1]/10 inline-block px-2 py-0.5 rounded">/{product.slug}</p>
//                     </div>
//                     <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
//                       <button onClick={() => openEditor(product)} className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors shadow-sm">
//                         Edit Page
//                       </button>
//                       {/* CHANGED: Triggers the new custom delete modal */}
//                       <button onClick={() => setDeleteModal({ show: true, id: product.id, title: product.title })} className="cursor-pointer bg-white hover:bg-red-500 text-red-500 hover:text-white font-bold p-2.5 rounded-xl transition-all border border-red-100 hover:border-red-500 shadow-sm flex items-center justify-center" title="Delete Product">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {view === "editor" && (
//           <div className="max-w-4xl mx-auto py-10 px-8 animate-fade-in">
//             <div className="mb-8">
//               <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">{editingId ? "Edit Product" : "Create New Product"}</h2>
//               <p className="text-sm text-gray-500 font-medium mt-1">{editingId ? "Update existing sections and publish." : "Fill out the content blocks below to generate a new page."}</p>
//             </div>

//             {errorMsg && <div className="mb-8 p-4 bg-red-50/90 backdrop-blur-md border-l-4 border-red-500 text-red-700 font-semibold rounded-r-xl shadow-sm flex items-center gap-3"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{errorMsg}</div>}
//             {successMsg && <div className="mb-8 p-4 bg-green-50/90 backdrop-blur-md border-l-4 border-green-500 text-green-800 font-semibold rounded-r-xl shadow-sm flex items-center gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{successMsg}</div>}

//             <form onSubmit={handlePublish} className="space-y-8 pb-20">
              
//               <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
//                 <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
//                   <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">1</span> 
//                   Core Product Identity
//                 </h2>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Product Title (H1)</label>
//                     <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., BIS ISI Certification for Mixers" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">URL Slug</label>
//                     <div className="flex gap-2">
//                       <input type="text" required value={slug} disabled={!!editingId} onChange={(e) => setSlug(e.target.value)} placeholder="e.g., isi-certificate-mixers" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm disabled:opacity-50" />
//                       {!editingId && <button type="button" onClick={generateSlug} className="cursor-pointer bg-gray-800 hover:bg-gray-900 text-white px-5 rounded-xl text-sm font-bold transition-all shadow-md transform hover:-translate-y-0.5 whitespace-nowrap">Auto-Fill</button>}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
//                 <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
//                   <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">2</span> 
//                   Enterprise SEO Settings
//                 </h2>
//                 <div className="space-y-6">
//                   <div>
//                     <label className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
//                       <span>SEO Title</span>
//                       <span className={`${seoTitle.length > 60 ? 'text-red-500 font-extrabold' : 'text-gray-400'}`}>{seoTitle.length} / 60</span>
//                     </label>
//                     <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
//                   </div>
//                   <div>
//                     <label className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
//                       <span>SEO Description</span>
//                       <span className={`${seoDescription.length > 160 ? 'text-red-500 font-extrabold' : 'text-gray-400'}`}>{seoDescription.length} / 160</span>
//                     </label>
//                     <textarea rows="2" value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm"></textarea>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">SEO Keywords (Comma Separated)</label>
//                     <input type="text" value={seoKeywords} onChange={(e) => setSeoKeywords(e.target.value)} placeholder="e.g. BIS License, Lamp Holder Certification, ISI Mark" className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Main Image Alt Text</label>
//                     <input type="text" value={mainImageAlt} onChange={(e) => setMainImageAlt(e.target.value)} className="w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm" />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
//                 <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
//                   <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">3</span> 
//                   Hero Section
//                 </h2>
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
//                       Hero Image {existingHeroImage && "(Leave blank to keep existing)"}
//                     </label>
//                     <div className="flex flex-col gap-5 p-5 border border-gray-200/80 rounded-2xl bg-white/40 shadow-inner">
//                       <div>
//                         <label className="block text-xs font-extrabold text-gray-700 mb-2">Option 1: Paste Image URL (e.g., Cloudinary)</label>
//                         <input type="url" value={heroImageUrlInput} onChange={(e) => { setHeroImageUrlInput(e.target.value); setHeroImageFile(null); }} placeholder="https://res.cloudinary.com/..." className="w-full border border-gray-200/80 bg-white rounded-xl p-3 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium text-gray-900 shadow-sm" />
//                       </div>
//                       <div className="flex items-center gap-4">
//                         <div className="flex-1 border-t border-gray-200/80"></div>
//                         <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">OR</span>
//                         <div className="flex-1 border-t border-gray-200/80"></div>
//                       </div>
//                       <div>
//                         <label className="block text-xs font-extrabold text-gray-700 mb-2">Option 2: Upload File directly (Auto-Uploads to Cloudinary)</label>
//                         <input type="file" accept="image/*" onChange={(e) => { setHeroImageFile(e.target.files[0]); setHeroImageUrlInput(""); }} className="w-full border border-gray-200/80 bg-white rounded-xl p-2.5 text-sm font-medium text-gray-600 file:cursor-pointer file:mr-4 file:py-2.5 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-[#0072b1]/10 file:text-[#0072b1] hover:file:bg-[#0072b1]/20 transition-all cursor-pointer shadow-sm" />
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">
//                       Hero Description Paragraphs 
//                       <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded ml-2 normal-case border border-gray-200/50">Tip: Wrap text in &lt;b&gt;word&lt;/b&gt; to bold</span>
//                     </label>
//                     {heroParagraphs.map((p, idx) => (
//                       <div key={idx} className="flex items-start gap-3 mb-3">
//                         <textarea rows="2" value={p} onChange={(e) => handleHeroParagraphChange(idx, e.target.value)} placeholder={`Paragraph ${idx + 1}`} className="flex-1 w-full border border-gray-200/80 bg-white/60 rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium text-gray-900 shadow-sm"></textarea>
//                         <button type="button" onClick={() => removeHeroParagraph(idx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm" title="Remove Paragraph">&times;</button>
//                       </div>
//                     ))}
//                     <button type="button" onClick={() => setHeroParagraphs([...heroParagraphs, ""])} className="cursor-pointer text-[#0072b1] text-sm font-bold hover:text-[#005f96] flex items-center gap-1.5 transition-colors mt-1">
//                       <span className="bg-[#0072b1]/10 w-5 h-5 flex items-center justify-center rounded-full leading-none border border-[#0072b1]/20">+</span> Add Another Paragraph
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white/85 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:border-gray-200/50 transition-all duration-300">
//                 <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
//                   <span className="bg-[#0072b1]/10 text-[#0072b1] w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm border border-[#0072b1]/10">4</span> 
//                   Page Content Builder
//                 </h2>
                
//                 <div className="space-y-6">
//                   {sections.length === 0 && (
//                     <div className="text-center py-12 border-2 border-dashed border-gray-200/80 rounded-2xl bg-white/40">
//                       <p className="text-gray-500 font-bold text-sm">No content blocks yet.</p>
//                       <p className="text-gray-400 font-medium text-xs mt-1">Select a block type below to build your page.</p>
//                     </div>
//                   )}

//                   {sections.map((section, sIdx) => (
//                     <div key={sIdx} className="p-6 border border-gray-200/80 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm relative group hover:border-[#0072b1]/40 hover:shadow-md transition-all duration-300">
//                       <button type="button" onClick={() => removeSection(sIdx)} className="cursor-pointer absolute top-5 right-5 text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-100 hover:border-red-100 p-2 rounded-lg text-xs font-bold transition-all shadow-sm">Delete Block</button>
//                       <div className="inline-block px-3 py-1.5 bg-gray-100/80 border border-gray-200/50 text-gray-700 text-xs font-extrabold rounded-lg uppercase tracking-wide mb-5 shadow-sm">
//                         {section.type === 'points_list' ? 'Points List' : section.type} Block
//                       </div>
                      
//                       <input type="text" placeholder="Section Heading (H2)" value={section.heading} onChange={(e) => updateSection(sIdx, "heading", e.target.value)} className="w-full border-b-2 border-gray-200/80 bg-transparent py-2 mb-5 font-extrabold text-xl text-gray-900 focus:outline-none focus:border-[#0072b1] transition-colors placeholder-gray-400" />

//                       {/* 1. TEXT BLOCK WITH EMBEDDED STEPS */}
//                       {section.type === "text" && (
//                         <div className="space-y-4">
//                           {section.paragraphs.map((p, pIdx) => (
//                             <div key={pIdx} className="flex items-start gap-3">
//                               <textarea rows="2" value={p} onChange={(e) => updateNestedArray(sIdx, "paragraphs", pIdx, null, e.target.value)} placeholder="Paragraph text" className="flex-1 w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-gray-900 shadow-sm"></textarea>
//                               <button type="button" onClick={() => removeNestedItem(sIdx, "paragraphs", pIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm" title="Remove Paragraph">&times;</button>
//                             </div>
//                           ))}
//                           <button type="button" onClick={() => addNestedItem(sIdx, "paragraphs", "")} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Paragraph</button>
                          
//                           <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 mt-6 shadow-sm">
//                             <label className="block text-xs font-bold text-blue-800 mb-2 uppercase tracking-wider">Optional Highlighted Alert Box</label>
//                             <textarea value={section.highlightBox || ""} onChange={(e) => updateSection(sIdx, "highlightBox", e.target.value)} placeholder="e.g. Estimated Timeline: The BIS process takes 30-45 days..." className="w-full border border-blue-200 bg-white/90 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all text-gray-900 shadow-sm" rows="2"></textarea>
//                           </div>

//                           <div className="mt-8 pt-6 border-t border-gray-200/50">
//                             <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Step Blocks (Rendered as numbered steps)</label>
                            
//                             {section.stepBlocks?.map((block, bIdx) => (
//                               <div key={bIdx} className="p-5 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm mb-4">
//                                 <div className="flex items-start gap-3 mb-4">
//                                   <input type="text" value={block.stepHeading} onChange={(e) => updateTextStepBlockHeading(sIdx, bIdx, e.target.value)} placeholder="Step Block Sub-Heading (e.g. Step-by-Step Certification Process)" className="flex-1 w-full border border-gray-200/80 rounded-xl p-3.5 font-extrabold text-sm bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm" />
//                                   <button type="button" onClick={() => removeTextStepBlock(sIdx, bIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
//                                 </div>
                                
//                                 <div className="space-y-3 pl-4 border-l-2 border-gray-200">
//                                   {block.stepItems.map((item, iIdx) => (
//                                     <div key={iIdx} className="flex items-start gap-3">
//                                       <span className="text-gray-400 font-bold mt-2">{iIdx + 1}.</span>
//                                       <textarea value={item} onChange={(e) => updateTextStepItem(sIdx, bIdx, iIdx, e.target.value)} placeholder="e.g., <b>Application Filing:</b> Submit application..." className="flex-1 w-full border border-gray-200/80 rounded-xl p-3 text-sm font-medium bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm" rows="2"></textarea>
//                                       <button type="button" onClick={() => removeTextStepItem(sIdx, bIdx, iIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
//                                     </div>
//                                   ))}
//                                   <button type="button" onClick={() => addTextStepItem(sIdx, bIdx)} className="cursor-pointer text-xs font-bold text-[#0072b1] hover:text-[#005f96] transition-colors mt-2 flex items-center gap-1"><span className="leading-none">+</span> Add Step to block</button>
//                                 </div>
//                               </div>
//                             ))}
//                             <button type="button" onClick={() => addTextStepBlock(sIdx)} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Step Block</button>
//                           </div>
//                         </div>
//                       )}

//                       {/* 2. BULLET BLOCK WITH NESTED SUBGROUPS */}
//                       {section.type === "bullet" && (
//                         <div className="space-y-6">
//                           {section.bulletGroups?.map((group, gIdx) => (
//                             <div key={gIdx} className="p-5 bg-gray-50/50 rounded-2xl border border-gray-100 shadow-sm relative">
//                               <div className="flex items-start gap-3 mb-4">
//                                 <input type="text" value={group.intro} onChange={(e) => updateBulletGroup(sIdx, gIdx, "intro", e.target.value)} placeholder="Optional Sub-heading / Intro Text" className="flex-1 w-full border border-gray-200/80 bg-white rounded-xl p-3.5 text-sm font-extrabold focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm placeholder:font-medium placeholder:text-gray-400" />
//                                 <button type="button" onClick={() => removeBulletGroup(sIdx, gIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
//                               </div>
                              
//                               <div className="space-y-3">
//                                 {group.items.map((item, iIdx) => (
//                                   <div key={iIdx} className="flex items-center gap-3">
//                                     <span className="text-gray-400 text-xl font-bold drop-shadow-sm">•</span>
//                                     <input type="text" value={item} onChange={(e) => updateBulletItem(sIdx, gIdx, iIdx, e.target.value)} placeholder="Bullet point text" className="flex-1 w-full border border-gray-200/80 bg-white rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm" />
//                                     <button type="button" onClick={() => removeBulletItem(sIdx, gIdx, iIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
//                                   </div>
//                                 ))}
//                               </div>
//                               <button type="button" onClick={() => addBulletItem(sIdx, gIdx)} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1 mt-3 ml-4"><span className="text-lg leading-none">+</span> Add List Item</button>
//                             </div>
//                           ))}
//                           <button type="button" onClick={() => addBulletGroup(sIdx)} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Another Sub-heading Group</button>
//                         </div>
//                       )}

//                       {/* 3. CARDS BLOCK */}
//                       {section.type === "cards" && (
//                         <div className="space-y-5">
//                           <textarea value={section.intro} onChange={(e) => updateSection(sIdx, "intro", e.target.value)} placeholder="Optional intro text before cards" className="w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-gray-900 shadow-sm" rows="2"></textarea>
//                           <div className="space-y-4">
//                             {section.cards.map((card, cIdx) => (
//                               <div key={cIdx} className="flex items-start gap-3 p-4 bg-white/60 rounded-2xl border border-gray-100 shadow-sm">
//                                 <div className="flex-1 flex flex-col md:flex-row gap-3">
//                                   <input type="text" value={card.title} onChange={(e) => updateNestedArray(sIdx, "cards", cIdx, "title", e.target.value)} placeholder="Card Title (Bold)" className="w-full md:w-1/3 border border-gray-200/80 rounded-xl p-3 font-extrabold text-sm focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all bg-white text-gray-900 shadow-sm" />
//                                   <textarea value={card.text} onChange={(e) => updateNestedArray(sIdx, "cards", cIdx, "text", e.target.value)} placeholder="Card Description" className="w-full md:w-2/3 border border-gray-200/80 rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all bg-white text-gray-900 shadow-sm" rows="2"></textarea>
//                                 </div>
//                                 <button type="button" onClick={() => removeNestedItem(sIdx, "cards", cIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
//                               </div>
//                             ))}
//                           </div>
//                           <button type="button" onClick={() => addNestedItem(sIdx, "cards", {title:"", text:""})} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Card</button>
//                         </div>
//                       )}

//                       {/* 4. TABLE BLOCK */}
//                       {section.type === "table" && (
//                         <div className="space-y-5">
//                           <textarea value={section.intro} onChange={(e) => updateSection(sIdx, "intro", e.target.value)} placeholder="Intro paragraph before table (optional)" className="w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-gray-900 shadow-sm" rows="2"></textarea>
//                           <div className="bg-white/60 p-5 border border-gray-100 shadow-sm rounded-2xl space-y-3">
//                             <div className="hidden md:flex gap-2 px-2 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
//                                <div className="w-16">S.No</div>
//                                <div className="w-1/3">Particular</div>
//                                <div className="w-1/4">Amount</div>
//                                <div className="w-1/3">Remarks</div>
//                             </div>
//                             {section.rows.map((row, rIdx) => (
//                               <div key={rIdx} className="flex items-start gap-2">
//                                 <div className="flex-1 flex flex-col md:flex-row gap-2">
//                                   <input type="text" value={row.sno} onChange={(e) => updateNestedArray(sIdx, "rows", rIdx, "sno", e.target.value)} placeholder="S.No" className="w-full md:w-16 border border-gray-200/80 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 bg-white shadow-sm" />
//                                   <input type="text" value={row.particular} onChange={(e) => updateNestedArray(sIdx, "rows", rIdx, "particular", e.target.value)} placeholder="Particular" className="w-full md:w-1/3 border border-gray-200/80 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 bg-white shadow-sm" />
//                                   <input type="text" value={row.amount} onChange={(e) => updateNestedArray(sIdx, "rows", rIdx, "amount", e.target.value)} placeholder="Amount (e.g. ₹1,000)" className="w-full md:w-1/4 border border-gray-200/80 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 bg-white shadow-sm" />
//                                   <input type="text" value={row.remarks} onChange={(e) => updateNestedArray(sIdx, "rows", rIdx, "remarks", e.target.value)} placeholder="Remarks" className="w-full md:w-1/3 border border-gray-200/80 rounded-lg p-2.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 bg-white shadow-sm" />
//                                 </div>
//                                 <button type="button" onClick={() => { const updatedRows = [...section.rows]; updatedRows.splice(rIdx, 1); updateSection(sIdx, "rows", updatedRows); }} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-[42px] w-[42px] rounded-lg flex items-center justify-center font-bold transition-colors shadow-sm" title="Remove Row">&times;</button>
//                               </div>
//                             ))}
//                             <button type="button" onClick={() => addNestedItem(sIdx, "rows", {sno: String(section.rows.length + 1), particular:"", amount:"", remarks:""})} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] mt-4 block transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Table Row</button>
//                           </div>
//                           <textarea value={section.note} onChange={(e) => updateSection(sIdx, "note", e.target.value)} placeholder="Important Note at bottom of table (optional)" className="w-full border border-gray-200/80 bg-white/80 rounded-xl p-3.5 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-gray-900 shadow-sm" rows="2"></textarea>
//                         </div>
//                       )}

//                       {/* 5. FAQ BLOCK */}
//                       {section.type === "faq" && (
//                         <div className="space-y-4">
//                           {section.qas.map((qa, qIdx) => (
//                             <div key={qIdx} className="flex items-start gap-3 p-5 bg-white/60 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-[#0072b1]">
//                               <div className="flex-1 space-y-3">
//                                 <input type="text" value={qa.q} onChange={(e) => updateNestedArray(sIdx, "qas", qIdx, "q", e.target.value)} placeholder="Question (Auto-Indexed on live page)" className="w-full border border-gray-200/80 rounded-xl p-3 font-extrabold text-sm bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm" />
//                                 <textarea value={qa.a} onChange={(e) => updateNestedArray(sIdx, "qas", qIdx, "a", e.target.value)} placeholder="Answer" className="w-full border border-gray-200/80 rounded-xl p-3 text-sm font-medium bg-white focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] text-gray-900 shadow-sm" rows="2"></textarea>
//                               </div>
//                               <button type="button" onClick={() => removeNestedItem(sIdx, "qas", qIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 mt-1 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
//                             </div>
//                           ))}
//                           <button type="button" onClick={() => addNestedItem(sIdx, "qas", {q:"", a:""})} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1"><span className="text-lg leading-none">+</span> Add Q&A</button>
//                         </div>
//                       )}

//                       {/* 6. POINTS LIST BLOCK */}
//                       {section.type === "points_list" && (
//                         <div className="space-y-4">
//                           {section.points.map((point, pIdx) => (
//                             <div key={pIdx} className="flex items-center gap-3">
//                               <input type="text" value={point} onChange={(e) => updateNestedArray(sIdx, "points", pIdx, null, e.target.value)} placeholder="e.g., (i) Chemical composition of aluminium alloy" className="flex-1 w-full border border-gray-200/80 bg-white rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-gray-900 shadow-sm" />
//                               <button type="button" onClick={() => removeNestedItem(sIdx, "points", pIdx)} className="shrink-0 cursor-pointer text-gray-400 hover:text-red-500 bg-white hover:bg-red-50 border border-gray-200/80 hover:border-red-200 h-10 w-10 rounded-xl flex items-center justify-center font-bold transition-colors shadow-sm">&times;</button>
//                             </div>
//                           ))}
//                           <button type="button" onClick={() => addNestedItem(sIdx, "points", "")} className="cursor-pointer text-sm font-bold text-[#0072b1] hover:text-[#005f96] transition-colors flex items-center gap-1 mt-2"><span className="text-lg leading-none">+</span> Add Point</button>
//                         </div>
//                       )}

//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-10 pt-8 border-t border-gray-100">
//                   <span className="block text-xs font-extrabold text-gray-400 mb-4 uppercase tracking-widest">Select Block to Add:</span>
//                   <div className="flex flex-wrap gap-3">
//                     <button type="button" onClick={() => addSection("text")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Text Section</button>
//                     <button type="button" onClick={() => addSection("bullet")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Bullet List</button>
//                     <button type="button" onClick={() => addSection("points_list")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Points List</button>
//                     <button type="button" onClick={() => addSection("cards")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Cards Grid</button>
//                     <button type="button" onClick={() => addSection("table")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ Pricing Table</button>
//                     <button type="button" onClick={() => addSection("faq")} className="cursor-pointer bg-white border border-gray-200/80 shadow-[0_2px_8px_rgb(0,0,0,0.04)] hover:border-[#0072b1]/50 hover:text-[#0072b1] text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all hover:shadow-md transform hover:-translate-y-0.5">+ FAQ Section</button>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-start">
//                 <button type="submit" disabled={loading} className="cursor-pointer bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white font-extrabold text-lg px-12 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#005f96]/50">
//                   {loading ? (editingId ? "Updating..." : "Publishing...") : (editingId ? "Update Live Page" : "Publish Live Page")}
//                 </button>
//               </div>

//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { redirect } from 'next/navigation';

export default function AdminPanelIndex() {
  redirect('/adminpanel/dashboard');
}