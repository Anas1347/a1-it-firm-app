import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import LeadGeneration from "../pages/Services/LeadGeneration/LeadGeneration";
import WebDevelopment from "../pages/Services/WebDevelopment/WebDevelopment";
import EmailMarketing from "../pages/Services/EmailMarketing/EmailMarketing";
import SEO from "../pages/Services/SEO/SEO";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "lead-generation",
        element: <LeadGeneration></LeadGeneration>,
      },
      {
        path: "web-development",
        element: <WebDevelopment></WebDevelopment>,
      },
      {
        path: "email-marketing",
        element: <EmailMarketing></EmailMarketing>,
      },
      {
        path: "search-engine-optimization",
        element: <SEO></SEO>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
