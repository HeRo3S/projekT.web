import { createSlice } from "@reduxjs/toolkit";
import { SEVERITY } from "../../utils/enum";

const inititalState = { message: "", severity: SEVERITY.INFO };

const messageSlice = createSlice({
  name: "message",
  initialState: inititalState,
  reducers: {
    setMessage(state, action) {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    clearMessage(state, action) {
      state.message = "";
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
