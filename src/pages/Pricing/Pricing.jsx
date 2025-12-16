import React from "react";
import { Link } from "react-router-dom";
import { FaBullhorn, FaLaptopCode, FaMailBulk, FaSearch } from "react-icons/fa";

const Pricing = () => {
  return (
    <section className="py-16 px-6 container mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">
        Services & Pricing
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We offer flexible, results-driven service packages designed for B2B
        businesses. Explore each service to see detailed pricing and engagement
        options.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Lead Generation */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <FaBullhorn size={30} className="text-blue-600 mr-4" />
            <h3 className="text-xl font-bold text-gray-800">
              B2B Lead Generation
            </h3>
          </div>
          <p className="text-gray-700 flex-grow">
            Targeted, sales-ready B2B leads using data-driven outreach
            strategies, including UK Companies House data and niche
            segmentation.
          </p>
          <Link
            to="/lead-generation"
            className="mt-6 inline-block text-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            View Pricing
          </Link>
        </div>

        {/* Web Development */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <FaLaptopCode size={30} className="text-blue-600 mr-4" />
            <h3 className="text-xl font-bold text-gray-800">Web Development</h3>
          </div>
          <p className="text-gray-700 flex-grow">
            High-performance, responsive websites built to convert visitors into
            leads and support long-term business growth.
          </p>
          <Link
            to="/web-development"
            className="mt-6 inline-block text-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            View Pricing
          </Link>
        </div>

        {/* Email Marketing */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <FaMailBulk size={30} className="text-blue-600 mr-4" />
            <h3 className="text-xl font-bold text-gray-800">Email Marketing</h3>
          </div>
          <p className="text-gray-700 flex-grow">
            Conversion-focused email campaigns designed to nurture prospects,
            increase engagement, and generate qualified B2B leads.
          </p>
          <Link
            to="/email-marketing"
            className="mt-6 inline-block text-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            View Pricing
          </Link>
        </div>

        {/* SEO */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <FaSearch size={30} className="text-blue-600 mr-4" />
            <h3 className="text-xl font-bold text-gray-800">
              Search Engine Optimization
            </h3>
          </div>
          <p className="text-gray-700 flex-grow">
            Sustainable SEO strategies that improve visibility, attract
            qualified traffic, and support long-term lead generation.
          </p>
          <Link
            to="/search-engine-optimization"
            className="mt-6 inline-block text-center text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
