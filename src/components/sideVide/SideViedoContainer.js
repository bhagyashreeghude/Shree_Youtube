import React, { useEffect, useState } from 'react'
import { POPULAR_URL } from '../../utils/constants';
import SideVideoCard from './SideVideoCard';
import { Link } from 'react-router-dom';
const SideViedoContainer = () => {
  const [videos,setVideos] = useState([])

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async()=>{
    const data = await fetch(POPULAR_URL+process.env.REACT_APP_KEY2)
    const json = await data.json()
    setVideos(json.items)
  }

  return (
    <div>
      {videos && videos.map((video)=>(
        <Link key={video.id} to={"/watch?v="+ video.id}><SideVideoCard info={video}/></Link>
      ))}

    </div>
  )
}

export default SideViedoContainer