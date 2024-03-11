import React from "react";
import LiveChat from "./LiveChat";
import WatchPage from "./WatchPage";
import SearchSuggestionVideo from "./SearchSuggestionVideo";

const WatchPageOther = () => {
  return (
    <>
      <div className="flex ml-1">
        <WatchPage />
        <LiveChat />
      </div>
      
    
    </>
  );
};

export default WatchPageOther;
