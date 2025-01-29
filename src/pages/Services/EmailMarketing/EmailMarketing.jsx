import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/email-marketing.json"; // Make sure you have the Lottie animation file

const EmailMarketing = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className=" bg-gray-100 py-10 px-6">
      {/* Description Section with Lottie Animation */}
      <div className="flex  flex-col lg:flex-row items-center justify-between gap-8 mb-12">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
            Powerful Email Marketing Services
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-6">
            Engage with your audience and boost sales with our expert email marketing strategies. We create compelling email campaigns that drive results.
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
            <p className="text-gray-600 mb-4">Start with the essentials</p>
            <ul className="text-left text-gray-700 mb-4 list-inside">
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
                3 Campaigns per Month
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
                Basic Analytics
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
                Email Templates
              </li>
            </ul>
            <p className="text-2xl font-bold text-green-600 mb-6">$199</p>
          </div>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition mt-auto">
            Select Plan
          </button>
        </div>

        {/* Professional Plan */}
        <div className="bg-green-600 text-white shadow-xl rounded-xl p-6 w-72 text-center relative border border-green-700 h-[450px] flex flex-col justify-between">
          <span className="absolute bg-yellow-400 text-xs font-bold text-gray-800 px-3 py-1 rounded-full top-2 right-2 transform rotate-12">
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
                10 Campaigns per Month
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2"></span>
                A/B Testing
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-2"></span>
                Advanced Analytics
              </li>
            </ul>
            <p className="text-3xl font-bold mb-6">$499</p>
          </div>
          <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg hover:bg-yellow-500 transition mt-auto">
            Select Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-64 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 h-[450px] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Plan</h3>
            <p className="text-gray-600 mb-4">Comprehensive email marketing solution</p>
            <ul className="text-left text-gray-700 mb-4 list-inside">
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
                All Professional Plan Features
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
                Unlimited Campaigns
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
                Custom Templates
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
                Dedicated Account Manager
              </li>
              <li className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2"></span>
                Priority Support
              </li>
            </ul>
            <p className="text-2xl font-bold text-green-600 mb-6">$999</p>
          </div>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition mt-auto">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
