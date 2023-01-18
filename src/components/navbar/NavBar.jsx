import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DistrictsModal from "../UI/Districts_modal";
import { selectCurrentUser } from "../../helpers/auth/authSlice";
import axios from "../../config/axios";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [nav, setNav] = useState("nav");
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState("");
  const handleNav = () => {
    setNav(!nav);
  };
  // const locationButton = () => {
  //   setModal(true);
  // };
  const onClose = (location) => {
    setModal(false);
    setLocation(location);
  };
  const modalOpen = () => {
    setModal(true);
  };
  // console.log(onClose);
  const LoginButtonHandler = () => {
    navigate("/login");
  };
  const signupButtonHandler = () => {
    navigate("/signup");
  };

  return (
    <div className="h-20 px-8  bg-gray-900 top-0 sticky z-20 bg-transparent">
      <div className="flex items-center h-20 max-w-[1240px] mx-auto justify-between">
        <div className="w-40">
          <img
            src="/logo-navbar.png"
            alt="logo"
            className="object-fill rounded-full   "
          />
        </div>

        {modal && <DistrictsModal onClose={onClose} />}

        <ul className="hidden md:flex gap-12">
          <li className="font-bold ">
            <button
              className="border-[#10191F] border-4 rounded-3xl  text-2xl  text-[#10191F]  px-7 py-2 hover:bg-amber-200 transition-all hover:text-gray-100 ease-in-out duration-500  flex flex-row items-center gap-1"
              onClick={modalOpen}
            >
              <IoLocationSharp />
              {location ? location : "Location"}
            </button>
          </li>
          <li className="font-bold">
            {currentUser ? (
              <button
                className="border-[#10191F]  border-4 rounded-3xl  text-2xl  text-[#10191F]  px-7 py-2 hover:bg-amber-200 transition-all hover:text-gray-100 ease-in-out duration-500 "
                // onClick={LoginButtonHandler}
              >
                {currentUser.name}
              </button>
            ) : (
              <button
                className="border-[#10191F]  border-4 rounded-3xl  text-2xl  text-[#10191F]  px-7 py-2 hover:bg-amber-200 transition-all hover:text-gray-100 ease-in-out duration-500 "
                onClick={LoginButtonHandler}
              >
                Login
              </button>
            )}
          </li>
          <li className=" font-bold">
            {!currentUser && (
              <button
                onClick={signupButtonHandler}
                className="bg-[#10191F]  border-4 rounded-3xl  text-gray-100 text-2xl  px-7 py-2 hover:bg-yellow-200  hover:border-yellow-200  hover:bg-gray-300 transition-all ease-in-out duration-500 "
              >
                Sign up
              </button>
            )}
          </li>
        </ul>
        <div className="block md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-gray-300 ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%]"
          }
        >
          <div className="w-40">
            <img src="/logo-navbar.png" alt="logo" className="object-fill" />
          </div>
          <ul className="p-4 uppercase">
            <li className="p-4 border-b border-gray-600 font-bold">ABOUT</li>
            <li className="p-4 border-b border-gray-600 font-bold">HOME</li>
            <li className="p-4 border-b border-gray-600 font-bold">SERVICES</li>
            <li className="p-4 border-b border-gray-600 font-bold">LOGIN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
