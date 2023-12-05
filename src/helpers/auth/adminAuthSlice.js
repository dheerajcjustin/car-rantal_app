import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
    name: "adminAuth",
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

export const { setCredentials, logOut, setUserData } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
export const selectCurrentUserType = (state) => state.adminAuth.type;
export const selectCurrentUser = (state) => state.adminAuth.user;
export const selectCurrentToken = (state) => state.adminAuth.token;
