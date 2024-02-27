import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const WatchPage = ({info}) => {
  const disapatch = useDispatch();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));
  console.log(searchParams.get("title"));
  useEffect(() => {
    disapatch(closeMenu());
  }, []);

  return (
    <div>
      <div className="px-5  ">
        <iframe
          className="rounded-lg"
          width="900"
          height="450"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title={"https://www.youtube.com/embed/" + searchParams.get("title")}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        {/* <h1>{info.title}</h1> */}

      </div>
    </div>
  );
};

export default WatchPage;
