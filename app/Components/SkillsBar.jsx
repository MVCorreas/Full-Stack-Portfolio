import React from "react";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div className="w-95">
      <p className="text-lg mb-1 mt-2">{skill}</p>
      <div className="h-2 bg-gray-300">
        <div
          className={`h-full ${
            !isScrolled ? "w-0" : "w-full transition-all duration-1500 ease-in-out"
          } bg-pink-900`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default SkillsBar;
