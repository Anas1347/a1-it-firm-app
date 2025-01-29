import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
   
     <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {/* Logo & Description */}
        <div to="/" className="flex flex-col items-center justify-center">
          <img
            src="https://i.ibb.co/g7LRK1W/a1-it-firm-logo.png"
            alt="A1 IT Firm"
            className="w-24 h-24"
          />
          <h2 className="text-xl font-bold mt-4">
            <span className="text-blue-600">A1</span>{" "}
            <span className="text-yellow-600">IT</span>{" "}
            <span className="text-red-600">Firm</span>
          </h2>
          <p className="text-sm mt-2">
            Providing top-notch IT solutions since 2023.
          </p>
        </div>

    
        <div className="flex flex-col items-center justify-center">
          <ul className="space-y-2">
            <li>
              <Link to="/about-us" className="text-sm hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="text-sm hover:text-blue-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm hover:text-blue-400">
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-sm hover:text-blue-400"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
  <a
    href="https://www.facebook.com/a1itfirm"
    className="text-blue-600 hover:text-blue-400"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF size={20} />
  </a>

  <a
    href="https://www.linkedin.com/company/a1itfirm"
    className="text-blue-700 hover:text-blue-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn size={20} />
  </a>
</div>

        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-300">
          &copy; {currentYear}{" "}
          <Link to="/" className="hover:text-blue-400 underline">
            A1 IT Firm
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>

  );
};

export default Footer;
