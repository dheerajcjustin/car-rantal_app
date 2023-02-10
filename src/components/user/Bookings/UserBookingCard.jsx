

const UserBookingCard = ({ data }) => {

  return (
    <div className=" flex flex-row justify-around bg-gray-200 w-full rounded-3xl pt-3 shadow-lg shadow-gray-500/50     ">
      <br />
      <div className="my-auto">
        <h2 className=" text-lg sm:text-xl font-semibold  text-gray-800">

        </h2>

        <img
          src={data?.carData?.photos[0]}
          alt="photo of amg"
          className="w-[180px]  h-auto mb-8 rounded-xl"
        />
      </div>

      <div className="text-center  my-auto">
        <h6 className="text-xl">{data?.pickupTime}</h6>
        <h6 className="text-xl">{data?.pickupDate}</h6>
        <h1 className="text-xl">{data?.pickup?.name} </h1>
      </div>


    </div>
  );
};

export default UserBookingCard;
