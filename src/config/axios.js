import axios from "axios";
// import { useSelector } from "react-redux";
// import { selectCurrentToken } from "../helpers/auth/authSlice";
// import { store } from "./store";

// const token = useSelector(selectCurrentToken);
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// axiosInstance.interceptors.request.use((config) => {
//   // const token = store.getState();
//   console.log("sote get Stateis ", token);
//   // config.headers['Authorization']
// });

export default instance;
