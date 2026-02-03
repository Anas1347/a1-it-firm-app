import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { Button3D } from "react-3d-button";
import "react-3d-button/styles";

const ThankYou = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    path: "/images/lottie/thankyou.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 via-gray-50 to-white px-4">
      <div className="w-full max-w-3xl">
        <div className="bg-white shadow-xl rounded-2xl px-6 py-8 sm:px-10 sm:py-12 flex flex-col items-center text-center border border-indigo-50">
          {/* Logo */}
          <div className="mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-indigo-50 flex items-center justify-center shadow-md">
              <img
                src="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
                alt="A1 IT Firm Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="flex justify-center mb-6 sm:mb-8 w-full">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <Lottie
                options={lottieOptions}
                height="100%"
                width="100%"
                isClickToPauseDisabled
              />
            </div>
          </div>

          {/* Main Text */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-700 mb-3 sm:mb-4">
            Thank You!
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xl">
            Your message has been submitted successfully. Our team will contact
            you shortly.
          </p>

          {/* Buttons */}
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button3D type="primary">
                <span className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white">
                  Back to Contact
                </span>
              </Button3D>
            </Link>

            <Link to="/" className="w-full sm:w-auto">
              <Button3D type="error">
                <span className="px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white">
                  Back to Home
                </span>
              </Button3D>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
