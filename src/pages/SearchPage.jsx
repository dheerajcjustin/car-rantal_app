import React from "react";
import Navbar from "../components/navbar/NavBar";
import FilterDesktop from "../components/search/FilterDesktop";
import FilterMobile from "../components/search/FilterMobile";
import SearchCard from "../components/search/SearchCard";

const SearchPage = () => {
  return (
    <div className="bg-[#FDD23F] ">
      <Navbar />
      <FilterMobile />

      <div className="grid md:grid-cols-4 grid-cols-3 gap-5">
        <FilterDesktop />

        <div className="w-full mt-10 col-span-3">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
