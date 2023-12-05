import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import instance from "../../../config/axios";
import { useToast } from "@chakra-ui/react"
// import ReactMapGL from 'react-map-gl';
import {
  getLocation,
  selectLocation,
} from "../../../helpers/location/locationSlice";
import LocationMap from "./LocationMap";

const AddPickup = ({ locationId, coords, updatePickup }) => {

  const toast = useToast();
  const [pickupPoint, setPickupPoint] = useState("");
  const [pickupErr, setPickupErr] = useState("");
  useEffect(() => {
    setPickupErr('')
  }, [pickupPoint]);

  const submitHandler = async () => {
    console.log("location id ", locationId);
    console.log("pickupPoint", pickupPoint);
    if (pickupPoint) {
      console.log("the cooreds are ", coords);
      console.log("wowo the ");
      try {
        const response = await instance.post("/admin/pickupPoint", {
          locationId,
          coords,
          pickupPoint

        });
        console.log("response from adding pickup point", response);
        updatePickup();
        toast({
          position: "top",
          title: "Pickup added .",
          description: "Successfully Pickup  Location Added.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } catch (error) {
        console.log("error while adding pickup point ", error.response);
      }
    } else { setPickupErr("invalid") }
  };
  return (
    <div className="bg-[#FDD23F]  w-full h-fit  shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-3xl">Add PickUp Points</h1>
      <div className="flex ">

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
              className={` ${pickupErr ? `border-3 border-red-400` : ``}  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              id="location"
              placeholder="Pick up point"
              name="pickupPoint"
            />
          </div>
        </div>
      </div>
      <div>
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
