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
  <title>
    A1 IT Firm | Lead Generation, Web Development & SEO
  </title>

  <meta
    name="description"
    content="A1 IT Firm specializes in lead generation, supported by expert web development, SEO, and digital marketing services to help businesses grow faster."
  />

  <meta
    name="keywords"
    content="lead generation, A1 IT Firm, web development, SEO, email marketing, digital marketing, responsive websites, custom websites"
  />

  <meta name="author" content="A1 IT Firm" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="A1 IT Firm | Lead Generation, Web Development & SEO" />
  <meta
    property="og:description"
    content="Grow your business with A1 IT Firm. Lead generation is our core focus, supported by modern web development and SEO."
  />
  <meta property="og:image" content="https://cdn.a1itfirm.com/a1-it-firm-logo.png" />
  <meta property="og:url" content="https://www.a1itfirm.com/" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="A1 IT Firm | Lead Generation, Web Development & SEO" />
  <meta
    name="twitter:description"
    content="A1 IT Firm helps businesses generate leads and grow with strong web development and SEO services."
  />
  <meta name="twitter:image" content="https://cdn.a1itfirm.com/a1-it-firm-logo.png" />

  <link rel="canonical" href="https://www.a1itfirm.com/" />
</Helmet>


      <HeroSection />
      <ServicesSection />
      <Pricing />
      <Testimonial />
    </div>
  );
};

export default Home;
