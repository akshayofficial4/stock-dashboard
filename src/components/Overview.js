import React from "react";
import Cards from "./Cards";

const Overview = ({ symbol, price, change, changePercent, currency }) => {
  return (
    <Cards>
      <span className="absolute left-4 top-4 text-neutral-400 text-sm xl:text-xl 2xl:text-2xl ">
        {symbol}
      </span>

      <div className="w-full h-full flex items-center justify-around m-3 ">
        <span className="text-2xl xl:text-2xl 2xl:text-4xl flex items-center">
          ${price}
          <span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
            {currency}
          </span>
        </span>

        <span
          className={`text-lg xl:text-xl 2xl:text-2xl ${
            change > 0 ? "text-lime-500" : "text-red-500"
          }`}
        >
          {change} <span className="text-sm lg:md">( {changePercent}%)</span>
        </span>
      </div>
    </Cards>
  );
};

export default Overview;
