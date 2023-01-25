import React, { useState } from "react";
import ImageUpload from "../UI/ImageUpload";

const AddCarImage = ({
  imageBack,
  imageFront,
  imageSide,
  imageRc,
  setImageRc,
  setImageFront,
  setImageBack,
  setImageSide,
  submitHandler,
}) => {
  const imgUpload = () => {
    if (!imageBack || !imageFront || !imageSide || !imageRc) {
      console.log("every photos is required");
    } else {
      submitHandler();
    }
  };
  return (
    <>
      <div className="lg:grid lg:grid-cols-2    ">
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
      <div className=" w-full flex justify-center ">
        {" "}
        <button
          className="object-right w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
          onClick={imgUpload}
        >
          Submit
        </button>{" "}
      </div>
    </>
  );
};

export default AddCarImage;
