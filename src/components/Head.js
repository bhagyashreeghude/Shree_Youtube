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
    
    <div className="w-full cover flex flex-row"> 
      <div className="flex flex-row mt-2 lg:w-32">
        <img
          onClick={toggleMenuHandler}
          className="w-4 h-6 ml-2 lg:h-8 lg:w-8"
          alt="logo"
          src={HAMBURGER_LOGO_URL}
        />
        <a href="/">
          <img
            className="lg:h-12 lg:w-32 flex-row sm:h-8 sm:ml-4 sm:w-16 w-16 h-8 ml-1"
            alt="youtube-logo"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>

      <div className=" flex  w-2 h-8 ml-2 mt-2 lg:pb-2
                       lg:w-[600px] lg:mt-2  lg:h-11  sm:w-96 sm:pl-40 sm:">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className="  px-1.5 py-1.5 my-1.5 border  border-gray-900  rounded-l-full w-28 
          lg:pb-2 lg:py-4 lg:pl-32 lg:h-11 lg:w-[37rem] lg:ml-28 sm:w-96 "
          type="text"
        />
        <button className="text-xs border border-gray-900 py-0 my-1.5 px-2  rounded-r-full lg:py-4 lg:w-20 lg:h-11">
          Search
        </button>
      </div>
      

      <div className="lg:ml-96  ">
        <img
          className="lg:w-14 lg:h-8 lg:mt-4  mx-36  h-6 mt-2"
          alt="user-icon"
          src={USER_ICON_IMG_URL}
        />
      </div>
    </div>



  );
};

export default Head;


// lg:h-10 lg:w-10 lg:mx-3 sm:h-6 sm:ml-4 sm:w-6 