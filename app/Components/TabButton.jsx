import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-orange-300" : "text-[#ADB7BE]";
  const underlineClasses = active ? "h-1 bg-primary-500 mt-2" : "h-1 bg-transparent mt-2";

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
