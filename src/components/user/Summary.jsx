import React from "react";

const Summary = ({ vehicle, bookingTime }) => {
  return (
    <div className="bg-gray-50 col-span-2 rounded-xl shadow-md">
      <h2 className="text-3xl p-5">SUMMARY </h2>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-10">
        <div className="w-full">
          <div className="w-full my-5">
            <img
              src={vehicle.phots[0]}
              alt=""
              className="mx-auto w-full p-5 "
            />
          </div>
          <div className="text-center w-full my-5">
            <span className="mx-auto text-2xl">{vehicle.name}</span>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex flex-row justify-around text-xl w-full">
            <div className="">
              <h6>{bookingTime.pickupTime}</h6>
              <h6>{bookingTime.pickupDate}</h6>
            </div>
            <div className=" text-center  pt-1 h-8 w-8 bg-gray-900 text-[#FDD23F] rounded-2xl">
              to
            </div>

            <div className="text-right">
              <h6>{bookingTime.dropOffTime}</h6>
              <h6>{bookingTime.dropOffDate}</h6>
            </div>
          </div>
          <hr className="w-[90%] " />
          <div className="flex flex-row justify-around p-5">
            {/* {vehicle.location} */}
          </div>
          <hr className="w-[90%] " />
          <div className="flex flex-row justify-between p-5 w-[90%]">
            <div>Minimum 24.0 hour charges applicable</div>
            <div>{vehicle.price}</div>
          </div>
          <div className="flex flex-row justify-between p-5 w-[90%]">
            <div>Total(price X rent in Hours)</div>
            <div>{vehicle.price * bookingTime.rentPeriod}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
