import React from 'react'


const SideVideoCard = ({info}) => {
  return (
    <div className=" bg-white md:p-4 md:w-[460px] shadow md:h-28 overflow-hidden hover:scale-90  hover:bg-slate-100 border-black flex sm:h-10 sm:w-14 ">
      <img
        className="snap-start rounded-xl border-black md:pt-1.5 md:w-40 md:h-24 sm: h-14 "
        alt="thumbnail-img"
        src={info?.snippet?.thumbnails?.medium?.url}
      />
      <ul>
        <li className="py-2 pl-2">{info?.snippet?.title}</li>
      </ul>
    </div>
  );
}
export default SideVideoCard;