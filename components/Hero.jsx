"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight, Quote, Search, Star } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { isiProductsList } from "../datatable/isiProducts";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const slides = ["/dash-image1-2.webp", "/dash-image2-2.webp", "/dash-image3-2.webp"];

const heroSlidesData = [
  {
    image: "/dash-image-bis-isi-certification-1-1.webp",
    headingMain: "BIS, ISI & FMCS Certification",
    headingSub: "CRS & Approval Services",
    containerClass: "w-full sm:w-[65%] md:w-[60%] lg:w-[55%] xl:w-full xl:max-w-3xl",
    paragraph: (
      <>
        Get certified today! India's leading consultants for <span className="font-bold text-yellow-400">BIS Registration</span>, <span className="font-bold text-yellow-400">ISI Mark</span>, <span className="font-bold text-yellow-400">FMCS Certification</span>, and <span className="font-bold text-yellow-400">CRS Approval</span>. We ensure 100% compliance, safety, and rapid market entry for domestic and foreign manufacturers.
      </>
    )
  },
  {
    image: "/dash-image-hallmarking-2.webp",
    headingMain: "BIS Gold & Silver Hallmarking",
    headingSub: "Center Setup & Registration",
    exploreLink: "https://www.anglobalservices.com/hallmarking",
    containerClass: "w-full sm:w-[55%] md:w-[50%] lg:w-[42%] xl:w-[40%] xl:max-w-lg",
    paragraph: (
      <>
        Launch your own <span className="font-bold text-yellow-400">Assaying & Hallmarking Center</span> with India's top consultants. We provide end-to-end setup, <span className="font-bold text-yellow-400">BIS Registration</span>, NABL accreditation, and advanced testing equipment for 100% genuine Gold & Silver testing.
      </>
    )
  },
  {
    image: "/dash-image-food-ingredients-3.webp",
    headingMain: "Premium Food Ingredients",
    headingSub: "Global Import & Export Solutions",
    exploreLink: "https://www.anglobalservices.com/food-ingredients",
    containerClass: "w-full sm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[45%] xl:max-w-xl",
    paragraph: (
      <>
        Source top-tier natural food ingredients like <span className="font-bold text-yellow-400">Whey Protein</span> and <span className="font-bold text-yellow-400">Premium Phool Makhana</span> for your FMCG business. We provide 100% clean-label, high-quality bulk supplies with guaranteed international compliance and seamless global logistics.
      </>
    )
  },
  {
    image: "/dash-image-it-services-4.webp",
    headingMain: "Custom IT Solutions",
    headingSub: "Software & Digital Transformation",
    exploreLink: "https://www.anglobalservices.com/it-services-and-solutions",
    containerClass: "w-full sm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[45%] xl:max-w-xl",
    paragraph: (
      <>
        Accelerate your business with cutting-edge technology. From <span className="font-bold text-yellow-400">Web Development</span> and <span className="font-bold text-yellow-400">Custom CRM Development</span>, to tailored mobile apps, we deliver robust digital solutions to fuel modern enterprise growth.
      </>
    )
  },
  {
    image: "/dash-image-solar-panel-and-lab-setup-services-5.webp",
    headingMain: (
      <>
        <span className="whitespace-nowrap">Solar Panel Manufacturing</span> <br className="hidden sm:block" />
        And Laboratory Setup
      </>
    ),
    wrapHeading: true,
    headingSub: "Complete Testing & Plant Solutions",
    customButtons: [
      { text: "Solar Panel", link: "https://www.anglobalservices.com/solar-panel-plant-setup" },
      { text: "Lab Setup", link: "https://www.anglobalservices.com/laboratory-equipment-and-setup-services" }
    ],
    containerClass: "w-full sm:w-[55%] md:w-[50%] lg:w-[42%] xl:w-[45%] xl:max-w-[560px]",
    paragraph: (
      <>
        Empower your business with complete <span className="font-bold text-yellow-400">Solar Panel Plant Setup</span> and state-of-the-art <span className="font-bold text-yellow-400">In-House Lab Facilities</span>. We provide end-to-end consultancy, advanced equipment procurement, and strict compliance for certified production.
      </>
    )
  }
];

const extendedHeroSlides = [...heroSlidesData, heroSlidesData[0]];

// IMPORTANT: This component MUST be defined outside Hero() so React keeps a stable
// reference. If defined inside Hero, every Hero re-render (from slide/testimonial
// intervals) creates a new function identity, causing React to unmount+remount
// this component and reset the animation.
function InfiniteProductsV2() {
  const trackRef = useRef(null);
  const itemRef = useRef(null);
  const isPausedRef = useRef(false);

  const setHover = (val) => {
    isPausedRef.current = val;
  };

  const products = [
    "/products/product-7.webp",
    "/products/product-8.webp",
    "/products/product-9.webp",
    "/products/product-10.webp",
    "/products/product-11.webp",
    "/products/product-12.webp",
    "/products/product-13.webp",
    "/products/product-14.webp",
    "/products/product-15.webp",
    "/products/product-16.webp",
    "/products/product-17.webp",
    "/products/product-18.webp",
    "/products/product-19.webp",
    "/products/product-20.webp",
    "/products/product-21.webp",
    "/products/product-22.webp",
    "/products/product-23.webp",
    "/products/product-24.webp",
    "/products/product-25.webp",
  ];

  const items = [...products, ...products];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let raf;
    let cancelled = false;
    const speed = 0.8

    const animate = () => {
      if (cancelled || !track || !itemRef.current) return;

      if (!isPausedRef.current) {
        const itemWidth = itemRef.current.offsetWidth;
        const halfWidth = itemWidth * products.length;

        x -= speed;

        if (x <= -halfWidth) {
          x += halfWidth;
        }
        track.style.transform = `translate3d(${x}px,0,0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    // Preload every image into browser memory before starting animation
    const preloadPromises = products.map((src) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = src;
        if (img.complete) {
          resolve();
        } else {
          img.onload = resolve;
          img.onerror = resolve; // Don't block on broken images
        }
      });
    });

    Promise.all(preloadPromises).then(() => {
      if (!cancelled) {
        raf = requestAnimationFrame(animate);
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-10 bg-gray-50">
      <div
        ref={trackRef}
        className="flex flex-nowrap w-max will-change-transform"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {items.map((img, index) => (
          <div
            key={index}
            ref={index === 0 ? itemRef : null}
            className="pr-8 shrink-0"
          >
            <div className="w-56 sm:w-64 lg:w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-48 sm:h-56 lg:h-60">
                <img
                  src={img}
                  alt="Product"
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-gray-50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-gray-50 to-transparent" />
    </div>
  );
}

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const [allProducts, setAllProducts] = useState(isiProductsList);

  useEffect(() => {
    const fetchLiveProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "isi_products"));

        const liveProducts = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const title = data.title || "";

          let finalIsNo = data.dataTableIsNumber?.trim();
          let finalName = data.dataTableProductName?.trim();

          if (!finalIsNo || !finalName) {
            let extractedIsNo = "N/A";
            const isMatch = title.match(
              /IS\s*\d+(?:\s*(?:\(|:)?\s*Part\s*\d+\)?)?/i,
            );
            if (isMatch)
              extractedIsNo = isMatch[0]
                .replace(/\(/g, " : ")
                .replace(/\)/g, "")
                .replace(/\s+:\s+/g, " : ");

            let extractedName = title
              .replace(/^BIS ISI Certification\s+(?:for\s+)?/i, "")
              .replace(/IS\s*\d+.*$/i, "")
              .replace(/[-–—]+\s*$/, "")
              .trim();

            if (!finalIsNo)
              finalIsNo = extractedIsNo !== "N/A" ? extractedIsNo : "Custom";
            if (!finalName) finalName = extractedName || title;
          }

          return {
            isNo: finalIsNo,
            name: finalName,
            slug: data.slug || doc.id,
          };
        });

        const liveSlugs = new Set(liveProducts.map((p) => p.slug));
        const filteredStatic = isiProductsList.filter(
          (p) => !liveSlugs.has(p.slug),
        );

        let combined = [...liveProducts, ...filteredStatic];
        combined.sort((a, b) => a.name.trim().localeCompare(b.name.trim()));

        setAllProducts(combined);
      } catch (err) {
        console.error("Failed to fetch live products for hero search:", err);
      }
    };

    fetchLiveProducts();
  }, []);

  const clientsLogos = useMemo(
    () => [
      "/clients/birat-healthcare-industries.webp",
      "/clients/cogni.webp",
      "/clients/fire-guard-industries.webp",
      "/clients/force.webp",
      "/clients/gabion-technologies-india-ltd.webp",
      "/clients/health-and-hygiene-products-pvt-ltd.webp",
      "/clients/hero-electric-vechiles-pvt-ltd.webp",
      "/clients/jasmine-hygiene-products-limited.webp",
      "/clients/kowa.webp",
      "/clients/kse.webp",
      "/clients/logo_126013.webp",
      "/clients/mitras.webp",
      "/clients/msme.webp",
      "/clients/nhf.webp",
      "/clients/nsa-limited.webp",
      "/clients/safe-guard.webp",
      "/clients/spago.webp",
      "/clients/yamanaka-advanced-materials-inc.webp",
    ],
    [],
  );

  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
  });

  const testimonials = useMemo(
    () => [
      {
        text: "Mr. Ayush Ji is very friendly and positive. His team's work quality is excellent, and their coordination is truly commendable. Highly recommended.",
        name: "Amit Soni",
        position: "RSM HALLMARKING CENTER",
      },
      {
        text: "They have created a very good setup for our LS Hallmarking. The quality and technical knowledge are outstanding. One of the best hallmarking setup providers in India.",
        name: "Punit Soni",
        position: "LS HALLMARKING CENTER",
      },
      {
        text: "Dil se dhanyavaad AN Global Services ko. Kalyan Hallmarking Center, Sanchore ke liye unki service aur support kaafi reliable aur professional raha.",
        name: "Shaitansingh Chauhan",
        position: "KALYAN HALLMARKING CENTER",
      },
      {
        text: "AN Global Services provided excellent installation and support for our XRF machine. The team is highly professional, and the entire process was smooth and well-managed.",
        name: "Roni Dear",
        position: "XRF LAB OWNER",
      },
      {
        text: "Very excellent training and support. The team explained the entire process step by step in a very clear manner. Highly satisfied with their technical guidance.",
        name: "Majeti Kumar Raja",
        position: "LAB TECHNICIAN",
      },
      {
        text: "Best teamwork and very good nature. The team is supportive, knowledgeable, and always ready to help.",
        name: "GS Soni",
        position: "JEWELLERY PROFESSIONAL",
      },
    ],
    [],
  );

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [current, setCurrent] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  const [heroSlide, setHeroSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    if (isButtonHovered) return;
    const interval = setInterval(() => {
      setHeroSlide((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [isButtonHovered]);

  useEffect(() => {
    if (heroSlide === heroSlidesData.length) {
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        setHeroSlide(0);
      }, 1000);
      return () => clearTimeout(timeoutId);
    } else {
      if (!isTransitioning) {
        const timeoutId = setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [heroSlide, isTransitioning]);
  const sliderRef = useRef(null);
  const clientsRef = useRef(null);
  const [clientsPaused, setClientsPaused] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  const clientItems = useMemo(
    () => [...clientsLogos, ...clientsLogos],
    [clientsLogos],
  );

  const clientsX = useRef(0);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0) {
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(value.toLowerCase()) ||
          product.isNo.toLowerCase().includes(value.toLowerCase()),
      );
      setSearchResults(filtered);
      setIsSearchOpen(true);
    } else {
      setSearchResults([]);
      setIsSearchOpen(false);
    }
  };

  const handleSearchSelect = (slug) => {
    setSearchQuery("");
    setIsSearchOpen(false);
    router.push(`/isi-products/${slug}`);
  };

  useEffect(() => {
    const handleVisibility = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const sanitized = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
      return;
    }

    if (name === "name") {
      const sanitized = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      setError("Please verify captcha");
      return;
    }
    if (!formData.service || !formData.name || !formData.phone) {
      setError("Please fill all fields");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const { db } = await import("@/src/lib/firebase");
      const { doc, runTransaction, serverTimestamp } =
        await import("firebase/firestore");

      const counterRef = doc(db, "counters", "enquiries");
      let enquiryId = "";

      await runTransaction(db, async (transaction) => {
        const counterSnap = await transaction.get(counterRef);
        const current = counterSnap.exists()
          ? counterSnap.data().current || 0
          : 0;
        const next = current + 1;
        enquiryId = `ANG${String(next).padStart(5, "0")}`;

        transaction.set(counterRef, { current: next }, { merge: true });
        transaction.set(doc(db, "enquiries", enquiryId), {
          industry: formData.service,
          name: formData.name,
          phone: formData.phone,
          source: "website",
          status: "new",
          createdAt: serverTimestamp(),
        });
      });

      await fetch("/api/send-enquiry-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enquiryId,
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          source: "website",
          token: captchaToken,
          hiddenField: "",
        }),
      });

      setSuccess(true);
      setFormData({ service: "", name: "", phone: "" });
      setCaptchaToken(null);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (clientsPaused || !isTabActive) return;
    const track = clientsRef.current;
    if (!track) return;

    let rafId;
    const speed = 0.8;

    const animate = () => {
      clientsX.current -= speed;
      if (Math.abs(clientsX.current) >= track.scrollWidth / 2) {
        clientsX.current = 0;
      }
      track.style.transform = `translate3d(${clientsX.current}px, 0,0)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [clientsPaused, isTabActive]);

  const testimonialsRef = useRef(null);
  const testimonialsX = useRef(0);

  useEffect(() => {
    if (isPaused || !isTabActive) return;
    const track = testimonialsRef.current;
    if (!track) return;

    let rafId;
    const speed = 0.8;

    const animate = () => {
      testimonialsX.current -= speed;
      if (Math.abs(testimonialsX.current) >= track.scrollWidth / 2) {
        testimonialsX.current = 0;
      }
      track.style.transform = `translate3d(${testimonialsX.current}px, 0,0)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused, isTabActive]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full bg-[#051c35] overflow-hidden">
        <div
          className={`flex w-full ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${heroSlide * 100}%)` }}
        >
          {extendedHeroSlides.map((slide, idx) => (
            <div key={idx} className="w-full shrink-0 relative h-[470px] sm:h-[358px] md:h-auto md:aspect-[2.25]">

              {/* IMAGE - absolute, fills container perfectly */}
              <img
                src={slide.image}
                alt={slide.headingMain}
                className="absolute inset-0 w-full h-full object-cover object-left sm:object-center"
              />
              {/* Subtle overlay to enhance text contrast over the graphic */}
              <div className="absolute inset-0 bg-black/10 z-[1]"></div>

              {/* TEXT CONTENT LAYER - absolute, overlays on image */}
              <div className="absolute inset-0 z-10 w-full flex items-start sm:items-center overflow-hidden pt-1.5 sm:pt-0">
                <div className="w-full max-w-7xl mx-auto px-3 py-8 sm:py-1 md:px-4 md:py-2 xl:py-6 sm:px-6 lg:px-8">
                  <div className={slide.containerClass || "w-[90%] sm:w-[65%] md:w-[60%] lg:w-[55%] xl:w-full xl:max-w-3xl"}>
                    <h1 className="text-[19px] leading-tight sm:text-[16px] md:text-[24px] lg:text-[28px] xl:text-[46px] font-extrabold text-white md:leading-tight mb-1.5 sm:mb-1 md:mb-2 lg:mb-3 xl:mb-6 drop-shadow-lg tracking-tight">
                      <span className={`whitespace-normal ${slide.wrapHeading ? "" : "sm:whitespace-nowrap"}`}>{slide.headingMain}</span> <br className="block" />
                      <span className="text-[#0075B6] drop-shadow-md bg-white/95 px-2 md:px-2 lg:px-3 xl:px-5 py-0.5 md:py-1 lg:py-1.5 xl:py-2 rounded md:rounded-lg inline-block mt-1 sm:mt-1 md:mt-1 lg:mt-2 xl:mt-4 text-[11px] sm:text-[10px] md:text-sm lg:text-[18px] xl:text-[32px] whitespace-normal sm:whitespace-nowrap">
                        {slide.headingSub}
                      </span>
                    </h1>

                    <p className="text-white font-medium text-[13px] sm:text-[8px] md:text-[10px] lg:text-[13px] xl:text-[18px] mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-10 leading-relaxed sm:leading-snug md:leading-relaxed drop-shadow-md inline-block w-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-full">
                      {slide.paragraph}
                    </p>

                    <div
                      className="flex flex-wrap items-center gap-2 sm:gap-1 md:gap-3 lg:gap-3 xl:gap-6 mb-2.5 sm:mb-2 md:mb-4 lg:mb-4 xl:mb-10"
                      onMouseEnter={() => setIsButtonHovered(true)}
                      onMouseLeave={() => setIsButtonHovered(false)}
                    >
                      <Link
                        href="/contact-us"
                        className={slide.customButtons ?
                          "bg-[#0075B6] hover:bg-blue-700 text-white px-3 py-1 sm:px-1.5 sm:py-0.5 md:px-4 md:py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded md:rounded-lg font-medium transition-colors shadow-lg text-[12px] sm:text-[9px] md:text-xs lg:text-[13px] xl:text-[15px]"
                          : "bg-[#0075B6] hover:bg-blue-700 text-white px-3 py-1 sm:px-1.5 sm:py-0.5 md:px-4 md:py-1.5 lg:px-5 lg:py-2.5 xl:px-8 xl:py-4 rounded md:rounded-lg font-medium transition-colors shadow-lg text-[12px] sm:text-[9px] md:text-xs lg:text-[14px] xl:text-[18px]"
                        }
                      >
                        Contact Us
                      </Link>
                      {slide.customButtons ? (
                        <>
                          {slide.customButtons.map((btn, btnIdx) => (
                            <Link
                              key={btnIdx}
                              href={btn.link}
                              className="bg-white/95 text-[#0075B6] hover:bg-white hover:text-blue-800 px-3 py-1 sm:px-1.5 sm:py-0.5 md:px-4 md:py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded md:rounded-lg font-semibold transition-all shadow-lg text-[12px] sm:text-[9px] md:text-xs lg:text-[13px] xl:text-[15px] cursor-pointer whitespace-nowrap"
                            >
                              {btn.text}
                            </Link>
                          ))}
                        </>
                      ) : slide.exploreLink ? (
                        <Link
                          href={slide.exploreLink}
                          className="bg-white/95 text-[#0075B6] hover:bg-white hover:text-blue-800 px-3 py-1 sm:px-1.5 sm:py-0.5 md:px-4 md:py-1.5 lg:px-5 lg:py-2.5 xl:px-8 xl:py-4 rounded md:rounded-md font-semibold transition-all shadow-lg text-[12px] sm:text-[9px] md:text-xs lg:text-[14px] xl:text-[18px] cursor-pointer"
                        >
                          Explore Services
                        </Link>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            window.dispatchEvent(new CustomEvent('open-services-dropdown'));
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="bg-white/95 text-[#0075B6] hover:bg-white hover:text-blue-800 px-3 py-1 sm:px-1.5 sm:py-0.5 md:px-4 md:py-1.5 lg:px-5 lg:py-2.5 xl:px-8 xl:py-4 rounded md:rounded-md font-semibold transition-all shadow-lg text-[12px] sm:text-[9px] md:text-xs lg:text-[14px] xl:text-[18px] cursor-pointer"
                        >
                          Explore Services
                        </button>
                      )}
                    </div>

                    <div className="bg-black/30 p-2.5 sm:p-2 md:p-3 lg:p-3 xl:p-6 rounded-lg md:rounded-xl shadow-xl w-full md:w-[100%] xl:max-w-2xl">
                      <h3 className="text-[#00c3ff] text-[13px] sm:text-[10px] md:text-sm lg:text-sm xl:text-xl font-bold mb-1 sm:mb-1 md:mb-1 xl:mb-2">
                        A N Global Services Private Limited
                      </h3>
                      <p className="text-gray-200 text-[11px] sm:text-[8px] md:text-[10px] lg:text-[11px] xl:text-sm leading-snug sm:leading-snug md:leading-relaxed mb-2 sm:mb-2 md:mb-3 xl:mb-6">
                        A complete industrial solution provider. We help manufacturers meet quality, safety, and compliance standards with complete confidence.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 xl:gap-8">
                        <a href="mailto:info@anglobalservices.com" className="flex items-center gap-2 md:gap-2 group cursor-pointer relative z-20">
                          <div className="bg-white/20 group-hover:bg-[#00c3ff]/30 p-1 md:p-1.5 rounded-full transition-colors border border-white/10">
                            <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-[#00c3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="text-white font-medium group-hover:text-[#00c3ff] transition-colors text-[12px] sm:text-[9px] md:text-[11px] lg:text-[13px] xl:text-[15px] drop-shadow-sm">info@anglobalservices.com</span>
                        </a>

                        <a href="tel:+917782069184" className="flex items-center gap-2 md:gap-2 group cursor-pointer relative z-20">
                          <div className="bg-white/20 group-hover:bg-[#00c3ff]/30 p-1 md:p-1.5 rounded-full transition-colors border border-white/10">
                            <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-[#00c3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <span className="text-white font-medium group-hover:text-[#00c3ff] transition-colors text-[12px] sm:text-[9px] md:text-[11px] lg:text-[13px] xl:text-[15px] drop-shadow-sm">+91 7782069184</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS (Optional, but good for UX) */}
        <div className="absolute bottom-1 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 md:gap-2 z-20">
          {heroSlidesData.map((_, i) => {
            const isActive = i === (heroSlide % heroSlidesData.length);
            return (
              <button
                key={i}
                onClick={() => {
                  setIsTransitioning(true);
                  setHeroSlide(i);
                }}
                className={`w-1.5 h-1.5 md:w-3 md:h-3 rounded-full cursor-pointer transition-all ${isActive ? "bg-white w-3 md:w-6" : "bg-white/50"
                  }`}
              />
            );
          })}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top Section: Image & Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10 lg:mb-12">
            <div className="flex justify-center w-full">
              <Image
                src="/about-anglobalservices.webp"
                alt="About AN Global Services"
                width={600}
                height={450}
                className="rounded-2xl object-cover w-full max-w-lg lg:max-w-full h-auto shadow-xl border border-gray-100"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-block mb-3">
                <p className="text-sm md:text-base lg:text-lg text-[#016398] font-bold uppercase tracking-widest border-b-2 border-[#e3b64c] pb-1 inline-block">
                  About AN Global Services
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-gray-900 leading-[1.2] mb-6">
                Transforming Ideas into Impact with Integrity & Innovation
              </h2>
              <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
                <span className="text-[#016398] font-bold">
                  "AN Global Services"
                </span>{" "}
                is a well-established and leading consulting firm, the assured
                service provider. We have placed ourselves amongst reliable
                names in the corporate world, committed to excellence and 100% compliance.
              </p>
            </div>
          </div>

          {/* Bottom Section: Full Width Text */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10 shadow-inner border border-gray-100">
            <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed text-justify md:text-left">
              We provide Product Certification (ISI mark), Foreign
              Manufactures Certification Scheme (FMCS), Compulsory
              Registration Scheme (CRS) for Electronics & IT Goods, BIS
              Registration hallmarking of precious For metals/jewellery, BEE
              Certification Services, Trademark Registration Services, CE
              Services, EPR Authorization (for e-waste), Solar Panel BIS
              Registration Services, WPC Approval and TEC Certification, MSME
              Accreditation & NSIC Certification, WMI Certification, NABL
              Consultancy, WPC License and many more.
            </p>
            <div className="bg-white rounded-xl p-5 border-l-4 border-[#e3b64c] shadow-sm flex items-start gap-4">
              <svg className="w-8 h-8 text-[#e3b64c] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <p className="text-gray-800 text-base md:text-lg font-semibold leading-relaxed italic">
                Government regulations ensure safety, quality and compliance,
                helping organizations grow and compete globally.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-4xl font-extrabold text-center text-black mb-14">
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                img: "/services/isi.jpg",
                link: "/bis-isi-mark-certification",
                isISI: true,
              },
              { img: "/services/hallmark.jpg", link: "/hallmarking" },
              {
                img: "/services/fmcs.jpg",
                link: "/foreign-manufacturers-certification-scheme-fmcs",
              },
              {
                img: "/services/bis.jpg",
                link: "/bis-crs-registration-electronic-products",
              },
              {
                img: "/services/nabl-certification-service.png",
                link: "/nabl-accreditation-services",
              },
              { img: "/services/bee.jpg", link: "/bee_services" },
              {
                img: "/services/wpc-certification.png",
                link: "/wpc-certification-services",
              },
              { img: "/services/epr.jpg", link: "/epr-registration-services" },
              { img: "/services/msme.jpg", link: "/msme-nsic-registration" },
              {
                img: "/services/lab-equipment-setup.png",
                link: "/laboratory-equipment-and-setup-services",
              },
              {
                img: "/services/solar.jpg",
                link: "/bis-registration-for-solar-panels",
              },
              {
                img: "/services/tm.jpg",
                link: "/trademark-registration-services",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="group p-[2.5px] rounded-xl bg-gradient-to-br from-[#0a3d62] via-[#0072b1] to-[#48cae4] overflow-hidden relative transition-all duration-300 shadow-sm hover:shadow-md block"
              >
                <div className="bg-white rounded-[9px] h-full w-full relative overflow-hidden">
                  {item.isISI && (
                    <span className="sr-only">
                      ISI Certification & BIS Certification Services in India
                    </span>
                  )}
                  <div className="relative w-full h-45">
                    <Image
                      src={item.img}
                      alt={
                        item.isISI
                          ? "ISI Certification & BIS Certification Services in India"
                          : "Service"
                      }
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                    <span className="bg-[#0e8fc7] text-white text-sm font-semibold px-4 py-2 rounded-md shadow">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certification and License Banner Section */}
      <section className="w-full relative overflow-hidden flex items-center min-h-[450px] md:min-h-[400px] lg:min-h-[550px] py-12 md:py-8">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-[position:left_center] lg:bg-[position:right_center] lg:bg-[length:100%_100%]"
          style={{ backgroundImage: "url('/certification-and-license.webp')" }}
        ></div>

        {/* Subtle dark gradient overlay to ensure text readability on mobile/tablet */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/90 via-[#0a192f]/60 to-transparent md:w-[80%] lg:w-[60%] pointer-events-none"></div>

        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 z-10 flex items-center">
          <div className="flex flex-col justify-center w-full md:w-[80%] lg:w-[60%] xl:w-[55%] text-center mt-6 md:mt-0 lg:ml-8 mx-auto md:mx-0 md:text-left lg:text-center">

            {/* Top Subheading */}
            <div className="flex items-center justify-center md:justify-start lg:justify-center gap-4 mb-3 md:mb-5">
              <div className="w-8 md:w-12 lg:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#e3b64c]"></div>
              <p className="text-sm md:text-lg italic text-white font-light tracking-wide">Authenticity Assured</p>
              <div className="w-8 md:w-12 lg:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#e3b64c]"></div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black mb-4 md:mb-5 tracking-tight drop-shadow-md leading-tight">
              <span className="text-white">CERTIFICATION & </span>
              <br className="hidden lg:hidden" />
              <span className="text-[#e3b64c] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">LICENSE</span>
            </h2>

            {/* Description */}
            <p className="text-gray-100 text-sm md:text-lg lg:text-xl font-medium mb-5 md:mb-6 drop-shadow-sm max-w-2xl mx-auto md:mx-0 lg:mx-auto tracking-wide leading-relaxed">
              Ensure top-tier quality and build market trust. Get your products certified with ISI, BIS & Gold Hallmark with absolute confidence and guaranteed 100% compliance.
            </p>

            {/* Premium Features List */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start lg:justify-center items-center md:items-start gap-3 md:gap-6 lg:gap-8 mb-8 md:mb-10 text-white text-sm md:text-base font-semibold drop-shadow-md">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e3b64c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                End-to-End Support
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e3b64c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Fast Processing
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#e3b64c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                100% Compliance
              </span>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start lg:justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base md:text-lg font-black text-[#0a192f] uppercase tracking-wide bg-gradient-to-r from-[#e3b64c] via-[#ffe082] to-[#e3b64c] bg-[length:200%_auto] rounded-full shadow-[0_0_20px_rgba(227,182,76,0.3)] hover:shadow-[0_0_30px_rgba(227,182,76,0.6)] hover:-translate-y-1 hover:bg-[position:right_center] transition-all duration-300 group"
              >
                Get Certified Today
                <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center uppercase text-black mb-4">
            Search Any Product
          </h2>
          <p className="text-center text-[#005f86] font-medium tracking-wide max-w-2xl mx-auto mb-10">
            High-quality certified products supporting safety, compliance, and global standards across industries.
          </p>

          {/* MOVED SEARCH BAR SECTION TO 'OUR PRODUCTS' */}
          <div className="w-full flex flex-col items-center justify-center mb-16 relative z-50">
            <div className="relative w-full max-w-3xl" ref={searchRef}>
              <div className="flex items-center w-full bg-white border border-gray-400 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus-within:shadow-[0_8px_30px_rgb(0,95,134,0.15)] focus-within:border-[#005f86] transition-all duration-300 group p-1.5 sm:p-2">
                <div className="pl-3 sm:pl-4 pr-1 sm:pr-2 hidden sm:block shrink-0">
                  <Search className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 group-focus-within:text-[#005f86] transition-colors" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() =>
                    searchQuery.trim().length > 0 && setIsSearchOpen(true)
                  }
                  placeholder="Search Product By Name or IS Number..."
                  className="w-full pl-4 sm:pl-2 pr-2 sm:pr-4 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg text-gray-800 placeholder-gray-500 outline-none bg-transparent min-w-0"
                />
                <button
                  className="bg-gradient-to-r from-[#0a3d62] to-[#0072b1] hover:shadow-lg text-white px-5 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold transition-all duration-300 hidden sm:block whitespace-nowrap cursor-pointer shrink-0 text-sm sm:text-base"
                  aria-label="Search"
                >
                  Search
                </button>
                <button
                  className="bg-gradient-to-r from-[#0a3d62] to-[#0072b1] text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 sm:hidden shadow-md"
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </div>

              {isSearchOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-80 overflow-y-auto z-[100]">
                  {searchResults.length > 0 ? (
                    <ul className="py-2">
                      {searchResults.map((product, index) => (
                        <li
                          key={index}
                          onClick={() => handleSearchSelect(product.slug)}
                          className="px-6 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-50 last:border-b-0 transition-colors"
                        >
                          <span className="block text-base font-semibold text-gray-800 line-clamp-1">
                            {product.name}
                          </span>
                          <span className="block text-sm text-[#005f86] mt-1 font-medium">
                            {product.isNo}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-6 py-8 text-base text-gray-500 text-center">
                      No products found matching "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* END MOVED SEARCH BAR SECTION */}

          <InfiniteProductsV2 />
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/request-consultation-call-1.webp')" }}>
        <div className="relative max-w-7xl mx-auto px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-[#0f172a] lg:col-span-5 xl:col-span-5">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-8 h-0.5 bg-[#115cd9]"></div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#64748b] uppercase">Get in touch</span>
              </div>
              <h2 className="text-4xl md:text-[46px] font-extrabold mb-5 leading-[1.1] tracking-tight text-[#0f172a]">
                Request a <br className="hidden md:block" />
                <span className="text-[#115cd9]">Consultation</span> Call
              </h2>
              <p className="text-[#334155] text-base leading-relaxed max-w-md font-medium">
                Get expert guidance on certifications, approvals, and compliance.
                Share your details and our consultants will connect with you shortly.
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 lg:col-span-7 lg:col-start-6 xl:col-span-7 xl:col-start-6">
              <div className="mb-6">
                <p className="text-[#0f172a] font-bold text-lg mb-2">
                  Write your requirement and request a call back
                </p>
                <div className="w-10 h-0.5 bg-[#115cd9]"></div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Row 1 – Name */}
                <div className="relative col-span-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    maxLength={50}
                    className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-500 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#115cd9] focus:border-[#115cd9] transition-colors shadow-sm"
                  />
                </div>

                {/* Row 1 – Phone */}
                <div className="relative col-span-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10 Digit Mobile No."
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-500 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#115cd9] focus:border-[#115cd9] transition-colors shadow-sm"
                  />
                </div>

                {/* Row 2 – Service (Full Width) */}
                <div className="relative md:col-span-2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Services You need"
                    required
                    className="w-full bg-white border border-gray-200 text-gray-800 placeholder-gray-500 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#115cd9] focus:border-[#115cd9] transition-colors shadow-sm"
                  />
                </div>

                {/* ReCAPTCHA */}
                <div className="md:col-span-2">
                  <ReCAPTCHA
                    sitekey="6LdAsEwsAAAAAFklpMAqvko7_E5sfwvqzmcYPmPV"
                    onChange={(token) => setCaptchaToken(token)}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="md:col-span-2 mt-2 bg-gradient-to-r from-[#0ea5e9] to-[#1d4ed8] hover:from-[#0284c7] hover:to-[#1e3a8a] text-white cursor-pointer font-bold py-3.5 rounded-lg transition-all duration-300 shadow-[0_4px_14px_0_rgb(29,78,216,0.39)] hover:shadow-[0_6px_20px_rgb(29,78,216,0.23)] hover:-translate-y-[1px] disabled:opacity-60 flex items-center justify-center gap-3 text-sm tracking-wide"
                >
                  {loading ? "SUBMITTING..." : "SUBMIT"}
                  {!loading && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-white text-[#1d4ed8] rounded-full p-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>

                {success && (
                  <p className="md:col-span-2 text-green-600 text-sm font-semibold mt-1 text-center">
                    Your enquiry has been sent. We will respond shortly.
                  </p>
                )}
                {error && (
                  <p className="md:col-span-2 text-red-600 text-sm font-semibold mt-1 text-center">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8fbff] py-14 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#004e98] mb-4 uppercase tracking-wide">
              OUR CLIENTS
            </h2>
            <div className="flex items-center justify-center max-w-lg mx-auto">
              <div className="h-px bg-gray-300 flex-grow" />
              <div className="w-24 h-1.5 bg-[#0072b1] rounded-full mx-2 shadow-sm" />
              <div className="h-px bg-gray-300 flex-grow" />
            </div>
          </div>

          <div className="relative overflow-hidden mb-12 py-4">
            <div
              ref={clientsRef}
              className="flex gap-6 w-max will-change-transform items-center px-4"
              onMouseEnter={() => setClientsPaused(true)}
              onMouseLeave={() => setClientsPaused(false)}
            >
              {clientItems.map((logo, index) => (
                <div
                  key={index}
                  className="
                    w-52 sm:w-60 md:w-72 
                    h-32 sm:h-36 md:h-40
                    bg-white rounded-xl
                    border border-gray-100
                    shadow-sm hover:shadow-md
                    transition-all duration-300
                    flex items-center justify-center
                    shrink-0 p-2 sm:p-3
                  "
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={220}
                    height={140}
                    className="object-contain max-h-full max-w-full mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-gray-300 w-16 md:w-32" />
            <p className="bg-[#eaf3ff] text-[#004e98] px-4 py-1.5 rounded-full font-semibold tracking-[0.2em] text-xs md:text-sm uppercase text-center shadow-sm">
              TRUSTED BY INDUSTRY LEADERS
            </p>
            <div className="h-px bg-gray-300 w-16 md:w-32" />
          </div>
        </div>
      </section>

      {/* Trusted by Businesses Section */}
      <section className="w-full relative overflow-hidden flex items-center min-h-[450px] lg:min-h-[450px] xl:min-h-[500px] py-10 lg:py-8">

        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-[position:left_center] lg:bg-center lg:bg-[length:100%_100%] contrast-[1.05] saturate-[1.1]"
          style={{ backgroundImage: "url('/trusted-by-business.webp')", imageRendering: "-webkit-optimize-contrast" }}
        ></div>

        <div className="relative w-full max-w-[1400px] mx-auto px-6 z-10 flex flex-col h-full justify-center items-center lg:items-start text-center lg:text-left">

          {/* Main Text Content */}
          <div className="flex flex-col max-w-[340px] md:max-w-[650px] lg:max-w-[420px] xl:max-w-[550px] items-center lg:items-start">
            {/* Heading */}
            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-black tracking-tight text-[#0a1b35] leading-[1.1] mb-1">
              Trusted by Businesses.
            </h2>
            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-black tracking-tight text-[#0a1b35] leading-[1.1] mb-3">
              Proven by <span className="text-[#0066ff]">Results.</span>
            </h2>

            {/* Blue underline */}
            <div className="w-16 lg:w-[72px] h-[5px] bg-[#0066ff] mb-4 lg:mb-6 rounded-full"></div>

            {/* Description */}
            <div className="max-w-full">
              <p className="text-[#0a1b35] text-[16px] md:text-[18px] lg:text-[22px] font-black leading-snug mb-3 lg:mb-4">
                Your Strategic Partner for Global Compliance, Quality Standards, and Business Growth.
              </p>
              <p className="text-[#1a365d] text-[14px] md:text-[15px] lg:text-[17px] font-bold leading-relaxed">
                We empower enterprises worldwide with seamless <strong className="font-black text-[#0047b3]">ISO Certification, BIS Registration, Trademark, and EPR Compliance</strong> services. Our expert consultants ensure zero-hassle paperwork, lightning-fast approvals, and 100% regulatory adherence.
              </p>
            </div>
          </div>

          {/* Stats Bar (Pill Card) */}
          <div className="mt-10 md:mt-12 lg:mt-16 self-center lg:self-start w-full md:w-auto">
            <div className="bg-[#041029]/90 rounded-3xl lg:rounded-full p-5 md:p-6 lg:py-4 lg:px-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#23589b] inline-block backdrop-blur-md w-full lg:w-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-8 gap-x-4 md:gap-x-6 lg:flex lg:items-center divide-y divide-[#4d86c4]/40 sm:divide-y-0 lg:divide-x lg:divide-[#4d86c4]">

                {/* Stat 1 */}
                <div className="flex items-center gap-4 py-4 sm:py-0 lg:px-7">
                  <div className="bg-gradient-to-br from-[#0055ff] to-[#0099ff] rounded-full p-2.5 shrink-0 flex items-center justify-center w-12 h-12 lg:w-[54px] lg:h-[54px] shadow-[0_0_15px_rgba(0,153,255,0.8)] border border-[#66b3ff]">
                    <svg className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-[24px] font-black text-[#8ad1ff] leading-none mb-[2px] tracking-wide">10,000+</h3>
                    <p className="text-white text-xs lg:text-[13px] font-medium leading-[1.25]">Certifications<br />Facilitated</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-4 py-4 sm:py-0 lg:px-7">
                  <div className="bg-gradient-to-br from-[#0055ff] to-[#0099ff] rounded-full p-2.5 shrink-0 flex items-center justify-center w-12 h-12 lg:w-[54px] lg:h-[54px] shadow-[0_0_15px_rgba(0,153,255,0.8)] border border-[#66b3ff]">
                    <svg className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M21 12c0 3-3 6-9 6s-9-3-9-6 3-6 9-6 9 3 9 6 M3.5 9h17 M3.5 15h17"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-[24px] font-black text-[#8ad1ff] leading-none mb-[2px] tracking-wide">30+</h3>
                    <p className="text-white text-xs lg:text-[13px] font-medium leading-[1.25]">Countries<br />Served</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-4 py-4 sm:py-0 lg:px-7">
                  <div className="bg-gradient-to-br from-[#0055ff] to-[#0099ff] rounded-full p-2.5 shrink-0 flex items-center justify-center w-12 h-12 lg:w-[54px] lg:h-[54px] shadow-[0_0_15px_rgba(0,153,255,0.8)] border border-[#66b3ff]">
                    <svg className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z M17 11.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5c-.24 0-.46.04-.68.11C16.92 7.37 17.5 8.6 17.5 10c0 1.4-.58 2.63-1.18 3.39.22.07.44.11.68.11zm1.75 3c-.34-.14-.72-.25-1.11-.33.91.73 1.36 1.63 1.36 2.83v2h4v-2c0-1.84-2.82-2.33-4.25-2.5z M7 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5c.24 0 .46.04.68.11C7.08 7.37 6.5 8.6 6.5 10c0 1.4.58 2.63 1.18 3.39-.22.07-.44.11-.68.11zm-1.75 3C3.82 14.67 1 15.16 1 17v2h4v-2c0-1.2.45-2.1 1.36-2.83-.39.08-.77.19-1.11.33z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-[24px] font-black text-[#8ad1ff] leading-none mb-[2px] tracking-wide">8,000+</h3>
                    <p className="text-white text-xs lg:text-[13px] font-medium leading-[1.25]">Satisfied<br />Clients</p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-4 py-4 sm:py-0 lg:px-7">
                  <div className="bg-gradient-to-br from-[#0055ff] to-[#0099ff] rounded-full p-2.5 shrink-0 flex items-center justify-center w-12 h-12 lg:w-[54px] lg:h-[54px] shadow-[0_0_15px_rgba(0,153,255,0.8)] border border-[#66b3ff]">
                    <svg className="w-6 h-6 lg:w-[28px] lg:h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 19V5 M8 19v-6 M12 19v-8 M16 19v-11 M20 19v-4 M4 5l6 6 4-3 6 5 M16 5h4v4"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl lg:text-[24px] font-black text-[#8ad1ff] leading-none mb-[2px] tracking-wide">20+</h3>
                    <p className="text-white text-xs lg:text-[13px] font-medium leading-[1.25]">Years of<br />Expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-20 px-4 md:px-10 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h4 className="text-blue-400 font-bold tracking-widest text-sm mb-2 uppercase">
              Testimonials
            </h4>
            <h2 className="text-[#0a1b35] text-4xl uppercase font-extrabold mb-4">
              what our clients say{" "}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="relative group">
            {/* Slider Wrapper */}
            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                ref={testimonialsRef}
                className="flex flex-nowrap w-max will-change-transform pb-8"
              >
                {/* We map the testimonials twice for an infinite seamless loop */}
                {[...testimonials, ...testimonials].map(
                  (t, index) => (
                    <div key={index} className="w-[320px] sm:w-[380px] md:w-[420px] px-4 shrink-0">
                      <div className="group cursor-pointer relative mt-12 bg-white rounded-[2rem] p-6 pt-12 shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center min-h-[320px]">
                        {/* Floating Google Icon - Slightly smaller */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full p-1 shadow-xl border-[5px] border-white flex items-center justify-center z-10">
                          <img
                            src="google-image.png"
                            alt="Google"
                            className="w-18 h-18 object-contain"
                          />
                        </div>

                        {/* Review Text - Reduced size (text-sm) and margin */}
                        <p className="text-slate-600 text-sm italic leading-relaxed text-center mb-6 px-2">
                          "{t.text}"
                        </p>

                        <div className="text-center">
                          <h4 className="text-lg font-bold text-black mb-1">
                            {t.name}
                          </h4>
                          <div className="flex gap-1 mb-2 justify-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                fill="#ff7a00"
                                color="#ff7a00"
                              />
                            ))}
                          </div>
                          <p className="text-[0.65rem] font-bold text-slate-500 tracking-[0.1em] uppercase">
                            {t.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative py-4 lg:py-6 overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-80" />
          <div className="absolute -left-32 top-20 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute -right-32 bottom-20 w-96 h-96 bg-cyan-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        <div className="h-1.5 w-full bg-gradient-to-r from-[#2f4f8f] via-[#0099CC] to-[#0077A8] absolute top-0 left-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center py-4 md:py-6">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-white/80 px-5 py-2.5 rounded-full border border-blue-100 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0077A8]"></span>
                </span>
                <span className="text-[#005f86] font-bold text-xs md:text-sm uppercase tracking-widest">
                  Your Trusted Certification Partner
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Ready for a Better <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005f86] to-[#0099CC] relative inline-block py-2">
                Business Partnership
              </span>
            </h2>

            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
              Streamline your certification journey with expert guidance, transparent processes, and unwavering support for your business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact-us">
                <button className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#005f86] to-[#0077A8] border border-transparent rounded-full overflow-hidden hover:shadow-[0_0_25px_rgba(0,119,168,0.5)] hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer">
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                  <span className="relative flex items-center gap-2">
                    Contact Us Today
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-10 text-slate-500 text-sm font-medium">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Trusted by 10,000+ businesses</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Fast approval</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Expert guidance</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
