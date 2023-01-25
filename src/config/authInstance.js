import axios from "axios";
import { logOut } from "../helpers/auth/authSlice";
// import { useSelector } from "react-redux";
// import { selectCurrentToken } from "../helpers/auth/authSlice";
import { store } from "./store";

// const token = useSelector(selectCurrentToken);
const authInstance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

authInstance.interceptors.request.use((config) => {
  const token = store.getState()?.auth?.token;
  console.log("sote get Stateis ", token);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error occuraced in ");
    if (error.response.status === 403 || error.response.status === 401) {
      console.log("logout have to tiger");
      store.dispatch(logOut());
    } else {
      return Promise.reject(error);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
  }
);
export default authInstance;
