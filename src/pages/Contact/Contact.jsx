import React from "react";
import { Helmet } from "react-helmet";
import { Button3D } from "react-3d-button";
import "react-3d-button/styles";

const Contact = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Contact A1 IT Firm | Speak with UK B2B Lead Generation Experts
        </title>

        <meta
          name="description"
          content="Get in touch with A1 IT Firm to discuss UK Companies House data, targeted B2B lead generation, and sales-ready prospect lists. Free consultation available."
        />

        <meta
          name="keywords"
          content="contact A1 IT Firm, UK B2B lead generation, Companies House data, UK business leads, sales leads UK"
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.a1itfirm.com/contact" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact A1 IT Firm | UK B2B Lead Generation Experts"
        />
        <meta
          property="og:description"
          content="Speak with A1 IT Firm about UK Companies House data, targeted B2B lead generation, and scalable sales growth solutions."
        />
        <meta
          property="og:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
        />
        <meta property="og:url" content="https://www.a1itfirm.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="A1 IT Firm" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact A1 IT Firm | UK B2B Lead Generation"
        />
        <meta
          name="twitter:description"
          content="Need reliable UK B2B leads? Contact A1 IT Firm for Companies House data and high-converting lead generation."
        />
        <meta
          name="twitter:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
        />

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.a1itfirm.com/#localbusiness",
            "name": "A1 IT Firm",
            "url": "https://www.a1itfirm.com/contact",
            "logo": "https://www.a1itfirm.com/images/logo/google-search.png",
            "image": "https://www.a1itfirm.com/images/logo/a1-it-firm.png",
            "telephone": "+8801819946104",
            "email": "mahmud@a1itfirm.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "House No: 34, 1 Shahid Faroque Rd",
              "addressLocality": "Dhaka",
              "postalCode": "1204",
              "addressCountry": "BD"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "sameAs": [
              "https://www.facebook.com/a1itfirm",
              "https://www.linkedin.com/company/a1itfirm"
            ]
          }
          `}
        </script>
      </Helmet>

      <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        {/* Contact Form */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
            Contact <span className="text-blue-600">A1</span>{" "}
            <span className="text-yellow-600">IT</span>{" "}
            <span className="text-red-600">Firm</span>
          </h1>

          <p className="max-w-2xl mx-auto text-center text-gray-600 mb-10">
            Tell us about your business goals and get expert guidance.
          </p>

          {/* Zoho Form */}
          <form
            id="webform7134013000000583275"
            name="WebToContacts7134013000000583275"
            action="https://crm.zoho.com/crm/WebToContactForm"
            method="POST"
            acceptCharset="UTF-8"
            className="bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-6 max-w-4xl mx-auto"
          >
            <input
              type="hidden"
              name="xnQsjsdp"
              value="4713d1bd48ba2c6010defb95af2d060d1d360da46bc578fd461fa9c4e167baa0"
            />
            <input type="hidden" name="zc_gad" />
            <input
              type="hidden"
              name="xmIwtLD"
              value="d8c8c8cf569d7b53adaaa4da6ef88fcd693230ddac7fad9145e898cba405c6ca284a7ab3c4d3101f45e001f584379538"
            />
            <input type="hidden" name="actionType" value="Q29udGFjdHM=" />
            <input
              type="hidden"
              name="returnURL"
              value="https://www.a1itfirm.com/thank-you"
            />
            <input type="hidden" name="aG9uZXlwb3Q" value="" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className="p-4 border rounded-lg"
                name="First Name"
                placeholder="First Name"
              />
              <input
                className="p-4 border rounded-lg"
                name="Last Name"
                placeholder="Last Name *"
                required
              />
            </div>

            <input
              className="w-full p-4 border rounded-lg"
              name="Email"
              placeholder="Email"
            />

            <textarea
              className="w-full p-4 border rounded-lg"
              name="Description"
              rows="5"
              placeholder="How can we help you?"
            ></textarea>

           <Button3D type="success">
  <span className="text-sm font-semibold px-4 text-white">
    Send Message
  </span>
</Button3D>

          </form>
        </div>

        {/* Contact Details + Map */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
              <p className="font-semibold mb-3">
                <span className="text-blue-600">A1</span>{" "}
                <span className="text-yellow-600">IT</span>{" "}
                <span className="text-red-600">Firm</span>
              </p>

              <p>
                <a href="tel:+8801819946104" className="hover:text-blue-600">
                  +880 1819946104
                </a>
              </p>

              <p>
                <a
                  href="mailto:mahmud@a1itfirm.com"
                  className="hover:text-blue-600"
                >
                  mahmud@a1itfirm.com
                </a>
              </p>

              <p className="mt-3 text-gray-600">
                House No: 34, 1 Shahid Faroque Rd, Dhaka 1204
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <div className="w-full h-72 sm:h-96 rounded-lg overflow-hidden">
                <iframe
                  title="A1 IT Firm Google Map"
                  src="https://www.google.com/maps?q=A1+IT+Firm,+Shahid+Faroque+Rd,+Dhaka&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
