"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  Building2,
  GraduationCap,
  IndianRupee,
  UploadCloud,
  FileText,
  X,
  Send,
  Users,
  ShieldCheck,
  Globe2,
  TrendingUp,
  HeartPulse,
  Award,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  User,
  Calendar,
  AlertCircle,
  HelpCircle,
  Check,
} from "lucide-react";

export default function CareersClient({ initialJobs = [] }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Modals state
  const [selectedJobForDetail, setSelectedJobForDetail] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyJobTitle, setApplyJobTitle] = useState("");
  const [applyJobId, setApplyJobId] = useState("");

  // Application Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "1-3 Years",
    currentLocation: "",
    qualification: "",
    noticePeriod: "Immediate",
    linkedin: "",
    whyJoin: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(null);
  const fileInputRef = useRef(null);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Fetch from Firestore on client mount to get real-time additions from Admin Panel
  useEffect(() => {
    let isMounted = true;
    const fetchLiveJobs = async () => {
      try {
        const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
        const fetchPromise = getDocs(q);
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Firestore fetch timeout")), 4000)
        );
        const snap = await Promise.race([fetchPromise, timeoutPromise]);
        if (!isMounted) return;
        if (snap) {
          const firestoreJobs = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setJobs(firestoreJobs);
        }
      } catch (err) {
        // Silently preserve initialJobs so UI never flickers or throws backend errors
      }
    };

    fetchLiveJobs();
    return () => {
      isMounted = false;
    };
  }, [initialJobs]);

  // Open apply modal for a specific job
  const handleOpenApply = (job) => {
    setSelectedJobForDetail(null); // Close detail modal if open
    setApplyJobTitle(job ? job.title : "General / Spontaneous Application");
    setApplyJobId(job ? job.id : "");
    setFormError("");
    setFormSuccess(null);
    setIsApplyModalOpen(true);
  };

  // Close apply modal
  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
    setFormLoading(false);
    setFormError("");
  };

  // File selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setFormError("File size exceeds 5MB. Please upload a smaller document.");
      return;
    }

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setFormError("Please upload a PDF or DOC/DOCX document.");
      return;
    }

    setFormError("");
    setResumeFile(file);
  };

  // Form submit
  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setFormLoading(true);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError("Please provide your Name, Email, and Phone Number.");
      setFormLoading(false);
      return;
    }

    if (/\d/.test(formData.fullName)) {
      setFormError("Full Name should not contain numbers. Please write only letters.");
      setFormLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError("Please enter a valid email address.");
      setFormLoading(false);
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setFormError("Please enter a valid 10-digit mobile number.");
      setFormLoading(false);
      return;
    }

    if (!resumeFile) {
      setFormError("Please attach your resume file (PDF or DOCX).");
      setFormLoading(false);
      return;
    }

    try {
      const payload = new FormData();
      payload.append("fullName", formData.fullName.trim());
      payload.append("email", formData.email.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("jobTitle", applyJobTitle);
      payload.append("jobId", applyJobId || "");
      payload.append("experience", formData.experience);
      payload.append("currentLocation", formData.currentLocation.trim());
      payload.append("qualification", formData.qualification);
      payload.append("noticePeriod", formData.noticePeriod);
      payload.append("linkedin", formData.linkedin.trim());
      payload.append("whyJoin", formData.whyJoin.trim());
      payload.append("resume", resumeFile);

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormSuccess({
          applicationId: data.applicationId,
          message: data.message || "Application submitted successfully!",
        });
        // Reset form fields
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "1-3 Years",
          currentLocation: "",
          qualification: "",
          noticePeriod: "Immediate",
          linkedin: "",
          whyJoin: "",
        });
        setResumeFile(null);
      } else {
        setFormError(data.message || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setFormError("Network error. Please try again or email us directly at info@anglobalservices.com");
    } finally {
      setFormLoading(false);
    }
  };

  // Filter jobs
  const departmentsList = [
    "All",
    "Regulatory & Compliance",
    "Laboratory Testing & Calibration",
    "Engineering & Machinery",
    "International Trade & Logistics",
    "Digital & IT",
    "Finance & Accounts",
  ];

  const locationsList = ["All", "Delhi NCR", "Noida", "Hybrid", "Remote"];

  const activeJobs = jobs.filter((j) => j.status === "Active" || !j.status);

  const filteredJobs = activeJobs.filter((job) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      job.title?.toLowerCase().includes(q) ||
      job.department?.toLowerCase().includes(q) ||
      job.location?.toLowerCase().includes(q) ||
      job.summary?.toLowerCase().includes(q) ||
      job.jobType?.toLowerCase().includes(q);

    const matchesDept =
      selectedDept === "All" ||
      job.department?.toLowerCase().includes(selectedDept.toLowerCase());

    const matchesLoc =
      selectedLocation === "All" ||
      job.location?.toLowerCase().includes(selectedLocation.toLowerCase()) ||
      job.workMode?.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesSearch && matchesDept && matchesLoc;
  });

  // FAQs data
  const faqs = [
    {
      q: "What is the typical hiring process at AN Global Services?",
      a: "Our recruitment timeline is designed to be swift and respectful of your time, typically concluding within 7 to 14 business days. The stages include: 1) Initial application and resume review by our HR team, 2) Technical/Domain assessment with our practice directors, 3) Cultural and leadership alignment interview, and 4) Final offer rollout and seamless onboarding.",
    },
    {
      q: "Does AN Global Services hire fresh graduates or interns?",
      a: "Yes! We actively nurture emerging talent in engineering, applied chemistry, commerce, and international business. Freshers undergo structured mentorship under veteran BIS and ISO lead assessors, gaining real-world exposure to laboratory testing and cross-border regulatory compliance.",
    },
    {
      q: "Where is AN Global Services headquartered, and do you offer hybrid work?",
      a: "Our corporate headquarters and primary calibration laboratory facilities are situated in Delhi NCR (with strategic branch liaisons in Noida, Mumbai, and partner centers globally). Selected engineering and technical roles operate on-site for direct laboratory access, while international trade, software development, and documentation positions enjoy flexible hybrid arrangements.",
    },
    {
      q: "Do your consultants get opportunities for international travel?",
      a: "Yes. In our Foreign Manufacturers Certification Scheme (FMCS) and turnkey industrial setup divisions, senior specialists and lead auditors frequently travel abroad to conduct pre-audit factory inspections across Asia, Europe, and North America alongside official statutory delegations.",
    },
    {
      q: "How will I know the status of my job application?",
      a: "Upon submission through this portal, you immediately receive a unique Application Tracking Reference ID. Our talent acquisition team reviews every profile within 48 business hours. Shortlisted candidates are contacted directly via phone and email.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#0075B6] selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (MATCHING AN GLOBAL SERVICES SIGNATURE BLUE)   */}
      {/* ============================================================== */}
      <section className="relative w-full bg-gradient-to-r from-[#001c3d] via-[#002f63] to-[#004e8c] text-white min-h-[calc(100vh-175px)] flex flex-col justify-center py-5 sm:py-6 lg:py-7 overflow-hidden shadow-md">
        {/* Signature Dot-Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none"></div>

        {/* Ambient Subtle Radial Glow Highlights */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-400/10 blur-[100px] pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 w-full flex-1 flex flex-col justify-around items-center py-2">
          {/* Eyebrow Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide uppercase text-blue-200 shadow-sm">
            <Sparkles size={14} className="text-yellow-400" />
            <span>Live Recruitment Active</span>
            <span className="text-white/40">•</span>
            <span className="text-white font-normal lowercase">Delhi NCR HQ & Labs</span>
          </div>

          {/* Master Headline (Generous Width, Strong, Majestic) */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black tracking-tight leading-[1.18] uppercase drop-shadow-sm text-center text-white max-w-5xl mx-auto my-2">
            Build the Future of <br className="hidden sm:inline" />
            <span className="text-cyan-300">Global Trade & Industrial Compliance</span>
          </h1>

          {/* Subtitle (Proper Width & Room to Breathe) */}
          <p className="text-sm sm:text-base lg:text-lg text-blue-100/90 font-normal leading-relaxed max-w-3xl sm:max-w-4xl text-center mx-auto my-1.5">
            At AN Global Services, we connect 1,500+ multinational manufacturers with certified
            Indian compliance, turnkey laboratory machinery, and high-impact regulatory advisory across 50+ countries.
          </p>

          {/* Feature Chips (Spanning Across Width) */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm text-blue-100 max-w-5xl mx-auto my-2">
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-md border border-white/15 backdrop-blur-sm font-medium">
              <CheckCircle2 size={14} className="text-emerald-400" /> BIS ISI & CRS Affairs
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-md border border-white/15 backdrop-blur-sm font-medium">
              <CheckCircle2 size={14} className="text-emerald-400" /> ISO/IEC 17025 Testing Labs
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-md border border-white/15 backdrop-blur-sm font-medium">
              <CheckCircle2 size={14} className="text-emerald-400" /> Turnkey Industrial Machinery
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-md border border-white/15 backdrop-blur-sm font-medium">
              <CheckCircle2 size={14} className="text-emerald-400" /> FMCS Global Plant Audits
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 my-2">
            <a
              href="#openings-section"
              className="cursor-pointer px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl bg-gradient-to-r from-[#0075B6] to-cyan-500 hover:from-[#005a8f] hover:to-cyan-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#001c3d]/60 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 border border-cyan-300/30"
            >
              {activeJobs.length > 0 ? (
                <>Explore {activeJobs.length} Open Position{activeJobs.length === 1 ? "" : "s"} <ArrowRight size={15} /></>
              ) : (
                <>Explore Open Positions <ArrowRight size={15} /></>
              )}
            </a>
            <button
              onClick={() => handleOpenApply(null)}
              className="cursor-pointer px-6 py-2.5 sm:px-8 sm:py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <UploadCloud size={15} className="text-cyan-300" /> Spontaneous Application
            </button>
          </div>

          {/* Metric Highlights Console (Wide & Well-Spaced, 1 Row) */}
          <div className="w-full max-w-5xl mx-auto rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/15 p-2.5 sm:p-3.5 shadow-xl mt-1">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center text-center px-1 sm:px-3">
                <div className="flex items-center gap-1.5 text-cyan-300 mb-0.5">
                  <Globe2 size={14} className="hidden sm:inline" />
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-blue-200">
                    Reach
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">50+</h3>
                <p className="text-[10px] sm:text-xs text-blue-100/90 font-medium truncate">Countries</p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center text-center px-1 sm:px-3">
                <div className="flex items-center gap-1.5 text-sky-300 mb-0.5">
                  <Building2 size={14} className="hidden sm:inline" />
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-blue-200">
                    Enterprises
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">1,500+</h3>
                <p className="text-[10px] sm:text-xs text-blue-100/90 font-medium truncate">Clients</p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center text-center px-1 sm:px-3">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-0.5">
                  <TrendingUp size={14} className="hidden sm:inline" />
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-blue-200">
                    Trajectory
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">100%</h3>
                <p className="text-[10px] sm:text-xs text-blue-100/90 font-medium truncate">Merit Growth</p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center justify-center text-center px-1 sm:px-3">
                <div className="flex items-center gap-1.5 text-yellow-400 mb-0.5">
                  <Award size={14} className="hidden sm:inline" />
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-blue-200">
                    Satisfaction
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">4.9 ★</h3>
                <p className="text-[10px] sm:text-xs text-blue-100/90 font-medium truncate">Trust Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. WHY CHOOSE AN GLOBAL SERVICES (CULTURAL PILLARS REDESIGNED) */}
      {/* ============================================================== */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 0.75px, transparent 0.75px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0075B6] uppercase tracking-widest bg-blue-50/90 border border-blue-100 px-3.5 py-1 rounded-full mb-2 shadow-xs">
              <Sparkles size={12} className="text-[#0075B6]" />
              Talent Value Proposition
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Top Talent Chooses AN Global Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We invest deeply in our people—giving you cross-border exposure, merit-driven trajectory,
              and continuous professional upskilling to build a distinguished career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1 */}
            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 hover:border-[#0075B6] shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-8px_rgba(0,117,182,0.15)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-[#0075B6] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#0075B6] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Globe2 size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-blue-50 text-[#0075B6] border border-blue-100">
                    🌍 50+ Nations
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0075B6] transition-colors mb-1.5">
                  Global Industry Footprint
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
                  Work directly with Fortune 500 manufacturers and international delegations across 50+
                  countries in Asia, Europe, and the Americas on high-stakes compliance mandates.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#0075B6]">
                <Check size={13} className="text-emerald-500 shrink-0" />
                <span>Overseas factory audits & client delegations</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 hover:border-emerald-500 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-8px_rgba(16,185,129,0.15)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <TrendingUp size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                    ⚡ Fast-Track
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1.5">
                  Accelerated Trajectory
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
                  Zero corporate red tape. Clear, objective KPIs and performance milestones that unlock
                  rapid leadership promotions and division head roles within 12 to 18 months.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-700">
                <Check size={13} className="text-emerald-500 shrink-0" />
                <span>100% Meritocracy • 12-month promotion cycles</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 hover:border-purple-500 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-8px_rgba(168,85,247,0.15)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Award size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-100">
                    💎 Above-Market
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-1.5">
                  Competitive Compensation
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
                  Top-tier base pay, aggressive quarterly project closure bonuses, annual profit
                  sharing pools, and milestone excellence celebrations.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-purple-700">
                <Check size={13} className="text-emerald-500 shrink-0" />
                <span>High-yield quarterly bonuses & profit sharing</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 hover:border-indigo-500 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-8px_rgba(99,102,241,0.15)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 text-indigo-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <GraduationCap size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    🎓 Continuous Upskilling
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1.5">
                  Continuous Learning & Certifications
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
                  Sponsored statutory certifications, comprehensive training on BIS, ISI, FMCS & NABL
                  testing protocols, hands-on audit simulations, and direct executive mentorship.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-indigo-700">
                <Check size={13} className="text-emerald-500 shrink-0" />
                <span>Sponsored certifications & executive mentorship</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 hover:border-amber-500 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-8px_rgba(245,158,11,0.15)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                    🇮🇳 National Impact
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-1.5">
                  High-Impact Mission
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
                  Protect 1.4 billion Indian citizens by ensuring critical industrial machinery, medical
                  appliances, and consumer electronics comply with rigorous statutory safety norms.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-amber-700">
                <Check size={13} className="text-emerald-500 shrink-0" />
                <span>Upholding national standards & safety</span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/90 hover:border-cyan-500 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-8px_rgba(6,182,212,0.15)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-cyan-500/20 text-cyan-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Building2 size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-100">
                    🏛️ Delhi NCR Hub
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-1.5">
                  Modern Delhi NCR Hub
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3">
                  Collaborate in state-of-the-art corporate offices equipped with advanced calibration
                  testing infrastructure, ergonomic workspaces, and modern digital productivity tools.
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-cyan-700">
                <Check size={13} className="text-emerald-500 shrink-0" />
                <span>NABL test infrastructure & modern setups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. CURRENT OPENINGS SECTION (LIVE JOB BOARD)                   */}
      {/* ============================================================== */}
      <section id="openings-section" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold text-[#0075B6] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Live Opportunities
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Current Open Positions
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Discover your next career leap. All active openings are reviewed daily by our HR panel.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {filteredJobs.length > 0 ? (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {filteredJobs.length} {filteredJobs.length === 1 ? "Position" : "Positions"} Available
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  Accepting Applications
                </span>
              )}
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm mb-10 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by job title, skill, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6] transition-all"
                />
              </div>

              {/* Location Chips */}
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
                  <MapPin size={13} /> Location:
                </span>
                {locationsList.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`cursor-pointer px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedLocation === loc
                        ? "bg-[#0075B6] text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Department Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-slate-100 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1 shrink-0">
                <Filter size={13} /> Department:
              </span>
              {departmentsList.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`cursor-pointer px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedDept === dept
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards Grid */}
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-slate-200/90 shadow-sm max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-blue-50 text-[#0075B6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                {activeJobs.length === 0
                  ? "No Active Openings Right Now"
                  : "No Matching Roles Found"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed max-w-lg mx-auto">
                {activeJobs.length === 0
                  ? "We do not currently have published vacancies at this moment. However, we are always on the lookout for stellar talent across engineering, regulatory compliance, and business operations."
                  : "We don’t currently have open listings matching your specific filters. However, we are always on the lookout for stellar talent!"}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {activeJobs.length > 0 && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedDept("All");
                      setSelectedLocation("All");
                    }}
                    className="cursor-pointer px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs"
                  >
                    Reset All Filters
                  </button>
                )}
                <button
                  onClick={() => handleOpenApply(null)}
                  className="cursor-pointer px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-[#0075B6] hover:bg-[#005a8f] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <UploadCloud size={16} /> Submit General Application
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  id={`job-${job.id}`}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-[#0075B6] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-extrabold text-[#0075B6] uppercase tracking-wider bg-blue-50/80 px-3 py-1 rounded-full">
                        {job.department || "Consulting"}
                      </span>
                      {job.isFeatured && (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60 flex items-center gap-1">
                          <Sparkles size={11} /> Urgent
                        </span>
                      )}
                    </div>

                    {/* Job Title */}
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0075B6] transition-colors leading-snug">
                      {job.title}
                    </h3>

                    {/* Summary Excerpt */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {job.summary}
                    </p>

                    {/* Key Attributes Meta */}
                    <div className="pt-2 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-500">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#0075B6]" />
                          {job.location || "Delhi NCR"}
                        </span>
                        <span className="text-slate-400 font-normal">
                          {job.workMode || "On-site"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-slate-400" />
                          {job.experience || "1-3 Years"}
                        </span>
                        <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-bold">
                          {job.jobType || "Full Time"}
                        </span>
                      </div>

                      {job.salary && (
                        <div className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50/80 px-2.5 py-1 rounded-lg">
                          <IndianRupee size={13} className="shrink-0" />
                          <span>{job.salary.replace(/^[₹$]\s*/, "")}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedJobForDetail(job)}
                      className="cursor-pointer flex-1 py-2.5 px-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#002b5c] hover:text-white hover:border-[#002b5c] text-slate-700 font-bold text-xs transition-all duration-200 text-center hover:shadow-sm"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleOpenApply(job)}
                      className="cursor-pointer flex-1 py-2.5 px-3 rounded-xl bg-[#0075B6] hover:bg-[#005a8f] text-white font-bold text-xs shadow-md shadow-[#0075B6]/20 transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      Apply Now <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. OUR 4-STEP HIRING JOURNEY                                   */}
      {/* ============================================================== */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0075B6] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Clear & Transparent
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 4-Step Hiring Process
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From application to day-one onboarding, here is what you can expect when interviewing with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
              <span className="text-3xl font-extrabold text-[#0075B6]/20 block mb-2">01</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Application Screening</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our talent acquisition team carefully reviews your resume, background, and alignment
                with the role within 48 hours.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
              <span className="text-3xl font-extrabold text-[#0075B6]/20 block mb-2">02</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Technical Discovery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A 30-45 minute interactive discussion with our technical heads to evaluate your
                domain know-how and problem-solving capability.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
              <span className="text-3xl font-extrabold text-[#0075B6]/20 block mb-2">03</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Leadership Alignment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A friendly conversation with company leadership to understand your career
                aspirations and cultural resonance.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 relative">
              <span className="text-3xl font-extrabold text-emerald-500/30 block mb-2">04</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Offer & Onboarding</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear, competitive offer rollout followed by a structured onboarding program with
                dedicated mentorship on Day 1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. CANDIDATE FAQ ACCORDION                                     */}
      {/* ============================================================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-[#0075B6] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Have Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about working at AN Global Services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="cursor-pointer w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#0075B6] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* ============================================================== */}
      {/* 8. JOB DETAIL MODAL                                            */}
      {/* ============================================================== */}
      {selectedJobForDetail && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedJobForDetail(null);
          }}
          className="fixed inset-0 z-[99999] bg-black/25 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200/90 overflow-hidden animate-fade-in my-auto">
            {/* Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-[#0B1E33] text-white relative">
              <button
                onClick={() => setSelectedJobForDetail(null)}
                className="cursor-pointer absolute top-5 right-5 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 h-8 w-8 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close details"
              >
                <X size={16} />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[11px] font-extrabold text-cyan-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {selectedJobForDetail.department}
                </span>
                <span className="text-[11px] font-bold text-slate-300 bg-white/5 px-2.5 py-1 rounded-full">
                  {selectedJobForDetail.jobType || "Full Time"}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                {selectedJobForDetail.title}
              </h2>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin size={13} className="text-cyan-400" />
                  {selectedJobForDetail.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-cyan-400" />
                  {selectedJobForDetail.experience}
                </span>
                {selectedJobForDetail.salary && (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <IndianRupee size={13} className="shrink-0" />
                    <span>{selectedJobForDetail.salary.replace(/^[₹$]\s*/, "")}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Role Overview
                </h4>
                <p className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {selectedJobForDetail.summary}
                </p>
              </div>

              {/* Responsibilities */}
              {selectedJobForDetail.responsibilities && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Responsibilities
                  </h4>
                  <div className="space-y-1.5 whitespace-pre-line text-slate-600 bg-white border border-slate-100 p-4 rounded-xl">
                    {selectedJobForDetail.responsibilities}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {selectedJobForDetail.requirements && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Qualifications & Skills Required
                  </h4>
                  <div className="space-y-1.5 whitespace-pre-line text-slate-600 bg-white border border-slate-100 p-4 rounded-xl">
                    {selectedJobForDetail.requirements}
                  </div>
                </div>
              )}

              {/* Perks */}
              {selectedJobForDetail.perks && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Perks & Work Culture
                  </h4>
                  <div className="space-y-1.5 whitespace-pre-line text-emerald-800 bg-emerald-50/60 border border-emerald-100 p-4 rounded-xl">
                    {selectedJobForDetail.perks}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedJobForDetail(null)}
                className="cursor-pointer px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs"
              >
                Close
              </button>
              <button
                onClick={() => handleOpenApply(selectedJobForDetail)}
                className="cursor-pointer px-6 py-2.5 rounded-xl bg-[#0075B6] hover:bg-[#005a8f] text-white font-bold text-xs shadow-md shadow-[#0075B6]/20 flex items-center gap-1.5"
              >
                Apply for this Position <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 9. UNIFIED APPLICATION MODAL (SINGLE FORM FOR ALL JOBS)        */}
      {/* ============================================================== */}
      {isApplyModalOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseApply();
          }}
          className="fixed inset-0 z-[100000] bg-black/25 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <div className="bg-white rounded-3xl max-w-2xl sm:max-w-[700px] w-full max-h-[92vh] flex flex-col shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-200/90 overflow-hidden animate-fade-in my-auto">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-slate-900 to-[#0075B6] text-white relative shrink-0">
              <button
                onClick={handleCloseApply}
                className="cursor-pointer absolute top-5 right-5 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 h-8 w-8 rounded-full flex items-center justify-center transition-colors"
                aria-label="Close application form"
              >
                <X size={16} />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                <FileText size={12} /> Candidate Application
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Submit Your Details to Apply
              </h3>
              <p className="text-xs text-slate-200 mt-1 truncate">
                Applying for: <strong className="text-cyan-300">{applyJobTitle}</strong>
              </p>
            </div>

            {/* Form Content / Success state */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              {formSuccess ? (
                /* Success View */
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100 shadow-inner">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-extrabold text-slate-900">
                    Application Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for applying to AN Global Services. Your application has been logged
                    with reference ID:
                  </p>
                  <div className="inline-block bg-slate-100 text-slate-800 font-mono font-bold text-xs px-4 py-2 rounded-lg border border-slate-200">
                    {formSuccess.applicationId}
                  </div>
                  <p className="text-xs text-slate-500 pt-2">
                    Our talent acquisition desk will review your resume and reach out to shortlisted
                    candidates within 48 business hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleCloseApply}
                      className="cursor-pointer px-6 py-2.5 rounded-xl bg-[#0075B6] hover:bg-[#005a8f] text-white font-bold text-xs shadow-md"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                /* The Application Form */
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3.5 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Honeypot anti-spam */}
                  <input type="text" name="hiddenField" className="hidden" tabIndex="-1" />

                  {/* Target Position Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Position Applying For <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={applyJobTitle}
                      onChange={(e) => setApplyJobTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                    >
                      {activeJobs.map((j) => (
                        <option key={j.id} value={j.title}>
                          {j.title} ({j.department})
                        </option>
                      ))}
                      <option value="General / Spontaneous Application">
                        Other / Spontaneous Application (All Profiles)
                      </option>
                    </select>
                  </div>

                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Write your name"
                        value={formData.fullName}
                        onKeyDown={(e) => {
                          if (/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[0-9]/g, "");
                          setFormData({ ...formData, fullName: val });
                        }}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Write your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                      />
                    </div>
                  </div>

                  {/* Phone & Experience */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Mobile Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="Write your number"
                        value={formData.phone}
                        onKeyDown={(e) => {
                          if (
                            !/[0-9]/.test(e.key) &&
                            !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key) &&
                            !e.ctrlKey && !e.metaKey
                          ) {
                            e.preventDefault();
                          }
                        }}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setFormData({ ...formData, phone: val });
                        }}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Total Experience <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                      >
                        <option value="Fresher (0-1 Year)">Fresher (0-1 Year)</option>
                        <option value="1-3 Years">1-3 Years</option>
                        <option value="3-5 Years">3-5 Years</option>
                        <option value="5-8 Years">5-8 Years</option>
                        <option value="8+ Years">8+ Years (Leadership)</option>
                      </select>
                    </div>
                  </div>

                  {/* Location & Notice Period */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Current Location / City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Write your current city / location"
                        value={formData.currentLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, currentLocation: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Notice Period
                      </label>
                      <select
                        value={formData.noticePeriod}
                        onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                      >
                        <option value="Immediate">Immediate Joiner</option>
                        <option value="15 Days">15 Days</option>
                        <option value="30 Days">30 Days (1 Month)</option>
                        <option value="60+ Days">60+ Days</option>
                      </select>
                    </div>
                  </div>

                  {/* Qualification & LinkedIn URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        Highest Qualification
                      </label>
                      <input
                        type="text"
                        placeholder="Write your highest qualification"
                        value={formData.qualification}
                        onChange={(e) =>
                          setFormData({ ...formData, qualification: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        LinkedIn / Portfolio URL (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="Paste your LinkedIn or portfolio link"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                      />
                    </div>
                  </div>

                  {/* Resume Upload Box */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Upload Resume / CV <span className="text-red-500">*</span>
                      <span className="text-slate-400 font-normal lowercase ml-1">
                        (PDF, DOC, DOCX up to 5MB)
                      </span>
                    </label>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      className="hidden"
                    />

                    {resumeFile ? (
                      <div className="p-3.5 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <FileText size={20} className="text-emerald-600" />
                          <div>
                            <p className="text-xs font-bold text-slate-800 truncate max-w-xs">
                              {resumeFile.name}
                            </p>
                            <p className="text-[10px] text-slate-500">
                              {(resumeFile.size / 1024).toFixed(1)} KB
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setResumeFile(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className="cursor-pointer text-slate-400 hover:text-red-500 text-xs font-bold p-1"
                        >
                          Change
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-200 hover:border-[#0075B6] rounded-2xl p-4 text-center cursor-pointer bg-slate-50 hover:bg-blue-50/30 transition-all"
                      >
                        <UploadCloud size={24} className="mx-auto text-[#0075B6] mb-1.5" />
                        <p className="text-xs font-bold text-slate-800">
                          Click to browse or drag & drop your resume
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          Supported formats: PDF, DOC, DOCX
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Why join / Brief Note */}
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      Brief Note / Why AN Global Services? (Optional)
                    </label>
                    <textarea
                      rows="2"
                      placeholder="Write a brief note or pitch (optional)..."
                      value={formData.whyJoin}
                      onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0075B6]/20 focus:border-[#0075B6]"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="cursor-pointer w-full py-3.5 px-6 rounded-xl text-white bg-gradient-to-r from-[#0075B6] to-[#005a8f] hover:from-[#005a8f] hover:to-[#004a7a] font-bold text-sm shadow-lg shadow-[#0075B6]/25 hover:shadow-[#0075B6]/40 transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting Application & Resume...
                        </>
                      ) : (
                        <>
                          <Send size={15} /> Submit Application
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Your resume will be sent directly to our executive hiring desk.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
