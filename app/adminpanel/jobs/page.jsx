"use client";

import { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy, deleteDoc, doc, updateDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Briefcase, MapPin, Clock, Plus, Search, Trash2, Edit3, CheckCircle, XCircle, Eye, Sparkles, Building2, AlertCircle } from "lucide-react";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState({ show: false, id: null, title: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [seeding, setSeeding] = useState(false);
  const [actionMsg, setActionMsg] = useState({ text: "", type: "" });
  const router = useRouter();

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
      const fetchPromise = getDocs(q);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Network timeout")), 5000)
      );
      const snap = await Promise.race([fetchPromise, timeoutPromise]);
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(data);
    } catch (err) {
      console.warn("Notice: Fetching jobs from Cloud Firestore timed out or network offline:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const executeDeleteJob = async () => {
    if (!deleteModal.id) return;
    try {
      await deleteDoc(doc(db, "jobs", deleteModal.id));
      setJobs(jobs.filter(job => job.id !== deleteModal.id));
      setDeleteModal({ show: false, id: null, title: "" });
      setActionMsg({ text: "Job opening deleted successfully.", type: "success" });
      setTimeout(() => setActionMsg({ text: "", type: "" }), 3000);
    } catch (err) {
      console.error("Failed to delete job:", err);
      setActionMsg({ text: "Failed to delete job.", type: "error" });
    }
  };

  const toggleJobStatus = async (jobId, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Closed" : "Active";
    try {
      await updateDoc(doc(db, "jobs", jobId), {
        status: newStatus,
        updatedAt: serverTimestamp()
      });
      setJobs(jobs.map(j => j.id === jobId ? { ...j, status: newStatus } : j));
      setActionMsg({ text: `Job marked as ${newStatus}.`, type: "success" });
      setTimeout(() => setActionMsg({ text: "", type: "" }), 2500);
    } catch (err) {
      console.error("Failed to toggle status", err);
      setActionMsg({ text: "Failed to update status.", type: "error" });
    }
  };

  const handleSeedJobs = async () => {
    setSeeding(true);
    const sampleJobs = [
      {
        title: "Senior BIS & Regulatory Compliance Specialist",
        slug: "senior-bis-regulatory-compliance-specialist",
        department: "Regulatory & Compliance",
        jobType: "Full Time",
        workMode: "On-site (Delhi NCR)",
        location: "Delhi NCR / Head Office",
        experience: "3-5 Years",
        openings: "3",
        salary: "₹6,00,000 - ₹10,00,000 PA",
        education: "B.Tech / B.E. / M.Sc Chemistry / Applied Sciences",
        status: "Active",
        isFeatured: true,
        summary: "Lead end-to-end BIS ISI Mark & CRS compliance for domestic and foreign manufacturers. Directly liaise with Bureau of Indian Standards and NABL accredited laboratories.",
        responsibilities: "• Manage complete application filing for ISI mark, CRS registration, and FMCS licenses\n• Coordinate sample preparation, testing standards, and compliance documentation\n• Liaison with BIS officials, laboratory directors, and foreign manufacturer representatives\n• Review test reports against Indian Standards (IS specifications) and resolve discrepancies\n• Guide clients through pre-audit factory inspections and quality assurance setups",
        requirements: "• 3+ years experience handling BIS (ISI, CRS, FMCS) certifications\n• In-depth knowledge of Indian Standards, Scheme-I & Scheme-II guidelines\n• Exceptional communication, client-management, and statutory documentation skills\n• Degree in Engineering, Chemistry, or allied scientific discipline",
        perks: "• High-growth performance incentives & annual bonuses\n• Opportunity to represent clients at international trade delegations\n• Comprehensive health insurance & professional development allowance",
        createdAt: serverTimestamp()
      },
      {
        title: "Laboratory Calibration & Testing Engineer",
        slug: "laboratory-calibration-testing-engineer",
        department: "Laboratory Testing & Calibration",
        jobType: "Full Time",
        workMode: "On-site (Delhi NCR)",
        location: "Delhi NCR / Laboratory Hub",
        experience: "1-3 Years",
        openings: "2",
        salary: "₹4,50,000 - ₹7,50,000 PA",
        education: "B.Tech Mechanical / Electrical / Instrumentation Engineering",
        status: "Active",
        isFeatured: true,
        summary: "Execute precision calibration and testing on industrial machinery, autoclaves, centrifuges, and analytical balances in compliance with ISO/IEC 17025 standards.",
        responsibilities: "• Perform calibration protocols on thermal, dimensional, mechanical, and electro-technical equipment\n• Generate NABL-compliant calibration certificates and measurement uncertainty budgets\n• Assist clients in turnkey laboratory machinery commissioning and validation\n• Maintain standard test equipment and reference standards traceability records\n• Collaborate with technical teams to optimize equipment performance and reliability",
        requirements: "• 1-3 years practical experience in NABL accredited testing/calibration lab\n• Sound understanding of ISO/IEC 17025:2017 principles and calibration procedures\n• Hands-on expertise with balances, autoclaves, centrifuges, or electrical test benches\n• Strong attention to detail and data integrity",
        perks: "• Technical mentorship from certified quality managers\n• Modern laboratory facilities with world-class instrumentation\n• Annual certifications sponsorship and health benefits",
        createdAt: serverTimestamp()
      },
      {
        title: "International Trade & FMCS Liaison Officer",
        slug: "international-trade-fmcs-liaison-officer",
        department: "International Trade & Logistics",
        jobType: "Full Time",
        workMode: "Hybrid",
        location: "Delhi NCR / Remote Hybrid",
        experience: "2-4 Years",
        openings: "2",
        salary: "₹5,50,000 - ₹9,00,000 PA",
        education: "Graduate in International Business / Foreign Trade / Law / Engineering",
        status: "Active",
        isFeatured: false,
        summary: "Bridge foreign manufacturing corporations across Europe, Asia, and Americas with Indian statutory compliance, customs clearance, and Authorized Indian Representative (AIR) support.",
        responsibilities: "• Act as Authorized Indian Representative (AIR) point of contact for overseas enterprises\n• Organize international factory audits and coordinate with BIS technical officers\n• Manage cross-border documentation, apostille verifications, and regulatory clearances\n• Assist global exporters in navigating Quality Control Orders (QCOs) and customs port guidelines\n• Conduct multi-timezone operational updates with international business partners",
        requirements: "• 2+ years experience in international trade, FMCS compliance, or foreign manufacturer liaison\n• Fluent English communication (written & spoken); multilingual proficiency is a bonus\n• Thorough grasp of BIS FMCS norms, customs regulations, and trade compliance\n• Proficiency with international client relationship management tools",
        perks: "• Global corporate travel opportunities for plant audits\n• Competitive incentive model on foreign enterprise closures\n• Flexible hybrid working model and modern tech stack",
        createdAt: serverTimestamp()
      },
      {
        title: "Industrial Machinery Sales & Turnkey Project Manager",
        slug: "industrial-machinery-sales-turnkey-project-manager",
        department: "Engineering & Machinery",
        jobType: "Full Time",
        workMode: "On-site (Delhi NCR)",
        location: "Delhi NCR / Noida",
        experience: "3-6 Years",
        openings: "2",
        salary: "₹6,00,000 - ₹12,00,000 PA + High Incentives",
        education: "B.Tech / Diploma in Engineering / MBA Marketing",
        status: "Active",
        isFeatured: false,
        summary: "Drive turnkey laboratory setup sales, cleanroom engineering machinery, and testing equipment consultations for manufacturing plants across India.",
        responsibilities: "• Consult industrial clients, pharma plants, and R&D labs on complete testing machinery requirements\n• Prepare techno-commercial proposals for autoclaves, centrifuges, balances, and testing setups\n• Manage vendor relations, equipment procurement, and on-site client delivery logistics\n• Lead product demonstrations and negotiate commercial terms with enterprise procurement heads\n• Achieve quarterly revenue milestones with aggressive performance bonuses",
        requirements: "• 3+ years experience in B2B technical sales, laboratory equipment, or industrial capital goods\n• Proven track record of closing high-value turnkey equipment deals\n• Strong networking and presentation skills across C-suite manufacturing heads\n• Valid driving license and willingness to visit client manufacturing facilities",
        perks: "• Industry-leading commission structure on turnkey projects\n• Company vehicle allowance and travel reimbursement\n• Fast-track path to Senior Business Director",
        createdAt: serverTimestamp()
      },
      {
        title: "Full Stack Web Developer (Next.js & Cloud)",
        slug: "full-stack-web-developer",
        department: "Digital & IT",
        jobType: "Full Time",
        workMode: "Hybrid",
        location: "Delhi NCR / Hybrid",
        experience: "2-4 Years",
        openings: "1",
        salary: "₹5,00,000 - ₹8,50,000 PA",
        education: "B.Tech / BCA / MCA / Computer Science Degree",
        status: "Active",
        isFeatured: false,
        summary: "Build, scale, and optimize AN Global Services' modern digital portal, automated compliance tools, and client interaction dashboards.",
        responsibilities: "• Develop high-performance web applications using Next.js, React, Tailwind CSS, and Firebase/Node.js\n• Build interactive customer portals, document submission engines, and internal admin panels\n• Ensure Google 100/100 Core Web Vitals, programmatic SEO schemas, and mobile responsiveness\n• Integrate third-party APIs, CRM pipelines, and secure cloud storage architectures\n• Maintain code quality, automated deployments, and continuous system monitoring",
        requirements: "• 2+ years professional experience building web apps with Next.js (App Router) & React\n• Strong proficiency in Tailwind CSS, JavaScript (ES6+), and cloud databases (Firestore/PostgreSQL)\n• Strong understanding of SEO best practices, structured data, and web performance optimization\n• Passion for crafting pixel-perfect, premium user interfaces with rich animations",
        perks: "• Cutting-edge development environment (MacBook/high-spec rig provided)\n• Flexible hybrid schedule and innovation learning days\n• Comprehensive health coverage & team outings",
        createdAt: serverTimestamp()
      },
      {
        title: "Accounts & Commercial Compliance Executive",
        slug: "accounts-commercial-compliance-executive",
        department: "Finance & Accounts",
        jobType: "Full Time",
        workMode: "On-site (Delhi NCR)",
        location: "Delhi NCR / Head Office",
        experience: "1-3 Years",
        openings: "1",
        salary: "₹3,50,000 - ₹5,00,000 PA",
        education: "B.Com / M.Com / Inter CA",
        status: "Active",
        isFeatured: false,
        summary: "Manage client billing, GST filings, statutory fee payments to BIS/statutory bodies, and bank reconciliations for corporate services.",
        responsibilities: "• Process client invoices, proforma billings, and payment follow-ups\n• Coordinate government treasury challan payments for BIS application and audit fees\n• Maintain books of accounts, ledger reconciliations, and quarterly GST/TDS filings\n• Prepare monthly financial summaries and vendor payout reports for senior leadership\n• Assist external auditors during annual statutory audit processes",
        requirements: "• 1-3 years corporate accounting experience with Tally Prime / ERP software\n• Solid understanding of GST, TDS, and statutory payment workflows\n• Strong proficiency in Microsoft Excel (VLOOKUP, Pivot Tables)\n• High integrity, precision, and adherence to confidentiality",
        perks: "• Predictable working hours and positive work-life balance\n• Annual bonus and festival benefits\n• Opportunities to grow into Finance Manager role",
        createdAt: serverTimestamp()
      }
    ];

    try {
      for (const item of sampleJobs) {
        await addDoc(collection(db, "jobs"), item);
      }
      setActionMsg({ text: "Success! 6 Flagship job openings seeded.", type: "success" });
      await fetchJobs();
    } catch (err) {
      console.error("Seeding error:", err);
      setActionMsg({ text: "Failed to seed sample jobs.", type: "error" });
    } finally {
      setSeeding(false);
      setTimeout(() => setActionMsg({ text: "", type: "" }), 3000);
    }
  };

  // Filter logic
  const filteredJobs = jobs.filter((job) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      (job.title && job.title.toLowerCase().includes(searchLower)) ||
      (job.department && job.department.toLowerCase().includes(searchLower)) ||
      (job.location && job.location.toLowerCase().includes(searchLower)) ||
      (job.jobType && job.jobType.toLowerCase().includes(searchLower));

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && (job.status === "Active" || !job.status)) ||
      (statusFilter === "closed" && job.status === "Closed");

    const matchesDept =
      departmentFilter === "all" ||
      (job.department && job.department.toLowerCase() === departmentFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesDept;
  });

  const activeCount = jobs.filter(j => j.status === "Active" || !j.status).length;
  const closedCount = jobs.filter(j => j.status === "Closed").length;
  const uniqueDepartments = Array.from(new Set(jobs.map(j => j.department).filter(Boolean)));

  return (
    <>
      {/* Delete Confirmation Modal */}
      {deleteModal.show && (
        <div className="fixed inset-0 z-[100000] bg-gray-900/40 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center transform transition-all border border-white/60">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-red-100 shadow-inner">
              <Trash2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">Delete Opening?</h3>
            <p className="text-gray-500 text-sm mb-8 font-medium leading-relaxed">
              Are you sure you want to permanently remove <strong className="text-gray-800">{deleteModal.title}</strong>? It will no longer appear on the live Careers page.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModal({ show: false, id: null, title: "" })}
                className="cursor-pointer flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors shadow-sm"
              >
                Cancel
              </button>
              <button
                onClick={executeDeleteJob}
                className="cursor-pointer flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto py-10 px-5 sm:px-8 animate-fade-in">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0072b1] text-xs font-bold mb-2">
              <Briefcase size={14} /> Recruitment & Talent Portal
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Job Openings</h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              Add, publish, edit, and manage all career openings on your website.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/careers"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white text-gray-700 hover:text-[#0072b1] border border-gray-200 font-bold px-4 py-3 rounded-xl shadow-sm hover:border-[#0072b1]/40 transition-all text-sm"
            >
              <Eye size={16} /> View Careers Page
            </Link>
            <button
              onClick={() => router.push("/adminpanel/createjob")}
              className="cursor-pointer inline-flex items-center gap-2 bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white font-bold px-5 py-3 rounded-xl shadow-md transform hover:-translate-y-0.5 transition-all text-sm shrink-0"
            >
              <Plus size={18} /> Post New Job
            </button>
          </div>
        </div>

        {/* Global Action Message Banner */}
        {actionMsg.text && (
          <div className={`mb-6 p-4 rounded-xl text-sm font-semibold border flex items-center gap-2 ${actionMsg.type === "success" ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"}`}>
            {actionMsg.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
            {actionMsg.text}
          </div>
        )}

        {/* Quick Stats Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Positions</p>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">{jobs.length}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0072b1] flex items-center justify-center">
              <Briefcase size={22} />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Live & Active</p>
              <h3 className="text-3xl font-extrabold text-green-600 mt-1">{activeCount}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <CheckCircle size={22} />
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-gray-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Departments</p>
              <h3 className="text-3xl font-extrabold text-purple-600 mt-1">{uniqueDepartments.length}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Building2 size={22} />
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-gray-200/80 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by job title, department, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20 focus:border-[#0072b1] transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Status Filter */}
            <div className="flex items-center bg-gray-100 p-1 rounded-xl text-xs font-bold text-gray-600">
              <button
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${statusFilter === "all" ? "bg-white text-gray-900 shadow-sm" : "hover:text-gray-900"}`}
              >
                All ({jobs.length})
              </button>
              <button
                onClick={() => setStatusFilter("active")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${statusFilter === "active" ? "bg-white text-green-700 shadow-sm" : "hover:text-gray-900"}`}
              >
                Active ({activeCount})
              </button>
              <button
                onClick={() => setStatusFilter("closed")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${statusFilter === "closed" ? "bg-white text-gray-500 shadow-sm" : "hover:text-gray-900"}`}
              >
                Closed ({closedCount})
              </button>
            </div>

            {/* Department Filter */}
            {uniqueDepartments.length > 0 && (
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0072b1]/20"
              >
                <option value="all">All Departments</option>
                {uniqueDepartments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-24 bg-white/60 backdrop-blur-md rounded-3xl border border-white/60 shadow-sm">
            <div className="w-10 h-10 border-4 border-[#0072b1]/20 border-t-[#0072b1] rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm font-bold text-gray-500">Loading career openings...</p>
          </div>
        ) : filteredJobs.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 px-6 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200/80 shadow-sm">
            <div className="w-16 h-16 bg-blue-50 text-[#0072b1] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">No Job Openings Found</h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
              {jobs.length === 0
                ? "You haven't posted any jobs yet. You can post a new role from scratch or populate initial flagship roles with one click!"
                : "No job postings matched your current search and filter criteria."}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => router.push("/adminpanel/createjob")}
                className="cursor-pointer bg-gradient-to-r from-[#0072b1] to-[#005f96] hover:from-[#005f96] hover:to-[#004a7a] text-white font-bold px-6 py-3 rounded-xl shadow-md text-sm transition-all"
              >
                + Post New Job
              </button>
              {jobs.length === 0 && (
                <button
                  onClick={handleSeedJobs}
                  disabled={seeding}
                  className="cursor-pointer bg-white text-gray-700 hover:text-[#0072b1] border border-gray-200 font-bold px-5 py-3 rounded-xl shadow-sm hover:border-[#0072b1] transition-all text-sm inline-flex items-center gap-2"
                >
                  <Sparkles size={16} className="text-amber-500" />
                  {seeding ? "Generating..." : "Seed 6 Flagship Sample Roles"}
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Jobs List Cards */
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isActive = job.status === "Active" || !job.status;
              return (
                <div
                  key={job.id}
                  className={`bg-white/95 backdrop-blur-md rounded-2xl border p-5 sm:p-6 transition-all shadow-sm hover:shadow-md ${isActive ? "border-gray-200/80 hover:border-[#0072b1]/40" : "border-gray-200/50 bg-gray-50/70 opacity-75"}`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Job Details */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold tracking-wider uppercase bg-blue-50 text-[#0072b1]">
                          {job.department || "General"}
                        </span>
                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 ${isActive ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}></span>
                          {isActive ? "Active" : "Closed"}
                        </span>
                        {job.isFeatured && (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center gap-1">
                            <Sparkles size={12} /> Featured
                          </span>
                        )}
                        {job.jobType && (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-gray-100 text-gray-600">
                            {job.jobType}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
                        {job.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {job.summary || "No summary provided."}
                      </p>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-semibold text-gray-500 pt-1">
                        <span className="flex items-center gap-1">
                          <MapPin size={13} className="text-[#0072b1]" /> {job.location || "Delhi NCR"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} className="text-gray-400" /> {job.experience || "Not specified"}
                        </span>
                        {job.salary && (
                          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                            {job.salary}
                          </span>
                        )}
                        {job.openings && (
                          <span className="text-gray-400">
                            Openings: <strong className="text-gray-700">{job.openings}</strong>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                      {/* Toggle status */}
                      <button
                        onClick={() => toggleJobStatus(job.id, job.status || "Active")}
                        className={`cursor-pointer px-3 py-2 rounded-xl text-xs font-bold transition-all border ${isActive ? "bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200" : "bg-green-50 hover:bg-green-100 text-green-700 border-green-200"}`}
                        title={isActive ? "Mark position as Closed" : "Re-open position as Active"}
                      >
                        {isActive ? "Close Role" : "Activate"}
                      </button>

                      {/* Edit */}
                      <button
                        onClick={() => router.push(`/adminpanel/createjob?id=${job.id}`)}
                        className="cursor-pointer p-2.5 rounded-xl text-gray-600 hover:text-[#0072b1] hover:bg-blue-50 transition-all border border-gray-200/80 shadow-xs"
                        title="Edit Job"
                      >
                        <Edit3 size={16} />
                      </button>

                      {/* View on website */}
                      <Link
                        href={`/careers#job-${job.id}`}
                        target="_blank"
                        className="p-2.5 rounded-xl text-gray-600 hover:text-[#0072b1] hover:bg-blue-50 transition-all border border-gray-200/80 shadow-xs"
                        title="View on Careers Page"
                      >
                        <Eye size={16} />
                      </Link>

                      {/* Delete */}
                      <button
                        onClick={() => setDeleteModal({ show: true, id: job.id, title: job.title })}
                        className="cursor-pointer p-2.5 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 transition-all border border-gray-200/80 shadow-xs"
                        title="Delete Job Opening"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
