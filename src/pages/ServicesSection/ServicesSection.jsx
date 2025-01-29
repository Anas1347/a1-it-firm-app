import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { FaBullhorn, FaLaptopCode, FaMailBulk, FaSearch,FaChartLine, FaCode, FaEnvelope, } from "react-icons/fa";
import "react-tabs/style/react-tabs.css";
 import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ServicesSection = () => {
  return (
    <div className="py-16 px-6 container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">
        Our Services
      </h2>
      <h2 className="text-2xl font-semibold text-center mb-8 text-blue-800">
        How Does It Work
      </h2>

      <Tabs>
      <TabList className="flex flex-wrap lg:justify-center space-x-6 mb-6 md:space-x-0 md:flex-col lg:flex-row sm:flex-row lg:gap-6 sm:gap-0">
  <Tab
    className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:scale-105"
    selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
  >
    <FaBullhorn size={24} />
    <span className="block mt-2 md:inline-block">Lead Generation</span>
  </Tab>
  <Tab
    className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:scale-105"
    selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
  >
    <FaLaptopCode size={24} />
    <span className="block mt-2 md:inline-block">Web Development</span>
  </Tab>
  <Tab
    className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:scale-105"
    selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
  >
    <FaMailBulk size={24} />
    <span className="block mt-2 md:inline-block">Email Marketing</span>
  </Tab>
  <Tab
    className="text-lg font-semibold text-gray-700 p-4 cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 transform hover:text-blue-600 hover:border-b-2 hover:border-blue-600 hover:scale-105"
    selectedClassName="bg-blue-600 text-white font-bold transform scale-105 border-b-4 border-blue-400"
  >
    <FaSearch size={24} />
    <span className="block mt-2 md:inline-block">
      Search Engine Optimization
    </span>
  </Tab>
</TabList>





        <TabPanel>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 max-w-sm"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaChartLine className="text-blue-600 text-2xl" />
              <h3 className="text-lg font-semibold text-gray-900">
                Lead Generation
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Generate high-quality leads through targeted email campaigns and
              online strategies. Grow your customer base effectively.
            </p>
            <Link
              to='lead-generation'
              className="inline-block mt-4 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </TabPanel>

        <TabPanel>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 max-w-sm"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaCode className="text-green-600 text-2xl" />
              <h3 className="text-lg font-semibold text-gray-900">
                Web Development
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We build responsive, user-friendly websites that enhance your
              online presence and engagement.
            </p>
            <Link
              to="web-development"
              className="inline-block mt-4 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </TabPanel>

        <TabPanel>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 max-w-sm"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope className="text-red-600 text-2xl" />
              <h3 className="text-lg font-semibold text-gray-900">
                Email Marketing
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Execute impactful email marketing campaigns that drive engagement
              and boost conversions.
            </p>
            <Link
              to="email-marketing"
              className="inline-block mt-4 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </TabPanel>

        <TabPanel>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 max-w-sm"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaSearch className="text-purple-600 text-2xl" />
              <h3 className="text-lg font-semibold text-gray-900">
                Search Engine Optimization
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Improve your website’s ranking with expert SEO strategies to drive
              organic traffic.
            </p>
            <Link
              to="search-engine-optimization"
              className="inline-block mt-4 text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ServicesSection;
