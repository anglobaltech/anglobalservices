"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2, ArrowRight, TrendingUp, MonitorSmartphone, Code,
  Database, Zap, Shield, Users, Target, Layout, ChevronRight,
  Globe, BarChart3, Smartphone, Mail, Layers, Settings, Award,
  Clock, HeadphonesIcon, Lightbulb, Rocket, PieChart, FileCode,
  ServerCog, Palette, Search, ShieldCheck, Workflow
} from "lucide-react";
import ConsultationModal from "./components/ConsultationModal";

/* ──────────────────────────── Lazy Section Wrapper ──────────────────────────── */
function LazySection({ children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: "50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } ${className}`}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────── Data ──────────────────────────── */

const serviceCards = [
  {
    title: "Website Development",
    desc: "We build fast, secure, and responsive websites designed to engage your audience and convert visitors into loyal customers. From corporate websites to complex web applications — every project is crafted for results.",
    icon: MonitorSmartphone,
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    border: "border-blue-100",
  },
  {
    title: "CRM Development",
    desc: "Custom CRM solutions tailored to your unique business workflows. Automate repetitive tasks, track every lead, and manage customer relationships effortlessly with a scalable, intelligent CRM architecture.",
    icon: Database,
    bg: "bg-green-50",
    iconColor: "text-green-600",
    border: "border-green-100",
  },
];

const webDevFeatures = [
  { title: "Custom UI/UX Design", desc: "Pixel-perfect designs tailored to your brand identity and target audience psychology." },
  { title: "Mobile-First Responsive", desc: "Websites that look and perform beautifully on every device — phone, tablet, and desktop." },
  { title: "SEO-Optimized Architecture", desc: "Built from the ground up with clean code, fast load times, and search engine best practices." },
  { title: "Core Web Vitals Performance", desc: "Optimized for Google's page experience metrics to ensure top search rankings." },
  { title: "E-Commerce Solutions", desc: "Secure online stores with payment gateways, inventory management, and order tracking." },
  { title: "CMS & Admin Panels", desc: "Easy-to-use content management systems so you can update your website without developers." },
];

const webDevTechStack = ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "WordPress", "Shopify", "Tailwind CSS"];

const crmFeatures = [
  { title: "Lead Management", desc: "Capture, track, and nurture leads through every stage of your sales pipeline with automated follow-ups." },
  { title: "Workflow Automation", desc: "Eliminate manual data entry by automating email sequences, task assignments, and status updates." },
  { title: "Custom Dashboards", desc: "Real-time analytics dashboards that give you a 360-degree view of your sales, support, and marketing data." },
  { title: "Third-Party Integrations", desc: "Connect your CRM with email platforms, accounting software, payment gateways, and more via secure APIs." },
  { title: "Role-Based Access", desc: "Granular permission controls to ensure team members only see and edit the data they need." },
  { title: "Cloud Scalability", desc: "Architecture designed to grow with your business — from 10 users to 10,000 without performance loss." },
];

const crmTechStack = ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS", "REST APIs"];

const processSteps = [
  { title: "Discovery & Strategy", desc: "We start by understanding your business goals, target audience, and competitive landscape. Every decision is backed by strategy, not assumptions.", icon: Target, color: "bg-blue-500" },
  { title: "UI/UX Design", desc: "Our design team creates wireframes and high-fidelity mockups that prioritize intuitive navigation, visual appeal, and conversion optimization.", icon: Palette, color: "bg-purple-500" },
  { title: "Agile Development", desc: "We build your solution in iterative sprints using modern, scalable technologies — with regular demos so you're never in the dark.", icon: Code, color: "bg-orange-500" },
  { title: "Testing & QA", desc: "Every feature goes through rigorous quality assurance — performance testing, security audits, cross-browser checks, and mobile responsiveness validation.", icon: ShieldCheck, color: "bg-green-500" },
  { title: "Launch & Deploy", desc: "We handle the complete deployment pipeline — domain setup, SSL certificates, server configuration, and a smooth go-live with zero downtime.", icon: Rocket, color: "bg-red-500" },
  { title: "Ongoing Support", desc: "Post-launch, we provide continuous monitoring, bug fixes, feature updates, and performance optimization to keep your product running flawlessly.", icon: HeadphonesIcon, color: "bg-cyan-500" },
];

const whyChooseUs = [
  { title: "Business-First Approach", desc: "We don't just write code — we solve business problems. Every technical decision is aligned with your revenue goals and growth strategy.", icon: Lightbulb },
  { title: "Scalable Architecture", desc: "Our solutions are built to grow seamlessly. From startup MVPs to enterprise platforms, our architecture handles increasing traffic, data, and users.", icon: Layers },
  { title: "Transparent Communication", desc: "Weekly progress reports, shared project boards, and dedicated project managers ensure you always know exactly where your project stands.", icon: BarChart3 },
  { title: "Security-First Development", desc: "Industry-standard encryption, regular vulnerability assessments, and OWASP-compliant development practices protect your data at every layer.", icon: Shield },
  { title: "On-Time Delivery", desc: "We commit to realistic timelines and deliver on them. Agile sprints with clear milestones keep every project on track and on budget.", icon: Clock },
  { title: "Dedicated Support Team", desc: "A responsive support team available for bug fixes, feature enhancements, and technical assistance long after your project goes live.", icon: HeadphonesIcon },
];

const statsData = [
  { number: "150+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

const faqs = [
  {
    question: "How much does a custom website or CRM cost?",
    answer: "The cost depends on the complexity, features, and scale of your project. A basic corporate website typically starts from ₹30,000, while a custom CRM can range from ₹1,50,000 to ₹10,00,000+ depending on workflows and integrations. We provide a detailed quote after a free discovery call — no hidden charges, no surprises."
  },
  {
    question: "Do you provide ongoing website maintenance and support?",
    answer: "Yes. We offer comprehensive monthly support and maintenance packages that cover security updates, performance monitoring, content changes, bug fixes, and feature enhancements. Our team ensures your website or CRM stays secure, fast, and up-to-date long after launch."
  },
  {
    question: "How long does it take to develop a custom CRM?",
    answer: "A custom CRM typically takes 8 to 24 weeks depending on the number of modules, integrations, user roles, and data migration requirements. We break the project into agile sprints with regular demos, so you start seeing working features within the first 2–3 weeks."
  },
  {
    question: "Are your websites SEO-friendly and mobile responsive?",
    answer: "Absolutely. Every website we build follows Google's latest SEO guidelines — proper meta tags, semantic HTML, fast load times (Core Web Vitals optimized), mobile-first responsive design, schema markup, and clean URL structures. We don't treat SEO as an add-on; it's built into our development process."
  },
  {
    question: "Can you integrate my CRM with existing tools like email, accounting, or ERP software?",
    answer: "Yes. We specialize in building CRMs that connect seamlessly with your existing tech stack — including Gmail, Outlook, Tally, QuickBooks, Razorpay, WhatsApp Business API, and custom ERP systems. All integrations are done via secure, well-documented APIs."
  },
  {
    question: "What technologies do you use for website and CRM development?",
    answer: "For websites, we use React.js, Next.js, WordPress, and Shopify depending on your needs. For CRM development, we use Node.js, Express.js, MongoDB, PostgreSQL, and cloud platforms like AWS. We always choose the technology best suited to your project's performance, scalability, and budget requirements."
  },
  {
    question: "Can you build a website for my specific industry, like e-commerce or education?",
    answer: "Yes! We can design and develop websites for any industry. Whether you need a fully-featured e-commerce platform, a comprehensive school management portal, a sleek corporate site, or a specialized healthcare platform, our team has the expertise to build custom web solutions tailored perfectly for any business or field."
  },
  {
    question: "Do you develop Custom CRM systems for specialized businesses and different industries?",
    answer: "Absolutely. We build Custom CRM systems for every imaginable field—real estate, healthcare, education, retail, logistics, and more. Our CRM solutions are fully adaptable and can be custom-engineered to match the unique workflows and operational requirements of any business type, no matter your industry."
  },
];

/* ──────────────────────────── Schema Markup ──────────────────────────── */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "AN Global Services — IT Services and Solutions",
      "image": "https://www.anglobalservices.com/it-services-and-solutions/it-services-solutions-1.png",
      "url": "https://www.anglobalservices.com/it-services-and-solutions",
      "telephone": "+917782069184",
      "priceRange": "₹₹",
      "description": "Professional website development and custom CRM development services by AN Global Services. We build responsive, SEO-optimized websites and scalable CRM solutions that drive business growth.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "provider": {
        "@type": "Organization",
        "name": "AN Global Services",
        "url": "https://www.anglobalservices.com"
      },
      "areaServed": "India",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "IT Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development Services",
              "description": "Custom website design and development including corporate websites, e-commerce stores, web applications, and CMS-powered platforms with SEO optimization."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CRM Development Services",
              "description": "Custom CRM software development with lead management, workflow automation, reporting dashboards, and third-party integrations for business growth."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.anglobalservices.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "IT Services and Solutions",
          "item": "https://www.anglobalservices.com/it-services-and-solutions"
        }
      ]
    }
  ]
};

/* ──────────────────────────── Page Component ──────────────────────────── */

export default function ITServicesPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  return (
    <main className="w-full min-h-screen bg-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ═══════════ 1. HERO BANNER — LEFT ALIGNED ═══════════ */}
      <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/it-services-and-solutions/it-services-solutions-1.png"
            alt="IT Services and Solutions — Professional Website Development and CRM Development Company in India"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/90 sm:via-black/70 sm:to-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="max-w-3xl">
              <p className="text-[#60B5F0] font-bold text-sm sm:text-base md:text-lg tracking-widest uppercase mb-4 drop-shadow-lg">
                ★ Enterprise IT Solutions ★
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                High-Performance <br className="hidden sm:block" />IT Services & Solutions
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Stop losing customers to slow websites and disconnected tools. We build blazing-fast, SEO-optimized websites and custom CRM systems that turn visitors into paying customers and chaos into streamlined operations. As a leading IT solutions company in India, we deliver scalable digital products tailored to your exact business needs. Leverage top-tier technology to automate workflows, capture high-quality leads, and accelerate your overall growth.
              </p>

              <div className="flex flex-wrap items-start gap-3 text-sm text-white/80 mb-10">
                {["Website Development", "Custom CRM Development"].map((tag, i) => (
                  <span key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
                <button
                  onClick={() => setShowConsultationModal(true)}
                  className="bg-[#0075B6] hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-semibold cursor-pointer hover:scale-105 transition-all shadow-lg w-full sm:w-auto text-center"
                >
                  Request a Free Consultation
                </button>
                <a
                  href="#services"
                  className="border border-white/60 text-white hover:bg-white hover:text-black px-8 py-3.5 rounded-md font-medium transition-all cursor-pointer w-full sm:w-auto text-center flex items-center justify-center"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 2. TRUST BAR / STATS ═══════════ */}
      <section className="bg-[#0a192f] py-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#60B5F0] mb-1">{stat.number}</p>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 3. SERVICES OVERVIEW ═══════════ */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Our Core IT Services and Solutions
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
              <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                We specialize in building digital products that deliver real, measurable business outcomes.
                Focus on growing your business while we handle the technology behind it.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
              {/* Services Image — Stretches to perfectly match text height */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:h-full lg:self-stretch w-full">
                <Image
                  src="/it-services-and-solutions/it-services-solutions-services-section-2.png?v=3"
                  alt="Website Development and CRM Development IT Services Overview"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Service Cards */}
              <div className="flex flex-col gap-6 justify-center">
                {serviceCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={i}
                      className={`bg-white border ${card.border} rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
                    >
                      <div className={`w-14 h-14 mb-5 rounded-xl flex items-center justify-center ${card.bg} ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{card.desc}</p>
                      <a href={i === 0 ? "#web-development" : "#crm-development"} className="text-[#0075B6] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                        Learn More <ArrowRight size={16} />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 4. WEBSITE DEVELOPMENT — DEEP DIVE (BG IMAGE) ═══════════ */}
      <section id="web-development" className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/it-services-and-solutions/it-services-solutions-website-service-section-7.png"
            alt="Website Development Services — Custom Web Design, Responsive Websites, and E-Commerce Solutions by AN Global Services"
            fill
            className="object-cover object-left"
          />
          {/* Stronger white overlay on mobile for text readability */}
          <div className="absolute inset-0 bg-white/90 md:bg-transparent md:bg-gradient-to-r md:from-white/90 md:via-white/60 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#003f80] text-sm font-black mb-4 w-max border border-[#0075B6]/50 shadow-md">
                <Globe size={16} /> Website Development Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 leading-tight drop-shadow-sm">
                Websites Built to Rank, <br className="hidden md:block" />Convert, and Scale
              </h2>
              <p className="text-black text-base md:text-lg leading-relaxed mb-3 font-black">
                Your website is the first impression your business makes. We engineer robust, conversion-focused digital platforms that capture leads, showcase your brand authority, and consistently outperform competitors in search engine rankings.
              </p>
              <p className="text-black text-sm md:text-base leading-relaxed mb-6 font-bold text-gray-800">
                Whether you need a corporate website, an e-commerce store, a SaaS platform, or a custom web application — our team delivers pixel-perfect designs backed by rock-solid code and measurable performance metrics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {webDevFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="text-[#0075B6] shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="text-black font-black text-sm">{item.title}</span>
                      <p className="text-gray-900 text-xs leading-relaxed mt-0.5 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>



              <button
                onClick={() => setShowConsultationModal(true)}
                className="bg-[#0075B6] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold cursor-pointer hover:scale-105 transition-all shadow-md w-full sm:w-max block text-center"
              >
                Get a Free Website Quote
              </button>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 4B. TYPES OF WEBSITES WE BUILD ═══════════ */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Types of Websites We Build
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
              <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                From simple landing pages to complex enterprise platforms — we design and develop every type of website with the same standard of quality, performance, and SEO-readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Corporate & Business Websites", icon: "🏢", desc: "Professional multi-page websites that establish credibility, showcase your services, and generate qualified leads for your business.", tags: ["Lead Generation", "SEO Optimized", "Brand Identity"] },
                { title: "E-Commerce Stores", icon: "🛒", desc: "Feature-rich online stores with product management, secure payment gateways, inventory tracking, and customer account systems.", tags: ["Razorpay / Stripe", "Product Catalog", "Order Management"] },
                { title: "Landing Pages", icon: "🎯", desc: "High-converting, single-purpose pages designed to capture leads, promote offers, and drive specific business actions.", tags: ["CRO Focused", "A/B Testing", "Fast Load"] },
                { title: "Web Applications", icon: "⚙️", desc: "Complex, feature-rich web apps with user authentication, dashboards, real-time data, and third-party API integrations.", tags: ["React / Next.js", "REST APIs", "Real-time"] },
                { title: "Portfolio & Personal Websites", icon: "🎨", desc: "Stunning portfolio websites for professionals, artists, and freelancers that help you stand out and win more clients online.", tags: ["Visual Design", "CMS Ready", "Mobile First"] },
                { title: "Blog & Content Platforms", icon: "📝", desc: "SEO-powered content platforms and news portals built for high traffic, easy publishing, and strong organic search rankings.", tags: ["SEO Architecture", "CMS Integration", "High Traffic"] },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#0075B6]/20 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-lg font-bold text-[#0a192f] mb-2 group-hover:text-[#0075B6] transition-colors">{type.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{type.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.tags.map((tag, j) => (
                      <span key={j} className="bg-[#0075B6]/10 text-[#0055a0] text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </LazySection>
        </div>
      </section>
      {/* ═══════════ 6. CRM DEVELOPMENT — DEEP DIVE (BG IMAGE) ═══════════ */}
      <section id="crm-development" className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/it-services-and-solutions/it-services-solutions-crm-service-section-6.png?v=2"
            alt="Custom CRM Development Services — Lead Management, Workflow Automation, and Business Analytics by AN Global Services"
            fill
            className="object-cover object-left"
          />
          {/* Stronger white overlay on mobile for text readability */}
          <div className="absolute inset-0 bg-white/90 md:bg-transparent md:bg-gradient-to-l md:from-white/90 md:via-white/60 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="max-w-2xl ml-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#003f80] text-sm font-black mb-4 w-max border border-[#0075B6]/50 shadow-md">
                <Database size={16} /> CRM Development Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4 leading-tight drop-shadow-sm">
                Stop Losing Leads. <br className="hidden md:block" />Start Closing Deals Faster.
              </h2>
              <p className="text-black text-base md:text-lg leading-relaxed mb-3 font-black">
                Spreadsheets and generic software are costing you revenue. Our custom CRM solutions are built from scratch to match your exact sales process — so your team spends less time on data entry and more time closing deals.
              </p>
              <p className="text-black text-sm md:text-base leading-relaxed mb-6 font-bold text-gray-800">
                From lead capture and pipeline management to automated follow-ups and real-time reporting dashboards — we build CRM systems that give your business the operational edge it needs to outpace the competition.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {crmFeatures.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="text-[#0075B6] shrink-0 mt-0.5" size={18} />
                    <div>
                      <span className="text-black font-black text-sm">{item.title}</span>
                      <p className="text-gray-900 text-xs leading-relaxed mt-0.5 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>



              <button
                onClick={() => setShowConsultationModal(true)}
                className="bg-[#0075B6] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold cursor-pointer hover:scale-105 transition-all shadow-md w-full sm:w-max block text-center"
              >
                Get a Free CRM Consultation
              </button>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 6B. WHAT A CUSTOM CRM CAN DO FOR YOUR BUSINESS ═══════════ */}
      <section className="py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                What a Custom CRM Can Do For Your Business
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
              <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                A CRM isn't just a contact database. A well-built custom CRM transforms every department — sales, marketing, support, and operations — into a high-performance machine.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Sales Pipeline Management", icon: "📊", desc: "Track every lead from first contact to closed deal. Set follow-up reminders, assign deals to reps, and never let a hot lead go cold.", tags: ["Lead Tracking", "Deal Stages", "Forecasting"] },
                { title: "Marketing Automation", icon: "📧", desc: "Automate email campaigns, lead scoring, WhatsApp follow-ups, and campaign analytics to nurture leads without manual effort.", tags: ["Email Drip", "WhatsApp API", "Lead Scoring"] },
                { title: "Customer Support Ticketing", icon: "🎧", desc: "Manage all customer queries, complaints, and service requests in one place with SLA tracking and escalation workflows.", tags: ["Ticket System", "SLA Tracking", "Escalations"] },
                { title: "Business Intelligence Reports", icon: "📈", desc: "Real-time dashboards with sales performance, team productivity, revenue forecasting, and custom KPI reports for smart decision-making.", tags: ["Real-time Data", "KPI Reports", "Forecasting"] },
                { title: "ERP & Third-Party Integration", icon: "🔗", desc: "Seamlessly connect your CRM with Tally, QuickBooks, payment gateways, WhatsApp Business, email platforms, and any existing tools.", tags: ["Tally / ERP", "Razorpay", "WhatsApp"] },
                { title: "Team & Role Management", icon: "👥", desc: "Define user roles, access permissions, and department-level visibility so everyone sees only what they need to do their job effectively.", tags: ["Role-Based Access", "Multi-team", "Activity Logs"] },
              ].map((feature, i) => (
                <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#0075B6]/20 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-[#0a192f] mb-2 group-hover:text-[#0075B6] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, j) => (
                      <span key={j} className="bg-[#0075B6]/10 text-[#0055a0] text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </LazySection>
        </div>
      </section>
      {/* ═══════════ 7. WHY PARTNER WITH US ═══════════ */}
      <section className="py-12 md:py-20 bg-[#0f2243] relative overflow-hidden">
        {/* Ambient glow blobs - softened for a lighter but premium feel */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <LazySection>
            {/* Centered heading */}
            <div className="text-center mb-10">
              <span className="inline-block bg-[#0075B6]/20 border border-[#0075B6]/30 text-[#60B5F0] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Why Partner With AN Global Services?
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-4" />
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                When you partner with us, you get a technology team that understands business outcomes—not just code.
              </p>
            </div>

            {/* Layout: image left, 2x3 feature grid right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Image — fixed height, premium frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[440px] ring-1 ring-white/10 w-full">
                <Image
                  src="/it-services-and-solutions/it-services-solutions-growth-result-section-4.png?v=3"
                  alt="Why Choose AN Global Services for IT Solutions — Proven Results and Business Growth"
                  fill
                  className="object-cover object-center"
                />

              </div>

              {/* 2x3 Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-[#0075B6]/40 hover:-translate-y-1 transition-all duration-300 group">
                      <div className="bg-[#0075B6]/20 w-10 h-10 rounded-xl flex items-center justify-center text-[#60B5F0] mb-2 group-hover:bg-[#0075B6] group-hover:text-white transition-colors duration-300">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 8. OUR PROVEN PROCESS ═══════════ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Our Proven Development Methodology
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
              <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                A streamlined, transparent process that keeps you informed at every stage — from the first strategy call to post-launch optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative">
                    <div className="absolute top-6 right-6 text-gray-100 text-5xl font-extrabold select-none group-hover:text-gray-200 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center ${step.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 9. MODERN TECH STACK — BG IMAGE ═══════════ */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/it-services-and-solutions/it-services-solutions-why-choose-section-5.png"
            alt="Modern Technology Stack — React, Next.js, Node.js, MongoDB, AWS, Docker for Website and CRM Development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a192f]/90 md:bg-transparent md:bg-gradient-to-r md:from-[#0a192f]/96 md:via-[#0a192f]/80 md:to-[#0a192f]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Modern Technology Stack
              </h2>
              <div className="w-20 h-1 bg-[#60B5F0] mb-6" />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                We use industry-leading, battle-tested technologies to build fast, secure, and future-proof digital solutions. Every tool in our stack is chosen for performance, scalability, and long-term maintainability.
              </p>

              <div className="space-y-7">
                {[
                  { category: "Frontend", tools: ["React.js", "Next.js", "HTML5", "Tailwind CSS", "JavaScript"] },
                  { category: "Backend", tools: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL"] },
                  { category: "Databases", tools: ["MongoDB", "PostgreSQL", "Redis", "MySQL"] },
                  { category: "Cloud & DevOps", tools: ["AWS", "Docker", "Vercel", "CI/CD Pipelines"] },
                ].map((group, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold text-[#60B5F0] uppercase tracking-widest mb-3">{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.tools.map((tool, j) => (
                        <span key={j} className="bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-white/20 hover:border-[#60B5F0] transition-all cursor-default">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </LazySection>
        </div>
      </section>



      {/* ═══════════ 10. OUR WORKS / PORTFOLIO ═══════════ */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <LazySection>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Our Works & Projects
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
              <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                A showcase of the websites and CRM systems we have built for businesses across industries. Each project was designed and developed to drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AN Global Services Website",
                  category: "Corporate Website",
                  desc: "A complete corporate website with service pages, SEO optimization, lead generation forms, and a student training panel.",
                  tech: ["Next.js", "Tailwind CSS", "MongoDB", "+ More"],
                  color: "from-blue-500 to-cyan-500",
                  url: "https://www.anglobalservices.com/",
                  image: "/it-services-and-solutions/it-services-and-solutions-anglobalservices-card.webp",
                },
                {
                  title: "India Laser",
                  category: "Corporate Website",
                  desc: "A robust corporate website for a leading manufacturer of industrial laser machines, featuring an extensive catalog of cutting and testing equipment.",
                  tech: ["Next.js", "Tailwind CSS", "React", "+ More"],
                  color: "from-blue-700 to-blue-500",
                  url: "https://www.indialaser.in/",
                  image: "/it-services-and-solutions/it-services-and-solutions-indialaser-card.webp",
                },
                {
                  title: "Business Lead CRM",
                  category: "CRM Development",
                  desc: "A custom CRM for managing business leads, tracking sales pipelines, automated follow-ups, and generating detailed reports.",
                  tech: ["Node.js", "PostgreSQL", "REST API", "+ More"],
                  color: "from-green-500 to-emerald-500",
                  isModal: true,
                  image: "/it-services-and-solutions/it-services-and-solutions-crmservices-card.webp",
                },
                {
                  title: "Nirvana Nuts",
                  category: "E-Commerce Website",
                  desc: "A premium e-commerce platform for healthy snacks, selling various flavors of makhana and bulk whey protein, featuring a seamless shopping experience.",
                  tech: ["Next.js", "Tailwind CSS", "React", "+ More"],
                  color: "from-amber-500 to-orange-500",
                  url: "https://www.nirvananuts.in/",
                  image: "/it-services-and-solutions/it-services-and-solutions-nirvananuts-card.webp",
                },
                {
                  title: "Lumora India",
                  category: "Brand Website",
                  desc: "A sophisticated brand website for a premium feminine hygiene provider, showcasing rash-free sanitary pads and women's health solutions.",
                  tech: ["Next.js", "Tailwind CSS", "React", "+ More"],
                  color: "from-pink-500 to-rose-500",
                  url: "https://www.lumoraindia.com/",
                  image: "/it-services-and-solutions/it-services-and-solutions-lumoraindia-card.webp",
                },
                {
                  title: "Minu Quality Testing Laboratory Pvt. Ltd.",
                  category: "Corporate Website",
                  desc: "A professional corporate website for an independent material testing laboratory offering reliable testing services for various industrial materials.",
                  tech: ["Next.js", "Tailwind CSS", "React", "+ More"],
                  color: "from-gray-700 to-gray-900",
                  url: "https://www.mqtlab.com/",
                  image: "/it-services-and-solutions/it-services-and-solutions-mqtl-card.webp",
                },
              ].map((project, i) => {
                const CardContent = (
                  <>
                    {/* Header */}
                    <div className={`w-full relative overflow-hidden ${project.image ? 'border-b border-gray-100' : `h-40 flex items-center justify-center bg-gradient-to-br ${project.color}`}`}>
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={800}
                          height={450}
                          className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-black/10 transition-colors" />
                          <div className="relative text-center px-4">
                            <p className="text-white/90 text-xs font-semibold uppercase tracking-wider mb-1">{project.category}</p>
                            <h4 className="text-xl font-bold text-white">{project.title}</h4>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex flex-col flex-grow">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, j) => (
                          <span key={j} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-[#0075B6] font-semibold text-sm group-hover:text-blue-700 transition-colors mt-auto pt-4 border-t border-gray-100">
                        {project.isModal ? "Request a Demo" : "View Website"}
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </>
                );

                if (project.isModal) {
                  return (
                    <button
                      key={i}
                      onClick={() => setShowConsultationModal(true)}
                      className="text-left w-full h-full flex flex-col group bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#0075B6]/30 hover:-translate-y-1 transition-all duration-300"
                    >
                      {CardContent}
                    </button>
                  );
                }

                return (
                  <a
                    key={i}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full group bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#0075B6]/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    {CardContent}
                  </a>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setShowConsultationModal(true)}
                className="bg-[#0075B6] hover:bg-blue-700 text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-lg cursor-pointer hover:scale-105"
              >
                Start Your Project With Us
              </button>
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ 9. FAQ SECTION ═══════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LazySection>
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
                Frequently Asked Questions About Our IT Services
              </h2>
              <div className="w-20 h-1 bg-[#0075B6] mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Get answers to the most common questions about our website development and CRM development services.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full text-left px-6 py-5 bg-gray-50 hover:bg-gray-100 flex items-center justify-between font-bold text-gray-900 transition-colors cursor-pointer gap-4"
                  >
                    <span className="text-sm md:text-base">{faq.question}</span>
                    <ChevronRight size={20} className={`transform transition-transform shrink-0 ${activeFaq === i ? "rotate-90 text-[#0075B6]" : "text-gray-400"}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 py-5 bg-white text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </LazySection>
        </div>
      </section>

      {/* ═══════════ CONSULTATION MODAL ═══════════ */}
      <ConsultationModal
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
      />

    </main>
  );
}
