import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Dining from "../assets/Dining.png";
import Living from "../assets/living.png";
import Bedroom from "../assets/Bedroom.png";

const BrowseRange = () => {
  // Animation controls for each category
  const diningControls = useAnimation();
  const livingControls = useAnimation();
  const bedroomControls = useAnimation();

  // UseInView hooks for each category
  const [diningRef, diningInView] = useInView({ triggerOnce: false });
  const [livingRef, livingInView] = useInView({ triggerOnce: false });
  const [bedroomRef, bedroomInView] = useInView({ triggerOnce: false });

  // Animate when in view
  React.useEffect(() => {
    if (diningInView) {
      diningControls.start("visible");
    } else {
      diningControls.start("hidden");
    }
  }, [diningControls, diningInView]);

  React.useEffect(() => {
    if (livingInView) {
      livingControls.start("visible");
    } else {
      livingControls.start("hidden");
    }
  }, [livingControls, livingInView]);

  React.useEffect(() => {
    if (bedroomInView) {
      bedroomControls.start("visible");
    } else {
      bedroomControls.start("hidden");
    }
  }, [bedroomControls, bedroomInView]);

  // Animation variants
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-20 lg:px-40 py-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Browse The Range</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Dining */}
        <motion.div
          ref={diningRef}
          initial="hidden"
          animate={diningControls}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center bg-white rounded-lg overflow-hidden"
        >
          <img
            src={Dining}
            alt="Dining"
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg object-cover"
          />
          <div className="py-4">
            <h3 className="text-lg font-semibold text-gray-800">Dining</h3>
          </div>
        </motion.div>

        {/* Living */}
        <motion.div
          ref={livingRef}
          initial="hidden"
          animate={livingControls}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center bg-white rounded-lg overflow-hidden"
        >
          <img
            src={Living}
            alt="Living"
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg object-cover"
          />
          <div className="py-4">
            <h3 className="text-lg font-semibold text-gray-800">Living</h3>
          </div>
        </motion.div>

        {/* Bedroom */}
        <motion.div
          ref={bedroomRef}
          initial="hidden"
          animate={bedroomControls}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center bg-white rounded-lg overflow-hidden"
        >
          <img
            src={Bedroom}
            alt="Bedroom"
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg object-cover"
          />
          <div className="py-4">
            <h3 className="text-lg font-semibold text-gray-800">Bedroom</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrowseRange;