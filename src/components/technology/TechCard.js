import React from "react";


const TechCard = ({ info }) => {
  // console.log(info?.snippet?.thumbnails?.medium?.url);
  // console.log(info);

  // const {snippet } = info;
  // const {channelTitle,title,thumbnails} = snippet;
  // console.log(info?.snippet?.thumbnails);

  return (
    <>
      <div className="w-full p-2 md:w-80  md:h-[300px] overflow-hidden hover:scale-110 sm:flex-col sm:w-[28rem]  sm:h-[400px] m-2 
      lg:w-80 lg:p-1">
        <img
          className="rounded-lg border-solid border-2 border-black sm:w- w-[28rem]"
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


//     

export default TechCard;
