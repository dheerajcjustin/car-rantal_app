import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import Filter from "./Filter";

const FilterMobile = () => {
  const [filterMobile, setFilterMobile] = useState("filter");
  const [sortMobile, setSortMobile] = useState("sort");
  const filterBackdropHandler = (e) => {
    if (e.target.id === "filterBackdrop") {
      setFilterMobile(!filterMobile);
    }
  };
  const filterButtonHandler = (e) => {
    setFilterMobile(!filterMobile);
  };
  const sortBackdropHandler = (e) => {
    if (e.target.id === "SortBackdrop") {
      console.log("clicked");
      setSortMobile(!sortMobile);
    }
  };

  const sortButtonHandler = () => {
    setSortMobile(!sortMobile);
  };

  return (
    <div className="h-16 px-8 bg-[#FDD23F] bottom-0 fixed z-20 shadow-xl shadow-amber-300   w-full lg:hidden rounded-t-xl ">
      <div className="flex relative h-20  justify-around ">
        <div
          className="w-full text-center text-2xl font-semibold pt-5 "
          onClick={filterButtonHandler}
        >
          Filter
        </div>

        <div
          className="w-full text-center  text-2xl font-semibold pt-5"
          onClick={sortButtonHandler}
        >
          Sort
        </div>
      </div>

      <div
        id="filterBackdrop"
        onClick={filterBackdropHandler}
        className={
          !filterMobile
            ? "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm "
            : "fixed left-[-100%]"
        }
      >
        <div
          className={
            !filterMobile
              ? "fixed left-0 bottom-0 w-[60%] border-r border-r-gray-900 bg-gray-700  w-[50%] p-5 ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <div className="p-5 w-fu">
            <Filter />
          </div>
        </div>
      </div>
      <div
        id="SortBackdrop"
        onClick={sortBackdropHandler}
        className={
          !sortMobile
            ? "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm "
            : "fixed right-[-100%]"
        }
      >
        <div
          className={
            !sortMobile
              ? "fixed right-0 bottom-0 w-[-100%] border-r border-r-gray-900 bg-red-300 ease-in-out duration-500 "
              : "fixed right-[-100%]"
          }
        >
          <ul className="p-4 uppercase">
            <li
              className="p-4 border-b border-gray-600 font-bold"
              onClick={sortButtonHandler}
            >
              close
            </li>
            <li className="p-4 border-b border-gray-600 font-bold">by price</li>
            <li className="p-4 border-b border-gray-600 font-bold">
              relevance
            </li>
            <li className="p-4 border-b border-gray-600 font-bold">
              popularity
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterMobile;

// import DistrictsModal from "../UI/Districts_modal";
