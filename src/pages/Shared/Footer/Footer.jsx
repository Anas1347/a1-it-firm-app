import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
             <footer className=" text-black p-8">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="https://i.ibb.co.com/g7LRK1W/a1-it-firm-logo.png"
            alt="A1 IT Firm"
            className="w-20 h-20 mx-auto"
          />
        </div>

        {/* Details */}
        <div className="mb-4">
          <h2 className="text-lg font-bold">A1 IT Firm</h2>
          <p className="text-sm">Providing top-notch IT solutions since 2023.</p>
          <p className="text-sm">Contact us: info@a1itfirm.com | +123-456-7890</p>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-sm text-gray-400">
            &copy; {currentYear} <Link>A1 IT Firm</Link> . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;