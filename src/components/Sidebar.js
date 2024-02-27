import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store?.app?.isMenuOpen)

  if(!isMenuOpen) return null;
  return (
    <div className='shadow-lg p-2 mx-2 w-48'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='pt-4 font-bold'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>News</li>
      </ul>

      <h2 className='pt-4 font-bold'>Explore</h2>
      <ul>
      <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
     
       
    </div>
  )
}

export default Sidebar