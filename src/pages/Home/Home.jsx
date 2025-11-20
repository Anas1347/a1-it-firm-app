import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import Testimonial from "../Testimonial/Testimonial";
import Pricing from "../Pricing/Pricing";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>A1 IT Firm - Lead Generation & Web Development</title>
        <meta
          name="description"
          content="A1 IT Firm offers professional web development, responsive design, and digital marketing services to help your business grow online. Contact us for custom web solutions and SEO strategies."
        />
        <meta
          name="keywords"
          content="web development, IT firm, professional web design, digital marketing, SEO, responsive websites, custom web solutions, e-commerce development, branding, logo design"
        />
        <meta name="author" content="A1 IT Firm" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph tags for social media sharing */}
        <meta
          property="og:title"
          content="A1 IT Firm - Digital Marketing Web Development Services"
        />
        <meta
          property="og:description"
          content="A1 IT Firm offers professional web development, responsive design, and digital marketing services to help your business grow online. Contact us for custom web solutions and SEO strategies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png" // Replace with actual image URL
        />
        <meta property="og:url" content="https://www.a1itfirm.com" />
        <meta property="og:site_name" content="A1 IT Firm" />
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@A1ITFirm" />
        <meta
          name="twitter:title"
          content="A1 IT Firm - Web Development & Digital Marketing Services"
        />
        <meta
          name="twitter:description"
          content="A1 IT Firm offers professional web development, responsive design, and digital marketing services to help your business grow online. Contact us for custom web solutions and SEO strategies."
        />
        <meta
          name="twitter:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
        />{" "}
        {/* Replace with actual image URL */}
        {/* Canonical link for the page */}
        <link rel="canonical" href="https://www.a1itfirm.com" />
        {/* Viewport settings for mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <Pricing></Pricing>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
