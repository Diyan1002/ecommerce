import React from "react";
import Slider from "react-slick"; // Install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import img1 from "../assets/11.png";
import img2 from "../assets/13.png";
import img3 from "../assets/12.png";
import img4 from "../assets/14.png";
import img5 from "../assets/15.png";
import img6 from "../assets/16.png";
import img7 from "../assets/17.png";
import img8 from "../assets/18.png";

const FuniroFurniture = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-base text-gray-500">Inspire Your Space with</h2>
        <h1 className="text-4xl font-extrabold text-gray-800">#FuniroFurniture</h1>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-12 gap-6">
        {/* Column 1 */}
        <div className="col-span-12 md:col-span-4">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
            <Slider {...settings}>
              {/* <img
                src={img1}
                alt="Setup 1"
                className="w-full h-96"
              /> */}
              <img
                src={img2}
                alt="Setup 2"
                className="w-full h-96"
              />
            </Slider>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-12 md:col-span-4">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
            <Slider {...settings}>
              <img
                src={img3}
                alt="Setup 3"
                className="w-full h-96"
              />
              <img
                src={img4}
                alt="Setup 4"
                className="w-full h-96"
              />
            </Slider>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-span-12 md:col-span-4">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
            <Slider {...settings}>
              <img
                src={img5}
                alt="Setup 5"
                className="w-full h-96"
              />
              <img
                src={img6}
                alt="Setup 6"
                className="w-full h-96"
              />
              <img
                src={img7}
                alt="Setup 7"
                className="w-full h-96"
              />
              <img
                src={img8}
                alt="Setup 8"
                className="w-full h-96"
              />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuniroFurniture;
