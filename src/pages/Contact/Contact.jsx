import React from "react";
import GoogleMapReact from "google-map-react";

const Contact = () => {
  const addressCoordinates = {
    lat: 23.8103,
    lng: 90.4125,
  };

  // Marker component to display a pin on the map
  const Marker = ({ text }) => (
    <div className="bg-red-600 text-white p-2 rounded-full">{text}</div>
  );

  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">Contact Us</h2>
        <form className="bg-white shadow-lg rounded-xl p-8 space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-4 border border-gray-300 rounded-lg"
              placeholder="Enter subject"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-4 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <h3 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Our Contact Details</h3>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
          <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Company Name</h4>
            <p className="text-gray-600">A1 IT Firm</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Email</h4>
            <p className="text-gray-600">contact@a1itfirm.com</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Phone Number</h4>
            <p className="text-gray-600">+123 456 7890</p>
            <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Address</h4>
            <p className="text-gray-600">House No: 34, 1 Shahid Faroque Rd, Dhaka 1204</p>
          </div>

          {/* Google Map Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Find Us on the Map</h2>
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.887665227924!2d90.37916061536791!3d23.814322984586486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6c8f72ac1d3%3A0x409c0bfae3b3e65f!2s90%20Shahid%20Faroque%20Rd%2C%20Dhaka%201204!5e0!3m2!1sen!2sbd!4v1634880535144!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
