import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../helpers/auth/authSlice";
import axios from "../../../config/axios";

// import { setLoading, setLoadingDone } from "../../../helpers/loading/loadingSlice";

const Login = () => {
      const [mobile, setMobile] = useState("");
      const [password, setPassword] = useState("");
      const [errMsg, setErrMsg] = useState("");
      const [loading, setLoading] = useState(false);
      // const [error, setError] = useState(false);
      const navigate = useNavigate();
      const signupHandle = () => {
            navigate("/signup");
      };
      const dispatch = useDispatch();
      useEffect(() => {
            setErrMsg("");
      }, [mobile, password]);

      const handleSubmit = async (e) => {
            try {
                  setLoading(true);
                  const response = await axios.post("/auth/loginEmail", {
                        mobile: mobile,
                        password: password,
                  });
                  console.log(response.data.accessToken);
                  console.log(response.data.user);
                  const accessToken = response.data.accessToken;
                  const user = {
                        name: response.data.user.name,
                        mobile: response.data.user.mobile,
                        userId: response.data.user._id,
                  };
                  dispatch(
                        setCredentials({
                              user,
                              accessToken,
                              userType: response.data.userType,
                        })
                  );
                  navigate("/search");
            } catch (err) {
                  console.log(err);
                  if (err?.response?.status === 400)
                        setErrMsg("invalid userName or password");
                  else setErrMsg("server down");
            } finally {
                  setLoading(false);
            }
      };
      const forgotPasswordHandler = () => {
            navigate("/ForgotPassword");
      };
      const mobileChangeHandle = (value) => {
            const expr = /^[0-9]/;
            if (value && !value.match(expr)) return;
            setMobile(value);
      };

      return (
            <div className="md:col-span-2 lg:col-span-1 flex flex-col min-h-screen items-center justify-center bg-[#FDD23F]">
                  <h1 className="font-Viaoda text-7xl mb-10">Login</h1>
                  <div>
                        OTP functionality is currently not working due to a
                        payment issue.
                  </div>
                  <div>
                        For testing purpose,you can use demo account to log in.{" "}
                  </div>
                  <div> mobile :9876543210 </div>
                  <div> password :plmqaz123 </div>
                  <input
                        onChange={(e) => {
                              mobileChangeHandle(e.target.value);
                        }}
                        value={mobile}
                        type="text"
                        name="mobile"
                        placeholder="Mobile"
                        className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
                  />
                  <input
                        onChange={(e) => {
                              setPassword(e.target.value);
                        }}
                        value={password}
                        type="password"
                        name="email"
                        placeholder="Password"
                        className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
                  />
                  {<p>{errMsg}</p>}

                  <p
                        onClick={forgotPasswordHandler}
                        className=" my-3 text-right w-[80%] cursor-pointer  underline"
                  >
                        Forgot Password ?
                  </p>
                  <button
                        className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                        onClick={handleSubmit}
                  >
                        {loading ? "loading...." : "Login"}
                  </button>
                  <p className="mt-5">
                        Register using{" "}
                        <a
                              className="text-blue-900 font-semibold cursor-pointer"
                              onClick={signupHandle}
                        >
                              Signup
                        </a>
                  </p>
                  {/* <button className="w-[60%] transition-all duration-100 h-20 mt-10 flex flex-row items-center pl-3 text-2xl font-medium border-2 border-black rounded-3xl text-center  hover:bg-black hover:text-white">
    <span className="w-[20%] h-20 flex items-center justify-center">
      <FcGoogle />
    </span>
    Login with google
  </button> */}
            </div>
      );
};
export default Login;
