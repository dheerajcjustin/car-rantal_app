import React, { useState } from "react";

const MyCarsCard = ({ phots, title, RC, price, seatNum, location }) => {
  const status = "verified";
  const [image, setImage] = useState(phots[0]);
  return (
    <div className=" w-full sm:max-w-md rounded-3xl bg-[#10191F] pt-3 shadow-lg shadow-gray-500/50     ">
      <div className="flex flex-col  align-middle items-center w-full">
        <h2 className="text-xl font-semibold  text-slate-50">{title}</h2>
        <img
          src={image}
          alt="photo of amg"
          // w-[280px]  sm:[180px]  sm:w-[400px] sm:h-[250px]
          className=" w-[95%] h-[200px] object-contain	 sm:mb-8 rounded-xl"
        />
        <div className="flex flex-row w-full justify-between sm:px-5">
          {phots.map((photo, index) => (
            <img
              key={index}
              className=" w-[25%]  sm:h-[80px]  object-contain "
              src={photo}
              alt=""
              onClick={() => {
                setImage(photo);
              }}
            />
          ))}
        </div>
      </div>
      <div
        className={` ${status == "pending" && "bg-yellow-400"}
           ${status == "rejected" && "bg-red-400"}
          // ${status == "verified" && "bg-green-400"}          
            "  py-2 mx-3 my-2 rounded-lg text-center "`}
        // onClick={bookButtonHandler}
      >
        {status}
      </div>
      <div className="flex flex-row justify-around p-5 bg-white rounded-t-3xl sm:text-xl ">
        <div className="text-center">
          <h6> ₹ {price}</h6>
          <h6> Seats : {seatNum}</h6>
        </div>
        <div className=" text-center rounded-2xl">
          <h6> Rc:{RC}</h6>
          <h6>Location: {location.location} </h6>
        </div>
      </div>
      <div className="flex w-full flex-col justify-between p-5 bg-white rounded-b-3xl sm:text-xl gap-2   ">
        <button
          className="bg-gray-400 px-5 py-2 rounded-lg"
          // onClick={bookButtonHandler}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default MyCarsCard;
