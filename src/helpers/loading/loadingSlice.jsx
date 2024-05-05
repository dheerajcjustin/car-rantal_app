import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
      name: "loading",
      initialState: { loading: false },
      reducers: {
            setLoading: (state, action) => {
                  const { loading } = action.payload;

                  state.loading = loading;
            },
      },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
export const selectLoadingState = (state) => state.loading;
