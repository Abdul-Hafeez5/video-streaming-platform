const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
import { IoMdHome } from "react-icons/io";
import { SiShortcut } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

export const YOUTUBE_VIOEOS_API =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=50&key=" +
  API_KEY;

// export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="`;
export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="`;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const buttonList = [
  "All",
  "Live",
  "Songs",
  "Recent",
  "Cricket",
  "News",
  "Cooking",
  "Computer",
  "Gaza",
  "JavaScript",
  "Mixes",
  "History",
  "Songs",
  "Recent",
  "Cricket",
  "Recent",
  "Cricket",
  "News",
  "Thrillers",
];

export const sideList = [
  { name: "Home", icon: IoMdHome, url: "/" },
  { name: "Shorts", icon: SiShortcut, url: "/" },
  { name: "Subscritions", icon: MdSubscriptions, url: "/" },
  { name: "Home", icon: IoMdHome, url: "/" },
  { name: "Shorts", icon: SiShortcut, url: "/" },
  { name: "Subscritions", icon: MdSubscriptions, url: "/" },
  { name: "Home", icon: IoMdHome, url: "/" },
  { name: "Shorts", icon: SiShortcut, url: "/" },
  { name: "Subscritions", icon: MdSubscriptions, url: "/" },
  { name: "Home", icon: IoMdHome, url: "/" },
  { name: "Shorts", icon: SiShortcut, url: "/" },
  { name: "Subscritions", icon: MdSubscriptions, url: "/" },
  { name: "Home", icon: IoMdHome, url: "/" },
  { name: "Shorts", icon: SiShortcut, url: "/" },
  { name: "Subscritions", icon: MdSubscriptions, url: "/" },
  { name: "Home", icon: IoMdHome, url: "/" },
  { name: "Shorts", icon: SiShortcut, url: "/" },
  { name: "Subscritions", icon: MdSubscriptions, url: "/" },
  { name: "Home", icon: IoMdHome, url: "/" },
  { name: "Shorts", icon: SiShortcut, url: "/" },
  { name: "Subscritions", icon: MdSubscriptions, url: "/" },
  { name: "Home", icon: IoMdHome, url: "/" },
  { name: "Shorts", icon: SiShortcut, url: "/" },
  { name: "Subscritions", icon: MdSubscriptions, url: "/" },
];
export const LIVE_CHAT_COUNT = 50;

export const commentData = [
  {
    name: "Abdul Hafeez",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla quaerat harum",
    replies: [
      {
        name: "Abdul Hafeez",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla quaerat harum",
        replies: [
          {
            name: "Abdul Hafeez",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla quaerat harum",
            replies: [
              {
                name: "Abdul Hafeez",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla quaerat harum",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Abdul Hafeez",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla quaerat harum",
        replies: [],
      },
      {
        name: "Abdul Hafeez",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla quaerat harum",
        replies: [],
      },
      {
        name: "Abdul Hafeez",
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla quaerat harum",
        replies: [
          {
            name: "Abdul Hafeez",
            comment:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla quaerat harum",
            replies: [
              {
                name: "Abdul Hafeez",
                comment:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla quaerat harum",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
