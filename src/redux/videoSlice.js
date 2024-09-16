import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  YOUTUBE_VIOEOS_API,
  API_KEY,
  SEARCH_API_PART_1,
  SEARCH_API_PART_2,
} from "../utils/constant";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async ({ query = "", pageToken }, { rejectWithValue }) => {
    let url;
    if (query) {
      url = `${SEARCH_API_PART_1}${query}${SEARCH_API_PART_2}${
        pageToken || ""
      }&key=${API_KEY}`;
    } else {
      url = `${YOUTUBE_VIOEOS_API}&pageToken=${pageToken || ""}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
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
    nextPageToken: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
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
export default videoSlice.reducer;
