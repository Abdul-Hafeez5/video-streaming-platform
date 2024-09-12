import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { YOUTUBE_VIOEOS_API } from "../utils/constant";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (query, { getState }) => {
    const videos = getState();
    const nextPageToken = videos.nextPageToken || "";
    const searchUrl = query ? 
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=10&key=${API_KEY}                     `
    );
    const data = await response.json();
    return data.items;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: { videos: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.videos = action.payload;
        state.loading = false;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default videoSlice.reducer;
