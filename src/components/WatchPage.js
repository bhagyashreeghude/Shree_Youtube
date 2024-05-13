import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import BottomCommentSection from "./BottomCommentSection.js";
import CommentContainer from "./CommentContainer";
import SideViedoContainer from "../components/sideVide/SideViedoContainer.js";

const WatchPage = ({ info }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // console.log("Video ID:", searchParams.get("v"));
  // console.log("Video Title:", searchParams.get("title"));
  const title = searchParams.get("title");

  // console.log("id", searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="flex  flex-col sm:flex-row md:flex-row w-full
       mt-0 md:pl-12   sm:mt-2 sm:ml-4 sm:h-10 sm:w-10  ">
        <div className="px-5  ">
          <div className="flex">
            <iframe
              className="rounded-lg sm:w-[700px] sm:h-[150px] md:h-[450px] md:w-[900px] sm:flex w-96 h-"
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
          </div>
          <BottomCommentSection />
          <CommentContainer />
        </div>
        <div>
          <div className="">
            <SideViedoContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
