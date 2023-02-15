

const UserBookingCard = ({ data, }) => {
  console.log("data inside card", data);
  return (
    <div className="flex flex-row justify-around bg-gray-200 w-full rounded-3xl pt-3 shadow-lg shadow-gray-500/50     ">

      <div className="my-auto">
        <h2 className=" text-lg sm:text-xl font-semibold  text-gray-800">
          {data?.carData?.name}
        </h2>

        <img
          src={data?.carData?.photos[0]}
          alt="photo of amg"
          className="w-[180px]  h-auto mb-8 rounded-xl"
        />
      </div>

      <div className="text-center  my-auto">
        <h6 className="text-xl">{!data?.pickupStatus ? data?.pickupTime + "pickup time" : data.dropOffTime + "dropoff time"}</h6>
        <h6 className="text-xl"> {!data?.pickupStatus ? data?.pickupDate + "pickup time" : data.dropOffDate + "dropoff time"} </h6>
        <h1 className="text-xl">{data?.pickup?.name} </h1>
      </div>
      {<div className="h-full flex flex-col justify-center" >
        <div className="bg-green-400 text-xl p-5 rounded-xl ">  {!data?.pickupStatus ? "pickup" : "dropoff"}</div>

      </div>}





    </div>
  );
};

export default UserBookingCard;
