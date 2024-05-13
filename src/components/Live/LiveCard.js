import React from "react";

const LiveCard = ({ info }) => {
  // console.log(info?.snippet?.thumbnails?.medium?.url);
  // console.log(info);
  // console.log(info?.snippet?.thumbnails);

  return (
    <>
      <div
        className="w-96 h-[20rem] flex flex-col 
        ml-1 pl-1 md:w-[20rem]  md:h-[300px] overflow-hidden hover:scale-105 sm:w-60  sm:h-[240px]   rounded-xl  m-2 
        lg:w-96 lg:h-80 lg:ml-4"
      >
        <img
          className="rounded-lg border-solid  w-full h-48
          lg:w-96 lg:h-80"
          alt="thumbnail-img"
          src={info?.snippet?.thumbnails?.medium?.url}
        />
        <ul>
          <li className="font-bold   sm:overflow-hidden">
            {info?.snippet?.title}
          </li>
          <li>{info?.snippet?.channelTitle}</li>
          <li>{info?.snippet?.publishedAt}-ago</li>
        </ul>
      </div>
    </>
  );
};

export default LiveCard;
