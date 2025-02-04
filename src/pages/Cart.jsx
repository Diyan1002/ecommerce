import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pc1 from '../assets/pc1.png';
import { FaTrash } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import Logo from "../assets/Logo.png";
import Logo1 from "../assets/shback1.png";
import FastShippingIcon from '../assets/FastShipping.png';
import SecurePaymentIcon from '../assets/SecurePayment.png';
import CustomerSupportIcon from '../assets/CustomerSupport.png';
import QualityGuaranteeIcon from '../assets/QualityGuarantee.png';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Aaggard Sofa", price: 250000, quantity: 1, image: pc1 }
  ]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Replace '/checkout' with the actual path of your checkout page
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
      <Navbar />
      <div className="relative w-full h-72">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10">
          <img src={Logo} alt="Logo" className="mb-2" />
          <h2 className="text-3xl font-semibold">Cart</h2>
          <p className="text-sm">Home &gt; Cart</p>
        </div>
        <div className="bg-cover bg-center h-72 opacity-90" style={{ backgroundImage: `url(${Logo1})` }}></div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <div className="flex justify-between">
          {/* Cart Table */}
          <div className="w-2/3 p-4 rounded">
            <table className="w-full border-collapse border border-white">
              <thead>
                <tr className="bg-pink-100">
                  <th className="border p-2">Product</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Quantity</th>
                  <th className="border p-2">Subtotal</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="border p-2 py-20 flex items-center">
                        <img src={item.image} alt={item.name} className="w-12 h-12 mr-2" />
                        {item.name}
                      </td>
                      <td className="border p-2">Rs. {item.price.toLocaleString()}</td>
                      <td className="border p-2">
                        <input type="number" className="w-12 border p-1" defaultValue={item.quantity} />
                      </td>
                      <td className="border p-2">Rs. {(item.price * item.quantity).toLocaleString()}</td>
                      <td className="border p-2 text-center">
                        <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center p-4">No items in cart</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Cart Totals Section */}
          <div className="w-1/4 mr-10 bg-pink-100 p-4 pt-10 rounded text-center">
            <h3 className="text-xl font-bold mb-2">Cart Totals</h3>
            <br />
            <p className="font-bold text-lg">Subtotal<span className="ml-6 text-gray-400">Rs. {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}</span></p>
            <p className="font-bold text-lg">Total: <span className="text-yellow-600 ml-6">Rs. {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}</span></p>
            <button onClick={handleCheckout} className="text-black py-2 px-4 rounded border border-black hover:bg-yellow-600 mt-4 w-32">
              Check Out
            </button>
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
};

export default Cart;