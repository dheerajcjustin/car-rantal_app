import axios from "axios";
import { logOut } from "../helpers/auth/vendorAuthSlice";
// import { useSelector } from "react-redux";
// import { selectCurrentToken } from "../helpers/auth/authSlice";
import { store } from "./store";

// const token = useSelector(selectCurrentToken);
const vendorAxios = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
            "Access-Control-Allow-Origin": "*",
      },
});

vendorAxios.interceptors.request.use((config) => {
      const token = store.getState()?.vendorAuth?.token;
      config.headers.Authorization = `Bearer ${token}`;
      return config;
});
vendorAxios.interceptors.response.use(
      (response) => {
            return response;
      },
      (error) => {
            if (
                  error?.response?.status === 403 ||
                  error?.response?.status === 401
            ) {
                  vendorAuth.dispatch(logOut());
            } else {
                  return Promise.reject(error);
            }
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
      }
);
export default vendorAxios;
export const fetcher = (url) => vendorAxios.get(url).then((res) => res.data);
z;
