import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing an icon from react-icons

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div>
      <button
        onClick={scrollTop}
        style={{
          display: showScroll ? 'flex' : 'none',
          position: 'fixed',
          bottom: '20px',
          right: '80px',
          padding: '13px',
          backgroundColor: '#D97706', // Updated background color to yellow-600
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'opacity 0.3s, transform 0.3s',
          opacity: showScroll ? 1 : 0,
          transform: showScroll ? 'scale(1)' : 'scale(0.9)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;