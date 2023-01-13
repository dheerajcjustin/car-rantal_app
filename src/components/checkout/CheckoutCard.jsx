import React from "react";

const CheckoutCard = ({ vehicle }) => {
  const total = Math.round((vehicle.price * 14) / 100 + vehicle.price);
  return (
    <div className="bg-gray-50 rounded-xl shadow-md h-fit">
      <h2 className="text-3xl p-5">Checkout</h2>
      <div className="flex flex-row justify-between p-5 w-[90%]">
        <div>Booking Fees</div>
        <div>{vehicle.price} ₹</div>
      </div>
      <div className="flex flex-row justify-between p-5 w-[90%]">
        <div>GST(14%)</div>
        <div>{(vehicle.price * 14) / 100 + vehicle.price} ₹</div>
      </div>
      <div className="flex flex-row justify-between p-5 w-[90%]">
        <div className="text-2xl font-semibold">Total Amount</div>
        <div className="text-2xl font-semibold">{total} ₹</div>
      </div>
      <div className="flex flex-row justify-between p-5 w-[90%] mx-auto">
        <button className="bg-[#10191F] w-full h-12 rounded-xl text-gray-50">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
