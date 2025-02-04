import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo.png";
import Logo1 from "../assets/shback1.png"
import Footer from "../components/Footer";

import FastShippingIcon from '../assets/FastShipping.png';
import SecurePaymentIcon from '../assets/SecurePayment.png';
import CustomerSupportIcon from '../assets/CustomerSupport.png';
import QualityGuaranteeIcon from '../assets/QualityGuarantee.png';
const Checkout = () => {

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
                  <h2 className="text-3xl font-semibold">CheckOut</h2>
                  <p className="text-sm">Home &gt; CheckOut</p>
                </div>
                <div className="bg-cover bg-center h-72 opacity-90" style={{ backgroundImage: `url(${Logo1})` }}></div>
              </div>   
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Billing details</h2>
          <form className="grid grid-cols-2 gap-4">
            <input className="border p-2 rounded col-span-1" type="text" placeholder="First Name" />
            <input className="border p-2 rounded col-span-1" type="text" placeholder="Last Name" />
            <input className="border p-2 rounded col-span-2" type="text" placeholder="Company Name (Optional)" />
            <select className="border p-2 rounded col-span-2">
              <option>Sri Lanka</option>
            </select>
            <input className="border p-2 rounded col-span-2" type="text" placeholder="Street address" />
            <input className="border p-2 rounded col-span-2" type="text" placeholder="Town / City" />
            <select className="border p-2 rounded col-span-2">
              <option>Western Province</option>
            </select>
            <input className="border p-2 rounded col-span-2" type="text" placeholder="ZIP Code" />
            <input className="border p-2 rounded col-span-2" type="text" placeholder="Phone" />
            <input className="border p-2 rounded col-span-2" type="email" placeholder="Email Address" />
            <textarea className="border p-2 rounded col-span-2" placeholder="Additional Information" rows="3"></textarea>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="border p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Product</h2>
          <div className="flex justify-between border-b pb-2">
            <span>Asgaard Sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total</span>
            <span className="text-yellow-500">Rs. 250,000.00</span>
          </div>
          
          <div className="mt-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" checked className="w-4 h-4" />
              Direct Bank Transfer
            </label>
            <p className="text-sm text-gray-600 mt-2">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared.
            </p>
            <label className="flex items-center gap-2 mt-3">
              <input type="radio" name="payment" className="w-4 h-4" />
              Cash on Delivery
            </label>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
          </p>
          
          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            Place order
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
      <Footer />
    </div>
  );
};

export default Checkout;