import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import UserIcon from '../assets/Me.png';
import SearchIcon from '../assets/Search.png';
import HeartIcon from '../assets/Heart.png';
import CartIcon from '../assets/Troll.png';

const Navbar = ({ cartCount, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  // Close search on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 flex items-center justify-between px-6 py-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-8 h-7" />
          <span className="text-2xl font-bold text-gray-900">Furniro</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li className="hover:text-black transition"><Link to="/">Home</Link></li>
          <li className="hover:text-black transition"><Link to="/shop">Shop</Link></li>
          <li className="hover:text-black transition"><Link to="/blog">Blog</Link></li>
          <li className="hover:text-black transition"><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700">
          <button onClick={() => navigate('/signup')}>
            <img src={UserIcon} alt="User" className="h-5 w-6 cursor-pointer hover:scale-110 transition-transform" />
          </button>
          <button onClick={() => setIsSearchOpen(true)}>
            <img src={SearchIcon} alt="Search" className="h-5 w-6 cursor-pointer hover:scale-110 transition-transform" />
          </button>
          <button>
            <img src={HeartIcon} alt="Favorites" className="h-5 w-6 cursor-pointer hover:scale-110 transition-transform" />
          </button>
          <button onClick={() => setIsCartOpen(true)} className="relative">
            <img src={CartIcon} alt="Cart" className="h-5 w-6 cursor-pointer hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu (Animated) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        {/* Mobile Menu Links */}
        <ul className="mt-16 space-y-6 text-gray-700 font-medium text-center">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-pink-200 to-orange-300 bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-2/3 max-w-lg">
            <button
              className="absolute top-3 right-3 text-white text-2xl"
              onClick={() => setIsSearchOpen(false)}
            >
              ✕
            </button>
            <div className="text-center">
              <h2 className="text-white text-4xl font-bold">Search</h2>
              <p className="text-white mt-2">Hit enter to search or ESC to close</p>
              <div className="mt-6 relative">
                <input
                  type="text"
                  className="w-full px-6 py-3 text-lg rounded-lg shadow-lg outline-none"
                  placeholder="Search"
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;