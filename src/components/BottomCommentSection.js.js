import React from "react";
import { USER_ICON_IMG_URL2 } from "../utils/constants";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";


const BottomCommentSection= ({ sideSearch }) => {
  return (
    <div className="flex border shadow-lg scroll md:p-5 sm: p-1">
      <img className="md:w-8 md:h-8 sm: h-8 " src={USER_ICON_IMG_URL2} alt="logo" />
      <div>
        <button className=" md:px-12 bg-black  mx-2 py-2 rounded-2xl text-white sm: px-3 ">
          Subscribe
        </button>
      </div>

      <div className=" md:pl-72">
        <button className="bg-gray-200 md:px-3  md:py-2 mx-2 rounded-xl sm: mt-1 ml-1 mr-2"><AiFillLike size={25}/></button>
        <button className="bg-gray-200 md:px-3 md:py-2 mx-2 rounded-xl sm: mt-1 ml-1 mr-2"><AiFillDislike size={25} /></button>
        <button className="bg-gray-200 md:px-3 md:py-2 mx-2 rounded-xl sm: mt-1 ml-1 mr-2">
          <FaShare size={25}/>
        </button>
        <button className="bg-gray-200 md:px-3 md:py-2 md:mx-2 rounded-xl sm: mt-1 ml-1 mr-1">
          <FaDownload size={25}/>
        </button>
      </div>
    </div>
  );
};

export default BottomCommentSection;
