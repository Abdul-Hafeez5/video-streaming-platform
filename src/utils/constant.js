const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_VIOEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PK&key=" +
  API_KEY;
