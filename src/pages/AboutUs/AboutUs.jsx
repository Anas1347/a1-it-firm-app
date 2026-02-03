import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Button3D } from "react-3d-button";
import "react-3d-button/styles";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "K. Shamsher Mahmud",
      role: "CEO & Co-Founder",
      image: "/images/team/k-mahmud.jpg",
      linkedin: "https://www.linkedin.com/in/khandaker-mahmud/",
      email: "mailto:mahmud@a1itfirm.com",
    },
    {
      name: "Anas Khan",
      role: "Co-Founder & Full-Stack (MERN) Developer",
      image: "/images/team/anas-a1.jpg",
      linkedin: "https://www.linkedin.com/in/anas-khann/",
      email: "mailto:anas@a1itfirm.com",
    },
    {
      name: "Parvej Mosharof",
      role: "Co-Founder & Marketing Director",
      image: "/images/team/parvej.jpg",
      linkedin: "https://www.linkedin.com/in/parvejmosharof/",
      email: "mailto:parvej@a1itfirm.com",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About A1 IT Firm | UK B2B Lead Generation & Digital Growth Experts
        </title>

        <meta
          name="description"
          content="Learn about A1 IT Firm, a UK-focused B2B lead generation and digital solutions company helping businesses grow using verified Companies House data, SEO, and modern web technologies."
        />

        <meta
          name="keywords"
          content="About A1 IT Firm, UK B2B lead generation company, Companies House data experts, UK sales leads, digital marketing agency UK"
        />

        <link rel="canonical" href="https://www.a1itfirm.com/about-us" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About A1 IT Firm | UK B2B Lead Generation Experts"
        />
        <meta
          property="og:description"
          content="Meet the team behind A1 IT Firm — specialists in UK B2B lead generation, Companies House data, and digital growth strategies."
        />
        <meta
          property="og:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
        />
        <meta property="og:url" content="https://www.a1itfirm.com/about-us" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.a1itfirm.com/#organization",
                "name": "A1 IT Firm",
                "url": "https://www.a1itfirm.com/",
                "logo": "https://www.a1itfirm.com/images/logo/google-search.png",
                "sameAs": [
                  "https://www.facebook.com/a1itfirm",
                  "https://www.linkedin.com/company/a1itfirm"
                ]
              },
              {
                "@type": "Person",
                "name": "K. Shamsher Mahmud",
                "jobTitle": "CEO & Co-Founder",
                "worksFor": { "@id": "https://www.a1itfirm.com/#organization" },
                "sameAs": ["https://www.linkedin.com/in/khandaker-mahmud/"]
              },
              {
                "@type": "Person",
                "name": "Anas Khan",
                "jobTitle": "Co-Founder & Full-Stack (MERN) Developer",
                "worksFor": { "@id": "https://www.a1itfirm.com/#organization" },
                "sameAs": ["https://www.linkedin.com/in/anas-khann/"]
              },
              {
                "@type": "Person",
                "name": "Parvej Mosharof",
                "jobTitle": "Co-Founder & Marketing Director",
                "worksFor": { "@id": "https://www.a1itfirm.com/#organization" },
                "sameAs": ["https://www.linkedin.com/in/parvejmosharof/"]
              }
            ]
          }
          `}
        </script>
      </Helmet>

      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-start">
          {/* About Content */}
          <section className="lg:w-1/2 bg-gray-800 p-10 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-cyan-400">
              About <span className="text-blue-600">A1</span>{" "}
              <span className="text-yellow-600">IT</span>{" "}
              <span className="text-red-600">Firm</span>
            </h1>

            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                <strong>A1 IT Firm</strong> is a UK-focused B2B lead generation
                and digital growth company built to help businesses acquire
                high-quality prospects using verified{" "}
                <strong>UK Companies House data</strong>.
              </p>

              <p>
                We specialise in creating targeted, compliant, and
                conversion-ready lead lists for agencies, SaaS companies,
                consultants, and sales teams seeking predictable UK growth.
              </p>

              <p>
                Alongside lead generation, we provide web development, SEO, and
                marketing automation — ensuring every lead has the highest
                chance of becoming revenue.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="lg:w-1/2 bg-gray-800 p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-cyan-400 mb-8">
              Meet Our Leadership Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-gray-700 p-6 rounded-lg text-center shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                >
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at A1 IT Firm`}
                    className="
    w-28 h-28
    object-cover
    object-top
    rounded-full
    mx-auto
    border-4
    border-yellow-400
  "
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                  />

                  <h3 className="text-lg font-bold text-yellow-300 mt-4">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-300">{member.role}</p>

                  <div className="flex justify-center mt-4 space-x-3">
                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Button3D type="success">
                        <span className="flex items-center justify-center w-10 h-10 text-white">
                          <FaLinkedin size={18} />
                        </span>
                      </Button3D>
                    </a>

                    {/* Email */}
                    <a href={member.email} aria-label={`Email ${member.name}`}>
                      <Button3D type="warning">
                        <span className="flex items-center justify-center w-10 h-10 text-white">
                          <MdEmail size={18} />
                        </span>
                      </Button3D>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
