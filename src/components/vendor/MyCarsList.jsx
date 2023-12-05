import React from "react";
import authInstance from "../../config/vendorAxios";
import useSWR from "swr";
import MyCarsCard from "./MyCarsCard";

const MyCarsList = () => {
      const fetcher = (url) => authInstance.get(url).then((res) => res.data);
      // .catch((err) => console.log(err));
      const { data, error, isLoading } = useSWR(`/vendor/myCars`, fetcher);
      return (
            <div className="p-5 bg-[#FFC53E]">
                  {/* <div className="  m-5  p-5 grid gap-5 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-1  grid-cols-1 rounded-xl  origin-center"> */}
                  {isLoading && <p>Loading....</p>}
                  {/* {data && <p>{data}</p>} */}

                  <div className="">
                        <div className="flex flex-wrap justify-around gap-5  md:px-[10%]  ">
                              {data &&
                                    data.map((car, index) => (
                                          <MyCarsCard
                                                key={car._id}
                                                photos={car.photos}
                                                title={car.name}
                                                price={car.price}
                                                RC={car.rcNumber}
                                                seatNum={car.seatNum}
                                                status={car.verified}
                                                location={car.location}
                                                pickupPoint={car.pickupPoints}
                                                documents={car.documents}
                                                fuelType={car.fuelType}
                                                transmission={car.gearType}
                                          />
                                    ))}
                        </div>
                  </div>
                  {error && <p>Error while Loading</p>}
            </div>
      );
};

export default MyCarsList;
