import React from "react";
import { Link, NavLink } from "react-router-dom";
import MyProfile from "../../../components/MyProfile/MyProfile";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start  ">
        <img
          className="w-8 h-8 "
          src="https://i.ibb.co.com/g7LRK1W/a1-it-firm-logo.png"
          alt="A1 IT Firm"
        />
        <Link
          to="/"
          className="text-xl font-bold transition-colors duration-300 m-2 mt-4"
        >
          <span className="text-blue-600">A1</span>{" "}
          <span className="text-yellow-600">IT</span>{" "}
          <span className="text-red-600">Firm</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="#home"
              className="text-base text-gray-700 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md"
              activeClassName="text-primary"
            >
              Home
            </NavLink>
          </li>
          <li>
            <details className="group">
              <summary className="text-base text-gray-700 hover:text-primary cursor-pointer px-4 py-2 rounded-md">
                Services
              </summary>
              <ul className="p-2 bg-base-100 shadow-md rounded-md group-focus-within:block hidden">
                <li>
                  <NavLink
                    to="#web-dev"
                    className="block text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                    activeClassName="text-primary"
                  >
                    Lead Generation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#app-dev"
                    className="block text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                    activeClassName="text-primary"
                  >
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#cloud"
                    className="block text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                    activeClassName="text-primary"
                  >
                    Email Marketing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#SEO"
                    className="block text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                    activeClassName="text-primary"
                  >
                    SEO
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NavLink
              to="#about"
              className="text-base text-gray-700 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md"
              activeClassName="text-primary"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#contact"
              className="text-base text-gray-700 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-md"
              activeClassName="text-primary"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {/* Dropdown for small and medium devices */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
          >
            <li>
              <NavLink
                to="#home"
                className="text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                activeClassName="text-primary"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#services"
                className="text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                activeClassName="text-primary"
              >
                Services
              </NavLink>
              <ul className="p-2 bg-base-100 shadow-md rounded-md">
                <li>
                  <NavLink
                    to="#web-dev"
                    className="block text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                    activeClassName="text-primary"
                  >
                    Lead Generation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#app-dev"
                    className="block text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                    activeClassName="text-primary"
                  >
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#cloud"
                    className="block text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                    activeClassName="text-primary"
                  >
                    Email Marketing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#SEO"
                    className="block text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                    activeClassName="text-primary"
                  >
                    SEO
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="#about"
                className="text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                activeClassName="text-primary"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#contact"
                className="text-gray-700 hover:text-primary py-2 px-4 rounded-md"
                activeClassName="text-primary"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Profile Dropdown */}
        <MyProfile></MyProfile>
      </div>
    </div>
  );
};

export default Navbar;
