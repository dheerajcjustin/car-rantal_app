import React, { useEffect, useState, useRef, useCallback } from "react";
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
  const [selectPickup, setSelectPickup] = useState('');

  const location = useLocation();
  const [hasMore, setHasMore] = useState(false);
  const [filter, setFilter] = useState("");
  const getKey = (pageIndex, previousPageData) => {
    return `/search${location.search}&page=${pageIndex + 1}&filter=${selectPickup}`                    // SWR key
  }

  const { data, error, isLoading, isValidating, mutate, size, setSize } = useSWRInfinite(
    getKey, fetcher)
  console.log("data inside the ", error)
  // const carDates = data ? [].concat(...data) : [];
  useEffect(() => {
    CheckHasMore();
  }, [data]);
  const CheckHasMore = () => {

    setHasMore(data && data[data.length - 1]?.cars?.length == 3)
    return (data && data[data.length - 1]?.cars?.length == 3)

  }
  const loadMore = () => {
    console.log("hasmore", CheckHasMore());
    if (!CheckHasMore()) return
    return setSize(prev => prev + 1);

  }

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const observer = useRef();
  const lastVendorRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entires => {
      if (entires[0].isIntersecting && hasMore) {
        console.log("has mor state ", hasMore);
        setSize(prev => prev + 1);
        loadMore();
      }

    })
    if (node) observer.current.observe(node)
  }, [hasMore])
  // useEffect(() => {

  //   mutate();
  //   // return () => {
  //   //   cleanup
  //   // };
  // }, [selectPickup]);

  const filterValueChange = (value) => {
    setSelectPickup(prev => {
      if (prev.includes(value)) {
        return prev;
      }

      else {

        return [...prev, value]
      }

    }
    )
  }

  return (
    <div className="bg-[#FDD23F] ">
      <Navbar />
      {
        data &&

        <FilterMobile time={data[0]?.time} pickups={data[0]?.pickups} />
      }
      {
        isLoading &&
        <FilterMobile />
      }

      <div className="grid md:grid-cols-4 grid-cols-3 gap-5">

        {
          data &&

          <FilterDesktop time={data[0]?.time} pickups={data[0]?.pickups} setSelectedPickups={setSelectPickup} />
        }
        {
          isLoading &&
          <FilterDesktop />
        }
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
            {isLoadingMore && <p>Loading More</p>}

            {error && <p>error while loading</p>}
            <div ref={lastVendorRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
