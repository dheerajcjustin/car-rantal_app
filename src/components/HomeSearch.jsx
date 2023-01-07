import React from "react";
import { dateToday } from "../utils/dateFormat";
const HomeSearch = () => {
  const today = dateToday();
  return (
    <>
      <div className="max-w-[450px] w-full mx-auto bg-gray-900  p-8 px-10 rounded-lg absolute top-48  sm:left-20 opacity-95 hover:opacity-100 ease-in-out transition-all ">
        <h2 className="text-4xl text-white text-center font-bold mb-7">
          search
        </h2>
        <h3 className="text-xl text-white my-5">pickup</h3>
        <div className="flex  max-w-[500px]  gap-9 ">
          <div className=" text-gray-100 ">
            <div className="inline-block">
              <label htmlFor="pickupDate">
                <input
                  width="50px"
                  type="text"
                  placeholder="Date"
                  className=" bg-gray-900 w-36 border-teal-100 border-[1px] text-center rounded-md text-xl"
                  id="pickupDate"
                  min={today}
                  onFocus={(e) => {
                    e.target.type = "date";
                  }}
                  onBlur={(e) => {
                    e.target.type = "text";
                  }}
                />
              </label>
            </div>
          </div>
          <div className=" text-gray-100 ">
            <label htmlFor="pickupTime" className="">
              <div>
                <select
                  name="pickupTime"
                  id="pickupTime"
                  className="bg-gray-900 border-teal-100 border-[1px]  w-36 text-center rounded-md text-xl  py-1"
                >
                  <option value="" disabled defaultValue>
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
                type="text"
                placeholder="Date"
                className="bg-gray-900 w-36 border-teal-100 border-[1px] text-center rounded-md text-xl"
                id="dropOutDate"
                min={today}
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
              />
            </label>
          </div>
          <div className=" text-gray-100 ">
            <label htmlFor="dropOutTime">
              <div>
                <select
                  name="dropOutTime"
                  id="dropOutTime"
                  className="bg-gray-900 border-teal-100 border-[1px]  w-36 text-center rounded-md text-xl   py-1"
                >
                  <option value="" disabled defaultValue>
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
          <button className="min-w-[330px] my-5 bg-emerald-500 py-3  rounded-lg shadow-lg shadow-emerald-500/50   text-xl font-semibold">
            search
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeSearch;
