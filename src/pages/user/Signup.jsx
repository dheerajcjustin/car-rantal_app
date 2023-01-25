import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Otp from "../../components/user/signup/Otp";
import SignupComponent from "../../components/user/signup/Signup";

const Signup = () => {
  const [otpPage, setOtpPage] = useState(false);
  const [userDate, setUserDate] = useState({});

  return (
    <div className="w-full h-screen grid lg:grid-cols-3 md:grid-cols-5 ">
      {otpPage ? (
        <Otp userData={userDate} />
      ) : (
        <SignupComponent setOtpPage={setOtpPage} setUserDate={setUserDate} />
      )}

      <div className="hidden md:flex items-center flex-col md:col-span-3 lg:col-span-2 h-max bg-white">
        <img src="/signup.gif" alt="LOGIN" className="w-[100%]" />
        <h1 className="font-Viaoda text-7xl text-gray-500 absolute top-2/3">
          Make everything easy
        </h1>
      </div>
    </div>
  );
};

export default Signup;
