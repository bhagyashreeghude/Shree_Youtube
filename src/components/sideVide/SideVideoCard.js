import React from 'react'


const SideVideoCard = ({info}) => {
  return (
    <div className="bg-gray-200 p-4 w-[460px] shadow h-28 overflow-hidden hover:scale-110 border-black flex">
      <img
        className="rounded-xl border-black pt-1.5 w-40 h-24"
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