import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
      name: "loading",
      initialState: { loading: false },
      reducers: {
            setLoading: (state, action) => {
                  console.log("hai inside the state a", state);
                  const { loading } = action.payload;
                  console.log("hai inside the state a", loading);

                  state.loading = loading;
            },
      },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
export const selectLoadingState = (state) => state.loading;
