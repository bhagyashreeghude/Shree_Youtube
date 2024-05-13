import React from 'react'


const SideVideoCard = ({info}) => {
  // console.log(info?.snippet)
  return (
    <div className="w-full p-2 sm:h-full  lg:w-[400px]
     bg-white md:p-1 md:w-[480px] w-fixed shadow md:h-28 overflow-hidden hover:scale-110  hover:bg-slate-100 border-black flex  sm:w-14 ">
      <img
        className="w-28 
        snap-start rounded-xl border-black md:pt-1 md:w-48 md:h-24 sm:h-14 lg:w-44 "
        alt="thumbnail-img"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <ul>
        <li className="pl-2 font-semibold">{info?.snippet?.title.split("|")?.[0]}</li>
        <li className="pl-2">{info?.snippet?.channelTitle}</li>
        <li className="pl-2">{info?.snippet?.publishedAt}</li>
      </ul>
    </div>
  );
}
export default SideVideoCard;