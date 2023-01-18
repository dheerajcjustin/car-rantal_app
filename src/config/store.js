import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import authReducer from "../helpers/auth/authSlice";
import locationReducer from "../helpers/location/locationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
