const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_VIOEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PK&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// H  G

// "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=Pakistan&key=" +API_KEY;
