import React from "react";
import { USER_ICON_IMG_URL2 } from "../utils/constants";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";


const BottomCommentSection= ({ sideSearch }) => {
  return (
    <div className="flex border shadow-lg scroll p-5 ">
      <img className="w-8 h-8" src={USER_ICON_IMG_URL2} alt="logo" />
      <div>
        <button className=" px-12 bg-black  mx-2 py-2 rounded-2xl text-white ">
          Subscribe
        </button>
      </div>

      <div className=" pl-72">
        <button className="bg-gray-200 px-3  py-2 mx-2 rounded-2xl"><AiFillLike size={25}/></button>
        <button className="bg-gray-200 px-3 py-2 mx-2 rounded-2xl"><AiFillDislike size={25} /></button>
        <button className="bg-gray-200 px-3 py-2 mx-2 rounded-2xl">
          <FaShare size={25}/>
        </button>
        <button className="bg-gray-200 px-3 py-2 mx-2 rounded-2xl">
          <FaDownload size={25}/>
        </button>
      </div>
    </div>
  );
};

export default BottomCommentSection;
