import React from "react";

const SportCard = ({ info }) => {
  // console.log(info?.snippet?.thumbnails?.medium?.url);
  // console.log(info);

  // const {snippet } = info;
  // const {channelTitle,title,thumbnails} = snippet;
  // console.log(info?.snippet?.thumbnails);

  return (
    <>
      <div className=" p-2 md:w-[18rem]  md:h-[300px] overflow-hidden hover:scale-110   rounded-lg  m-2 ml-4 
      sm:w-96  sm:h-[400px]  sm:flex-col md:flex-row lg:flex-row w-full h-[22rem]">
        <img
          className="rounded-lg border-solid border-2 border-black w-96
          sm:w-96"
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
