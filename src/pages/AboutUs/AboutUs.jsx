import React from "react";
import {  FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "K. Shamsher Mahmud",
      role: "CEO & Co-Founder",
      image: "https://i.ibb.co.com/6tWQfCd/01819946104-1.jpg",
      linkedin: "https://www.linkedin.com/in/khandaker-mahmud/",
      email: "mailto:mahmud@a1itfirm.com",
    },
    {
      name: "Samir Ahmed Shojol",
      role: "Co-Founder & Team Head",
      image: "https://i.ibb.co.com/xLmB58x/Shojol5rr-1.png",
      linkedin: "https://www.linkedin.com/in/samirahmedshojol/",
      email: "mailto:shojol@a1itfirm.com",
    },
    {
      name: "Anas Khan",
      role: "Co-Founder & MERN Developer",
      image:
        "https://i.ibb.co.com/drr1PPq/467480001-954752579408729-3907339372940857017-n.jpg",
      linkedin: "https://www.linkedin.com/in/anas-khann/",
      email: "mailto:anas@a1itfirm.com",
    },
    {
      name: "Parvej Mosharof",
      role: "Co-Founder & Marketing Director",
      image: "https://i.ibb.co.com/CvVFRqF/UP-Work-DP.jpg",
      linkedin: "https://www.linkedin.com/in/parvejmosharof/",
      email: "mailto:parvej@a1itfirm.com",
    },
  ];
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
        {/* About Us Section */}
        <section className="lg:w-1/2 bg-gray-800 p-10 rounded-lg shadow-lg flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 ml-6 text-cyan-400">
            About
            <span className="text-xl ml-4 font-bold mt-4">
              <span className="text-blue-600">A1</span>{" "}
              <span className="text-yellow-600">IT</span>{" "}
              <span className="text-red-600">Firm</span>
            </span>
          </h1>
          <p className="text-lg mb-4 text-gray-300 leading-relaxed">
            A1 IT Firm leads the way in innovative IT solutions, helping
            businesses embrace digital transformation with cutting-edge
            technology.
          </p>
          <p className="text-lg text-gray-400">
            Our expert team delivers high-quality services in software
            development, cybersecurity, and digital strategy to empower
            businesses worldwide.
          </p>
        </section>

        {/* Meet Our Team Section */}
        <section className="lg:w-1/2 bg-gray-800 p-10 rounded-lg shadow-lg flex flex-col justify-center">
  <h2 className="text-3xl font-semibold text-cyan-400 mb-6">
    Meet Our Team
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {teamMembers.map((member, index) => (
      <motion.div
        key={index}
        className="bg-gray-700 p-6 rounded-lg shadow-lg text-center"
        initial={{ x: index % 2 === 0 ? -1000 : 1000, opacity: 0 }} // 2 from left, 2 from right
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: index * 0.2 }} // delay for staggered effect
      >
        {/* Image with Border */}
        <img
          src={member.image}
          alt={member.name}
          className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-yellow-400"
        />

        {/* Name & Role (Always Visible) */}
        <h2 className="text-lg font-bold text-yellow-300 mt-4">
          {member.name}
        </h2>
        <p className="text-sm text-gray-300">{member.role}</p>

        {/* Social Icons (Always Visible) */}
        <div className="flex justify-center mt-2 space-x-4">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href={member.email}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-2xl"
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
  );
};

export default AboutUs;
