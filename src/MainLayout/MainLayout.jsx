import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      {/* Add padding-top to avoid overlap with fixed navbar */}
      <main className="flex-grow pt-10">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;
