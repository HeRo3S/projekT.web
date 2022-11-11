import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import messageSlice from "./features/messageSlice";

const reducer = {
  auth: authSlice,
  message: messageSlice,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
