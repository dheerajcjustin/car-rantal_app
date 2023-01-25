import React from "react";
import VendorNavbar from "../../components/navbar/VendorNavbar";
import VendorBanner from "../../components/UI/VendorBanner";
import MyBookings from "../../components/vendor/MyBookings";

const Bookings = () => {
  return (
    <div className=" bg-[url('/banner.jpg')] bg-cover bg-center">
      <VendorNavbar />
      <MyBookings />
    </div>
  );
};

export default Bookings;
