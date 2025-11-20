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
      image: "https://pub-bd774e5f93514e74831f91a9cbcaca9c.r2.dev/k-mahmud.jpg",
      fallback: "https://cdn.a1itfirm.com/k-mahmud.jpg",
      linkedin: "https://www.linkedin.com/in/khandaker-mahmud/",
      email: "mailto:mahmud@a1itfirm.com",
    },
    {
      name: "Anas Khan",
      role: "Co-Founder & MERN Developer",
      image: "https://pub-bd774e5f93514e74831f91a9cbcaca9c.r2.dev/anas-a1.jpg",
      fallback: "https://cdn.a1itfirm.com/anas-a1.jpg",
      linkedin: "https://www.linkedin.com/in/anas-khann/",
      email: "mailto:anas@a1itfirm.com",
    },
    {
      name: "Parvej Mosharof",
      role: "Co-Founder & Marketing Director",
      image: "https://pub-bd774e5f93514e74831f91a9cbcaca9c.r2.dev/parvej.jpg",
      fallback: "https://cdn.a1itfirm.com/parvej.jpg",
      linkedin: "https://www.linkedin.com/in/parvejmosharof/",
      email: "mailto:parvej@a1itfirm.com",
    },
  ];

  const handleImageError = (e, fallback) => {
    if (e.target.src !== fallback) {
      e.target.src = fallback;
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - A1 IT Firm</title>
        <meta
          name="description"
          content="Learn more about A1 IT Firm, a leading provider of professional web development, SEO, and digital marketing services. Our team is committed to helping businesses grow online with custom solutions."
        />
        <meta
          name="keywords"
          content="About A1 IT Firm, web development company, SEO services, digital marketing, web design, software development, professional IT services, business growth"
        />
        <meta property="og:title" content="About Us - A1 IT Firm" />
        <meta
          property="og:description"
          content="Discover the story behind A1 IT Firm, a team of dedicated professionals providing web development, SEO, and digital marketing services to help your business succeed online."
        />
        <meta
          property="og:image"
          content="https://cdn.a1itfirm.com/a1-it-firm-logo.png"
        />
        <meta property="og:url" content="https://www.a1itfirm.com/about-us" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.a1itfirm.com/about-us" />
      </Helmet>

      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
          <section className="lg:w-1/2 bg-gray-800 p-10 rounded-lg shadow-lg flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-6 ml-6 text-cyan-400">
              About
              <span className="text-xl ml-4 font-bold mt-4">
                <span className="text-blue-600">A1</span>{" "}
                <span className="text-yellow-600">IT</span>{" "}
                <span className="text-red-600">Firm</span>
              </span>
            </h1>

            <div className="space-y-4 text-lg md:text-xl text-gray-400 leading-relaxed">
              <p>
                We started with a strong focus on <span className="text-green-400 font-semibold">Lead Generation</span>, helping businesses convert prospects into paying customers through targeted marketing strategies. As we grew, we expanded our expertise to offer a full range of digital solutions, ensuring our clients stay ahead in an evolving market.
              </p>
              <p>
                Today, we provide end-to-end services, from web development and email marketing to SEO, empowering businesses with the tools they need to thrive in the digital landscape.
              </p>
            </div>
          </section>

          <section className="lg:w-1/2 bg-gray-800 p-10 rounded-lg shadow-lg flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Meet Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
                  initial={{ x: index % 2 === 0 ? -1000 : 1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.2 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => handleImageError(e, member.fallback)}
                    className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-yellow-400"
                  />

                  <h2 className="text-lg font-bold text-yellow-300 mt-4">{member.name}</h2>
                  <p className="text-sm text-gray-300">{member.role}</p>

                  <div className="flex justify-center mt-2 space-x-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl">
                      <FaLinkedin />
                    </a>
                    <a href={member.email} target="_blank" rel="noopener noreferrer" className="text-red-400 text-2xl">
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
