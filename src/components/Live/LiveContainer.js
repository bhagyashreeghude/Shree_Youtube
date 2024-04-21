import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LIVE_STREAMING_API,} from "../../utils/constants";
import LiveCard from "./LiveCard";

const LiveContainer = ({ info }) => {
  const [live, setLive] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(LIVE_STREAMING_API + process.env.REACT_APP_KEY2);
    const json = await data.json();
    console.log(json?.items?.id);
    // console.log(json?.id?.videoid)
    setLive(json.items);
  };
  return (
    <div className="flex flex-wrap ">
      {/* <SportCard info={sport[0]}/> */}
      {live &&
        live.map((stream) => (
          <Link key={stream.id} to={"/watch?v=" + stream?.id?.videoId}>
            <LiveCard info={stream} />
          </Link>
        ))}
    </div>
  );
}
export default LiveContainer;
