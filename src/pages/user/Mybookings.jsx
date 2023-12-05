import React from "react";
import Navbar from "../../components/navbar/NavBar";
import MyUpcomingEvents from "../../components/user/Bookings/MyEvents";

const MyBookings = () => {
      return (
            <div className="w-screen bg-gradient-to-r from-[#FEC63E] to-banana h-max md:h-screen ">
                  <Navbar />
                  <div className="py-10 sm:px-10  w-full h-screen">
                        <div className="bg-white shadow-xl rounded-xl">
                              <MyUpcomingEvents userType="user" />
                        </div>
                  </div>
            </div>
      );
};

export default MyBookings;
