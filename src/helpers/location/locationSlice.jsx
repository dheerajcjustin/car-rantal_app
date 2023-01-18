import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const getLocation = createAsyncThunk("home/getLocation", async () => {
  const response = await axios.get();
  return response.data;
});
const locationSlice = createSlice({
  name: "location",
  initialState: {
    locationData: [],
    loading: false,
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
});

export default locationSlice.reducer;

export const selectLocation = (state) => {
  console.log(state);
  return state.location.locationData;
};
