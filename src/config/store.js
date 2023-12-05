import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "../helpers/auth/authSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import loadingReducer from "../helpers/loading/loadingSlice";
import locationReducer from "../helpers/location/locationSlice";
import vendorAuthReducer from "../helpers/auth/vendorAuthSlice";
import carReducer from "../helpers/car/carSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
const customMiddleware = getDefaultMiddleware({
      serializableCheck: false,
});
const persistConfig = {
      // configuration object for redux-persist
      key: "root",
      storage, // define which storage to use
};
const reducer = combineReducers({
      auth: authReducer,
      vendorAuth: vendorAuthReducer,
      location: locationReducer,
      car: carReducer,
      loading: loadingReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer); // create a persisted reducer

const store = configureStore({
      reducer: persistedReducer,
      middleware: customMiddleware,
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
