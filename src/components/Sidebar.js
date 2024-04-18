import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgLivePhoto } from "react-icons/cg";
import Live from "./Live/Live";
import { IoHome } from "react-icons/io5";
import { FcSportsMode } from "react-icons/fc";
import { RiComputerFill } from "react-icons/ri";
import { HiTrophy } from "react-icons/hi2";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  // const istLiveOpen = useSelector((store)=>store?.app?.isLiveOpen);
  // const isSportOpen = useSelector((store)=>store?.app?.isSportOpen);
  // const isTechOpen = useSelector((store)=>store?.app?.isTechOpen);
  // early return
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg mx-2 p-2 w-48">
      <ul>
        <li className=" md:p-4  shadow-lg hover:text-red-400"> <Link to="/"><IoHome className="sm: h-8 pl-1 pb-2" size={45}/></Link></li>
        <li className="  md:p-4  shadow-lg hover:text-red-400"><Link to="/live"><CgLivePhoto className="sm: h-8 pl-1 mt-2 pb-2" size={45}/></Link></li>
        <li className= "  md:p-4 shadow-lg hover:text-red-400"><Link to='/sport'><HiTrophy className="sm: h-8 pl-1 mt-2 " size={45}/></Link></li>
        <li className=" md:p-4 shadow-lg hover:text-red-400"><Link to='/tech'><RiComputerFill className="sm: h-8 pl-1 mt-2 " size={45}/></Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
