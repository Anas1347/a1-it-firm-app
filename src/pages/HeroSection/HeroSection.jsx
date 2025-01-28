import React, { useRef } from 'react';
import Lottie from 'react-lottie';
import { motion, useInView } from 'framer-motion';
import animationData from '../../assets/sales.json';

const HeroSection = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  // Ref for the section to track its visibility
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 }); // Trigger once when 20% is visible

  return (
    <div
      ref={sectionRef}
      className="flex flex-col lg:flex-row justify-center items-center bg-blue-100 py-10 px-6 lg:px-10"
    >
      {/* Left side: Lead Generation Description */}
      <motion.div
        className="flex-1 text-center lg:text-left mb-6 lg:mb-0"
        initial={{ opacity: 0, x: '-100vw' }}
        animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate only when in view
        transition={{ duration: 1, type: 'spring' }}
      >
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
      </motion.div>

      {/* Right side: Lottie Animation */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: '100vw' }}
        animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate only when in view
        transition={{ duration: 1, type: 'spring' }}
      >
        <Lottie
          options={options}
          height={300}  
          width={300}   
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
