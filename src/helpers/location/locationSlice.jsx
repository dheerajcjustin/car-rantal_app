import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const getLocation = createAsyncThunk("/setup", async () => {

  const response = await axios.get("/setup");
  console.log("hoeme is location thanku", response.data);
  return response.data;


});
const locationSlice = createSlice({
  name: "location",
  initialState: {
    locationData: [],
    loading: false,
    currentLocation: { locationId: "", title: "" },
  },
  reducers: {
    setCurrentLocation: (state, action) => {
      const { locationId, title } = action.payload;
      console.log("location id i nreduc", locationId);
      state.currentLocation = { locationId, title };
    },
  },

  extraReducers: {
    [getLocation.pending]: (state, action) => {
      state.loading = true;
    },
    [getLocation.fulfilled]: (state, action) => {
      console.log("wow get location is working");
      state.locationData = action.payload;
      state.loading = false;
    },
    [getLocation.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  // },
});

export default locationSlice.reducer;
export const { setCurrentLocation } = locationSlice.actions;

export const selectLocation = (state) => {
  console.log(state);
  return state.location.locationData;
};
export const selectCurrentLocation = (state) => state.location.currentLocation;
