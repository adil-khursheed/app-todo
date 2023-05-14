import { configureStore } from "@reduxjs/toolkit";
import { messageReducer, userReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});

export default store;

export const server = "https://apitodo-eight.vercel.app/api/v1";
