import { createSlice } from "@reduxjs/toolkit";

const vendorAuthSlice = createSlice({
      name: "vendorAuth",
      initialState: { user: null, token: null, type: null },
      reducers: {
            setUserData: (state, action) => {
                  state.user = { ...state.user, ...action.payload };
            },
            setCredentials: (state, action) => {
                  const { user, accessToken, userType } = action.payload;
                  state.user = user;
                  state.token = accessToken;
                  state.type = userType;
            },
            logOut: (state, action) => {
                  state.user = null;
                  state.token = null;
                  state.type = null;
            },
      },
});

export const { setCredentials, logOut, setUserData } = vendorAuthSlice.actions;

export default vendorAuthSlice.reducer;
export const selectCurrentUserType = (state) => state.vendorAuth.type;
export const selectCurrentUser = (state) => state.vendorAuth.user;
export const selectCurrentToken = (state) => state.vendorAuth.token;
