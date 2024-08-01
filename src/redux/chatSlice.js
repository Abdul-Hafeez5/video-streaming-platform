import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "liveComments",
  initialState: {
    messages: [],
  },
  reducers: {
    addComments: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { addComments } = chatSlice.actions;
export default chatSlice.reducer;
