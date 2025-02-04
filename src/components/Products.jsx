import React, { useState } from "react";
import { FiHeart, FiShare2, FiShoppingCart } from "react-icons/fi";
import { AiOutlineSwap } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";
import pro6 from "../assets/pro6.png";
import pro7 from "../assets/pro7.png";
import pro8 from "../assets/pro8.png";

// Array of products
const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "30%",
    isNew: false,
    image: pro1,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: null,
    discount: null,
    isNew: false,
    image: pro2,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    isNew: false,
    image: pro3,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: null,
    discount: null,
    isNew: true,
    image: pro4,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    oldPrice: null,
    discount: null,
    isNew: false,
    image: pro5,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    oldPrice: null,
    discount: null,
    isNew: true,
    image: pro6,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    isNew: false,
    image: pro7,
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    oldPrice: null,
    discount: null,
    isNew: true,
    image: pro8,
  },
];

const Products = () => {
  const [likes, setLikes] = useState({}); // To track likes for each product
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLike = (id) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1, // Increment like count for the product
    }));
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page
  };

  const handleCompareClick = (id) => {
    navigate(`/compare/${id}`); // Navigate to the compare page with product ID
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border rounded-lg overflow-hidden shadow-sm cursor-pointer"
            onClick={() => handleCardClick(product.id)} // Navigate on click
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            {/* Discount or New Badge */}
            {product.discount && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                -{product.discount}
              </div>
            )}
            {product.isNew && (
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </div>
            )}

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-2">
                <span className="text-gray-800 font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through ml-2">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 flex flex-col justify-center items-center gap-4 transition duration-300">
              <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-500 hover:text-white">
                <FiShoppingCart />
                Add to cart
              </button>
              <div className="flex gap-4">
                <div
                  className="flex flex-col items-center cursor-pointer hover:text-yellow-500"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    handleLike(product.id);
                  }}
                >
                  <FiHeart />
                  <span className="text-sm">Like</span>
                  {likes[product.id] > 0 && (
                    <span className="text-xs text-yellow-500 mt-1">
                      {likes[product.id]} liked
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-yellow-500"     >
                  <FiShare2 />
                  <span className="text-sm">Share</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer hover:text-yellow-500"
                 onClick={(e) => {
                  e.stopPropagation(); // Prevent card click
                  handleCompareClick(product.id); // Trigger navigation on compare click
                }}
                >
                  <AiOutlineSwap />
                  <span className="text-sm">Compare</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
