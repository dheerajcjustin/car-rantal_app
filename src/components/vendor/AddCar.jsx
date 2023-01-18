import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../UI/ImageUpload";

const AddCar = ({ onClose }) => {
  const dispatch = useDispatch();

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddCar;

function Backdrop({ onClose }) {
  const closeButtonHandler = () => {
    onClose();
  };
  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40  bg-slate-500 bg-opacity-75"
      onClick={closeButtonHandler}
    />
  );
}
function ModalOverlay({ onClose }) {
  const [imageFront, setImageFront] = useState();
  const [imageBack, setImageBack] = useState();
  const [imageSide, setImageSide] = useState();
  const [imageRc, setImageRc] = useState();
  const [carData, setCarData] = useState({
    modelName: "",
    price: "",
    seatNum: "2",
    transmission: "manual",
    fuelType: "petrol",
    rcNumber: "",
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
  };
  return (
    <div className="   bg-[#FDD23F] relative w-auto my-10 md:my-32 sm:my-20 lg:my-40  xl:my-50 mx-auto z-50  max-w-6xl md:p-10 rounded-2xl">
      <button onClick={closeButtonHandler}>close</button>
      <h1 className="text-center text-4xl  text-gray-900">Add car </h1>
      <div className="md:grid md:grid-cols-2">
        <div className="">
          <ImageUpload
            placeholder="Image from the front  "
            image={imageFront}
            SetImage={setImageFront}
          />
          <ImageUpload
            placeholder="Image from the back "
            image={imageBack}
            SetImage={setImageBack}
          />

          <ImageUpload
            placeholder="Image from the side "
            image={imageSide}
            SetImage={setImageSide}
          />
          <ImageUpload
            placeholder="Image from the Registration Certificate "
            image={imageRc}
            SetImage={setImageRc}
          />
        </div>
        <div className=" ">
          <div className="flex w-full mt-8 min-h-[90%]   flex-col items-center justify-center  bg-[#FDD23F]">
            <div className="relative w-full">
              <div className="w-full ml-6">
                <input
                  id="modelName"
                  onChange={valueSetting}
                  value={carData.modelName}
                  type="text"
                  name="modelName"
                  className="w-[90%] h-20 text-3xl border-2 border-black rounded-3xl text-center peer "
                />
                <label
                  htmlFor="modelName"
                  className="absolute left-32 top-[30%] peer-focus:left-16 peer-focus:top-[-10%] bg-white peer-focus:bg-[#FDD23F]  peer-focus:opacity-100  peer-focus:text-sm  rounded-lg px-2  opacity-50 text-3xl transition-all duration-200 "
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
                  className="w-[90%] h-20 text-3xl border-2 border-black rounded-3xl text-center peer "
                />
                <label
                  htmlFor="price"
                  className="absolute left-32 top-[30%] peer-focus:left-16 peer-focus:top-[-10%] bg-white peer-focus:bg-[#FDD23F] peer-focus:opacity-100  peer-focus:text-sm  rounded-lg px-2  opacity-50 text-3xl transition-all duration-200 "
                >
                  Price
                </label>
              </div>
            </div>
            <div className="relative w-full my-10">
              <div className="w-full ml-6">
                <input
                  onChange={valueSetting}
                  value={carData.rcNumber}
                  type="number"
                  name="rcNumber"
                  id="rcNumber"
                  className="w-[90%] h-20 text-3xl border-2 border-black rounded-3xl text-center peer "
                />
                <label
                  htmlFor="rcNumber"
                  className="absolute left-32 top-[30%] peer-focus:left-16 peer-focus:top-[-10%] bg-white peer-focus:bg-[#FDD23F] peer-focus:opacity-100  peer-focus:text-sm  rounded-lg px-2  opacity-50 text-3xl transition-all duration-200 "
                >
                  Rc Number
                </label>
              </div>
            </div>
            <select
              name="seatNum"
              onChange={valueSetting}
              value={carData.seatNum}
              className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
            >
              <option value="">Select Seat Number</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

            <div
              onChange={valueSetting}
              className="w-[90%] h-20 mt-10 text-3xl rounded-3xl text-center  "
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
            {/* {<p>{errMsg}</p>} */}
            <button
              className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
