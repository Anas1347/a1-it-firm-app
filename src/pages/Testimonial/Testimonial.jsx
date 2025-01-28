import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const ClientReviews = () => {
  // Demo client data
  const clients = [
    {
      id: 1,
      img: "https://randomuser.me/api/portraits/women/44.jpg", // Placeholder image
      review: "Amazing service! Highly recommended.",
      stars: 5,
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/men/46.jpg", // Placeholder image
      review: "Great experience working with the team.",
      stars: 4,
    },
    {
      id: 3,
      img: "https://randomuser.me/api/portraits/women/48.jpg", // Placeholder image
      review: "Professional and reliable service.",
      stars: 5,
    },
    {
      id: 4,
      img: "https://randomuser.me/api/portraits/men/50.jpg", // Placeholder image
      review: "Exceptional quality and support.",
      stars: 5,
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        What Clients Say About Us
      </h2>
      <Marquee gradient={false} speed={50} className="gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="bg-white shadow-lg p-6 rounded-xl flex flex-col items-center text-center mx-4 w-64"
          >
            <img
              src={client.img}
              alt={`Client ${client.id}`}
              className="w-20 h-20 rounded-full mb-4"
            />
            <p className="text-gray-700 mb-3 italic">"{client.review}"</p>
            <div className="flex space-x-1">
              {Array(client.stars)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientReviews;
