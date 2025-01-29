import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/email-marketing.json"; // Make sure you have the Lottie animation file
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaBullhorn, FaEnvelopeOpenText, FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet";

const EmailMarketing = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <Helmet>
        <title>Email Marketing Service - A1 IT Firm</title>
        <meta
          name="description"
          content="Transform your business with A1 IT Firm's expert email marketing services. We design personalized campaigns that engage your audience, boost conversions, and increase ROI."
        />
        <meta
          name="keywords"
          content="email marketing, digital marketing, email campaigns, email list building, marketing automation, personalized emails, email conversion"
        />
        <meta
          property="og:title"
          content="Email Marketing Services - A1 IT Firm"
        />
        <meta
          property="og:description"
          content="Transform your business with A1 IT Firm's expert email marketing services. We design personalized campaigns that engage your audience and increase your business's ROI."
        />
        <meta
          property="og:image"
          content="https://example.com/email-marketing-image.jpg" // Replace with your image
        />
        <meta
          property="og:url"
          content="https://yourwebsite.com/email-marketing"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/email-marketing" />
      </Helmet>

      <div className="bg-gray-100">
        <div className="container mx-auto  py-10 px-6">
          {/* Description Section with Lottie Animation */}
          <div className="flex  flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
                Powerful Email Marketing Services
              </h1>
              <p className="text-gray-700 text-lg sm:text-xl mb-6">
                Engage with your audience and boost sales with our expert email
                marketing strategies. We create compelling email campaigns that
                drive results.
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
                className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
                selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
              >
                <FaEnvelopeOpenText size={34} />
                <span className="block mt-2 md:inline-block">
                  Email Campaigns
                </span>
              </Tab>
              <Tab
                className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
                selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
              >
                <FaBullhorn size={34} />
                <span className="block mt-2 md:inline-block">Promotions</span>
              </Tab>
              <Tab
                className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
                selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
              >
                <FaUsers size={34} />
                <span className="block mt-2 md:inline-block">
                  Customer Outreach
                </span>
              </Tab>
            </TabList>

            {/* Content for Each Tab */}
            <div className="text-center mb-8 mt-8">
              <TabPanel>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-blue-600 mb-6">
                    Email Campaigns
                  </h2>
                  <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-paper-plane"></i>
                      </span>
                      <span className="font-semibold">
                        1. Newsletter Campaigns
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-envelope-open"></i>
                      </span>
                      <span className="font-semibold">
                        2. Promotional Emails
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-calendar-check"></i>
                      </span>
                      <span className="font-semibold">
                        3. Automated Drip Campaigns
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-user-plus"></i>
                      </span>
                      <span className="font-semibold">
                        4. Subscriber Growth
                      </span>
                    </li>
                  </ul>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-blue-600 mb-6">
                    Promotions
                  </h2>
                  <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-gift"></i>
                      </span>
                      <span className="font-semibold">
                        1. Limited-Time Discounts
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-percentage"></i>
                      </span>
                      <span className="font-semibold">2. Special Offers</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-tag"></i>
                      </span>
                      <span className="font-semibold">3. Flash Sales</span>
                    </li>
                  </ul>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-blue-600 mb-6">
                    Customer Outreach
                  </h2>
                  <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-users"></i>
                      </span>
                      <span className="font-semibold">
                        1. Customer Retention
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-headset"></i>
                      </span>
                      <span className="font-semibold">2. Customer Support</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-comments"></i>
                      </span>
                      <span className="font-semibold">
                        3. Feedback and Surveys
                      </span>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </div>
          </Tabs>

          {/* Pricing Cards Section */}
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center gap-6">
            {/* Basic Email Marketing Plan */}
            <div className="bg-white shadow-lg rounded-xl p-6 w-[300px] text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 h-[500px] flex flex-col justify-between transform hover:scale-105">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Basic Email Marketing
                </h3>
                <p className="text-gray-600 mb-4">
                  Perfect for startups and small businesses looking to engage
                  with a limited audience.
                </p>
                <ul className="text-left text-gray-700 mb-4 list-inside">
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Up to 1,000 Subscribers
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    10 Campaigns per Month
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Basic Email Templates
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Reporting & Analytics
                  </li>
                </ul>
                <p className="text-2xl font-bold text-blue-600 mb-6">$199/mo</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-auto">
                Select Plan
              </button>
            </div>

            {/* Professional Email Marketing Plan */}
            <div className="bg-blue-600 text-white shadow-xl rounded-xl p-6 w-[300px] text-center relative border border-blue-700 h-[500px] flex flex-col justify-between transform hover:scale-105">
              <span className="absolute bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-2 rounded-full top-5 right-1 transform rotate-30">
                Most Popular
              </span>
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Professional Email Marketing
                </h3>
                <p className="mb-4">
                  For growing businesses needing more advanced features and
                  support.
                </p>
                <ul className="text-left mb-4 text-gray-200 list-inside">
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    Up to 5,000 Subscribers
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    30 Campaigns per Month
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    Advanced Email Templates
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    A/B Testing & Automation
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    Priority Customer Support
                  </li>
                </ul>
                <p className="text-3xl font-bold mb-6">$499/mo</p>
              </div>
              <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg hover:bg-yellow-500 transition mt-auto">
                Select Plan
              </button>
            </div>

            {/* Premium Email Marketing Plan */}
            <div className="bg-white shadow-lg rounded-xl p-6 w-[300px] text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 h-[500px] flex flex-col justify-between transform hover:scale-105">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Premium Email Marketing
                </h3>
                <p className="text-gray-600 mb-4">
                  For large enterprises with high-volume email marketing needs
                  and custom solutions.
                </p>
                <ul className="text-left text-gray-700 mb-4 list-inside">
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Unlimited Subscribers
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Unlimited Campaigns
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Custom Email Templates
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Advanced Reporting & Analytics
                  </li>
                </ul>
                <p className="text-3xl font-bold text-blue-600 mb-6">
                  Custom Pricing
                </p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-auto">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailMarketing;
