import React from "react";
import BookingCard from "./BookingCard";

const MyDropOff = ({ title }) => {
      return (
            <div>
                  <h2 className="text-3xl text-center m-10">
                        Upcoming Drop Off
                  </h2>
                  <BookingCard />
            </div>
      );
};

export default MyDropOff;
