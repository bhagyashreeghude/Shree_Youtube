import React from "react";
import { USER_ICON_IMG_URL2 } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg p-1 m-1">
      <img className="w-11 h-10" alt="icon" src={USER_ICON_IMG_URL2} />
      <div className="px-3 " >
        <p className="font-bold"> {name} </p>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default Comment;
