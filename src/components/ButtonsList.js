import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
const ButtonsList = () => {

  return (
    <div className=" flex ">
      {/* <Button name="All" ><Link to="/live">Live</Link></Button>
      <Button name="Sports" ><Link to="/live">Live</Link></Button>
      <Button name="Technology"><Link to="/live">Live</Link></Button>
      <Button name="Live"  ><Link to="/live">Live</Link></Button> */}

      <button className=" md:p-1.5 m-1 md:pr-20 md:pl-20 text-center bg-gray-200 rounded-lg  sm: p-2">All</button>
      <button className="md:p-1.5 m-1 md:pr-20  md:pl-20 bg-gray-200 rounded-lg sm: p-2 "><Link to="/live">Sport</Link></button>
      <button className="md:p-1.5 m-1 md:pr-20 md:pl-20 bg-gray-200 rounded-lg sm: p-2 "><Link to="/live">Technology</Link></button>
      <button className="md:p-1.5 m-1 md:pr-20  md:pl-20 bg-gray-200 rounded-lg sm: p-2"><Link to="/live">Live</Link></button>
      {/* <button className=""></button> */}
    </div>
  );
};

export default ButtonsList;
