import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Live from "./Live";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  const istLiveOpen = useSelector((store)=>store?.app?.isLiveOpen);
  const isSportOpen = useSelector((store)=>store?.app?.isSportOpen);
  const isTechOpen = useSelector((store)=>store?.app?.isTechOpen);
  // early return
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg p-2 mx-2 w-48">
      <ul>
        <li className="hover:font-bold"> <Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li className="hover:text-red-400"><Link to="/live">Live</Link></li>
      </ul>
      <h1 className="pt-4 font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li><Link to='/sport'>Sports</Link></li>
        <li><Link to='/tech'>Technology</Link></li>
        <li>Gaming</li>
        <li>News</li>
      </ul>

      <h2 className="pt-4 font-bold">Explore</h2>
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
  );
};

export default Sidebar;
