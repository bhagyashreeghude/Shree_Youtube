import React from 'react'

const SportCard = ({info}) => {
  return (
    <div className='pl-1'>
        <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.snippet?.publishedAt}-ago</li>
        <li>{info?.statistics?.viewCount}-views</li>
        </ul>

    </div>
  )
}

export default SportCard