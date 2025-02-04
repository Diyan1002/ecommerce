import React, { useState, useEffect } from "react";
import BackgroundImage1 from "../assets/Background.png";
import BackgroundImage2 from "../assets/background1.jpg";
import BackgroundImage3 from "../assets/background2.jpg";

const NewCollection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [BackgroundImage1, BackgroundImage2, BackgroundImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-gray-100 h-screen flex items-center justify-center">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      ></div>

      {/* Content */}
      <div className="relative bg-pink-100 py-16 px-8 h-auto w-full max-w-lg mx-4 md:mx-auto md:ml-auto md:mr-16 rounded-lg shadow-lg">
        <p className="text-sm uppercase bg-black-100 font-semibold">
          New Arrival
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-yellow-700 mt-2">
          Discover Our<br /> New Collection
        </h1>

        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 px-6 md:px-10 py-3 bg-yellow-700 text-white font-semibold hover:bg-yellow-600">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default NewCollection;
