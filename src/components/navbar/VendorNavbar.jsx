import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import AddCar from "../vendor/AddCar";

const VendorNavbar = () => {
  const [addCarModal, setAddCarModal] = useState(false);
  const navigate = useNavigate();
  const [nav, setNav] = useState("nav");
  const handleNav = () => {
    setNav(!nav);
  };
  const onClose = () => {
    setAddCarModal(false);
  };
  const modalOpen = () => {
    setAddCarModal(true);
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
        Vendor
        <ul className="hidden md:flex gap-12">
          <li className="font-bold ">
            <button
              className="border-[#10191F]  border-4 rounded-3xl  text-2xl  text-[#10191F]  px-7 py-2 hover:bg-amber-200 transition-all hover:text-gray-100 ease-in-out duration-500 "
              onClick={modalOpen}
            >
              Add Car
            </button>
          </li>
          {addCarModal && <AddCar onClose={onClose} />}
          <li className="font-bold">
            <button
              className="border-[#10191F]  border-4 rounded-3xl  text-2xl  text-[#10191F]  px-7 py-2 hover:bg-amber-200 transition-all hover:text-gray-100 ease-in-out duration-500 "
              // onClick={LoginButtonHandler}
            >
              Profile
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
            <li className="p-4 border-b border-gray-600 font-bold">My cars</li>
            <li className="p-4 border-b border-gray-600 font-bold">
              Booked cars
            </li>
            <li className="p-4 border-b border-gray-600 font-bold">
              Verification Pending Cars
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VendorNavbar;
