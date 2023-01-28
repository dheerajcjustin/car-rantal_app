import React, { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import instance from "../../config/axios";
import { selectCurrentLocation } from "../../helpers/location/locationSlice";
import {
  dateFormat,
  minPickupDate,
  pickupTimeList,
  dropOffTimeList,
  MinDropOffDate,
} from "../../utils/dateFormat";
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";

const HomeSearch = () => {
  const [pickupDate, setPickupDate] = useState();
  const [dropOffDate, setDropOffDate] = useState();
  const [pickupTimes, setPickupTimes] = useState([]);
  const [pickupTime, setPickupTime] = useState("");
  const [dropOffTimes, setDropOffTimes] = useState([]);
  const [dropOffTime, setDropOffTime] = useState("");

  const { locationId } = useSelector(selectCurrentLocation);
  const navigate = useNavigate();

  const [pickupErr, setPickupErr] = useState("");
  const [pickupTimeErr, setPickupTimeErr] = useState("");
  const [dropOffDateErr, setDropOffDateErr] = useState("");
  const [dropOffTimeErr, setDropOffTimeErr] = useState("");

  const pickupDateValidation = () => {
    if (!pickupDate) {
      console.log("");
      setPickupErr("Select  the date first");
      return false;
    }
    return true;
  };
  useEffect(() => {
    setPickupErr("");
  }, [pickupDate]);
  const pickupTimeValidation = () => {
    // pickupDateValidation();
    if (!pickupTime) {
      setPickupTimeErr("select pickup Time");
      return false;
    }
    return true;
  };
  useEffect(() => {
    setPickupTimeErr("");
  }, [pickupTime]);
  const dropOffTimeValidation = () => {
    if (!dropOffDate) {
      setDropOffDateErr("select Drop Date");
      return false;
    }
    return true;
  };
  useEffect(() => {
    setDropOffDateErr("");
  }, [dropOffDate]);

  const searchSubmit = async (e) => {
    console.log("afdfdfdfdfddfsadsfdsdfsfdfsdaf    Search");
    if (
      pickupDateValidation() &&
      pickupTimeValidation() &&
      dropOffTimeValidation()
    ) {
      console.log("all three are vaild ");
      if (!dropOffTime) {
        setDropOffTimeErr("drop Off Time is must");
      } else {
        console.log(")(*&^%$UILKJHGRTYUIKJHG)    Search");

        navigate(
          `/search?pickupDate=${pickupDate}&pickupTime=${pickupTime}&dropOffDate=${dropOffDate}&dropOffTime=${dropOffTime} &locationId=${locationId}`
        );
      }
    } else {
      console.log("values are not valid");
    }
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
                <DatePicker
                  minDate={minPickupDate()}
                  render={(stringDate, openCalendar) => {
                    return (
                      <button
                        className={` ${
                          pickupErr
                            ? `border-red-600 border-[2px]`
                            : `border-teal-100 border-[1px] `
                        }   bg-gray-900  w-36 text-center rounded-md text-xl  py-1 after:${
                          pickupErr && pickupErr
                        }`}
                        onClick={openCalendar}
                      >
                        {stringDate ? stringDate : "Date"}
                      </button>
                    );
                  }}
                  className=" bg-banana text-black"
                  value={pickupDate}
                  onChange={(date) => {
                    setPickupDate(date);
                    console.log(date);
                    console.log("pickup time", pickupTimeList(date));
                    setPickupTimes(pickupTimeList(date));
                  }}
                />
              </label>
            </div>
          </div>
          <div className=" text-gray-100 ">
            <label htmlFor="pickupTime" className="">
              <div>
                <select
                  onFocus={pickupDateValidation}
                  // onClick={pickupTimeValidation}
                  onChange={(e) => setPickupTime(e.target.value)}
                  value={pickupTime}
                  name="pickupTime"
                  id="pickupTime"
                  className={`${
                    pickupTimeErr
                      ? `border-red-600 border-[2px]`
                      : `border-teal-100 border-[1px] `
                  } bg-gray-900   w-36 text-center rounded-md text-xl  py-1`}
                >
                  <option value="" defaultValue hidden>
                    Time
                  </option>
                  {pickupTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </label>
          </div>
        </div>
        <h3 className="text-xl text-white  my-5">Drop off </h3>
        <div className="flex  max-w-[500px]  gap-9 ">
          <div className=" text-gray-100 bg-gray-900">
            <label htmlFor="dropOutDate">
              <DatePicker
                minDate={MinDropOffDate(pickupDate, pickupTime)}
                render={(stringDate, openCalendar) => {
                  return (
                    <button
                      className={`   ${
                        dropOffDateErr
                          ? `border-red-600 border-[2px]`
                          : `border-teal-100 border-[1px] `
                      }  bg-gray-900  w-36 text-center rounded-md text-xl  py-1`}
                      onClick={() => {
                        console.log(
                          "wowo piduptime validation ",
                          pickupTimeValidation()
                        );
                        if (pickupTimeValidation()) {
                          openCalendar();
                        }
                      }}
                    >
                      {stringDate ? stringDate : "Date"}
                    </button>
                  );
                }}
                className=" bg-banana text-black"
                value={dropOffDate}
                onChange={(date) => {
                  setDropOffDate(date);
                  setDropOffTimes(
                    dropOffTimeList(pickupDate, pickupTime, date)
                  );
                }}
              />
            </label>
          </div>
          <div className=" text-gray-100 ">
            <label htmlFor="dropOffTime">
              <div>
                <select
                  onFocus={dropOffTimeValidation}
                  value={dropOffTime}
                  onChange={(e) => setDropOffTime(e.target.value)}
                  name="dropOffTime"
                  id="dropOffTime"
                  dropOffTimeErr
                  className={` ${
                    dropOffTimeErr
                      ? `border-red-600 border-[2px]`
                      : `border-teal-100 border-[1px] `
                  }  bg-gray-900   w-36 text-center rounded-md text-xl   py-1`}
                >
                  <option value="" defaultValue hidden>
                    Time
                  </option>

                  {dropOffTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
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
