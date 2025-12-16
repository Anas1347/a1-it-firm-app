import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../MainLayout/MainLayout";

// Lazy load all pages
const Home = lazy(() => import("../pages/Home/Home"));
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const LeadGeneration = lazy(() =>
  import("../pages/Services/LeadGeneration/LeadGeneration")
);
const WebDevelopment = lazy(() =>
  import("../pages/Services/WebDevelopment/WebDevelopment")
);
const EmailMarketing = lazy(() =>
  import("../pages/Services/EmailMarketing/EmailMarketing")
);
const SEO = lazy(() => import("../pages/Services/SEO/SEO"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const ThankYou = lazy(() => import("../pages/ThankYou/ThankYou")); // <-- added
const ErrorPage = lazy(() => import("../pages/Error/Error"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "lead-generation", element: <LeadGeneration /> },
      { path: "web-development", element: <WebDevelopment /> },
      { path: "email-marketing", element: <EmailMarketing /> },
      { path: "search-engine-optimization", element: <SEO /> },
      { path: "contact", element: <Contact /> },

      // 👇 Added Thank You route
      { path: "thank-you", element: <ThankYou /> },

      { path: "*", element: <ErrorPage /> },
    ],
  },
]);
