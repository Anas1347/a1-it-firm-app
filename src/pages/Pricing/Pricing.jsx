import React from 'react';
import { Link } from 'react-router-dom';
import { FaBullhorn, FaLaptopCode, FaMailBulk, FaSearch } from 'react-icons/fa';

const Pricing = () => {
  return (
    <div className="py-16 px-6 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Our Pricing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Lead Generation Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <FaBullhorn size={30} className="text-blue-600 mr-4" />
            <h3 className="text-xl font-bold text-gray-800">Lead Generation</h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            We help businesses generate high-quality leads through various online channels like email campaigns, social media, and more.
          </p>
          <Link 
            to="/lead-generation-price" 
            className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block"
          >
            Show Price
          </Link>
        </div>

        {/* Web Development Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <FaLaptopCode size={30} className="text-blue-600 mr-4" />
            <h3 className="text-xl font-bold text-gray-800">Web Development</h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Our web development services focus on creating responsive, user-friendly websites that enhance your online presence.
          </p>
          <Link 
            to="/web-development-price" 
            className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block"
          >
            Show Price
          </Link>
        </div>

        {/* Email Marketing Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <FaMailBulk size={30} className="text-blue-600 mr-4" />
            <h3 className="text-xl font-bold text-gray-800">Email Marketing</h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            We design and execute targeted email campaigns to help you connect with your customers and boost conversions.
          </p>
          <Link 
            to="/email-marketing-price" 
            className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block"
          >
            Show Price
          </Link>
        </div>

        {/* SEO Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <FaSearch size={30} className="text-blue-600 mr-4" />
            <h3 className="text-xl font-bold text-gray-800">SEO</h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Our SEO strategies help you rank higher in search results and attract more organic traffic to your website.
          </p>
          <Link 
            to="/seo-price" 
            className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block"
          >
            Show Price
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
