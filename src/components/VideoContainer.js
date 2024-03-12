import React, { useEffect, useState } from "react";
import { POPULAR_URL, YOUTUBE_API3 } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const VideoContainer = ({info}) => {
  const [videos, setVideos] = useState([]);
    
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(POPULAR_URL+process.env.REACT_APP_KEY2);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap ">
      {videos&&videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
