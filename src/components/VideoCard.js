import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  // const {snippet ,statistics} = info;
  // const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className=" pl-2 w-72 shadow h-[340px] overflow-hidden">
      <img
        className="rounded-lg "
        alt="thumbnail-img"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.snippet?.publishedAt}-ago</li>
        <li>{info?.statistics?.viewCount}-views</li>
      </ul>
    </div>
  );
};


export default VideoCard;
