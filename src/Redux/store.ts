import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./Slices/authenticateSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticateReducer,
  },
});
