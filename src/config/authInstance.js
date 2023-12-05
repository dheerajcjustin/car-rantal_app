import axios from "axios";
import { logOut } from "../helpers/auth/authSlice";
import { setLoading } from "../helpers/loading/loadingSlice";
// import { useSelector } from "react-redux";
// import { selectCurrentToken } from "../helpers/auth/authSlice";
import { store } from "./store";

// const token = useSelector(selectCurrentToken);
const authInstance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
            "Access-Control-Allow-Origin": "*",
      },
});

authInstance.interceptors.request.use((config) => {
      const token = store.getState()?.auth?.token;
      config.headers.Authorization = `Bearer ${token}`;
      // console.log("intereptotz")
      store.dispatch(setLoading({ loading: true }));
      return config;
});
authInstance.interceptors.response.use(
      (response) => {
            store.dispatch(setLoading({ loading: false }));
            return response;
      },
      (error) => {
            if (
                  error?.response?.status === 403 ||
                  error?.response?.status === 401
            ) {
                  store.dispatch(logOut());
            } else {
                  return Promise.reject(error);
            }
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
      },
);
export default authInstance;
export const fetcher = (url) => authInstance.get(url).then((res) => res.data);
