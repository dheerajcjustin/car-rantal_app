import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocation,
  selectLocation,
} from "../../helpers/location/locationSlice";
import { dateFormat } from "../../utils/dateFormat";

const AddCarFields = ({ valueSetting, carData, setImageUpload }) => {
  const pickupMin = dateFormat();
  const dispatch = useDispatch();
  const [availablePickup, setAvailablePickup] = useState([]);
  const [errMeg, setErrMeg] = useState("");
  const locations = useSelector(selectLocation);
  useEffect(() => {
    if (locations.length < 1) {
      dispatch(getLocation());
    }
  }, []);
  const nextHandler = () => {
    if (
      !carData.modelName ||
      !carData.price ||
      !carData.location ||
      !carData.pickupPoint ||
      !carData.rcNumber ||
      !carData.availableStart ||
      !carData.availableEnd
    ) {
      setErrMeg("the filed ");
    } else {
      console.log("car data is", carData);
      setImageUpload(true);
    }
  };
  return (
    <div className=" ">
      <div className="xl:grid grid-cols-2  flex w-full min-h-[100%]   flex-col items-center justify-center  bg-[#FDD23F]">
        <div className="relative w-full">
          <div className="w-full ml-6">
            <input
              id="modelName"
              onChange={valueSetting}
              value={carData.modelName}
              type="text"
              name="modelName"
              className="w-[90%] h-16 text-3xl border-2 border-black rounded-3xl text-center peer "
            />

            <label
              htmlFor="modelName"
              className={`absolute left-32 top-[30%] peer-focus:left-16 peer-focus:top-[-10%] bg-white peer-focus:bg-[#FDD23F]  peer-focus:opacity-100  peer-focus:text-sm  rounded-lg px-2 ${
                carData.modelName ? "opacity-0" : "opacity-50"
              }  text-3xl transition-all duration-200 `}
            >
              Model Name
            </label>
          </div>
        </div>
        <div className="relative w-full my-10">
          <div className="w-full ml-6">
            <input
              onChange={valueSetting}
              value={carData.price}
              type="number"
              name="price"
              id="price"
              className="w-[90%] h-16 text-3xl border-2 border-black rounded-3xl text-center peer "
            />
            <label
              htmlFor="price"
              className={`absolute left-32 top-[30%] peer-focus:left-16 peer-focus:top-[-10%] bg-white peer-focus:bg-[#FDD23F] peer-focus:opacity-100  peer-focus:text-sm  rounded-lg px-2  text-3xl transition-all duration-200 ${
                carData.price ? "opacity-0" : "opacity-50"
              }`}
            >
              Price
            </label>
          </div>
        </div>
        <div className="relative w-full ">
          <div className="w-full ml-6">
            <input
              onChange={valueSetting}
              value={carData.rcNumber}
              type="number"
              name="rcNumber"
              id="rcNumber"
              className="w-[90%] h-16 text-3xl border-2 border-black rounded-3xl text-center peer "
            />
            <label
              htmlFor="rcNumber"
              className={`absolute left-32 top-[30%] peer-focus:left-16 peer-focus:top-[-10%] bg-white peer-focus:bg-[#FDD23F] peer-focus:opacity-100  peer-focus:text-sm  rounded-lg px-2   text-3xl transition-all duration-200  ${
                carData.rcNumber ? "opacity-0" : "opacity-50"
              }`}
            >
              Rc Number
            </label>
          </div>
        </div>
        <div className="relative w-full">
          <div className="w-full ml-6">
            <select
              name="seatNum"
              onChange={valueSetting}
              value={carData.seatNum}
              className="w-[90%] h-16 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
            >
              <option value="">Select Seat Number</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>
        </div>
        <select
          name="location"
          onChange={(e) => {
            valueSetting(e);
            const value = e.target.value;
            const data = locations.filter((location) => location._id == value);
            console.log(data[0].pickupPoints);

            setAvailablePickup(data[0]?.pickupPoints);
          }}
          value={carData.location}
          className="w-[90%] h-16 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
        >
          <option value="">Select Location </option>
          {locations.map((location) => (
            <option value={location._id} key={location._id}>
              {location.location}
            </option>
          ))}
        </select>
        <select
          name="pickupPoint"
          onChange={valueSetting}
          value={carData.pickupPoint}
          className="w-[90%] h-16 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
        >
          <option value="">Select pickupPoint</option>
          {availablePickup.map((points) => (
            <option value={points._id} key={points._id}>
              {points.name}
            </option>
          ))}
        </select>

        <div
          onChange={valueSetting}
          className="w-[90%] h-16 mt-10 text-3xl rounded-3xl text-center  "
        >
          <label htmlFor="manual" className="mr-12">
            <input
              className=" h-7  w-7 "
              defaultChecked
              type="radio"
              name="transmission"
              id="manual"
              value="manual"
            />
            Manual
          </label>
          <label htmlFor="auto">
            <input
              className=" h-7 w-7"
              type="radio"
              name="transmission"
              id="auto"
              value="auto"
            />
            Auto
          </label>
        </div>

        <div
          onChange={valueSetting}
          className="w-[90%] h-20 text-3xl rounded-3xl text-center  "
        >
          <label htmlFor="petrol" className="mr-12">
            Petrol
            <input
              className=" h-7 w-7"
              defaultChecked
              type="radio"
              name="fuelType"
              id="petrol"
              value="petrol"
            />
          </label>
          <label htmlFor="auto">
            Auto
            <input
              className=" h-7 w-7"
              type="radio"
              name="fuelType"
              id="auto"
              value="auto"
            />
          </label>
        </div>
        <label htmlFor="pickupDate">
          <input
            onChange={valueSetting}
            type="text"
            placeholder="Date"
            className="w-[90%] h-16 text-3xl border-2 border-black rounded-3xl text-center peer "
            id="dropOutDate"
            value={carData.availableStart}
            min={pickupMin}
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
            name="availableStart"
          />
        </label>
        <label htmlFor="pickupDate">
          <input
            onChange={valueSetting}
            type="text"
            placeholder="Date"
            className="w-[90%] h-16 text-3xl border-2 border-black rounded-3xl text-center peer "
            id="dropOutDate"
            value={carData.availableEnd}
            min={pickupMin}
            onFocus={(e) => {
              e.target.type = "date";
              e.target.click();
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
            name="availableEnd"
          />
        </label>
        {<p>{errMeg}</p>}
        <button
          className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AddCarFields;
