import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import { Button3D } from "react-3d-button";
import "react-3d-button/styles";
const Error = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    path: "/images/lottie/lottie.json",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {/* SEO: prevent indexing of error page */}
      <Helmet>
        <title>Page Not Found | A1 IT Firm</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="container mx-auto min-h-[70vh] flex flex-col items-center justify-center px-4">
        {/* Lottie Animation */}
        <div
          className="flex justify-center mb-6"
          aria-label="Page not found animation"
        >
          <Lottie options={lottieOptions} height={300} width={300} />
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Oops! Page not found
        </h1>

        <p className="text-gray-600 text-center mb-8 max-w-md">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to the homepage.
        </p>

        {/* Back to Home Button */}
        <Link to="/">
          <Button3D type="error">
            <span className="px-6 py-2 text-sm font-semibold text-white">
              Back to Home
            </span>
          </Button3D>
        </Link>
      </div>
    </>
  );
};

export default Error;
