import React from "react";
import SearchSuggestionVideo from "./SearchSuggestionVideo";
import WatchPage from "./WatchPage";

const WatchPage2 = () => {
  return (
    <div>

      <WatchPage/>
      
      <div className="ml-4 h-24 w-80">
            <SearchSuggestionVideo/>
            
          </div>
    </div>
  );
};

export default WatchPage2;
