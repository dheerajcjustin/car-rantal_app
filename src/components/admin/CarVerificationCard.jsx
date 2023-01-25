import React, { useState } from "react";

const CarVerificationCard = ({ car }) => {
  const phots = [
    "http://res.cloudinary.com/ducziw6jk/image/upload/v1674214033/rental/jotj5dh1ai4ghghugbce.jpg",
    "http://res.cloudinary.com/ducziw6jk/image/upload/v1674214033/rental/etvldqosqhavr3j1zzes.jpg",
    "http://res.cloudinary.com/ducziw6jk/image/upload/v1674214033/rental/itudjinkuswvdxptqsfq.jpg",
    "http://res.cloudinary.com/ducziw6jk/image/upload/v1674214033/rental/azrkomn2qavft3euo1zp.jpg",
  ];

  const [image, setImage] = useState(car.phots[0]);
  return (
    <div className=" w-full sm:max-w-md rounded-3xl bg-[#10191F] pt-3 shadow-lg shadow-gray-500/50     ">
      <div className="flex flex-col  align-middle items-center w-full">
        <h2 className="text-xl font-semibold  text-slate-50">{car.name}</h2>
        <img
          src={image}
          alt="photo of amg"
          // w-[280px]  sm:[180px]  sm:w-[400px] sm:h-[250px]
          className=" w-[90%] h-[200px] object-contain	 sm:mb-8 rounded-xl"
        />
        <div className="flex flex-row w-full justify-between sm:px-5">
          {car.phots.map((photo) => (
            <img
              className=" w-[25%]   sm:w-[100px] sm:h-[80px]  object-contain "
              src={photo}
              alt="image of cars"
              onClick={() => {
                setImage(photo);
              }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-around p-5 bg-white rounded-t-3xl sm:text-xl ">
        <div className="text-center">
          <h6>Tiadog</h6>
          <h6> ₹ {car?.price}</h6>
          <h6> Seats : {car?.seatNum}</h6>
        </div>
        <div className=" text-center   text-[#FDD23F] rounded-2xl">
          <h6> Rc:{car?.rcNumber}</h6>

          <h6>Manthavady </h6>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between p-5 bg-white rounded-b-3xl sm:text-xl gap-2   ">
        <button
          className=" bg-gray-400 px-5 py-2 rounded-lg"
          // onClick={bookButtonHandler}
        >
          Reject
        </button>
        <button
          className="bg-yellow-400 px-5 py-2 rounded-lg"
          // onClick={bookButtonHandler}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default CarVerificationCard;
