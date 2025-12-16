import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "K. Shamsher Mahmud",
      role: "CEO & Co-Founder",
      image: "/assets/team/k-mahmud.jpg",
      linkedin: "https://www.linkedin.com/in/khandaker-mahmud/",
      email: "mailto:mahmud@a1itfirm.com",
    },
    {
      name: "Anas Khan",
      role: "Co-Founder & MERN Developer",
      image: "/assets/team/anas-a1.jpg",
      linkedin: "https://www.linkedin.com/in/anas-khann/",
      email: "mailto:anas@a1itfirm.com",
    },
    {
      name: "Parvej Mosharof",
      role: "Co-Founder & Marketing Director",
      image: "/assets/team/parvej.jpg",
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

        {/* Structured Data: Organization + Team */}
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
                "logo": "https://www.a1itfirm.com/assets/logo/google-search.png",
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
                "jobTitle": "Co-Founder & MERN Developer",
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
                consultants, and sales teams that want predictable growth in the
                UK market.
              </p>

              <p>
                Beyond lead generation, we support our clients with modern web
                development, SEO, and marketing automation — ensuring every lead
                has the highest chance of becoming revenue.
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at A1 IT Firm`}
                    loading="lazy"
                    className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-yellow-400"
                  />

                  <h3 className="text-lg font-bold text-yellow-300 mt-4">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-300">{member.role}</p>

                  <div className="flex justify-center mt-3 space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="text-blue-400 text-xl hover:text-blue-300"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={member.email}
                      aria-label={`Email ${member.name}`}
                      className="text-red-400 text-xl hover:text-red-300"
                    >
                      <MdEmail />
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
