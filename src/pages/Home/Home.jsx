import React from "react";
import { Helmet } from "react-helmet";

import HeroSection from "../HeroSection/HeroSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>
          B2B Lead Generation & Digital Growth Solutions | A1 IT Firm
        </title>

        <meta
          name="description"
          content="A1 IT Firm provides professional B2B lead generation services, with strong expertise in UK Companies House data, targeted outreach, web development, SEO, email marketing, and conversion-focused digital solutions."
        />

        <meta
          name="keywords"
          content="B2B lead generation, UK Companies House data, business leads, email marketing, SEO services, web development, A1 IT Firm"
        />

        <meta name="author" content="A1 IT Firm" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.a1itfirm.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="B2B Lead Generation & Digital Growth Solutions | A1 IT Firm"
        />
        <meta
          property="og:description"
          content="Grow your business with A1 IT Firm. We specialise in B2B lead generation, including UK Companies House data, supported by web development, SEO, and email marketing services."
        />
        <meta
          property="og:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
        />
        <meta property="og:url" content="https://www.a1itfirm.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="A1 IT Firm" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="B2B Lead Generation Experts | A1 IT Firm"
        />
        <meta
          name="twitter:description"
          content="A1 IT Firm helps businesses generate high-quality B2B leads using targeted data strategies, UK Companies House insights, and digital growth services."
        />
        <meta
          name="twitter:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
        />

        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.a1itfirm.com/#organization",
            "name": "A1 IT Firm",
            "url": "https://www.a1itfirm.com/",
            "logo": "https://www.a1itfirm.com/assets/logo/google-search.png",
            "sameAs": [
              "https://www.facebook.com/a1itfirm",
              "https://www.linkedin.com/company/a1itfirm"
            ]
          }
          `}
        </script>
      </Helmet>

      <HeroSection />
      <ServicesSection />
      <Pricing />
      <Testimonial />
    </div>
  );
};

export default Home;
