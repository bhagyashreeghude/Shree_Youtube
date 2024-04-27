import React from "react";
import SideViedoContainer from "./sideVide/SideViedoContainer";

const VideoCard = ({ info }) => {
  console.log(info?.snippet?.thumbnails?.medium?.url);
  // console.log(info);
  // const {snippet ,statistics} = info;
  // const {channelTitle,title,thumbnails} = snippet;

  return (
    <>
      <div className="sm:p-2 sm:m-2 p-2 md:w-80 shadow h-[340px] overflow-hidden hover:scale-110  border-solid border-2 border-gray-700 rounded-lg bg-gray-200 m-2 sm:w-[100%]">
        <img
          className="rounded-lg border-solid border-2 border-black sm:w"
          alt="thumbnail-img"
          src={info?.snippet?.thumbnails?.medium?.url}
        />
        <ul>
          <li className="font-bold py-2 overflow-hidden">
            {info?.snippet?.title}
          </li>
          <li>{info?.snippet?.channelTitle}</li>
          <li>{info?.snippet?.publishedAt}-ago</li>
          <li>{info?.statistics?.viewCount}-views</li>
        </ul>
      </div>
    </>
  );
};

export default VideoCard;
