import React from "react";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

const Header = ({ name }) => {
  return (
    <>
    <div className='flex flex-row lg:pt-8 md:pt-11 '>
      <div className='xl:px-32 md:px-40'>
        <h1 className='2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl text-2xl pt-6 mt-4 xl:pt-1 '> {name} </h1>
        <Search/>
      </div>
      {/*ThemeIcon*/}
      <ThemeIcon/>
    </div>
    </>
  );
};

export default Header;
