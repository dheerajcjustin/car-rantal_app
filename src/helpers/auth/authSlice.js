import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
      name: "auth",
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
                  localStorage.setItem("token", accessToken);
                  localStorage.setItem("user", user);
            },
            logOut: (state, action) => {
                  state.user = null;
                  state.token = null;
                  state.type = null;
                  console.log("wow the logout is working froem the redux");
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
            },
      },
});

export const { setCredentials, logOut, setUserData } = authSlice.actions;

export default authSlice.reducer;
export const selectCurrentUserType = (state) => state.auth.type;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
