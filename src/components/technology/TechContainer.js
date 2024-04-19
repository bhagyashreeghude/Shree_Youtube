import React, { useEffect, useState } from 'react'
import VideoCard from '../VideoCard'
import { POPULAR_URL } from '../../utils/constants';
import WatchPage from '../WatchPage';
import SideViedoContainer from '../sideVide/SideViedoContainer';

const TechContainer = () => {
const [techV,setTechV] = useState([])

useEffect(()=>{
    getVideos();
},[]);

const getVideos=async()=>{
    try {
        const data = await fetch(POPULAR_URL+ process.env.REACT_APP_KEY3);
        if (!data.ok) {
          throw new Error('Failed to fetch technology videos');
        }
        const json = await data.json();
        // console.log(json);
        setTechV(json.items);
      } catch (error) {
        // console.error('Error fetching technology videos:', error);
      }
    }
    return (
      <div className='md:flex '>
          <WatchPage/>
          <SideViedoContainer/>
      </div>
      )
}

export default TechContainer

