
import React from "react";
import { color, motion } from "framer-motion";

const variants = {
  default: { width: 0}, // Set default color
  active: { width: "calc(100% - 0.75rem)"}, // Set active color to pink
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#bc153f]" : "text-[#febbcc]"; // Adjust classes for active and inactive tabs
  const underlineClasses = active ? "h-1 bg-[#bc153f] mt-2" : "h-1 bg-transparent mt-2"; // Adjust classes for active and inactive tabs

  return (
    <button onClick={selectTab} className="mr-4">
      <p className={`font-semibold ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`transition-transform transform ${underlineClasses}`}
      ></motion.div>
    </button>
  );
};

export default TabButton;
