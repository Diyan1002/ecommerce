import React, { useState, useEffect } from "react";

const AdBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Automatically show the banner when the website loads
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 0.5-second delay for effect

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center">
        <p className="text-sm">
          We use cookies (and other similar technologies) for many purposes,
          including to improve your experience on our site and for ads and
          analytics. Click "Accept all" to accept these uses. Read more in our{" "}
          <a href="#" className="underline">
            Cookie Policy
          </a>.
        </p>
        <div className="space-x-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-white text-black rounded-md"
          >
            Reject all
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-white text-black rounded-md"
          >
            Accept all
          </button>
        </div>
      </div>
    )
  );
};

export default AdBanner;
