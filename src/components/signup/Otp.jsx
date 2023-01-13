import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import OtpInput from "react18-input-otp";

const Otp = ({ userData }) => {
  const navigate = useNavigate();
  const [changeMobile, setChangeMobile] = useState(false);
  const loginHandle = () => {
    navigate("/login");
  };
  const otpResendHandler = () => {
    console.log(userData);
  };
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  const [error, setError] = useState(false);
  const otpSentButtonHandler = () => {
    if (otp.length < 4) {
      console.log("invalid otp");
      setError(true);
    } else {
      setError(false);
      console.log("it is working with otp", otp);
      navigate(-1);
    }
  };
  return (
    <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F]">
      <h1 className="font-Viaoda text-5xl mb-10"> Mobile Verification</h1>
      <p className="p-10 text-xl">
        otp has sent to {userData.phone}
        <button className="bg-gray-50 rounded-xl w-32 h-16  ml-5">
          change Mobile
        </button>
      </p>

      <OtpInput
        value={otp}
        onChange={handleChange}
        separator={<span className="p-2 shadow-2xl"> </span>}
        inputStyle="text-8xl shadow-2xl bor  rounded-3xl"
        numInputs={4}
        isInputNum={true}
      ></OtpInput>
      {error && <p className="text-red-600 text-2xl">invalid otp</p>}
      <p
        className="text-xl text-right w-[65%] cursor-pointer underline"
        onClick={otpResendHandler}
      >
        Resend Otp ?
      </p>
      <button
        onClick={otpSentButtonHandler}
        className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
      >
        Sent Otp
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
