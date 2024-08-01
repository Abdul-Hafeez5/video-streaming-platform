import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constant";

const chatSlice = createSlice({
  name: "liveComments",
  initialState: {
    messages: [],
  },
  reducers: {
    addComments: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addComments } = chatSlice.actions;
export default chatSlice.reducer;
