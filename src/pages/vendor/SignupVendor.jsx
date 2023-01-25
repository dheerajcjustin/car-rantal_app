import React, { useState } from "react";
import Otp from "../../components/vendor/signup/Otp";
import Signup from "../../components/vendor/signup/Signup";

const SignupVendor = () => {
  const [otpPage, setOtpPage] = useState(false);
  const [userDate, setUserDate] = useState({});
  return (
    <div className="w-full min-h-screen flex justify-center bg-white bg-slate-600">
      {otpPage ? (
        <Otp userData={userDate} />
      ) : (
        <Signup setOtpPage={setOtpPage} setUserDate={setUserDate} />
      )}
    </div>
  );
};

export default SignupVendor;
