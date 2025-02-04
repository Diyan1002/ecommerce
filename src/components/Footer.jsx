import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-4 md:px-8 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand and Address */}
        <div>
          <h1 className="text-lg font-bold text-gray-800">Funiro.</h1>
          <address className="mt-6 text-sm text-gray-600 leading-relaxed not-italic">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-4">Links</h2>
          <ul className="space-y-4 text-sm font-semibold text-gray-800">
            <li>
              <a href="#" className="hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-4">Help</h2>
          <ul className="space-y-4 text-sm font-semibold text-gray-800">
            <li>
              <a href="#" className="hover:text-gray-800">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-sm font-semibold text-gray-600 mb-4">Newsletter</h2>
          <form className="flex flex-col sm:flex-row items-center mt-6">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg sm:rounded-r-none sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:ml-2 px-6 py-3 bg-gray-800 text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-gray-700"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
        © 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;