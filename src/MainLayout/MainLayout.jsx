import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { PacmanLoader } from "react-spinners";

const serviceRoutes = [
  "/lead-generation",
  "/web-development",
  "/email-marketing",
  "/search-engine-optimization",
];

const MainLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if current route is a service page
    const isServicePage = serviceRoutes.includes(location.pathname);

    if (isServicePage) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // ⏱ 2 seconds loader

      return () => clearTimeout(timer);
    } else {
      // No loader for non-service pages
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-10">
        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <PacmanLoader color="#2563eb" size={30} />
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
