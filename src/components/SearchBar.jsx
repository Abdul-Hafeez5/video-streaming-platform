import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../redux/videoSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
import { cacheResults } from "../redux/searchSlice";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSuggestion(searchCache[searchInput]);
      } else if (searchInput.length > 0) {
        getSearchSuggestions();
      } else {
        setSuggestion([]);
      }
    }, 200);

    // debouncing concept it will call after only 200 miliseconds
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchInput);
      const jsonData = await data.json();
      setSuggestion(jsonData[1]);

      // dispatch an action to update the cache
      dispatch(
        cacheResults({
          [searchInput]: jsonData[1],
        })
      );
    } catch (error) {
      console.log("Error fetching data" + error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    dispatch(fetchVideos({ query: suggestion, pageToken: null }));
  };
  const handleSearch = () => {
    if (searchInput) {
      dispatch(fetchVideos({ query: searchInput, pageToken: null }));
    }
  };

  return (
    <div className="relative z-20 hidden sm:flex items-center w-full min-w-64 max-w-lg mr-2   py-2 px-2 border border-gray-300 rounded-full">
      <div className=" flex flex-1">
        <input
          type="text"
          className="flex-grow px-4 focus:outline-none bg-transparent"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <CiSearch className="w-6  h-6 cursor-pointer " onClick={handleSearch} />
      </div>
      {showSuggestion && suggestions.length > 0 && (
        <ul className="flex flex-col gap-y-3 bg-white shadow-md border absolute rounded-lg top-12 py-2 w-full">
          {suggestions.map((value) => (
            <li
              key={value}
              className=" rounded-lg px-3  hover:bg-gray-200 flex gap-x-4 items-center "
              onMouseDown={() => handleSuggestionClick(value)}
            >
              <CiSearch className="w-5  h-5  " />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
