import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/lead-generation.json";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {
  FaAmazon,
  FaShopify,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const LeadGeneration = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-10 px-6">
        {/* Description Section with Lottie Animation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
              Boost Your Leads with Professional Tools
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl mb-6">
              Take your business to the next level with our comprehensive lead
              generation services. We combine innovative strategies and
              cutting-edge tools to help you connect with the right audience and
              grow your revenue effectively.
            </p>
          </div>
          <div className="flex-1">
            <Lottie options={lottieOptions} height={300} width={300} />
          </div>
        </div>

        {/* Tabs with Lead Types */}
        <Tabs>
          <TabList className="flex flex-wrap lg:justify-center space-x-6 mb-6 md:space-x-0 md:flex-col lg:flex-row sm:flex-row lg:gap-6 sm:gap-0">
            <Tab
              className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform  hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
              selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
            >
              <FaAmazon size={34} />
              <span className="block mt-2 md:inline-block">Amazon Leads</span>
            </Tab>
            <Tab
              className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform  hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
              selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
            >
              <FaShopify size={34} />
              <span className="block mt-2 md:inline-block">Shopify Leads</span>
            </Tab>
            <Tab
              className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform  hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
              selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
            >
              <FaMapLocation size={34} />
              <span className="block mt-2 md:inline-block">
                Location-Based Leads
              </span>
            </Tab>
          </TabList>

          {/* Content for Each Tab */}
          <div className="text-center mb-8 mt-8">
            <TabPanel>
              <div className="bg-white p-6 rounded-lg shadow-lg   hover:shadow-2xl  max-w-sm mx-auto">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">
                  Amazon Leads
                </h2>
                <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-box-open"></i>
                    </span>
                    <span className="font-semibold">1. FBA Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-cogs"></i>
                    </span>
                    <span className="font-semibold">2. FBM Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-truck"></i>
                    </span>
                    <span className="font-semibold">3. Vendor Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-archive"></i>
                    </span>
                    <span className="font-semibold">4. Wholesale Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-cogs"></i>
                    </span>
                    <span className="font-semibold">
                      5. Private Label Leads
                    </span>
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 max-w-sm mx-auto">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">
                  Shopify Leads
                </h2>
                <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-store"></i>
                    </span>
                    <span className="font-semibold">1. New Store Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-chart-line"></i>
                    </span>
                    <span className="font-semibold">2. Active Store Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-expand"></i>
                    </span>
                    <span className="font-semibold">
                      3. Store Expansion Leads
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-search"></i>
                    </span>
                    <span className="font-semibold">
                      4. Product Search Leads
                    </span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-tags"></i>
                    </span>
                    <span className="font-semibold">
                      5. Discounted Product Leads
                    </span>
                  </li>
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 max-w-sm mx-auto">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">
                  Geo-location Leads
                </h2>
                <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <span className="font-semibold">1. Local Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-globe-americas"></i>
                    </span>
                    <span className="font-semibold">2. Regional Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-globe"></i>
                    </span>
                    <span className="font-semibold">3. National Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-satellite-dish"></i>
                    </span>
                    <span className="font-semibold">4. Global Leads</span>
                  </li>
                  <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                    <span className="font-bold text-blue-600">
                      <i className="fas fa-bullseye"></i>
                    </span>
                    <span className="font-semibold">
                      5. Targeted Area Leads
                    </span>
                  </li>
                </ul>
              </div>
            </TabPanel>
          </div>
        </Tabs>

        {/* Pricing Cards Section */}
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center gap-6">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-xl p-6 w-[300px] text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 h-[500px] flex flex-col justify-between transform hover:scale-105">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Basic Plan
              </h3>
              <p className="text-gray-600 mb-4">Perfect for small businesses</p>
              <ul className="text-left text-gray-700 mb-4 list-inside">
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                Owner Name
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                 Title
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                 1000 Valid Emails
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                 LinkedIn
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                 Phone
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                 Address
                </li>
              </ul>
              <p className="text-2xl font-bold text-blue-600 mb-6">$190/mo</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-auto">
              Select Plan
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-blue-600 text-white shadow-xl rounded-xl p-6 w-[300px] text-center relative border border-blue-700 h-[500px] flex flex-col justify-between transform hover:scale-105">
            <span className="absolute bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-2 rounded-full top-5 right-1 transform rotate-30">
              Most Popular
            </span>
            <div>
              <h3 className="text-xl font-bold mb-4">Professional Plan</h3>
              <p className="mb-4">For growing businesses</p>
              <ul className="text-left mb-4 text-gray-200 list-inside">
              <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                 Owner Name
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                Title
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                 5000 Valid Emails
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                LinkedIn
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                 Phone
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                 Address
                </li>
              </ul>
              <p className="text-3xl font-bold mb-6">$850/mo</p>
            </div>
            <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg hover:bg-yellow-500 transition mt-auto">
              Select Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-xl p-6 w-[300px] text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 h-[500px] flex flex-col justify-between transform hover:scale-105">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Premium Plan
              </h3>
              <p className="text-gray-600 mb-4">
                For large businesses and enterprises
              </p>
              <ul className="text-left text-gray-700 mb-4 list-inside">
              <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                 Owner Name
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                 Title
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                  10000 Valid Emails
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                 LinkedIn
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                 Phone
                </li>
                <li className="flex items-center mb-2">
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                  Address
                </li>
              </ul>
              <p className="text-3xl font-bold text-blue-600 mb-6">Talk To Sales/mo</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-auto">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
