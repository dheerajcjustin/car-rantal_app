import React, { useState } from "react";

const ChangeMobile = ({ setChangeMobile }) => {
      const [phone, setPhone] = useState("");
      const otpChangeButton = () => {
            console.log("new number is ", phone);
            setChangeMobile(false);
      };
      return (
            <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F]">
                  <h1 className="font-Viaoda text-5xl mb-10"> Mobile change</h1>
                  <input
                        onChange={(e) => {
                              setPhone(e.target.value);
                        }}
                        // onBlur={nameCheck}
                        type="text"
                        name="phone"
                        value={phone}
                        placeholder="Mobile"
                        className="w-[90%] h-20 mt-10 text-3xl border-2 border-black rounded-3xl text-center"
                  />
                  <button
                        onClick={otpChangeButton}
                        className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
                  >
                        change Mobile
                  </button>
            </div>
      );
};

export default ChangeMobile;
