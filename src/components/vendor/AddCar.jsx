import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import AddCarFields from "./AddCarFields";
import AddCarImage from "./AddCarImage";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocation,
  selectLocation,
} from "../../helpers/location/locationSlice";
import { selectCurrentToken } from "../../helpers/auth/authSlice";
import instance from "../../config/axios";
import axios from "axios";

const AddCar = ({ onClose }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation());
  }, []);

  return (
    <>
      <Backdrop onClose={onClose}>
        <ModalOverlay onClose={onClose} />
      </Backdrop>
    </>
  );
};

export default AddCar;

function Backdrop({ onClose, children }) {
  const closeButtonHandler = (e) => {
    if (e.target.id === "modalBackDrop") onClose();
  };
  return (
    <div
      id="modalBackDrop"
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40  bg-slate-500 bg-opacity-75"
      onClick={closeButtonHandler}
    >
      {children}
    </div>
  );
}
function ModalOverlay({ onClose }) {
  const url = [];
  const token = useSelector(selectCurrentToken);
  const [imageUpload, setImageUpload] = useState(false);
  const [imageFront, setImageFront] = useState();
  const [imageBack, setImageBack] = useState();
  const [imageSide, setImageSide] = useState();
  const [imageRc, setImageRc] = useState();
  const [carData, setCarData] = useState({
    modelName: "",
    price: "",
    seatNum: "",
    transmission: "manual",
    fuelType: "petrol",
    rcNumber: "",
    location: "",
  });
  const valueSetting = (e) => {
    setCarData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const closeButtonHandler = () => {
    onClose();
  };
  const submitHandler = () => {
    console.log(carData);
    console.log(imageFront);
    console.log(imageSide);
    console.log(imageBack);
    console.log(imageRc);
    const phots = [imageFront, imageBack, imageSide, imageRc];
    const uploader = phots.map(async (file) => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "rental");
      data.append("cloud_name", "ducziw6jk");
      return axios
        .post("https://api.cloudinary.com/v1_1/ducziw6jk/image/upload", data, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        })
        .then((response) => {
          const data = response.data;
          // You should store this URL for future references in your app
          console.log(data.url);
          // SetUrl([...url, ...data.url]);
          url.push(data.url);
        });
    });
    axios.all(uploader).then(async () => {
      console.log("urls :", url);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      console.log(token);
      const response = await instance.post(
        "/vendor/addCar",
        { carData, url },
        {
          headers,
        }
      );
      console.log("response of sending data ", response);
      url.length = 0;
    });
  };
  // setErrMeg("Every Files are required");

  return (
    <div className="   bg-[#FDD23F] relative w-full lg:w-[60%] my-10 md:my-32 sm:my-20 lg:my-40  xl:my-50 mx-auto z-50  max-w-6xl md:p-10 rounded-2xl">
      <button onClick={closeButtonHandler}>close</button>
      <h1 className="text-center text-4xl  text-gray-900">Add car </h1>
      <div className="">
        {imageUpload ? (
          <AddCarImage
            submitHandler={submitHandler}
            imageFront={imageFront}
            imageBack={imageBack}
            imageSide={imageSide}
            imageRc={imageRc}
            setImageFront={setImageFront}
            setImageBack={setImageBack}
            setImageSide={setImageSide}
            setImageRc={setImageRc}
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
  );
}
