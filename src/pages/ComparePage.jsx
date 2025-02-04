import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Logo from "../assets/logo.png";
import Logo1 from "../assets/shback1.png";
import pc1 from "../assets/pc1.png";
import pc2 from "../assets/pc2.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FastShippingIcon from '../assets/FastShipping.png';
import SecurePaymentIcon from '../assets/SecurePayment.png';
import CustomerSupportIcon from '../assets/CustomerSupport.png';
import QualityGuaranteeIcon from '../assets/QualityGuarantee.png';
const products = [
  {
    id: 1,
    name: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: 4.7,
    reviews: 328,
    image: pc1, // Replace with actual image URL
  },
  {
    id: 2,
    name: "Outdoor Sofa Set",
    price: "Rs. 224,000.00",
    rating: 4.2,
    reviews: 615,
    image: pc2, // Replace with actual image URL
  },
];

export default function ProductComparison() {
  const [selectedProduct, setSelectedProduct] = useState("");

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
    <div className="relative">
        <Navbar />
      <div className="relative w-full h-72">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10">
          <img src={Logo} alt="Logo" className="mb-2" />
          <h2 className="text-3xl font-semibold">Product Comparison</h2>
          <p className="text-sm">Home &gt; Comparison</p>
        </div>
        <div className="bg-cover bg-center h-72 opacity-90" style={{ backgroundImage: `url(${Logo1})` }}></div>
      </div>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((product) => (
                <div key={product.id} className="p-4 bg-gray-100 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.round(product.rating)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Add A Product</h3>
            <select
              className="w-full p-3 border rounded-lg bg-yellow-600 text-white"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">Choose a Product</option>
              <option value="sofa1">Asgaard Sofa</option>
              <option value="sofa2">Outdoor Sofa Set</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-start">
          <p className="text-gray-600">Go to Product page for more Products</p>
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded">View More</button>
        </div>
      </div>
      <div className="border-b py-2"></div>
      <div className="max-w-4xl mx-auto p-4 ml-16">
      <div className="grid grid-cols-3 gap-4 pb-2 font-semibold text-xl">
        <div>General</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Sales Package</div>
        <div>1 Sectional Sofa</div>
        <div>1 Three Seater, 2 Single Seater</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Model Number</div>
        <div>TFCBLUGRBL6SRHS</div>
        <div>DTUBLUGRBL568</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Secondary Material</div>
        <div>Solid Wood</div>
        <div>Solid Wood</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Configuration</div>
        <div>L-shaped</div>
        <div>L-shaped</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Upholstery Material</div>
        <div>Fabric + Cotton</div>
        <div>Fabric + Cotton</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Upholstery Color</div>
        <div>Bright Grey & Lion</div>
        <div>Bright Grey & Lion</div>
      </div>
      <div className="grid grid-cols-3 gap-4 pb-2 font-semibold mt-4 text-xl">
        <div>Product</div>
        <div></div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Filling Material</div>
        <div>Foam</div>
        <div>Matte</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Finish Type</div>
        <div>Bright Grey & Lion</div>
        <div>Bright Grey & Lion</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Adjustable Headrest</div>
        <div>No</div>
        <div>Yes</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Maximum Load Capacity</div>
        <div>280 KG</div>
        <div>300 KG</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Origin of Manufacture</div>
        <div>India</div>
        <div>India</div>
      </div>

    <div className="grid grid-cols-3 gap-4 pb-2 font-semibold mt-4 text-xl">
        <div>Dimensions</div>
        <div></div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Width</div>
        <div>Foam</div>
        <div>Matte</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Finish Type</div>
        <div>265.32 cm</div>
        <div>265.32 cm</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Height</div>
        <div>76 cm</div>
        <div>76 cm</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Depth</div>
        <div>167.76 cm</div>
        <div>167.76 cm</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Weight</div>
        <div>45 KG</div>
        <div>45 KG</div>
      </div>  
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Seat Height</div>
        <div>41.52 cm</div>
        <div>41.52 cm</div>
      </div>  
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Height</div>
        <div>5.46 cm</div>
        <div>5.46 cm</div>
      </div>  

      <div className="grid grid-cols-3 gap-4 pb-2 font-semibold mt-4 text-xl">
        <div>Warranty</div>
        <div></div>
        <div></div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Warranty Summary</div>
        <div>1 Year Manufacturing Warranty</div>
        <div>1.2 Year Manufacturing Warranty</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Warranty Service </div>
        <div>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</div>
        <div>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Covered in Warranty</div>
        <div>Warranty Against Manufacturing Defect</div>
        <div>Warranty of the product is limited to manufacturing defects only.</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Not Covered in Warranty</div>
        <div>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
        <div>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</div>
      </div>
      <div className="grid grid-cols-3 gap-4 py-2">
        <div>Domestic Warranty</div>
        <div>1 Year</div>
        <div>3 Months</div>
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
