import React from "react";
// import image from "../../public/banner.png";

const Banner = (props) => {
      return (
            <div className="lg:h-screen md:h-screen h-screen w-[100%] h-[500px] md:h-[727px] lg:h-[927px] bg-emerald-400">
                  <div className="grid grid-cols-2 h-[70%]">
                        <div className="w-full h-full text-white flex justify-center items-center font-Viaoda text-3xl md:text-6xl lg:text-8xl text-center">
                              From Venue Selection to Event Execution, We’re
                              With You Every Step of the Way!
                        </div>
                        <div></div>
                  </div>

                  {/* <img
          src="../../public/scroll.webp"
          alt="scroll"
          className="z-50 w-20 h-20 md:w-20 md:h-30 lg:w-40 lg:h-40"
        /> */}
            </div>
      );
};

export default Banner;
