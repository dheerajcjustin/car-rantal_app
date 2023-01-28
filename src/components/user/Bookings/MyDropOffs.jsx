import React from "react";
import UserBookingCard from "./UserBookingCard";

const MyPickups = () => {
  return (
    <div>
      <h2 className="text-3xl text-center m-10">Upcoming Drop Offs</h2>
      <UserBookingCard />
    </div>
  );
};

export default MyPickups;
