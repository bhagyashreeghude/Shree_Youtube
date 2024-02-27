import React from "react";
import {
  HAMBURGER_LOGO_URL,
  USER_ICON_IMG_URL,
  YOUTUBE_LOGO,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import toggleMenu from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-1 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="logo"
          src={HAMBURGER_LOGO_URL}
        />
        <a href="/">
          <img
            className="h-11 mx-2 ml-7"
            alt="youtube-logo"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>

      <div className="col-span-10 pl-[20%]">
        <input
          className="w-1/2  text-center border border-gray-700 rounded-l-full"
          placeholder="Search"
          type="text"
        ></input>
        <button className=" pl-1 border border-gray-700 rounded-r-full bg-gray-200">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={USER_ICON_IMG_URL} />
      </div>
    </div>
  );
};

export default Head;
