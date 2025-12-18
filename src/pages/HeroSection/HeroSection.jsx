import React, { useRef } from "react";
import Lottie from "react-lottie";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const lottieOptions = {
    loop: true,
    autoplay: true,
    path: "/images/lottie/sales.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-400">
      <div
        ref={sectionRef}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-16 text-white"
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -120 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            B2B <span className="text-yellow-400">Lead Generation</span> That
            Drives Sales
          </h1>

          <p className="text-lg sm:text-xl mt-5 opacity-90 max-w-xl mx-auto lg:mx-0">
            Generate high-quality UK business leads using verified Companies
            House data, targeted outreach, and proven conversion strategies.
          </p>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/8801819946104?text=Hello%20A1%20IT%20Firm%2C%20I%20would%20like%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              mt-8
              px-8 py-4
              bg-green-500
              text-white
              text-lg font-semibold
              rounded-full
              shadow-lg
              hover:bg-green-600
              hover:shadow-xl
              active:scale-95
              transition-all duration-300
            "
            aria-label="Chat with A1 IT Firm on WhatsApp"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>

          {/* Secondary text */}
          <p className="mt-3 text-sm opacity-90">
            Or email us at{" "}
            <a
              href="mailto:mahmud@a1itfirm.com"
              className="underline hover:text-yellow-300"
            >
              mahmud@a1itfirm.com
            </a>
          </p>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 120 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Lottie
            options={lottieOptions}
            height={360}
            width={360}
            aria-label="UK B2B lead generation animation"
            className="drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
