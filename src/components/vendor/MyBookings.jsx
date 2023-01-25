import React from "react";
import MyDropOff from "./MyDropOff";
import MyPickups from "./MyPickups";

const MyBookings = () => {
  return (
    <div className=" py-10 sm:px-10  w-full h-screen lg:grid  lg:grid-cols-2 gap-10   ">
      <div className="bg-white shadow-xl rounded-xl">
        <MyPickups />
      </div>
      <div className="bg-slate-300">
        <MyDropOff />
      </div>
    </div>
  );
};

export default MyBookings;
