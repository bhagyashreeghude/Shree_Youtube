import React from 'react'


const SideVideoCard = ({info}) => {
  // console.log(info?.snippet)
  return (
    <div className=" bg-white md:p-1 md:w-[460px] w-fixed shadow md:h-28 overflow-hidden hover:scale-110  hover:bg-slate-100 border-black flex sm:h-10 sm:w-14 ">
      <img
        className="snap-start rounded-xl border-black md:pt-1 md:w-40 md:h-24 sm:h-14 "
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