import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 p-8 ">
            <div className="container mx-auto">
                {/* Flex container for larger screens */}
                <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                    {/* About Us Section */}
                    <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Company</h2>
                        <p className="text-gray-600">
                            A1 IT Firm is dedicated to providing innovative IT solutions tailored to help businesses thrive in the modern digital era. 
                            Since our founding in 2023, we have been committed to delivering high-quality services, from software development to IT consulting. 
                            Our mission is to empower businesses with cutting-edge technology and unparalleled expertise.
                        </p>
                    </div>

                    {/* Meet Our Team Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 md:text-left">Meet Our Team</h3>
                        <div className="flex justify-center md:justify-start">
                            {/* Team Member Card */}
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center w-72">
                                <img
                                    src="https://i.ibb.co.com/FxzZHdb/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
                                    alt="Team Member"
                                    className="w-32 h-32 mx-auto rounded-full mb-4"
                                />
                                <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
                                <p className="text-gray-500 mb-4">Software Engineer</p>
                                <div className="flex justify-center space-x-4">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-400"
                                    >
                                        <FaFacebookF size={20} />
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-700 hover:text-blue-500"
                                    >
                                        <FaLinkedinIn size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
