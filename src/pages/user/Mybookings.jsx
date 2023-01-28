import React from "react";
import Navbar from "../../components/navbar/NavBar";
import MyDropOff from "../../components/user/Bookings/MyDropOffs";
import MyPickups from "../../components/user/Bookings/Mypickups";

const MyBookings = () => {
  return (
    <div className="w-screen bg-[#FDD23F] h-max md:h-screen ">
      <Navbar />
      <div className=" py-10 sm:px-10  w-full h-screen lg:grid  lg:grid-cols-2 gap-10   ">
        <div className="bg-white shadow-xl rounded-xl">
          <MyPickups />
        </div>
        <div className="bg-slate-300">
          <MyDropOff />
        </div>
      </div>
    </div>
  );
};

export default MyBookings;