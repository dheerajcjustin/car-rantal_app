import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../config/axios";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ChangePasswordComponent = () => {
      const { userId, token } = useParams();

      const navigate = useNavigate();
      const [password, setPassword] = useState("");
      const [errMsg, setErrMsg] = useState("");
      const [passwordVisible, setPasswordVisible] = useState(false);
      const [passwordType, setPasswordType] = useState("password");
      useEffect(() => {
            setErrMsg("");
      }, [password]);
      const handleSubmit = async () => {
            if (password.length < 8) {
                  setErrMsg("password must greater 8 character ");
                  return;
            }
            try {
                  const response = await axios.post("/auth/changePassword", {
                        userId,
                        passwordToken: token,
                        password,
                  });
                  navigate("/login");
            } catch (error) {
                  console.log(error);
                  if (error.response.status === 400) {
                        setErrMsg("session expires ");
                        return;
                  }
                  if (error.response.status === 500) {
                        setErrMsg("Server error try after some time ");
                        return;
                  }
            }
      };
      const passwordTypeChange = () => {
            if (!passwordVisible) {
                  setPasswordVisible(true);
                  setPasswordType("text");
            } else {
                  setPasswordVisible(false);
                  setPasswordType("password");
            }
      };
      const cancelHandler = () => {
            navigate("/login");
      };
      return (
            <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F]">
                  <h1 className="font-Viaoda text-5xl mb-10">New Password</h1>
                  <div className="w-[90%] relative">
                        <input
                              onChange={(e) => {
                                    setPassword(e.target.value);
                              }}
                              value={password}
                              type={passwordType}
                              name="password"
                              placeholder="Password"
                              className="w-full h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
                        />
                        <i
                              className="absolute right-4 bottom-6"
                              onClick={passwordTypeChange}
                        >
                              {passwordVisible ? (
                                    <FiEye size={38} opacity={0.6} />
                              ) : (
                                    <FiEyeOff size={38} opacity={0.6} />
                              )}
                        </i>
                  </div>

                  {<p className="text-red-500">{errMsg}</p>}

                  <p
                        onClick={cancelHandler}
                        className=" my-3 text-right w-[80%] cursor-pointer  underline"
                  >
                        cancel ?
                  </p>
                  <button
                        className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                        onClick={handleSubmit}
                  >
                        Change Password
                  </button>
            </div>
      );
};
export default ChangePasswordComponent;
