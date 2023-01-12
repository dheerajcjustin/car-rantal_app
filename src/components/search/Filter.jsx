import { dateFormat } from "../../utils/dateFormat";
import React, { useState } from "react";

const Filter = () => {
  const availableLocation = [
    {
      _id: "erefdkfd",
      location: "Bus Stand Manthavady",
    },
    {
      _id: "dfdskfds;",
      location: "Bus Stand Kalpatta",
    },
  ];
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
  return (
    <>
      <h2 className="text-3xl font-bold  text-gray-50">Filter</h2>
      <div className="w-full">
        <h3 className="text-xl text-white  my-5">Pick up </h3>

        <div className=" w-full flex flex-col lg:flex-row gap-3">
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
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-3 ">
          {availableLocation.map((location) => (
            <>
              <div className="">
                <input
                  type="checkbox"
                  id={location._id}
                  name={location._id}
                  className="w-12 h-12 peer"
                />
                <label
                  htmlFor={location._id}
                  className="bg-slate-300  peer-checked:bg-blue-500 peer-checked:text-blue-500 text--400"
                >
                  {location.location}
                </label>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
