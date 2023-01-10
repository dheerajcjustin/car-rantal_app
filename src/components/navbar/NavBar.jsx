import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import DistrictsModal from "../UI/Districts_modal";

const Navbar = () => {
  const [nav, setNav] = useState("nav");
  const [modal, setModal] = useState(true);
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
  console.log("modal", modal);
  // console.log(onClose);

  return (
    <div className="h-20 px-8  bg-gray-900 top-0 sticky z-20 bg-transparent">
      <div className="flex items-center h-20 max-w-[1240px] mx-auto justify-between">
        <div className="w-40">
          <img src="/logo-navbar.png" alt="logo" className="object-fill" />
        </div>

        {modal && <DistrictsModal onClose={onClose} />}

        <ul className="hidden md:flex gap-12">
          <li className="font-bold ">
            <button
              className="border-emerald-400 border-4 rounded-3xl  text-2xl  text-gray-100 px-7 py-2 hover:bg-amber-200 transition-all hover:text-gray-100 ease-in-out duration-500  flex flex-row items-center gap-1"
              onClick={modalOpen}
            >
              <IoLocationSharp />
              {location ? location : "Location"}
            </button>
          </li>
          <li className="font-bold">
            <button className="border-emerald-400 border-4 rounded-3xl  text-2xl  text-gray-100 px-7 py-2 hover:bg-amber-200 transition-all hover:text-gray-100 ease-in-out duration-500">
              Login
            </button>
          </li>
          <li className=" font-bold">
            <button className="bg-emerald-400 border-4 rounded-3xl  text-2xl  px-7 py-2 hover:bg-yellow-200  hover:border-yellow-200  hover:bg-gray-300 transition-all ease-in-out duration-500 ">
              Sign up
            </button>
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
