import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIOEOS_API } from "../utils/constant";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIOEOS_API);
    const jsonResult = await data.json();
    // console.log(jsonResult);
    setVideos(jsonResult.items);
  };

  return (
    <div className="flex items-center justify-center h-screen gap-x-2  w-full flex-wrap gap-y-4  pt-16  ">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
