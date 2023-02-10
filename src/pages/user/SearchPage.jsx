import React, { useEffect } from "react";
import Navbar from "../../components/navbar/NavBar";
import FilterDesktop from "../../components/user/search/FilterDesktop";
import FilterMobile from "../../components/user/search/FilterMobile";
import SearchCard from "../../components/user/search/SearchCard";
import { useLocation } from "react-router-dom";

import useSWRInfinite from "swr/infinite";
import SearchCardSkeleton from "../../components/user/search/SearchCardSkeleton";
import authInstance, { fetcher } from "../../config/authInstance";

const SearchPage = () => {
  const arr = [34, 56, 76, 98];

  const location = useLocation();
  const getKey = (pageIndex, previousPageData) => {
    console.log("previos dat ", previousPageData);
    // if (previousPageData && pre && !previousPageData.length) return null // reached the end
    // if (previousPageData && !previousPageData.cars) {
    //   console.log("inseide the null state")
    //   return null
    // }
    // console.log("insidet else retuen paet")
    return `/search${location.search}&page=${pageIndex + 1}`                    // SWR key
  }
  const { data, error, isLoading, isValidating, mutate, size, setSize } = useSWRInfinite(
    getKey, fetcher)
  // const carDates = data ? [].concat(...data) : [];
  const hasMore = () => {
    console.log("cheeking valie is sthis data[data.length - 1]?.cars?", data[data.length - 1]?.cars?.length)

    console.log("cheeking valie is sthis data[data.length - 1]?.cars?", data[data.length - 1]?.cars?.length == 3)
    console.log("data is ", data)
    return (data && data[data.length - 1]?.cars?.length == 3)

  }
  const loadMore = () => {
    console.log("has more value ", hasMore());

    if (hasMore()) return setSize(prev => prev + 1);
    console.log("no more data is thre");

  }

  return (
    <div className="bg-[#FDD23F] ">
      <Navbar />
      <FilterMobile time={data?.time} pickups={data?.pickups} />

      <div className="grid md:grid-cols-4 grid-cols-3 gap-5">
        <FilterDesktop time={data?.time} pickups={data?.pickups} />

        <div className="w-full mt-10 col-span-3 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {isLoading &&
              arr.map((value) => <SearchCardSkeleton key={value} />)}






            {
              data &&

              data.map(carData => carData?.cars &&

                carData?.cars.map((car) => (
                  <>

                    < SearchCard
                      time={carData.time}
                      car={car}
                      // gearType={car?.gearType}
                      // fuelType={car?.fuelType}
                      // carId={car._id}
                      key={car._id}
                    // title={car.name}
                    // price={car.price}
                    // photos={car.phots}
                    />
                  </>

                )))



            }
            {/* {console.log("carDates", carDates)} */}

            {error && <p>error while loading</p>}
            <button className="bg-gray-300" onClick={loadMore} >load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
