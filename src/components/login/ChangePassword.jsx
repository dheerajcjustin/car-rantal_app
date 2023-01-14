import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";

const ChangePassword = ({ setForgotPassword, responseData }) => {
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    setErrMsg("");
  }, [password]);
  const handleSubmit = async () => {
    console.log("sumbit working");

    if (password.length < 8) {
      setErrMsg("password must greater 8 character ");
      return;
    }
    try {
      const response = await axios.post("/auth/changePassword", responseData);
      console.log(response);
    } catch (error) {
      if (error.response.status === 400) {
        setErrMsg("Invalid otp number");
        return;
      }
      if (error.response.status === 500) {
        setErrMsg("Server error try after some time ");
        return;
      }
    }
  };

  const cancelHandler = () => {
    setForgotPassword(false);
  };
  return (
    <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F]">
      <h1 className="font-Viaoda text-5xl mb-10">Change Password</h1>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        type="password"
        name="password"
        placeholder="Password"
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
        Change Password
      </button>

      {/* <button className="w-[60%] transition-all duration-100 h-20 mt-10 flex flex-row items-center pl-3 text-2xl font-medium border-2 border-black rounded-3xl text-center  hover:bg-black hover:text-white">
    <span className="w-[20%] h-20 flex items-center justify-center">
      <FcGoogle />
    </span>
    Login with google
  </button> */}
    </div>
  );
};
export default ChangePassword;
