import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/sales.json';

const HeroSection = () => {
  const options = {
    loop: true,
    autoplay: true,  
    animationData: animationData,
   
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-blue-100 py-10 px-6 lg:px-10">
      {/* Left side: Lead Generation Description */}
      <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Lead Generation Simplified
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
          Our lead generation services help you identify and attract potential customers, enabling you to grow your business effortlessly. 
          From email campaigns to social media outreach, we leverage the best tools and strategies to connect you with the right audience.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
          Get Started
        </button>
      </div>

      {/* Right side: Lottie Animation */}
      <div className="flex-1">
        <Lottie options={options} height={400} width={400} />
      </div>
    </div>
  );
};

export default HeroSection;
