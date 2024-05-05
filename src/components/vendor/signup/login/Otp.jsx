import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../../config/axios";
import OtpInput from "react18-input-otp";

const Otp = () => {
      const { mobile } = useParams();
      console.log("the parm mobile is ", mobile);
      const navigate = useNavigate();
      const [otp, setOtp] = useState("");
      const [errMsg, setErrMsg] = useState("");
      useEffect(() => {
            setErrMsg("");
      }, [otp]);

      const handleSubmit = async () => {
            if (otp.length < 4) {
                  console.log("invalid otp");
                  errMsg("Invalid Otp");
            } else {
                  const data = { mobile: mobile, otp: otp };
                  try {
                        const response = await axios.post(
                              "/vendor/ChangePasswordOtp",
                              data
                        );
                        console.log("it is working with otp", response);

                        if (response.status === 201) {
                              console.log("response data ", response.data);
                              console.log(
                                    "response password token ",
                                    response.data.passwordToken
                              );

                              const token = response.data.passwordToken;
                              const userId = response.data.userId;
                              navigate(
                                    `/vendor/ChangePassword/${userId}/${token}`
                              );
                        } else {
                              setErrMsg("what is happening ");
                              console.log(response);
                        }
                  } catch (error) {
                        console.log(error.response);
                        if (error.response.status === 500) {
                              setErrMsg("network error");
                        } else {
                              setErrMsg("invalid otp");
                        }
                  }

                  // navigate(-1);
            }
      };
      const otpResendHandler = () => {
            // setChangeMobile(true);
      };
      const handleChange = (enteredOtp) => {
            setOtp(enteredOtp);
      };
      const cancelHandler = () => {
            navigate("/login");
      };

      return (
            <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F]">
                  <h1 className="font-Viaoda text-5xl mb-10">
                        Change Password
                  </h1>
                  <OtpInput
                        value={otp}
                        onChange={handleChange}
                        separator={<span className="p-2 shadow-2xl"> </span>}
                        inputStyle="text-8xl shadow-2xl bor  rounded-3xl"
                        numInputs={4}
                        isInputNum={true}
                  ></OtpInput>
                  {<p className="text-red-500">{errMsg}</p>}

                  <p
                        onClick={cancelHandler}
                        className=" my-3 text-right w-[80%] cursor-pointer  underline"
                  >
                        cancel ?
                  </p>
                  <p
                        className="text-xl text-left w-[65%] cursor-pointer underline"
                        onClick={otpResendHandler}
                  >
                        Resend Otp ?
                  </p>
                  <button
                        className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                        onClick={handleSubmit}
                  >
                        Send Otp
                  </button>
            </div>
      );
};
export default Otp;
