import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./apiSlice";
import authReducer from "../helpers/auth/authSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import locationReducer from "../helpers/location/locationSlice";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
};
const reducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer); // create a persisted reducer

const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //     auth : authSlice
  // }
});
const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     location: locationReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(apiSlice.middleware),
//   devTools: true,
// });
export { store, persistor };
