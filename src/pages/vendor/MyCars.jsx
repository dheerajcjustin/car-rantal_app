import React from "react";
import useSWR from "swr";
import VendorNavbar from "../../components/navbar/VendorNavbar";
import VendorBanner from "../../components/UI/VendorBanner";
import MyCarsCard from "../../components/vendor/MyCarsCard";
import authInstance from "../../config/authInstance";

const MyCars = () => {
  const fetcher = (url) => authInstance.get(url).then((res) => res.data);
  // .catch((err) => console.log(err));
  const { data, error, isLoading } = useSWR(`/vendor/myCars`, fetcher);
  return (
    <div className=" bg-[url('/banner.jpg')] bg-cover bg-center">
      <VendorNavbar />
      <div className="m-5">
        <div className=" m-5  p-5  bg-white grid gap-5 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-1  grid-cols-1 rounded-xl w-fit">
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
    </div>
  );
};

export default MyCars;
