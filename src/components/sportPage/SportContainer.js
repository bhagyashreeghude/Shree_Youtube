import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SportCard from "./SportCard";
import { SPORT_API } from "../../utils/constants";


const SportContainer = ({info}) => {
  const [sport, setSport] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async()=>{
    const data = await fetch(SPORT_API+process.env.REACT_APP_KEY2)
    const json= await data.json()
    // console.log(json.items)
    setSport(json.items)
  }
  return (
    <div className="flex flex-wrap ">
      {/* <SportCard info={sport[0]}/> */}
    {sport&&sport.map((sports) => (
      <Link key={sports.id} to={"/watch?v=" + sports.id}>
        <SportCard  info={sports} />
      </Link>
    ))}
  </div>
  );
};

export default SportContainer