import React from "react";

const Banner = () => {
  return (
    <>
      <video
        src="BMW-M4.mp4"
        loop
        muted=""
        autoPlay
        className="-z-10 w-full h-full  object-cover absolute top-0 left-0"
      ></video>

      <div className=" w-full h-screen grid grid-cols-2 ">
        <div></div>
        <div className=" text-white    mt-40 mr-0 font-Viaoda text-3xl opacity-0 md:opacity-100 md:mr-20 lg:text-8xl lg:mr-20  text-right">
          Why Buy , When You can Rent
        </div>
      </div>
    </>
  );
};

export default Banner;
