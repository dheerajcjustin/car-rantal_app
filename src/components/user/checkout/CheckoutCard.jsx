import React from "react";
import authInstance from "../../../config/authInstance";

const CheckoutCard = ({ vehicle, bookingTime, selectedPickup, setPayment }) => {
  const total = vehicle.price * bookingTime.rentPeriod;
  const roundedTotal = Math.round((total * 14) / 100 + total);
  const bookingHandler = async () => {

    console.log(selectedPickup);
    setPayment(true)
    // const response = await authInstance.post("/booking", {
    //   carId: vehicle._id,
    //   roundedTotal,
    //   bookingTime,
    // });
    // console.log(response);
  };
  return (
    <div className="bg-gray-50 rounded-xl shadow-md h-fit">
      <h2 className="text-3xl p-5">Checkout</h2>
      <div className="flex flex-row justify-between p-5 w-[90%]">
        <div>Booking Fees</div>
        <div> {total}₹</div>
      </div>
      <div className="flex flex-row justify-between p-5 w-[90%]">
        <div>GST(14%)</div>
        <div>{(total * 14) / 100 + total} ₹</div>
      </div>
      <div className="flex flex-row justify-between p-5 w-[90%]">
        <div className="text-2xl font-semibold">Total Amount</div>
        <div className="text-2xl font-semibold">{roundedTotal} ₹</div>
      </div>
      <div className="flex flex-row justify-between p-5 w-[90%] mx-auto">
        <button
          className="bg-[#10191F] w-full h-12 rounded-xl text-gray-50"
          onClick={bookingHandler}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
