import React from "react";
import SideViedoContainer from "./sideVide/SideViedoContainer";

const VideoCard = ({ info }) => {
  // console.log(info?.snippet?.thumbnails?.medium?.url);
  // console.log(info);
  // const {snippet ,statistics} = info;
  // const {channelTitle,title,thumbnails} = snippet;

  return (
    <>
      <div className="p-2 h-54 w-full shadow  overflow-hidden hover:opacity-80  flex flex-col border-solid border-2 border-white rounded-2xl 
        sm:w-full
        lg:h-[400px]  lg:w-[400px]
       ">
        <img
          className="rounded-lg border-solid border-2 border-white w-[20rem] 
          sm:w-[38rem]"
          alt="thumbnail-img"
          src={info?.snippet?.thumbnails?.medium?.url}
        />
        <ul>
          <li className="font-bold  overflow-hidden lg:text">
            {info?.snippet?.title}
          </li>
          <li className="font-normal  overflow-hidden lg:text-xl">{info?.snippet?.channelTitle}</li>
          <li className="lg:py-1 ">{info?.snippet?.publishedAt}-ago</li>
          <li>{info?.statistics?.viewCount}-views</li>
        </ul>
      </div>
    </>
  );
};

export default VideoCard;
