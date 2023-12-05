import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
      name: "car",
      initialState: { car: {}, time: {} },
      reducers: {
            setCarData: (state, action) => {
                  // console.log(
                  //   "wwowo inside the set car data and the payload is ",
                  //   action.payload
                  // );
                  const { car, time } = action.payload;
                  state.car = car;
                  state.time = time;
            },
      },
});

export const { setCarData } = carSlice.actions;

export default carSlice.reducer;
export const selectCurrentCar = (state) => state.car.car;
export const selectCarBookingTime = (state) => state.car.time;
