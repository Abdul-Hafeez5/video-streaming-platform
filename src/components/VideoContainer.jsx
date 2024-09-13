import { useEffect } from "react";
import VideoCard from "./VideoCard";
// import { YOUTUBE_VIOEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../redux/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const {
    videos = [],
    nextPageToken,
    searchQuery,
    loading,
  } = useSelector((store) => store.videos);
  // console.log(videos);
  useEffect(() => {
    dispatch(
      fetchVideos({ searchQuery: searchQuery || "", nextPageToken: null })
    );
  }, [dispatch, searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200
      ) {
        if (nextPageToken && !loading) {
          dispatch(
            fetchVideos({ query: searchQuery, pageToken: nextPageToken })
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, nextPageToken, searchQuery, loading]);

  if (loading) return <div>Loading ...</div>;

  return (
    <div className="flex items-center justify-center h-screen gap-x-2  w-full flex-wrap gap-y-4  pt-16  ">
      {videos.length === 0 && !loading && <p>No videos found</p>}
      {videos.map((video, index) => (
        <Link to={`/watch?v=${video.id}`} key={video.id + index}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
