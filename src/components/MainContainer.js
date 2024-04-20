import React from 'react'
import ButtonsList from './ButtonsList';
import VideoContainer from "./VideoContainer";
import SideViedoContainer from './sideVide/SideViedoContainer';

const MainContainer = () => {
  return (
    <div className='sm:w-full md:w-full h-auto '>
      <ButtonsList/>
      <VideoContainer />
      
     
      
    </div>
  )
}

export default MainContainer