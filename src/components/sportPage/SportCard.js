import React from "react";

const SportCard = ({ info }) => {
  // console.log(info?.snippet?.thumbnails?.medium?.url);
  // console.log(info);

  // const {snippet } = info;
  // const {channelTitle,title,thumbnails} = snippet;
  // console.log(info?.snippet?.thumbnails);

  return (
    <>
      <div className=" p-2 md:w-[18rem] shadow md:h-[300px] overflow-hidden hover:scale-110 sm:w-10  sm:h-[20px] border-solid border-2 border-gray-700 rounded-lg bg-gray-200 m-2 ml-4 ">
        <img
          className="rounded-lg border-solid border-2 border-black sm:w'"
          alt="thumbnail-img"
          src={info?.snippet?.thumbnails?.medium?.url}
        />
        <ul>
          <li className="font-bold py-2 sm:overflow-hidden">
            {info?.snippet?.title}
          </li>
          <li>{info?.snippet?.channelTitle}</li>
          <li>{info?.snippet?.publishedAt}-ago</li>
        </ul>
      </div>
    </>
  );
};

export default SportCard;
