import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import videoSlice from "./videoSlice";
const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice,
    search: searchSlice,
    liveComments: chatSlice,
    videos: videoSlice,
  },
});

export default store;
