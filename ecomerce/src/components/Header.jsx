import React from 'react';
import './Header.css';

import img1 from '../assets/bac.jpg'

function FurniroComponent() {
  return (
    <div className="furniro-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Furniro</div>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="icons">
          <span>🔍</span>
          <span>🛒</span>
          <span>👤</span>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <div className="background-image">
          <img
            src={img1} /* Replace with the actual background image URL */
            alt="Furniture"
          />
        </div>
        <div className="text-area">
          <h2>New Arrival</h2>
          <h1>Discover Our New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </main>
    </div>
  );
}

export default FurniroComponent;
