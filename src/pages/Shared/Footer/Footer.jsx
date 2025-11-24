import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-10">
          
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link to="/" className="flex items-center gap-3 mb-3">
              <img
                src="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
                alt="A1 IT Firm"
                className="w-12 h-12 rounded-lg shadow-md"
              />
              <h2 className="text-2xl font-bold tracking-tight">
                <span className="text-blue-500">A1</span>{" "}
                <span className="text-yellow-400">IT</span>{" "}
                <span className="text-red-500">Firm</span>
              </h2>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Lead-focused web, SEO & marketing solutions for growth-driven
              businesses.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Since 2021 • Based in Dhaka, Bangladesh
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/lead-generation"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link
                  to="/web-development"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/email-marketing"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/search-engine-optimization"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Search Engine Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-4 text-xs text-gray-500 space-y-1 max-w-xs">
              <p className="font-semibold text-gray-300">Contact</p>
              <p>mahmud@a1itfirm.com</p>
              <p>+880 1819946104</p>
              <p>House No: 34, 1 Shahid Faroque Rd, Dhaka 1204</p>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-3">
              Stay Connected
            </h3>

            <p className="text-sm text-gray-400 mb-4 max-w-xs text-center lg:text-left">
              Message us anytime on WhatsApp for quick assistance.
            </p>

            {/* WhatsApp Button */}
           <a
  href="https://wa.me/8801819946104?text=Hello%20A1%20IT%20Firm%2C%20I%20would%20like%20a%20free%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-green-600 hover:bg-green-500 transition-colors duration-200 shadow-md mb-5"
>
  <FaWhatsapp size={18} />
  Book a Free Consultation
</a>


            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/a1itfirm"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/40 hover:bg-blue-700/70 text-blue-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A1 IT Firm on Facebook"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/a1itfirm"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900/40 hover:bg-blue-700/70 text-blue-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="A1 IT Firm on LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-4 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <p className="text-center sm:text-left">
            &copy; {currentYear}{" "}
            <Link to="/" className="hover:text-blue-400 transition-colors">
              A1 IT Firm
            </Link>
            . All rights reserved.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
