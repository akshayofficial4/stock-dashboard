import React, { useContext, useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";
import { searchSymbols } from "../api/stock-api";
import ThemeContext from "../context/ThemeContext";

const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  // clear function..
  const clear = () => {
    setInput("");
    setBestMatches([]);
  };
  // update Best Matches...
  const updateBestMatches = async () => {
    try {
      if (input) {
        const SearchResults = await searchSymbols(input);
        const result = SearchResults.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };
  return (
    <div
      className={` flex items-center my-4 border-2 rounded-md relative z-50 xl:w-96 md:w-96 lg:w-96 sm:w-50 w-30 ${
        darkMode
          ? "bg-gray-900 border-gray-800"
          : " bg-white border-neutral-200 "
      }`}
    >
      {/*Search Bar....*/}

      <input
        type="text"
        value={input}
        className={`w-full px-4 py-2 focus:outline-none rounded-md ${
          darkMode ? " bg-gray-900 " : null
        }`}
        placeholder="Search stocks..."
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />

      {/*...Clear Button... */}

      {input && (
        <button onClick={clear} className="m-1">
          <XIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}

      {/*Search icon */}

      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400 "
      >
        <SearchIcon className="h-4 w-4 fill-gray-100" />
      </button>

      {/* Showing Search Results... */}

      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
};

export default Search;
