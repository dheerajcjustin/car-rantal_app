import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdBackspace } from "react-icons/md";
import {
      getLocation,
      selectLocation,
} from "../../../helpers/location/locationSlice";
import { dateFormat } from "../../../utils/dateFormat";

const AddCarFields = ({
      valueSetting,
      carData,
      setImageUpload,
      setCarData,
      errMeg,
      setErrMeg,
      selectedPickup,
      setSelectedPickup,
}) => {
      // const [services, setServices] = useState([]);
      const [pickupPointList, setPickupPointList] = useState([]);
      const pickupMin = dateFormat();
      const dispatch = useDispatch();
      // const [errMeg, setErrMeg] = useState("");
      const locations = useSelector(selectLocation);
      useEffect(() => {
            if (locations.length < 1) {
                  dispatch(getLocation());
            }
      }, []);

      const addPickUpPoints = (e) => {
            const { name, _id } = pickupPointList.filter(
                  (pickup) => pickup._id == e.target.value
            )[0];

            setSelectedPickup((prev) => Array.from(new Set([...prev, name])));

            setCarData((prevState) => {
                  const { pickupPoints: prevpickupPoints, ...rest } = prevState;

                  const pickupPoints = Array.from(
                        new Set([...prevpickupPoints, _id])
                  );
                  const result = {
                        ...rest,
                        pickupPoints,
                  };
                  return result;
            });
      };
      const nextHandler = () => {
            if (services.length < 1) {
            } else {
                  setCarData((prevState) => ({
                        ...prevState,
                        pickupPoints: services,
                  }));
            }

            if (
                  !carData.modelName ||
                  !carData.price ||
                  !carData.location ||
                  !carData.rcNumber
            ) {
                  setErrMeg("the filed ");
            } else {
                  console.log("car data is", carData);
                  setImageUpload(true);
            }
      };

      const selectService = (e) => {
            const selected = pickupPointList.filter(
                  (pickup) => pickup._id == e.target.value
            )[0];

            if (services.includes(e.target.value)) {
                  setServices((prevState) => {
                        return [...prevState];
                  });

                  setSelectedPickup((prev) => [...prev]);
            } else {
                  setCarData((prevState) => ({
                        ...prevState,
                        pickupPoints: [
                              ...prevState.pickupPoints,
                              e.target.value,
                        ],
                  }));
                  setSelectedPickup((prev) => [...prev, selected.name]);

                  // setSelectedPickup(prev => [...prev, e.target.options[selectedIndex].text])
            }
      };
      const backService = () => {
            setCarData((prevState) => {
                  const { pickupPoints: prevpickupPoints, ...rest } = prevState;

                  return {
                        ...rest,
                        pickupPoints: prevpickupPoints.slice(0, -1),
                  };
            });

            setSelectedPickup((prev) => prev.slice(0, -1));
            // servicesCheck()
      };
      // flex w-full min-h-[100%]   flex-col items-center justify-center
      return (
            <form className="max-w-md mx-auto  bg-gray-200 h-full p-5 rounded-lg">
                  <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                              <label
                                    htmlFor="modelName"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                    Model Name
                              </label>
                              <input
                                    type="text"
                                    name="modelName"
                                    id="modelName"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder=" "
                                    required
                                    onChange={valueSetting}
                                    value={carData.modelName}
                              />
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                              <label
                                    htmlFor="price"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                    Price
                              </label>
                              <input
                                    onChange={valueSetting}
                                    value={carData.price}
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder=" "
                                    required
                              />
                        </div>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                              <label
                                    htmlFor="rcNumber"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                    rcNumber
                              </label>
                              <input
                                    onChange={valueSetting}
                                    value={carData.rcNumber}
                                    type="number"
                                    name="rcNumber"
                                    id="rcNumber"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder=" "
                                    required
                              />
                        </div>

                        <div className="relative z-0 w-full mb-5 group">
                              <label
                                    htmlFor="seatNum"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                    Select Number of seats
                              </label>

                              <select
                                    id="seatNum"
                                    name="seatNum"
                                    onChange={valueSetting}
                                    value={carData.seatNum}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

                  <div className="relative z-0 w-full mb-5 group">
                        <label
                              htmlFor="location"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                              Select Location
                        </label>
                        <select
                              name="location"
                              onChange={(e) => {
                                    valueSetting(e);
                                    const value = e.target.value;
                                    const data = locations.filter(
                                          (location) => location._id == value
                                    );
                                    console.log(data[0]?.pickupPoints);
                                    setPickupPointList(data[0]?.pickupPoints);
                              }}
                              value={carData.location}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                              <option value="">Select Location </option>
                              {locations.map((location) => (
                                    <option
                                          value={location._id}
                                          key={location._id}
                                    >
                                          {location.location}
                                    </option>
                              ))}
                        </select>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                        <div className="flex justify-between">
                              <label>Select Transmission:</label>
                              <div
                                    onChange={valueSetting}
                                    className="w-1/2 flex gap-5"
                              >
                                    <label
                                          htmlFor="manual"
                                          className="flex gap-2 items-center "
                                    >
                                          Manual
                                          <input
                                                className=" h-7  w-7 "
                                                defaultChecked
                                                type="radio"
                                                name="gearType"
                                                id="manual"
                                                value="manual"
                                          />
                                    </label>
                                    <label
                                          htmlFor="auto"
                                          className="flex gap-2 items-center"
                                    >
                                          Auto
                                          <input
                                                className=" h-7 w-7"
                                                type="radio"
                                                name="gearType"
                                                id="auto"
                                                value="auto"
                                          />
                                    </label>
                              </div>
                        </div>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                        <div className="flex justify-between">
                              <label>Select Transmission:</label>
                              <div
                                    onChange={valueSetting}
                                    className="w-1/2 flex gap-5"
                              >
                                    <label
                                          htmlFor="petrol"
                                          className="flex gap-2 items-center w-20"
                                    >
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
                                    <label
                                          htmlFor="diesel"
                                          className="flex gap-2 items-center w-20"
                                    >
                                          Diesel
                                          <input
                                                className=" h-7 w-7"
                                                type="radio"
                                                name="fuelType"
                                                id="diesel"
                                                value="diesel"
                                          />
                                    </label>
                              </div>
                        </div>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                        <label
                              htmlFor="location"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                              Select Location
                        </label>

                        <select
                              name="services"
                              value=""
                              onChange={(e) => {
                                    addPickUpPoints(e);
                                    // selectService(e);
                              }}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                              <option value="#">Select Pickup</option>\
                              {
                                    // console.log("pickupPoint", pickupPointList)
                                    pickupPointList &&
                                          pickupPointList.map((pickupPoint) => (
                                                <option
                                                      key={pickupPoint._id}
                                                      value={pickupPoint._id}
                                                >
                                                      {pickupPoint.name}
                                                </option>
                                          ))
                              }
                        </select>
                        <div className="flex justify-between">
                              <div className="break-words">
                                    {selectedPickup?.join(" , ")}
                              </div>
                              {selectedPickup.length ? (
                                    <MdBackspace
                                          onClick={backService}
                                          className=" mr-2"
                                    />
                              ) : null}
                        </div>
                  </div>

                  {<p>{errMeg}</p>}
                  <div className="w-full"></div>
                  {/* <div className="w-full">
                        <button
                              className="w-[60%] float-right  h-20 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                              onClick={nextHandler}
                        >
                              Next
                        </button>
                  </div> */}
            </form>
      );
};

export default AddCarFields;
