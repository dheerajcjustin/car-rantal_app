import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import instance from "../../config/axios";
import {
  getLocation,
  selectLocation,
} from "../../helpers/location/locationSlice";

const AddPickup = () => {
  const dispatch = useDispatch();
  const locations = useSelector(selectLocation);
  const [locationId, setLocationId] = useState("");
  const [pickupPoint, setPickupPoint] = useState("");
  useEffect(() => {
    dispatch(getLocation());
  }, []);
  const submitHandler = async () => {
    console.log("location id and ", locationId);
    console.log("pickupPoint", pickupPoint);
    if (locationId && pickupPoint) {
      try {
        const response = await instance.post("/admin/pickupPoint", {
          locationId,
          pickupPoint,
        });
        console.log("response from adding pickup point", response);
      } catch (error) {
        console.log("error while adding pickup point ", error.response);
      }
    }
  };
  return (
    <div className="bg-[#FDD23F]  w-full h-fit  shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-3xl">Add PickUp Points</h1>
      <div className="flex ">
        <div className=" m-5 w-full">
          <label
            htmlFor="location"
            className="block text-gray-700 text-xl font-bold mb-2"
          >
            Location
          </label>
          <div className="">
            <select
              onChange={(e) => setLocationId(e.target.value)}
              value={locationId}
              id="large"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Choose Location</option>
              {locations.map((location) => (
                <option key={location._id} value={location._id}>
                  {location.location}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="m-5  w-full">
          <label
            htmlFor="brandDesc"
            className="block text-gray-700 text-xl font-bold mb-2"
          >
            pickup Point
          </label>
          <div className="">
            <input
              value={pickupPoint}
              onChange={(e) => setPickupPoint(e.target.value)}
              type="text"
              className="   shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              placeholder="Pick up point"
              name="pickupPoint"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          type="submit"
          className=" bg-[#10191F] text-gray-100 px-3 py-1 text-xl rounded-md mr-16 "
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddPickup;
