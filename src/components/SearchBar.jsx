// import { useDispatch, useSelector } from "react-redux";

// import { useEffect, useState } from "react";
// import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
// import { cacheResults } from "../redux/searchSlice";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  //   const [SearchQuery, setSearchQuery] = useState("");
  //   const [suggestions, setSuggestion] = useState([]);
  //   const [showSuggestion, setShowSuggestion] = useState(false);

  //   const dispatch = useDispatch();

  //   const searchCache = useSelector((store) => store.search);
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       if (searchCache[SearchQuery]) {
  //         setSuggestion(searchCache[SearchQuery]);
  //       } else {
  //         getSearchSuggestions();
  //       }
  //     }, 200);

  //     // debouncing concept it will call after only 200 miliseconds
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [SearchQuery]);

  //   const getSearchSuggestions = async () => {
  //     try {
  //       const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + SearchQuery);
  //       if (!data.ok) {
  //         throw new Error(`http error status: ${data.status}`);
  //       }
  //       const jsonData = await data.json();
  //       console.log(jsonData);
  //       // setSuggestion(jsonData[1]);

  //       // dispatch an action to update the cache
  //       dispatch(
  //         cacheResults({
  //           [SearchQuery]: jsonData[1],
  //         })
  //       );
  //     } catch (error) {
  //       console.log("Error fetching data" + error);
  //     }
  //   };

  return (
    <div className="flex-1 flex items-center bg-gray-100 py-2 px-3 border border-gray-300 rounded-full w-full max-w-lg">
      <CiSearch />
      <input
        type="text"
        className="flex-grow px-4 focus:outline-none bg-transparent"
        placeholder="Search"
        // value={SearchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
        // onFocus={() => setShowSuggestion(true)}
        // onBlur={() => setShowSuggestion(false)}
      />
      <CiSearch  className="w-6  h-6 "/>
    </div>
  );
};

export default SearchBar;
