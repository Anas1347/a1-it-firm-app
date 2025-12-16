import React from "react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaDatabase, FaLaptopCode, FaServer } from "react-icons/fa";
import { Helmet } from "react-helmet";

const WebDevelopment = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    path: "/assets/lottie/web-development.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Helmet>
        <title>Web Development Services | A1 IT Firm</title>

        <meta
          name="description"
          content="A1 IT Firm provides professional web development services, including custom websites, responsive design, and scalable web solutions built to support business growth."
        />

        <meta
          name="keywords"
          content="web development services, custom website development, responsive web design, business websites, web applications, A1 IT Firm"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Professional Web Development Services | A1 IT Firm"
        />
        <meta
          property="og:description"
          content="Build fast, secure, and scalable websites with A1 IT Firm’s professional web development services designed for modern businesses."
        />
        <meta
          property="og:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
        />
        <meta
          property="og:url"
          content="https://www.a1itfirm.com/web-development"
        />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Professional Web Development Services | A1 IT Firm"
        />
        <meta
          name="twitter:description"
          content="Custom, responsive, and scalable web development services built to help businesses grow online."
        />
        <meta
          name="twitter:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
        />

        <link rel="canonical" href="https://www.a1itfirm.com/web-development" />
      </Helmet>

      <div className="bg-gray-100">
        <div className="container mx-auto  py-10 px-6">
          {/* Description Section with Lottie Animation */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">
            {/* Text Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight mb-4">
                Web Development That{" "}
                <span className="text-indigo-600">
                  Drives Growth & Performance
                </span>
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-6">
                We design and develop fast, scalable, and conversion-focused
                websites that deliver exceptional user experiences and support
                long-term business growth.
              </p>

              <p className="text-sm text-gray-500">
                Clean code • Modern UI • SEO-ready • Mobile-first
              </p>
            </motion.div>

            {/* Animation */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Lottie
                options={lottieOptions}
                height={300}
                width={300}
                aria-label="Modern web development and website design animation"
              />
            </motion.div>
          </div>

          {/* Tabs with Lead Types */}
          <Tabs>
            <TabList className="flex flex-wrap lg:justify-center space-x-6 mb-6 md:space-x-0 md:flex-col lg:flex-row sm:flex-row lg:gap-6 sm:gap-0">
              <Tab
                className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
                selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
              >
                <FaLaptopCode size={34} />
                <span className="block mt-2 md:inline-block">
                  Front-End Development
                </span>
              </Tab>
              <Tab
                className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
                selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
              >
                <FaDatabase size={34} />
                <span className="block mt-2 md:inline-block">
                  Back-End Development
                </span>
              </Tab>
              <Tab
                className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:border-b-2 hover:border-blue-600 hover:scale-105 hover:shadow-lg"
                selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
              >
                <FaServer size={34} />
                <span className="block mt-2 md:inline-block">
                  Full-Stack Development
                </span>
              </Tab>
            </TabList>

            {/* Content for Each Tab */}
            <div className="text-center mb-8 mt-8">
              <TabPanel>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-blue-600 mb-6">
                    Front-End Development
                  </h2>
                  <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-html5"></i>
                      </span>
                      <span className="font-semibold">HTML5</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-css3-alt"></i>
                      </span>
                      <span className="font-semibold">CSS3</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-js"></i>
                      </span>
                      <span className="font-semibold">JavaScript</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-react"></i>
                      </span>
                      <span className="font-semibold">React.js</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-sass"></i>
                      </span>
                      <span className="font-semibold">SASS</span>
                    </li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-blue-600 mb-6">
                    Back-End Development
                  </h2>
                  <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-server"></i>
                      </span>
                      <span className="font-semibold">Node.js</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-database"></i>
                      </span>
                      <span className="font-semibold">MongoDB</span>
                    </li>
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-code"></i>
                      </span>
                      <span className="font-semibold">Express.js</span>
                    </li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl hover:scale-105 max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-blue-600 mb-6">
                    Full-Stack Development
                  </h2>
                  <ul className="text-gray-700 text-lg sm:text-xl space-y-6">
                    <li className="flex items-center space-x-3 hover:bg-blue-100 cursor-pointer p-2 rounded-lg">
                      <span className="font-bold text-blue-600">
                        <i className="fas fa-code"></i>
                      </span>
                      <span className="font-semibold">MERN Stack</span>
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
                  Basic Web Development Plan
                </h3>
                <p className="text-gray-600 mb-4">
                  Perfect for startups and small websites
                </p>
                <ul className="text-left text-gray-700 mb-4 list-inside">
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    5 Pages Website
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Basic SEO
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Responsive Design
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Contact Form
                  </li>
                </ul>
                <p className="text-2xl font-bold text-blue-600 mb-6">$250/mo</p>
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
                  Professional Web Development Plan
                </h3>
                <p className="mb-4">
                  For growing businesses and feature-rich websites
                </p>
                <ul className="text-left mb-4 text-gray-200 list-inside">
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    15 Pages Website
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    Advanced SEO
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    E-Commerce Integration
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    Social Media Integration
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-orange-600 rounded-full mr-2"></span>{" "}
                    24/7 Support
                  </li>
                </ul>
                <p className="text-3xl font-bold mb-6">$900/mo</p>
              </div>
              <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg hover:bg-yellow-500 transition mt-auto">
                Select Plan
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white shadow-lg rounded-xl p-6 w-[300px] text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 h-[500px] flex flex-col justify-between transform hover:scale-105">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Premium Web Development Plan
                </h3>
                <p className="text-gray-600 mb-4">
                  For enterprises with complex requirements
                </p>
                <ul className="text-left text-gray-700 mb-4 list-inside">
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    50+ Pages Website
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Custom Web App Development
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Advanced SEO and Analytics
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Cloud Hosting Integration
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>{" "}
                    Dedicated Account Manager
                  </li>
                </ul>
                <p className="text-3xl font-bold text-blue-600 mb-6">
                  Custom Pricing
                </p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-auto">
                Contact for Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
