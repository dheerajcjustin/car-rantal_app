import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdBackspace } from "react-icons/md";
import {
      getLocation,
      selectLocation,
} from "../../../helpers/location/locationSlice";
import { dateFormat } from "../../../utils/dateFormat";

const EditCarFields = ({
      valueSetting,
      carData,
      setImageUpload,
      setCarData,
}) => {
      const [selectedPickup, setSelectedPickup] = useState([]);
      const [services, setServices] = useState([]);
      const [pickupPointList, setPickupPointList] = useState([]);
      const pickupMin = dateFormat();
      const dispatch = useDispatch();
      const [errMeg, setErrMeg] = useState("");
      const locations = useSelector(selectLocation);
      useEffect(() => {
            if (locations.length < 1) {
                  dispatch(getLocation());
            }
      }, []);
      useEffect(() => {
            if (!carData) return;
            carData.pi;
      }, [locations]);
      const nextHandler = () => {
            console.log("selected pickups", services);
            if (services.length < 1) {
                  console.log("is is empty array");
            } else {
                  console.log("inside the elese");
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
                  (pickup) => pickup._id == e.target.value,
            )[0];

            if (services.includes(e.target.value)) {
                  setServices((prevState) => {
                        return [...prevState];
                  });

                  setSelectedPickup((prev) => [...prev]);
            } else {
                  setServices((prevState) => [...prevState, e.target.value]);
                  setSelectedPickup((prev) => [...prev, selected.name]);

                  // setSelectedPickup(prev => [...prev, e.target.options[selectedIndex].text])
            }
      };
      const backService = () => {
            setServices(services.slice(0, -1));
            setSelectedPickup(selectedPickup.slice(0, -1));
            // servicesCheck()
      };
      // flex w-full min-h-[100%]   flex-col items-center justify-center
      return (
            <div className="grid sm:grid-cols-2  grid-cols-1  gap-5   bg-[#FDD23F]">
                  <div className="w-full ml-6 relative">
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
                                    carData.modelName
                                          ? "opacity-0"
                                          : "opacity-50"
                              }  text-3xl transition-all duration-200 `}
                        >
                              Model Name
                        </label>
                  </div>
                  <div className="w-full ml-6 relative">
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
                  <div className="w-full ml-6 relative">
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
                                    carData.rcNumber
                                          ? "opacity-0"
                                          : "opacity-50"
                              }`}
                        >
                              Rc Number
                        </label>
                  </div>
                  <div className="w-full ml-6 relative">
                        <select
                              name="seatNum"
                              onChange={valueSetting}
                              value={carData.seatNum}
                              className="w-[90%] h-16  text-3xl border-2 border-black rounded-3xl text-center"
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
                  <div className="w-full ml-6 relative">
                        <select
                              name="location"
                              onChange={(e) => {
                                    valueSetting(e);
                                    const value = e.target.value;
                                    const data = locations.filter(
                                          (location) => location._id == value,
                                    );
                                    console.log(data[0]?.pickupPoints);
                                    setPickupPointList(data[0]?.pickupPoints);
                              }}
                              value={carData?.location._id}
                              className="w-[90%] h-16  text-3xl border-2 border-black rounded-3xl text-center"
                        >
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

                  <div className="w-full ml-6 ">
                        <div
                              onChange={valueSetting}
                              className="w-[90%] h-16 mt-10 text-3xl rounded-3xl text-center  "
                        >
                              <label htmlFor="manual" className="mr-12">
                                    <input
                                          className=" h-7  w-7 "
                                          defaultChecked
                                          type="radio"
                                          name="gearType"
                                          id="manual"
                                          value="manual"
                                    />
                                    Manual
                              </label>
                              <label htmlFor="auto">
                                    <input
                                          className=" h-7 w-7"
                                          type="radio"
                                          name="gearType"
                                          id="auto"
                                          value="auto"
                                    />
                                    Auto
                              </label>
                        </div>
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
                        <label htmlFor="diesel">
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
                  <div className="w-[90%]  border-2 border-black rounded-3xl text-center flex flex-col items-center justify-center break-words">
                        <div className=" break-words">
                              {selectedPickup.join(" , ")}
                        </div>
                        <MdBackspace
                              onClick={backService}
                              className="self-end mr-2"
                        />
                        <select
                              name="services"
                              value=""
                              onChange={(e) => {
                                    selectService(e);
                              }}
                              className="h-12s bottom-0 border-none  w-full text-center rounded-3xl"
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
                  </div>

                  {<p>{errMeg}</p>}
                  <div className="w-full"></div>
                  <div className="w-full">
                        <button
                              className="w-[60%] float-right  h-20 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                              onClick={nextHandler}
                        >
                              Next
                        </button>
                  </div>
            </div>
      );
};

export default EditCarFields;
