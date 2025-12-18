import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MyProfile from "../../../components/MyProfile/MyProfile";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  // Auto-close all menus on route change (desktop + mobile)
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const desktopLinkClasses = ({ isActive }) =>
    [
      "text-base font-semibold px-4 py-2 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform",
      isActive
        ? "bg-blue-600 text-white shadow-md scale-105 border-b-4 border-blue-400"
        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-b-2 hover:border-blue-600 hover:scale-105",
    ].join(" ");

  const dropdownLinkClasses = ({ isActive }) =>
    [
      "block text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300",
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50",
    ].join(" ");

  const handleServiceClick = () => {
    setServicesOpen((prev) => !prev);
  };

  const closeAllMenus = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <div className="bg-base-100 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="navbar container mx-auto">
        {/* Navbar Start */}
        <Link to="/" className="navbar-start flex items-center">
          <img
            className="w-8 h-8"
            src="/images/logo/a1-it-firm.png"
            alt="A1 IT Firm"
          />
          <p className="text-xl font-bold transition-colors duration-300 m-2 mt-4">
            <span className="text-blue-600">A1</span>{" "}
            <span className="text-yellow-600">IT</span>{" "}
            <span className="text-red-600">Firm</span>
          </p>
        </Link>

        {/* Navbar Center (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-2">
            <li>
              <NavLink to="/" className={desktopLinkClasses} end>
                Home
              </NavLink>
            </li>

            {/* Services dropdown (desktop) */}
            <li className="relative">
              <button
                type="button"
                onClick={handleServiceClick}
                className="text-base font-semibold text-gray-700 px-4 py-2 rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:scale-105"
              >
                Services
                <span
                  className={
                    "text-xs opacity-70 transition-transform duration-200 " +
                    (servicesOpen ? "rotate-180" : "")
                  }
                >
                  ▼
                </span>
              </button>

              {servicesOpen && (
                <ul className="absolute left-0 mt-2 p-2 bg-base-100 shadow-md rounded-xl min-w-[220px] z-50">
                  <li>
                    <NavLink
                      to="/lead-generation"
                      className={dropdownLinkClasses}
                      onClick={closeAllMenus}
                    >
                      Lead Generation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/web-development"
                      className={dropdownLinkClasses}
                      onClick={closeAllMenus}
                    >
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/email-marketing"
                      className={dropdownLinkClasses}
                      onClick={closeAllMenus}
                    >
                      Email Marketing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/search-engine-optimization"
                      className={dropdownLinkClasses}
                      onClick={closeAllMenus}
                    >
                      SEO
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/about-us" className={desktopLinkClasses}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={desktopLinkClasses}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Navbar End / Mobile */}
        <div className="navbar-end lg:hidden relative">
          {/* Mobile toggle button */}
          <button
            type="button"
            className="p-2 cursor-pointer"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile menu panel */}
          {mobileOpen && (
            <div className="absolute right-0 top-full mt-3 w-56 bg-base-100 rounded-xl shadow-md z-50">
              <ul className="p-2 space-y-1">
                <li>
                  <NavLink
                    to="/"
                    className={dropdownLinkClasses}
                    end
                    onClick={closeAllMenus}
                  >
                    Home
                  </NavLink>
                </li>

                {/* Services group on mobile */}
                <li className="pt-1">
                  <p className="text-xs uppercase tracking-wide text-gray-400 px-4 pb-1">
                    Services
                  </p>
                  <ul className="bg-base-100 rounded-md space-y-1">
                    <li>
                      <NavLink
                        to="/lead-generation"
                        className={dropdownLinkClasses}
                        onClick={closeAllMenus}
                      >
                        Lead Generation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/web-development"
                        className={dropdownLinkClasses}
                        onClick={closeAllMenus}
                      >
                        Web Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/email-marketing"
                        className={dropdownLinkClasses}
                        onClick={closeAllMenus}
                      >
                        Email Marketing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/search-engine-optimization"
                        className={dropdownLinkClasses}
                        onClick={closeAllMenus}
                      >
                        SEO
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink
                    to="/about-us"
                    className={dropdownLinkClasses}
                    onClick={closeAllMenus}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={dropdownLinkClasses}
                    onClick={closeAllMenus}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          {/* Profile Dropdown
          <MyProfile /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
