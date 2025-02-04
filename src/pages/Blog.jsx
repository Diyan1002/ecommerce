import React, { useState } from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo.png";
import Logo1 from "../assets/shback1.png";
import Footer from "../components/Footer";

import FastShippingIcon from '../assets/FastShipping.png';
import SecurePaymentIcon from '../assets/SecurePayment.png';
import CustomerSupportIcon from '../assets/CustomerSupport.png';
import QualityGuaranteeIcon from '../assets/QualityGuarantee.png';

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const recentPosts = [
  { title: "Going all-in with millennial design", date: "10 Aug 2023" },
  { title: "Exploring new ways of decorating", date: "08 Aug 2023" },
];

const features = [
  {
    icon: <img src={FastShippingIcon} alt="Fast Shipping" className="h-10 w-10" />,
    title: 'Fast Shipping',
    description: 'Get your products delivered quickly and efficiently.',
  },
  {
    icon: <img src={SecurePaymentIcon} alt="Secure Payment" className="h-10 w-10" />,
    title: 'Secure Payment',
    description: 'Your transactions are safe and secure with us.',
  },
  {
    icon: <img src={CustomerSupportIcon} alt="Customer Support" className="h-10 w-10" />,
    title: '24/7 Support',
    description: 'We are here to help you at any time, day or night.',
  },
  {
    icon: <img src={QualityGuaranteeIcon} alt="Quality Guarantee" className="h-10 w-10" />,
    title: 'Quality Guarantee',
    description: 'We ensure high-quality products for our customers.',
  },
];

export default function BlogLayout() {
  const [showFullText, setShowFullText] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Assuming 3 pages

  const handleReadMoreClick = () => {
    setShowFullText((prev) => !prev);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-72">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10">
          <img src={Logo} alt="Logo" className="mb-2" />
          <h2 className="text-3xl font-semibold">Blog</h2>
          <p className="text-sm">Home &gt; Blog</p>
        </div>
        <div className="bg-cover bg-center h-72 opacity-90" style={{ backgroundImage: `url(${Logo1})` }}></div>
      </div>
      <div className="container mx-auto p-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="overflow-hidden bg-white rounded-lg shadow-md mb-6">
            <img
              src={blog1}
              alt="Blog Cover"
              className="w-full h-88 "
            />
            <div className="p-6">
              <div className="flex space-x-4 text-gray-500 text-sm mb-3">
                <span>👤 Admin</span>
                <span>📅 14 Oct 2022</span>
                <span>🛠️ Wood</span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Going all-in with millennial design
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua...
                {showFullText && (
                  <span>
                    {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                )}
              </p>
              <button onClick={handleReadMoreClick} className="text-blue-500 font-semibold hover:underline">
                {showFullText ? "Read less" : "Read more"}
              </button>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow-md mb-6">
            <img
              src={blog2}
              alt="Blog Cover"
              className="w-full h-88"
            />
            <div className="p-6">
              <div className="flex space-x-4 text-gray-500 text-sm mb-3">
                <span>👤 Admin</span>
                <span>📅 14 Oct 2022</span>
                <span>🛠️ Handmade</span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Exploring new ways of decorating
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua...
                {showFullText && (
                  <span>
                    {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                )}
              </p>
              <button onClick={handleReadMoreClick} className="text-blue-500 font-semibold hover:underline">
                {showFullText ? "Read less" : "Read more"}
              </button>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow-md mb-6">
            <img
              src={blog3}
              alt="Blog Cover"
              className="w-full h-88"
            />
            <div className="p-6">
              <div className="flex space-x-4 text-gray-500 text-sm mb-3">
                <span>👤 Admin</span>
                <span>📅 14 Oct 2022</span>
                <span>🛠️ Wood</span>
              </div>
              <h2 className="text-xl font-bold mb-2">
                Handmade pieces that took time to make
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua...
                {showFullText && (
                  <span>
                    {" "}Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                )}
              </p>
              <button onClick={handleReadMoreClick} className="text-blue-500 font-semibold hover:underline">
                {showFullText ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
          {/* Pagination Buttons */}
          <div className="flex justify-center space-x-3 mt-6">
            <button
              onClick={() => handlePageChange(1)}
              className={`px-4 py-2 border rounded ${currentPage === 1 ? "bg-gray-800 text-white" : "bg-white border-gray-400 hover:bg-gray-200"}`}
            >
              1
            </button>
            <button
              onClick={() => handlePageChange(2)}
              className={`px-4 py-2 border rounded ${currentPage === 2 ? "bg-gray-800 text-white" : "bg-white border-gray-400 hover:bg-gray-200"}`}
            >
              2
            </button>
            <button
              onClick={() => handlePageChange(3)}
              className={`px-4 py-2 border rounded ${currentPage === 3 ? "bg-gray-800 text-white" : "bg-white border-gray-400 hover:bg-gray-200"}`}
            >
              3
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white border-gray-400 hover:bg-gray-200"}`}
            >
              Next →
            </button>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <ul className="mb-6">
              {categories.map((cat) => (
                <li key={cat.name} className="flex justify-between py-1">
                  <span>{cat.name}</span>
                  <span className="text-gray-500">{cat.count}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mb-2">Recent Posts</h3>
            <ul>
              {recentPosts.map((post) => (
                <li key={post.title} className="py-2">
                  <a href="#" className="text-blue-500 hover:underline">
                    {post.title}
                  </a>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
         {/* Features Section */}
         <div className="bg-pink-100 w-full py-11">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center md:justify-between px-4 space-y-4 md:space-y-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-pink-100 md:w-[22%] lg:w-[22%] w-[90%]"
            >
              {/* Icon */}
              <div className="shrink-0">{feature.icon}</div>

              {/* Title and Description */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800 leading-tight">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-tight">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}