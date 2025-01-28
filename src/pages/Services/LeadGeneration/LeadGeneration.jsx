import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/lead-generation.json"; 

const LeadGeneration = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="bg-gray-100 py-10 px-6">
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

      {/* Pricing Cards Section */}
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center gap-6">
        {/* Basic Plan */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-64 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Basic Plan</h3>
            <p className="text-gray-600 mb-4">Perfect for small teams</p>
            <ul className="text-left text-gray-700 mb-4 list-inside">
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>
                Basic Lead Generation
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>
                Email Support
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>
                Weekly Reports
              </li>
            </ul>
            <p className="text-2xl font-bold text-blue-600 mb-6">$19/mo</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-auto">
            Select Plan
          </button>
        </div>

        {/* Professional Plan (Second Option with Extra Features) */}
        <div className="bg-blue-600 text-white shadow-xl rounded-xl p-6 w-72 text-center relative border border-blue-700 h-[450px] flex flex-col justify-between">
          <span className="absolute bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-2 rounded-full top-5 right-1 transform rotate-30">
            Most Popular
          </span>
          <div>
            <h3 className="text-xl font-bold mb-4">Professional Plan</h3>
            <p className="mb-4">Ideal for growing businesses</p>
            <ul className="text-left mb-4 text-gray-200 list-inside">
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2"></span>
                All Basic Plan Features
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2"></span>
                Advanced Lead Generation Tools
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2"></span>
                Phone Support
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2"></span>
                Monthly Strategy Sessions
              </li>
            </ul>
            <p className="text-3xl font-bold mb-6">$49/mo</p>
          </div>
          <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg hover:bg-yellow-500 transition mt-auto">
            Select Plan
          </button>
        </div>

        {/* Premium Plan (All Features + More) */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-64 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Plan</h3>
            <p className="text-gray-600 mb-4">Best for large teams</p>
            <ul className="text-left text-gray-700 mb-4 list-inside">
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>
                All Professional Plan Features
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>
                Dedicated Account Manager
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>
                Custom Reporting
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>
                24/7 Priority Support
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2"></span>
                Exclusive Webinars & Trainings
              </li>
            </ul>
            <p className="text-2xl font-bold text-blue-600 mb-6">$99/mo</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mt-auto">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadGeneration;
