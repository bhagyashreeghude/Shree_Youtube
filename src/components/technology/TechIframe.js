import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TechOpen from "../../utils/appSlice"
import { useSearchParams } from "react-router-dom";

const TechIframe = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log("Video ID:", searchParams.get("v"));
  console.log("Video Title:", searchParams.get("title"));

  // console.log("id", searchParams.get("v"));

  useEffect(() => {
    dispatch(TechOpen());
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row mt-0 md:pl-12  sm:w-6 sm:mt-2 sm:ml-4 sm:h-7 ">
        <div className="px-5 flex ">
          <div className="">
            <iframe
              className="rounded-lg sm:w-[5px] sm:h-[150px] md:h-[450px] md:w-[900px] sm:flex"
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
        </div>
      </div>
    </>
  );
};

export default TechIframe;
