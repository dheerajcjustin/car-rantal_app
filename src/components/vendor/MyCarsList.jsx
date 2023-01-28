import React from "react";
import authInstance from "../../config/authInstance";
import useSWR from "swr";
import MyCarsCard from "./MyCarsCard";

const MyCarsList = () => {
  const fetcher = (url) => authInstance.get(url).then((res) => res.data);
  // .catch((err) => console.log(err));
  const { data, error, isLoading } = useSWR(`/vendor/myCars`, fetcher);
  return (
    <div className="p-5 bg-[#FFC53E]">
      {/* <div className="  m-5  p-5 grid gap-5 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-1  grid-cols-1 rounded-xl  origin-center"> */}
      <div className="flex w-full justify-center ">
        {isLoading && <p>Loading....</p>}
        {/* {data && <p>{data}</p>} */}

        {data &&
          data.map((car, index) => (
            <MyCarsCard
              key={car._id}
              phots={car.phots}
              title={car.name}
              price={car.price}
              RC={car.rcNumber}
              seatNum={car.seatNum}
              status={car.verified}
              location={car.location}
            />
          ))}
        {error && <p>Error while Loading</p>}
      </div>
    </div>
  );
};

export default MyCarsList;
