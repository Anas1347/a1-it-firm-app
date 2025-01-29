import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { FaBullhorn, FaLaptopCode, FaMailBulk, FaSearch } from 'react-icons/fa';
import 'react-tabs/style/react-tabs.css';

const ServicesSection = () => {
  return (
    <div className="py-16 px-6 ">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-600">
        Our Services
      </h2>
      <h2 className="text-2xl font-semibold text-center mb-8 text-blue-800">
        How Does It Work
      </h2>

      <Tabs>
        <TabList className="flex flex-wrap lg:justify-center space-x-6 mb-6 md:space-x-0 md:flex-col lg:flex-row sm:flex-row">
          <Tab
            className="text-lg font-semibold text-gray-700 p-2 cursor-pointer hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all"
            selectedClassName="bg-blue-200"
          >
            <FaBullhorn size={24} />
            <span className="block mt-2 md:inline-block">Lead Generation</span>
          </Tab>
          <Tab
            className="text-lg font-semibold text-gray-700 p-2 cursor-pointer hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all"
            selectedClassName="bg-blue-200"
          >
            <FaLaptopCode size={24} />
            <span className="block mt-2 md:inline-block">Web Development</span>
          </Tab>
          <Tab
            className="text-lg font-semibold text-gray-700 p-2 cursor-pointer hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all"
            selectedClassName="bg-blue-200"
          >
            <FaMailBulk size={24} />
            <span className="block mt-2 md:inline-block">Email Marketing</span>
          </Tab>
          <Tab
            className="text-lg font-semibold text-gray-700 p-2 cursor-pointer hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all"
            selectedClassName="bg-blue-200"
          >
            <FaSearch size={24} />
            <span className="block mt-2 md:inline-block">Search Engine Optimization</span>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Lead Generation</h3>
            <p className="text-lg text-gray-700 mb-4">
              We help businesses generate high-quality leads by targeting potential customers through email campaigns, social media, and various online channels.
            </p>
            <a href="#lead-generation" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More
            </a>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Web Development</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our web development services focus on creating responsive, user-friendly websites that enhance your online presence and engagement.
            </p>
            <a href="#web-development" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More
            </a>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Email Marketing</h3>
            <p className="text-lg text-gray-700 mb-4">
              We design and execute effective email marketing campaigns that drive customer engagement and improve conversions.
            </p>
            <a href="#email-marketing" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More
            </a>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Search Engine Optimization</h3>
            <p className="text-lg text-gray-700 mb-4">
              Our SEO services ensure that your website ranks high in search engines, helping you attract more organic traffic and reach your target audience.
            </p>
            <a href="#seo" className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More
            </a>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ServicesSection;
