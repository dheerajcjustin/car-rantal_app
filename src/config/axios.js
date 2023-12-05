import axios from "axios";
// import { useSelector } from "react-redux";
// import { selectCurrentToken } from "../helpers/auth/authSlice";
// import { store } from "./store";
import { setLoading } from "../helpers/loading/loadingSlice";
import { store } from "./store";

// const token = useSelector(selectCurrentToken);
const instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
            "Access-Control-Allow-Origin": "*",
      },
});

instance.interceptors.request.use((config) => {
      store.dispatch(setLoading(true));
      console.log("the interceptotrs");
      return config;
});
// instance.interceptors.response.use(
//   (response) => {
//     store.dispatch(setLoading(false))
//     return response;
//   },
//   (error) => {
//     console.log("eeoeoe inside the instance")

//     // if (error?.response?.status === 403 || error?.response?.status === 401) {
//     //   store.dispatch(logOut());
//     // } else {
//     return Promise.reject(error);
//     // }
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//   }
// );

export default instance;
