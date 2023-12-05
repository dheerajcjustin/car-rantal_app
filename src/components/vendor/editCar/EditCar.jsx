import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "../../UI/Modal";
import AddCarFields from "./EditCarFields";
// import AddCarImage from "./AddCarImage";
import { useDispatch, useSelector } from "react-redux";
import {
      getLocation,
      selectLocation,
} from "../../../helpers/location/locationSlice";
import ImageOfCars from "./EditImageOfCars";
// import { selectCurrentToken } from "../../../helpers/auth/authSlice";
// import instance from "../../../config/axios";
// import axios from "axios";

const EditCar = ({
      onClose,
      photos,
      title,
      RC,
      price,
      seatNum,
      location,
      pickupPoint,
      transmission,
      fuelType,
      documents,
}) => {
      const dispatch = useDispatch();
      useEffect(() => {
            dispatch(getLocation());
      }, []);
      const [imageUpload, setImageUpload] = useState(false);

      const [carData, setCarData] = useState({
            modelName: title,
            price: price,
            seatNum: seatNum,
            transmission: transmission,
            fuelType: fuelType,
            rcNumber: RC,
            location: location,
            pickupPoints: pickupPoint,
            photos: photos,
            documents: documents,
      });
      const valueSetting = (e) => {
            setCarData((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
            }));
      };

      // setErrMeg("Every Files are required");

      return (
            <Modal onClose={onClose}>
                  <div className="   bg-[#FDD23F]  p-5  rounded-2xl">
                        <button onClick={() => onClose()}>close</button>
                        <h1 className="text-center text-4xl  text-gray-900">
                              Add car{" "}
                        </h1>
                        <div className="">
                              {imageUpload ? (
                                    <ImageOfCars
                                          carData={carData}
                                          onClose={onClose}
                                    />
                              ) : (
                                    <AddCarFields
                                          valueSetting={valueSetting}
                                          carData={carData}
                                          setCarData={setCarData}
                                          setImageUpload={setImageUpload}
                                    />
                              )}
                        </div>
                  </div>
            </Modal>
      );
};

export default EditCar;
