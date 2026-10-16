"use client";

import { useState, useEffect, useRef } from "react";
import { collection, addDoc, updateDoc, doc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Briefcase,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Building2,
  MapPin,
  Clock,
  IndianRupee,
  GraduationCap,
  Users,
  Plus,
  Trash2,
  Edit3,
  Check,
  X,
  ListChecks,
  Award,
  Gift
} from "lucide-react";

// Helper to parse stored bullet text into array of individual point strings
function parseBulletPoints(text) {
  if (!text || typeof text !== "string") return [];
  return text
    .split("\n")
    .map((line) => line.trim())
    .map((line) => line.replace(/^([•\-\*\u2022\u25E6\u2043\u2219]|\d+[\.\)])\s*/, "").trim())
    .filter((line) => line.length > 0);
}

// Helper to format array of points into standard bullet text for Firestore
function formatBulletPoints(points) {
  if (!Array.isArray(points)) return "";
  return points
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `• ${p}`)
    .join("\n");
}

// Reusable Bullet List Input Component with point-by-point entry
function BulletListInput({
  label,
  sublabel,
  placeholder,
  value,
  onChange,
  icon: Icon
}) {
  const [points, setPoints] = useState(() => parseBulletPoints(value));
  const [newPoint, setNewPoint] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const inputRef = useRef(null);

  // Sync internal points when external value changes (e.g., when editing existing job loads from Firestore)
  useEffect(() => {
    const parsed = parseBulletPoints(value);
    if (JSON.stringify(parsed) !== JSON.stringify(points)) {
      setPoints(parsed);
    }
  }, [value]);

  const updatePoints = (newPointsList) => {
    setPoints(newPointsList);
    onChange(formatBulletPoints(newPointsList));
  };

  const handleAddPoint = () => {
    if (!newPoint.trim()) return;
    const updated = [...points, newPoint.trim()];
    updatePoints(updated);
    setNewPoint("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleRemovePoint = (index) => {
    const updated = points.filter((_, i) => i !== index);
    updatePoints(updated);
  };

  const handleStartEdit = (index, text) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  const handleSaveEdit = (index) => {
    if (!editingText.trim()) {
      handleRemovePoint(index);
    } else {
      const updated = [...points];
      updated[index] = editingText.trim();
      updatePoints(updated);
    }
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="space-y-3">
      {/* Header with Title & Count Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1">
        <div>
          <label className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider">
            {Icon && <Icon size={16} className="text-[#0072b1]" />}
            {label}
            {points.length > 0 && (
              <span className="text-[11px] font-bold text-[#0072b1] bg-blue-50 px-2 py-0.5 rounded-full lowercase">
                {points.length} {points.length === 1 ? "point" : "points"}
              </span>
            )}
          </label>
          {sublabel && <p className="text-xs text-gray-500 mt-0.5">{sublabel}</p>}
        </div>
      </div>

      {/* Input field to add single point */}
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder || "Type a point and press Enter..."}
          value={newPoint}
          onChange={(e) => setNewPoint(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddPoint();
            }
          }}
          className="flex-1 px-4 py-2.5 bg-gray-50/70 border border-gray-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
        />
        <button
          type="button"
          onClick={handleAddPoint}
          disabled={!newPoint.trim()}
          className="cursor-pointer px-4 py-2.5 rounded-xl bg-[#0072b1] hover:bg-[#005f94] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs transition-all shrink-0"
        >
          <Plus size={15} /> Add Point
        </button>
      </div>

      {/* Interactive Bullet List Display */}
      {points.length === 0 ? (
        <div className="p-4 rounded-xl border border-dashed border-gray-200 text-center text-xs text-gray-400 bg-gray-50/40">
          No points added yet. Type a bullet point above and click <span className="font-bold text-gray-600">"Add Point"</span>.
        </div>
      ) : (
        <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-200/80 shadow-xs hover:border-[#0072b1]/50 transition-all"
            >
              <span className="w-5 h-5 rounded-full bg-blue-50 text-[#0072b1] text-[11px] font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>

              {editingIndex === idx ? (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSaveEdit(idx);
                      } else if (e.key === "Escape") {
                        setEditingIndex(null);
                      }
                    }}
                    className="flex-1 px-3 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0072b1]"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => handleSaveEdit(idx)}
                    className="cursor-pointer p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50"
                    title="Save Changes"
                  >
                    <Check size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingIndex(null)}
                    className="cursor-pointer p-1.5 rounded-lg text-gray-400 hover:bg-gray-100"
                    title="Cancel"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <span className="flex-1 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                    {pt}
                  </span>
                  <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity shrink-0">
                    <button
                      type="button"
                      onClick={() => handleStartEdit(idx, pt)}
                      className="cursor-pointer p-1.5 rounded-lg text-gray-400 hover:text-[#0072b1] hover:bg-blue-50 transition-all"
                      title="Edit Point"
                    >
                      <Edit3 size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemovePoint(idx)}
                      className="cursor-pointer p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all"
                      title="Delete Point"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CreateJob() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editingId = searchParams.get("id");

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Form Fields
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("Regulatory & Compliance");
  const [customDepartment, setCustomDepartment] = useState("");
  const [jobType, setJobType] = useState("Full Time");
  const [workMode, setWorkMode] = useState("On-site (Delhi NCR)");
  const [location, setLocation] = useState("Delhi NCR / Head Office");
  const [experience, setExperience] = useState("2-4 Years");
  const [education, setEducation] = useState("");
  const [salary, setSalary] = useState("Competitive / Best in Industry");
  const [openings, setOpenings] = useState("1");
  const [status, setStatus] = useState("Active");
  const [isFeatured, setIsFeatured] = useState(false);

  // Rich text / Bullet sections
  const [summary, setSummary] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState("");
  const [perks, setPerks] = useState("");

  // Exit warning
  const [showExitWarning, setShowExitWarning] = useState(false);
  const [targetUrl, setTargetUrl] = useState("");

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);

    const handlePopState = () => {
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
        } catch (err) {}
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

  // Fetch existing job if in edit mode
  useEffect(() => {
    if (!editingId) return;
    const fetchExistingJob = async () => {
      setFetchLoading(true);
      try {
        const docRef = doc(db, "jobs", editingId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const d = docSnap.data();
          setTitle(d.title || "");
          const standardDepts = [
            "Regulatory & Compliance",
            "Laboratory Testing & Calibration",
            "Engineering & Machinery",
            "Sales & Business Development",
            "International Trade & Logistics",
            "Digital & IT",
            "Finance & Accounts",
            "HR & Talent Acquisition"
          ];
          if (standardDepts.includes(d.department)) {
            setDepartment(d.department);
          } else {
            setDepartment("Other");
            setCustomDepartment(d.department || "");
          }
          setJobType(d.jobType || "Full Time");
          setWorkMode(d.workMode || "On-site (Delhi NCR)");
          setLocation(d.location || "Delhi NCR / Head Office");
          setExperience(d.experience || "2-4 Years");
          setEducation(d.education || "");
          setSalary(d.salary || "Competitive / Best in Industry");
          setOpenings(d.openings ? String(d.openings) : "1");
          setStatus(d.status || "Active");
          setIsFeatured(Boolean(d.isFeatured));
          setSummary(d.summary || "");
          setResponsibilities(d.responsibilities || "");
          setRequirements(d.requirements || "");
          setPerks(d.perks || "");
        } else {
          setErrorMsg("Job not found with the provided ID.");
        }
      } catch (err) {
        console.error("Error loading job:", err);
        setErrorMsg("Failed to load existing job details.");
      } finally {
        setFetchLoading(false);
      }
    };
    fetchExistingJob();
  }, [editingId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg("Please enter a job title.");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    const finalDepartment = department === "Other" ? customDepartment.trim() || "General" : department;

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const jobData = {
      title: title.trim(),
      slug,
      department: finalDepartment,
      jobType,
      workMode,
      location: location.trim(),
      experience: experience.trim(),
      education: education.trim(),
      salary: salary.trim(),
      openings: openings.trim(),
      status,
      isFeatured,
      summary: summary.trim(),
      responsibilities: responsibilities.trim(),
      requirements: requirements.trim(),
      perks: perks.trim(),
      updatedAt: serverTimestamp()
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, "jobs", editingId), jobData);
        setSuccessMsg("Job opening updated successfully!");
      } else {
        jobData.createdAt = serverTimestamp();
        await addDoc(collection(db, "jobs"), jobData);
        setSuccessMsg("New job opening published live successfully!");
      }

      setTimeout(() => {
        router.push("/adminpanel/jobs");
      }, 1500);
    } catch (err) {
      console.error("Failed to save job:", err);
      setErrorMsg("Failed to save job opening. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Unsaved Changes Confirmation Modal */}
      {showExitWarning && (
        <div className="fixed inset-0 z-[100010] bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center border border-white/60">
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-100">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Discard Changes?</h3>
            <p className="text-gray-500 text-sm mb-6 font-medium">
              You have unsaved changes. Leaving this page now will lose your progress.
            </p>
            <div className="flex gap-3">
              <button
                onClick={cancelExit}
                className="cursor-pointer flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors text-sm"
              >
                Stay Here
              </button>
              <button
                onClick={confirmExit}
                className="cursor-pointer flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-md text-sm"
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto py-10 px-5 sm:px-8 animate-fade-in">
        {/* Top Back Nav & Heading */}
        <div className="mb-8">
          <Link
            href="/adminpanel/jobs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#0072b1] mb-3 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Job Openings
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                {editingId ? "Edit Job Opening" : "Post New Job Opening"}
              </h2>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Fill in the job details below to display this role on the AN Global Services Careers portal.
              </p>
            </div>
          </div>
        </div>

        {fetchLoading ? (
          <div className="text-center py-20 bg-white/60 backdrop-blur-md rounded-3xl border border-white/60 shadow-sm">
            <div className="w-10 h-10 border-4 border-[#0072b1]/20 border-t-[#0072b1] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm font-bold text-gray-500">Loading job details...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Success / Error Messages */}
            {successMsg && (
              <div className="p-4 rounded-xl text-sm font-semibold border bg-green-50 text-green-700 border-green-200 flex items-center gap-2">
                <CheckCircle size={18} /> {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="p-4 rounded-xl text-sm font-semibold border bg-red-50 text-red-700 border-red-200 flex items-center gap-2">
                <AlertCircle size={18} /> {errorMsg}
              </div>
            )}

            {/* SECTION 1: Core Job Overview */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                  <Briefcase size={20} className="text-[#0072b1]" /> Primary Role Details
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">Specify title, department, employment category and visibility.</p>
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior BIS Regulatory Compliance Specialist"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                />
              </div>

              {/* Department & Custom Dept */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Department / Practice Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                  >
                    <option value="Regulatory & Compliance">Regulatory & Compliance (BIS / FMCS / CRS)</option>
                    <option value="Laboratory Testing & Calibration">Laboratory Testing & Calibration (ISO 17025)</option>
                    <option value="Engineering & Machinery">Engineering & Machinery (Turnkey Projects)</option>
                    <option value="Sales & Business Development">Sales & Business Development</option>
                    <option value="International Trade & Logistics">International Trade & Logistics</option>
                    <option value="Digital & IT">Digital, IT & Software</option>
                    <option value="Finance & Accounts">Finance & Accounts</option>
                    <option value="HR & Talent Acquisition">HR & Talent Acquisition</option>
                    <option value="Other">Other (Custom Department)</option>
                  </select>
                </div>

                {department === "Other" && (
                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                      Custom Department Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Cleanroom Quality Engineering"
                      value={customDepartment}
                      onChange={(e) => setCustomDepartment(e.target.value)}
                      className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Employment Type
                  </label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              {/* Location, Mode & Openings */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Work Mode
                  </label>
                  <select
                    value={workMode}
                    onChange={(e) => setWorkMode(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                  >
                    <option value="On-site (Delhi NCR)">On-site (Delhi NCR)</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                    <option value="Field / Client Sites">Field / Client Sites</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi NCR / Head Office"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Number of Openings
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 2"
                    value={openings}
                    onChange={(e) => setOpenings(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                  />
                </div>
              </div>

              {/* Status and Featured Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Publish Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className={`w-full px-4 py-3.5 border rounded-xl text-sm font-bold focus:outline-none transition-all ${status === "Active" ? "bg-green-50/70 text-green-700 border-green-200" : "bg-gray-100 text-gray-600 border-gray-200"}`}
                  >
                    <option value="Active">Active (Visible on Careers Page)</option>
                    <option value="Closed">Closed (Hidden from Active Listings)</option>
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-6 sm:pt-7">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0072b1]"></div>
                    <span className="ml-3 text-sm font-bold text-gray-700 flex items-center gap-1.5">
                      <Sparkles size={16} className="text-amber-500" /> Featured / Priority Role
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* SECTION 2: Candidate Requirements & Package */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                  <GraduationCap size={20} className="text-[#0072b1]" /> Experience & Package
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">Qualifications, years of experience, and remuneration range.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Experience Required
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2-4 Years or Fresher"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Education / Qualification
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. B.Tech / M.Sc / Any Graduate"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                    Salary / Compensation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹5,00,000 - ₹8,00,000 PA"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
                  />
                </div>
              </div>

              {/* Role Summary */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                  Role Summary / Executive Pitch <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Provide a compelling 2-3 sentence overview of this role and why it matters to AN Global Services..."
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full p-4 bg-gray-50/70 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all leading-relaxed"
                ></textarea>
              </div>
            </div>

            {/* SECTION 3: Detailed Job Description Content */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-8">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                  <Building2 size={20} className="text-[#0072b1]" /> Responsibilities & Requirements
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Enter points one by one using the Add Point field below.
                </p>
              </div>

              {/* Responsibilities */}
              <BulletListInput
                label="Key Responsibilities"
                sublabel="Define day-to-day duties, regulatory tasks, and team deliverables."
                placeholder="Type a responsibility and press Enter or click 'Add Point'..."
                value={responsibilities}
                onChange={setResponsibilities}
                icon={ListChecks}
              />

              {/* Requirements & Skills */}
              <BulletListInput
                label="Qualifications, Knowledge & Skills Required"
                sublabel="Specify educational background, industry experience, and required certifications."
                placeholder="Type a qualification/skill and press Enter or click 'Add Point'..."
                value={requirements}
                onChange={setRequirements}
                icon={Award}
              />

              {/* Benefits & Perks */}
              <BulletListInput
                label="Benefits, Perks & Work Culture"
                sublabel="Highlight performance incentives, medical coverage, travel, and cultural perks."
                placeholder="Type a benefit/perk and press Enter or click 'Add Point'..."
                value={perks}
                onChange={setPerks}
                icon={Gift}
              />
            </div>

            {/* Submit Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <Link
                href="/adminpanel/jobs"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-bold text-sm shadow-sm transition-all"
              >
                Cancel & Return
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full sm:w-auto px-8 py-3.5 rounded-xl text-white bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] font-bold text-sm shadow-lg shadow-[#0072b1]/20 hover:shadow-[#0072b1]/40 transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Saving Opening...
                  </>
                ) : editingId ? (
                  "Update Job Opening"
                ) : (
                  "Publish Job Opening Live"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
