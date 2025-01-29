import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/seo.json"; 
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaGoogle, FaLink, FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet";

const SEO = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <>
      <Helmet>
        <title>SEO Service - A1 IT Firm</title>
        <meta
          name="description"
          content="A1 IT Firm provides expert SEO services to boost your online visibility, improve rankings, and drive organic traffic. Our SEO strategies are designed to enhance your business growth and online presence."
        />
        <meta
          name="keywords"
          content="SEO services, search engine optimization, on-page SEO, off-page SEO, keyword research, SEO strategy, organic traffic, website optimization"
        />
        <meta property="og:title" content="SEO Services - A1 IT Firm" />
        <meta
          property="og:description"
          content="A1 IT Firm offers specialized SEO services to increase your website's search engine rankings, attract more visitors, and enhance online visibility with customized SEO strategies."
        />
        <meta
          property="og:image"
          content="https://example.com/seo-image.jpg" 
        />
        <meta property="og:url" content="https://yourwebsite.com/seo" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/seo" />
      </Helmet>

      <div className="bg-gray-100">
        <div className="container mx-auto  py-10 px-6">
          {/* Description Section with Lottie Animation */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-4">
                Boost Your Online Presence with SEO
              </h1>
              <p className="text-gray-700 text-lg sm:text-xl mb-6">
                Improve your search rankings and visibility on Google with our
                expert SEO strategies. We help you grow organic traffic and
                convert leads into customers.
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
                <FaSearch size={34} />
                <span className="block mt-2 md:inline-block">
                  SEO Strategies
                </span>
              </Tab>
              <Tab
                className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
                selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
              >
                <FaGoogle size={34} />
                <span className="block mt-2 md:inline-block">On-page SEO</span>
              </Tab>
              <Tab
                className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
                selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
              >
                <FaLink size={34} />
                <span className="block mt-2 md:inline-block">
                  Link Building
                </span>
              </Tab>
            </TabList>

            {/* Content for Each Tab */}
            <div className="text-center mb-8 mt-8">
              <TabPanel>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-blue-600 mb-6">
                    SEO Strategies
                  </h2>
                  <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-key"></i>
                      </span>
                      <span className="font-semibold">1. Keyword Research</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-laptop-code"></i>
                      </span>
                      <span className="font-semibold">2. Technical SEO</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-chart-line"></i>
                      </span>
                      <span className="font-semibold">
                        3. Content Optimization
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-mobile-alt"></i>
                      </span>
                      <span className="font-semibold">
                        4. Mobile Optimization
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-globe"></i>
                      </span>
                      <span className="font-semibold">
                        5. International SEO
                      </span>
                    </li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-blue-600 mb-6">
                    On-page SEO
                  </h2>
                  <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-heading"></i>
                      </span>
                      <span className="font-semibold">
                        1. Meta Tags Optimization
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-image"></i>
                      </span>
                      <span className="font-semibold">2. Image SEO</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-link"></i>
                      </span>
                      <span className="font-semibold">3. Internal Linking</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-code"></i>
                      </span>
                      <span className="font-semibold">4. Structured Data</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-chart-bar"></i>
                      </span>
                      <span className="font-semibold">5. SEO Analytics</span>
                    </li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-blue-600 mb-6">
                    Link Building
                  </h2>
                  <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-handshake"></i>
                      </span>
                      <span className="font-semibold">1. Guest Blogging</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-users"></i>
                      </span>
                      <span className="font-semibold">
                        2. Influencer Outreach
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-sitemap"></i>
                      </span>
                      <span className="font-semibold">
                        3. Resource Link Building
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-bullhorn"></i>
                      </span>
                      <span className="font-semibold">
                        4. Social Media Promotion
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-share-alt"></i>
                      </span>
                      <span className="font-semibold">5. Link Reclamation</span>
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
                  Basic SEO Plan
                </h3>
                <p className="text-gray-600 mb-4">
                  Perfect for small startups and local businesses
                </p>
                <ul className="text-left text-gray-700 mb-4 list-inside">
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Site Audit
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Keyword Research
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    1000 Valid Emails
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Google Analytics Setup
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Monthly Reporting
                  </li>
                </ul>
                <p className="text-2xl font-bold text-blue-600 mb-6">$199/mo</p>
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
                <h3 className="text-xl font-bold mb-4">
                  Professional SEO Plan
                </h3>
                <p className="mb-4">
                  For growing businesses and expanding websites
                </p>
                <ul className="text-left mb-4 text-gray-200 list-inside">
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    Advanced Site Audit
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    Competitor Analysis
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    5000 Valid Emails
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    Google Ads Campaigns
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    Weekly Reporting
                  </li>
                </ul>
                <p className="text-3xl font-bold mb-6">$899/mo</p>
              </div>
              <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg hover:bg-yellow-500 transition mt-auto">
                Select Plan
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white shadow-lg rounded-xl p-6 w-[300px] text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 h-[500px] flex flex-col justify-between transform hover:scale-105">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Premium SEO Plan
                </h3>
                <p className="text-gray-600 mb-4">
                  For enterprises and large-scale businesses
                </p>
                <ul className="text-left text-gray-700 mb-4 list-inside">
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Enterprise Site Audit
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Custom SEO Strategy
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    10000 Valid Emails
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Social Media Integration
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    24/7 Support
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

export default SEO;
