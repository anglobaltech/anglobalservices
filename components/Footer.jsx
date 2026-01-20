import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#222] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Image
              src="/logo.png"
              alt="AN Global Services"
              width={260}
              height={80}
              className="mb-6 bg-white object-contain"
            />

            <h3 className="text-white font-semibold mb-4">Contact Info</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span>📞</span>
                <span>+91 7782069184</span>
              </div>
              <div className="flex items-start gap-3">
                <span>📞</span>
                <span>+91 9958820184</span>
              </div>

              <div className="flex items-start gap-3">
                <span>✉️</span>
                <span>info@anglobalservices.com</span>
              </div>

              <div className="flex items-start gap-3">
                <span>📍</span>
                <span>
                  S-63, 7th Floor, Urbtech NPX, Noida <br />
                  Sector-153, Uttar Pradesh, INDIA <br />
                  Pin – 201310
                </span>
              </div>

              <div className="mt-6">
                <Image
                  src="/iso.png"
                  alt="ISO Certified"
                  width={160}
                  height={160}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Useful Links</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white cursor-pointer">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/aboutus"
                  className="hover:text-white cursor-pointer"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/term-conditions"
                  className="hover:text-white cursor-pointer"
                >
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Serving Countries</h3>

            <div className="grid grid-cols-2 gap-y-3 text-sm">
              <span>India</span>
              <span>Mexico</span>
              <span>South Africa</span>
              <span>China</span>
              <span>Nepal</span>
              <span>Thailand</span>
              <span>Hongkong</span>
              <span>Japan</span>
              <span>Singapore</span>
              <span>Italy</span>
              <span>Greece</span>
              <span>South Korea</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Map</h3>

            <div className="w-full h-50 rounded overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps?q=NPX%20Tower%20Noida&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/anglobalservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-[#4267B2] hover:border-blue-600 hover:text-white transition"
              >
                <FaFacebookF size={16} />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/anglobalservic1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-black hover:border-black hover:text-white transition"
              >
                <FaXTwitter size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/an-global-services/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-[#0077B5] hover:border-blue-700 hover:text-white transition"
              >
                <FaLinkedinIn size={16} />
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/anglobalservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:border-transparent hover:text-white transition"
              >
                <FaInstagram size={16} />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@anglobalservicespvtltd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 bg-red-600 hover:border-red-600 hover:text-white transition"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-2 text-center text-sm text-gray-400">
        © 2026. A N GLOBAL SERVICES PVT. LTD. All Rights Reserved.
      </div>
    </footer>
  );
}
