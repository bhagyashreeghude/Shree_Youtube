import React from "react";
import LiveChat from "./LiveChat";
import WatchPage from "../WatchPage";


const WatchPageOther = () => {
  return (
    <>
      <div className=" ml-1  sm:ml-0 md:flex">
        <WatchPage />
        <LiveChat />
      </div>
      
    
    </>
  );
};

export default WatchPageOther;
