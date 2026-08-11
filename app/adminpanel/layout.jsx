"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; 
import { collection, addDoc, serverTimestamp, query, where, getDocs, deleteDoc, doc, orderBy } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword as createSecondaryUser, signOut as signOutSecondary } from "firebase/auth";
import { db, auth } from "@/src/lib/firebase"; 

export default function AdminLayout({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminModalView, setAdminModalView] = useState("list"); 
  const [adminsList, setAdminsList] = useState([]);
  
  // Custom Modals
  const [deleteAdminModal, setDeleteAdminModal] = useState({ show: false, id: null, email: "" });
  const [restoreAdminModal, setRestoreAdminModal] = useState({ show: false, email: "" });
  
  // Mobile Hamburger Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState(""); 
  const [adminMsg, setAdminMsg] = useState({ text: "", type: "" });
  const [adminLoading, setAdminLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const q = query(collection(db, "admins"), where("email", "==", currentUser.email));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          await signOut(auth);
          setLoginError("Access Denied. Your admin privileges have been revoked.");
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setLoginError("");
    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (err) {
      setLoginError("Invalid email or password.");
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsMobileMenuOpen(false); // Closes menu on logout
    await signOut(auth);
    router.push("/adminpanel");
  };

  const openManageAdmins = async () => {
    setIsMobileMenuOpen(false); // Auto-close sidebar on mobile
    setShowAdminModal(true);
    setAdminModalView("list");
    setAdminMsg({ text: "", type: "" });
    try {
      const q = query(collection(db, "admins"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setAdminsList(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.error("Failed to fetch admins", err);
    }
  };

  const handleDeleteAdminClick = (adminId, adminEmail) => {
    if (adminEmail === user.email) {
      alert("You cannot delete your own admin account.");
      return;
    }
    setDeleteAdminModal({ show: true, id: adminId, email: adminEmail });
  };

  const executeDeleteAdmin = async () => {
    if (!deleteAdminModal.id) return;
    try {
      await deleteDoc(doc(db, "admins", deleteAdminModal.id));
      setAdminsList(adminsList.filter(a => a.id !== deleteAdminModal.id));
      setDeleteAdminModal({ show: false, id: null, email: "" });
    } catch (err) {
      console.error("Failed to delete admin:", err);
      alert("An error occurred while removing the admin.");
    }
  };

  const executeRestoreAdmin = async () => {
    setRestoreAdminModal({ show: false, email: "" });
    setAdminLoading(true);
    try {
      const docRef = await addDoc(collection(db, "admins"), {
        email: newAdminEmail.trim().toLowerCase(),
        addedBy: user.email,
        createdAt: serverTimestamp()
      });
      setAdminMsg({ text: "Success! Admin access restored. They can log in with their existing password.", type: "success" });
      setAdminsList([{ id: docRef.id, email: newAdminEmail.trim().toLowerCase(), addedBy: user.email }, ...adminsList]);
      
      setTimeout(() => {
        setAdminModalView("list");
        setNewAdminEmail("");
        setNewAdminPassword("");
        setAdminMsg({ text: "", type: "" });
        setAdminLoading(false);
      }, 3000);
    } catch(err) {
      setAdminMsg({ text: "Failed to restore admin.", type: "error" });
      setAdminLoading(false);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!newAdminEmail || !newAdminPassword) return;
    if (newAdminPassword.length < 6) {
      setAdminMsg({ text: "Password must be at least 6 characters.", type: "error" });
      return;
    }
    setAdminLoading(true);
    setAdminMsg({ text: "", type: "" });

    try {
      const q = query(collection(db, "admins"), where("email", "==", newAdminEmail.trim().toLowerCase()));
      const snap = await getDocs(q);
      if (!snap.empty) {
        setAdminMsg({ text: "This email is already an active admin.", type: "error" });
        setAdminLoading(false);
        return;
      }

      const apps = getApps();
      const secondaryApp = apps.find(app => app.name === "SecondaryAdminCreator") || initializeApp(auth.app.options, "SecondaryAdminCreator");
      const secondaryAuth = getAuth(secondaryApp);

      await createSecondaryUser(secondaryAuth, newAdminEmail.trim().toLowerCase(), newAdminPassword);
      await signOutSecondary(secondaryAuth); 

      const docRef = await addDoc(collection(db, "admins"), {
        email: newAdminEmail.trim().toLowerCase(),
        addedBy: user.email,
        createdAt: serverTimestamp()
      });

      setAdminMsg({ text: "Admin successfully added!", type: "success" });
      setAdminsList([{ id: docRef.id, email: newAdminEmail.trim().toLowerCase(), addedBy: user.email }, ...adminsList]);

      setTimeout(() => {
        setAdminModalView("list");
        setNewAdminEmail("");
        setNewAdminPassword("");
        setAdminMsg({ text: "", type: "" });
        setAdminLoading(false);
      }, 1500);

    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setRestoreAdminModal({ show: true, email: newAdminEmail.trim().toLowerCase() });
      } else {
        console.error(err);
        setAdminMsg({ text: "Failed to add admin. Check credentials.", type: "error" });
      }
      setAdminLoading(false);
    } 
  };

  if (authLoading) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#fbfbfd] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#0072b1]/15 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 animate-spin rounded-full h-12 w-12 border-[3px] border-gray-200 border-t-[#0072b1]"></div>
      </div>
    );
  }

  // --- LOGIN SCREEN --- //
  if (!user || !isAdmin) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#fbfbfd] py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#0072b1] selection:text-white overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#0072b1]/15 via-[#005f96]/5 to-transparent blur-[120px] pointer-events-none animate-pulse duration-[7000ms]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-[#005f96]/15 via-[#0072b1]/5 to-transparent blur-[120px] pointer-events-none animate-pulse duration-[10000ms]"></div>

        <div className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-2xl p-8 sm:p-10 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60">
          <div className="text-center mb-10">
            <div className="mx-auto mb-6 flex items-center justify-center transform transition hover:scale-105 duration-300">
               <Image src="/logo.png" alt="Company Logo" width={150} height={60} className="w-auto h-16 object-contain drop-shadow-md" priority />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Portal</h2>
            <p className="mt-3 text-sm text-gray-500 font-medium">Secure access to AN Global Services</p>
          </div>
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Email</label>
              <input type="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-white/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium shadow-sm" placeholder="admin@anglobalservices.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required 
                  value={loginPassword} 
                  onChange={(e) => setLoginPassword(e.target.value)} 
                  onPaste={(e) => e.preventDefault()}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200/80 bg-white/50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] focus:bg-white transition-all text-sm font-medium shadow-sm pr-12" 
                  placeholder="••••••••" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-[#0072b1] transition-colors"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  )}
                </button>
              </div>
            </div>
            {loginError && <p className="text-red-500 text-sm font-semibold text-center bg-red-50 py-3 rounded-xl border border-red-100">{loginError}</p>}
            <button type="submit" className="w-full flex justify-center py-4 px-4 rounded-xl text-white bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] font-bold text-sm shadow-lg shadow-[#0072b1]/20 hover:shadow-[#0072b1]/40 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none border border-[#005f96]/50 cursor-pointer">
              Sign In to Workspace
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-[#fbfbfd] font-sans selection:bg-[#0072b1]/20 selection:text-gray-900 flex overflow-hidden">
      
      {/* Backgrounds */}
      <div className="fixed top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#0072b1]/10 via-[#0072b1]/5 to-transparent blur-[120px] pointer-events-none -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tl from-[#005f96]/10 via-[#005f96]/5 to-transparent blur-[120px] pointer-events-none -z-10 animate-pulse duration-[12000ms]"></div>

      {/* -------------------------------------------------- */}
      {/* MOBILE HEADER (Visible only on small screens)        */}
      {/* -------------------------------------------------- */}
      <div className="md:hidden absolute top-0 left-0 w-full h-16 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 z-[40] flex items-center justify-between px-5 shadow-sm">
        <Image src="/logo.png" alt="Company Logo" width={100} height={35} className="w-auto h-8 object-contain" priority />
        <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-gray-600 bg-white rounded-lg shadow-sm border border-gray-200/80 focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-[70] md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* -------------------------------------------------- */}
      {/* GLOBAL MODALS                                      */}
      {/* -------------------------------------------------- */}

      {/* Admin Delete Confirmation Modal */}
      {deleteAdminModal.show && (
        <div className="fixed inset-0 z-[100010] bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center transform transition-all border border-white/60">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-red-100 shadow-inner">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">Revoke Access?</h3>
            <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">
              Are you sure you want to remove <strong className="text-gray-800">{deleteAdminModal.email}</strong>? They will instantly lose access to this workspace.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteAdminModal({ show: false, id: null, email: "" })} className="cursor-pointer flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors shadow-sm">
                Cancel
              </button>
              <button onClick={executeDeleteAdmin} className="cursor-pointer flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-red-700">
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Restore Modal */}
      {restoreAdminModal.show && (
        <div className="fixed inset-0 z-[100010] bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center transform transition-all border border-white/60">
            <div className="w-20 h-20 bg-blue-50 text-[#0072b1] rounded-full flex items-center justify-center mx-auto mb-5 border border-blue-100 shadow-inner">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">Restore Admin?</h3>
            <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">
              <strong className="text-gray-800">{restoreAdminModal.email}</strong> is a previously removed user. Do you want to restore their admin access now?
            </p>
            <div className="flex gap-3">
              <button onClick={() => { setRestoreAdminModal({ show: false, email: "" }); }} className="cursor-pointer flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors shadow-sm">
                Cancel
              </button>
              <button onClick={executeRestoreAdmin} className="cursor-pointer flex-1 bg-[#0072b1] hover:bg-[#005f96] text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-[#005f96]">
                Yes, Restore
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Manage Admins Drawer/Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-[100000] bg-gray-900/30 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-white/60 transform transition-all">
            <div className="p-5 sm:p-6 border-b border-gray-100/50 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
                {adminModalView === "list" ? "Manage Admins" : "Add New Admin"}
              </h3>
              <button onClick={() => {setShowAdminModal(false); setAdminModalView("list"); setAdminMsg({text:"", type:""});}} className="text-gray-400 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center font-bold transition-colors cursor-pointer">&times;</button>
            </div>

            {adminModalView === "list" ? (
              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-4">
                  <p className="text-sm font-medium text-gray-500">Authorized personnel with platform access.</p>
                  <button onClick={() => setAdminModalView("add")} className="cursor-pointer bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white text-xs px-4 py-2 rounded-lg font-bold shadow-sm transition-all transform hover:-translate-y-0.5 self-start sm:self-auto">
                    + Add Admin
                  </button>
                </div>
                
                <div className="max-h-[300px] overflow-y-auto space-y-3 pr-1">
                  {adminsList.map((admin) => (
                    <div key={admin.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-2xl bg-white shadow-sm hover:border-blue-100 transition-colors">
                      <div className="truncate pr-2">
                        <p className="text-sm font-extrabold text-gray-900 flex items-center gap-2 truncate">
                          <span className="truncate">{admin.email}</span>
                          {admin.email === user.email && <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider flex-shrink-0">You</span>}
                        </p>
                        <p className="text-xs font-medium text-gray-400 mt-0.5 truncate">Added by: {admin.addedBy}</p>
                      </div>
                      {admin.email !== user.email && (
                        <button onClick={() => handleDeleteAdminClick(admin.id, admin.email)} className="cursor-pointer text-red-400 hover:text-white bg-red-50 hover:bg-red-500 p-2.5 rounded-xl transition-all border border-red-100 hover:border-red-500 flex-shrink-0" title="Revoke Access">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={handleAddAdmin} className="p-5 sm:p-6 space-y-5">
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  Provide an email and set a temporary password. They can use this to securely access the workspace.
                </p>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Admin Email</label>
                  <input type="email" required value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} className="w-full border border-gray-200/80 bg-white/50 focus:bg-white rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium shadow-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Temporary Password</label>
                  <input type="text" required value={newAdminPassword} onChange={(e) => setNewAdminPassword(e.target.value)} className="w-full border border-gray-200/80 bg-white/50 focus:bg-white rounded-xl p-3.5 focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all text-sm font-medium shadow-sm" minLength="6" />
                </div>
                {adminMsg.text && (
                  <div className={`p-4 rounded-xl text-sm font-semibold border ${adminMsg.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>{adminMsg.text}</div>
                )}
                
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => {setAdminModalView("list"); setAdminMsg({text:"", type:""});}} className="cursor-pointer flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3.5 rounded-xl transition-colors shadow-sm text-sm">
                    Back to List
                  </button>
                  <button type="submit" disabled={adminLoading} className="cursor-pointer flex-1 bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#005f96]/50 text-sm">
                    {adminLoading ? "Creating..." : "Create Account"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* -------------------------------------------------- */}
      {/* RESPONSIVE LEFT SIDEBAR                              */}
      {/* -------------------------------------------------- */}
      <div className={`fixed md:relative top-0 left-0 h-full w-72 bg-white/95 md:bg-white/60 backdrop-blur-3xl border-r border-white/50 flex flex-col shadow-2xl md:shadow-lg z-[80] md:z-20 flex-shrink-0 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="p-6 border-b border-gray-200/50 relative">
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden absolute top-5 right-4 text-gray-400 hover:text-gray-900 bg-gray-100/80 hover:bg-gray-200 h-8 w-8 rounded-full flex items-center justify-center font-bold transition-colors cursor-pointer">
            &times;
          </button>
          
          <div className="mb-4 flex items-center mt-1 md:mt-0">
            <Image src="/logo.png" alt="Company Logo" width={120} height={45} className="w-auto h-10 object-contain drop-shadow-sm" priority />
          </div>
          <h1 className="text-xl font-extrabold text-gray-900 tracking-tight leading-tight">Workspace</h1>
          <p className="text-[11px] font-bold text-gray-400 mt-1 truncate">{user.email}</p>
        </div>

        <div className="p-4 space-y-2 flex-1 overflow-y-auto">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-2 mb-3 mt-4">Overview</p>
          <Link href="/adminpanel/dashboard" onClick={() => setIsMobileMenuOpen(false)} className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${pathname === "/adminpanel/dashboard" ? "bg-white shadow-sm border border-gray-200/50 text-[#0072b1]" : "text-gray-600 hover:bg-white/50"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            Dashboard
          </Link>
          
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-2 mb-3 mt-6">Products</p>
          <Link href="/adminpanel/products" onClick={() => setIsMobileMenuOpen(false)} className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${pathname === "/adminpanel/products" ? "bg-white shadow-sm border border-gray-200/50 text-[#0072b1]" : "text-gray-600 hover:bg-white/50"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            Product Pages
          </Link>
          <Link href="/adminpanel/createproductpage" onClick={() => setIsMobileMenuOpen(false)} className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${pathname === "/adminpanel/createproductpage" ? "bg-white shadow-sm border border-gray-200/50 text-[#0072b1]" : "text-gray-600 hover:bg-white/50"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            Create New Product
          </Link>

          {/* CHANGED: ADDED BLOG MANAGEMENT LINKS */}
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-2 mb-3 mt-6">Blogs</p>
          <Link href="/adminpanel/blogs" onClick={() => setIsMobileMenuOpen(false)} className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${pathname === "/adminpanel/blogs" ? "bg-white shadow-sm border border-gray-200/50 text-[#0072b1]" : "text-gray-600 hover:bg-white/50"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"></path></svg>
            Blog Pages
          </Link>
          <Link href="/adminpanel/createblog" onClick={() => setIsMobileMenuOpen(false)} className={`cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${pathname === "/adminpanel/createblog" ? "bg-white shadow-sm border border-gray-200/50 text-[#0072b1]" : "text-gray-600 hover:bg-white/50"}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            Create New Blog
          </Link>
        </div>

        <div className="p-4 space-y-2 border-t border-gray-200/50 bg-gray-50/30">
          <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-2 mb-3">Settings</p>
          <button onClick={openManageAdmins} className="cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-gray-700 hover:bg-white/80 transition-all flex items-center gap-3">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            Manage Admins
          </button>
          <button onClick={handleLogout} className="cursor-pointer w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 transition-all flex items-center gap-3">
            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Logout Securely
          </button>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 overflow-y-auto relative z-10 scroll-smooth pt-16 md:pt-0 w-full">
        {children}
      </div>
    </div>
  );
}