import React from "react";
import Navbar from "../../components/navbar/NavBar";
import Summary from "../../components/user/Summary";
import CheckoutCard from "../../components/user/CheckoutCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCurrentCar,
  selectCarBookingTime,
} from "../../helpers/car/carSlice";

const vehicle = {
  name: "Benz G class",
  picture: "download.jpeg",
  location: `Sultan Bathery (Below Punjab National Bank)
  Road Transport Office (RTO) Complex, OOTY ROAD SULTAN BATHERY WAYANADU`,
  price: 480,
  total: 1204,
};

const Checkout = () => {
  const { car: carId } = useParams();
  const car = useSelector(selectCurrentCar);
  const bookingTime = useSelector(selectCarBookingTime);

  console.log("chekout car parms", car);
  return (
    <div className="w-screen bg-[#FDD23F] h-max md:h-screen ">
      <Navbar />
      <div className="max-w-[90%] mx-auto mt:0 md:mt-24">
        <div className="w-full  grid md:grid-cols-3 grid-cols-1 gap-10 md:p-10 p-5">
          <Summary vehicle={car} bookingTime={bookingTime} />
          <CheckoutCard vehicle={car} bookingTime={bookingTime} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
