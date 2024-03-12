import React, { useEffect, useState } from "react";
import { SPORT_URL, TECHNOLOGY_API_URL } from "../../utils/constants";
import Sport  from"./Sport";
import { Link } from "react-router-dom";
import SportCard from "./SportCard";
const SportContainer = ({video}) => {
  const [sport, setSport] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async()=>{
    const data = await fetch(TECHNOLOGY_API_URL+process.env.REACT_APP_YOUTUBE_API_KEY)
    const json= await data.json()
    console.log(json)
    setSport(json.items)
  }
  return (
    <div className="flex flex-wrap ">
    {sport&&sport.map((sports) => (
      <Link key={sports.id} to={"/sports?v=" + sports.id}>
        <SportCard  info={sports} />
      </Link>
    ))}
  </div>
  );
};

export default SportContainer;
