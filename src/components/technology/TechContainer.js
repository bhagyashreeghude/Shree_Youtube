import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TechCard from "./TechCard";
import { TECHNOLOGY_API } from "../../utils/constants";


const TechContainer  = ({info}) => {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async()=>{
    const data = await fetch(TECHNOLOGY_API+process.env.REACT_APP_KEY2)
    const json= await data.json()
    console.log(json.items)
    setTech(json.items)
  }
  return (
    <div className="flex flex-wrap ">
      {/* <SportCard info={sport[0]}/> */}
    {tech&&tech.map((technique) => (
      <Link key={technique.id} to={"/watch?v=" + technique?.id?.videoId}>
        <TechCard  info={technique} />
      </Link>
    ))}
  </div>
  );
};



export default TechContainer

