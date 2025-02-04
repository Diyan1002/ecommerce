import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import mainImage from "../assets/ps1.png";
import thumbnail1 from "../assets/ps2.png";
import thumbnail2 from "../assets/ps3.png";
import thumbnail3 from "../assets/ps4.png";
import thumbnail4 from "../assets/ps5.png";

import more1 from "../assets/mr1.png";
import more2 from "../assets/mr2.png";

const Singleproduct = () => {
  const [selectedImage, setSelectedImage] = useState(mainImage); // Store the selected image
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const newItem = {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity,
      image: selectedImage,
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, newItem];
    });
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rs. 2,500,000",
      oldPrice: "Rs. 3,500,000",
      discount: "30%",
      image: thumbnail1,
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rs. 2,500,000",
      oldPrice: null,
      discount: null,
      image: thumbnail2,
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rs. 7,000,000",
      oldPrice: "Rs. 14,000,000",
      discount: "50%",
      image: thumbnail3,
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rs. 500,000",
      oldPrice: null,
      discount: null,
      image: thumbnail4,
    },
  ];

  return (
    <div>
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} setIsCartOpen={setIsCartOpen} />
     {/* Cart Modal */}
{isCartOpen && (
  <div className="fixed top-0 right-0 w-96 h-96 bg-white shadow-lg p-6 z-50">
    <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
    <button
      className="absolute top-4 right-6 text-gray-500 hover:text-gray-700"
      onClick={() => setIsCartOpen(false)}
    >
      ✖
    </button>
    {cart.length === 0 ? (
      <p className="text-center text-gray-500 mt-6">Your cart is empty</p>
    ) : (
      <div>
        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <li key={index} className="flex items-center gap-4 py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg shadow-md object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 text-sm">
                  {item.quantity} x Rs. {item.price}
                </p>
              </div>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
        <br />
        <br />
        <br />
        <div className="mt-6 text-left border-b">
          <p className="text-lg font-semibold">
            Subtotal: Rs.{" "}
            {cart.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
              onClick={() => navigate("/cart")}

          >
            Cart
          </button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            Checkout
          </button>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
            Comparison
          </button>
        </div>
      </div>
    )}
  </div>
)}

      <div className="bg-[#f9f6ef] py-4 px-6">
        <nav className="flex items-center text-sm text-gray-600">
          <span className="hover:underline cursor-pointer text-gray-500 pl-10 hover:text-gray-800">
            Home
          </span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="hover:underline cursor-pointer text-gray-500 hover:text-gray-800">
            Shop
          </span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800 font-medium">Asgaard Sofa</span>
        </nav>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Image Section */}
          <div className="md:col-span-4">
            <div className="space-y-4">
              <img
                src={selectedImage} // Display the selected image
                alt="Product"
                className="w-full rounded-lg shadow"
              />
              <div className="grid grid-cols-4 gap-2">
                {[mainImage, thumbnail1, thumbnail2, thumbnail3, thumbnail4].map(
                  (thumbnail, index) => (
                    <img
                      key={index}
                      src={thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-full h-20 rounded-lg border ${
                        selectedImage === thumbnail ? "border-black" : ""
                      }`}
                      onClick={() => setSelectedImage(thumbnail)} // Update selected image on click
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="md:col-span-8">
            <h1 className="text-3xl font-bold text-gray-800">Asgaard Sofa</h1>
            <p className="text-gray-500 text-lg mt-2">Rs. 250,000.00</p>

            {/* Ratings */}
            <div className="flex items-center space-x-2 mt-3">
              <div className="flex text-yellow-500">
                {Array(5)
                  .fill("")
                  .map((_, index) => (
                    <span key={index}>&#9733;</span>
                  ))}
              </div>
              <p className="text-gray-500 text-sm">(5 Customer Reviews)</p>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-4">
              Setting the bar as one of the loudest speakers in its class, the<br />
              Kilburn is a compact, stout-hearted hero with a well-balanced<br />
              audio which boasts a clear midrange and extended highs for a<br />
              sound.
            </p>

            {/* Options: Size and Color */}
            <div className="mt-6 space-y-4">
              {/* Size */}
              <div>
                <h4 className="text-gray-800 font-medium">Size:</h4>
                <div className="flex space-x-4 mt-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="w-10 h-10 flex justify-center items-center border rounded-md hover:border-black"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div>
                <h4 className="text-gray-800 font-medium">Color:</h4>
                <div className="flex space-x-4 mt-2">
                  {["purple", "black", "gold"].map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 cursor-pointer`}
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity and Buttons */}
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  className="px-4 py-2 hover:bg-gray-200"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <div className="px-4 py-2">{quantity}</div>
                <button
                  className="px-4 py-2 hover:bg-gray-200"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
              <button
                className="bg-yellow-500 text-white px-6 py-2 rounded-md shadow hover:bg-yellow-600"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <button className="border px-6 py-2 rounded-md shadow hover:bg-gray-100">
                Compare
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 space-y-3">
              <p className="text-gray-500 text-sm">
                <span className="font-medium">SKU:</span> SS001
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium">Category:</span> Sofas
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium">Tags:</span> Sofa, Chair, Home,
                Shop
              </p>
            </div>

            {/* Share Icons */}
            <div className="mt-4">
              <h4 className="text-gray-500 font-medium">Share:</h4>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-500 hover:text-blue-600"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-500 hover:text-blue-400"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-500 hover:text-pink-600"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-500 hover:text-blue-700"
                >
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 pb-4"></div>

      <div className="px-4 md:px-16 py-8">
        <div className="pb-4">
          <nav className="flex space-x-8 justify-center">
            <button className="text-black font-medium border-b-2 border-black pb-1">Description</button>
            <button className="text-gray-500">Additional Information</button>
            <button className="text-gray-500">Reviews [5]</button>
          </nav>
        </div>
        <div className="mt-6 text-gray-700">
          <p>
            Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn portable active
            stereo speaker takes the unmistakable look and sound of Marshall, unplugs the
            chords, and takes the show on the road.
          </p>
          <p className="mt-4">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
            engineering. Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts
            a clear midrange and extended highs for a sound that is both articulate and
            pronounced. The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap enables easy and
            stylish travel.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={more1}
            alt="Product 1"
            className="rounded-lg shadow-md"
          />
          <img
            src={more2}
            alt="Product 2"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Related Products Section */}
      <div className="px-4 md:px-16 py-8">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">Related Products</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white border rounded-lg overflow-hidden shadow-sm cursor-pointer"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  -{product.discount}
                </div>
              )}

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
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
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Singleproduct;