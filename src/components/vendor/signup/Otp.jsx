import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import OtpInput from "react18-input-otp";
import ChangeMobile from "./ChangeMobile";
import axios from "../../../config/axios";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ hours, minutes, seconds }) => (
      <span className="text-xl text-right">
            {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
);

const Otp = ({ userData }) => {
      const [resend, setResend] = useState(false);
      const navigate = useNavigate();
      console.log(userData);
      const [changeMobile, setChangeMobile] = useState(false);

      const [otp, setOtp] = useState("");

      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(false);

      const otpSentButtonHandler = async () => {
            if (otp.length < 4) {
                  console.log("invalid otp");
            } else {
                  setError(false);
                  const data = { mobile: userData.mobile, otp: otp };
                  try {
                        setLoading(true);

                        const response = await axios.post(
                              "/vendor/otpVerify",
                              data
                        );
                        console.log("it is working with otp", response);
                        if (response.status === 201) {
                              navigate("/vendor/login");
                        }
                  } catch (error) {
                        if (error?.response?.status === 400) {
                              setError(true);
                        }
                        console.log(error);
                  } finally {
                        setLoading(false);
                  }

                  // navigate(-1);
            }
      };
      const otpResendHandler = () => {
            console.log(userData);
            // setChangeMobile(true);
            setResend(true);
            try {
                  const response = axios.post("/auth/resendOtp", {
                        mobile: userData.mobile,
                  });
                  console.log(response);
            } catch (error) {
                  console.log(error);
            }
      };
      const handleChange = (enteredOtp) => {
            setOtp(enteredOtp);
      };

      const loginHandle = () => {
            navigate("/login");
      };

      return (
            <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F]">
                  <h1 className="font-Viaoda text-5xl mb-10">
                        {" "}
                        Mobile Verification
                  </h1>
                  <p className="p-10 text-xl">
                        otp has sent to {userData.mobile}
                  </p>

                  <OtpInput
                        value={otp}
                        onChange={handleChange}
                        separator={<span className="p-2 shadow-2xl"> </span>}
                        inputStyle="text-8xl shadow-2xl bor  rounded-3xl"
                        numInputs={4}
                        isInputNum={true}
                  ></OtpInput>
                  {error && (
                        <p className="text-red-600 text-2xl">invalid otp</p>
                  )}
                  {!resend && (
                        <Countdown
                              date={Date.now() + 100000}
                              renderer={renderer}
                              onComplete={otpResendHandler}
                              className="text-xl text-right w-[65%]  mt-5"
                        />
                  )}
                  {resend && (
                        <p
                              className="text-xl text-right w-[65%] cursor-pointer underline mt-5"
                              onClick={otpResendHandler}
                        >
                              Resend Otp ?
                        </p>
                  )}
                  <button
                        onClick={otpSentButtonHandler}
                        className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                  >
                        {loading ? "Loading..." : " Submit Otp"}
                  </button>

                  {/* <button className="w-[60%] h-20 mt-10 flex flex-row items-center pl-3 text-2xl font-medium border-2 border-black rounded-3xl text-center">
          <span className="w-[20%] h-20 flex items-center justify-center">
            <FcGoogle />
          </span>
          Login with google
        </button> */}
            </div>
      );
};

export default Otp;
