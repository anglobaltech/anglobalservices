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
    image: "/dash-image-bis-isi-certification-1.webp",
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
  }
];

const extendedHeroSlides = [...heroSlidesData, heroSlidesData[0]];


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
      "/clients/spago.jpg",
      "/clients/sga.jpg",
      "/clients/nhf.jpg",
      "/clients/mtras.jpg",
      "/clients/kse.jpg",
      "/clients/kowa.jpg",
      "/clients/jasmine.jpg",
      "/clients/health.jpg",
      "/clients/force.jpg",
      "/clients/fire-guard.jpg",
      "/clients/birat.jpg",
      "/clients/10.jpg",
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
  const totalSlides = testimonials.length + 1;
  const clientsRef = useRef(null);
  const [clientsPaused, setClientsPaused] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    const speed = 0.4;

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

  const maxIndex = testimonials.length - visibleCards; // Single interval tracking loop

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (currentIndex === totalSlides) {
      requestAnimationFrame(() => {
        setEnableTransition(false);
        setCurrentIndex(0);
      });
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  function InfiniteProducts() {
    const trackRef = useRef(null);
    const products = [
      "/products/product1.jpg",
      "/products/product2.jpg",
      "/products/product3.jpg",
      "/products/product4.jpg",
      "/products/product5.jpg",
      "/products/product6.jpg",
    ];

    const items = [...products, ...products];

    useEffect(() => {
      const track = trackRef.current;
      if (!track) return;

      let x = 0;
      let raf;
      const speed = 0.18;

      const animate = () => {
        x -= speed;
        if (x <= -track.scrollWidth / 2) {
          x += track.scrollWidth / 2;
        }
        track.style.transform = `translate3d(${x}px,0,0)`;
        raf = requestAnimationFrame(animate);
      };

      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }, []);

    return (
      <div className="relative w-full overflow-hidden py-10 bg-gray-50">
        <div ref={trackRef} className="flex gap-8 w-max will-change-transform">
          {items.map((img, index) => (
            <div
              key={index}
              className="
                shrink-0
                w-55 sm:w-65 lg:w-75
                bg-white rounded-2xl
                shadow-md hover:shadow-xl
                transition-shadow duration-300
                flex items-center justify-center
                p-6
              "
            >
              <div className="relative w-full h-40">
                <Image
                  src={img}
                  alt="Product"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-gray-50 to-transparent" />
      </div>
    );
  }

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full bg-[#051c35] overflow-hidden">
        <div 
          className={`flex w-full ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${heroSlide * 100}%)` }}
        >
          {extendedHeroSlides.map((slide, idx) => (
            <div key={idx} className="w-full shrink-0 relative">
              <div className="grid grid-cols-1 grid-rows-1 w-full max-w-[2000px] mx-auto">
                
                {/* IMAGE LAYER */}
                <div className="col-start-1 row-start-1 w-full relative flex items-start">
                  <img 
                    src={slide.image} 
                    alt={slide.headingMain} 
                    className="w-full h-full object-cover object-left sm:h-auto sm:object-contain block min-h-[380px] sm:min-h-0" 
                  />
                  {/* Subtle overlay to enhance text contrast over the graphic */}
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* TEXT CONTENT LAYER */}
                <div className="col-start-1 row-start-1 relative z-10 w-full flex items-center">
                  <div className="w-full max-w-7xl mx-auto px-2 py-4 sm:py-1 md:px-4 md:py-2 xl:py-6 sm:px-6 lg:px-8">
                    <div className={slide.containerClass || "w-[55%] sm:w-[65%] md:w-[60%] lg:w-[55%] xl:w-full xl:max-w-3xl"}>
                      <h1 className="text-[22px] leading-tight sm:text-[16px] md:text-2xl lg:text-[28px] xl:text-[38px] font-extrabold text-white md:leading-tight mb-3 sm:mb-1 md:mb-2 xl:mb-4 drop-shadow-lg tracking-tight">
                        <span className="whitespace-normal sm:whitespace-nowrap">{slide.headingMain}</span> <br className="hidden sm:block" />
                        <span className="text-[#0075B6] drop-shadow-md bg-white/95 px-2 md:px-2 xl:px-3 py-1 md:py-1 rounded md:rounded-lg inline-block mt-2 sm:mt-1 md:mt-1 xl:mt-2 text-[12px] sm:text-[10px] md:text-sm lg:text-[18px] xl:text-[28px] whitespace-normal sm:whitespace-nowrap">
                          {slide.headingSub}
                        </span>
                      </h1>

                      <p className="text-white font-medium text-[12px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-base mb-5 sm:mb-3 md:mb-4 xl:mb-8 leading-relaxed sm:leading-snug md:leading-relaxed drop-shadow-md bg-black/20 p-3 sm:p-2 md:p-2 xl:p-3 rounded md:rounded-lg backdrop-blur-sm inline-block w-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-full">
                        {slide.paragraph}
                      </p>

                      <div 
                        className="flex flex-wrap items-center gap-2 sm:gap-1 md:gap-3 xl:gap-4 mb-4 sm:mb-2 md:mb-4 xl:mb-8"
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                      >
                        <Link
                          href="/contact-us"
                          className="bg-[#0075B6] hover:bg-blue-700 text-white px-3 py-1.5 sm:px-1.5 sm:py-0.5 md:px-4 md:py-1.5 xl:px-8 xl:py-3 rounded md:rounded-md font-medium transition-colors shadow-lg text-[12px] sm:text-[9px] md:text-xs xl:text-base"
                        >
                          Contact Us
                        </Link>
                        {slide.exploreLink ? (
                          <Link
                            href={slide.exploreLink}
                            className="bg-white/95 text-[#0075B6] hover:bg-white hover:text-blue-800 px-3 py-1.5 sm:px-1.5 sm:py-0.5 md:px-4 xl:px-8 md:py-1.5 xl:py-3 rounded md:rounded-md font-semibold transition-all shadow-lg text-[12px] sm:text-[9px] md:text-xs xl:text-base backdrop-blur-sm cursor-pointer"
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
                            className="bg-white/95 text-[#0075B6] hover:bg-white hover:text-blue-800 px-3 py-1.5 sm:px-1.5 sm:py-0.5 md:px-4 xl:px-8 md:py-1.5 xl:py-3 rounded md:rounded-md font-semibold transition-all shadow-lg text-[14px] sm:text-[9px] md:text-xs xl:text-base backdrop-blur-sm cursor-pointer"
                          >
                            Explore Services
                          </button>
                        )}
                      </div>

                      <div className="border border-white/20 bg-white/10 backdrop-blur-md p-4 sm:p-2 md:p-3 xl:p-6 rounded md:rounded-xl shadow-xl w-full md:w-[100%] xl:max-w-2xl">
                        <h3 className="text-[#00c3ff] text-[12px] sm:text-[10px] md:text-sm xl:text-xl font-bold mb-2 sm:mb-1 md:mb-1 xl:mb-2">
                          A N Global Services Private Limited
                        </h3>
                        <p className="text-gray-200 text-[10px] sm:text-[8px] md:text-[10px] xl:text-sm leading-relaxed sm:leading-snug md:leading-relaxed mb-3 sm:mb-2 md:mb-3 xl:mb-6">
                          A complete industrial solution provider. We help manufacturers meet quality, safety, and compliance standards with complete confidence.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-8">
                          <div className="flex items-center gap-2 md:gap-2">
                            <div className="bg-white/10 p-1 md:p-1.5 rounded-full">
                              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#00c3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="text-gray-200 text-[10px] sm:text-[8px] md:text-[10px] xl:text-sm">info@anglobalservices.com</span>
                          </div>
                          
                          <div className="flex items-center gap-2 md:gap-2">
                            <div className="bg-white/10 p-1 md:p-1.5 rounded-full">
                              <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-6 md:h-6 text-[#00c3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <span className="text-gray-200 text-[10px] sm:text-[8px] md:text-[10px] xl:text-sm">+91 7782069184</span>
                          </div>
                        </div>
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
                className={`w-1.5 h-1.5 md:w-3 md:h-3 rounded-full cursor-pointer transition-all ${
                  isActive ? "bg-white w-3 md:w-6" : "bg-white/50"
                }`}
              />
            );
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
              <Image
                src="/home-about.jpg"
                alt="About AN Global Services"
                width={450}
                height={450}
                className="rounded-2xl object-cover"
              />
            </div>
            <div>
              <p className="text-xl text-gray-800 mb-3">
                About AN Global Services
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                Transforming Ideas into Impact with Integrity & Innovation
              </h2>
              <p className="text-gray-900 mb-4 leading-relaxed">
                <span className="text-[#016398] font-bold">
                  "AN Global Services"
                </span>{" "}
                is a well-established and leading consulting firm, the assured
                service provider. We have placed ourselves amongst a reliable
                names in the corporate world.
              </p>
              <p className="text-gray-900 mb-4 leading-relaxed">
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
              <p className="text-gray-900 leading-relaxed">
                Government regulations ensure safety, quality and compliance,
                helping organizations grow and compete globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
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
                link: "/lab_servces",
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
                className="group border-3 border-[#0077A8] rounded-xl overflow-hidden relative"
              >
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#2f4f8f]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <p className="text-xl italic mb-4">Authenticity Assured</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            CERTIFICATION & LICENSE
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Get ISI, BIS & Gold Hallmark Certifications with Confidence and
            Compliance
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center uppercase text-black mb-4">
            Search Any Product
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
            High-quality certified products supporting safety, compliance, and
            global standards across industries.
          </p>

          {/* MOVED SEARCH BAR SECTION TO 'OUR PRODUCTS' */}
          <div className="w-full flex flex-col items-center justify-center mb-16 relative z-50">
            <div className="relative w-full max-w-3xl" ref={searchRef}>
              <div className="flex items-center w-full bg-white border-2 border-[#005f86] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() =>
                    searchQuery.trim().length > 0 && setIsSearchOpen(true)
                  }
                  placeholder="Search Product By Name or IS Number"
                  className="w-full pl-6 pr-4 py-3 text-base sm:text-lg text-gray-700 outline-none bg-transparent"
                />
                <button
                  className="bg-[#005f86] text-white w-10 h-10 sm:w-12 sm:h-12 mr-1.5 rounded-full flex items-center justify-center shrink-0 hover:bg-[#004a69] transition-colors"
                  aria-label="Search"
                >
                  <Search size={22} className="sm:w-6 sm:h-6" />
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

          <InfiniteProducts />
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1f2a44] via-[#2f4f8f] to-[#1f2a44]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <ChevronRight className="text-yellow-400 w-6 h-6" />
                </div>
                <h2 className="text-4xl font-extrabold">
                  {" "}
                  Request a Consultation Call
                </h2>
              </div>
              <p className="text-gray-200 leading-relaxed max-w-lg">
                Want expert guidance on certifications, approvals, or compliance
                requirements? Speak directly with our experienced technical
                consultants. Share your details and our team will connect with
                you shortly to discuss the right solution for your business.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-800">
              <p className="text-sm font-semibold text-gray-700 mb-4">
                Select your requirement and request a call back
              </p>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Write which service you need"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2f4f8f]"
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2f4f8f]"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10 Digit Mobile No."
                  className="md:col-span-2 w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2f4f8f]"
                />

                <ReCAPTCHA
                  sitekey="6LdAsEwsAAAAAFklpMAqvko7_E5sfwvqzmcYPmPV"
                  onChange={(token) => setCaptchaToken(token)}
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="md:col-span-2 mt-2 bg-[#005f86] hover:bg-[#004766] text-white font-semibold py-3 rounded-md transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "SUBMIT"}
                </button>

                {success && (
                  <p className="md:col-span-2 text-green-600 text-sm font-semibold mt-2">
                    Your enquiry has been sent. We will respond shortly.
                  </p>
                )}
                {error && (
                  <p className="md:col-span-2 text-red-600 text-sm font-semibold mt-2">
                    {error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="text-4xl font-extrabold text-black mb-3">
              OUR CLIENTS
            </h2>
            <div className="w-24 h-1 bg-[#2f4f8f] mx-auto rounded-full" />
          </div>

          <div className="relative overflow-hidden">
            <div
              ref={clientsRef}
              className="flex gap-8 w-max py-10 will-change-transform"
              onMouseEnter={() => setClientsPaused(true)}
              onMouseLeave={() => setClientsPaused(false)}
            >
              {clientItems.map((logo, index) => (
                <div
                  key={index}
                  className="
                    w-45 sm:w-55 md:w-60 pb-5
                    h-25 sm:h-27.5 md:h-30
                    bg-gray-50 rounded-xl
                    shadow-sm hover:shadow-lg
                    transition-all duration-300
                    flex items-center justify-center
                    shrink-0
                  "
                >
                  <Image
                    src={logo}
                    alt="Client Logo"
                    width={180}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-14 px-4 md:px-10 bg-[#0a1120] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h4 className="text-blue-400 font-bold tracking-widest text-sm mb-2 uppercase">
              Testimonials
            </h4>
            <h2 className="text-white text-4xl uppercase font-extrabold mb-4">
              what our clients say{" "}
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="relative group">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 transition-all shadow-xl"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 transition-all shadow-xl"
            >
              <ChevronRight className="text-white" />
            </button>

            {/* Slider Wrapper */}
            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex *
                    (typeof window !== "undefined" && window.innerWidth < 768
                      ? 100
                      : 33.333)
                  }%)`,
                }}
              >
                {/* We map the testimonials + the first 3 again to fill the empty space at the end */}
                {[...testimonials, ...testimonials.slice(0, 3)].map(
                  (t, index) => (
                    <div key={index} className="w-full md:w-1/3 px-4 shrink-0">
                      <div className="group cursor-pointer relative mt-12 bg-white rounded-[2rem] p-6 pt-12 shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center min-h-[320px]">
                        {/* Floating Google Icon - Slightly smaller */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full p-1 shadow-xl border-[5px] border-[#0a1120] flex items-center justify-center z-10">
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

      <section className="w-full bg-lineart-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#0077A8] opacity-10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#0077A8] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} /> */}
        </div>

        <div className="h-1.5 w-full bg-linear-to-r from-[#2f4f8f] via-[#0099CC] to-[#0077A8] relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
          <div className="text-center">
            <div className="inline-block animate-fadeIn">
              <p className="text-[#2f4f8f] font-bold text-sm uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                <span className="w-8 h-0.5 bg-[#2f4f8f]" />
                Your Trusted Certification Partner
                <span className="w-8 h-0.5 bg-[#2f4f8f]" />
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight animate-slideUp">
              Ready for a Better
              <br />
              <span className="text-[#005f86] relative inline-block">
                Business Partnership
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7 Q 150 2, 295 7"
                    stroke="#2f4f8f"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="animate-draw"
                  />
                </svg>
              </span>
            </h2>

            <p
              className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              Streamline your certification journey with expert guidance,
              transparent processes, and unwavering support for your business
              growth.
            </p>

            <div className="animate-fadeIn" style={{ animationDelay: "0.5s" }}>
              <Link href="/contact-us">
                <button className="group relative px-10 py-3 rounded-2xl text-lg font-bold bg-[#005f86] text-white hover:bg-[#005f8a] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 overflow-hidden">
                  <span className="absolute inset-0 w-0 bg-white opacity-10 group-hover:w-full transition-all duration-300" />
                  <span className="relative flex items-center gap-2 cursor-pointer">
                    Contact Us
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>

            <p
              className="text-gray-500 text-sm mt-6 animate-fadeIn"
              style={{ animationDelay: "0.7s" }}
            >
              Trusted by 10000+ businesses • Fast approval • Expert guidance
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
