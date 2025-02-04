import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; 
import Logo from '../assets/Logo.png';
import UserIcon from '../assets/Me.png';
import SearchIcon from '../assets/Search.png';
import HeartIcon from '../assets/Heart.png';
import CartIcon from '../assets/Troll.png';
import Shback from '../assets/shback.png';

import Products from '../components/Products'; // Importing the Products component
import pro1 from '../assets/pro1.png';
import pro2 from '../assets/pro2.png';
import pro3 from '../assets/pro3.png';
import pro4 from '../assets/pro4.png';
import pro5 from '../assets/pro5.png';
import pro6 from '../assets/pro6.png';
import pro7 from '../assets/pro7.png';
import pro8 from '../assets/pro8.png';

// Example Products Array
const products = [
  { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', discount: '30%', isNew: false, image: pro1 },
  { id: 2, name: 'Leviosa', description: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: null, discount: null, isNew: false, image: pro2 },
  { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', isNew: false, image: pro3 },
  { id: 4, name: 'Respira', description: 'Outdoor bar table and stool', price: 'Rp 500.000', oldPrice: null, discount: null, isNew: true, image: pro4 },
  { id: 5, name: 'Grifo', description: 'Night lamp', price: 'Rp 1.500.000', oldPrice: null, discount: null, isNew: false, image: pro5 },
  { id: 6, name: 'Muggo', description: 'Small mug', price: 'Rp 150.000', oldPrice: null, discount: null, isNew: true, image: pro6 },
  { id: 7, name: 'Pingky', description: 'Cute bed set', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', discount: '50%', isNew: false, image: pro7 },
  { id: 8, name: 'Potty', description: 'Minimalist flower pot', price: 'Rp 500.000', oldPrice: null, discount: null, isNew: true, image: pro8 },
];


import FastShippingIcon from '../assets/FastShipping.png';
import SecurePaymentIcon from '../assets/SecurePayment.png';
import CustomerSupportIcon from '../assets/CustomerSupport.png';
import QualityGuaranteeIcon from '../assets/QualityGuarantee.png';


const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const productsPerPage = 4; // Number of products per page

  // Calculate the total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get products for the current page
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle Next and Previous
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle Page Number Click
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

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

  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-6" />
          <span className="text-xl font-bold text-black">Furniro</span>
        </div>

        {/* Links Section */}
        <ul className="hidden md:flex space-x-12 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-gray-700">
          <button>
            <img src={UserIcon} alt="User Icon" className="h-5 w-5 hover:text-black" />
          </button>
          <button>
            <img src={SearchIcon} alt="Search Icon" className="h-5 w-5 hover:text-black" />
          </button>
          <button>
            <img src={HeartIcon} alt="Heart Icon" className="h-5 w-5 hover:text-black" />
          </button>
          <button>
            <img src={CartIcon} alt="Cart Icon" className="h-5 w-5 hover:text-black" />
          </button>
        </div>
      </nav>

      {/* Shop Header Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: `url(${Shback})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
          <nav className="mt-2">
            <ol className="flex justify-center text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li className="mx-2 text-gray-400">/</li>
              <li className="text-gray-800">Shop</li>
            </ol>
          </nav>
        </div>
      </div>

  

      {/* Products Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <Products products={currentProducts} />

        {/* Pagination Section */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-200' : 'bg-yellow-600 text-white'}`}
            disabled={currentPage === 1}
            onClick={handlePrevious}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded ${currentPage === index + 1 ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-200' : 'bg-yellow-600 text-white'}`}
            disabled={currentPage === totalPages}
            onClick={handleNext}
          >
            Next
          </button>
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
<div>
  <Footer />
</div>

    </div>
  );
};

export default Shop;
