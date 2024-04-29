import React, { useEffect, useState } from "react";
import {
  HAMBURGER_LOGO_URL,
  USER_ICON_IMG_URL,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { chacheResults } from "../utils/searchSlice";

// Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const debouncedSearch = debounce(getSearchSuggestions, 200);
    debouncedSearch();
    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    console.log("api call - " + searchQuery);
    const KEY = process.env.REACT_APP_KEY2;
    try {
      const data = await fetch(
        YOUTUBE_SEARCH_API+"&q="+
          searchQuery
      );
      const json = await data.json();
      console.log(json[1]);
      setSuggestions(json[1]);
      dispatch(
        chacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    
    <div className="md:w-full  shadow-lg sm:w-[100%] flex"> 
      <div className="flex sm:p-3  sm:w-[100%]">
        <img
          onClick={toggleMenuHandler}
          className="md:h-14 md:w-14 cursor-pointer  sm:h-6 sm:w-6 sm:p-4 "
          alt="logo"
          src={HAMBURGER_LOGO_URL}
        />
        <a href="/">
          <img
            className="md:h-14 w-32 sm:h-10 sm:w-30  "
            alt="youtube-logo"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>

      <div className="flex  md:w-1/2 md:mt-1 sm:w-[640px] mr-96 sm:p-3 sm:mt-10">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className=" md:w-[550px] pr-10 border border-gray-400  rounded-l-full  sm:w-10  sm:pl-16 "
          type="text"
        />
        <button className="border border-gray-400  rounded-r-full bg-gray-100  sm:p-2">
          Search
        </button>
      </div>
      {/* {showSuggestions && (
        // <div className="absolute overflow-hidden shadow-lg rounded-lg  bg-white md:mt-20 md:h-40 md:ml-[26rem] md:w-[34rem] border border-gray-300 md:pt-2 sm:mt-14 sm:w-28
        // ">
        //   <ul>
        //     {suggestions &&
        //       suggestions.map((suggestion) => (
        //         <li
        //           key={suggestion}
        //           className="md:px-3 md:py-2  hover:bg-gray-100  bg-white  md:w-[550px] shadow-lg border border-gray-300 sm:pl-6"
        //         >
        //           🔍 {suggestion}
        //         </li>
        //       ))}
        //   </ul>
        // </div>
      )} */}

      <div className="sm:pl-0 ">
        <img
          className=" md:h-10 mt-6 mr-14 w-80 pr-10 sm:h-6  "
          alt="user-icon"
          src={USER_ICON_IMG_URL}
        />
      </div>
    </div>



  );
};

export default Head;
