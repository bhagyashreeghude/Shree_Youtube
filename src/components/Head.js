import React, { useEffect, useState } from "react";
import {
  HAMBURGER_LOGO_URL,
  USER_ICON_IMG_URL,
  YOUTUBE_LOGO,
  // YOUTUBE_SEARCH_SUGGESTION_API,
  YOUTUBE_SEARCH_SUGGESTION_API2,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { chacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowsuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache && searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("api call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API2);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(
      chacheResults({
        [searchQuery]: [json[1]],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-1 m-2 shadow-lg">
      <div className="flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="logo"
          src={HAMBURGER_LOGO_URL}
        />
        <a href="/">
          <img
            className="h-11 mx-2 ml-5"
            alt="youtube-logo"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>

      <div className="col-span-10 pl-[18%]">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
          onFocus={() => setShowsuggestions(true)}
          onBlur={() => setShowsuggestions(false)}
          className="w-[37rem] shadow text-center border py-1.5 border-gray-700 rounded-l-full"
          placeholder="Search"
          type="text"
        ></input>
        <button className=" pl-1 border border-gray-700 py-1.5 rounded-r-full bg-gray-200">
          Search
        </button>
      </div>
      {showSuggestions && (
        <div className="rounded-lg shadow border  fixed my-7 w-[37rem] bg-white ml-[28.5%]    ">
          <ul>
            {suggestions &&
              suggestions.map((s) => (
                <li key={s} className="px-3  py-2 shadow hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
          </ul>
        </div>
      )}

      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={USER_ICON_IMG_URL} />
      </div>
    </div>
  );
};

export default Head;
