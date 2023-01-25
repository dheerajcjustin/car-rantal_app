import React, { useState, useEffect } from "react";
import Otp from "../../../components/user/login/Otp";

const ForgotPasswordOtp = () => {
  return (
    <div className="w-full h-[1007px] grid lg:grid-cols-3 md:grid-cols-5 bg-white">
      <Otp />

      <div className="hidden md:flex items-center flex-col md:col-span-3 lg:col-span-2">
        <img src="/login.gif" alt="LOGIN" className="w-[100%]" />
        <h1 className="font-Viaoda text-7xl text-gray-500 absolute top-2/3">
          Make everything easy
        </h1>
      </div>
    </div>
  );
};

export default ForgotPasswordOtp;
