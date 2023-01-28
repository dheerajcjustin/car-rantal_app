import React from "react";
const vehicle = {
  name: "Benz G class",
  picture: "download.jpeg",
  location: `Sultan Bathery (Below Punjab National Bank)
  Road Transport Office (RTO) Complex, OOTY ROAD SULTAN BATHERY WAYANADU`,
  price: 480,
  total: 1204,
};

const UserBookingCard = () => {
  return (
    <div className=" flex flex-row justify-around bg-gray-200 w-full rounded-3xl pt-3 shadow-lg shadow-gray-500/50     ">
      <br />
      <div className="my-auto">
        <h2 className=" text-lg sm:text-xl font-semibold  text-gray-800">
          Benx AMG G6
        </h2>

        <img
          src="/download.jpeg"
          alt="photo of amg"
          className="w-[180px]  h-auto mb-8 rounded-xl"
        />
      </div>

      <div className="text-center  my-auto">
        <h6 className="text-xl">morning</h6>
        <h6 className="text-xl">12/10/2022</h6>
        <h1 className="text-xl">Manthavdy Bus Stand </h1>
      </div>

      <div className=" xl my-auto ">
        <button className="bg-yellow-400 px-5 py-2 rounded-lg">
          Completed{" "}
        </button>
      </div>
    </div>
  );
};

export default UserBookingCard;
