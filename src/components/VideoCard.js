import React from "react";
import SideViedoContainer from "./sideVide/SideViedoContainer";

const VideoCard = ({ info }) => {
  // console.log(info?.snippet?.thumbnails?.medium?.url);
  // console.log(info);
  // const {snippet ,statistics} = info;
  // const {channelTitle,title,thumbnails} = snippet;

  return (
    <>
      <div className="p-2 md:w-[25rem] shadow h-[340px] overflow-hidden hover:opacity-80   border-solid border-2 border-white rounded-2xl  ">
        <img
          className="rounded-lg border-solid border-2 border-white w-96"
          alt="thumbnail-img"
          src={info?.snippet?.thumbnails?.medium?.url}
        />
        <ul>
          <li className="font-bold py-2 overflow-hidden">
            {info?.snippet?.title}
          </li>
          <li className="font-normal  overflow-hidden">{info?.snippet?.channelTitle}</li>
          <li>{info?.snippet?.publishedAt}-ago</li>
          <li>{info?.statistics?.viewCount}-views</li>
        </ul>
      </div>
    </>
  );
};

export default VideoCard;
