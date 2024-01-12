import React from "react";

export const LoginLayout = ({ children }) => {
      return (
            <div>
                  {" "}
                  <div className="w-full  grid lg:grid-cols-3 md:grid-cols-5 bg-white">
                        {children}

                        <div className="bg-[#F1F1F1] hidden md:flex  relative flex-col  md:col-span-3 lg:col-span-2">
                              <img
                                    src="login.gif"
                                    alt="LOGIN"
                                    className="object-center w-full max-h-screen"
                              />
                              <h1 className="font-Viaoda text-7xl w-full text-center text-gray-500 absolute top-0   sm:top-2/3">
                                    Make everything easy
                              </h1>
                        </div>
                  </div>
            </div>
      );
};
