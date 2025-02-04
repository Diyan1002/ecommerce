import React from 'react'
import Navbar from '../components/Navbar'
import Logo from "../assets/logo.png";
import Logo1 from "../assets/shback1.png";
import Footer from '../components/Footer';

import address from "../assets/address.png";
import phone from "../assets/phone.png";
import clock from "../assets/clock.png";

import FastShippingIcon from '../assets/FastShipping.png';
import SecurePaymentIcon from '../assets/SecurePayment.png';
import CustomerSupportIcon from '../assets/CustomerSupport.png';
import QualityGuaranteeIcon from '../assets/QualityGuarantee.png';

const Contact = () => {
    
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
                <h2 className="text-3xl font-semibold">Contact</h2>
                <p className="text-sm">Home &gt; Contact</p>
              </div>
              <div className="bg-cover bg-center h-72 opacity-90" style={{ backgroundImage: `url(${Logo1})` }}></div>
            </div>

            <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Get In Touch With Us</h2>
      <p className="text-center text-gray-600 mb-6">
        For more information about our products & services, please feel free to drop us<br /> an email. Our staff is always there to help you out. Do not hesitate!
      </p>
      <br />
      <br />
      <br />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <img src={address} alt="Address" className="w-6 h-6" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">236 5th SE Avenue, New<br /> York NY10000, United States</p>
            </div>
          </div>
          <br />
          <div className="flex items-start gap-3">
            <img src={phone} alt="Phone" className="w-6 h-6" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">Mobile: (+84) 546-6789</p>
              <p className="text-gray-600">Hotline: (+84) 546-6789</p>
            </div>
          </div>
          <br />
          <div className="flex items-start gap-3">
            <img src={clock} alt="Working Time" className="w-6 h-6" />
            <div>
              <h3 className="font-semibold">Working Time</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 -<br /> 22:00</p>
              <p className="text-gray-600">Saturday - Sunday: 9:00 -<br /> 21:00</p>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-8">
            <input type="text" placeholder="Your name" className="w-full p-3 border rounded-lg" />
            <input type="email" placeholder="Email address" className="w-full p-3 border rounded-lg" />
            <input type="text" placeholder="Subject (optional)" className="w-full p-3 border rounded-lg" />
            <textarea placeholder="Message" className="w-full p-3 border rounded-lg h-28"></textarea>
            <button className="w-36 p-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-600">Submit</button>
          </form>
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

    
  )
}

export default Contact
