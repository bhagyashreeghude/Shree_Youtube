import React from "react";
import { DOWNLOAD_BG_IMG } from "../utils/constants";
const Download = () => {
  return (
    <div>
      <div>
        <img src={DOWNLOAD_BG_IMG} alt="bg-img"  className="absolute"/>
        <div className="">
          <input
            type="text"
            placeholder="Enter Url"
            className="p-2 m-2 border border-black rounded-lg w-1/2 ml-40 "
          />
          <button className="p-2  border border-black rounded-lg bg-red-600 hover:bg-red-500">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
