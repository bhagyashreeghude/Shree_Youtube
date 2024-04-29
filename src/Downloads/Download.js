import React from "react";
import { DOWNLOAD_BG_IMG } from "../utils/constants";
const Download = () => {
  return (
    <div>
      <div className="relative">
        <img src={DOWNLOAD_BG_IMG} alt="bg-img" className="" />

        <div className="absolute top-28 left-40 w-full">
          <input
            type="text"
            placeholder="Enter Url"
            className="p-2 m-2 border border-black rounded-lg  ml-40 w-1/2 "
          />

          <div className="pl-56">
            <button
              type="checkbox"
              className="font-bold text-5xl justify-center ml-32 mt-10"
            >
              Quality
            </button>
            <br></br>
            <br></br>
            <button className="p-3  m-3 ml-7 border border-black rounded-lg  hover:bg-red-500">
              {" "}
              240p
            </button>
            <button className="p-3 m-3  ml-7 border border-black rounded-lg  hover:bg-red-500">
              360p
            </button>
            <button className=" p-3 m-3 ml-7 border border-black rounded-lg  hover:bg-red-500">
              480p
            </button>
            <button className=" p-3 m-3 ml-7 border border-black rounded-lg  hover:bg-red-500">
              720p
            </button>
          </div>

          <button className="p-2 ml-96 mt-10 border border-black rounded-lg bg-red-600 hover:bg-red-500">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
