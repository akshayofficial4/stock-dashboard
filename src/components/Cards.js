import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Cards = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`w-full h-full  relative p-8 border-2 mt-5  ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-neutral-200"
      }`}
    >
      {children}
    </div>
  );
};

export default Cards;
