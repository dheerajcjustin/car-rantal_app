import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "../../../components/UI/Modal";
import AddCarFields from "./AddCarFields";
// import AddCarImage from "./AddCarImage";
import { useDispatch, useSelector } from "react-redux";
import {
      getLocation,
      selectLocation,
} from "../../../helpers/location/locationSlice";
import ImageOfCars from "./ImageOfCars";

const defaultCarData = {
      modelName: "",
      price: "",
      seatNum: "",
      transmission: "manual",
      fuelType: "petrol",
      rcNumber: "",
      location: "",
      pickupPoints: [],
};

const AddCarCompound = ({ onClose }) => {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(getLocation());
      }, []);

      const [errMeg, setErrMeg] = useState("");

      const [imageUpload, setImageUpload] = useState(false);

      const [carData, setCarData] = useState(defaultCarData);
      const [selectedPickup, setSelectedPickup] = useState([]);

      const resetCarData = () => {
            setCarData(defaultCarData);
            setSelectedPickup([]);
      };

      const valueSetting = (e) => {
            setCarData((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
            }));
      };

      const sumbmitCheck = () => {
            if (
                  !carData.modelName ||
                  !carData.price ||
                  !carData.location ||
                  !carData.rcNumber ||
                  !carData.pickupPoints.length
            ) {
                  console.log({ carData });
                  setErrMeg("All the filed is required");
                  return false;
            } else {
                  setErrMeg("");
                  return true;
            }
      };

      return (
            <div className="rounded-2xl">
                  <h1 className="text-center text-4xl  text-gray-900">
                        Add car
                  </h1>
                  <div className="flex flex-wrap justify-center gap-14">
                        <div className="  ">
                              <AddCarFields
                                    valueSetting={valueSetting}
                                    carData={carData}
                                    setCarData={setCarData}
                                    errMeg={errMeg}
                                    setErrMeg={setErrMeg}
                                    setImageUpload={setImageUpload}
                                    selectedPickup={selectedPickup}
                                    setSelectedPickup={setSelectedPickup}
                              />
                        </div>
                        <div className="bg-gray-200  p-4">
                              <ImageOfCars
                                    filedCheck={sumbmitCheck}
                                    carData={carData}
                                    onComplete={resetCarData}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default AddCarCompound;
