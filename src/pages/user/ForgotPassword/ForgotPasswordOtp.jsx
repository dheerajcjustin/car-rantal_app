import React, { useState, useEffect } from "react";
import Otp from "../../../components/user/login/Otp";

const ForgotPasswordOtp = () => {
      return (
            <div className="bg-[#F1F1F1] hidden md:flex  relative flex-col  md:col-span-3 lg:col-span-2">
                  <Otp />
                  <div className="bg-[#F1F1F1] hidden md:flex  relative flex-col  md:col-span-3 lg:col-span-2">
                        <img
                              src="login.gif"
                              alt="LOGIN"
                              className="object-center w-full max-h-screen"
                        />
                        <h1 className="font-Viaoda text-7xl w-full text-center text-gray-500 absolute top-0   sm:top-2/3">
                              Make everything easy
                        </h1>
                  </div>
            </div>
      );
};

export default ForgotPasswordOtp;
