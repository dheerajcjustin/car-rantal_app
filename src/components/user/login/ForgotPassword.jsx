import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "../../../config/axios";
import Otp from "./Otp";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    setErrMsg("");
  }, [mobile]);
  const handleSubmit = async () => {
    console.log("sumbit working");
    const expr = /^(91)?[0-9]{10}$/;
    if (!mobile.match(expr)) {
      console.log("not really a number");
      setErrMsg("is not phone number");
      return;
    }
    try {
      const response = await axios.post("/auth/forgotPassword", {
        mobile: mobile,
      });
      console.log(response.data);
      navigate(`/ForgotPasswordOtp/${mobile}`);
    } catch (error) {
      if (error.response.status === 400) {
        setErrMsg("No user with this mobile number");
        return;
      }
      if (error.response.status === 500) {
        setErrMsg("Server error try after some time ");
        return;
      }
    }
  };

  const cancelHandler = () => {
    navigate("/login");
  };

  return (
    <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F]">
      <h1 className="font-Viaoda text-5xl mb-10">Change Password</h1>
      <input
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        value={mobile}
        type="text"
        name="mobile"
        placeholder="Mobile"
        className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
      />

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
        Send Otp
      </button>
    </div>
  );
};
export default ForgotPassword;
