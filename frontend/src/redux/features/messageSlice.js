import { createSlice } from "@reduxjs/toolkit";

const inititalState = { message: "" };

const messageSlice = createSlice({
  name: "message",
  initialState: inititalState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    clearMessage(state, action) {
      state.message = "";
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
