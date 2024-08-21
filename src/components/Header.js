import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <>
    <div className="flex flex-row lg:pt-8 md:pt-11 ">
      <div className="xl:px-32">
        <h1 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl pt-3  "> {name} </h1>
        <Search />
        
      </div>
      {/* Theme Icon */}
      <ThemeIcon  />
    </div>
    </>
  );
};

export default Header;
