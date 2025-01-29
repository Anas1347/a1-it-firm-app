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
   <div className='bg-gradient-to-r from-blue-600 to-blue-400'>
     <div
    ref={sectionRef}
    className="flex container mx-auto flex-col lg:flex-row justify-center items-center py-16 px-8 lg:px-16   text-white"
  >
    {/* Left Side: Lead Generation Content */}
    <motion.div
      className="flex-1 text-center lg:text-left mb-10 lg:mb-0"
      initial={{ opacity: 0, x: '-100vw' }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, type: 'spring' }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        Supercharge Your <span className="text-yellow-400">Lead Generation</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mt-4 opacity-90">
        Unlock unlimited business growth with our proven lead generation strategies, tailored just for you!
      </p>
      <button className="mt-6 px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full text-lg shadow-md hover:shadow-lg hover:bg-yellow-500 transition-all duration-300">
        Get Started Now 🚀
      </button>
    </motion.div>
  
    {/* Right Side: Lottie Animation */}
    <motion.div
      className="flex-1 flex justify-center"
      initial={{ opacity: 0, x: '100vw' }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, type: 'spring' }}
    >
      <Lottie
        options={options}
        height={350}  
        width={350}   
        className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 drop-shadow-lg"
      />
    </motion.div>
  </div>
   </div>
  
  );
};

export default HeroSection;
