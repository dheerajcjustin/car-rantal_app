import React, { useEffect } from "react";
import Navbar from "../../components/navbar/NavBar";
import FilterDesktop from "../../components/user/search/FilterDesktop";
import FilterMobile from "../../components/user/search/FilterMobile";
import SearchCard from "../../components/user/search/SearchCard";
import { useSearchParams, useLocation } from "react-router-dom";
// import instance from "../../config/axios";

import useSWR from "swr";
import SearchCardSkeleton from "../../components/user/search/SearchCardSkeleton";
import authInstance from "../../config/authInstance";

const SearchPage = () => {
  console.log("inside the users search page why it not working i dont");
  const arr = [34, 56, 76, 98];

  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const fetcher = (url) => authInstance.get(url).then((res) => res.data);
  // .catch((err) => console.log(err));
  const { data, error, isLoading } = useSWR(
    `/search${location.search}`,
    fetcher
  );

  return (
    <div className="bg-[#FDD23F] ">
      <Navbar />
      <FilterMobile time={data?.time} pickups={data?.pickups} />

      <div className="grid md:grid-cols-4 grid-cols-3 gap-5">
        <FilterDesktop time={data?.time} pickups={data?.pickups} />

        <div className="w-full mt-10 col-span-3 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {isLoading &&
              arr.map((value) => <SearchCardSkeleton key={value} />)}
            {data?.cars &&
              data?.cars.map((car) => (
                <SearchCard
                  time={data.time}
                  car={car}
                  // gearType={car?.gearType}
                  // fuelType={car?.fuelType}
                  // carId={car._id}
                  key={car._id}
                // title={car.name}
                // price={car.price}
                // photos={car.phots}
                />
              ))}
            {error && <p>error while loading</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
