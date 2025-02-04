import React, { useState, useEffect } from "react";

import explore1 from "../assets/explore1.png";
import explore2 from "../assets/explore2.png";
import explore3 from "../assets/explore3.png";

const RoomInspiration = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const rooms = [
    { id: 1, title: "01 — Bed Room", description: "Inner Peace", img: explore1 },
    {
      id: 2,
      title: "02 — Dining Room",
      description: "Minimalist Style",
      img: explore2,
    },
    {
      id: 3,
      title: "03 — Living Room",
      description: "Modern Comfort",
      img: explore3,
    },
  ];

  // Automatically transition between images
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % rooms.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused, rooms.length]);

  const handleImageClick = () => {
    setIsPaused((prev) => !prev); // Toggle pause/resume
  };

  return (
    <div className="bg-pink-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              50+ Beautiful rooms<br /> inspiration
            </h1>
            <p className="text-gray-600 mb-6">
              Our designer already made a lot of beautiful<br /> prototypes of rooms that inspire you
            </p>
            <button className="bg-yellow-600 text-white w-40 font-semibold px-6 py-3 shadow-md hover:bg-yellow-700">
              Explore More
            </button>
          </div>

          {/* Right Section */}
          <div className="relative flex flex-col md:flex-row items-center space-x-2">
            {/* Active Room */}
            <div
              key={rooms[activeIndex].id}
              className="relative bg-white shadow-lg w-full md:w-2/3 transition-transform duration-500 ease-in-out transform scale-100 opacity-100 cursor-pointer"
              onClick={handleImageClick}
            >
              <div className="relative">
                <img
                  src={rooms[activeIndex].img}
                  alt={rooms[activeIndex].title}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center bg-white bg-opacity-30 px-6 py-6 mt-96">
                    <h2 className="text-sm font-light text-gray-800">{rooms[activeIndex].title}</h2>
                    <p className="text-xl font-bold text-black">{rooms[activeIndex].description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-gray-800 bg-opacity-75 text-white px-4 py-2 rounded-lg">
                    {isPaused ? "Stopped" : "Running"}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-700">
                  ➔
                </button>
              </div>
            </div>

            {/* Smaller Rooms */}
            <div className="grid grid-cols-1 gap-4 w-full md:w-1/3">
              {rooms.map((room, index) =>
                index !== activeIndex ? (
                  <div
                    key={room.id}
                    className="relative bg-white rounded-lg shadow-md transition-transform duration-500 ease-in-out transform scale-90 opacity-50"
                  >
                    <div className="relative">
                      <img
                        src={room.img}
                        alt={room.title}
                        className="rounded-t-lg object-cover w-full h-32"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <h2 className="text-sm font-medium text-white">{room.title}</h2>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {rooms.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-yellow-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;