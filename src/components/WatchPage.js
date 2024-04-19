import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import BottomCommentSection from "./BottomCommentSection.js";
import CommentContainer from "./CommentContainer";
import SideViedoContainer from "../components/sideVide/SideViedoContainer.js"

const WatchPage = ({ info }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log("Video ID:", searchParams.get("v"));
console.log("Video Title:", searchParams.get("title"));


  // console.log("id", searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="flex mt-0 md:pl-12  sm:w-24 sm:mt-2 sm:ml-4 justify-center ">
        <div className="px-5 flex ">
          <div className="">
            <iframe
              className="rounded-lg sm:w-[700px] sm:h-[300px] md:h-[450px] md:w-[900px]"
              // width="900 sm: w-[25]"
              // height="450 sm: h-[20]"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title={
                "https://www.youtube.com/embed/" + searchParams.get("title")
              }
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            
            <BottomCommentSection />
            <CommentContainer />
            
          </div>
          <div>
            {/* <SideViedoContainer/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
