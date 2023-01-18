import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, type: null },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, userType } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.type = userType;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("user", user);
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentUserType = (state) => state.auth.type;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
