// import React, { useEffect, useState } from "react";
// import {
//   HAMBURGER_LOGO_URL,
//   USER_ICON_IMG_URL,
//   YOUTUBE_LOGO,
//   YOUTUBE_SEARCH_API,
// } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleMenu } from "../utils/appSlice";
// import { chacheResults } from "../utils/searchSlice";


// const Head = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowsuggestions] = useState(false);

//   const dispatch = useDispatch();
//   const searchCache = useSelector((store) => store.search);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchCache[searchQuery]) {
//         setSuggestions(searchCache[searchQuery]);
//       } else {
//         getSearchSuggestions();
//       }
//     }, 200);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchQuery]);

//   const getSearchSuggestions = async () => {
//     console.log("api call - " + searchQuery);
//     const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery);
//     const json = await data.json();
//     console.log(json[1]);
//     setSuggestions(json[1]);
//     dispatch(
//       chacheResults({
//         [searchQuery]: [json[1]],
//       })
//     );
//   };

//   const toggleMenuHandler = () => {
//     dispatch(toggleMenu());
//   };

//   return (
//     <div className="grid grid-flow-col p-5 m-2 shadow-lg">
//       <div className="flex col-span-1">
//         <img
//           onClick={() => toggleMenuHandler()}
//           className="h-8 cursor-pointer"
//           alt="logo"
//           src={HAMBURGER_LOGO_URL}
//         />
//         <a href="/">
//           <img
//             className="h-11 mx-2 ml-5"
//             alt="youtube-logo"
//             src={YOUTUBE_LOGO}
//           />
//         </a>
//       </div>

//       <div className="col-span-10 px-10">
//         <input
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e?.target?.value)}
//           onFocus={() => setShowsuggestions(true)}
//           onBlur={() => setShowsuggestions(false)}
//           className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          
//           type="text"
//         ></input>
//         <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
//           Search
//         </button>
//       </div>
//       {showSuggestions && (
//         <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100" >
//           <ul>
//             {suggestions &&
//               suggestions.map((s) => (
//                 <li key={s} className="px-3  py-2 shadow hover:bg-gray-100">
//                   🔍 {s}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       )}

//       <div className="col-span-1">
//         <img className="h-8" alt="user-icon" src={USER_ICON_IMG_URL} />
//       </div>
//     </div>
//   );
// };

// export default Head;

// // w-1/2 shadow text-center border py-1.5 border-gray-700 rounded-l-full
// //  pl-1 border px-2 border-gray-700 py-1.5 rounded-r-full bg-gray-200
// // rounded-lg shadow border  my-7 w-[37rem] bg-white ml-[28.5%]  




import React, { useEffect, useState } from "react";
import {
  HAMBURGER_LOGO_URL,
  USER_ICON_IMG_URL,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { chacheResults } from "../utils/searchSlice";

// Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const debouncedSearch = debounce(getSearchSuggestions, 200);
    debouncedSearch();
    return () => {
      clearTimeout(debouncedSearch);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    console.log("api call - " + searchQuery);
    try {
      const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery);
      const json = await data.json();
      console.log(json[1]);
      setSuggestions(json[1]);
      dispatch(
        chacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="md:grid grid-flow-col md:p-5 m-2 shadow-lg sm: ">
      <div className="flex col-span-1 ">
        <img
          onClick={toggleMenuHandler}
          className="md:h-8 cursor-pointer sm: h-6"
          alt="logo"
          src={HAMBURGER_LOGO_URL}
        />
        <a href="/">
          <img
            className="md:h-11 md:mx-2 md:ml-5 sm: h-6 pl-4 "
            alt="youtube-logo"
            src={YOUTUBE_LOGO}
          />
        </a>
      </div>

      <div className="md:col-span-10 px-10 sm:w-28">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className="px-5 md:w-1/2 border border-gray-400 md:p-2 rounded-l-full  sm:w-10 sm:pt-6 "
          type="text"
        />
        <button className="border border-gray-400 md:px-5 md:py-2 rounded-r-full bg-gray-100 sm:pt-6">
          Search
        </button>
      </div>
      {showSuggestions && (
        <div className="absolute md:mx-64 bg-white md:my-12 px-2 md:w-[33rem] h-60 overflow-hidden shadow-lg rounded-lg border border-gray-100 sm: w-56 mx-10">
          <ul>
            {suggestions &&
              suggestions.map((suggestion) => (
                <li key={suggestion} className="md:px-3 md:py-2 shadow hover:bg-gray-100">
                  🔍 {suggestion}
                </li>
              ))}
          </ul>
        </div>
      )}

      <div className="md:col-span-1 sm: ">
        <img className="md:h-8 sm:pr-12  sm: h-6 pl-80 mt-0 " alt="user-icon" src={USER_ICON_IMG_URL} />
      </div>
    </div>
  );
};

export default Head;
