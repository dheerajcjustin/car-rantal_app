import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../../config/axios";
import { selectCurrentLocation } from "../../helpers/location/locationSlice";
import { dateFormat } from "../../utils/dateFormat";

const HomeSearch = () => {
  const { locationId } = useSelector(selectCurrentLocation);
  const navigate = useNavigate();

  const pickupMin = dateFormat();
  let dropOffMin = pickupMin;
  const [searchOptions, setSearchOptions] = useState({
    pickupDate: "",
    pickupTime: "",
    dropOffDate: "",
    dropOffTime: "",
  });

  const searchOPtionChangeHandler = (e) => {
    setSearchOptions((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const searchSubmit = async (e) => {
    console.log("submited", searchOptions);
    const pickupDate = new Date(searchOptions.pickupDate);
    const dropOffDate = new Date(searchOptions.dropOffDate);

    navigate(
      `/search?pickupDate=${pickupDate}&pickupTime=${searchOptions.pickupTime}&dropOffDate=${dropOffDate}&dropOffTime=${searchOptions.dropOffTime} &locationId=${locationId}`
    );
  };

  return (
    <>
      <div className="max-w-[450px] w-full mx-auto bg-[#10191F]   p-8 px-10 rounded-lg absolute top-48  sm:left-20 opacity-95  ease-in-out transition-all ">
        <h2 className="text-4xl text-white text-center font-bold mb-7">
          search
        </h2>
        <h3 className="text-xl text-white my-5">pickup</h3>
        <div className="flex  max-w-[500px]  gap-9 ">
          <div className=" text-gray-100 ">
            <div className="inline-block">
              <label htmlFor="pickupDate">
                <input
                  onChange={searchOPtionChangeHandler}
                  type="text"
                  placeholder="Date"
                  className="bg-gray-900 w-36 border-teal-100 border-[1px] text-center rounded-md text-xl"
                  id="dropOutDate"
                  value={searchOptions.pickupDate}
                  min={pickupMin}
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                  }}
                  name="pickupDate"
                />
              </label>
            </div>
          </div>
          <div className=" text-gray-100 ">
            <label htmlFor="pickupTime" className="">
              <div>
                <select
                  onChange={searchOPtionChangeHandler}
                  value={searchOptions.pickupTime}
                  name="pickupTime"
                  id="pickupTime"
                  className="bg-gray-900 border-teal-100 border-[1px]  w-36 text-center rounded-md text-xl  py-1"
                >
                  <option value="" defaultValue hidden>
                    Time
                  </option>
                  <option value="morning">Morning </option>
                  <option value="noon">Noon </option>
                  <option value="evening">Evening </option>
                </select>
              </div>
            </label>
          </div>
        </div>
        <h3 className="text-xl text-white  my-5">Drop off </h3>
        <div className="flex  max-w-[500px]  gap-9 ">
          <div className=" text-gray-100 bg-gray-900">
            <label htmlFor="dropOutDate">
              <input
                name="dropOffDate"
                onChange={searchOPtionChangeHandler}
                type="text"
                placeholder="Date"
                className="bg-gray-900 w-36 border-teal-100 border-[1px] text-center rounded-md text-xl"
                id="dropOutDate"
                min={pickupMin}
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
                value={searchOptions.dropOffDate}
              />
            </label>
          </div>
          <div className=" text-gray-100 ">
            <label htmlFor="dropOffTime">
              <div>
                <select
                  onChange={searchOPtionChangeHandler}
                  name="dropOffTime"
                  id="dropOffTime"
                  className="bg-gray-900 border-teal-100 border-[1px]  w-36 text-center rounded-md text-xl   py-1"
                >
                  <option value="" defaultValue hidden>
                    Time
                  </option>
                  <option value="morning">Morning </option>
                  <option value="noon">Noon </option>
                  <option value="evening">Evening </option>
                </select>
              </div>
            </label>
          </div>
        </div>

        <div>
          <button
            className="min-w-[330px] my-5 bg-gray-200 py-3  rounded-lg shadow-lg shadow-gray-500/50   text-xl font-semibold"
            onClick={searchSubmit}
          >
            search
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeSearch;
