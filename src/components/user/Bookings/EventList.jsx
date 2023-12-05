import React from "react";
import UserBookingCard from "./UserBookingCard";
import UserBookingCardSkelton from "./UserBookingCardSkelton";

const EventList = ({ data, title, isLoading }) => {
      const arr = [12, 34, 67];
      return (
            <div className="h-36 bg-slate-300 text-center sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-5 p-5">
                        {data &&
                              data.map((car) => (
                                    <UserBookingCard key={car._id} data={car} />
                              ))}
                  </div>
            </div>
      );
};

export default EventList;
