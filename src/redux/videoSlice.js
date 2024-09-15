import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_VIOEOS_API } from "../utils/constant";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ query, pageToken }, { rejectWithValue }) => {
    let url;
    if (query) {
      // url = `${YOUTUBE_SEARCH_API}${query}&pageToken=${pageToken || ""}`;
      // url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=50&pageToken=${
      //   pageToken || ""
      // }&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
      url = `${YOUTUBE_VIOEOS_API}&pageToken=${pageToken || ""}`;
    } else {
      url = `${YOUTUBE_VIOEOS_API}&pageToken=${pageToken || ""}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    loading: false,
    searchQuery: "",
    nextPageToken: null,
    error: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.videos = []; // reset videos on new search
      state.nextPageToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        console.log("action paylload", action.payload.items);
        const items = action.payload.items || [];
        if (Array.isArray(items)) {
          state.videos = [...state.videos, ...items];
        } else {
          console.error("Expected items to be an array but got:", items);
        }
        state.loading = false;
        state.nextPageToken = action.payload.nextPageToken;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { setSearchQuery } = videoSlice.actions;
export default videoSlice.reducer;
