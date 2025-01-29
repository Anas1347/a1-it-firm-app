import Lottie from "react-lottie";
import animationData from "../../assets/lottie.json";
import { Link } from "react-router-dom"; 

const Error = () => {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
  return (
    <div className="container mx-auto w-full sm:w-[600px] md:w-[800px]">
      {/* Lottie Animation */}
      <div className="flex justify-center mb-6">
      <Lottie options={lottieOptions} height={300} width={300} />
      </div>

      {/* Back to Home Button */}
      <div className="text-center mb-10">
        <Link
          to="/"
          className="px-6 py-2  bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;