import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Signup = ({ setOtpPage, setUserDate }) => {
  const navigate = useNavigate();
  const loginHandle = () => {
    navigate("/login");
  };
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    name: {
      status: true,
      message: "",
    },
    email: {
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
      // console.log("name false");

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
  const emailCheck = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!userData.email.match(validRegex)) {
      setValidation((prevState) => ({
        ...prevState,
        email: {
          value: false,
          message: "is this really your email ?",
        },
      }));
      // console.log("email false");

      return false;
    } else {
      setValidation((prevState) => ({
        ...prevState,
        email: {
          value: true,
          message: "",
        },
      }));
      return true;
    }
  };
  const PhoneCheck = () => {
    const expr = /^(91)?[0-9]{10}$/;
    if (!userData.phone.match(expr)) {
      setValidation((prevState) => ({
        ...prevState,
        phone: {
          value: false,
          message: "is this really your phone ?",
        },
      }));
      // console.log("phone false");

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
      // console.log("password false");
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
  const signupButtonHandle = () => {
    // console.log(userData);
    // nameCheck();
    // emailCheck();
    // passwordCheck();
    // PhoneCheck();
    // console.log(
    //   "dfddfd",
    //   nameCheck && emailCheck && passwordCheck && PhoneCheck
    // );

    if (nameCheck() && emailCheck() && passwordCheck() && PhoneCheck()) {
      console.log("it is working");
      setUserDate(userData);
      setOtpPage(true);
    }
  };
  return (
    <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F]">
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
        <p className=" text-red-600">{validation.name.message}</p>
      )}
      <input
        onChange={valueSetting}
        onBlur={PhoneCheck}
        type="text"
        name="phone"
        value={userData.phone}
        placeholder="Phone"
        className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
      />
      {!validation.phone.status && (
        <p className=" text-red-600">{validation.phone.message}</p>
      )}
      <input
        onChange={valueSetting}
        onBlur={emailCheck}
        type="text"
        name="email"
        value={userData.email}
        placeholder="Email"
        className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
      />
      {!validation.email.status && (
        <p className=" text-red-600">{validation.email.message}</p>
      )}
      <input
        onChange={valueSetting}
        onBlur={passwordCheck}
        type="password"
        name="password"
        value={userData.password}
        placeholder="Password"
        className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
      />
      {!validation.password.status && (
        <p className=" text-red-600">{validation.password.message}</p>
      )}
      <button
        onClick={signupButtonHandle}
        className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
      >
        Sign up
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
