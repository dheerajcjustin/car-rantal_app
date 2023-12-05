import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../helpers/auth/authSlice";
const baseQuery = fetchBaseQuery({
      baseUrl: "http://localhost:5000",
      credentials: "include",
      prepareHeaders: (headers, { getState }) => {
            let token = getState().auth.token;
            if (!token) {
                  console.log("sending header ");
                  token = localStorage.getItem("token");
            }

            if (token) {
                  headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
      },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
      let result = await baseQuery(args, api, extraOptions);

      if (result?.error?.originalStatus === 403 || 401) {
            console.log("sending erroe token not provided token");
            // send refresh token to get new access token
            api.dispatch(logOut());
      } else {
            const token = localStorage.getItem("token");
            const user = localStorage.getItem("user");
            api.dispatch(setCredentials({ token, user }));
      }

      return result;
};
export const apiSlice = createApi({
      baseQuery: baseQueryWithReauth,
      endpoints: (builder) => ({}),
});
