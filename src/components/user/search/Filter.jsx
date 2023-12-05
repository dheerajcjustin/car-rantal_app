import { dateFormat } from "../../../utils/dateFormat";
import React, { useState, useEffect } from "react";

const Filter = ({ availableLocation, mutate, setSelectedPickups }) => {



  const today = dateFormat();
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

  const filterPickup = (e) => {
    setSelectedPickups(e.target.value)
  }
  return (
    <>
      <h2 className="text-3xl font-bold  text-gray-50">Filter</h2>
      <div className="w-full">
        {/* <h3 className="text-xl text-white  my-5">Pick up </h3> */}

        {/* <div className=" w-full flex flex-col lg:flex-row gap-3">
          <div className=" text-gray-100 w-[50%]  ">
            <label htmlFor="pickupDate">
              <input
                onChange={searchOPtionChangeHandler}
                type="text"
                placeholder="Date"
                className="bg-gray-900  w-[100%] border-teal-100 border-[1px] text-center rounded-md text-xl"
                id="dropOutDate"
                value={searchOptions.pickupDate}
                min={today}
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
          <div className=" text-gray-100 w-[40%] ">
            <label htmlFor="pickupTime" className="">
              <div>
                <select
                  onChange={searchOPtionChangeHandler}
                  value={searchOptions.pickupTime}
                  name="pickupTime"
                  id="pickupTime"
                  className="bg-gray-900 border-teal-100 border-[1px]  w-[100%] text-center rounded-md text-xl  py-1"
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
        <div className="w-full flex flex-col lg:flex-row gap-3 ">
          <div className=" text-gray-100 bg-gray-900 w-[50%] ">
            <label htmlFor="dropOutDate">
              <input
                name="dropOffDate"
                onChange={searchOPtionChangeHandler}
                type="text"
                placeholder="Date"
                className="bg-gray-900 w-[100%] border-teal-100 border-[1px] text-center rounded-md text-xl"
                id="dropOutDate"
                min={today}
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
          <div className=" text-gray-100  w-[40%] ">
            <label htmlFor="dropOffTime">
              <div>
                <select
                  onChange={searchOPtionChangeHandler}
                  name="dropOffTime"
                  id="dropOffTime"
                  className="bg-gray-900 border-teal-100 border-[1px]  w-full text-center rounded-md text-xl   py-1"
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
        </div> */}
        <h2 className="text-2xl text-gray-50 pt-5 pb-2">Available Locations</h2>

        {availableLocation && availableLocation.map((location, index) => (

          <div className="w-[90%] flex flex-col my-4  " key={location._id} >
            {/* {console.log(" locarion ", index, location)} */}
            <div className="relative"
              onClick={(e) => filterPickup(e)}

            >
              {/* <label
                htmlFor={location._id}
                className="   w-full  peer-checked:bg-blue-500 peer-checked:text-blue-500 text--400 "
              >
                {location.location}
              </label> */}
              <input


                type="checkbox"
                id={location._id}
                value={location._id}
                className="w-full h-12 peer absolute opacity-0 "
              />
              <div className=" text-[#FDD23F]  p-2 w-full min-h-12 ring-2 ring-[#FDD23F] text--400 text-center ">
                <span className="text-xl ">{location.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
