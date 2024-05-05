import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "../../../config/axios";

const Signup = ({ setOtpPage, setUserDate }) => {
      const navigate = useNavigate();
      const loginHandle = () => {
            navigate("/login");
      };
      const [userData, setUserData] = useState({
            name: "",
            mobile: "",
            password: "",
      });

      const [loading, setLoading] = useState(false);
      const [passwordVisible, setPasswordVisible] = useState(false);
      const [passwordType, setPasswordType] = useState("password");
      const [validation, setValidation] = useState({
            name: {
                  status: true,
                  message: "",
            },

            phone: {
                  status: true,
                  message: "",
            },
            password: {
                  status: true,
                  message: "",
            },
      });
      const valueSetting = (e) => {
            setUserData((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
            }));
      };
      const nameCheck = () => {
            if (userData.name.length < 3) {
                  setValidation((prevState) => ({
                        ...prevState,
                        name: {
                              value: false,
                              message: "name must be more than 3 character",
                        },
                  }));

                  return false;
            } else {
                  setValidation((prevState) => ({
                        ...prevState,
                        name: {
                              value: true,
                              message: "",
                        },
                  }));
                  return true;
            }
      };

      const PhoneCheck = () => {
            const expr = /^(91)?[0-9]{10}$/;
            if (!userData.mobile.match(expr)) {
                  setValidation((prevState) => ({
                        ...prevState,
                        phone: {
                              value: false,
                              message: "is this really your phone ?",
                        },
                  }));

                  return false;
            } else {
                  setValidation((prevState) => ({
                        ...prevState,
                        phone: {
                              value: true,
                              message: "",
                        },
                  }));
                  return true;
            }
      };
      const passwordCheck = () => {
            if (userData.password.length < 8) {
                  setValidation((prevState) => ({
                        ...prevState,
                        password: {
                              value: false,
                              message: "password  must be more than 8 character",
                        },
                  }));
                  return false;
            } else {
                  setValidation((prevState) => ({
                        ...prevState,
                        password: {
                              value: true,
                              message: "",
                        },
                  }));
                  return true;
            }
      };
      const signupButtonHandle = async () => {
            if (nameCheck() && passwordCheck() && PhoneCheck()) {
                  try {
                        setLoading(true);
                        const response = await axios.post(
                              "/auth/signupEmail",
                              userData
                        );
                        console.log(response.status);
                        console.log(response.data);
                        setUserDate(userData);
                        setOtpPage(true);
                  } catch (error) {
                        console.log(error.response);
                        if (error.response.status === 409) {
                              setValidation((prevState) => ({
                                    ...prevState,
                                    password: {
                                          value: false,
                                          message: "mobile already registers",
                                    },
                              }));
                        } else {
                              setValidation((prevState) => ({
                                    ...prevState,
                                    password: {
                                          value: false,
                                          message: "Net work error",
                                    },
                              }));
                        }
                  } finally {
                        setLoading(false);
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
      return (
            <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F] ">
                  <h1 className="font-Viaoda text-7xl mb-10">Sign up</h1>
                  <input
                        onChange={valueSetting}
                        onBlur={nameCheck}
                        type="text"
                        name="name"
                        value={userData.name}
                        placeholder="Name"
                        className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
                  />
                  {!validation.name.status && (
                        <p className=" text-red-600">
                              {validation.name.message}
                        </p>
                  )}
                  <input
                        onChange={valueSetting}
                        onBlur={PhoneCheck}
                        type="text"
                        name="mobile"
                        value={userData.phone}
                        placeholder="mobile"
                        className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
                  />
                  {!validation.phone.status && (
                        <p className=" text-red-600">
                              {validation.phone.message}
                        </p>
                  )}

                  <div className="w-[90%] h-20 mt-10">
                        <input
                              onChange={valueSetting}
                              onBlur={passwordCheck}
                              type={passwordType}
                              name="password"
                              value={userData.password}
                              placeholder="Password"
                              className=" w-full h-20 text-3xl border-2 border-black rounded-3xl text-center"
                        />

                        {!validation.password.status && (
                              <p className=" text-red-600 w-full text-center">
                                    {validation.password.message}
                              </p>
                        )}
                        <p className="relative">
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
                        </p>
                  </div>
                  <button
                        onClick={signupButtonHandle}
                        className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                  >
                        {loading ? "Sign Up" : "loading..."}
                  </button>
                  <p className="mt-5">
                        Already a member?
                        <a
                              className="text-blue-900 font-semibold cursor-pointer"
                              onClick={loginHandle}
                        >
                              Login
                        </a>
                  </p>
                  {/* <button className="w-[60%] h-20 mt-10 flex flex-row items-center pl-3 text-2xl font-medium border-2 border-black rounded-3xl text-center">
          <span className="w-[20%] h-20 flex items-center justify-center">
            <FcGoogle />
          </span>
          Login with google
        </button> */}
            </div>
      );
};

export default Signup;
