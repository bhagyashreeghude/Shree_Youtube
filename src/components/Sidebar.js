import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgLivePhoto } from "react-icons/cg";
import Live from "./Live/Live";
import { IoHome } from "react-icons/io5";
import { FcSportsMode } from "react-icons/fc";
import { RiComputerFill } from "react-icons/ri";
import { HiTrophy } from "react-icons/hi2";
import { FaDownload } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  // const istLiveOpen = useSelector((store)=>store?.app?.isLiveOpen);
  // const isSportOpen = useSelector((store)=>store?.app?.isSportOpen);
  // const isTechOpen = useSelector((store)=>store?.app?.isTechOpen);
  // early return

  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg  md:w-60 p-2">
      <ul className="sm:pt-2 ">
        

        <li className="flex justify-center items-center space-x-1.5 p-3 shadow-lg hover:text-red-400">
          <IoHome className="ml-2 " size={35} />
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li className="flex justify-center items-center space-x-1.5 p-3   shadow-lg hover:text-red-400 ">
          <CgLivePhoto className=" " size={35} />
          <Link to="/live">
            <span>Live</span>
          </Link>
        </li>
        <li className=" flex justify-center items-center space-x-1.5 p-3 shadow-lg hover:text-red-400">
          <HiTrophy className="" size={35} />
          <Link to="/sport">
            <span>Sports</span>
          </Link>
        </li>
        <li className=" flex justify-center items-center space-x-1.5 p-3  shadow-lg hover:text-red-400">
          <RiComputerFill className="sm: h-8 ml-4 " size={35} />
          <Link to="/tech">
            <span className="pt-2">Technology</span>
          </Link>
        </li>
        <li className="flex justify-center items-center space-x-1.5 p-3 shadow-lg hover:text-red-400">
          <FaDownload className="sm: h-8 ml-4 " size={35} />
          <Link to="/downloads">
            <span>Downloads</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
