import React from "react";
import UserBookingCard from "./UserBookingCard";
import useSWR from "swr"
import { fetcher } from "../../../config/authInstance"
import carSlice from "../../../helpers/car/carSlice";
import UserBookingCardSkelton from "./UserBookingCardSkelton";


const MyPickups = () => {
  const arr = [45, 7, 9, 76, 86]
  const { data, error, isLoading, mutate } = useSWR(`/bookings`, fetcher);



  return (
    <div>
      <h1 className="text-center text-3xl m-3">My Bookings</h1>
      {error && <h1>somting went worng</h1>}

      {isLoading && arr.map(i => <UserBookingCardSkelton key={i} />)}

      {(data && data.upComingPickups.length > 0) && <div>
        {/* {console.log("updomingddfdklfdsafsa;kljfadsk;76567654", data.upComingPickups)} */}
        <h2 className="text-2xl text-left m-10">Upcoming Pickups</h2>

        {data.upComingPickups.map(item =>
          <UserBookingCard key={item._id} data={item} />)}

      </div>}
      {(data && data.upComingDropOff.length > 0) && <div>
        {/* {console.log("updomingddfdklfdsafsa;kljfadsk;76567654", data.upComingDropOff)} */}
        <h2 className="text-2xl text-center m-10">Upcoming DropOff</h2>

        {data.upComingDropOff.map(item =>
          <UserBookingCard key={item._id} data={item} />)}

      </div>}
      {(data && data.myBookings.length > 0) && <div>
        {/* {console.log("updomingddfdklfdsafsa;kljfadsk;76567654", data.myBookings)} */}
        <h2 className="text-2xl text-center m-10">Completed Rent</h2>

        {data.myBookings.map(item =>

          <UserBookingCard key={item._id} data={item} />)}

      </div>}


    </div>
  );
};

export default MyPickups;
